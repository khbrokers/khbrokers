"use client";

import Link from "next/link";
import { buyersThinkConfig } from "@/config/buyers.config";
import { AnimateOnView } from "@/components/ui/AnimateOnView";

export function BuyersThinkSection() {
  const { heading, subheading, leftColumn, rightColumn } = buyersThinkConfig;

  return (
    <section className="bg-[#F5EEFD] px-4 py-12 sm:py-16 md:py-24">
      <div className="mx-auto max-w-5xl flex flex-col items-center justify-center gap-[20px] md:gap-[30px]">
        <header className="mx-auto mb-6 w-[80%] space-y-5 text-center sm:w-auto md:mb-12">
          <AnimateOnView
            animation="fade-up"
            rootMargin="0px 0px -120px 0px"
            threshold={0.2}
            delayMs={0}
          >
            <h2 className="text-[28px] font-medium leading-[1.1] tracking-[-2px] text-zinc-900 sm:tracking-[-3px] sm:text-[40px] md:text-[58px] lg:text-[68px]">
              {heading.before}
              <span className="font-serif font-medium italic text-[#a36af6]">
                {heading.highlight}
              </span>
            </h2>
          </AnimateOnView>
          <AnimateOnView
            animation="fade-up"
            rootMargin="0px 0px -120px 0px"
            threshold={0.2}
            delayMs={350}
          >
            <p className="mt-4 font-regular text-[14px] md:text-[18px] leading-[1.1] tracking-[-0.5px] text-zinc-900/60">
              {subheading}
            </p>
          </AnimateOnView>
        </header>

        {/* Two-column layout - each card animates separately on scroll (mobile) */}
        <div className="grid gap-8 sm:gap-12 md:grid-cols-[0.45fr_0.55fr] md:gap-16 justify-between">
          {/* Left column - each part animates separately with same slower speed */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="mx-auto flex w-[95%] flex-col gap-4 md:mx-0 md:w-full md:max-w-none md:gap-6 md:rounded-none md:border-0 md:bg-transparent md:p-0">
              <AnimateOnView
                animation="fade-up-slow"
                rootMargin="0px 0px -120px 0px"
                threshold={0.2}
                delayMs={700}
              >
                <p className="text-[18px] font-semibold leading-[1.2] tracking-[-0.5px] text-zinc-900 md:text-[22px] md:font-medium md:leading-[1.1]">
                  {leftColumn.statement}
                </p>
              </AnimateOnView>

              <AnimateOnView
                animation="fade-up-slow"
                rootMargin="0px 0px -120px 0px"
                threshold={0.2}
                delayMs={1050}
              >
                <div className="space-y-3 md:mt-0 md:space-y-6">
                  {leftColumn.paragraphs.map((para, idx) => {
                    const isKeyQuote = idx === leftColumn.italicIndex;
                    return isKeyQuote ? (
                      <blockquote
                        key={idx}
                        className="rounded-lg border-l-4 border-[#a36af6] py-3 pl-4 pr-3 md:rounded-xl md:py-4 md:pl-4 md:pr-4"
                        style={{
                          background: "linear-gradient(to right, rgba(163, 106, 246, 0.12) 0%, transparent 100%)",
                        }}
                      >
                        <p className="font-serif text-[14px] italic leading-[1.35] tracking-[-0.3px] text-zinc-900 md:text-[18px] md:font-normal md:leading-[1.1] md:tracking-[-0.5px]">
                          {para}
                        </p>
                      </blockquote>
                    ) : (
                      <p
                        key={idx}
                        className="text-[12px] leading-[1.4] tracking-[-0.2px] text-zinc-900/70 md:text-[18px] md:leading-[1.1] md:tracking-[-0.5px] md:text-zinc-900/60"
                      >
                        {para}
                      </p>
                    );
                  })}
                </div>
              </AnimateOnView>

              <AnimateOnView
                animation="fade-up-slow"
                rootMargin="0px 0px -120px 0px"
                threshold={0.2}
                delayMs={1400}
              >
                <Link
                  href={leftColumn.cta.href}
                  className="mt-1 inline-flex w-full justify-center rounded-full border-2 border-[#f7efff80] bg-[#a36af6] px-4 py-3 text-[14px] font-medium text-white shadow-[inset_0_4px_14px_white] transition-colors hover:bg-[#6d28d9] sm:px-5 sm:py-2.5 sm:text-[16px] md:mt-4 md:px-[30px] md:py-[20px] md:text-[18px]"
                >
                  {leftColumn.cta.label}
                </Link>
              </AnimateOnView>
            </div>
          </div>

          {/* Right column - feature list - each card animates separately on scroll */}
          <div className="flex flex-col pt-6 md:pt-0 [&>div:first-child>div]:pt-0">
            {rightColumn.items.map((item, idx) => (
              <AnimateOnView
                key={idx}
                animation="slide-in-from-left"
                rootMargin="0px 0px -120px 0px"
                threshold={0.2}
                delayMs={1050 + idx * 350}
              >
                <div
                  className="flex flex-col gap-3 px-4 md:px-0 py-[30px] sm:flex-row sm:gap-4 sm:py-6 md:gap-6 md:py-8 md:flex-row border-b border-[#a36af6]/30"
                >
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border p-2 sm:h-14 sm:w-14 md:h-15 md:w-15 md:p-2"
                    style={{
                      background: "linear-gradient(to bottom, #EAD9FF50 0%, #A363F480 100%)",
                      borderColor: "#A363F430",
                    }}
                  >
                    <img
                      src={item.icon}
                      alt=""
                      width={32}
                      height={32}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="min-w-0 flex-1 space-y-2 px-0 sm:border-l sm:border-[#a36af6]/30 sm:pl-4 md:p-6 md:space-y-[30px]">
                    <h3 className="font-medium text-[20px] md:text-[22px] tracking-[-0.5px] text-zinc-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 font-regular text-[14px] md:text-[18px] leading-[1.1] tracking-[-0.5px] text-zinc-900/60">
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimateOnView>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
