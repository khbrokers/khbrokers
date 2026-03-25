import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

/**
 * Handles the email confirmation callback from Supabase.
 * Supabase redirects here with token_hash and type query params.
 * After verifying, the user is redirected to the success page.
 */
export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const token_hash = searchParams.get("token_hash");
  const type = searchParams.get("type");

  if (!token_hash || !type) {
    const errorUrl = req.nextUrl.clone();
    errorUrl.pathname = "/signin";
    errorUrl.searchParams.set("error", "invalid_link");
    return NextResponse.redirect(errorUrl);
  }

  const { data, error } = await getSupabase().auth.verifyOtp({
    token_hash,
    type: type as "signup" | "email",
  });

  if (error || !data.session) {
    const errorUrl = req.nextUrl.clone();
    errorUrl.pathname = "/signin";
    errorUrl.searchParams.set("error", "confirmation_failed");
    return NextResponse.redirect(errorUrl);
  }

  // Email confirmed and session created — set auth cookies
  const successUrl = req.nextUrl.clone();
  successUrl.pathname = "/invest-success";
  successUrl.search = "";

  const response = NextResponse.redirect(successUrl);

  response.cookies.set("access_token", data.session.access_token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60,
  });

  response.cookies.set("refresh_token", data.session.refresh_token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return response;
}
