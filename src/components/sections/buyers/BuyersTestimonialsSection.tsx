"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { FaPlay } from "react-icons/fa";
import { buyersTestimonialsConfig } from "@/config/buyers.config";
import { LazyBlock } from "@/components/ui/LazyBlock";
import { AnimateOnView } from "@/components/ui/AnimateOnView";

const TESTIMONIAL_ITEMS = [
  { thumbnail: "/assets/reviews/thumbnail02.jpg", videoId: "1Q02DZe9gFx9JfMQUhgqUqO2Wdn7VkGcz" },
  { thumbnail: "/assets/reviews/thumbnail01.png", videoId: "1y2QZ8SAMNkgG1GzSF0tz7npOW0I-CU3M" },
  { thumbnail: "/assets/reviews/thumbnail03.png", videoId: "1Xpqlk3mwY2pfW6j0HHql7M0q0Ub4Mppm" },
];

function ThumbnailBlock({
  thumbnail,
  onPlay,
}: {
  thumbnail: string;
  onPlay: () => void;
}) {
  return (
    <div
      className="group relative aspect-[4/5] h-[320px] min-h-[320px] min-w-[256px] w-[256px] shrink-0 overflow-hidden rounded-xl sm:h-[545px] sm:min-h-[545px] sm:min-w-0 sm:w-full sm:rounded-2xl"
      style={{
        background:
          "linear-gradient(135deg, rgba(163, 106, 246, 0.15) 0%, rgba(163, 106, 246, 0.05) 100%)",
        border: "1px solid rgba(195, 153, 248, 0.5)",
      }}
    >
      <Image
        src={thumbnail}
        alt="Testimonial video thumbnail"
        fill
        className="object-cover object-center transition-transform group-hover:scale-105"
        sizes="(max-width: 640px) 280px, 100%"
      />
      <button
        type="button"
        onClick={onPlay}
        className="absolute inset-0 z-10 flex cursor-pointer items-center justify-center transition-opacity hover:opacity-95"
        aria-label="Play video"
      >
        <div
          className="flex items-center justify-center rounded-full p-2 backdrop-blur-[10px] transition-transform group-hover:scale-105"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%)",
          }}
        >
          <div
            className="flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg sm:h-14 sm:w-14 md:h-16 md:w-16"
            style={{
              background:
                "linear-gradient(to bottom, rgba(163, 106, 246, 0.2) 0%, #a36af6 100%)",
            }}
          >
            <FaPlay className="ml-1 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
          </div>
        </div>
      </button>
    </div>
  );
}

