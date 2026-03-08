"use client";

import Image from "next/image";
import { sellersWhoWeRepresentConfig } from "@/config/sellers.config";
import { AnimateOnView } from "@/components/ui/AnimateOnView";

const PRIMARY = "#039760";

export function SellersWhoWeRepresentSection() {
  const { heading, subheading, cards } = sellersWhoWeRepresentConfig;

  return (
    <section
      className="px-4 py-12 sm:py-16 md:py-24"
      style={{ backgroundColor: "#f0fdf4" }}
    >
      <div className="mx-auto max-w-6xl">
        <AnimateOnView animation="fade-up" rootMargin="0px 0px -80px 0px">
          <header className="mb-12 text-center md:mb-16">
            <h2 className="text-[26px] font-medium leading-[1.1] tracking-[-2px] text-zinc-900 sm:text-[32px] md:text-[44px] lg:text-[52px]">
              {heading.before}
              <span
                className="font-serif font-medium italic"
                style={{ color: PRIMARY }}
              >
                {heading.highlight}
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-relaxed text-zinc-600 sm:text-base md:text-[16px]">
              {subheading}
            </p>
          </header>
        </AnimateOnView>

        <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
          {cards.map((card, idx) => (
            <AnimateOnView
              key={idx}
              animation="fade-up"
              rootMargin="0px 0px -40px 0px"
              threshold={0.05}
            >
              <div
                className="flex flex-col overflow-hidden rounded-2xl border bg-white shadow-sm shadow-[#5DB67C]/20"
                style={{
                  borderColor: "rgba(0, 0, 0, 0.06)",
                }}
              >
                <div
                  className="relative mx-auto mb-5 flex h-[180px] w-full items-center justify-center overflow-hidden rounded-2xl px-6 sm:h-[220px] md:h-[280px]"
                  // style={{
                  //   background:
                  //     "linear-gradient(135deg, rgba(222, 243, 236, 0.6) 0%, rgba(240, 253, 244, 0.4) 100%)",
                  // }}
                >
                  <Image
                    src={card.image}
                    alt=""
                    width={800}
                    height={600}
                    quality={100}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="flex flex-col h-[140px] md:h-[130px] pt-0 md:pt-0 gap-[5px] md:gap-[10px] p-4 sm:p-5 md:p-[30px]">
                  <h3 className="font-regular text-[18px] tracking-[-0.5px] text-zinc-900 md:text-[22px]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-[1.5] text-zinc-900/50 md:text-[15px]">
                    {card.description}
                  </p>
                </div>
              </div>
            </AnimateOnView>
          ))}
        </div>
      </div>
    </section>
  );
}
