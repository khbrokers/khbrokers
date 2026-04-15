import { NextRequest, NextResponse } from "next/server";

const PROTECTED_PATHS: string[] = [];
const AUTH_PATHS = ["/signin", "/signup", "/signup/confirm-email"];
const INVEST_SUBDOMAIN = "invest";

function getMainDomainUrl(hostname: string, protocol: string) {
  const parts = hostname.split(".");
  const domain = parts.slice(1).join(".");
  return `${protocol}//${domain}`;
}

/** Check if a JWT token is still valid (not expired) without verifying the signature. */
function isTokenValid(token: string): boolean {
  try {
    const parts = token.split(".");
    if (parts.length !== 3) return false;
    const payload = JSON.parse(atob(parts[1]));
    if (!payload.exp) return false;
    // Token is valid if expiry is in the future (with 30s buffer)
    return payload.exp * 1000 > Date.now() + 30_000;
  } catch {
    return false;
  }
}

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const hostname = req.headers.get("host") || "";
  const protocol = req.nextUrl.protocol;
  const isSubdomain = hostname.startsWith(`${INVEST_SUBDOMAIN}.`);

  // === SUBDOMAIN LOGIC (invest.khbrokers.com) ===
  if (isSubdomain) {
    // invest.khbrokers.com/ → rewrite to show /invest page
    if (pathname === "/") {
      const url = req.nextUrl.clone();
      url.pathname = "/invest";
      return NextResponse.rewrite(url);
    }
    // invest.khbrokers.com/invest-2 → rewrite to show /invest-2 page
    if (pathname === "/invest-2") {
      return NextResponse.next();
    }
    // invest.khbrokers.com/invest → clean URL, redirect to root
    if (pathname === "/invest") {
      const url = req.nextUrl.clone();
      url.pathname = "/";
      return NextResponse.redirect(url);
    }
    // Any other path on subdomain → redirect to main domain
    const mainUrl = getMainDomainUrl(hostname, protocol);
    return NextResponse.redirect(`${mainUrl}${pathname}`);
  }

  // === MAIN DOMAIN LOGIC ===
  // Redirect /invest to invest subdomain (clean URL, no /invest path)
  if (pathname === "/invest" || pathname === "/invest-2") {
    const parts = hostname.split(":");
    const domain = parts[0];
    const port = parts[1] ? `:${parts[1]}` : "";
    const url = req.nextUrl.clone();
    url.host = `${INVEST_SUBDOMAIN}.${domain}${port}`;
    // /invest → invest.khbrokers.com (root), /invest-2 → invest.khbrokers.com/invest-2
    url.pathname = pathname === "/invest" ? "/" : "/invest-2";
    return NextResponse.redirect(url);
  }

  const accessToken = req.cookies.get("access_token")?.value;
  const refreshToken = req.cookies.get("refresh_token")?.value;
  const isLoggedIn = !!(accessToken && isTokenValid(accessToken));

  // Redirect logged-in users away from auth pages
  if (isLoggedIn && AUTH_PATHS.includes(pathname)) {
    const redirect = req.nextUrl.searchParams.get("redirect");
    const dest = req.nextUrl.clone();
    dest.pathname = redirect || "/deals";
    dest.searchParams.delete("redirect");
    return NextResponse.redirect(dest);
  }

  // Protect routes that require auth
  const isProtected = PROTECTED_PATHS.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`)
  );

  if (!isProtected) return NextResponse.next();

  if (isLoggedIn) {
    return NextResponse.next();
  }

  const signInUrl = req.nextUrl.clone();
  signInUrl.pathname = "/signin";
  signInUrl.searchParams.set("redirect", pathname);
  return NextResponse.redirect(signInUrl);
}

export const config = {
  matcher: ["/((?!_next|api|assets|favicon).*)"],
};
