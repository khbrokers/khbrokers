"use client";

import Image from "next/image";
import { sellersWhoWeAreConfig } from "@/config/sellers.config";
import { LazyBlock } from "@/components/ui/LazyBlock";
import { AnimateOnView } from "@/components/ui/AnimateOnView";

const PRIMARY = "#16a34a";

export function SellersWhoWeAreSection() {
  const { heading, subheading, cards } = sellersWhoWeAreConfig;

  return (
    <section
      className="px-4 py-12 sm:py-16 md:py-24"
      style={{ backgroundColor: "#f0fdf4" }}
    >
      <div className="mx-auto max-w-6xl">
        <LazyBlock rootMargin="100px 0px -40px 0px">
          <header className="mb-12 space-y-[20px] text-center md:mb-16">
            <h2 className="text-[28px] font-medium leading-[1.1] tracking-[-2px] text-zinc-900 sm:text-[40px] md:text-[58px] lg:text-[68px]">
              {heading.before}
              <span className="font-serif font-medium italic" style={{ color: PRIMARY }}>
                {heading.highlight}
              </span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl font-regular text-[14px] leading-[1.1] tracking-[-0.5px] text-zinc-900/60 sm:mt-4 md:text-[18px]">
              {subheading}
            </p>
          </header>
        </LazyBlock>

        <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
          {cards.map((card, idx) => (
            <AnimateOnView
              key={idx}
              animation="fade-up"
              rootMargin="100px 0px -40px 0px"
              threshold={0.05}
              delayMs={idx * 80}
            >
              <div
                className="group relative flex flex-col overflow-hidden rounded-2xl border-2 bg-white p-6 shadow-sm transition-colors sm:p-8"
                style={{
                  borderColor: "rgba(34, 197, 94, 0.3)",
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(34, 197, 94, 0.08) 0%, transparent 100%)",
                  }}
                  aria-hidden
                />
                <div className="relative z-10">
                  <div className="relative h-10 w-10 shrink-0 md:h-11 md:w-11">
                    <Image
                      src={card.icon}
                      alt=""
                      width={44}
                      height={44}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="mt-4 font-medium text-[20px] tracking-[-0.5px] text-zinc-900 md:text-[22px]">
                    {card.title}
                  </h3>
                  <p className="mt-3 font-regular text-[14px] leading-[1.5] tracking-[-0.5px] text-zinc-900/60 md:text-[18px]">
                    {card.description}
                  </p>
                </div>
              </div>
            </AnimateOnView>
          ))}
        </div>
      </div>
    </section>
  );
}
