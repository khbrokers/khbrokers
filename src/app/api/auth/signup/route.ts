import { NextRequest, NextResponse } from "next/server";
import { getSupabase, getSupabaseAdmin } from "@/lib/supabase";
import { addToMailchimp } from "@/lib/mailchimp";

export async function POST(req: NextRequest) {
  try {
    const {
      name, email, phone, password, budget, ownership, lookingFor,
      utm_source, utm_medium, utm_campaign, utm_content, utm_term,
      gclid, utm_adgroup, utm_device, utm_loc_physical,
      signup_page, user_type,
    } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Name, email, and password are required" },
        { status: 400 }
      );
    }

    // 1. Create user via regular signUp — Supabase sends a 6-digit OTP code via email
    const { data: authData, error: authError } =
      await getSupabase().auth.signUp({
        email,
        password,
        options: {
          data: { name },
        },
      });

    if (authError) {
      const message =
        authError.message === "User already registered"
          ? "An account with this email already exists"
          : authError.message;
      return NextResponse.json({ error: message }, { status: 400 });
    }

    if (!authData.user) {
      return NextResponse.json(
        { error: "Failed to create account. Please try again." },
        { status: 500 }
      );
    }

    // 2. Store profile data (use admin client to bypass RLS)
    // const { error: profileError } = await getSupabaseAdmin()
    //   .from("profiles")
    //   .insert({
    //     id: authData.user.id,
    //     name,
    //     email,
    //     phone: phone || null,
    //     budget: budget || null,
    //     ownership: ownership || null,
    //     looking_for: lookingFor || null,
    //     user_type: user_type || null,
    //   });

    // if (profileError) {
    //   // Rollback: delete the auth user if profile insert fails
    //   try {
    //     await getSupabaseAdmin().auth.admin.deleteUser(authData.user.id);
    //   } catch (deleteError) {
    //     // Log but don't fail - user may not exist or already deleted
    //     console.error('Failed to delete auth user during rollback:', deleteError);
    //   }
    //   return NextResponse.json(
    //     { error: "Failed to create profile. Please try again." },
    //     { status: 500 }
    //   );
    // }
    
    const userId = authData.user.id;

// 1. Check if profile exists
const { data: existingProfile, error: checkError } = await getSupabaseAdmin()
  .from("profiles")
  .select("id")
  .eq("id", userId)
  .maybeSingle();

if (checkError) {
  console.error("Profile check error:", checkError);
}

if (existingProfile) {
  return NextResponse.json(
    {
      message: "Account already exists. Please sign in.",
      code: "PROFILE_EXISTS",
    },
    { status: 200 }
  );
}

      // 2. Insert profile
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

        return NextResponse.json(
          {
            error: "Failed to create profile. Please try again.",
            debug: profileError,
          },
          { status: 500 }
        );
      }

    // 3. Add to Mailchimp (non-blocking — don't fail signup if this errors)
    addToMailchimp({
      email, name, phone, budget, ownership, lookingFor,
      utm_source, utm_medium, utm_campaign, utm_content, utm_term,
      gclid, utm_adgroup, utm_device, utm_loc_physical,
      signup_page,
    }).catch(
      (err) => console.error("Mailchimp subscribe failed:", err)
    );

    // 4. Return success — user must confirm email before signing in
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
