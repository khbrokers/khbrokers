"use client";

import Image from "next/image";
import { buyersNeverConfig } from "@/config/buyers.config";
import { LazyBlock } from "@/components/ui/LazyBlock";
import { AnimateOnView } from "@/components/ui/AnimateOnView";

export function BuyersNeverSection() {
  const { heading, subheading, items } = buyersNeverConfig;

  return (
    <section className="bg-[#F5EEFD] px-4 py-12 sm:py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <LazyBlock>
        <header className="mb-12 space-y-5 text-center md:mb-16 max-w-5xl mx-auto flex flex-col items-center justify-center gap-[10px] md:gap-[20px]">
          <h2 className="text-[26px] font-medium leading-[1.1] tracking-[-2px] text-zinc-900 sm:tracking-[-3px] sm:text-[36px] md:text-[58px] lg:text-[68px] p-0 m-0">
            {heading.before}
            <span className="font-serif font-medium italic text-[#A363F4]">
              {heading.highlight}
            </span>
            <br />
            {heading.after}
          </h2>
          <p className="font-regular text-[14px] md:text-[18px] leading-[1.1] tracking-[-0.5px] text-zinc-900/60">
            {subheading}
          </p>
        </header>
        </LazyBlock>

        <AnimateOnView animation="stagger" rootMargin="0px 0px -80px 0px">
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 md:gap-8">
          {items.map((item, idx) => {
            const isThirdCard = idx === 2;

            if (isThirdCard) {
              return (
                <article
                  key={idx}
                  className="stagger-child flex flex-col overflow-hidden rounded-2xl bg-[#F2E7FF] shadow-sm md:col-span-2 md:flex-row"
                >
                  <div className="flex flex-1 flex-col justify-center gap-2 px-4 py-4 sm:gap-[10px] sm:px-5 sm:py-5 md:order-1 md:px-[30px] md:py-[20px]">
                    <h3 className="text-[20px] md:text-[22px] font-medium leading-[1.2] tracking-[-0.5px] text-zinc-900">
                      {item.title}
                    </h3>
                    <p className="text-[14px] md:text-[16px] font-normal leading-[1.1] tracking-[-0.5px] text-zinc-900/60">
                      {item.description}
                    </p>
                  </div>
                  <div className="relative mb-4 aspect-[4/3] w-full overflow-hidden rounded-lg bg-[#EDE9FE]/50 sm:mb-6 sm:rounded-xl md:order-2 md:mb-0 md:flex-[0_0_50%] md:shrink-0">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </article>
              );
            }

            return (
              <article
                key={idx}
                className="stagger-child flex flex-col overflow-hidden rounded-2xl bg-[#F2E7FF] shadow-sm"
              >
                <div className="relative mb-4 aspect-[4/3] w-full overflow-hidden rounded-lg bg-[#EDE9FE]/50 sm:mb-6 sm:rounded-xl md:mb-8">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-2 px-4 py-4 sm:gap-[10px] sm:px-5 sm:py-5 md:px-[30px] md:py-[20px]">
                  <h3 className="text-[20px] md:text-[22px] font-medium leading-[1.2] tracking-[-0.5px] text-zinc-900">
                    {item.title}
                  </h3>
                  <p className="text-[14px] md:text-[16px] font-normal leading-[1.1] tracking-[-0.5px] text-zinc-900/60">
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
        </AnimateOnView>
      </div>
    </section>
  );
}
