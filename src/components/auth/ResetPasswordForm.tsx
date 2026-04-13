"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const PURPLE = "#8C52FF";

export function ResetPasswordForm() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [redirectTo, setRedirectTo] = useState<string | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("postAuthRedirect");
    if (stored && stored !== "/") setRedirectTo(stored);
  }, []);

  const signInHref = redirectTo
    ? `/signin?redirect=${encodeURIComponent(redirectTo)}`
    : "/signin";

  const inputClass =
    "w-full rounded-2xl border-0 bg-zinc-100 px-4 py-3.5 text-[15px] text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#8C52FF]/30 sm:px-5 sm:py-4";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || isSubmitting) return;
    setError("");
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, redirect: redirectTo }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong");
        return;
      }

      setEmailSent(true);
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResend = async () => {
    setEmailSent(false);
    setError("");
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
          Reset Password
        </h1>
        <p className="mt-1.5 sm:mt-2 text-[14px] sm:text-[15px] text-zinc-500 w-fit mx-auto text-center">
          {emailSent
            ? "Check your email for a reset link"
            : "Enter your email to receive a reset link"}
        </p>

        {emailSent ? (
          <div className="mt-6 sm:mt-8">
            {/* Email sent confirmation */}
            <div className="rounded-2xl bg-zinc-50 px-5 py-6 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#8C52FF]/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke={PURPLE}
                  className="h-7 w-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <p className="text-[15px] font-medium text-zinc-900">
                We sent a reset link to
              </p>
              <p className="mt-1 text-[14px] font-medium" style={{ color: PURPLE }}>
                {email}
              </p>
              <p className="mt-3 text-[13px] text-zinc-500">
                Click the link in the email to set a new password. If you don&apos;t see it, check your spam folder.
              </p>
            </div>

            <p className="mt-5 text-center text-[13px] text-zinc-500 sm:text-[14px]">
              Didn&apos;t receive the email?{" "}
              <button
                type="button"
                onClick={handleResend}
                className="cursor-pointer font-medium underline"
                style={{ color: PURPLE }}
              >
                Try again
              </button>
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
            {error && (
              <div className="rounded-xl bg-red-50 px-4 py-3 text-[14px] text-red-600">
                {error}
              </div>
            )}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@example.com"
              required
              className={inputClass}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full cursor-pointer rounded-full border-2 border-[#f7efff80] bg-[#a36af6] px-4 py-3 text-[14px] font-medium text-white shadow-[inset_0_4px_14px_white] transition-colors hover:bg-[#6d28d9] disabled:cursor-not-allowed disabled:opacity-70 sm:px-[20px] sm:py-[10px] sm:text-[16px] md:px-[30px] md:py-5 md:text-[18px]"
            >
              {isSubmitting ? "Sending..." : "Send Reset Link"}
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
