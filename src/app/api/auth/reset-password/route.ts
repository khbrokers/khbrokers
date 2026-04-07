import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const origin = req.headers.get("origin") || process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    console.log("Reset password attempt for:", email);
    console.log("Redirect URL:", `${origin}/reset-password/update`);
    console.log("Supabase URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);

    const admin = getSupabaseAdmin();

    // First check if user exists
    const { data: userData, error: listError } = await admin.auth.admin.listUsers();
    const user = userData?.users?.find(u => u.email === email);
    console.log("User found:", !!user, user?.id, user?.email_confirmed_at);

    const { data, error } = await admin.auth.resetPasswordForEmail(email, {
      redirectTo: `${origin}/reset-password/update`,
    });

    console.log("Reset result - data:", JSON.stringify(data));
    console.log("Reset result - error:", error ? JSON.stringify(error) : "none");

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
