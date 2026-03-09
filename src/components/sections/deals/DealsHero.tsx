"use client";

import Image from "next/image";
import Link from "next/link";
import { FaTag } from "react-icons/fa";
import { dealsHeroConfig } from "@/config/deals.config";
import { AnimateOnView } from "@/components/ui/AnimateOnView";

const PRIMARY = "#a36af6";
const PAGE_BG = "#F5EEFD";

export function DealsHero() {
  const { tag, headline, highlight, description, ctaLabel, ctaHref } =
    dealsHeroConfig;

  return (
    <section className="relative min-h-[65vh] max-h-[80vh] overflow-hidden sm:min-h-[70vh] md:min-h-[75vh]">
      <Image
        src="/assets/hero/hero.png"
        alt=""
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />
      {/* Faded layer at bottom */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 sm:h-40"
        style={{
          background: `linear-gradient(to top, ${PAGE_BG}, transparent)`,
        }}
      />
      <div className="relative z-10 mx-auto flex min-h-[65vh] flex-col items-center justify-center px-4 pb-4 pt-[100px] sm:min-h-[70vh] sm:pb-20 sm:pt-24 md:min-h-[75vh] md:pb-24 md:pt-[150px] lg:px-8">
        <AnimateOnView
          animation="stagger"
          rootMargin="0px 0px 0px 0px"
          threshold={0.1}
        >
          {/* Tag badge */}
          <div className="stagger-child mb-6 flex justify-center sm:mb-8">
            <div
              className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 backdrop-blur-sm sm:px-4 sm:py-2"
              style={{
                borderColor: "rgba(163, 106, 246, 0.3)",
                background: `linear-gradient(to bottom, ${PRIMARY}30 10%, transparent 100%)`,
              }}
            >
              <FaTag
                className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4"
                style={{ color: PRIMARY }}
              />
              <span className="text-xs font-medium text-zinc-700 sm:text-sm">
                {tag}
              </span>
            </div>
          </div>
          <h1 className="stagger-child text-center text-[32px] font-bold leading-[1.1] tracking-[-2px] text-zinc-900 sm:text-[40px] md:text-[48px] lg:text-[56px]">
            {headline}
          </h1>
          <p className="stagger-child mt-2 text-center font-serif text-[28px] font-medium italic sm:text-[32px] md:text-[36px] lg:text-[40px]">
            <span style={{ color: PRIMARY }}>{highlight}</span>
          </p>
          <p className="stagger-child mx-auto mt-6 max-w-2xl text-center text-[15px] leading-relaxed text-zinc-900/60 sm:text-[16px] md:text-[17px]">
            {description}
          </p>
          <div className="stagger-child mt-8 flex justify-center">
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-[15px] font-medium text-zinc-900 transition-colors hover:bg-zinc-50 sm:px-8 sm:py-4 sm:text-[16px]"
              style={{
                border: "2px solid transparent",
                background:
                  "linear-gradient(white, white) padding-box, linear-gradient(to bottom, #A363F430, transparent) border-box",
                backgroundOrigin: "padding-box, border-box",
                backgroundClip: "padding-box, border-box",
                boxShadow: "0 4px 10px #A363F420",
              }}
            >
              {ctaLabel}
            </Link>
          </div>
        </AnimateOnView>
      </div>
    </section>
  );
}
