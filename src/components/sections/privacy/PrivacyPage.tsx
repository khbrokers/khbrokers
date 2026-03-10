"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { FaBars, FaList } from "react-icons/fa";
import { privacyConfig } from "@/config/privacy.config";
import { getStoredLegalTheme } from "@/components/layout/ThemeTracker";
import { BuyersCtaSection } from "@/components/sections/buyers/BuyersCtaSection";
import { SellersCtaSection } from "@/components/sections/sellers/SellersCtaSection";

const BUYERS_PRIMARY = "#a36af6";
const BUYERS_ACTIVE = "#6824BF";
const BUYERS_PAGE_BG = "#F5EEFD";
const BUYERS_TOC_GRADIENT = "linear-gradient(to bottom, #A363F420 0%, transparent 100%)";
const BUYERS_OVERLAY =
  "linear-gradient(to bottom, rgba(245, 238, 253, 0.4) 0%, rgba(245, 238, 253, 0.7) 50%, rgba(245, 238, 253, 0.95) 100%)";

const SELLERS_PRIMARY = "#00965F";
const SELLERS_ACTIVE = "#007a4d";
const SELLERS_PAGE_BG = "#f0fdf4";
const SELLERS_TOC_GRADIENT = "linear-gradient(to bottom, rgba(0, 150, 95, 0.12) 0%, transparent 100%)";
const SELLERS_OVERLAY =
  "linear-gradient(to bottom, rgba(240, 253, 244, 0.4) 0%, rgba(240, 253, 244, 0.7) 50%, rgba(240, 253, 244, 0.95) 100%)";

function useLegalTheme() {
  const searchParams = useSearchParams();
  const param = searchParams.get("theme");
  const [stored, setStored] = useState<"buyers" | "sellers">("buyers");
  useEffect(() => {
    if (!param) setStored(getStoredLegalTheme());
  }, [param]);
  const theme = param === "sellers" ? "sellers" : param === "buyers" ? "buyers" : stored;
  useEffect(() => {
    if (typeof window !== "undefined") sessionStorage.setItem("legalTheme", theme);
  }, [theme]);
  return theme;
}

export function PrivacyPage() {
  const theme = useLegalTheme();
  const isSellers = theme === "sellers";
  const PRIMARY = isSellers ? SELLERS_PRIMARY : BUYERS_PRIMARY;
  const PAGE_BG = isSellers ? SELLERS_PAGE_BG : BUYERS_PAGE_BG;
  const activeColor = isSellers ? SELLERS_ACTIVE : BUYERS_ACTIVE;
  const tocGradient = isSellers ? SELLERS_TOC_GRADIENT : BUYERS_TOC_GRADIENT;
  const overlay = isSellers ? SELLERS_OVERLAY : BUYERS_OVERLAY;
  const [activeSection, setActiveSection] = useState<string>(privacyConfig.sections[0].id);
  const [tocOpen, setTocOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );
    privacyConfig.sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen" style={{ backgroundColor: PAGE_BG }}>
      {/* Hero section - same image as buyers/deals */}
      <section className="relative min-h-[50vh] overflow-hidden sm:min-h-[55vh] md:min-h-[60vh]">
        <Image
          src="/assets/hero/hero.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Overlay for readability */}
        <div
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{ background: overlay }}
        />
        {/* Bottom fade */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-24 sm:h-32"
          style={{
            background: `linear-gradient(to top, ${PAGE_BG}, transparent)`,
          }}
        />
        <div className="relative z-10 mx-auto flex min-h-[50vh] flex-col items-center justify-center px-4 pt-24 pb-16 sm:min-h-[55vh] sm:pt-28 sm:pb-20 md:min-h-[60vh] md:pt-32 md:pb-24">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-[32px] font-medium tracking-tight text-zinc-900 sm:text-[40px] md:text-[48px] lg:text-[56px]">
              Privacy Policy
            </h1>
 
            <p className="mt-4 text-[14px] font-medium text-zinc-600 sm:text-[15px] md:text-[16px]">
              Effective Date: {privacyConfig.effectiveDate}
            </p>
          </div>
        </div>
      </section>

      {/* Content section - two columns */}
      <section className="relative px-4 pb-16 sm:pb-20 md:pb-24" style={{ backgroundColor: PAGE_BG }}>
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
            {/* Left: TOC */}
            <aside
              className={`h-fit shrink-0 overflow-hidden rounded-2xl border border-zinc-200/80 p-5 backdrop-blur-sm transition-all lg:sticky lg:top-24 ${
                tocOpen ? "max-h-none" : "max-h-[72px] lg:max-h-none"
              }`}
              style={{ background: tocGradient }}
            >
              <button
                type="button"
                onClick={() => setTocOpen((o) => !o)}
                className="flex w-full items-center gap-2 rounded-t-2xl px-4 py-3 text-left lg:cursor-default lg:rounded-t-2xl"
                aria-expanded={tocOpen}
              >
                <FaBars className="h-4 w-4 shrink-0 lg:hidden" style={{ color: PRIMARY }} aria-hidden />
                <FaList className="h-4 w-4 shrink-0 text-zinc-900" />
                <span className="text-[14px] font-semibold text-zinc-900 sm:text-[15px]">
                  TOC
                </span>
              </button>
              <nav
                className={`overflow-y-auto transition-all lg:block ${
                  tocOpen ? "block" : "hidden lg:block"
                }`}
              >
                <ul
                  className="list-disc space-y-0 pl-5 pr-3 sm:pl-6 sm:pr-4 [&>li]:pl-1"
                  style={{ color: PRIMARY }}
                >
                  {privacyConfig.sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        onClick={() => {
                          setActiveSection(section.id);
                          setTocOpen(false);
                        }}
                        className={`block w-full rounded-lg py-2.5 text-left text-[13px] font-medium transition-colors sm:text-[14px] ${
                          activeSection === section.id ? "" : "text-zinc-700"
                        }`}
                        style={activeSection === section.id ? { color: activeColor } : undefined}
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* Right: Content cards */}
            <div className="min-w-0 flex-1 space-y-6">
              {privacyConfig.sections.map((section) => (
                <article
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-24 overflow-hidden rounded-2xl border border-zinc-200/80 bg-white p-4 shadow-sm md:p-5"
                >
                  <h2 className="text-[22px] font-medium text-zinc-900 sm:text-[24px] md:text-[26px]">
                    {section.title}
                  </h2>
                  <div className="mt-4 space-y-4">
                    {section.content.map((block, idx) =>
                      block.type === "paragraph" ? (
                        <p
                          key={idx}
                          className="whitespace-pre-line text-[14px] leading-relaxed text-zinc-700 sm:text-[15px] md:text-[16px]"
                        >
                          {block.text}
                        </p>
                      ) : block.type === "bullets" ? (
                        <ul
                          key={idx}
                          className="list-disc space-y-1 pl-5 text-[14px] leading-relaxed text-zinc-700 sm:text-[15px] md:text-[16px]"
                        >
                          {block.items.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      ) : null
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA - buyers or sellers based on theme */}
      {isSellers ? <SellersCtaSection /> : <BuyersCtaSection />}
    </main>
  );
}
