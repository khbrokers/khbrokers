import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const { error } = await getSupabase().auth.resend({
      type: "signup",
      email,
    });

    if (error) {
      return NextResponse.json(
        { error: "Failed to resend code. Please try again." },
        { status: 400 }
      );
    }

    return NextResponse.json({
      message: "A new verification code has been sent to your email.",
    });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
