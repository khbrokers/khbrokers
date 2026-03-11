"use client";

import { useState } from "react";
import Link from "next/link";
import { buyersOverpayConfig } from "@/config/buyers.config";
import { AnimateOnView } from "@/components/ui/AnimateOnView";
import { FaEyeSlash } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa";


const ICONS = {
  lightning: (
    <FaEyeSlash />
  ),
  chart: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z" />
    </svg>
  ),
  alert: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
    </svg>
  ),
  person: (
    <FaHandHoldingHeart />
  ),
  dollar: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
    </svg>
  ),
  lock: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
    </svg>
  ),
};

export function BuyersOverpaySection() {
  const { heading, subheading, tabs, problems, solutions } =
    buyersOverpayConfig;
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const isMarketReality = activeTab === "market-reality";

  return (
    <section className="bg-[#F5EEFD] px-4 py-12 sm:py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 sm:gap-12 md:grid-cols-[0.35fr_0.65fr] md:gap-16 lg:gap-20">
          <AnimateOnView
            animation="fade-up-slow"
            rootMargin="0px 0px -60px 0px"
            threshold={0.05}
            className="flex flex-col items-center text-center md:items-start md:text-left"
          >
            <h2 className="text-[26px] font-medium leading-[1.1] tracking-[-2px] text-zinc-900 sm:tracking-[-3px] sm:text-[36px] md:text-[58px] lg:text-[68px] p-0 m-0">
              {heading.before}
              <span className="font-serif font-medium italic text-[#6824BF]">
                {heading.highlight}
              </span>
            </h2>
            <AnimateOnView
              animation="fade-up-slow"
              rootMargin="0px 0px -60px 0px"
              threshold={0.05}
              delayMs={200}
            >
              <p className="mt-4 text-[14px] md:text-[18px] font-normal leading-[1.5] text-zinc-600">
                {subheading}
              </p>
            </AnimateOnView>

            {/* Switchable buttons */}
            <AnimateOnView
              animation="fade-up-slow"
              rootMargin="0px 0px -60px 0px"
              threshold={0.05}
              delayMs={400}
              className="mt-6 flex w-full flex-row gap-2 sm:mt-10 sm:flex-col sm:gap-4 md:mt-12"
            >
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-1/2 shrink-0 rounded-2xl px-4 py-3 text-left transition-colors sm:w-full sm:px-6 sm:py-5 md:px-8 md:py-6 ${
                      isActive
                        ? "border-l-4 border-l-[#714CA0] text-white sm:border-l-[6px]"
                        : "border-l-[4px] border-l-[#DBDBDB] border-zinc-200 bg-white text-zinc-900 hover:border-zinc-300 sm:border-l-[6px]"
                    }`}
                    style={
                      isActive
                        ? {
                            background:
                              "linear-gradient(to right, rgba(104, 36, 191, 0.6) 0%, rgba(104, 36, 191, 0.1) 100%)",
                          }
                        : undefined
                    }
                  >
                    <span className="block text-[16px] font-medium sm:text-[18px] md:text-[20px]">
                      {tab.label}
                    </span>
                    <span
                      className={`mt-0.5 block text-[14px] font-normal sm:mt-1 sm:text-[18px] md:text-[20px] ${isActive ? "text-white/90" : "text-zinc-900/60"
                        }`}
                    >
                      {tab.sublabel}
                    </span>
                  </button>
                );
              })}
            </AnimateOnView>
          </AnimateOnView>

          <AnimateOnView
            key={activeTab}
            animation="stagger-slower"
            rootMargin="0px 0px -80px 0px"
            threshold={0.05}
          >
          <div className="flex flex-col gap-8">
            {isMarketReality
              ? problems.map((item, idx) => (
                <article
                  key={idx}
                  className="stagger-child flex min-h-[260px] flex-col justify-between rounded-2xl bg-white p-5 shadow-sm sm:min-h-[280px] sm:p-6 md:min-h-[200px] md:p-8"
                >
                  <div className="flex h-full flex-col justify-between items-start gap-8">
                    <div className="flex flex-row gap-[10px] md:gap-[15px]">
                      <div
                        className="icon-gradient-bg flex h-10 w-10 shrink-0 items-center justify-center rounded-[15px] border border-[#E1C9FF] p-[7px] text-white"
                      >
                        {ICONS[item.icon as keyof typeof ICONS]}
                      </div>
                      <span className="flex items-center justify-center bg-[#F8F8F8] border-[1px] border-[#E2E2E2] px-[8px] py-[2px] rounded-[15px] md:px-[12px] md:py-[2px] text-[16px] md:text-[18px] font-normal text-zinc-500">
                        {item.label}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <h3 className="mt-1 text-[18px] font-medium text-zinc-900 sm:text-[20px] md:text-[22px]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-[14px] md:text-[18px] font-normal leading-[1.5] text-zinc-900/60 sm:text-[18px] md:text-[20px] lg:text-[22px]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))
              : solutions.map((item, idx) => (
                <article
                  key={idx}
                  className="stagger-child flex min-h-[260px] flex-col justify-between rounded-2xl bg-white p-5 shadow-sm sm:min-h-[280px] sm:p-6 md:min-h-[200px] md:p-8"
                >
                  <div className="flex h-full flex-col justify-between items-start gap-8">
                    <div className="flex flex-row gap-[10px] md:gap-[15px]">
                      <div
                        className="icon-gradient-bg flex h-10 w-10 shrink-0 items-center justify-center rounded-[15px] border border-[#E1C9FF] p-[7px] text-white"
                      >
                        {ICONS[item.icon as keyof typeof ICONS]}
                      </div>
                      <span className="flex items-center justify-center bg-[#F8F8F8] border-[1px] border-[#E2E2E2] px-[8px] py-[2px] rounded-[15px] md:px-[12px] md:py-[2px] text-[18px] md:text-[20px] font-normal text-zinc-500">
                          {item.label}
                        </span>
                    </div>
                    <div className="min-w-0">
                      <h3 className="mt-1 text-[18px] font-medium text-zinc-900 sm:text-[20px] md:text-[22px]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-[14px] md:text-[18px] font-normal leading-[1.5] text-zinc-900/60 sm:text-[18px] md:text-[20px] lg:text-[22px]">
                        {item.description}
                      </p>
                      <Link
                        href={item.cta.href}
                        className="mt-4 inline-flex items-center gap-1 text-[14px] md:text-[18px] font-medium text-[#6824BF] transition-colors hover:text-[#5a1fa8]"
                      >
                        {item.cta.label}
                        <span aria-hidden>→</span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
          </div>
          </AnimateOnView>
        </div>
      </div>
    </section>
  );
}
