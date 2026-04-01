"use client";

import Image from "next/image";
import Link from "next/link";
import { launchvectorDataConfig } from "@/config/launchvector.config";
import { AnimateOnView } from "@/components/ui/AnimateOnView";

export function LaunchvectorDataSection() {
  const { pill, heading, description, columns, rows, cta } =
    launchvectorDataConfig;

  return (
    <section className="bg-[#F5EEFD] px-4 py-12 sm:py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-[40px] lg:px-[80px]">
        {/* Purple card wrapper */}
        <div className="relative overflow-hidden rounded-[20px] border-2 border-[#c292ff] sm:rounded-[30px]">
          {/* Background layers */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[rgba(163,99,244,0.5)]" />
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src="/assets/hero/hero2.png"
                alt=""
                fill
                className="object-cover object-bottom"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#6824bf] from-[28%] to-[rgba(185,131,255,0.1)]" />
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0_32px_100px_0_rgba(163,99,244,0.1)]" />

          <div className="relative z-10 flex flex-col items-center gap-[20px] px-4 pb-[40px] sm:gap-[30px] sm:px-[30px] sm:pb-[60px] md:gap-[40px] md:px-[80px] md:pb-[80px]">
            {/* Pill + heading */}
            <AnimateOnView
              animation="fade-up-slow"
              rootMargin="0px 0px -60px 0px"
              threshold={0.05}
              className="flex flex-col items-center gap-[20px]"
            >
              <div className="flex justify-center">
                <span
                  className="rounded-b-[20px] border-b border-l border-r border-[#9c4eff] bg-[#c394ff] px-[30px] py-[15px] text-[14px] font-medium leading-[1.2] text-center text-white sm:px-[40px] sm:py-[20px] sm:text-[17px]"
                  style={{
                    boxShadow: "inset 0 4px 12px rgba(255,255,255,0.5)",
                  }}
                >
                  {pill}
                </span>
              </div>
              <div className="flex flex-col items-center gap-[20px] pb-[10px]">
                <h2 className="text-center text-[26px] font-medium leading-[1.1] tracking-[-2px] text-white sm:text-[40px] sm:tracking-[-3px] md:text-[56px] md:tracking-[-4.08px] lg:text-[68px]">
                  {heading.before}
                  <span className="font-serif italic">{heading.highlight}</span>
                </h2>
                <p className="max-w-[658px] text-center text-[16px] font-normal leading-[1.5] tracking-[-1.08px] text-white/80 sm:text-[18px]">
                  {description}
                </p>
              </div>
            </AnimateOnView>

            {/* Table — Ownership column hidden on mobile to fit */}
            <AnimateOnView
              animation="fade-up-slow"
              rootMargin="100px 0px -40px 0px"
              threshold={0.05}
              className="w-full"
            >
            <div className="w-full overflow-x-auto rounded-[15px] bg-white sm:rounded-[20px] md:rounded-[30px]">
              <table className="w-full border-collapse text-[12px] sm:text-[14px] md:text-[18px] lg:text-[22px]">
                <thead>
                  <tr>
                    {columns.map((col, i) => (
                      <th
                        key={i}
                        className={`border-b-2 border-[rgba(163,99,244,0.2)] px-2 py-3 font-semibold leading-[1.5] tracking-[-0.8px] whitespace-nowrap sm:px-3 sm:py-4 sm:tracking-[-1.32px] md:px-[30px] md:py-[30px] ${
                          i === 0
                            ? "border-l-2 border-t-2 border-[rgba(163,99,244,0.2)] bg-gradient-to-b from-[rgba(163,99,244,0.2)] to-[rgba(163,99,244,0)] text-left text-black rounded-tl-[30px]"
                            : "text-center text-[#420096]"
                        } ${i === 2 ? "hidden sm:table-cell" : ""} ${i === 1 || i === 4 ? "border-x-2 border-[rgba(163,99,244,0.2)]" : ""} ${i === columns.length - 1 ? "rounded-tr-[30px]" : ""}`}
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, idx) => (
                    <tr key={idx}>
                      <td className="border-b border-l-2 border-[rgba(163,99,244,0.2)] bg-gradient-to-b from-[rgba(163,99,244,0.2)] to-[rgba(163,99,244,0)] px-2 py-3 font-medium leading-[1.5] tracking-[-0.8px] text-black/70 whitespace-nowrap sm:px-3 sm:py-4 sm:tracking-[-1.32px] md:px-[30px] md:py-[30px]">
                        {row.niche}
                      </td>
                      <td className="border-b border-x-2 border-[rgba(163,99,244,0.2)] px-2 py-3 text-center font-medium leading-[1.5] tracking-[-0.8px] text-black/90 sm:px-3 sm:py-4 sm:tracking-[-1.32px] md:px-[30px] md:py-[30px]">
                        {row.price}
                      </td>
                      <td className="hidden border-b border-[rgba(163,99,244,0.2)] px-2 py-3 text-center font-medium leading-[1.5] tracking-[-0.8px] text-black/90 sm:table-cell sm:px-3 sm:py-4 sm:tracking-[-1.32px] md:px-[30px] md:py-[30px]">
                        {row.ownership}
                      </td>
                      <td className="border-b border-l border-[rgba(163,99,244,0.2)] px-2 py-3 text-center font-medium leading-[1.5] tracking-[-0.8px] text-black/90 sm:px-3 sm:py-4 sm:tracking-[-1.32px] md:px-[30px] md:py-[30px]">
                        {row.profit}
                      </td>
                      <td className="border-b border-x-2 border-[rgba(163,99,244,0.2)] px-2 py-3 text-center font-medium leading-[1.5] tracking-[-0.8px] text-black/90 sm:px-3 sm:py-4 sm:tracking-[-1.32px] md:px-[30px] md:py-[30px]">
                        {row.multiple}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            </AnimateOnView>

            {/* CTA button */}
            <AnimateOnView
              animation="fade-up"
              rootMargin="100px 0px -40px 0px"
              threshold={0.05}
            >
            <Link
              href={cta.href}
              className="relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-[#8f37fe] px-[20px] py-[16px] text-[16px] font-medium text-white shadow-[0_2px_20px_0_rgba(255,255,255,0.5)] transition-colors hover:brightness-110 sm:px-[30px] sm:py-[20px] sm:text-[18px]"
            >
              <span className="pointer-events-none absolute inset-0 rounded-full bg-[#a363f4]" aria-hidden />
              <span className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0_4px_8px_0_rgba(255,255,255,0.6)]" aria-hidden />
              <span className="pointer-events-none absolute inset-[-2px] rounded-[inherit] shadow-[inset_0_0_20px_0_white]" aria-hidden />
              <span className="relative">{cta.label}</span>
            </Link>
            </AnimateOnView>
          </div>
        </div>
      </div>
    </section>
  );
}
