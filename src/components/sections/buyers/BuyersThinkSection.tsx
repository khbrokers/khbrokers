"use client";

import Image from "next/image";
import Link from "next/link";
import { buyersThinkConfig } from "@/config/buyers.config";
import { LazyBlock } from "@/components/ui/LazyBlock";
import { AnimateOnView } from "@/components/ui/AnimateOnView";

export function BuyersThinkSection() {
  const { heading, subheading, leftColumn, rightColumn } = buyersThinkConfig;

  return (
    <section className="bg-[#F5EEFD] px-4 py-12 sm:py-16 md:py-24">
      <div className="mx-auto max-w-5xl flex flex-col items-center justify-center gap-[20px] md:gap-[30px]">
        <LazyBlock>
          <header className="mb-12 space-y-[20px] text-center md:mb-16">
            <h2 className="text-[28px] font-medium leading-[1.1] tracking-[-3px] text-zinc-900 sm:text-[40px] md:text-[58px] lg:text-[68px]">
              {heading.before}
              <span className="font-serif font-medium italic text-[#A363F4]">
                {heading.highlight}
              </span>
            </h2>
            <p className="mt-4 font-regular text-[14px] md:text-[18px] leading-[1.1] tracking-[-0.5px] text-zinc-900/60">
              {subheading}
            </p>
          </header>
        </LazyBlock>

        {/* Two-column layout */}
        <div className="grid gap-8 sm:gap-12 md:grid-cols-[0.45fr_0.55fr] md:gap-16">
          <LazyBlock>
          {/* Left column */}
          <div className="flex flex-col items-start justify-start space-y-6 md:space-y-8">
            <p className="text-[20px] md:text-[22px] font-medium leading-[1.1] tracking-[-0.5px] text-zinc-900">
              {leftColumn.statement}
            </p>
            <div className="space-y-4 md:space-y-6">
              {leftColumn.paragraphs.map((para, idx) => (
                <p
                  key={idx}
                  className={`font-regular text-[16px] md:text-[18px] leading-[1.1] tracking-[-0.5px] ${
                    idx === leftColumn.italicIndex ? "italic text-zinc-900" : "text-zinc-900/60"
                  }`}
                >
                  {para}
                </p>
              ))}
            </div>
            <Link
              href={leftColumn.cta.href}
              className="mt-4 inline-flex w-fit rounded-full border-2 border-[#f7efff80] bg-[#A363F4] px-[20px] py-[10px] text-[16px] font-medium text-white shadow-[inset_0_4px_14px_white] transition-colors hover:bg-[#6d28d9] md:px-[30px] md:py-[20px] md:text-[18px]"
            >
              {leftColumn.cta.label}
            </Link>
          </div>
          </LazyBlock>

          {/* Right column - feature list */}
          <AnimateOnView animation="stagger" rootMargin="0px 0px -80px 0px">
            {rightColumn.items.map((item, idx) => (
              <div
                key={idx}
                className="stagger-child flex flex-col gap-3 py-5 first:pt-0 last:pb-0 sm:flex-row sm:gap-4 sm:py-6 md:gap-6 md:py-8 md:flex-row border-b border-[#A363F4]/30"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center p-2 sm:h-14 sm:w-14 md:p-3">
                  <Image
                    src={item.icon}
                    alt=""
                    width={32}
                    height={32}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="min-w-0 flex-1 space-y-2 px-0 sm:border-l sm:border-[#A363F4]/30 sm:pl-4 md:p-6 md:space-y-[30px]">
                  <h3 className="font-medium text-[20px] md:text-[22px] tracking-[-0.5px] text-zinc-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-regular text-[16px] md:text-[18px] leading-[1.1] tracking-[-0.5px] text-zinc-900/60">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </AnimateOnView>
        </div>
      </div>
    </section>
  );
}