function VideoPopup({
  videoId,
  onClose,
}: {
  videoId: string;
  onClose: () => void;
}) {
  const [useIframe, setUseIframe] = useState(false);
  const directVideoUrl = `https://drive.google.com/uc?export=download&id=${videoId}`;
  const embedUrl = `https://drive.google.com/file/d/${videoId}/preview`;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onEscape);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onEscape);
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Video player"
    >
      <div
        className="relative overflow-hidden rounded-2xl bg-black"
        style={{ height: "80vh", width: "auto", aspectRatio: "4/5" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70"
          aria-label="Close video"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button> */}
        <div className="relative h-full w-full">
          {useIframe ? (
            <iframe
              key={videoId}
              src={embedUrl}
              title="Testimonial video"
              allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0"
            />
          ) : (
            <video
              key={videoId}
              src={directVideoUrl}
              playsInline
              controls
              className="absolute inset-0 h-full w-full object-contain"
              onError={() => setUseIframe(true)}
            />
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}

const VIDEO_H = 545;
const GAP = 24;
const PEEK = 112; // sliver of top/bottom videos when center is focused (>= faded layer height)
const MOBILE_BREAKPOINT = 640;

function VideoCarousel({
  onActiveChange,
  onPlayVideo,
}: {
  onActiveChange?: (index: number) => void;
  onPlayVideo?: (videoId: string) => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isScrollingRef = useRef(false);
  const [isMobile, setIsMobile] = useState(false);
  const viewportH = PEEK + VIDEO_H + PEEK;

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const handler = () => setIsMobile(mq.matches);
    handler();
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const updateActiveIndex = useCallback(() => {
    const el = scrollRef.current;
    if (!el || !onActiveChange) return;

    if (isMobile) {
      const viewportCenter = el.scrollLeft + el.offsetWidth / 2;
      let activeIdx = 0;
      let minDist = Infinity;
      for (let i = 0; i < videoRefs.current.length; i++) {
        const ref = videoRefs.current[i];
        if (!ref) continue;
        const left = ref.offsetLeft;
        const center = left + ref.offsetWidth / 2;
        const dist = Math.abs(center - viewportCenter);
        if (dist < minDist) {
          minDist = dist;
          activeIdx = i;
        }
      }
      onActiveChange(activeIdx);
    } else {
      const viewportCenter = el.scrollTop + el.offsetHeight / 2;
      let activeIdx = 0;
      let minDist = Infinity;
      for (let i = 0; i < videoRefs.current.length; i++) {
        const ref = videoRefs.current[i];
        if (!ref) continue;
        const top = ref.offsetTop;
        const center = top + ref.offsetHeight / 2;
        const dist = Math.abs(center - viewportCenter);
        if (dist < minDist) {
          minDist = dist;
          activeIdx = i;
        }
      }
      onActiveChange(activeIdx);
    }
  }, [onActiveChange, isMobile]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let scrollEndTimer: ReturnType<typeof setTimeout>;
    const handleScroll = () => {
      updateActiveIndex();
      clearTimeout(scrollEndTimer);
      scrollEndTimer = setTimeout(updateActiveIndex, 150);
    };
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollEndTimer);
    };
  }, [updateActiveIndex]);

  useEffect(() => {
    const centerSecondVideo = () => {
      const el = scrollRef.current;
      const target = videoRefs.current[1];
      if (!el || !target) return;
      if (isMobile) {
        if (el.scrollWidth > 0) {
          const scrollLeft =
            target.offsetLeft - el.offsetWidth / 2 + target.offsetWidth / 2;
          el.scrollLeft = Math.max(0, scrollLeft);
          onActiveChange?.(1);
        }
      } else {
        if (el.scrollHeight > 0) {
          const scrollTop =
            target.offsetTop - el.offsetHeight / 2 + target.offsetHeight / 2;
          el.scrollTop = Math.max(0, scrollTop);
          onActiveChange?.(1);
        }
      }
    };
    centerSecondVideo();
    const rafId = requestAnimationFrame(centerSecondVideo);
    const timeoutId = setTimeout(centerSecondVideo, 150);
    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timeoutId);
    };
  }, [onActiveChange, isMobile]);

  const handleWheel = (e: React.WheelEvent) => {
    if (isMobile) return;
    const el = scrollRef.current;
    if (!el || isScrollingRef.current) return;
    const delta = e.deltaY;
    if (Math.abs(delta) < 5) return;
    const step = VIDEO_H + GAP;
    isScrollingRef.current = true;
    el.scrollBy({ top: delta > 0 ? step : -step, behavior: "smooth" });
    e.preventDefault();
    setTimeout(() => {
      isScrollingRef.current = false;
    }, 600);
  };

  return (
    <div className="stagger-child relative overflow-hidden rounded-xl bg-[#F5EEFD] sm:rounded-2xl">
      {/* Mobile: faded left/right (videos in row) */}
      <div
        className="pointer-events-none absolute left-0 top-0 z-20 h-full w-12 bg-gradient-to-r from-[#F5EEFD] via-[#F5EEFD]/80 to-transparent sm:hidden"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-0 top-0 z-20 h-full w-12 bg-gradient-to-l from-[#F5EEFD] via-[#F5EEFD]/80 to-transparent sm:hidden"
        aria-hidden
      />
      {/* Desktop: faded top/bottom */}
      <div
        className="pointer-events-none absolute left-0 right-0 top-0 z-20 hidden h-[112px] bg-gradient-to-b from-[#F5EEFD] via-[#F5EEFD]/80 to-transparent sm:block"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 hidden h-[112px] bg-gradient-to-t from-[#F5EEFD] via-[#F5EEFD]/80 to-transparent sm:block"
        aria-hidden
      />
      {/* Scroll container */}
      <div
        ref={scrollRef}
        onWheel={handleWheel}
        className="relative h-[360px] overflow-x-auto overflow-y-hidden overscroll-x-none scrollbar-hide sm:h-[769px] sm:overflow-x-hidden sm:overflow-y-auto sm:overscroll-y-none"
        style={{
          scrollSnapType: isMobile ? "x mandatory" : "y mandatory",
          scrollBehavior: "smooth",
        }}
      >
        {/* Mobile: flex-row with left/right padding so 1st & 3rd center like 2nd */}
        {/* Desktop: flex-col with top/bottom spacers */}
        <div
          className="flex flex-row gap-3 sm:flex-col sm:gap-6 sm:px-0"
          style={
            isMobile
              ? {
                  paddingLeft: "calc((100% - 256px) / 2)",
                  paddingRight: "calc((100% - 256px) / 2)",
                }
              : {
                  paddingTop: (viewportH - VIDEO_H) / 2,
                  paddingBottom: (viewportH - VIDEO_H) / 2,
                }
          }
        >
          {TESTIMONIAL_ITEMS.map((item, idx) => (
            <div
              key={idx}
              ref={(r) => {
                videoRefs.current[idx] = r;
              }}
              data-video-block
              className="shrink-0"
              style={{
                scrollSnapAlign: "center",
                scrollSnapStop: "always",
              }}
            >
              <ThumbnailBlock
                thumbnail={item.thumbnail}
                onPlay={() => onPlayVideo?.(item.videoId)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function BuyersTestimonialsSection() {
  const { heading, subheading, testimonials } = buyersTestimonialsConfig;
  const [activeIndex, setActiveIndex] = useState(1);
  const [popupVideoId, setPopupVideoId] = useState<string | null>(null);

  return (
    <section className="bg-[#F5EEFD] px-4 py-12 sm:py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <LazyBlock>
          <header className="mx-auto mb-12 w-[80%] text-center sm:w-auto md:mb-16">
            <h2 className="text-[26px] font-medium leading-[1.1] tracking-[-2px] text-zinc-900 sm:text-[36px] md:text-[52px] lg:text-[60px]">
              {heading.before}
              <span className="font-serif font-medium italic text-[#6824BF]">
                {heading.highlight}
              </span>
            </h2>
            <p className="mt-4 text-[16px] font-normal leading-[1.5] text-zinc-600 md:text-[18px]">
              {subheading}
            </p>
          </header>
        </LazyBlock>

        {/* Two-column layout */}
        <AnimateOnView animation="stagger" rootMargin="0px 0px -80px 0px">
        <div className="grid gap-6 sm:gap-8 md:grid-cols-[0.45fr_0.55fr] md:gap-12 lg:gap-16">
          {/* Left - Thumbnail carousel: click opens video in popup */}
          <VideoCarousel
            onActiveChange={setActiveIndex}
            onPlayVideo={setPopupVideoId}
          />

          {/* Right - Testimonial card (synced with active video) */}
          <div className="stagger-child flex min-h-0 flex-col justify-center overflow-hidden sm:min-h-[545px]">
            {testimonials[activeIndex] && (
              <article
                key={activeIndex}
                className="animate-slide-in-from-top flex min-h-0 flex-col justify-between rounded-xl bg-white p-4 shadow-sm sm:min-h-[545px] sm:rounded-2xl sm:p-6 md:p-12"
              >
                <div>
                  <blockquote className="text-[16px] font-normal leading-[1.5] text-zinc-900 sm:text-[18px] md:text-[20px] lg:text-[22px]">
                    &ldquo;{testimonials[activeIndex].quote}&rdquo;
                  </blockquote>
                  <div className="mt-4 flex items-start gap-2 sm:mt-6 sm:gap-3">
                    {testimonials[activeIndex].avatar ? (
                      <div className="ring-2 ring-[#a36af6]/60 overflow-hidden rounded-full shrink-0">
                        <Image
                          src={testimonials[activeIndex].avatar!}
                          alt=""
                          width={48}
                          height={48}
                          className="h-10 w-10 rounded-full object-cover sm:h-12 sm:w-12"
                        />
                      </div>
                    ) : (
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#a36af6]/20 text-[14px] font-medium text-[#6824BF] ring-2 ring-[#a36af6]/60 sm:h-12 sm:w-12 sm:text-[18px]">
                        {testimonials[activeIndex].name.charAt(0)}
                      </div>
                    )}
                    <div className="flex flex-col gap-1">
                      <span className="text-[14px] font-medium text-zinc-900 sm:text-[16px] md:text-[18px]">
                        {testimonials[activeIndex].name}
                      </span>
                      <div className="flex gap-0.5" aria-hidden>
                        {Array.from({ length: testimonials[activeIndex].stars ?? 5 }).map((_, i) => (
                          <svg key={i} className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20">
                            <defs>
                              <linearGradient id={`starGradient-${activeIndex}-${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#7D4ABE" stopOpacity="0.31" />
                                <stop offset="100%" stopColor="#7D4ABE" stopOpacity="1" />
                              </linearGradient>
                            </defs>
                            <path fill={`url(#starGradient-${activeIndex}-${i})`} d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {testimonials[activeIndex].metrics && testimonials[activeIndex].metrics!.length > 0 && (
                  <div className="mt-6 grid grid-cols-2 md:grid-cols-2 gap-x-2 md:gap-x-8 md:gap-y-6 gap-y-2 sm:mt-8 md:gap-x-10 md:gap-y-8">
                    {testimonials[activeIndex].metrics!.map((m, i) => (
                      <div
                        key={i}
                        className="flex border-l-3 md:border-l-4 border-l-[#a36af6]/80 md:border-l-[#a36bf6] flex-col rounded-[10px] md:py-[5px] md:px-5 py-[3px] px-[10px]"
                        style={{
                        
                          background: "linear-gradient(45deg, #a36af624, transparent)",
                        }}
                      >
                        <span
                          className="bg-clip-text text-[16px] font-bold text-transparent sm:text-[20px] md:text-[25px] lg:text-[26px]"
                          style={{
                            backgroundImage: "linear-gradient(to bottom, #7D4ABE50 0%, #7D4ABE 100%)",
                          }}
                        >
                          {m.value}
                        </span>
                        <span className="text-[12px] font-normal text-zinc-600 sm:text-[14px] md:text-[15px]">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
                <button
                  type="button"
                  onClick={() => setPopupVideoId(TESTIMONIAL_ITEMS[activeIndex].videoId)}
                  className="mt-4 hover:bg-[#a66af6]/5 w-full text-center items-center justify-left py-2 px-2 rounded-lg cursor-pointer hover:underline group inline-flex w-fit items-center gap-1.5 text-[14px] font-medium text-[#7D4ABE] transition-colors hover:text-[#6824BF] sm:mt-6 sm:text-[15px] md:text-[16px]"
                >
                  View story
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </article>
            )}
          </div>
        </div>
        </AnimateOnView>

        {popupVideoId && typeof document !== "undefined" && (
          <VideoPopup
            videoId={popupVideoId}
            onClose={() => setPopupVideoId(null)}
          />
        )}
      </div>
    </section>
  );
}
