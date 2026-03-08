"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { sellersStructuredApproachConfig } from "@/config/sellers.config";
import { LazyBlock } from "@/components/ui/LazyBlock";
import { AnimateOnView } from "@/components/ui/AnimateOnView";

const CARD_STYLE = {
  background:
    "linear-gradient(to bottom, rgba(0, 150, 95, 0.2) 0%, rgba(0, 150, 95, 0) 100%)",
  border: "1px solid rgba(0, 150, 95, 0.4)",
  boxShadow: "inset 0 0 12px white",
};

export function SellersStructuredApproachSection() {
  const { heading, subheading, steps } = sellersStructuredApproachConfig;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = () => setIsMobile(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <section
      className="px-4 py-12 sm:py-16 md:py-24"
      style={{ backgroundColor: "#f0fdf4" }}
    >
      <div className="mx-auto max-w-6xl">
        <LazyBlock animation="fade-up" rootMargin="0px 0px -80px 0px">
          <header className="mx-auto mb-10 w-[95%] text-center sm:mb-12 sm:w-[90%] md:mb-16 md:w-[70%]">
            <h2 className="text-[26px] font-medium leading-[1.1] tracking-[-2px] text-zinc-900 sm:text-[36px] md:text-[52px] lg:text-[60px]">
              {heading.before}
              <br/>
              <span className="font-serif font-medium italic" style={{ color: "#00965F" }}>
                {heading.highlight}
              </span>
            </h2>
            <p className="mt-4 text-[16px] font-normal leading-[1.5] text-zinc-600 md:text-[18px]">
              {subheading}
            </p>
          </header>
        </LazyBlock>

        <LazyBlock animation="fade-up" rootMargin="0px 0px -80px 0px">
          <div className="relative">
            <div className="relative mx-auto flex min-h-[500px] max-w-5xl items-center justify-center md:block md:min-h-0">
              <Image
                src="/assets/sellers_landing/sellers_journey.png"
                alt="Selling journey"
                width={1200}
                height={400}
                className="relative z-10 w-full object-contain"
                sizes="(max-width: 768px) 100vw, 1200px"
              />

              <AnimateOnView
                animation="stagger"
                rootMargin="0px 0px -80px 0px"
                className="absolute inset-0 z-0"
              >
                {steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="stagger-child absolute flex w-[28%] min-w-[68px] max-w-[92px] flex-col sm:w-[24%] sm:min-w-[85px] sm:max-w-[115px] md:w-[18%] md:min-w-[140px] md:max-w-[200px]"
                    style={{
                      top: isMobile ? (step.topMobile ?? step.top) : step.top,
                      left: isMobile ? (step.leftMobile ?? step.left) : step.left,
                    }}
                  >
                    <div
                      className="w-full rounded-md px-2.5 py-1.5 sm:rounded-lg sm:px-4 sm:py-3 md:rounded-xl md:px-5 md:py-4"
                      style={CARD_STYLE}
                    >
                      <h3 className="text-[11px] font-semibold leading-tight text-zinc-900 sm:text-[13px] md:text-[16px]">
                        {step.title}
                      </h3>
                      <p className="mt-0.5 text-[10px] leading-snug font-normal text-zinc-600 sm:mt-1 sm:text-[11px] md:text-[14px]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </AnimateOnView>
            </div>
          </div>
        </LazyBlock>
      </div>
    </section>
  );
}
