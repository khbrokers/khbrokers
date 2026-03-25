import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";
import { addToMailchimp } from "@/lib/mailchimp";
import { siteConfig } from "@/config/site.config";

export async function POST(req: NextRequest) {
  try {
    const {
      name, email, phone, password, budget, ownership, lookingFor,
      utm_source, utm_medium, utm_campaign, utm_content, utm_term,
      signup_page, user_type,
    } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Name, email, and password are required" },
        { status: 400 }
      );
    }

    // 1. Create user in Supabase Auth (email_confirm: false so a confirmation email is sent)
    const { data: authData, error: authError } =
      await getSupabaseAdmin().auth.admin.createUser({
        email,
        password,
        email_confirm: false,
        user_metadata: { name },
      });

    if (authError) {
      const message =
        authError.message === "A user with this email address has already been registered"
          ? "An account with this email already exists"
          : authError.message;
      return NextResponse.json({ error: message }, { status: 400 });
    }

    // 2. Store profile data
    const { error: profileError } = await getSupabaseAdmin()
      .from("profiles")
      .insert({
        id: authData.user.id,
        name,
        email,
        phone: phone || null,
        budget: budget || null,
        ownership: ownership || null,
        looking_for: lookingFor || null,
        user_type: user_type || null,
      });

    if (profileError) {
      // Rollback: delete the auth user if profile insert fails
      await getSupabaseAdmin().auth.admin.deleteUser(authData.user.id);
      return NextResponse.json(
        { error: "Failed to create profile. Please try again." },
        { status: 500 }
      );
    }

    // 3. Send confirmation email via Supabase (uses the built-in email template)
    const { error: inviteError } =
      await getSupabaseAdmin().auth.admin.generateLink({
        type: "signup",
        email,
        password,
        options: {
          redirectTo: `${siteConfig.url}/auth/confirm`,
        },
      });

    if (inviteError) {
      console.error("Failed to send confirmation email:", inviteError);
    }

    // 4. Add to Mailchimp (non-blocking — don't fail signup if this errors)
    addToMailchimp({
      email, name, phone, budget, ownership, lookingFor,
      utm_source, utm_medium, utm_campaign, utm_content, utm_term,
      signup_page,
    }).catch(
      (err) => console.error("Mailchimp subscribe failed:", err)
    );

    // 5. Return success — user must confirm email before signing in
    return NextResponse.json(
      {
        message: "Account created. Please check your email to confirm your account.",
        requiresConfirmation: true,
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
