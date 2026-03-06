"use client";

import { sellersStructuredApproachConfig } from "@/config/sellers.config";
import { LazyBlock } from "@/components/ui/LazyBlock";
import { AnimateOnView } from "@/components/ui/AnimateOnView";

const PRIMARY = "#16a34a";

export function SellersStructuredApproachSection() {
  const { heading, subheading, steps } = sellersStructuredApproachConfig;

  return (
    <section
      className="px-4 py-12 sm:py-16 md:py-24"
      style={{ backgroundColor: "#f0fdf4" }}
    >
      <div className="mx-auto max-w-6xl">
        <LazyBlock>
          <header className="mx-auto mb-12 w-[95%] text-center sm:mb-16 sm:w-[90%] md:w-[80%]">
            <h2 className="text-[26px] font-medium leading-[1.1] tracking-[-2px] text-zinc-900 sm:text-[36px] md:text-[52px] lg:text-[60px]">
              {heading.before}
              <span className="font-serif font-medium italic" style={{ color: PRIMARY }}>
                {heading.highlight}
              </span>
            </h2>
            <p className="mt-4 text-[16px] font-normal leading-[1.5] text-zinc-600 md:text-[18px]">
              {subheading}
            </p>
          </header>
        </LazyBlock>

        <LazyBlock>
          <div className="relative">
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, idx) => (
                <AnimateOnView
                  key={idx}
                  animation="fade-up"
                  rootMargin="0px 0px -40px 0px"
                  threshold={0.05}
                  delayMs={idx * 80}
                >
                  <div
                    className="flex flex-col rounded-2xl border-2 bg-white p-6 shadow-sm sm:p-8"
                    style={{
                      borderColor: "rgba(34, 197, 94, 0.3)",
                      background:
                        "linear-gradient(to bottom, rgba(34, 197, 94, 0.05) 0%, white 100%)",
                    }}
                  >
                    <h3 className="text-[18px] font-semibold leading-tight text-zinc-900 sm:text-[20px] md:text-[22px]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[14px] font-normal leading-[1.5] text-zinc-600 md:text-[16px]">
                      {step.description}
                    </p>
                  </div>
                </AnimateOnView>
              ))}
            </div>
          </div>
        </LazyBlock>
      </div>
    </section>
  );
}
