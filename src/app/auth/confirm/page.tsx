"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * Legacy email confirmation redirect handler.
 * OTP verification is now used instead of confirmation links.
 * This page redirects users to sign in if they land here via an old link.
 */
export default function ConfirmEmailPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/signin");
  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="text-center">
        <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-zinc-200 border-t-[#8C52FF]" />
        <p className="mt-4 text-zinc-600">Redirecting...</p>
      </div>
    </div>
  );
}
