"use client";

import { useState } from "react";
import Link from "next/link";
import { sellersWhySellConfig } from "@/config/sellers.config";
import { LazyBlock } from "@/components/ui/LazyBlock";
import { AnimateOnView } from "@/components/ui/AnimateOnView";

const PRIMARY = "#16a34a";

export function SellersWhySellSection() {
  const { heading, subheading, tabs, featureCard } = sellersWhySellConfig;
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <section
      className="px-4 py-12 sm:py-16 md:py-24"
      style={{ backgroundColor: "#f0fdf4" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 sm:gap-12 md:grid-cols-[0.35fr_0.65fr] md:gap-16 lg:gap-20">
          <LazyBlock>
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <h2 className="text-[26px] font-medium leading-[1.1] tracking-[-2px] text-zinc-900 sm:text-[36px] md:text-[58px] lg:text-[68px]">
                {heading.before}
                <span className="font-serif font-medium italic" style={{ color: PRIMARY }}>
                  {heading.highlight}
                </span>
              </h2>
              <p className="mt-4 text-[14px] font-normal leading-[1.5] text-zinc-600 md:text-[18px]">
                {subheading}
              </p>

              <div className="mt-6 flex w-full flex-col gap-2 sm:mt-10 sm:gap-4 md:mt-12">
                {tabs.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full shrink-0 rounded-2xl px-4 py-3 text-left transition-colors sm:px-6 sm:py-5 md:px-8 md:py-6 ${
                        isActive
                          ? "border-l-4 border-l-[#16a34a] text-white sm:border-l-[6px]"
                          : "border-l-[4px] border-l-[#DBDBDB] border-zinc-200 bg-white text-zinc-900 hover:border-zinc-300 sm:border-l-[6px]"
                      }`}
                      style={
                        isActive
                          ? {
                              background:
                                "linear-gradient(to right, rgba(22, 163, 74, 0.6) 0%, rgba(22, 163, 74, 0.1) 100%)",
                            }
                          : undefined
                      }
                    >
                      <span className="block text-[16px] font-medium sm:text-[18px] md:text-[20px]">
                        {tab.label}
                      </span>
                      <span
                        className={`mt-0.5 block text-[14px] font-normal sm:mt-1 sm:text-[18px] md:text-[20px] ${
                          isActive ? "text-white/90" : "text-zinc-900/60"
                        }`}
                      >
                        {tab.sublabel}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </LazyBlock>

          <AnimateOnView animation="stagger" rootMargin="0px 0px -80px 0px">
            <article className="stagger-child flex min-h-[260px] flex-col justify-between rounded-2xl bg-white p-5 shadow-sm sm:min-h-[280px] sm:p-6 md:min-h-[200px] md:p-8">
              <div className="flex h-full flex-col justify-between items-start gap-8">
                <div className="min-w-0">
                  <h3 className="text-[18px] font-medium text-zinc-900 sm:text-[20px] md:text-[22px]">
                    {featureCard.title}
                  </h3>
                  <p className="mt-2 text-[14px] font-normal leading-[1.5] text-zinc-900/60 sm:text-[18px] md:text-[20px] lg:text-[22px]">
                    {featureCard.description}
                  </p>
                  <Link
                    href={featureCard.cta.href}
                    className="mt-4 inline-flex items-center gap-1 text-[14px] font-medium transition-colors hover:opacity-80 md:text-[18px]"
                    style={{ color: PRIMARY }}
                  >
                    {featureCard.cta.label}
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            </article>
          </AnimateOnView>
        </div>
      </div>
    </section>
  );
}
