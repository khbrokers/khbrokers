"use client";

import { useRef, useEffect } from "react";
import { investSuccessConfig } from "@/config/invest.config";
import { AnimateOnView } from "@/components/ui/AnimateOnView";
import { InvestSuccessBookingSection } from "@/components/sections/invest/InvestSuccessBookingSection";
import { BuyersTestimonialsSection } from "@/components/sections/buyers/BuyersTestimonialsSection";
import { BuyersFaqSection } from "@/components/sections/buyers/BuyersFaqSection";
import { BuyersCtaSection } from "@/components/sections/buyers/BuyersCtaSection";

const VIDEO_PLAYBACK_RATE = 0.5;

export default function InvestSuccessPage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.playbackRate = VIDEO_PLAYBACK_RATE;
    }
  }, []);

  const { headline, subheadline } = investSuccessConfig;
  const PRIMARY = "#a36af6";

  return (
    <main className="min-h-screen bg-[#F5EEFD]">
      {/* Hero - same buyers animated bg */}
      <section className="relative min-h-[40vh] overflow-hidden sm:min-h-[42vh] md:min-h-[45vh]">
        <video
          ref={videoRef}
          src="/assets/hero/hero_animatedb.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover object-center"
          aria-hidden
        />

        <AnimateOnView
          animation="stagger-slow"
          className="relative mx-auto max-w-4xl px-4 pb-4 pt-[100px] sm:px-6 sm:pb-6 sm:pt-24 md:pb-8 md:pt-[232px] lg:px-8"
          rootMargin="0px 0px 0px 0px"
          threshold={0.15}
        >
          <h1 className="stagger-child mx-auto max-w-3xl text-center text-[28px] font-medium leading-[1.2] tracking-[-2px] text-zinc-900 sm:text-[36px] md:text-[44px] lg:text-[52px]">
            {headline.before}
            <span className="font-serif font-medium italic" style={{ color: PRIMARY }}>
              {headline.highlight}
            </span>
            {headline.after}
          </h1>
          {/* <p className="stagger-child mx-auto mt-4 max-w-2xl text-center text-[15px] leading-relaxed text-zinc-700 sm:mt-6 sm:text-[17px] md:text-[18px]">
            {subheadline.before}
            <span className="font-semibold text-zinc-900">
              {subheadline.highlight}
            </span>
            
          </p> */}
        </AnimateOnView>
      </section>

      {/* Booking calendar - centered design */}
      <InvestSuccessBookingSection />

      {/* Buyers testimonials */}
      <BuyersTestimonialsSection />

      {/* Buyers FAQs */}
      <BuyersFaqSection />

      {/* Bottom CTA */}
      <BuyersCtaSection />
    </main>
  );
}
