"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { FaPlay, FaXTwitter } from "react-icons/fa6";
import {
  sellersTestimonialsConfig,
  sellersTestimonialsVideoItems,
} from "@/config/sellers.config";
import { AnimateOnView } from "@/components/ui/AnimateOnView";

type WistiaVideoItem = (typeof sellersTestimonialsVideoItems)[number];

const PRIMARY = "#00965F";
const PRIMARY_LIGHT = "rgba(0, 150, 95, 0.2)";
const BG = "#f0fdf4";

const MOBILE_THUMB_W = 168;

function ThumbnailBlock({
  thumbnail,
  onPlay,
}: {
  thumbnail: string;
  onPlay: () => void;
}) {
  return (
    <div
      className="group relative aspect-[4/5] h-[210px] min-h-[210px] w-[168px] min-w-[168px] shrink-0 overflow-hidden rounded-lg sm:h-[545px] sm:min-h-[545px] sm:min-w-0 sm:w-full sm:rounded-2xl"
      style={{
        background:
          "linear-gradient(135deg, rgba(0, 150, 95, 0.15) 0%, rgba(0, 150, 95, 0.05) 100%)",
        border: "1px solid rgba(93, 182, 124, 0.5)",
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
                "linear-gradient(to bottom, rgba(0, 150, 95, 0.2) 0%, #00965F 100%)",
            }}
          >
            <FaPlay className="ml-1 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
          </div>
        </div>
      </button>
    </div>
  );
}

function WistiaVideoPopup({
  item,
  onClose,
}: {
  item: WistiaVideoItem;
  onClose: () => void;
}) {
  const { wistiaMediaId } = item;
  const embedUrl = `https://fast.wistia.com/embed/iframe/${wistiaMediaId}?videoFoam=true&autoplay=1`;

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
        className="relative aspect-video w-full max-w-4xl overflow-hidden rounded-2xl bg-black"
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          src={embedUrl}
          title="Testimonial video"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
    </div>,
    document.body
  );
}

const VIDEO_H = 545;
const GAP = 24;
const PEEK = 112;
const MOBILE_BREAKPOINT = 640;

