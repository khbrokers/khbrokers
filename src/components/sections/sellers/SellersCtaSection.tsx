"use client";

import Image from "next/image";
import Link from "next/link";
import { sellersCtaConfig } from "@/config/sellers.config";
import { AnimateOnView } from "@/components/ui/AnimateOnView";

const PRIMARY = "#36AC81";

export function SellersCtaSection() {
  const { heading, subheading, cta } = sellersCtaConfig;

  return (
    <section className="bg-[#f0fdf4] px-4 py-12 sm:py-16 md:py-24">
       
      <div className="mx-auto max-w-6xl">
        <AnimateOnView animation="stagger" rootMargin="0px 0px -80px 0px">
          <div className="relative overflow-hidden rounded-xl px-4 py-12 text-center sm:rounded-2xl sm:px-6 sm:py-14 md:rounded-[20px] md:px-12 md:py-20 lg:px-16 lg:py-24">
            <div className="absolute inset-0 z-0">
              <Image
                src="/assets/sellers_landing/hero/hero.png"
                alt=""
                fill
                className="object-cover object-center"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </div>
            <div
              className="absolute inset-0 z-0"
              style={{
                 boxShadow: "inset 0 4px 40px rgba(255, 255, 255)",
                background: `linear-gradient(${PRIMARY} 0%, transparent 100%)`,
              }}
            />
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
              <header className="stagger-child flex flex-row items-center justify-center gap-2 space-y-2">
                <h2 className="text-[34px] font-semibold leading-[1.1] tracking-[-2px] text-white sm:text-[38px] md:text-[54px] lg:text-[52px]">
                  {heading.before}
                </h2>
                <p className="font-serif text-[32px] font-medium italic leading-[1.1] tracking-[-1px] text-white sm:text-[36px] md:text-[46px] lg:text-[54px]">
                  {heading.highlight}
                </p>
              </header>

              <p className="stagger-child w-[80%] md:w-[30%] mx-auto text-base font-normal leading-relaxed text-white/80 md:text-lg">
                {subheading}
              </p>

              <div className="stagger-child mt-2 flex flex-row flex-wrap items-center justify-center gap-2 sm:gap-4">
                <Link
                  href={cta.primary.href}
                  className="rounded-full border-2 px-4 py-2.5 text-[13px] font-medium text-white shadow-[inset_0_4px_14px_white] transition-colors hover:opacity-90 sm:px-[20px] sm:py-[10px] sm:text-[16px] md:px-[30px] md:py-[20px] md:text-[18px]"
                  style={{
                    borderColor: "rgba(255,255,255,0.5)",
                    backgroundColor: PRIMARY,
                  }}
                >
                  {cta.primary.label}
                </Link>
                <div className="rounded-full bg-gradient-to-b from-zinc-900/10 to-transparent p-[2px]">
                  <Link
                    href={cta.secondary.href}
                    className="block rounded-full bg-white px-4 py-2.5 text-[13px] font-medium text-zinc-900 transition-colors hover:bg-zinc-100 sm:px-[20px] sm:py-[10px] sm:text-[16px] md:px-[30px] md:py-[20px] md:text-[18px]"
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
