"use client";

import { buyersBookCallConfig } from "@/config/buyers.config";
import { LazyBlock } from "@/components/ui/LazyBlock";
import { CalInlineEmbed } from "@/components/ui/CalInlineEmbed";

export function BuyersBookCallSection() {
  const { heading, subheading, calEmbedSlug, calPrimaryColor } = buyersBookCallConfig;

  return (
    <section id="book-a-call" className="bg-white px-4 py-12 sm:py-16 md:py-24 scroll-mt-20">
      <div className="mx-auto max-w-6xl">
      <LazyBlock>
          <header className="mb-12 text-center md:mb-16">
            <h2 className="text-[26px] font-medium leading-[1.1] tracking-[-2px] text-zinc-900 sm:text-[32px] md:text-[44px] lg:text-[52px]">
              {heading.before}
              <br/>
              <span className="font-serif font-medium italic text-[#a36af6]">
                {heading.highlight}
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[16px] font-normal leading-normal text-zinc-900/60 md:text-[18px]">
              {subheading}
            </p>
          </header>
        </LazyBlock>

        <LazyBlock>
        <div
          className="overflow-hidden rounded-2xl md:rounded-3xl"
          style={{
            background:
              "linear-gradient(to top, rgba(245, 238, 253, 0) 0%, rgba(240, 228, 255, 0.4) 50%, rgba(240, 228, 255, 0.8) 100%)",
          }}
        >
          <div className="p-4 sm:p-4 md:p-12 lg:p-10">         
              <div className="relative w-full flex-1 overflow-hidden rounded-xl md:rounded-2xl bg-white">
                <CalInlineEmbed
                  calLink={calEmbedSlug}
                  primaryColor={calPrimaryColor}
                  className="rounded-lg"
                /> 
              </div>
           </div>
        </div>
        </LazyBlock>
      </div>
    </section>
  );
}
