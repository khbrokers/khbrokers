"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaLock } from "react-icons/fa";

const PRIMARY = "#a36af6";

export function ListingLockedScreen() {
  const pathname = usePathname();

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F5EEFD] px-4">
      <div className="mx-auto flex w-full max-w-md flex-col items-center rounded-2xl border border-zinc-200/80 bg-white p-8 shadow-sm sm:p-10">
        {/* Lock icon */}
        <div
          className="flex h-16 w-16 items-center justify-center rounded-full"
          style={{
            background: `linear-gradient(to bottom, ${PRIMARY}30 10%, transparent 100%)`,
            border: `2px solid ${PRIMARY}30`,
          }}
        >
          <FaLock className="h-6 w-6" style={{ color: PRIMARY }} />
        </div>

        <h1 className="mt-6 text-center text-[22px] font-bold tracking-[-0.5px] text-zinc-900 sm:text-[26px]">
          This Listing is Private
        </h1>

        <p className="mt-3 text-center text-[14px] leading-relaxed text-zinc-500 sm:text-[15px]">
          Sign in or create an account to view full listing details, financials,
          and business information.
        </p>

        {/* CTA buttons */}
        <div className="mt-8 flex w-full flex-col gap-3">
          <Link
            href={`/signin?redirect=${encodeURIComponent(pathname)}`}
            className="inline-flex w-full items-center justify-center rounded-full border-2 px-5 py-3 text-[14px] font-medium text-white shadow-[inset_0_4px_14px_white] transition-colors hover:!bg-[#6d28d9] sm:text-[15px]"
            style={{
              borderColor: "rgba(247, 239, 255, 0.5)",
              backgroundColor: PRIMARY,
            }}
          >
            Sign In
          </Link>
          <Link
            href={`/signup?redirect=${encodeURIComponent(pathname)}`}
            className="inline-flex w-full items-center justify-center rounded-full border-2 border-zinc-200 bg-white px-5 py-3 text-[14px] font-medium text-zinc-900 transition-colors hover:border-zinc-300 hover:bg-zinc-50 sm:text-[15px]"
          >
            Create Account
          </Link>
        </div>

        {/* Back link */}
        <Link
          href="/deals"
          className="mt-6 text-[13px] font-medium transition-colors hover:underline sm:text-[14px]"
          style={{ color: PRIMARY }}
        >
          &larr; Back to Deals
        </Link>
      </div>
    </main>
  );
}
