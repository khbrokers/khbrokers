"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, FormEvent } from "react";

const PURPLE = "#8C52FF";

export function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") || "/";
  const urlError = searchParams.get("error");

  const confirmationMessage =
    urlError === "invalid_link"
      ? "Invalid confirmation link. Please try signing up again."
      : urlError === "confirmation_failed"
        ? "Email confirmation failed or link expired. Please try signing up again."
        : null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password || isSubmitting) return;
    setError("");
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong");
        return;
      }

      router.push(redirectTo);
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-x-hidden bg-white px-4 py-8 sm:px-6 sm:py-12 md:px-12 lg:w-1/2 lg:px-16 max-lg:bg-[url('/assets/signin/signin.png')] max-lg:bg-cover max-lg:bg-center">
      <div className="w-full max-w-[380px] rounded-2xl bg-white/20 p-4 backdrop-blur-[5px] lg:rounded-none lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
        {/* Logo + branding */}
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
          Welcome Back!
        </h1>
        <p className="mt-1.5 sm:mt-2 text-[14px] sm:text-[15px] text-zinc-500 w-fit mx-auto">Login to Your Account</p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
          {confirmationMessage && (
            <div className="rounded-xl bg-amber-50 px-4 py-3 text-[14px] text-amber-700">
              {confirmationMessage}
            </div>
          )}
          {error && (
            <div className="rounded-xl bg-red-50 px-4 py-3 text-[14px] text-red-600">
              {error}
            </div>
          )}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            required
            className="w-full rounded-2xl border-0 bg-zinc-100 px-4 py-3.5 text-[15px] text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#8C52FF]/30 sm:px-5 sm:py-4"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            required
            className="w-full rounded-2xl border-0 bg-zinc-100 px-4 py-3.5 text-[15px] text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#8C52FF]/30 sm:px-5 sm:py-4"
          />

          <div className="flex justify-end">
            <Link
              href="/reset-password"
              className="text-[13px] font-medium sm:text-[14px]"
              style={{ color: PURPLE }}
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full cursor-pointer rounded-full border-2 border-[#f7efff80] bg-[#a36af6] px-4 py-3 text-[14px] font-medium text-white shadow-[inset_0_4px_14px_white] transition-colors hover:bg-[#6d28d9] disabled:cursor-not-allowed disabled:opacity-70 sm:px-[20px] sm:py-[10px] sm:text-[16px] md:px-[30px] md:py-5 md:text-[18px]"
          >
            {isSubmitting ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="mt-5 text-center text-[13px] sm:mt-6 sm:text-[14px] text-zinc-500">
          Don&apos;t have an account{" "}
          <Link
            href="/signup"
            className="cursor-pointer font-medium underline"
            style={{ color: PURPLE }}
          >
            sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
