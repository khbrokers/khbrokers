"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, FormEvent } from "react";
import { siteConfig } from "@/config/site.config";

const PURPLE = "#8C52FF";

const BUDGET_OPTIONS = [
  "Select budget",
  "$50k - $100k",
  "$100k - $250k",
  "$250k - $500k",
  "$500k - $1M",
  "$1M+",
];

const OWNERSHIP_OPTIONS = [
  "Select structure",
  "Sole proprietorship",
  "LLC",
  "Corporation",
  "Partnership",
];

export function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [budget, setBudget] = useState("");
  const [ownership, setOwnership] = useState("");
  const [lookingFor, setLookingFor] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    // TODO: wire to API
    setTimeout(() => setIsSubmitting(false), 1000);
  };

  const inputClass =
    "w-full rounded-2xl border-0 bg-zinc-100 px-4 py-3.5 text-[15px] text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#8C52FF]/30 sm:px-5 sm:py-4";

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-x-hidden bg-white px-4 py-8 sm:px-6 sm:py-12 md:px-12 lg:w-1/2 lg:px-16 max-lg:bg-[url('/assets/signin/signin.png')] max-lg:bg-cover max-lg:bg-center">
      <div className="w-full max-w-[480px] rounded-2xl bg-white/20 p-4 backdrop-blur-[5px] lg:rounded-none lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
        {/* Logo + branding */}
        <div className="mb-2 flex items-center justify-center gap-3 sm:mb-3 md:mb-4">
          <Image
            src="/assets/brand_assets/logo.png"
            alt=""
            width={96}
            height={96}
            unoptimized
            className="object-contain h-10 w-auto sm:h-12"
          />
        </div>

        <h1 className="mx-auto mt-6 w-fit text-[24px] font-semibold tracking-tight text-zinc-900 sm:mt-10 sm:text-[28px] md:text-[30px]">
          Create your account
        </h1>
        <p className="mx-auto mt-1.5 w-fit text-[14px] text-zinc-500 sm:mt-2 sm:text-[15px]">
          Get Started with KH Brokers
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4 sm:mt-8">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
            className={inputClass}
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@example.com"
              required
              className={inputClass}
            />
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+0123456789"
              className={inputClass}
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              required
              className={inputClass + " cursor-pointer"}
            >
              {BUDGET_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <select
              value={ownership}
              onChange={(e) => setOwnership(e.target.value)}
              required
              className={inputClass + " cursor-pointer"}
            >
              {OWNERSHIP_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-3 rounded-2xl bg-zinc-900/4 p-4 sm:flex-row sm:gap-4 md:mb-4 md:p-5">
            <label className="shrink-0 text-[14px] font-medium text-zinc-700 sm:w-2/5">
              What Are You Looking For?
            </label>
            <textarea
              value={lookingFor}
              onChange={(e) => setLookingFor(e.target.value)}
              placeholder="Example: A cash-flowing brand in health, doing $30k+ monthly profit.."
              rows={4}
              className="min-h-[100px] w-full resize-none rounded-2xl border-0 bg-white px-4 py-3.5 text-[15px] text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#8C52FF]/30 sm:w-3/5 sm:px-5 sm:py-4"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full cursor-pointer rounded-full border-2 border-[#f7efff80] bg-[#a36af6] px-4 py-2.5 text-[13px] font-medium text-white shadow-[inset_0_4px_14px_white] transition-colors hover:bg-[#6d28d9] disabled:cursor-not-allowed disabled:opacity-70 sm:px-[20px] sm:py-[10px] sm:text-[16px] md:px-[30px] md:py-5 md:text-[18px]"
          >
            {isSubmitting ? "Signing up..." : "Sign Up"}
          </button>
        </form>

        <p className="mt-5 text-center text-[13px] text-zinc-500 sm:mt-6 sm:text-[14px]">
          Already have an account{" "}
          <Link
            href="/signin"
            className="cursor-pointer font-medium underline"
            style={{ color: PURPLE }}
          >
            sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
