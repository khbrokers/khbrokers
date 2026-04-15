"use client";

import { useRef, useEffect } from "react";
import { FaStore } from "react-icons/fa6";
import { valueMyStoreConfig } from "@/config/value-my-store.config";
import { AnimateOnView } from "@/components/ui/AnimateOnView";

const PRIMARY = "#00965F";
const VIDEO_PLAYBACK_RATE = 0.5;

export function ValueMyStoreHero() {
  const { tag, headline, description, ctaLabel } = valueMyStoreConfig;
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.playbackRate = VIDEO_PLAYBACK_RATE;
    }
  }, []);

  return (
    <section className="fixed inset-0 z-0 h-screen overflow-hidden">
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
        animation="stagger"
        className="relative z-10 mx-auto flex h-full min-h-screen flex-col items-center justify-center px-4 pb-4 pt-[100px] sm:pb-20 sm:pt-24 md:pb-24 md:pt-[150px] lg:px-8"
        rootMargin="0px 0px 0px 0px"
        threshold={0.1}
      >
        {/* Tag pill */}
        <div className="stagger-child mb-6 flex justify-center sm:mb-8">
          <div
            className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 backdrop-blur-sm sm:px-4 sm:py-2"
            style={{
              borderColor: "rgba(0, 150, 95, 0.3)",
              background: `linear-gradient(to bottom, ${PRIMARY}30 10%, transparent 100%)`,
            }}
          >
            <FaStore
              className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4"
              style={{ color: PRIMARY }}
            />
            <span className="text-xs font-medium text-zinc-700 sm:text-sm">
              {tag}
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="stagger-child text-center text-[36px] font-medium leading-[1.1] tracking-[-2px] text-zinc-900 sm:text-[48px] sm:tracking-[-3px] md:text-[58px] md:tracking-[-4px] lg:text-[68px]">
          {headline.before}
          <span className="font-serif font-medium italic" style={{ color: PRIMARY }}>
            {headline.highlight}
          </span>
          {headline.after}
        </h1>

        {/* Description */}
        <p className="stagger-child mx-auto mt-4 max-w-2xl text-center text-[15px] leading-relaxed text-zinc-700 sm:mt-6 sm:text-base md:text-[17px]">
          {description}
        </p>

        {/* CTA */}
        <div className="stagger-child mt-8 flex justify-center sm:mt-10">
          <a
            href="#valuation-form"
            className="inline-flex items-center justify-center rounded-full border-2 px-6 py-3 text-[15px] font-medium text-white shadow-[inset_0_4px_14px_rgba(255,255,255,0.3)] transition-all hover:opacity-95 sm:px-8 sm:py-4 sm:text-[17px] md:px-10 md:py-5 md:text-[18px]"
            style={{
              borderColor: "rgba(255,255,255,0.5)",
              background: `linear-gradient(to bottom, ${PRIMARY} 0%, #007a4d 100%)`,
            }}
          >
            {ctaLabel}
          </a>
        </div>
      </AnimateOnView>
    </section>
  );
}
