"use client";

import Image from "next/image";
import { sellersTrustedByConfig } from "@/config/sellers.config";
import { AnimateOnView } from "@/components/ui/AnimateOnView";

const BRAND_PANEL_BG = "#DEF3EC";
const DEFAULT_OPACITY = 0.8;

function BrandPanel({
  src,
  opacity = DEFAULT_OPACITY,
}: {
  src: string;
  opacity?: number;
}) {
  return (
    <div
      className="group shrink-0 flex items-center justify-center rounded-xl px-4 py-3 sm:px-5 sm:py-4 md:px-[30px] md:py-[40px]"
      style={{ backgroundColor: BRAND_PANEL_BG }}
    >
      <Image
        src={src}
        alt=""
        width={200}
        height={42}
        className="h-[32px] md:h-[42px] w-auto grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0"
        style={{ opacity }}
      />
    </div>
  );
}

export function SellersTrustedBySection() {
  const { heading, row1Icons: row1Config, row2Icons: row2Config, scrollDuration } =
    sellersTrustedByConfig;
  const row1Icons = [...row1Config, ...row1Config];
  const row2Icons = [...row2Config, ...row2Config];

  return (
    <section
      className="overflow-hidden px-4 py-12 sm:py-16 md:py-24"
      style={{
        backgroundColor: "#f0fdf4",
        ["--trusted-by-scroll-duration" as string]: `${scrollDuration}s`,
      }}
    >
      <div className="mx-auto max-w-6xl">
        <AnimateOnView
          animation="stagger"
          rootMargin="100px 0px -40px 0px"
          threshold={0.05}
        >
          <header className="stagger-child mb-12 text-center md:mb-16">
            <h2 className="text-[26px] font-medium leading-[1.1] tracking-[-2px] text-zinc-900 sm:text-[32px] md:text-[44px] lg:text-[52px]">
              {heading.before}
              <span className="text-[#00965F] font-serif italic">{heading.highlight} {heading.after}</span>
            </h2>
          </header>

          <div className="stagger-child relative flex flex-col gap-4 sm:gap-5 md:gap-6">
            {/* Fade overlays */}
            <div
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-24 md:w-32"
              style={{
                background: `linear-gradient(to right, #f0fdf4, transparent)`,
              }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-24 md:w-32"
              style={{
                background: `linear-gradient(to left, #f0fdf4, transparent)`,
              }}
              aria-hidden
            />

            {/* Row 1: scroll left */}
            <div className="overflow-hidden">
              <div
                className="flex gap-4 sm:gap-5 md:gap-6 animate-scroll-left"
                style={{ width: "max-content" }}
              >
              {row1Icons.map((item, i) => (
                <BrandPanel key={`r1-${item.src}-${i}`} src={item.src} opacity={item.opacity} />
              ))}
              {row1Icons.map((item, i) => (
                <BrandPanel key={`r1-dup-${item.src}-${i}`} src={item.src} opacity={item.opacity} />
              ))}
              </div>
            </div>

            {/* Row 2: scroll right */}
            <div className="overflow-hidden">
              <div
                className="flex gap-4 sm:gap-5 md:gap-6 animate-scroll-right"
                style={{ width: "max-content" }}
              >
              {row2Icons.map((item, i) => (
                <BrandPanel key={`r2-${item.src}-${i}`} src={item.src} opacity={item.opacity} />
              ))}
              {row2Icons.map((item, i) => (
                <BrandPanel key={`r2-dup-${item.src}-${i}`} src={item.src} opacity={item.opacity} />
              ))}
              </div>
            </div>
          </div>
        </AnimateOnView>
      </div>
    </section>
  );
}
