"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { launchvectorComparisonConfig } from "@/config/launchvector.config";
import { AnimateOnView } from "@/components/ui/AnimateOnView";

function CountUp({
  target,
  prefix = "",
  suffix = "",
  duration = 2000,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  const startAnimation = useCallback(() => {
    if (hasStarted) return;
    setHasStarted(true);
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [hasStarted, target, duration]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [startAnimation]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

function XIcon() {
  return (
    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round">
        <path d="M2 2l8 8M10 2l-8 8" />
      </svg>
    </div>
  );
}

function CheckIcon() {
  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src="/assets/launchvector/check-purple.svg"
      alt=""
      className="h-6 w-6 shrink-0"
    />
  );
}

export function LaunchvectorComparisonSection() {
  const { pill, heading, cards, cta, savings } =
    launchvectorComparisonConfig;

  return (
    <section className="bg-[#F5EEFD] px-4 py-12 sm:py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] sm:px-2 md:px-10 lg:px-20">
        <AnimateOnView
          animation="fade-up-slow"
          rootMargin="0px 0px -60px 0px"
          threshold={0.05}
        >
          {/* Pill */}
          <div className="mb-6 flex justify-center sm:mb-10">
            <span
              className="rounded-full border border-[rgba(163,99,244,0.4)] px-3 py-2 text-[12px] font-medium text-black/80 backdrop-blur-sm sm:text-[14px]"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgba(163,99,244,0.2) 2%, rgba(211,202,253,0.2) 98%)",
              }}
            >
              {pill}
            </span>
          </div>
          {/* Heading */}
          <h2 className="mb-8 text-center text-[28px] font-semibold leading-[1.1] tracking-[-2.7px] text-black sm:mb-12 sm:text-[36px] md:text-[45px]">
            <span className="font-medium">Two Models. Two Very </span>
            <span className="font-serif italic tracking-[-1.8px] text-[#a363f4]">
              {heading.highlight}
            </span>
          </h2>
        </AnimateOnView>

        {/* Comparison Table */}
        <AnimateOnView
          animation="fade-up-slow"
          rootMargin="0px 0px -40px 0px"
          threshold={0.05}
        >
          <div className="overflow-hidden rounded-[20px] border border-black/10 sm:rounded-[30px]">
            {/* Table Header */}
            <div className="grid grid-cols-2">
              <div className="flex items-center justify-center bg-[#f0e4f7] px-4 py-4 sm:py-5">
                <span className="text-[14px] font-semibold tracking-[-0.5px] text-black/40 sm:text-[18px] md:text-[20px]">
                  50% Equity Models
                </span>
              </div>
              <div className="flex items-center justify-center bg-[#a363f4] px-4 py-4 sm:py-5">
                <span className="text-[14px] font-semibold tracking-[-0.5px] text-white sm:text-[18px] md:text-[20px]">
                  KH Brokers
                </span>
              </div>
            </div>

            {/* Comparison Rows */}
            {cards.map((card, cardIdx) => (
              <div
                key={cardIdx}
                className={`grid grid-cols-2 ${
                  cardIdx < cards.length - 1 ? "border-b border-black/5" : ""
                }`}
              >
                {/* Left side — muted / negative */}
                <div className="border-r border-black/5 bg-white p-4 sm:p-6 md:p-8">
                  {/* Row title */}
                  <p className="mb-4 text-[15px] font-semibold leading-[1.2] tracking-[-1px] text-black/50 sm:mb-5 sm:text-[20px] md:text-[22px]">
                    {card.leftTitle}
                  </p>
                  {card.leftHighlight && (
                    <p className="mb-4 text-[18px] font-bold tracking-[-1px] text-red-400/80 sm:mb-5 sm:text-[24px]">
                      {card.leftHighlight}
                    </p>
                  )}
                  {/* Items */}
                  <div className="flex flex-col gap-3 sm:gap-4">
                    {card.leftItems.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3"
                      >
                        <XIcon />
                        <p className="text-[13px] font-normal leading-[1.4] tracking-[-0.5px] text-black/40 sm:text-[16px]">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right side — vibrant / positive */}
                <div
                  className="p-4 sm:p-6 md:p-8"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, rgba(163,99,244,0.08) 0%, rgba(163,99,244,0.15) 100%)",
                  }}
                >
                  {/* Row title */}
                  <p className="mb-4 text-[15px] font-semibold leading-[1.2] tracking-[-1px] text-black/80 sm:mb-5 sm:text-[20px] md:text-[22px]">
                    {card.rightTitle.includes("100%") ? (
                      <>
                        You Own{" "}
                        <span className="text-[#a363f4]">100% of the Business</span>
                      </>
                    ) : card.rightTitle.includes(": ") ? (
                      <>
                        {card.rightTitle.split(": ")[0]}:{" "}
                        <span className="text-[#a363f4]">{card.rightTitle.split(": ")[1]}</span>
                      </>
                    ) : (
                      card.rightTitle
                    )}
                  </p>
                  {card.rightHighlight && (
                    <p className="mb-4 text-[18px] font-bold tracking-[-1px] text-[#a363f4] sm:mb-5 sm:text-[24px]">
                      {card.rightHighlight}
                    </p>
                  )}
                  {/* Items */}
                  <div className="flex flex-col gap-3 sm:gap-4">
                    {card.rightItems.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3"
                      >
                        <CheckIcon />
                        <p className="text-[13px] font-medium leading-[1.4] tracking-[-0.5px] text-black/80 sm:text-[16px]">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimateOnView>

        {/* CTA buttons */}
        <AnimateOnView
          animation="fade-up-slow"
          rootMargin="0px 0px -60px 0px"
          threshold={0.05}
        >
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-12 sm:gap-5">
            <Link
              href={cta.primary.href}
              className="rounded-full border border-[#7100ff] bg-[#a363f4] px-6 py-4 text-[16px] font-medium text-white shadow-[inset_0_4px_8px_rgba(255,255,255,0.8)] transition-colors hover:bg-[#6d28d9] sm:px-10 sm:py-5 sm:text-[18px]"
            >
              {cta.primary.label}
            </Link>
            <Link
              href={cta.secondary.href}
              className="rounded-full border border-[#b2b2b2] bg-white px-6 py-4 text-[16px] font-medium text-[#454545] shadow-[inset_0_4px_14px_rgba(255,255,255,0.5)] transition-colors hover:bg-zinc-50 sm:px-7.5 sm:py-5 sm:text-[18px]"
            >
              {cta.secondary.label}
            </Link>
          </div>
        </AnimateOnView>

        {/* Savings banner */}
        <AnimateOnView
          animation="fade-up-slow"
          rootMargin="0px 0px -60px 0px"
          threshold={0.05}
        >
          <div
            className="mt-10 flex flex-col items-center gap-5 rounded-[30px] px-6 py-12.5 sm:mt-16 sm:px-10"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(163,99,244,0) 0%, rgba(163,99,244,0.2) 38.5%, rgba(163,99,244,0.2) 62%, rgba(163,99,244,0) 100%)",
            }}
          >
            <div className="flex flex-col items-center gap-2.5 text-center">
              {/* $264,000 — animated count-up */}
              <div className="relative">
                <p
                  className="text-[50px] font-bold leading-[1.1] tracking-[-1.5px] text-[rgba(0,0,0,0.1)] sm:text-[75px]"
                  style={{ transform: "translate(0, 4px)" }}
                  aria-hidden
                >
                  <CountUp target={264000} prefix="$" />
                </p>
                <p
                  className="absolute inset-0 text-[50px] font-bold leading-[1.1] tracking-[-1.5px] sm:text-[75px]"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(163,99,244,0) 0%, rgba(125,74,190,0.3) 80.156%), linear-gradient(90deg, rgb(201,158,255) 0%, rgb(201,158,255) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  <CountUp target={264000} prefix="$" />
                </p>
              </div>
              <p className="max-w-[462px] text-[16px] font-normal leading-[1.4] tracking-[-1.08px] text-black/50 sm:text-[18px]">
                {savings.description}
              </p>
            </div>
            <div className="py-5">
              <Link
                href={savings.cta.href}
                className="relative inline-flex items-center justify-center overflow-hidden rounded-full border border-[#7100ff] px-7.5 py-5 text-[16px] font-medium text-white transition-colors hover:brightness-110 sm:px-10 sm:text-[18px]"
              >
                <span className="pointer-events-none absolute inset-0 rounded-full bg-[#a363f4]" aria-hidden />
                <span className="pointer-events-none absolute inset-[-1px] rounded-[inherit] shadow-[inset_0_4px_8px_0_rgba(255,255,255,0.6)]" aria-hidden />
                <span className="relative">{savings.cta.label}</span>
              </Link>
            </div>
          </div>
        </AnimateOnView>
      </div>
    </section>
  );
}
