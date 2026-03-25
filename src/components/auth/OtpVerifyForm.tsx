"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect, KeyboardEvent, ClipboardEvent } from "react";

const OTP_LENGTH = 8;

export function OtpVerifyForm({ email }: { email: string }) {
  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(""));
  const [error, setError] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(0);
  const [resendMessage, setResendMessage] = useState("");
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const router = useRouter();

  // Cooldown timer for resend
  useEffect(() => {
    if (resendCooldown <= 0) return;
    const timer = setTimeout(() => setResendCooldown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [resendCooldown]);

  // Auto-focus first input on mount
  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return; // digits only

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); // take last digit
    setOtp(newOtp);
    setError("");

    // Auto-advance to next input
    if (value && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    // Auto-submit when all digits filled
    if (value && index === OTP_LENGTH - 1 && newOtp.every((d) => d !== "")) {
      submitOtp(newOtp.join(""));
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, OTP_LENGTH);
    if (!pasted) return;

    const newOtp = [...otp];
    for (let i = 0; i < pasted.length; i++) {
      newOtp[i] = pasted[i];
    }
    setOtp(newOtp);
    setError("");

    // Focus the next empty input or the last one
    const nextEmpty = newOtp.findIndex((d) => d === "");
    inputRefs.current[nextEmpty === -1 ? OTP_LENGTH - 1 : nextEmpty]?.focus();

    // Auto-submit if all digits pasted
    if (newOtp.every((d) => d !== "")) {
      submitOtp(newOtp.join(""));
    }
  };

  const submitOtp = async (code: string) => {
    if (isVerifying) return;
    setIsVerifying(true);
    setError("");

    try {
      const res = await fetch("/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, token: code }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Verification failed");
        setOtp(Array(OTP_LENGTH).fill(""));
        inputRefs.current[0]?.focus();
        return;
      }

      router.replace("/invest-success");
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setIsVerifying(false);
    }
  };

  const handleResend = async () => {
    if (resendCooldown > 0) return;
    setResendMessage("");
    setError("");

    try {
      const res = await fetch("/api/auth/resend-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to resend code");
        return;
      }

      setResendMessage("A new code has been sent to your email.");
      setResendCooldown(60);
      setOtp(Array(OTP_LENGTH).fill(""));
      inputRefs.current[0]?.focus();
    } catch {
      setError("Network error. Please try again.");
    }
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-x-hidden bg-white px-4 py-8 sm:px-6 sm:py-12 md:px-12 lg:w-1/2 lg:px-16 max-lg:bg-[url('/assets/signin/signin.png')] max-lg:bg-cover max-lg:bg-center">
      <div className="w-full max-w-[480px] rounded-2xl bg-white/20 p-6 backdrop-blur-[5px] lg:rounded-none lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
        <div className="mb-4 flex items-center justify-center">
          <Image
            src="/assets/brand_assets/logo.png"
            alt=""
            width={96}
            height={96}
            unoptimized
            className="object-contain h-10 w-auto sm:h-12"
          />
        </div>

        <div className="flex justify-center mb-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#8C52FF]/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#8C52FF"
              className="h-8 w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-center text-[24px] font-semibold tracking-tight text-zinc-900 sm:text-[28px]">
          Verify your email
        </h1>
        <p className="mx-auto mt-3 max-w-[360px] text-center text-[14px] leading-relaxed text-zinc-500 sm:text-[15px]">
          We&apos;ve sent a verification code to
          {email ? (
            <>
              {" "}
              <span className="font-medium text-zinc-900">{email}</span>
            </>
          ) : (
            " your email address"
          )}
          . Enter it below to verify your account.
        </p>

        {/* OTP inputs */}
        <div className="mt-8 flex justify-center gap-2 sm:gap-3">
          {otp.map((digit, i) => (
            <input
              key={i}
              ref={(el) => { inputRefs.current[i] = el; }}
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              onPaste={i === 0 ? handlePaste : undefined}
              disabled={isVerifying}
              className={`h-11 w-10 rounded-xl border-2 bg-zinc-50 text-center text-[18px] font-semibold text-zinc-900 outline-none transition-all sm:h-13 sm:w-12 sm:text-[22px] ${
                digit
                  ? "border-[#8C52FF] bg-[#8C52FF]/5"
                  : "border-zinc-200 focus:border-[#8C52FF]"
              } ${error ? "border-red-400 bg-red-50/50" : ""} disabled:opacity-50`}
            />
          ))}
        </div>

        {error && (
          <p className="mt-4 text-center text-[14px] text-red-600">{error}</p>
        )}

        {resendMessage && (
          <p className="mt-4 text-center text-[14px] text-green-600">{resendMessage}</p>
        )}

        {isVerifying && (
          <div className="mt-6 flex justify-center">
            <div className="h-6 w-6 animate-spin rounded-full border-3 border-zinc-200 border-t-[#8C52FF]" />
          </div>
        )}

        <div className="mt-8 rounded-xl bg-zinc-50 px-5 py-4 text-[13px] leading-relaxed text-zinc-500 sm:text-[14px]">
          <p className="font-medium text-zinc-700 mb-1">Didn&apos;t receive the code?</p>
          <ul className="list-disc pl-4 space-y-1">
            <li>Check your spam or junk folder</li>
            <li>Make sure you entered the correct email</li>
            <li>
              <button
                type="button"
                onClick={handleResend}
                disabled={resendCooldown > 0}
                className="font-medium underline disabled:no-underline disabled:opacity-60"
                style={{ color: resendCooldown > 0 ? undefined : "#8C52FF" }}
              >
                {resendCooldown > 0
                  ? `Resend code in ${resendCooldown}s`
                  : "Resend code"}
              </button>
            </li>
          </ul>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/signin"
            className="inline-block w-full cursor-pointer rounded-full border-2 border-[#f7efff80] bg-[#a36af6] px-4 py-2.5 text-[13px] font-medium text-white shadow-[inset_0_4px_14px_white] transition-colors hover:bg-[#6d28d9] sm:px-[20px] sm:py-[10px] sm:text-[16px] md:px-[30px] md:py-5 md:text-[18px]"
          >
            Go to Sign In
          </Link>
        </div>

        <p className="mt-5 text-center text-[13px] text-zinc-500 sm:mt-6 sm:text-[14px]">
          Need help?{" "}
          <a
            href="mailto:acquire@khbrokers.com"
            className="cursor-pointer font-medium underline"
            style={{ color: "#8C52FF" }}
          >
            acquire@khbrokers.com
          </a>
        </p>
      </div>
    </div>
  );
}
