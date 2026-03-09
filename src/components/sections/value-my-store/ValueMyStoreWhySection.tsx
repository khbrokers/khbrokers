"use client";

import Link from "next/link";
import { valueMyStoreWhyConfig } from "@/config/value-my-store.config";
import { AnimateOnView } from "@/components/ui/AnimateOnView";

const PRIMARY = "#00965F";

export function ValueMyStoreWhySection() {
  const { title, subtitle, miss90, exit10, processFailure } = valueMyStoreWhyConfig;

  return (
    <section className="px-4 py-12 sm:py-16 md:py-24" style={{ backgroundColor: "#F0FFFA" }}>
      <div className="mx-auto max-w-5xl">
        {/* Main title */}
        <AnimateOnView animation="fade-up" rootMargin="0px 0px -60px 0px">
          <h2 className="text-center text-[28px] font-medium leading-[1.1] tracking-[-2px] text-zinc-900 sm:text-[36px] md:text-[44px] lg:text-[52px]">
            {title.before}
            <span className="font-serif font-medium italic" style={{ color: PRIMARY }}>
              {title.highlight}
            </span>
            {title.after}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-[15px] italic leading-relaxed text-zinc-500 sm:text-base md:text-[17px]">
            {subtitle}
          </p>
        </AnimateOnView>

        {/* 90% vs 10% comparison card */}
        <AnimateOnView
          animation="fade-up"
          rootMargin="0px 0px -60px 0px"
          className="mt-10 overflow-hidden rounded-[24px] p-0 shadow-xl shadow-[#00965F]/10 sm:mt-12 sm:rounded-[28px] md:mt-16"
          style={{
            border: "2px solid transparent",
            background:
              "linear-gradient(45deg, #36AC8110 10%, #FCFDFF 50%, #36AC8110 90%) padding-box, linear-gradient(to bottom, rgba(85,170,115,0.4) 0%, transparent 100%) border-box",
            backgroundClip: "padding-box, border-box",
          }}
        >
          {/* % bar banner - horizontal gradient left #36AC81 to right #FFFFFF */}
          <div
            className="flex w-full flex-row rounded-[20px] items-center justify-between px-6 py-5 sm:px-8 sm:py-6 md:px-10 md:py-7 border-2 border-[#CBFDEA] shadow-sm shadow-zinc-900/5"
            style={{
              background: "linear-gradient(to right, #36AC81 0%, #FFFFFF 100%)",
            }}
          >
            <div>
              <span
                className="block text-[40px] font-bold leading-none text-white sm:text-[48px] md:text-[56px]"
                style={{ filter: "drop-shadow(0 4px 0 #00965F)" }}
              >
                {miss90.percent}
              </span>
              <span className="mt-1 block text-[16px] font-medium text-white/90 sm:text-[18px]">
                {miss90.label}
              </span>
            </div>
            <div className="text-right">
              <span
                className="block text-[40px] font-bold leading-none text-zinc-900 sm:text-[48px] md:text-[56px]"
                style={{ filter: "drop-shadow(0 4px 0 #ABE0CC)" }}
              >
                {exit10.percent}
              </span>
              <span className="mt-1 block text-[16px] font-medium text-zinc-700 sm:text-[18px]">
                {exit10.label}
              </span>
            </div>
          </div>

          {/* Bullets left - right */}
          <div className="grid gap-8 bg-white p-6 sm:grid-cols-2 sm:gap-12 sm:p-8 md:p-10 lg:gap-16 lg:p-12">
            <div className="flex flex-col">
              <ul className="space-y-3">
                {miss90.bullets.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[15px] text-zinc-900/60 sm:text-[16px] md:text-[20px]">
                    <span
                      className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
                      style={{ backgroundColor: PRIMARY }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 italic text-[#36AC81] sm:text-[16px]">
                {miss90.quote}
              </p>
              <Link
                href="#valuation-form"
                className="mt-6 inline-flex w-fit items-center justify-center rounded-full border-2 px-6 py-3 text-[15px] font-medium text-white shadow-[inset_0_4px_14px_rgba(255,255,255,0.3)] transition-colors hover:opacity-95 sm:px-8 sm:py-3.5 sm:text-[16px]"
                style={{
                  borderColor: "rgba(255,255,255,0.5)",
                  backgroundColor: PRIMARY,
                }}
              >
                {miss90.ctaLabel}
              </Link>
            </div>

            <div className="flex flex-col">
              <ul className="space-y-3">
                {exit10.bullets.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[15px] text-zinc-900/60 sm:text-[16px] md:text-[20px]">
                    <span
                      className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
                      style={{ backgroundColor: PRIMARY }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 italic text-[#36AC81] sm:text-[16px]">
                {exit10.quote}
              </p>
            </div>
          </div>
        </AnimateOnView>

        {/* Process Failure */}
        <AnimateOnView
          animation="fade-up"
          rootMargin="0px 0px -60px 0px"
          className="mt-8 overflow-hidden jus rounded-[24px] px-6 py-5 sm:mt-10 sm:rounded-[28px] sm:px-8 sm:py-6 md:mt-12 md:flex md:items-center md:justify-between md:gap-6 md:px-10 md:py-6"
          style={{
            background: "linear-gradient(90deg, #36AC81 0%, #3CC29150 50%, #36AC81 100%)",
            border: "1px solid #3CC291",
          }}
        >
          <h3 className="text-[30px] font-bold uppercase tracking-wide text-white sm:text-[35px] md:text-[38px]">
            {processFailure.title}
          </h3>
          <div className="mt-4 flex flex-wrap items-center gap-2 sm:mt-0 sm:gap-3">
            {processFailure.steps.map((step, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-[22px] border-[1.5px] border-[#F0FFFA]"
                style={{ backgroundColor: PRIMARY}}
              >
                <div
                  className="flex items-center justify-center p-[15px] md:p-[20px] rounded-[20px] px-4 py-2 text-[12px] font-medium text-[#298A67] sm:px-5 sm:py-2.5 sm:text-[15px] md:text-[15px]"
                  style={{
                    background: "linear-gradient(to bottom, #ffffff 0%, rgba(255,255,255,0.5) 100%)",
                  }}
                >
                  {step}
                </div>
              </div>
            ))}
          </div>
        </AnimateOnView>
      </div>
    </section>
  );
}
