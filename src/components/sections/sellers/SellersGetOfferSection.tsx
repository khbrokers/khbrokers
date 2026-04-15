"use client";

import Link from "next/link";
import { sellersGetOfferConfig } from "@/config/sellers.config";
import { LazyBlock } from "@/components/ui/LazyBlock";
import { AnimateOnView } from "@/components/ui/AnimateOnView";

const PRIMARY = "#16a34a";

export function SellersGetOfferSection() {
  const { heading, subheading, formPlaceholder, cta } = sellersGetOfferConfig;

  return (
    <section
      id="get-offer"
      className="scroll-mt-20 px-4 py-12 sm:py-16 md:py-24"
      style={{ backgroundColor: "#f0fdf4" }}
    >
      <div className="mx-auto max-w-2xl">
        <LazyBlock rootMargin="100px 0px -40px 0px">
          <header className="mb-12 text-center md:mb-16">
            <h2 className="text-[26px] font-medium leading-[1.1] tracking-[-2px] text-zinc-900 sm:text-[32px] md:text-[44px] lg:text-[52px]">
              {heading.before}
              <span className="font-serif font-medium italic" style={{ color: PRIMARY }}>
                {heading.highlight}
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[16px] font-normal leading-normal text-zinc-600 md:text-[18px]">
              {subheading}
            </p>
          </header>
        </LazyBlock>

        <AnimateOnView animation="fade-up" rootMargin="100px 0px -40px 0px" threshold={0.05}>
          <div
            className="rounded-2xl border-2 bg-white p-6 shadow-sm sm:p-8 md:p-10"
            style={{ borderColor: "rgba(34, 197, 94, 0.3)" }}
          >
            <div className="flex min-h-[200px] flex-col items-center justify-center rounded-xl border-2 border-dashed border-zinc-200 bg-zinc-50/50 p-8 text-center">
              <p className="text-[14px] font-normal text-zinc-500 sm:text-[16px] md:text-[18px]">
                {formPlaceholder}
              </p>
              <Link
                href={cta.href}
                className="mt-6 inline-flex items-center rounded-full px-6 py-3 text-[14px] font-medium text-white transition-colors hover:opacity-90 sm:px-8 sm:py-4 sm:text-[16px]"
                style={{ backgroundColor: PRIMARY }}
              >
                {cta.label}
              </Link>
            </div>
          </div>
        </AnimateOnView>
      </div>
    </section>
  );
}
