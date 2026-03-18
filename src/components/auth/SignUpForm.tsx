"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, FormEvent, useRef, useEffect } from "react";
import { COUNTRY_CODES } from "@/config/countries.config";
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
  "Fully hands-on (I operate the business)",
  "Hybrid (I'm involved strategically with support)",
  "Fully managed / passive",
];

function CustomSelect({
  value,
  options,
  onChange,
  placeholderOpacity = false,
  error = false,
}: {
  value: string;
  options: string[];
  onChange: (v: string) => void;
  placeholderOpacity?: boolean;
  error?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const isPlaceholder = value === options[0];
  const displayClass = placeholderOpacity && isPlaceholder ? "text-zinc-900/70" : "text-zinc-900";

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative w-full">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`flex w-full items-center justify-between rounded-2xl border-0 bg-zinc-100 px-4 py-3 text-[14px] transition-colors hover:bg-zinc-200/80 focus:outline-none focus:ring-2 focus:ring-[#8C52FF]/30 sm:px-4 sm:py-3.5 sm:text-[15px] ${displayClass} ${
          error && isPlaceholder ? "ring-2 ring-red-400/50" : ""
        }`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select option"
      >
        <span className="truncate">{value}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#717171"
          className={`h-4 w-4 shrink-0 ml-2 transition-transform duration-200 sm:h-[18px] sm:w-[18px] ${open ? "rotate-180" : ""}`}
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute left-0 right-0 top-full z-50 mt-1.5 max-h-[220px] overflow-y-auto rounded-xl border border-zinc-200/90 bg-white py-1 shadow-xl shadow-zinc-900/8 scrollbar-hide sm:max-h-[200px]"
        >
          {options.map((opt) => (
            <li
              key={opt}
              role="option"
              aria-selected={value === opt}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              className={`cursor-pointer px-4 py-3 text-[14px] transition-colors first:rounded-t-[11px] last:rounded-b-[11px] active:bg-zinc-100 sm:py-2.5 sm:text-[15px] ${
                value === opt
                  ? "bg-[#8C52FF]/10 text-zinc-900 font-medium"
                  : "text-zinc-700 hover:bg-zinc-50"
              }`}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState(
    COUNTRY_CODES.find((c) => c.country === "US") ?? COUNTRY_CODES[0]
  );
  const [countryOpen, setCountryOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const countryRef = useRef<HTMLDivElement>(null);
  const countrySearchRef = useRef<HTMLInputElement>(null);
  const [budget, setBudget] = useState(BUDGET_OPTIONS[0]);
  const [ownership, setOwnership] = useState(OWNERSHIP_OPTIONS[0]);
  const [lookingFor, setLookingFor] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSelectError, setShowSelectError] = useState(false);
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") || "/";

  // Detect referrer info for UTM defaults and page location
  const getReferrerInfo = () => {
    const ref = document.referrer;
    let hostname = "";
    let pathname = "";
    try {
      if (ref) {
        const url = new URL(ref);
        hostname = url.hostname.toLowerCase();
        pathname = url.pathname;
      }
    } catch { /* invalid referrer */ }

    const organicSources: Record<string, string> = {
      "google": "google",
      "bing": "bing",
      "yahoo": "yahoo",
      "duckduckgo": "duckduckgo",
      "baidu": "baidu",
      "yandex": "yandex",
    };

    const matchedEngine = Object.keys(organicSources).find((engine) => hostname.includes(engine));

    if (matchedEngine) {
      return { source: organicSources[matchedEngine], medium: "organic", refPath: pathname };
    }

    // Social media referrals
    const socialSources: Record<string, string> = {
      "facebook": "facebook",
      "instagram": "instagram",
      "linkedin": "linkedin",
      "twitter": "twitter",
      "x.com": "twitter",
      "tiktok": "tiktok",
      "youtube": "youtube",
      "reddit": "reddit",
    };

    const matchedSocial = Object.keys(socialSources).find((s) => hostname.includes(s));

    if (matchedSocial) {
      return { source: socialSources[matchedSocial], medium: "social", refPath: pathname };
    }

    // External website referral
    if (hostname && !hostname.includes("khbrokers")) {
      return { source: hostname, medium: "referral", refPath: pathname };
    }

    // Internal navigation or direct
    return { source: "direct", medium: "none", refPath: pathname };
  };

  const getPageLocation = () => {
    const { refPath } = getReferrerInfo();
    const source = redirectTo !== "/" ? redirectTo : refPath || "/";
    const labels: Record<string, string> = {
      "/": "Home Khbrokers",
      "/invest": "Invest Khbrokers",
      "/invest-2": "Invest Khbrokers",
      "/buyers": "Buyers Khbrokers",
      "/sellers": "Sellers Khbrokers",
      "/deals": "Deals Khbrokers",
      "/about": "About Khbrokers",
      "/contact": "Contact Khbrokers",
      "/value-my-store": "Valuation Khbrokers",
      "/demo": "Demo Khbrokers",
    };
    return labels[source] || `${source.replace(/^\//, "").replace(/-/g, " ")} Khbrokers`;
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (countryRef.current && !countryRef.current.contains(e.target as Node)) {
        setCountryOpen(false);
        setCountrySearch("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    const invalidSelect = budget === BUDGET_OPTIONS[0] || ownership === OWNERSHIP_OPTIONS[0];
    if (invalidSelect) {
      setShowSelectError(true);
      return;
    }
    setShowSelectError(false);
    setError("");
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone: phone ? `${countryCode.code}${phone}` : "",
          password,
          budget,
          ownership,
          lookingFor,
          utm_source: searchParams.get("utm_source") || getReferrerInfo().source,
          utm_medium: searchParams.get("utm_medium") || getReferrerInfo().medium,
          utm_campaign: searchParams.get("utm_campaign") || "none",
          utm_content: searchParams.get("utm_content") || "none",
          utm_term: searchParams.get("utm_term") || "none",
          signup_page: getPageLocation(),
        }),
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
          {error && (
            <div className="rounded-xl bg-red-50 px-4 py-3 text-[14px] text-red-600">
              {error}
            </div>
          )}

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
            <div ref={countryRef} className="relative flex w-full">
              <button
                type="button"
                onClick={() => setCountryOpen((o) => !o)}
                className="flex shrink-0 items-center gap-1.5 rounded-l-2xl border-0 bg-zinc-100 pl-3 pr-2 py-3.5 text-[14px] text-zinc-700 transition-colors hover:bg-zinc-200/80 focus:outline-none focus:ring-2 focus:ring-[#8C52FF]/30 sm:pl-4 sm:pr-2.5 sm:py-4 sm:text-[15px]"
                aria-haspopup="listbox"
                aria-expanded={countryOpen}
                aria-label="Select country code"
              >
                <span>{countryCode.flag}</span>
                <span>{countryCode.code}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#717171"
                  className={`h-3.5 w-3.5 shrink-0 transition-transform duration-200 ${countryOpen ? "rotate-180" : ""}`}
                  aria-hidden
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(205) 938-1352"
                className="w-full min-w-0 rounded-r-2xl border-0 bg-zinc-100 px-3 py-3.5 text-[15px] text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#8C52FF]/30 sm:px-4 sm:py-4"
              />
              {countryOpen && (
                <div className="absolute left-0 right-0 top-full z-50 mt-1.5 rounded-xl border border-zinc-200/90 bg-white shadow-xl shadow-zinc-900/8">
                  <div className="p-2">
                    <input
                      ref={countrySearchRef}
                      type="text"
                      value={countrySearch}
                      onChange={(e) => setCountrySearch(e.target.value)}
                      placeholder="Search country..."
                      className="w-full rounded-lg border-0 bg-zinc-100 px-3 py-2 text-[13px] text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#8C52FF]/30 sm:text-[14px]"
                      autoFocus
                    />
                  </div>
                  <ul
                    role="listbox"
                    className="max-h-[180px] overflow-y-auto py-1 scrollbar-hide"
                  >
                    {COUNTRY_CODES.filter((c) => {
                      const q = countrySearch.toLowerCase();
                      return c.country.toLowerCase().includes(q) || c.code.includes(q);
                    }).map((c) => (
                      <li
                        key={`${c.country}-${c.code}`}
                        role="option"
                        aria-selected={countryCode.country === c.country}
                        onClick={() => {
                          setCountryCode(c);
                          setCountryOpen(false);
                          setCountrySearch("");
                        }}
                        className={`flex cursor-pointer items-center gap-2.5 px-4 py-2.5 text-[14px] transition-colors active:bg-zinc-100 sm:text-[15px] ${
                          countryCode.country === c.country
                            ? "bg-[#8C52FF]/10 text-zinc-900 font-medium"
                            : "text-zinc-700 hover:bg-zinc-50"
                        }`}
                      >
                        <span>{c.flag}</span>
                        <span>{c.country}</span>
                        <span className="text-zinc-400">{c.code}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            minLength={6}
            className={inputClass}
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <CustomSelect
              value={budget}
              options={BUDGET_OPTIONS}
              onChange={(v) => {
                setBudget(v);
                setShowSelectError(false);
              }}
              placeholderOpacity
              error={showSelectError}
            />
            <CustomSelect
              value={ownership}
              options={OWNERSHIP_OPTIONS}
              onChange={(v) => {
                setOwnership(v);
                setShowSelectError(false);
              }}
              placeholderOpacity
              error={showSelectError}
            />
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
