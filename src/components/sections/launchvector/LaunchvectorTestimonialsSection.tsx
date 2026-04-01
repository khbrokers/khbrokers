"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { launchvectorTestimonialsConfig } from "@/config/launchvector.config";
import { AnimateOnView } from "@/components/ui/AnimateOnView";

function VideoPopup({
  wistiaId,
  onClose,
}: {
  wistiaId: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[10001] flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-black"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/80"
          aria-label="Close video"
        >
          ✕
        </button>
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <iframe
            src={`https://fast.wistia.com/embed/iframe/${wistiaId}?videoFoam=true&autoplay=1`}
            className="absolute inset-0 h-full w-full"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        </div>
      </div>
    </div>,
    document.body
  );
}

export function LaunchvectorTestimonialsSection() {
  const { heading, subheading, testimonials } =
    launchvectorTestimonialsConfig;
  const [activeIndex, setActiveIndex] = useState(0);
  const [videoId, setVideoId] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const active = testimonials[activeIndex];

  // Sync scroll position with active index on desktop (vertical scroll)
  const scrollToIndex = useCallback(
    (idx: number) => {
      const container = scrollRef.current;
      if (!container) return;
      const children = container.children;
      if (children[idx]) {
        (children[idx] as HTMLElement).scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    },
    []
  );

  // Handle thumbnail click
  const handleThumbClick = (idx: number) => {
    setActiveIndex(idx);
    scrollToIndex(idx);
  };

  return (
    <section className="bg-[#F5EEFD] px-4 py-12 sm:py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-[40px] lg:px-[80px]">
        {/* Heading */}
        <AnimateOnView
          animation="fade-up-slow"
          rootMargin="0px 0px -60px 0px"
          threshold={0.05}
        >
          <div className="mb-10 pb-[10px] text-center sm:mb-16">
            <h2 className="text-[26px] font-medium leading-[1.1] tracking-[-2px] text-black/80 sm:text-[40px] sm:tracking-[-3px] md:text-[56px] md:tracking-[-4.08px] lg:text-[68px]">
              {heading.before}
              <span className="font-serif italic text-[#a363f4]">
                {heading.highlight}
              </span>
            </h2>
            <p className="mx-auto mt-5 text-[16px] font-normal leading-[1.5] tracking-[-1.08px] text-black/60 sm:text-[18px]">
              {subheading}
            </p>
          </div>
        </AnimateOnView>

        {/* Content — videos left, testimonial card right */}
        <AnimateOnView
          animation="fade-up-slow"
          rootMargin="0px 0px -60px 0px"
          threshold={0.05}
        >
          <div className="flex flex-col gap-5 md:flex-row">
            {/* Left — Video thumbnails */}
            {/* Mobile: show only active thumbnail. Desktop: vertical stack */}
            <div className="relative md:w-[486px] md:shrink-0">
              {/* Mobile — single active thumbnail + small selector dots */}
              <div className="md:hidden">
                <button
                  type="button"
                  onClick={() => setVideoId(testimonials[activeIndex].wistiaId)}
                  className="group relative w-full overflow-hidden rounded-[16px] border border-[#a363f4] shadow-lg"
                  style={{ aspectRatio: "16/10" }}
                >
                  <Image
                    src={testimonials[activeIndex].thumbnail}
                    alt={`${testimonials[activeIndex].name}'s testimonial`}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#a363f4]/80 shadow-lg backdrop-blur-sm">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white" className="ml-1">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </button>
                {/* Dots selector */}
                <div className="mt-3 flex items-center justify-center gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActiveIndex(i)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        i === activeIndex
                          ? "w-7 bg-[#a363f4]"
                          : "w-2.5 bg-[#a363f4]/30"
                      }`}
                      aria-label={`View testimonial ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Desktop — vertical stack of all thumbnails */}
              <div
                ref={scrollRef}
                className="hidden gap-5 md:flex md:flex-col"
              >
                {testimonials.map((t, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleThumbClick(i)}
                    className={`group relative shrink-0 overflow-hidden rounded-[20px] border transition-all duration-300 md:ml-[20px] md:w-[446px] ${
                      i === activeIndex
                        ? "border-[#a363f4] shadow-lg md:h-[400px]"
                        : "border-[#c399f8] opacity-70 hover:opacity-100 md:h-[160px]"
                    }`}
                  >
                    <Image
                      src={t.thumbnail}
                      alt={`${t.name}'s testimonial`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="446px"
                    />
                    {i === activeIndex && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-[#a363f4]/80 shadow-lg backdrop-blur-sm transition-transform group-hover:scale-110"
                          onClick={(e) => {
                            e.stopPropagation();
                            setVideoId(t.wistiaId);
                          }}
                        >
                          <svg width="26" height="26" viewBox="0 0 24 24" fill="white" className="ml-1">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </button>
                ))}
              </div>
              {/* Fade overlays on desktop */}
              <div className="pointer-events-none absolute inset-x-0 top-0 hidden h-[120px] bg-gradient-to-b from-[#F5EEFD] to-transparent md:block" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-[120px] bg-gradient-to-t from-[#F5EEFD] to-transparent md:block" />
            </div>

            {/* Right — Active testimonial card */}
            <div className="flex flex-1 items-center justify-center rounded-[20px] border border-black/10 bg-white/50 px-5 py-6 sm:px-10 sm:py-8">
              <div
                key={activeIndex}
                className="flex w-full max-w-[631px] flex-col gap-6 sm:gap-8"
                style={{
                  animation: "fadeSlideUp 0.4s ease-out",
                }}
              >
                {/* Quote */}
                <div className="flex flex-col gap-[20px] pt-[10px] sm:gap-[30px] sm:pt-[20px]">
                  <p className="text-[20px] font-normal leading-[1.2] tracking-[-1.8px] text-black sm:text-[26px] md:text-[30px]">
                    {active.quote}
                  </p>
                  <div className="flex items-center gap-4 sm:gap-[20px]">
                    <div className="relative h-[45px] w-[45px] shrink-0 overflow-hidden rounded-full border border-black sm:h-[59px] sm:w-[59px]">
                      <Image
                        src={active.avatar}
                        alt={active.name}
                        fill
                        className="object-cover"
                        sizes="59px"
                      />
                    </div>
                    <div className="flex flex-col gap-[5px]">
                      <p className="text-[16px] font-normal leading-[1.5] tracking-[-1.32px] text-black/60 sm:text-[22px]">
                        {active.name}
                      </p>
                      <div className="flex">
                        {Array.from({ length: active.rating }).map((_, i) => (
                          <svg
                            key={i}
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="#a363f4"
                            className="sm:h-[28px] sm:w-[28px]"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap items-center justify-between gap-3 py-3 sm:gap-4 sm:py-[20px]">
                  {active.stats.map((stat, i) => (
                    <div
                      key={i}
                      className="rounded-[12px] border-l-4 border-[#a363f4] px-3 py-2 sm:rounded-[15px] sm:px-[26px] sm:py-[11px]"
                      style={{
                        backgroundImage:
                          "linear-gradient(270deg, rgba(163,99,244,0) 0%, rgba(163,99,244,0.1) 100%)",
                      }}
                    >
                      <p
                        className="text-[18px] font-semibold leading-[1.2] tracking-[-2.04px] sm:text-[28px] md:text-[34px]"
                        style={{
                          backgroundImage:
                            "linear-gradient(to bottom, rgba(163,99,244,0) 0%, rgba(125,74,190,0.9) 80%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        {stat.value}
                      </p>
                      <p className="text-[12px] font-normal leading-[1.5] tracking-[-1.2px] text-black/60 sm:text-[16px] md:text-[20px]">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* View story link — plays the video */}
                <button
                  type="button"
                  onClick={() => setVideoId(active.wistiaId)}
                  className="w-fit text-[16px] font-medium leading-[1.5] tracking-[-1.2px] text-[#a363f4] transition-colors hover:text-[#6d28d9] sm:text-[20px]"
                >
                  View story →
                </button>
              </div>
            </div>
          </div>
        </AnimateOnView>
      </div>

      {/* Video popup */}
      {videoId && (
        <VideoPopup wistiaId={videoId} onClose={() => setVideoId(null)} />
      )}

      {/* Inline keyframe for card transition */}
      <style jsx>{`
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
