"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const PURPLE = "#8C52FF";

export function UpdatePasswordForm() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [tokens, setTokens] = useState<{ access_token: string; refresh_token: string } | null>(null);
  const [expired, setExpired] = useState(false);
  const [postAuthRedirect, setPostAuthRedirect] = useState<string | null>(null);

  useEffect(() => {
    const fromQuery = new URLSearchParams(window.location.search).get("redirect");
    const stored = sessionStorage.getItem("postAuthRedirect");
    const redirect = fromQuery || stored;
    if (redirect && redirect !== "/" && redirect.startsWith("/")) {
      setPostAuthRedirect(redirect);
    }
  }, []);

  const signInHref = postAuthRedirect
    ? `/signin?redirect=${encodeURIComponent(postAuthRedirect)}`
    : "/signin";

  const inputClass =
    "w-full rounded-2xl border-0 bg-zinc-100 px-4 py-3.5 text-[15px] text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#8C52FF]/30 sm:px-5 sm:py-4";

  // Extract tokens from the URL hash fragment on mount
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    const access_token = params.get("access_token");
    const refresh_token = params.get("refresh_token");

    if (access_token && refresh_token) {
      setTokens({ access_token, refresh_token });
      // Clean the URL
      window.history.replaceState(null, "", window.location.pathname);
    } else {
      setExpired(true);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPassword || !confirmPassword || isSubmitting || !tokens) return;

    if (newPassword.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/auth/update-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_token: tokens.access_token,
          refresh_token: tokens.refresh_token,
          password: newPassword,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong");
        return;
      }

      setSuccess(true);
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-x-hidden bg-white px-4 py-8 sm:px-6 sm:py-12 md:px-12 lg:w-1/2 lg:px-16 max-lg:bg-[url('/assets/signin/signin.png')] max-lg:bg-cover max-lg:bg-center">
      <div className="w-full max-w-[380px] rounded-2xl bg-white/20 p-4 backdrop-blur-[5px] lg:rounded-none lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-2 sm:mb-3 md:mb-4">
          <Image
            src="/assets/brand_assets/logo.png"
            alt=""
            width={96}
            height={96}
            unoptimized
            className="object-contain h-10 w-auto sm:h-12"
          />
        </div>

        <h1 className="mt-6 text-[24px] font-semibold tracking-tight w-fit mx-auto text-zinc-900 sm:mt-10 sm:text-[28px] md:text-[30px]">
          {success ? "All Done!" : expired ? "Link Expired" : "New Password"}
        </h1>
        <p className="mt-1.5 sm:mt-2 text-[14px] sm:text-[15px] text-zinc-500 w-fit mx-auto text-center">
          {success && "Your password has been updated successfully"}
          {expired && "This reset link is invalid or has expired"}
          {!success && !expired && "Choose a new password for your account"}
        </p>

        {success ? (
          <div className="mt-6 sm:mt-8">
            <div className="rounded-2xl bg-green-50 px-5 py-6 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="#22c55e"
                  className="h-7 w-7"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <p className="text-[15px] font-medium text-zinc-900">
                Password updated
              </p>
              <p className="mt-2 text-[13px] text-zinc-500">
                You can now sign in with your new password.
              </p>
            </div>
            <Link
              href={signInHref}
              onClick={() => sessionStorage.removeItem("postAuthRedirect")}
              className="mt-5 block w-full cursor-pointer rounded-full border-2 border-[#f7efff80] bg-[#a36af6] px-4 py-3 text-center text-[14px] font-medium text-white shadow-[inset_0_4px_14px_white] transition-colors hover:bg-[#6d28d9] sm:px-5 sm:py-2.5 sm:text-[16px] md:px-7.5 md:py-5 md:text-[18px]"
            >
              Sign In
            </Link>
          </div>
        ) : expired ? (
          <div className="mt-6 sm:mt-8">
            <div className="rounded-2xl bg-zinc-50 px-5 py-6 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#ef4444"
                  className="h-7 w-7"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
              </div>
              <p className="mt-2 text-[13px] text-zinc-500">
                Please request a new password reset link.
              </p>
            </div>
            <Link
              href="/reset-password"
              className="mt-5 block w-full cursor-pointer rounded-full border-2 border-[#f7efff80] bg-[#a36af6] px-4 py-3 text-center text-[14px] font-medium text-white shadow-[inset_0_4px_14px_white] transition-colors hover:bg-[#6d28d9] sm:px-5 sm:py-2.5 sm:text-[16px] md:px-7.5 md:py-5 md:text-[18px]"
            >
              Request New Link
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
            {error && (
              <div className="rounded-xl bg-red-50 px-4 py-3 text-[14px] text-red-600">
                {error}
              </div>
            )}
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="New password"
              required
              minLength={6}
              className={inputClass}
            />
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
              required
              minLength={6}
              className={inputClass}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full cursor-pointer rounded-full border-2 border-[#f7efff80] bg-[#a36af6] px-4 py-3 text-[14px] font-medium text-white shadow-[inset_0_4px_14px_white] transition-colors hover:bg-[#6d28d9] disabled:cursor-not-allowed disabled:opacity-70 sm:px-5 sm:py-2.5 sm:text-[16px] md:px-7.5 md:py-5 md:text-[18px]"
            >
              {isSubmitting ? "Updating..." : "Update Password"}
            </button>
          </form>
        )}

        <p className="mt-5 text-center text-[13px] sm:mt-6 sm:text-[14px] text-zinc-500">
          Remember your password?{" "}
          <Link
            href={signInHref}
            className="cursor-pointer font-medium underline"
            style={{ color: PURPLE }}
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
