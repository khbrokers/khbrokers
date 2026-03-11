"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { sellersWhySellConfig } from "@/config/sellers.config";
import { AnimateOnView } from "@/components/ui/AnimateOnView";

const PRIMARY = "#039760";
const CARD_GAP = 4;
const FADE_HEIGHT = 68;

/** Active (centered) card dimensions - desktop */
const ACTIVE_CARD_HEIGHT = 481;
const ACTIVE_CARD_WIDTH = 672;

/** Non-centered card scale (~80% = 538×385) */
const INACTIVE_CARD_SCALE = 0.8;

const SCROLL_VIEWPORT_HEIGHT = 672;

/** Padding so first/last card center aligns with viewport center */
const CENTER_PADDING = (SCROLL_VIEWPORT_HEIGHT - ACTIVE_CARD_HEIGHT) / 2;

const scrollContainerBg1 = "#7fcdb1";
const scrollContainerBg2 = "#dff8ef";

const AUTO_SWIPE_INTERVAL_MS = 3500;

export function SellersWhySellSection() {
  const { heading, tagline, ctas, bentoCards } = sellersWhySellConfig;
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const activeIndexRef = useRef(activeIndex);
  activeIndexRef.current = activeIndex;

  const itemHeight = ACTIVE_CARD_HEIGHT + CARD_GAP;
  const scrollStep = itemHeight + CARD_GAP; // item + flex gap between items

  const scrollToIndex = useCallback((index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const targetIndex = Math.min(bentoCards.length - 1, Math.max(0, index));
    const targetScrollTop = targetIndex * scrollStep;
    el.scrollTo({ top: targetScrollTop, behavior: "smooth" });
    setActiveIndex(targetIndex);
  }, [bentoCards.length]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const updateActive = () => {
      const scrollTop = el.scrollTop;
      const index = Math.round(scrollTop / scrollStep);
      setActiveIndex(Math.min(bentoCards.length - 1, Math.max(0, index)));
    };
    el.addEventListener("scroll", updateActive, { passive: true });
    updateActive();
    return () => el.removeEventListener("scroll", updateActive);
  }, [bentoCards.length]);

  useEffect(() => {
    const id = setInterval(() => {
      const next =
        activeIndexRef.current >= bentoCards.length - 1
          ? 0
          : activeIndexRef.current + 1;
      scrollToIndex(next);
    }, AUTO_SWIPE_INTERVAL_MS);
    return () => clearInterval(id);
  }, [bentoCards.length, scrollToIndex]);

  const wheelLockRef = useRef(false);
  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      if (wheelLockRef.current) {
        e.preventDefault();
        return;
      }
      const delta = e.deltaY;
      if (delta > 0) {
        e.preventDefault();
        wheelLockRef.current = true;
        scrollToIndex(activeIndex + 1);
        setTimeout(() => { wheelLockRef.current = false; }, 400);
      } else if (delta < 0) {
        e.preventDefault();
        wheelLockRef.current = true;
        scrollToIndex(activeIndex - 1);
        setTimeout(() => { wheelLockRef.current = false; }, 400);
      }
    },
    [activeIndex, scrollToIndex]
  );

  return (
    <section className="px-4 py-12 sm:py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <AnimateOnView
          animation="stagger"
          rootMargin="100px 0px -40px 0px"
          threshold={0.05}
          className="relative grid gap-6 rounded-[23px] md:grid-cols-2 md:gap-8 lg:gap-10"
          style={{
            background: "linear-gradient(180deg, #7CCCAF 0%, #E2F9F1 100%)",
            border: "2px solid transparent",
            backgroundImage:
              "linear-gradient(180deg, #7CCCAF 0%, #E2F9F1 100%), linear-gradient(to bottom, #55AA73790 0%, transparent 100%)",
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
          }}
        >
          {/* Inner shadow overlay - above fade layers so shadow stays visible */}
          <div
            className="pointer-events-none absolute inset-0 z-20 rounded-[20px]"
            style={{ boxShadow: "inset 0 4px 40px rgba(255, 255, 255, 0.8)" }}
            aria-hidden
          />
          {/* Left panel */}
          <div className="stagger-child flex flex-col justify-between items-center text-center md:items-start md:text-left h-[100%] p-[40px] md:p-[60px] lg:p-[80px]">
              <div>
                <h2 className="text-[26px] font-medium leading-[1.1] tracking-[-2px] text-zinc-900 sm:text-[36px] md:text-[48px] lg:text-[58px]">
                  {heading.before}
                  <span
                    className="font-serif font-medium italic"
                    style={{ color: PRIMARY }}
                  >
                    {heading.highlight}
                  </span>
                </h2>
                <p className="mt-4 text-[14px] font-normal leading-[1.5] text-zinc-600 md:text-[16px] lg:text-[18px]">
                  {tagline}
                </p>

                <div className="mt-8 flex w-fit flex-row flex-wrap items-center justify-center gap-2 sm:gap-4">
                  {ctas.map((cta) =>
                    cta.primary ? (
                      <Link
                        key={cta.label}
                        href={cta.href}
                        className="h-fit flex shrink-0 items-center justify-center whitespace-nowrap rounded-full border-2 px-4 py-2.5 text-[13px] font-medium text-white shadow-[inset_0_4px_14px_white] transition-colors hover:opacity-90 sm:px-[20px] sm:py-[10px] sm:text-[16px] md:px-[20px] md:py-[15px] md:text-[18px]"
                        style={{
                          borderColor: "rgba(255,255,255,0.5)",
                          backgroundColor: PRIMARY,
                        }}
                      >
                        {cta.label}
                      </Link>
                    ) : (
                      <div key={cta.label} className="h-fit flex shrink-0 rounded-full bg-gradient-to-b from-zinc-900/10 to-transparent p-[2px]">
                        <Link
                          href={cta.href}
                          className="block h-fit whitespace-nowrap rounded-full bg-white px-4 py-2.5 text-[13px] font-medium text-zinc-900 transition-colors hover:bg-zinc-100 sm:px-[20px] sm:py-[10px] sm:text-[16px] md:px-[20px] md:py-[15px] md:text-[18px]"
                        >
                          {cta.label}
                        </Link>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Carousel nav */}
              <div className="mt-10 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => activeIndex > 0 && scrollToIndex(activeIndex - 1)}
                  disabled={activeIndex === 0}
                  className="flex cursor-pointer items-center justify-center rounded-xl transition-colors hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:opacity-50"
                  style={{
                    padding: "5px 20px",
                    backgroundColor: "rgba(0, 169, 107, 0.4)",
                    border: "2px solid rgba(0, 169, 107, 0.4)",
                    color: "white",
                  }}
                  aria-label="Previous"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>
                <div className="flex items-center gap-2">
                  {bentoCards.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => scrollToIndex(i)}
                      className={`cursor-pointer shrink-0 rounded-full overflow-hidden transition-colors ${
                        i === activeIndex ? "h-[10px] w-[28px]" : "h-2.5 w-2.5"
                      }`}
                      style={{ backgroundColor: "rgba(0,0,0,0.12)" }}
                      aria-label={`Go to slide ${i + 1}`}
                    >
                      {i === activeIndex && (
                        <span
                          key={activeIndex}
                          className="block h-full min-w-0 rounded-full bg-[#00965F70] animate-progress-pill"
                        />
                      )}
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => activeIndex < bentoCards.length - 1 && scrollToIndex(activeIndex + 1)}
                  disabled={activeIndex === bentoCards.length - 1}
                  className="flex cursor-pointer items-center justify-center rounded-xl transition-colors hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:opacity-50"
                  style={{
                    padding: "5px 20px",
                    backgroundColor: "rgba(0, 169, 107, 0.5)",
                    border: "2px solid rgba(0, 169, 107, 0.7)",
                    color: "white",
                  }}
                  aria-label="Next"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>

          {/* Right panel - Vertical scrolling cards */}
          <div className="stagger-child relative min-h-[672px] overflow-hidden rounded-xl sm:rounded-2xl">
            {/* Fade overlays */}
            <div
              className="pointer-events-none absolute left-0 right-0 top-0 z-10"
              style={{
                height: FADE_HEIGHT,
                background: `linear-gradient(to bottom, ${scrollContainerBg1}, transparent)`,
              }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute bottom-0 left-0 right-0 z-10"
              style={{
                height: FADE_HEIGHT,
                background: `linear-gradient(to top, ${scrollContainerBg2}, transparent)`,
              }}
              aria-hidden
            />
            {/* Scroll container */}
            <div
              ref={scrollRef}
              onWheel={handleWheel}
              className="scrollbar-hide overflow-y-auto overflow-x-hidden overscroll-y-none"
              style={{
                scrollSnapType: "y mandatory",
                scrollBehavior: "smooth",
                height: SCROLL_VIEWPORT_HEIGHT,
                minHeight: SCROLL_VIEWPORT_HEIGHT,
              }}
            >
              <div
                className="flex flex-col pl-4 pr-6 md:pr-8"
                style={{
                  paddingTop: CENTER_PADDING,
                  paddingBottom: CENTER_PADDING,
                  gap: CARD_GAP,
                }}
              >
                {bentoCards.map((card, idx) => {
                  const isTranslucent = card.variant === "translucent";
                  const isActive = idx === activeIndex;
                  return (
                    <div
                      key={idx}
                      ref={(r) => { cardRefs.current[idx] = r; }}
                      className="shrink-0 flex items-center justify-center overflow-visible rounded-xl transition-all duration-300"
                      style={{
                        height: itemHeight,
                        minHeight: itemHeight,
                        scrollSnapAlign: "center",
                        scrollSnapStop: "always",
                      }}
                    >
                      <div
                        className="flex flex-col overflow-hidden rounded-[20px] p-4 shadow-lg transition-all duration-300 md:rounded-[30px] md:p-5"
                        style={{
                          width: ACTIVE_CARD_WIDTH,
                          height: ACTIVE_CARD_HEIGHT,
                          maxWidth: "100%",
                          transform: isActive ? "scale(1)" : `scale(${INACTIVE_CARD_SCALE})`,
                          transformOrigin: "center center",
                          backgroundColor: "#ffffff",
                          border: "8px solid transparent",
                          backgroundImage: `linear-gradient(#ffffff, #ffffff), linear-gradient(to bottom, rgba(93, 182, 124, 0.45) 0%, rgba(93, 182, 124, 0.45) 100%)`,
                          backgroundOrigin: "border-box",
                          backgroundClip: "padding-box, border-box",
                        }}
                      >
                        <div className="relative mx-auto flex w-full flex-1 min-h-[120px] items-center justify-center overflow-hidden">
                          <Image
                            src={card.image}
                            alt=""
                            width={400}
                            height={300}
                            quality={100}
                            sizes="(max-width: 768px) 100vw, 672px"
                            className="h-full w-full object-contain"
                          />
                        </div>
                        <h3 className="text-[18px] md:text-[22px] font-medium tracking-[-0.5px] text-zinc-900 sm:text-[20px]">
                          {card.title}
                        </h3>
                        <p className="mt-3 font-regular text-[14px] md:text-[18px] leading-[1.5] text-zinc-900/60 sm:text-[15px]">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </AnimateOnView>
      </div>
    </section>
  );
}
