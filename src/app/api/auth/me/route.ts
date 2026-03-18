import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

export async function GET(req: NextRequest) {
  const accessToken = req.cookies.get("access_token")?.value;
  const refreshToken = req.cookies.get("refresh_token")?.value;

  if (!accessToken) {
    return NextResponse.json({ user: null }, { status: 401 });
  }

  // Verify the access token
  const { data: userData, error } =
    await getSupabaseAdmin().auth.getUser(accessToken);

  if (!error && userData.user) {
    const { data: profile } = await getSupabaseAdmin()
      .from("profiles")
      .select("name, phone, budget, ownership, looking_for, user_type")
      .eq("id", userData.user.id)
      .single();

    return NextResponse.json({
      user: {
        id: userData.user.id,
        email: userData.user.email,
        name: profile?.name || userData.user.user_metadata?.name || null,
        user_type: profile?.user_type || null,
      },
    });
  }

  // Access token expired — try refreshing
  if (refreshToken) {
    const { data: refreshData, error: refreshError } =
      await getSupabaseAdmin().auth.refreshSession({ refresh_token: refreshToken });

    if (!refreshError && refreshData.session && refreshData.user) {
      const { data: profile } = await getSupabaseAdmin()
        .from("profiles")
        .select("name, phone, budget, ownership, looking_for, user_type")
        .eq("id", refreshData.user.id)
        .single();

      const response = NextResponse.json({
        user: {
          id: refreshData.user.id,
          email: refreshData.user.email,
          name: profile?.name || refreshData.user.user_metadata?.name || null,
        },
      });

      // Set new tokens
      response.cookies.set("access_token", refreshData.session.access_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60,
      });

      response.cookies.set("refresh_token", refreshData.session.refresh_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      });

      return response;
    }
  }

  // Both tokens invalid
  const response = NextResponse.json({ user: null }, { status: 401 });
  response.cookies.set("access_token", "", { path: "/", maxAge: 0 });
  response.cookies.set("refresh_token", "", { path: "/", maxAge: 0 });
  return response;
}
