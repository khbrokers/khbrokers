"use client";

import Image from "next/image";
import { sellersTrustedByConfig } from "@/config/sellers.config";
import { LazyBlock } from "@/components/ui/LazyBlock";
import { AnimateOnView } from "@/components/ui/AnimateOnView";

export function SellersTrustedBySection() {
  const { heading, icons } = sellersTrustedByConfig;

  return (
    <section
      className="px-4 py-12 sm:py-16 md:py-24"
      style={{ backgroundColor: "#f0fdf4" }}
    >
      <div className="mx-auto max-w-6xl">
        <LazyBlock>
          <header className="mb-12 text-center md:mb-16">
            <h2 className="text-[26px] font-medium leading-[1.1] tracking-[-2px] text-zinc-900 sm:text-[32px] md:text-[44px] lg:text-[52px]">
              {heading}
            </h2>
          </header>
        </LazyBlock>

        <AnimateOnView animation="stagger" rootMargin="0px 0px -80px 0px">
          <div className="flex flex-row flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16">
            {icons.map((src) => (
              <div
                key={src}
                className="stagger-child flex items-center justify-center opacity-80 grayscale transition-all hover:opacity-100 hover:grayscale-0"
              >
                <Image
                  src={src}
                  alt=""
                  width={120}
                  height={32}
                  className="h-[24px] w-auto sm:h-[28px] md:h-[32px]"
                />
              </div>
            ))}
          </div>
        </AnimateOnView>
      </div>
    </section>
  );
}
