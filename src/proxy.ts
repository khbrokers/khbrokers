import { NextRequest, NextResponse } from "next/server";

const PROTECTED_PATHS: string[] = [];
const AUTH_PATHS = ["/signin", "/signup"];

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const accessToken = req.cookies.get("access_token")?.value;
  const refreshToken = req.cookies.get("refresh_token")?.value;
  const isLoggedIn = !!(accessToken || refreshToken);

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
  matcher: ["/signin", "/signup"],
};