function VideoCarousel({
  onActiveChange,
  onPlayVideo,
  items,
  initialCenterIndex,
}: {
  onActiveChange?: (index: number) => void;
  onPlayVideo?: (item: WistiaVideoItem) => void;
  items: WistiaVideoItem[];
  initialCenterIndex?: number;
}) {
  const centerIdx = initialCenterIndex ?? Math.floor(items.length / 2);
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
    const centerVideo = () => {
      const el = scrollRef.current;
      const target = videoRefs.current[centerIdx];
      if (!el || !target) return;
      if (isMobile) {
        if (el.scrollWidth > 0) {
          const scrollLeft =
            target.offsetLeft - el.offsetWidth / 2 + target.offsetWidth / 2;
          el.scrollLeft = Math.max(0, scrollLeft);
          onActiveChange?.(centerIdx);
        }
      } else {
        if (el.scrollHeight > 0) {
          const scrollTop =
            target.offsetTop - el.offsetHeight / 2 + target.offsetHeight / 2;
          el.scrollTop = Math.max(0, scrollTop);
          onActiveChange?.(centerIdx);
        }
      }
    };
    centerVideo();
    const rafId = requestAnimationFrame(centerVideo);
    const timeoutId = setTimeout(centerVideo, 150);
    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timeoutId);
    };
  }, [onActiveChange, isMobile, centerIdx]);

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
    <div className="stagger-child relative overflow-hidden rounded-xl sm:rounded-2xl" style={{ backgroundColor: BG }}>
      <div
        className="pointer-events-none absolute left-0 top-0 z-20 h-full w-12 bg-gradient-to-r sm:hidden"
        style={{
          background: `linear-gradient(to right, ${BG}, ${BG}80, transparent)`,
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-0 top-0 z-20 h-full w-12 bg-gradient-to-l sm:hidden"
        style={{
          background: `linear-gradient(to left, ${BG}, ${BG}80, transparent)`,
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-0 right-0 top-0 z-20 hidden h-[112px] sm:block"
        style={{
          background: `linear-gradient(to bottom, ${BG}, ${BG}80, transparent)`,
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 hidden h-[112px] sm:block"
        style={{
          background: `linear-gradient(to top, ${BG}, ${BG}80, transparent)`,
        }}
        aria-hidden
      />
      <div
        ref={scrollRef}
        onWheel={handleWheel}
        className="relative h-[240px] overflow-x-auto overflow-y-hidden overscroll-x-none scrollbar-hide sm:h-[769px] sm:overflow-x-hidden sm:overflow-y-auto sm:overscroll-y-none"
        style={{
          scrollSnapType: isMobile ? "x mandatory" : "y mandatory",
          scrollBehavior: "smooth",
        }}
      >
        <div
          className="flex flex-row gap-3 sm:flex-col sm:gap-6 sm:px-0"
          style={
            isMobile
              ? {
                paddingLeft: `calc((100% - ${MOBILE_THUMB_W}px) / 2)`,
                paddingRight: `calc((100% - ${MOBILE_THUMB_W}px) / 2)`,
              }
              : {
                paddingTop: (viewportH - VIDEO_H) / 2,
                paddingBottom: (viewportH - VIDEO_H) / 2,
              }
          }
        >
          {items.map((item, idx) => (
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
                onPlay={() => onPlayVideo?.(item)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SellersTestimonialsSection() {
  const { heading, subheading, testimonials } = sellersTestimonialsConfig;
  const [activeIndex, setActiveIndex] = useState(
    Math.floor(sellersTestimonialsVideoItems.length / 2)
  );
  const [popupVideoItem, setPopupVideoItem] = useState<WistiaVideoItem | null>(null);

  return (
    <section id="testimonials" className="scroll-mt-20 overflow-x-hidden px-4 py-12 sm:py-16 md:py-24" style={{ backgroundColor: BG }}>
      <div className="mx-auto max-w-6xl min-w-0">
        <AnimateOnView
          animation="fade-up-slow"
          rootMargin="100px 0px -40px 0px"
          threshold={0.05}
        >
          <header className="mx-auto mb-12 w-full max-w-2xl text-center md:mb-16">
            <h2 className="text-[26px] font-medium leading-[1.1] tracking-[-2px] text-zinc-900 sm:text-[36px] md:text-[52px] lg:text-[60px]">
              {heading.before}
              <br />
              <span className="font-serif font-medium italic" style={{ color: PRIMARY }}>
                {heading.highlight}
              </span>
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-[16px] font-normal leading-[1.5] text-zinc-600 md:text-[18px]">
              {subheading}
            </p>
          </header>
        </AnimateOnView>

        <AnimateOnView animation="stagger" rootMargin="100px 0px -40px 0px" threshold={0.05}>
          <div className="grid min-w-0 grid-cols-1 gap-4 sm:gap-6 md:grid-cols-[0.45fr_0.55fr] md:gap-12 lg:gap-16">
            <div className="stagger-child min-w-0 overflow-hidden">
            <VideoCarousel
              items={sellersTestimonialsVideoItems}
              initialCenterIndex={Math.floor(sellersTestimonialsVideoItems.length / 2)}
              onActiveChange={setActiveIndex}
              onPlayVideo={setPopupVideoItem}
            />
            </div>

            <div className="stagger-child flex min-w-0 min-h-0 flex-col justify-center overflow-hidden sm:min-h-[545px]">
              {testimonials[activeIndex] && (
                <article
                  key={activeIndex}
                  className="animate-slide-in-from-top flex min-h-0 flex-col justify-between rounded-md bg-white p-2.5 shadow-sm sm:min-h-[545px] sm:rounded-xl sm:p-4 md:rounded-2xl md:p-6 lg:p-12"
                >
                  <div className="flex flex-col justify-between my-auto h-fit min-h-fit items-center md:items-start gap-4 md:gap-6 lg:gap-8">
                    <div className="w-full flex flex-col items-center md:items-start">
                      <blockquote className="text-center md:text-left text-[13px] font-normal leading-snug text-zinc-900 sm:text-[16px] sm:leading-[1.5] md:text-[20px] lg:text-[22px]">
                        &ldquo;{testimonials[activeIndex].quote}&rdquo;
                      </blockquote>
                      <div className="mt-2 flex flex-col md:flex-row items-center md:items-start gap-1.5 sm:mt-4 sm:gap-3">
                        {testimonials[activeIndex].avatar ? (
                          <div className="shrink-0 overflow-hidden rounded-full ring-2 ring-[#00965F]/60">
                            <Image
                              src={testimonials[activeIndex].avatar!}
                              alt=""
                              width={48}
                              height={48}
                              className="h-10 w-10 rounded-full object-cover sm:h-12 sm:w-12"
                            />
                          </div>
                        ) : (
                          <div
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[14px] font-medium sm:h-12 sm:w-12 sm:text-[18px]"
                            style={{ backgroundColor: PRIMARY_LIGHT, color: PRIMARY }}
                          >
                            {testimonials[activeIndex].name.charAt(0)}
                          </div>
                        )}
                        <div className="flex flex-col gap-1 items-center md:items-start">
                          <div className="flex items-center gap-2">
                            <span className="text-[12px] font-medium text-zinc-900 sm:text-[14px] md:text-[16px] lg:text-[18px]">
                              {testimonials[activeIndex].name}
                            </span>
                            <div className="flex gap-0.5" aria-hidden>
                              {Array.from({ length: testimonials[activeIndex].stars ?? 5 }).map((_, i) => (
                                <svg key={i} className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20">
                                  <defs>
                                    <linearGradient id={`starGradientSellers-${activeIndex}-${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
                                      <stop offset="0%" stopColor="#00965F" stopOpacity="0.2" />
                                      <stop offset="100%" stopColor="#00965F" stopOpacity="1" />
                                    </linearGradient>
                                  </defs>
                                  <path fill={`url(#starGradientSellers-${activeIndex}-${i})`} d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                          </div>
                          {testimonials[activeIndex].role && (
                            <span className="text-[11px] text-zinc-600 sm:text-[13px] md:text-[14px] text-center md:text-left">
                              {testimonials[activeIndex].role}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-1 w-full">
                      {testimonials[activeIndex].xProfile && testimonials[activeIndex].xUsername && (
                        <a
                          href={testimonials[activeIndex].xProfile}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-0.5 inline-flex w-fit items-center gap-1 md:gap-3 text-[11px] px-3 py-2 rounded-full md:rounded-2xl text-zinc-500 transition-colors hover:text-zinc-900 sm:text-[12px]"
                          aria-label={`${testimonials[activeIndex].name} on X`}
                          style={{
                            borderLeftColor: `${PRIMARY}cc`,
                            background: "linear-gradient(45deg, rgba(0, 150, 95, 0.14), transparent)",
                          }}
                        >
                          <FaXTwitter className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                          <span className="text-zinc-500 font-regular text-[12px] sm:text-[14px] md:text-[16px] lg:text-[16px]" > @{testimonials[activeIndex].xUsername}</span>
                        </a>
                      )}
                    </div>
                  </div> 
                </article>
              )}
            </div>
          </div>
        </AnimateOnView>

        {popupVideoItem && typeof document !== "undefined" && (
          <WistiaVideoPopup
            item={popupVideoItem}
            onClose={() => setPopupVideoItem(null)}
          />
        )}
      </div>
    </section>
  );
}
