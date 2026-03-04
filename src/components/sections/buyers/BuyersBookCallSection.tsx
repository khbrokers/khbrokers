"use client";

import { buyersBookCallConfig } from "@/config/buyers.config";
import { LazyBlock } from "@/components/ui/LazyBlock";
import { CalInlineEmbed } from "@/components/ui/CalInlineEmbed";

export function BuyersBookCallSection() {
  const { heading, subheading, callTitle, calEmbedSlug, calLink } = buyersBookCallConfig;

  return (
    <section className="bg-white px-4 py-12 sm:py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <LazyBlock>
          <header className="mb-12 text-center md:mb-16">
            <h2 className="text-[26px] font-medium leading-[1.1] tracking-[-2px] text-zinc-900 sm:text-[32px] md:text-[44px] lg:text-[52px]">
              {heading.before}
              <br/>
              <span className="font-serif font-medium italic text-[#A363F4]">
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
          <div className="p-4 sm:p-8 md:p-12 lg:p-20">         
              <div className="relative w-full flex-1 overflow-hidden rounded-lg">
                <CalInlineEmbed
                  calLink={calEmbedSlug}
                  iframeFallbackUrl={calLink}
                  className="rounded-lg h-[600px] sm:h-[650px] md:h-[700px]"
                /> 
              </div>
           </div>
        </div>
        </LazyBlock>
      </div>
    </section>
  );
}
