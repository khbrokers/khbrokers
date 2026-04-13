import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const { email, redirect } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const origin = req.headers.get("origin") || process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    const updateUrl = redirect && typeof redirect === "string" && redirect.startsWith("/") && redirect !== "/"
      ? `${origin}/reset-password/update?redirect=${encodeURIComponent(redirect)}`
      : `${origin}/reset-password/update`;

    const admin = getSupabaseAdmin();

    const { error } = await admin.auth.resetPasswordForEmail(email, {
      redirectTo: updateUrl,
    });

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
