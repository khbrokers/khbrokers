import { NextRequest, NextResponse } from "next/server";
import { getSupabase, getSupabaseAdmin } from "@/lib/supabase";
import { addToMailchimp } from "@/lib/mailchimp";

export async function POST(req: NextRequest) {
  try {
    const {
      name,
      email,
      phone,
      password,
      budget,
      ownership,
      lookingFor,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_content,
      utm_term,
      gclid,
      utm_adgroup,
      utm_device,
      utm_loc_physical,
      signup_page,
      user_type,
    } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Name, email, and password are required" },
        { status: 400 }
      );
    }

    // 1. SIGN UP USER
    const { data: authData, error: authError } =
      await getSupabase().auth.signUp({
        email,
        password,
        options: {
          data: { name },
        },
      });

    // 2. HANDLE AUTH ERROR
    if (authError) {
      const msg = authError.message?.toLowerCase() || "";

      if (
        msg.includes("already") ||
        msg.includes("registered") ||
        msg.includes("exists")
      ) {
        return NextResponse.json(
          {
            error: "Account already exists. Please sign in.",
            code: "ACCOUNT_EXISTS",
          },
          { status: 409 }
        );
      }

      return NextResponse.json(
        { error: authError.message },
        { status: 400 }
      );
    }

    if (!authData?.user) {
      return NextResponse.json(
        { error: "Signup failed. Please try again." },
        { status: 500 }
      );
    }

    // 3. DETECT EXISTING USER (Supabase returns identities: [] for duplicate emails)
    if (authData.user.identities && authData.user.identities.length === 0) {
      return NextResponse.json(
        {
          error: "Account already exists. Please sign in.",
          code: "ACCOUNT_EXISTS",
        },
        { status: 409 }
      );
    }

    const userId = authData.user.id;

    // 4. CREATE PROFILE
    const { error: profileError } = await getSupabaseAdmin()
      .from("profiles")
      .insert({
        id: userId,
        name,
        email,
        phone: phone || null,
        budget: budget || null,
        ownership: ownership || null,
        looking_for: lookingFor || null,
        user_type: user_type || null,
      });

    if (profileError) {
      console.error("PROFILE INSERT FAILED:", profileError);

      // Fallback: duplicate profile = user already exists
      if (profileError.code === "23505") {
        return NextResponse.json(
          {
            error: "Account already exists. Please sign in.",
            code: "ACCOUNT_EXISTS",
          },
          { status: 409 }
        );
      }

      return NextResponse.json(
        {
          error: "Profile creation failed",
          debug: profileError,
        },
        { status: 500 }
      );
    }

    // 5. MAILCHIMP (NON-BLOCKING)
    addToMailchimp({
      email,
      name,
      phone,
      budget,
      ownership,
      lookingFor,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_content,
      utm_term,
      gclid,
      utm_adgroup,
      utm_device,
      utm_loc_physical,
      signup_page,
    }).catch((err) => {
      console.error("Mailchimp subscribe failed:", err);
    });

    // 6. SUCCESS RESPONSE
    return NextResponse.json(
      {
        message: "Account created. Please check your email to confirm.",
        userId,
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("SIGNUP ERROR:", err);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}