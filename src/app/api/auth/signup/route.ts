import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";
import { addToMailchimp } from "@/lib/mailchimp";

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

    // 1. Create user in Supabase Auth
    const { data: authData, error: authError } =
      await getSupabaseAdmin().auth.admin.createUser({
        email,
        password,
        email_confirm: true,
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

    // 3. Add to Mailchimp (non-blocking — don't fail signup if this errors)
    addToMailchimp({
      email, name, phone, budget, ownership, lookingFor,
      utm_source, utm_medium, utm_campaign, utm_content, utm_term,
      signup_page,
    }).catch(
      (err) => console.error("Mailchimp subscribe failed:", err)
    );

    // 4. Sign in the user to get tokens
    const { data: signInData, error: signInError } =
      await getSupabaseAdmin().auth.signInWithPassword({ email, password });

    if (signInError) {
      return NextResponse.json(
        { error: "Account created but sign-in failed. Please sign in manually." },
        { status: 201 }
      );
    }

    // 5. Set tokens in httpOnly cookies
    const response = NextResponse.json(
      {
        user: {
          id: authData.user.id,
          email: authData.user.email,
          name,
        },
      },
      { status: 201 }
    );

    response.cookies.set("access_token", signInData.session.access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60, // 1 hour
    });

    response.cookies.set("refresh_token", signInData.session.refresh_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return response;
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
