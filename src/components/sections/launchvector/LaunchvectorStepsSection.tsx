"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { launchvectorStepsConfig } from "@/config/launchvector.config";
import { AnimateOnView } from "@/components/ui/AnimateOnView";

function StepCard({
  step,
  index,
}: {
  step: { number: string; title: string; description: string; highlight: string };
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "50px 0px -20px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="flex items-center justify-between overflow-hidden border-b-2 border-[#eadafd] px-[20px] last:border-b-0 sm:px-[30px] transition-all duration-700 ease-out"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? "translateX(0)"
          : "translateX(40px)",
        transitionDelay: `${index * 200}ms`,
      }}
    >
      {/* Large step number with gradient + white shadow */}
      <div
        className="relative shrink-0 transition-transform duration-1000 ease-out"
        style={{
          transform: isVisible ? "scale(1)" : "scale(0.5)",
          opacity: isVisible ? 1 : 0,
          transitionDelay: `${index * 200 + 300}ms`,
        }}
      >
        {/* White shadow layer */}
        <p
          className="select-none text-[70px] font-semibold leading-[1.5] tracking-[-7.2px] text-white sm:text-[90px] md:text-[120px]"
          style={{ transform: "translate(8px, 8px)" }}
          aria-hidden
        >
          {step.number}
        </p>
        {/* Gradient layer on top */}
        <p
          className="absolute inset-0 text-[70px] font-semibold leading-[1.5] tracking-[-7.2px] sm:text-[90px] md:text-[120px]"
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(163,99,244,0.6) 0%, rgba(255,255,255,0.12) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {step.number}
        </p>
      </div>

      {/* Text content */}
      <div
        className="flex flex-col gap-[10px] overflow-hidden px-[10px] py-[30px] sm:max-w-[371px] transition-all duration-700 ease-out"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(15px)",
          transitionDelay: `${index * 200 + 400}ms`,
        }}
      >
        <p className="text-[18px] font-normal leading-[1.5] tracking-[-1.32px] text-black sm:text-[22px]">
          {step.title}
        </p>
        <p className="text-[14px] font-normal leading-[1.5] tracking-[-0.96px] text-black/50 sm:text-[16px]">
          {step.description}{" "}
          <span className="font-medium text-black/60">
            {step.highlight}
          </span>
        </p>
      </div>
    </div>
  );
}

export function LaunchvectorStepsSection() {
  const { pill, heading, description, cta, steps } =
    launchvectorStepsConfig;

  return (
    <section className="bg-[#F5EEFD] px-4 py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-[40px] lg:px-[80px]">
        <div className="flex flex-col gap-8 py-[22px] md:flex-row md:items-start md:gap-[20px] lg:gap-[20px]">
          {/* Left side — text + CTAs with staggered slide-in-from-left */}
          <AnimateOnView
            animation="stagger-slow"
            rootMargin="100px 0px -40px 0px"
            threshold={0.05}
            className="md:w-[45%] lg:w-[590px] lg:shrink-0"
          >
            <div className="flex flex-col gap-[10px] px-[10px] py-[30px]">
              <div className="stagger-child">
                <span
                  className="inline-flex w-fit rounded-full border border-[rgba(163,99,244,0.4)] px-3 py-2 text-[12px] font-medium tracking-[-1.12px] text-black/80 backdrop-blur-sm sm:text-[14px]"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, rgba(163,99,244,0.2) 2%, rgba(211,202,253,0.2) 98%)",
                  }}
                >
                  {pill}
                </span>
              </div>
              <h2 className="stagger-child text-[28px] font-medium leading-[1.1] tracking-[-2px] text-black sm:text-[40px] sm:tracking-[-2.88px] md:text-[52px] lg:text-[68px]">
                {heading.before}
                <span className="font-serif italic text-[#a363f4]">
                  {heading.highlight}
                </span>
              </h2>
              <p className="stagger-child max-w-[533px] text-[16px] font-normal leading-[1.5] tracking-[-1.08px] text-black/60 sm:text-[18px]">
                {description}
              </p>
              <div className="stagger-child flex flex-wrap gap-[10px] py-[20px]">
                {/* Primary CTA */}
                <Link
                  href={cta.primary.href}
                  className="relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-[#a363f4] px-[20px] py-[14px] text-[16px] font-medium text-white transition-colors hover:brightness-110 sm:px-[30px] sm:py-[20px] sm:text-[18px]"
                >
                  <span className="pointer-events-none absolute inset-0 rounded-full bg-[#a363f4]" aria-hidden />
                  <span className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0_4px_8px_0_rgba(255,255,255,0.6)]" aria-hidden />
                  <span className="pointer-events-none absolute inset-[-2px] rounded-[inherit] shadow-[inset_0_0_20px_0_white]" aria-hidden />
                  <span className="relative">{cta.primary.label}</span>
                </Link>
              </div>
            </div>
          </AnimateOnView>

          {/* Right side — Step cards with custom per-card animations */}
          <div className="flex-1 md:min-w-0">
            <div className="overflow-hidden rounded-[20px] bg-white shadow-[0px_13px_30px_0px_rgba(0,0,0,0.05)] sm:rounded-[30px] lg:ml-auto lg:max-w-[625px]">
              {steps.map((step, i) => (
                <StepCard key={i} step={step} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
