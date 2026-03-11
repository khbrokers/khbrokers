"use client";

import Image from "next/image";
import Link from "next/link";
import { buyersDifferenceConfig } from "@/config/buyers.config";
import { LazyBlock } from "@/components/ui/LazyBlock";
import { AnimateOnView } from "@/components/ui/AnimateOnView";

export function BuyersDifferenceSection() {
  const { pill, heading, subheading, table, cta } = buyersDifferenceConfig;

  return (
    <div className="w-full bg-[#F5EEFD] px-4 py-12 sm:py-16 md:py-24">
      <section className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl px-4 pb-12 sm:rounded-3xl sm:px-6 sm:pb-16 md:px-8 md:pb-24">
      {/* Background layers - bottom to top */}
      <div className="absolute inset-0 z-0 top-[200px] md:top-[250px]">
        <Image
          src="/assets/hero/hero2.png"
          alt=""
          fill
          className="object-cover object-bottom"
          sizes="(max-width: 1280px) 100vw, 1280px"
        />
      </div>
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(rgb(104, 36, 191) 0%, rgb(185 131 255 / 10%) 100%)",
        }}
      />
      {/* Subtle cloud pattern */}
      <div
        className="absolute bottom-0 left-0 z-0 h-32 w-64 rounded-full opacity-20 blur-3xl"
        style={{ background: "rgba(255,255,255,0.3)" }}
      />
      <div
        className="absolute bottom-8 left-16 z-0 h-24 w-48 rounded-full opacity-15 blur-2xl"
        style={{ background: "rgba(255,255,255,0.3)" }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center gap-[30px] md:gap-[40px] mx-auto max-w-4xl">
        <LazyBlock>
        <div className="mb-6 flex justify-center">
          <span className="rounded-b-xl border-2 border-[#9C4EFF] bg-[#C394FF] px-4 py-2 text-[16px] font-medium text-white shadow-[inset_0_4px_12px_rgba(255,255,255,0.5)] backdrop-blur-sm md:px-6 md:py-3 md:text-[18px]">
            {pill}
          </span>
        </div>

        {/* Heading */}
        <header className="mb-10 space-y-4 text-center md:mb-12">
          <h2 className="text-[26px] font-medium leading-[1.1] tracking-[-2px] text-white sm:text-[36px] md:text-[52px] lg:text-[68px]">
            {heading.before}
            <span className="font-serif font-medium italic text-white">
              {heading.highlight}
            </span>
          </h2>
          <p className="text-[14px] font-normal leading-[1.1] tracking-[-0.5px] text-[#DBBFFF] sm:text-[16px] md:text-[18px]">
            {subheading}
          </p>
        </header>
        </LazyBlock>

        <AnimateOnView
          animation="stagger"
          rootMargin="100px 0px -40px 0px"
          threshold={0.05}
        >
        <div className="mb-8 overflow-hidden rounded-xl bg-[#FFFFFF] shadow-lg sm:rounded-2xl md:mb-12">
          <div className="relative overflow-x-auto">
            {/* Gradient overlay for KH Brokers column - top to bottom, 0% opacity at top to full at bottom */}
            <div
              className="pointer-events-none absolute inset-0 z-0"
              style={{
                backgroundImage:
                  "linear-gradient(to top, rgba(163, 106, 246, 0) 0%, rgba(163, 106, 246, 0.2) 100%)",
                backgroundSize: "33.334% 100%",
                backgroundPosition: "right 0 top 0",
                backgroundRepeat: "no-repeat",
              }}
              aria-hidden
            />
            <table className="relative z-10 w-full table-fixed border-collapse">
              <thead>
                <tr>
                  <th className="border-b border-[#a36af6]/20 bg-white p-4 text-left text-[14px] font-semibold text-zinc-900 sm:p-5 sm:text-[16px] md:p-[30px] md:text-[20px] lg:text-[22px]">
                    {table.columns[0]}
                  </th>
                  <th className="border-b border-x border-[#a36af6]/20 bg-white p-4 text-center text-[14px] font-semibold text-zinc-900 sm:p-5 sm:text-[16px] md:p-[30px] md:text-[20px] lg:text-[22px]">
                    {table.columns[1]}
                  </th>
                  <th
                    className="border-b border-[#a36af6]/20 p-4 text-center text-[14px] font-semibold text-zinc-900 sm:p-5 sm:text-[16px] md:p-[30px] md:text-[20px] lg:text-[22px]"
                    style={{ background: "transparent" }}
                  >
                    <div className="flex items-center justify-center">
                      <Image
                        src={table.khBrokersLogo}
                        alt="KH Brokers"
                        width={120}
                        height={40}
                        className="h-8 w-auto object-contain md:h-10"
                      />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {table.rows.map((row, idx) => (
                  <tr key={idx} className="stagger-child">
                    <td className="border-b border-[#a36af6]/20 bg-white p-4 text-[14px] font-semibold text-zinc-900 sm:p-5 sm:text-[16px] md:p-[30px] md:text-[20px] lg:text-[22px]">
                      {row.area}
                    </td>
                    <td className="border-b border-x border-[#a36af6]/20 bg-white p-4 text-center text-[14px] font-medium text-zinc-900/50 sm:p-5 sm:text-[16px] md:p-[30px] md:text-[20px] lg:text-[22px]">
                      {row.other}
                    </td>
                    <td
                      className="border-b border-[#a36af6]/20 p-4 text-center text-[14px] font-medium text-zinc-900/50 sm:p-5 sm:text-[16px] md:p-[30px] md:text-[20px] lg:text-[22px]"
                      style={{ background: "transparent" }}
                    >
                      {row.kh}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        </AnimateOnView>

        <LazyBlock>
        <div className="flex flex-row flex-wrap items-center justify-center gap-2 sm:gap-4">
          <Link
            href={cta.primary.href}
            className="inline-flex w-fit items-center justify-center rounded-full border-2 border-[#f7efff80] bg-[#a36af6] px-[24px] py-[12px] text-[16px] font-medium text-white shadow-[inset_0_4px_14px_white] transition-colors hover:bg-[#6d28d9] md:px-[30px] md:py-[20px] md:text-[18px]"
          >
            {cta.primary.label}
          </Link>
          <div className="rounded-full bg-gradient-to-b from-zinc-900/10 to-transparent p-[2px]">

          <Link
            href={cta.secondary.href}
            className="block rounded-full bg-white px-[20px] py-[10px] text-[16px] md:px-[30px] md:py-[20px] md:text-[18px] font-medium text-zinc-900 transition-colors hover:bg-zinc-100"
            >
            {cta.secondary.label}
          </Link>
          </div>
        </div>
        </LazyBlock>
      </div>
    </section>
    </div>
  );
}
