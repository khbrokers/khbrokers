import { NextRequest, NextResponse } from "next/server";
import { addToMailchimp } from "@/lib/mailchimp";

export async function POST(req: NextRequest) {
  try {
    const {
      email, name, phone, budget, signup_page,
      utm_source, utm_medium, utm_campaign, utm_content, utm_term,
    } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const result = await addToMailchimp({
      email, name, phone, budget, signup_page,
      utm_source, utm_medium, utm_campaign, utm_content, utm_term,
    });

    if (!result.success) {
      return NextResponse.json(
        { error: result.error || "Failed to subscribe" },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      alreadyExists: result.alreadyExists || false,
    });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
