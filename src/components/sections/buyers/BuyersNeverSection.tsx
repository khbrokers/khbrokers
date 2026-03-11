"use client";

import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import { buyersNeverConfig } from "@/config/buyers.config";
import { LazyBlock } from "@/components/ui/LazyBlock";
import { AnimateOnView } from "@/components/ui/AnimateOnView";

export function BuyersNeverSection() {
  const { heading, subheading, items } = buyersNeverConfig;
  const [lottieData, setLottieData] = useState<(object | null)[]>([]);

  useEffect(() => {
    const paths = items.map((item) => (item as { lottie: string }).lottie);
    Promise.all(
      paths.map((path) =>
        fetch(path)
          .then((res) => res.json())
          .catch(() => null)
      )
    ).then(setLottieData);
  }, []);

  return (
    <section className="overflow-x-hidden bg-[#F5EEFD] px-4 py-12 sm:py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <LazyBlock>
        <header className="mb-12 space-y-5 text-center md:mb-16 max-w-5xl mx-auto flex flex-col items-center justify-center gap-[10px] md:gap-[20px]">
        <h2 className="text-[28px] font-medium leading-[1.1] tracking-[-2px] text-zinc-900 sm:tracking-[-3px] sm:text-[40px] md:text-[58px] lg:text-[68px]">
        {heading.before}
            <span className="font-serif font-medium italic text-[#a36af6]">
              {heading.highlight}
            </span>
            <br />
            {heading.after}
          </h2>
          <p className="font-regular text-[14px] md:text-[18px] leading-[1.1] tracking-[-0.5px] text-zinc-900/60 w-[80%] md:w-[90%]">
            {subheading}
          </p>
        </header>
        </LazyBlock>

        <div className="grid min-w-0 gap-4 sm:gap-6 md:grid-cols-2 md:gap-8">
          {items.map((item, idx) => {
            const isThirdCard = idx === 2;

            if (isThirdCard) {
              return (
                <AnimateOnView
                  key={idx}
                  animation="fade-up-slow"
                  rootMargin="0px 0px -60px 0px"
                  threshold={0.05}
                  delayMs={idx * 400}
                  className="md:col-span-2"
                >
                <article
                  className="flex min-w-0 flex-col overflow-hidden rounded-2xl bg-[#F2E7FF] shadow-sm md:flex-row"
                >
                  <div className="relative mb-4 aspect-[4/3] w-full min-w-0 overflow-hidden rounded-lg bg-[#EDE9FE]/50 sm:mb-6 sm:rounded-xl md:order-2 md:mb-0 md:flex-[0_0_50%] md:shrink-0 h-[240px] sm:h-[280px] md:h-[350px]">
                    {lottieData[idx] && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Lottie
                          animationData={lottieData[idx]!}
                          loop
                          style={{ width: "100%", height: "100%" }}
                          rendererSettings={{
                            preserveAspectRatio: "xMidYMid meet",
                          }}
                        />
                      </div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col justify-center gap-2 px-4 py-4 sm:gap-[10px] sm:px-5 sm:py-5 md:order-1 md:px-[30px] md:py-[20px]">
                    <h3 className="text-[20px] md:text-[22px] font-medium leading-[1.2] tracking-[-0.5px] text-zinc-900">
                      {item.title}
                    </h3>
                    <p className="text-[14px] md:text-[16px] font-normal leading-[1.1] tracking-[-0.5px] text-zinc-900/60">
                      {item.description}
                    </p>
                  </div>
                </article>
                </AnimateOnView>
              );
            }

            return (
              <AnimateOnView
                key={idx}
                animation="fade-up-slow"
                rootMargin="0px 0px -60px 0px"
                threshold={0.05}
                delayMs={idx * 400}
              >
              <article
                className="flex min-w-0 flex-col overflow-hidden rounded-2xl bg-[#F2E7FF] shadow-sm"
              >
                <div className="relative mb-4 aspect-[4/3] w-full min-w-0 overflow-hidden rounded-lg bg-[#EDE9FE]/50 sm:mb-6 sm:rounded-xl md:mb-8 h-[180px] sm:h-[220px] md:h-[254px]">
                  {lottieData[idx] && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Lottie
                        animationData={lottieData[idx]!}
                        loop
                        style={{ width: "100%", height: "100%" }}
                        rendererSettings={{
                          preserveAspectRatio: "xMidYMid meet",
                        }}
                      />
                    </div>
                  )}
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
              </AnimateOnView>
            );
          })}
        </div>
      </div>
    </section>
  );
}
