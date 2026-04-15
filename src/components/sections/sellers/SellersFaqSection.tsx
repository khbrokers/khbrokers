"use client";

import { useState } from "react";
import { sellersFaqConfig } from "@/config/sellers.config";
import { AnimateOnView } from "@/components/ui/AnimateOnView";

const PRIMARY = "#16a34a";

export function SellersFaqSection() {
  const { heading, subheading, items } = sellersFaqConfig;
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faqs" className="scroll-mt-20 bg-[#f0fdf4] px-4 py-12 sm:py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 sm:gap-12 md:grid-cols-[0.35fr_0.65fr] md:gap-16 lg:gap-20">
          <AnimateOnView
            animation="fade-up-slow"
            rootMargin="100px 0px -40px 0px"
            threshold={0.05}
            className="text-center sm:text-left"
          >
            <h2 className="text-[26px] font-medium leading-[1.1] tracking-[-2px] text-zinc-900 sm:text-[32px] md:text-[40px] lg:text-[48px]">
              {heading.before}
              <span className="font-serif font-medium italic" style={{ color: PRIMARY }}>
                {heading.highlight}
              </span>
            </h2>
            <AnimateOnView
              animation="fade-up-slow"
              rootMargin="0px 0px -60px 0px"
              threshold={0.05}
              delayMs={200}
            >
              <p className="mt-4 text-base font-normal text-zinc-600 md:text-lg">
                {subheading}
              </p>
            </AnimateOnView>
          </AnimateOnView>

          <AnimateOnView animation="stagger" rootMargin="100px 0px -40px 0px" threshold={0.05}>
            <div className="flex flex-col gap-4">
              {items.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className="stagger-child overflow-hidden rounded-[20px] border-2 bg-white transition-[border-color] duration-300 ease-out"
                    style={{
                      borderColor: isOpen
                        ? "rgba(34, 197, 94, 0.5)"
                        : "rgba(0, 0, 0, 0.08)",
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                      className="flex w-full items-start justify-between gap-3 p-4 text-left transition-colors hover:bg-zinc-50/50 sm:p-5 md:p-6"
                      aria-expanded={isOpen}
                    >
                      <span
                        className={`text-base font-medium transition-colors duration-300 md:text-lg ${
                          isOpen
                            ? "font-semibold"
                            : "text-zinc-900"
                        }`}
                        style={isOpen ? { color: PRIMARY } : undefined}
                      >
                        {item.question}
                      </span>
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 bg-white transition-colors duration-300 ${
                          isOpen
                            ? "border-[#16a34a]"
                            : "border-zinc-900/50 text-zinc-900/50"
                        }`}
                        style={isOpen ? { color: PRIMARY } : undefined}
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
                      style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                    >
                      <div className="min-h-0 overflow-hidden">
                        <div className="px-4 pb-4 pt-0 sm:px-5 sm:pb-5 md:px-6 md:pb-6">
                          <div className="space-y-4 pt-2">
                            {item.answer.map((para, pIdx) => (
                              <p
                                key={pIdx}
                                className="text-sm leading-relaxed text-zinc-600 md:text-base"
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
