"use client";

import { sellersBookCallConfig } from "@/config/sellers.config";
import { AnimateOnView } from "@/components/ui/AnimateOnView";
import { CalInlineEmbed } from "@/components/ui/CalInlineEmbed";

export function SellersBookCallSection() {
  const { heading, subheading, calEmbedSlug, calPrimaryColor } =
    sellersBookCallConfig;

  return (
    <section
      id="book-a-call"
      className="scroll-mt-20 bg-[#f0fdf4] px-4 py-12 sm:py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <AnimateOnView animation="stagger" rootMargin="0px 0px -80px 0px">
          <header className="stagger-child mb-12 text-center md:mb-16">
            <h2 className="text-[26px] font-medium leading-[1.1] tracking-[-2px] text-zinc-900 sm:text-[32px] md:text-[44px] lg:text-[52px]">
              {heading.before}
              <br />
              <span
                className="font-serif font-medium italic"
                style={{ color: calPrimaryColor }}
              >
                {heading.highlight}
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[16px] font-normal leading-normal text-zinc-900/60 md:text-[18px]">
              {subheading}
            </p>
          </header>

          <div
            className="stagger-child overflow-hidden rounded-2xl md:rounded-3xl"
            style={{
              background:
                "linear-gradient(to bottom, #E3F9F1 0%, transparent 100%)",
            }}
          >
            <div className="p-4 sm:p-4 md:p-12 lg:p-10">
              <div className="relative w-full flex-1 overflow-hidden rounded-xl bg-white md:rounded-2xl">
                <CalInlineEmbed
                  calLink={calEmbedSlug}
                  primaryColor={calPrimaryColor}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </AnimateOnView>
      </div>
    </section>
  );
}
