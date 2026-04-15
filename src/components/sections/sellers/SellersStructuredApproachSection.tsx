"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Lottie, { type LottieRef } from "lottie-react";
import { sellersStructuredApproachConfig } from "@/config/sellers.config";
import { LazyBlock } from "@/components/ui/LazyBlock";

const JOURNEY_LOTTIE_PATH = "/assets/sellers_landing/journey.json";

const CARD_STYLE = {
  background:
    "linear-gradient(to bottom, rgba(0, 150, 95, 0.2) 0%, rgba(0, 150, 95, 0) 100%)",
  border: "1px solid rgba(0, 150, 95, 0.4)",
  boxShadow: "inset 0 0 12px white",
};

const PRIMARY = "#00965F";

export function SellersStructuredApproachSection() {
  const { heading, subheading, steps, cta } = sellersStructuredApproachConfig;
  const [isMobile, setIsMobile] = useState(false);
  const [journeyLottieData, setJourneyLottieData] = useState<object | null>(null);
  const lottieRef = useRef<LottieRef["current"]>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasPlayedRef = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = () => setIsMobile(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    fetch(JOURNEY_LOTTIE_PATH)
      .then((res) => res.json())
      .then(setJourneyLottieData)
      .catch(() => null);
  }, []);

  const tryPlay = () => {
    if (hasPlayedRef.current) return;
    if (lottieRef.current?.animationLoaded) {
      hasPlayedRef.current = true;
      lottieRef.current.setSpeed(4);
      lottieRef.current.play();
    }
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el || !journeyLottieData) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) tryPlay();
      },
      { rootMargin: "100px 0px -40px 0px", threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [journeyLottieData]);

  return (
    <section
      className="px-4 py-12 sm:py-16 md:py-24"
      style={{ backgroundColor: "#f0fdf4" }}
    >
      <div className="mx-auto max-w-6xl">
        <LazyBlock animation="fade-up" rootMargin="100px 0px -40px 0px">
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

        <LazyBlock animation="fade-up" rootMargin="100px 0px -40px 0px">
          <div className="relative">
            <div
              ref={containerRef}
              className="relative z-10 mx-auto flex h-[420px] w-full max-w-6xl items-center justify-center overflow-hidden sm:h-[520px] md:h-[620px] lg:h-[720px]"
            >
              {journeyLottieData ? (
                <div className="flex h-full w-full items-center justify-center">
                  <Lottie
                    lottieRef={lottieRef}
                    animationData={journeyLottieData}
                    loop={false}
                    autoplay={false}
                    onDataReady={() => {
                      if (containerRef.current) {
                        const rect = containerRef.current.getBoundingClientRect();
                        const inView =
                          rect.top < window.innerHeight && rect.bottom > 0;
                        if (inView) tryPlay();
                      }
                    }}
                    style={{ width: "100%", height: "100%", maxHeight: "100%" }}
                  />
                </div>
              ) : null}
            </div>
          </div>
        </LazyBlock>

        <LazyBlock animation="fade-up" rootMargin="100px 0px -40px 0px">
          <div className="mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:mt-16">
            {cta.map((item) =>
              item.primary ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex shrink-0 items-center justify-center whitespace-nowrap rounded-full border-2 px-4 py-2.5 text-[13px] font-medium text-white shadow-[inset_0_4px_14px_white] transition-colors hover:opacity-90 sm:px-5 sm:py-3 sm:text-[16px] md:px-6 md:py-3.5 md:text-[18px]"
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
                    className="block whitespace-nowrap rounded-full bg-white px-4 py-2.5 text-[13px] font-medium text-zinc-900 transition-colors hover:bg-zinc-100 sm:px-5 sm:py-3 sm:text-[16px] md:px-6 md:py-3.5 md:text-[18px]"
                  >
                    {item.label}
                  </Link>
                </div>
              )
            )}
          </div>
        </LazyBlock>
      </div>
    </section>
  );
}
