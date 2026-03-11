"use client";

import { useEffect, useRef, useState } from "react";
import Lottie, { type LottieRef } from "lottie-react";
import { sellersStructuredApproachConfig } from "@/config/sellers.config";
import { LazyBlock } from "@/components/ui/LazyBlock";
import { AnimateOnView } from "@/components/ui/AnimateOnView";

const JOURNEY_LOTTIE_PATH = "/assets/sellers_landing/journey.json";

const CARD_STYLE = {
  background:
    "linear-gradient(to bottom, rgba(0, 150, 95, 0.2) 0%, rgba(0, 150, 95, 0) 100%)",
  border: "1px solid rgba(0, 150, 95, 0.4)",
  boxShadow: "inset 0 0 12px white",
};

export function SellersStructuredApproachSection() {
  const { heading, subheading, steps } = sellersStructuredApproachConfig;
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
      </div>
    </section>
  );
}
