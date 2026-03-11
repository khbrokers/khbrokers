"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiShopify } from "react-icons/si";
import { sellersHeroConfig } from "@/config/sellers.config";
import { AnimateOnView } from "@/components/ui/AnimateOnView";
import { SellersVideoSection } from "./SellersVideoSection";

const PRIMARY = "#039760";
const VIDEO_PLAYBACK_RATE = 0.5;

export function SellersHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.playbackRate = VIDEO_PLAYBACK_RATE;
    }
  }, []);
  const { trustedBy, headline, subtitle, highlightedTerms, cta, asFeaturedIn, featuredBrands } =
    sellersHeroConfig;

  const subtitleWithHighlights = highlightedTerms.reduce(
    (acc, term) => acc.replace(term, `{{${term}}}`),
    subtitle
  );
  const parts = subtitleWithHighlights.split(/(\{\{[^}]+\}\})/g);

  return (
    <section
      className="relative min-h-[75vh] overflow-hidden sm:min-h-[85vh]"
    >
      <video
        ref={videoRef}
        src="/assets/sellers_landing/hero/hero_animateds.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover object-center"
        aria-hidden
      />
      <AnimateOnView
        animation="stagger-slow"
        className="relative z-10 mx-auto max-w-4xl px-4 pb-4 pt-[100px] sm:px-6 sm:pb-20 sm:pt-24 md:pb-24 md:pt-[150px] lg:px-8"
        rootMargin="0px 0px 0px 0px"
        threshold={0.15}
      >
        {/* Trusted By banner */}
        <div className="stagger-child flex justify-center">
          <div
            className="mb-5 inline-flex items-center gap-1.5 rounded-full border px-2 py-1.5 backdrop-blur-sm sm:mb-8 sm:gap-2 sm:px-3 sm:py-2"
            style={{
              borderColor: "rgba(3, 151, 96, 0.2)",
              background: `linear-gradient(to bottom, ${PRIMARY}20 10%, transparent 100%)`,
            }}
          >
            <SiShopify
              className="shrink-0 h-[12px] w-[12px] sm:h-[15px] sm:w-[15px] md:h-[17px] md:w-[17px]"
              style={{ color: "#00965F" }}
            />
            <span className="text-[10px] font-medium text-zinc-600 sm:text-[12px] md:text-[15px]">
              {trustedBy}
            </span>
          </div>
        </div>

        {/* Main headline */}
        <h1 className="stagger-child mx-auto w-[90%] max-w-7xl text-center text-[35px] font-medium leading-[1.15] tracking-[-2px] text-zinc-900 sm:w-[85%] sm:text-[44px] sm:tracking-[-3px] md:w-full md:max-w-5xl md:text-[58px] md:leading-[1.12] md:tracking-[-4px] lg:text-[68px]">
          {headline.before}
          <span className="font-serif font-medium italic" style={{ color: PRIMARY }}>
            {headline.highlight}
          </span>
          {headline.after}
        </h1>

        {/* Subtitle with highlighted terms */}
        <p className="stagger-child mx-auto mt-3 w-[80%] max-w-2xl text-center text-[16px] leading-relaxed text-zinc-900/60 sm:mt-6 sm:w-auto sm:text-base md:text-[18px]">
          {parts.map((part, i) => {
            if (part.startsWith("{{") && part.endsWith("}}")) {
              const term = part.slice(2, -2);
              return (
                <span key={i} className="font-medium text-zinc-900">
                  {term}
                </span>
              );
            }
            return <span key={i}>{part}</span>;
          })}
        </p>

        {/* As Featured in */}
        <div className="stagger-child mt-6 flex flex-col items-center gap-4 md:gap-4 sm:mt-12 sm:gap-4">
          <p className="text-center text-[12px] font-medium text-zinc-500 sm:text-[16px] md:text-[16px]">
            {asFeaturedIn}
          </p>
          <div className="flex flex-row flex-wrap items-center justify-center gap-[25px] sm:gap-6 md:gap-12">
            {featuredBrands.map((src) => (
              <Image
                key={src}
                src={src}
                alt=""
                width={120}
                height={32}
                className="h-[18px] md:h-[24px] w-auto opacity-80 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
              />
            ))}
          </div>
        </div>

        {/* CTA buttons */}
        <div className="stagger-child mt-6 flex flex-row flex-wrap items-center justify-center gap-2 sm:mt-10 sm:gap-4">
          <Link
            href={cta.primary.href}
            className="rounded-full border-2 px-4 py-2.5 text-[13px] font-medium text-white shadow-[inset_0_4px_14px_white] transition-colors hover:opacity-90 sm:px-[20px] sm:py-[10px] sm:text-[16px] md:px-[30px] md:py-[20px] md:text-[18px]"
            style={{
              borderColor: "rgba(255,255,255,0.5)",
              backgroundColor: PRIMARY,
            }}
          >
            {cta.primary.label}
          </Link>
          <div className="rounded-full bg-gradient-to-b from-zinc-900/10 to-transparent p-[2px]">
            <Link
              href={cta.secondary.href}
              className="block rounded-full bg-white px-4 py-2.5 text-[13px] font-medium text-zinc-900 transition-colors hover:bg-zinc-100 sm:px-[20px] sm:py-[10px] sm:text-[16px] md:px-[30px] md:py-[20px] md:text-[18px]"
            >
              {cta.secondary.label}
            </Link>
          </div>
        </div>
      </AnimateOnView>
      <AnimateOnView
        animation="fade-up-slow"
        className="relative z-10"
        rootMargin="0px 0px -80px 0px"
        threshold={0.05}
        delayMs={200}
      >
        <SellersVideoSection />
      </AnimateOnView>
    </section>
  );
}
