"use client";

import { useState } from "react";
import Link from "next/link";
import { launchvectorFaqConfig } from "@/config/launchvector.config";
import { AnimateOnView } from "@/components/ui/AnimateOnView";

export function LaunchvectorFaqSection() {
  const { heading, subheading, cta, items } = launchvectorFaqConfig;
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white px-4 py-12 sm:py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-[40px] lg:px-[80px]">
        <div className="grid gap-8 sm:gap-12 md:grid-cols-[0.35fr_0.65fr] md:gap-[40px] lg:grid-cols-[466px_1fr]">
          {/* Left */}
          <AnimateOnView
            animation="fade-up-slow"
            rootMargin="0px 0px -60px 0px"
            threshold={0.05}
            className="text-center sm:text-left"
          >
            <h2 className="text-[28px] font-medium leading-[1.1] tracking-[-2px] text-black sm:text-[40px] sm:tracking-[-3px] md:text-[56px] md:tracking-[-4.08px] lg:text-[68px]">
              {heading.before}
              <span className="font-serif italic text-[#a363f4]">
                {heading.highlight}
              </span>
            </h2>
            <p className="mt-4 text-[16px] leading-[1.5] tracking-[-1.08px] text-black/60 sm:text-[18px]">
              {subheading}
            </p>
            <Link
              href={cta.href}
              className="mt-6 inline-flex rounded-full bg-[#a363f4] px-[30px] py-[20px] text-[16px] font-medium text-white shadow-[inset_0_4px_14px_rgba(255,255,255,0.5)] transition-colors hover:bg-[#6d28d9] sm:text-[18px]"
            >
              {cta.label}
            </Link>
          </AnimateOnView>

          {/* Right - Accordion */}
          <AnimateOnView
            animation="stagger-slower"
            rootMargin="0px 0px -80px 0px"
            threshold={0.05}
          >
            <div className="flex flex-col gap-4">
              {items.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className="stagger-child overflow-hidden rounded-[20px] border transition-[border-color,background-color] duration-300 ease-out"
                    style={{
                      borderColor: isOpen
                        ? "#a363f4"
                        : "rgba(0, 0, 0, 0.5)",
                      backgroundColor: isOpen ? "#fdfdfd" : "transparent",
                    }}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setOpenIndex(isOpen ? -1 : idx)
                      }
                      className="flex w-full items-start justify-between gap-3 p-4 text-left transition-colors hover:bg-zinc-50/50 sm:p-5 md:p-6"
                      aria-expanded={isOpen}
                    >
                      <span
                        className={`text-[16px] font-medium transition-colors duration-300 sm:text-[18px] md:text-[22px] ${
                          isOpen
                            ? "text-[#a363f4]"
                            : "text-black/90"
                        }`}
                      >
                        {item.question}
                      </span>
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 transition-colors duration-300 ${
                          isOpen
                            ? "border-[#a363f4] text-[#a363f4]"
                            : "border-black/50 text-black/50"
                        }`}
                        aria-hidden
                      >
                        <svg
                          width="10"
                          height="6"
                          viewBox="0 0 10 6"
                          fill="none"
                          className={`shrink-0 transition-transform duration-300 ease-out ${isOpen ? "rotate-180" : ""}`}
                        >
                          <path
                            d="M1 1L5 5L9 1"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </button>
                    <div
                      className="grid transition-[grid-template-rows] duration-300 ease-out"
                      style={{
                        gridTemplateRows: isOpen ? "1fr" : "0fr",
                      }}
                    >
                      <div className="min-h-0 overflow-hidden">
                        <div className="px-4 pb-4 pt-0 sm:px-5 sm:pb-5 md:px-6 md:pb-6">
                          <div className="space-y-4 pt-2">
                            {item.answer.map((para, pIdx) => (
                              <p
                                key={pIdx}
                                className="text-[14px] leading-relaxed text-black/50 sm:text-[16px] md:text-[18px]"
                              >
                                {para}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </AnimateOnView>
        </div>
      </div>
    </section>
  );
}
