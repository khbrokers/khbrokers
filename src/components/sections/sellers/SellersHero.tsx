"use client";

import Link from "next/link";
import { useRef, useEffect } from "react";
import { sellersHeroConfig } from "@/config/sellers.config";
import { AnimateOnView } from "@/components/ui/AnimateOnView";
import { SellersVideoSection } from "./SellersVideoSection";

const PRIMARY = "#16a34a";
const LIGHT_BG = "#f0fdf4";

export function SellersHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { headline, subtitle, highlightedTerms, cta, videoThumbnail, heroVideoSrc, heroVideoPlaybackRate } =
    sellersHeroConfig;

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    el.playbackRate = heroVideoPlaybackRate;
    el.muted = true;
    el.play().catch(() => {});
  }, [heroVideoPlaybackRate]);

  const subtitleWithHighlights = highlightedTerms.reduce(
    (acc, term) => acc.replace(term, `{{${term}}}`),
    subtitle
  );
  const parts = subtitleWithHighlights.split(/(\{\{[^}]+\}\})/g);

  return (
    <section
      className="relative min-h-[75vh] overflow-hidden sm:min-h-[85vh]"
    >
      {/* Video background — width fits screen, height auto (aspect ratio preserved) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <video
          ref={videoRef}
          src={heroVideoSrc}
          poster={videoThumbnail}
          muted
          loop
          playsInline
          autoPlay
          className="h-auto w-full max-h-full object-contain object-center"
          aria-hidden
        />
      </div>
      {/* Very subtle overlay for text readability — video clearly visible */}
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-b from-white/30 via-transparent to-[#f0fdf4]/35"
        aria-hidden
      />
      <AnimateOnView
        animation="stagger"
        className="relative z-10 mx-auto max-w-4xl px-4 pb-4 pt-[100px] sm:px-6 sm:pb-20 sm:pt-24 md:pb-24 md:pt-[150px] lg:px-8"
        rootMargin="0px 0px 0px 0px"
        threshold={0.15}
        visibleImmediately
      >
        {/* Main headline */}
        <h1 className="stagger-child text-center text-[35px] font-medium leading-[1.15] tracking-[-2px] text-zinc-900 sm:text-[44px] sm:tracking-[-3px] md:text-[58px] md:tracking-[-4px] lg:text-[68px]">
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
        animation="fade-up"
        className="relative z-10"
        rootMargin="0px 0px 0px 0px"
        threshold={0.15}
        visibleImmediately
      >
        <SellersVideoSection />
      </AnimateOnView>
    </section>
  );
}
