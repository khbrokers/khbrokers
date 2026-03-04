"use client";

import Image from "next/image";
import Link from "next/link";
import { buyersCtaConfig } from "@/config/buyers.config";
import { LazyBlock } from "@/components/ui/LazyBlock";
import { AnimateOnView } from "@/components/ui/AnimateOnView";

export function BuyersCtaSection() {
  const { heading, subheading, cta } = buyersCtaConfig;

  return (
    <section className="bg-white px-4 py-12 sm:py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <AnimateOnView animation="stagger" rootMargin="0px 0px -80px 0px">
        <div className="relative overflow-hidden rounded-xl px-4 py-12 text-center sm:rounded-2xl sm:px-6 sm:py-14 md:rounded-[20px] md:px-12 md:py-20 lg:px-16 lg:py-24">
          {/* Background image - fits full card */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/hero/hero2.png"
              alt=""
              fill
              className="object-cover object-center"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
          <div
            className="absolute inset-0 z-0"
            style={{
              background:
                "linear-gradient(rgb(104, 36, 191) 0%, rgb(185 131 255 / 40%) 100%)",
            }}
          />
          {/* Subtle atmospheric effects - similar to difference section */}
          <div
            className="absolute bottom-0 left-0 z-0 h-32 w-64 rounded-full opacity-20 blur-3xl"
            style={{ background: "rgba(255,255,255,0.3)" }}
          />
          <div
            className="absolute bottom-8 left-16 z-0 h-24 w-48 rounded-full opacity-15 blur-2xl"
            style={{ background: "rgba(255,255,255,0.3)" }}
          />
          <div
            className="absolute right-16 top-1/4 z-0 h-20 w-40 rounded-full opacity-10 blur-2xl"
            style={{ background: "rgba(255,255,255,0.3)" }}
          />

          <div className="relative z-10 flex flex-col items-center gap-4 sm:gap-6 md:gap-8">
            {/* Heading */}
            <header className="stagger-child space-y-2">
              <h2 className="text-[24px] font-semibold leading-[1.1] tracking-[-2px] text-white sm:text-[28px] md:text-[44px] lg:text-[52px]">
                {heading.before}
              </h2>
              <p className="font-serif text-[22px] font-medium italic leading-[1.1] tracking-[-1px] text-white sm:text-[26px] md:text-[36px] lg:text-[44px]">
                {heading.highlight}
              </p>
            </header>

            <p className="stagger-child max-w-xl text-base font-normal leading-relaxed text-white/80 md:text-lg">
              {subheading}
            </p>

            {/* CTA buttons - same styling as difference section */}
            <div className="stagger-child mt-2 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
            href={cta.primary.href}
            className="rounded-full border-2 text-[16px] md:text-[18px] border-[#b696df] bg-[#A363F4] px-[20px] py-[10px] md:px-[30px] md:py-[20px] text-sm font-medium text-white shadow-[inset_0_4px_14px_white] transition-colors hover:bg-[#6d28d9]"
          >
            {cta.primary.label}
          </Link>
              <div className="rounded-full bg-gradient-to-b from-zinc-900/10 to-transparent p-[2px]">
                <Link
                  href={cta.secondary.href}
                  className="block rounded-full bg-white px-[20px] py-[10px] text-[16px] font-medium text-zinc-900 transition-colors hover:bg-zinc-100 md:px-[30px] md:py-[20px] md:text-[18px]"
                >
                  {cta.secondary.label}
                </Link>
              </div>
            </div>
          </div>
        </div>
        </AnimateOnView>
      </div>
    </section>
  );
}
