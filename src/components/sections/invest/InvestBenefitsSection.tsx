"use client";

import Image from "next/image";
import { investBenefitsConfig } from "@/config/invest.config";
import { AnimateOnView } from "@/components/ui/AnimateOnView";

const PRIMARY = "#a36af6";

export function InvestBenefitsSection() {
  const { heading, cards, cta } = investBenefitsConfig;

  return (
    <section className="px-4 py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <AnimateOnView
          animation="stagger-slow"
          rootMargin="0px 0px -60px 0px"
          threshold={0.05}
        >
          <h2 className="stagger-child text-center text-[28px] font-medium leading-tight tracking-[-2px] text-zinc-900 sm:text-[34px] md:text-[42px] lg:text-[48px]">
            {heading.before}{" "}
            <span className="font-serif font-medium italic" style={{ color: PRIMARY }}>
              {heading.highlight}
            </span>
          </h2>
          <div className="stagger-child mx-auto max-w-5xl hidden md:block mt-4 flex justify-center sm:mt-5">
            <Image
              src="/assets/invest/arrow.png"
              alt=""
              width={120}
              height={24}
              className="h-[50px] md:h-[100px] w-full sm:h-5"
              unoptimized
            />
          </div>

          <div className="stagger-child mt-8 grid gap-8 sm:mt-8 md:grid-cols-3 md:gap-6 lg:gap-8">
            {cards.map((card) => (
              <div
                key={card.title}
                className="flex flex-col overflow-hidden rounded-2xl bg-[#F2E7FF]"
                style={{
                  boxShadow: "0 2px 16px rgba(163, 106, 246, 0.06)",
                  border: "1px solid rgba(163, 106, 246, 0.12)",
                }}
              >
                <div className="relative w-full overflow-hidden">
                  <Image
                    src={card.image}
                    alt=""
                    width={400}
                    height={250}
                    className="block w-full h-auto"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-[18px] font-medium leading-snug text-zinc-900 sm:text-[20px] md:text-[22px]">
                    {card.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[14px] leading-relaxed text-zinc-900/40 sm:text-[15px] md:text-[16px]">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="stagger-child mt-12 flex justify-center sm:mt-14">
            <a
              href={cta.href}
              className="inline-flex items-center justify-center rounded-full border-2 border-[#f7efff80] bg-[#a36af6] px-6 py-3.5 text-[15px] font-medium text-white shadow-[inset_0_4px_14px_white] transition-colors hover:bg-[#6d28d9] sm:px-8 sm:py-4 sm:text-[16px]"
            >
              {cta.label}
            </a>
          </div>
        </AnimateOnView>
      </div>
    </section>
  );
}
