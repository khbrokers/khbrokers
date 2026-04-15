import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const accessToken = req.cookies.get("access_token")?.value;
    if (!accessToken) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { data: userData, error: authError } =
      await getSupabaseAdmin().auth.getUser(accessToken);

    if (authError || !userData.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { user_type } = await req.json();

    if (!user_type || !["buyer", "seller"].includes(user_type)) {
      return NextResponse.json(
        { error: "Invalid user type" },
        { status: 400 }
      );
    }

    const { error: updateError } = await getSupabaseAdmin()
      .from("profiles")
      .update({ user_type })
      .eq("id", userData.user.id);

    if (updateError) {
      return NextResponse.json(
        { error: "Failed to update user type" },
        { status: 500 }
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
