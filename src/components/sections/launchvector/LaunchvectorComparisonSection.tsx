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
      // ease-out cubic
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

function CheckIcon({ variant }: { variant: "gray" | "purple" }) {
  if (variant === "gray") {
    return (
      /* eslint-disable-next-line @next/next/no-img-element */
      <img
        src="/assets/launchvector/check-gray.svg"
        alt=""
        className="h-6 w-6 shrink-0"
      />
    );
  }
  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src="/assets/launchvector/check-purple.svg"
      alt=""
      className="h-6 w-6 shrink-0"
    />
  );
}

function ComparisonCard({
  leftLabel,
  leftTitle,
  leftItems,
  leftHighlight,
  rightLabel,
  rightTitle,
  rightItems,
  rightHighlight,
}: {
  leftLabel: string;
  leftTitle: string;
  leftItems: string[];
  leftHighlight?: string;
  rightLabel: string;
  rightTitle: string;
  rightItems: string[];
  rightHighlight?: string;
}) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-stretch sm:gap-6 md:gap-[30px]">
      {/* Left - 50% Equity */}
      <div className="flex flex-1 flex-col overflow-hidden rounded-[20px] bg-[#d3b3fa] p-px sm:rounded-[30px]">
        <div className="flex items-center justify-center">
          <span className="rounded-b-[15px] px-3 py-2.5 text-[14px] font-medium tracking-[-1.44px] text-[#393939] sm:text-[18px]">
            {leftLabel}
          </span>
        </div>
        <div className="flex flex-1 flex-col gap-5 overflow-hidden rounded-[20px] border-2 border-[#cda3ff] bg-white p-5 sm:gap-[30px] sm:rounded-[30px] sm:p-10">
          <p className="text-center text-[18px] font-medium tracking-[-1.5px] text-black/70 sm:text-[25px]">
            {leftTitle}
          </p>
          {leftHighlight && (
            <p className="text-center text-[20px] font-medium tracking-[-1.5px] text-[#a363f4] sm:text-[26px]">
              {leftHighlight}
            </p>
          )}
          <div className="flex flex-col gap-4 sm:gap-5">
            {leftItems.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-[15px] bg-gradient-to-r from-[rgba(249,244,255,0.7)] from-50% to-[rgba(249,244,255,0)] to-[91%] p-3 backdrop-blur-sm sm:gap-5 sm:rounded-[20px] sm:p-[15px]"
              >
                <CheckIcon variant="gray" />
                <p className="text-[14px] font-medium leading-[1.4] tracking-[-1.08px] text-black/80 sm:text-[18px]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right - KH Brokers */}
      <div className="flex flex-1 flex-col overflow-hidden rounded-[20px] bg-[#a363f4] p-px sm:rounded-[30px]">
        <div className="flex items-center justify-center">
          <span className="rounded-b-[15px] px-3 py-2.5 text-[14px] font-medium tracking-[-1.44px] text-white sm:text-[18px]">
            {rightLabel}
          </span>
        </div>
        <div
          className="flex flex-1 flex-col gap-5 overflow-hidden rounded-[20px] border-2 border-white p-5 sm:gap-[30px] sm:rounded-[30px] sm:p-10"
          style={{
            backgroundImage:
              "linear-gradient(0deg, rgb(210,178,250) 0%, rgb(242,232,255) 100%)",
          }}
        >
          <p className="text-center text-[18px] font-medium tracking-[-1.5px] text-black/70 sm:text-[25px]">
            {rightTitle.split(": ").length > 1 ? (
              <>
                <span>{rightTitle.split(": ")[0]}: </span>
                <span className="text-[#a363f4]">{rightTitle.split(": ")[1]}</span>
              </>
            ) : (
              <>
                {rightTitle.includes("100%") ? (
                  <>
                    <span>You Own </span>
                    <span className="text-[#a363f4]">100% of the Business</span>
                  </>
                ) : (
                  rightTitle
                )}
              </>
            )}
          </p>
          {rightHighlight && (
            <p className="text-center text-[20px] font-medium tracking-[-1.5px] text-[#a363f4] sm:text-[26px]">
              {rightHighlight}
            </p>
          )}
          <div className="flex flex-col gap-4 sm:gap-5">
            {rightItems.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-[15px] bg-gradient-to-r from-[rgba(249,244,255,0.7)] from-50% to-[rgba(249,244,255,0)] to-[91%] p-3 backdrop-blur-sm sm:gap-5 sm:rounded-[20px] sm:p-[15px]"
              >
                <CheckIcon variant="purple" />
                <p className="text-[14px] font-medium leading-[1.4] tracking-[-1.08px] text-black sm:text-[18px]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function LaunchvectorComparisonSection() {
  const { pill, heading, cards, cta, savings } =
    launchvectorComparisonConfig;

  return (
    <section className="bg-[#F5EEFD] px-4 py-12 sm:py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] sm:px-2 md:px-[40px] lg:px-[80px]">
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

        {/* Comparison cards */}
        <AnimateOnView
          animation="stagger-slower"
          rootMargin="0px 0px -40px 0px"
          threshold={0.05}
        >
          <div className="flex flex-col gap-6 sm:gap-10">
            {cards.map((card, i) => (
              <div key={i} className="stagger-child">
                <ComparisonCard
                  leftLabel={card.leftLabel}
                  leftTitle={card.leftTitle}
                  leftItems={card.leftItems}
                  leftHighlight={card.leftHighlight}
                  rightLabel={card.rightLabel}
                  rightTitle={card.rightTitle}
                  rightItems={card.rightItems}
                  rightHighlight={card.rightHighlight}
                />
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
              className="rounded-full border border-[#b2b2b2] bg-white px-6 py-4 text-[16px] font-medium text-[#454545] shadow-[inset_0_4px_14px_rgba(255,255,255,0.5)] transition-colors hover:bg-zinc-50 sm:px-[30px] sm:py-5 sm:text-[18px]"
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
            className="mt-10 flex flex-col items-center gap-[20px] rounded-[30px] px-6 py-[50px] sm:mt-16 sm:px-10"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(163,99,244,0) 0%, rgba(163,99,244,0.2) 38.5%, rgba(163,99,244,0.2) 62%, rgba(163,99,244,0) 100%)",
            }}
          >
            <div className="flex flex-col items-center gap-[10px] text-center">
              {/* $264,000 — animated count-up with two-layer gradient text */}
              <div className="relative">
                {/* Shadow layer */}
                <p
                  className="text-[50px] font-bold leading-[1.1] tracking-[-1.5px] text-[rgba(0,0,0,0.1)] sm:text-[75px]"
                  style={{ transform: "translate(0, 4px)" }}
                  aria-hidden
                >
                  <CountUp target={264000} prefix="$" />
                </p>
                {/* Gradient layer */}
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
            <div className="py-[20px]">
              <Link
                href={savings.cta.href}
                className="relative inline-flex items-center justify-center overflow-hidden rounded-full border border-[#7100ff] px-[30px] py-[20px] text-[16px] font-medium text-white transition-colors hover:brightness-110 sm:px-[40px] sm:text-[18px]"
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
