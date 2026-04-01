"use client";

import { launchvectorBookCallConfig } from "@/config/launchvector.config";
import { LazyBlock } from "@/components/ui/LazyBlock";
import { BuyersCalInlineEmbed } from "@/components/ui/BuyersCalInlineEmbed";

export function LaunchvectorBookCallSection() {
  const { heading, description } = launchvectorBookCallConfig;

  return (
    <section
      id="book-a-call"
      className="scroll-mt-20 bg-[#F5EEFD] px-4 py-12 sm:py-16 md:py-24"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-[40px] lg:px-[80px]">
        <LazyBlock>
          <header className="mb-10 text-center sm:mb-16">
            <h2 className="text-[26px] font-medium leading-[1.1] tracking-[-2px] text-black sm:text-[40px] sm:tracking-[-3px] md:text-[56px] md:tracking-[-4.08px] lg:text-[68px]">
              {heading.before}
              <span className="font-serif italic text-[#a363f4]">
                {heading.highlight}
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-[609px] text-[16px] leading-[1.5] tracking-[-1.08px] text-black/60 sm:text-[18px]">
              {description}
            </p>
          </header>
        </LazyBlock>

        <LazyBlock>
          <div
            className="overflow-hidden rounded-[20px]"
            style={{
              background:
                "linear-gradient(to bottom, #e3cbff 0%, rgba(227,203,255,0) 93%)",
            }}
          >
            <div className="p-4 sm:p-8 md:p-[60px]">
              <div className="relative w-full overflow-hidden rounded-[20px] border border-[#a363f4] bg-white">
                <BuyersCalInlineEmbed className="rounded-lg" />
              </div>
            </div>
          </div>
        </LazyBlock>
      </div>
    </section>
  );
}
