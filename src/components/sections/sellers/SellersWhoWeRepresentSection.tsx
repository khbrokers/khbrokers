"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Lottie from "lottie-react";
import { sellersWhoWeRepresentConfig } from "@/config/sellers.config";
import { AnimateOnView } from "@/components/ui/AnimateOnView";

const PRIMARY = "#039760";
const BENTO_LOTTIE_PATHS = [
  "/assets/sellers_landing/lottie/bento-01.json",
  "/assets/sellers_landing/lottie/bento-02.json",
  "/assets/sellers_landing/lottie/bento-03.json",
  "/assets/sellers_landing/lottie/bento-04.json",
];

export function SellersWhoWeRepresentSection() {
  const { heading, subheading, cards, cta } = sellersWhoWeRepresentConfig;
  const [lottieData, setLottieData] = useState<(object | null)[]>([
    null,
    null,
    null,
    null,
  ]);

  useEffect(() => {
    Promise.all(
      BENTO_LOTTIE_PATHS.map((path) =>
        fetch(path)
          .then((res) => res.json())
          .catch(() => null)
      )
    ).then(setLottieData);
  }, []);

  return (
    <section
      className="px-4 py-12 sm:py-16 md:py-24"
      style={{ backgroundColor: "#f0fdf4" }}
    >
      <div className="mx-auto max-w-6xl">
        <AnimateOnView
          animation="fade-up-slow"
          rootMargin="100px 0px -40px 0px"
          threshold={0.05}
        >
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
              animation="fade-up-slow"
              rootMargin="100px 0px -40px 0px"
              threshold={0.05}
              delayMs={idx * 80}
            >
              <div
                className="flex flex-col overflow-hidden rounded-2xl border bg-white shadow-sm shadow-[#5DB67C]/20"
                style={{
                  borderColor: "rgba(0, 0, 0, 0.06)",
                }}
              >
                <div
                  className="relative mx-auto mb-5 flex h-[180px] w-full items-center justify-center overflow-hidden rounded-2xl px-6 sm:h-[220px] md:h-[280px]"
                >
                  {idx < BENTO_LOTTIE_PATHS.length && lottieData[idx] ? (
                    <>
                      <div className="flex h-full w-full items-center justify-center">
                        <Lottie
                          animationData={lottieData[idx]!}
                          loop
                          style={{ width: "100%", height: "100%", maxHeight: "100%" }}
                        />
                      </div>
                      <div
                        className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white to-transparent sm:h-16 md:h-20"
                        aria-hidden
                      />
                      <div
                        className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-white to-transparent sm:h-16 md:h-20"
                        aria-hidden
                      />
                      <div
                        className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent sm:w-12 md:w-16"
                        aria-hidden
                      />
                      <div
                        className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent sm:w-12 md:w-16"
                        aria-hidden
                      />
                    </>
                  ) : (
                    <Image
                      src={card.image}
                      alt=""
                      width={800}
                      height={600}
                      quality={100}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                      className="h-full w-full object-contain"
                    />
                  )}
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

        <AnimateOnView
          animation="fade-up-slow"
          rootMargin="100px 0px -40px 0px"
          threshold={0.05}
        >
          <div className="mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:mt-16">
            {cta.map((item) => {
              const baseClasses = "inline-flex min-w-[160px] shrink-0 items-center justify-center whitespace-nowrap rounded-full px-5 py-3 text-[13px] font-medium sm:min-w-[180px] sm:px-6 sm:py-3.5 sm:text-[16px] md:min-w-[200px] md:px-8 md:py-4 md:text-[18px]";
              return item.primary ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`${baseClasses} border-2 text-white shadow-[inset_0_4px_14px_white] transition-colors hover:opacity-90`}
                  style={{
                    borderColor: "rgba(255,255,255,0.5)",
                    backgroundColor: PRIMARY,
                  }}
                >
                  {item.label}
                </Link>
              ) : (
                <div key={item.label} className="flex shrink-0 rounded-full bg-gradient-to-b from-zinc-900/10 to-transparent p-[2px]">
                  <Link
                    href={item.href}
                    className={`${baseClasses} bg-white text-zinc-900 transition-colors hover:bg-zinc-100`}
                  >
                    {item.label}
                  </Link>
                </div>
              );
            })}
          </div>
        </AnimateOnView>
      </div>
    </section>
  );
}
