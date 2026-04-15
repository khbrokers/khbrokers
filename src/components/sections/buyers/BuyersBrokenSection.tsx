"use client";

import { useState } from "react";
import Image from "next/image";
import { buyersBrokenConfig } from "@/config/buyers.config";
import { AnimateOnView } from "@/components/ui/AnimateOnView";

export function BuyersBrokenSection() {
  const { heading, subheading, items } = buyersBrokenConfig;
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="bg-[#F5EEFD] px-4 py-12 sm:py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <header className="mb-12 space-y-5 text-center md:mb-16 max-w-5xl mx-auto">
          <AnimateOnView
            animation="fade-up"
            rootMargin="100px 0px -40px 0px"
            threshold={0.05}
            delayMs={0}
          >
            <h2 className="text-[28px] font-medium leading-[1.1] tracking-[-2px] text-zinc-900 sm:tracking-[-3px] sm:text-[40px] md:text-[58px] lg:text-[68px]">
              {heading.before}
              <span className="font-serif font-medium italic text-[#a36af6]">
                {heading.highlight}
              </span>
            </h2>
          </AnimateOnView>
          <AnimateOnView
            animation="fade-up"
            rootMargin="100px 0px -40px 0px"
            threshold={0.05}
            delayMs={80}
          >
            <p className="mt-3 font-regular text-[14px] leading-[1.1] tracking-[-0.5px] text-zinc-900/60 sm:mt-4 md:text-[18px]">
              {subheading}
            </p>
          </AnimateOnView>
        </header>

        <div className="mx-auto grid max-w-5xl grid-cols-1 border-grid-border divide-y divide-grid-border md:grid-cols-3 md:divide-x md:divide-y">
          {items.map((item, idx) => {
            const { gradient } = item;
            const defaultBg = gradient?.default;
            const hoverBg = gradient?.hover;
            const isHovered = hoveredIdx === idx;
            const hasGradient = defaultBg || (hoverBg && hoverBg !== "transparent");

            const overlayOpacity = (() => {
              if (!hasGradient) return 0;
              if (defaultBg && hoverBg === "transparent") return isHovered ? 0 : 1;
              if (!defaultBg && hoverBg) return isHovered ? 1 : 0;
              return defaultBg ? 1 : 0;
            })();

            const overlayGradient = defaultBg || hoverBg;

            return (
              <AnimateOnView
                key={idx}
                animation="fade-up"
                rootMargin="100px 0px -40px 0px"
                threshold={0.05}
                delayMs={idx * 80}
              >
                <div
                  className="group relative flex flex-col overflow-hidden p-5 sm:p-6 md:p-8 h-[100%]"
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  {hasGradient && overlayGradient !== "transparent" && (
                    <div
                      className="pointer-events-none absolute inset-0 transition-opacity duration-300 ease-in-out"
                      style={{
                        background: overlayGradient,
                        opacity: overlayOpacity,
                      }}
                      aria-hidden
                    />
                  )}
                  <div className="relative z-10">
                    <div className="relative h-10 w-10 shrink-0 md:h-11 md:w-11">
                      <Image
                        src={item.icon}
                        alt=""
                        width={44}
                        height={44}
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                    <h3 className="mt-4 font-medium text-[20px] md:text-[22px] tracking-[-0.5px] text-zinc-900">
                      {item.title}
                    </h3>
                    <p className="mt-3 leading-[1.1] font-regular text-[14px] md:text-[18px] tracking-[-0.5px] text-zinc-900/60">
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimateOnView>
            );
          })}
        </div>
      </div>
    </section>
  );
}
