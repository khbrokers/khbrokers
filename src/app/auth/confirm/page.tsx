"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getSupabase } from "@/lib/supabase";

/**
 * Handles the email confirmation callback from Supabase.
 * Supabase redirects here with tokens in the URL hash fragment (implicit flow).
 * This client page reads the hash, sets the session, then stores cookies via API.
 */
export default function ConfirmEmailPage() {
  const router = useRouter();
  const [error, setError] = useState("");

  useEffect(() => {
    async function handleConfirm() {
      const hash = window.location.hash.substring(1);
      const params = new URLSearchParams(hash);

      const accessToken = params.get("access_token");
      const refreshToken = params.get("refresh_token");

      if (!accessToken || !refreshToken) {
        router.replace("/signin?error=invalid_link");
        return;
      }

      // Set the session in the Supabase client
      const { error: sessionError } = await getSupabase().auth.setSession({
        access_token: accessToken,
        refresh_token: refreshToken,
      });

      if (sessionError) {
        router.replace("/signin?error=confirmation_failed");
        return;
      }

      // Store tokens as httpOnly cookies via API
      const res = await fetch("/api/auth/set-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_token: accessToken,
          refresh_token: refreshToken,
        }),
      });

      if (!res.ok) {
        router.replace("/signin?error=confirmation_failed");
        return;
      }

      router.replace("/invest-success");
    }

    handleConfirm();
  }, [router]);

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-zinc-200 border-t-[#8C52FF]" />
        <p className="mt-4 text-zinc-600">Confirming your email...</p>
      </div>
    </div>
  );
}
