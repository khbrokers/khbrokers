"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { FaPlay } from "react-icons/fa";
import Script from "next/script";
import { createElement } from "react";
import { sellersFoundersConfig } from "@/config/sellers.config";
import { LazyBlock } from "@/components/ui/LazyBlock";
import { AnimateOnView } from "@/components/ui/AnimateOnView";

const PRIMARY = "#16a34a";
const WISTIA_ASPECT = 1.7777777777777777;

export function SellersFoundersSection() {
  const { heading, subheading, quote, name, title, videoThumbnail, videoId } =
    sellersFoundersConfig;
  const popupRef = useRef<HTMLDivElement>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePlay = () => setIsPopupOpen(true);
  const handleClose = () => setIsPopupOpen(false);

  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = "hidden";
      const onEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") handleClose();
      };
      document.addEventListener("keydown", onEscape);
      return () => {
        document.body.style.overflow = "";
        document.removeEventListener("keydown", onEscape);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isPopupOpen]);

  useEffect(() => {
    if (!isPopupOpen) return;
    const playWhenReady = async () => {
      const player = popupRef.current?.querySelector("wistia-player") as {
        play?: () => void;
      };
      if (player?.play) {
        player.play();
      } else if (typeof customElements !== "undefined") {
        await customElements.whenDefined("wistia-player");
        const p = popupRef.current?.querySelector("wistia-player") as {
          play?: () => void;
        };
        p?.play?.();
      }
    };
    const t = setTimeout(playWhenReady, 300);
    return () => clearTimeout(t);
  }, [isPopupOpen]);

  return (
    <section
      className="px-4 py-12 sm:py-16 md:py-24"
      style={{ backgroundColor: "#f0fdf4" }}
    >
      <Script src="https://fast.wistia.com/player.js" strategy="lazyOnload" />
      <Script
        src={`https://fast.wistia.com/embed/${videoId}.js`}
        strategy="lazyOnload"
        type="module"
      />
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 sm:gap-12 md:grid-cols-[0.45fr_0.55fr] md:gap-16 lg:gap-20">
          <LazyBlock rootMargin="100px 0px -40px 0px">
            <header className="text-center md:text-left">
              <h2 className="text-[26px] font-medium leading-[1.1] tracking-[-2px] text-zinc-900 sm:text-[32px] md:text-[44px] lg:text-[52px]">
                {heading.before}
                <span className="font-serif font-medium italic" style={{ color: PRIMARY }}>
                  {heading.highlight}
                </span>
              </h2>
              <p className="mt-4 text-base font-normal text-zinc-600 md:text-lg">
                {subheading}
              </p>
            </header>
          </LazyBlock>

          <AnimateOnView animation="stagger" rootMargin="100px 0px -40px 0px" threshold={0.05}>
            <div className="stagger-child flex flex-col gap-6">
              <article
                className="rounded-2xl border-2 bg-white p-6 shadow-sm sm:p-8"
                style={{ borderColor: "rgba(34, 197, 94, 0.3)" }}
              >
                <blockquote className="text-[16px] font-normal leading-[1.5] text-zinc-900 sm:text-[18px] md:text-[20px]">
                  &ldquo;{quote}&rdquo;
                </blockquote>
                <div className="mt-4 flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[18px] font-medium"
                    style={{ backgroundColor: `${PRIMARY}20`, color: PRIMARY }}
                  >
                    {name.charAt(0)}
                  </div>
                  <div>
                    <span className="block text-[14px] font-medium text-zinc-900 sm:text-[16px]">
                      {name}
                    </span>
                    <span className="block text-[12px] text-zinc-600 sm:text-[14px]">
                      {title}
                    </span>
                  </div>
                </div>
              </article>

              <div
                className="group relative cursor-pointer overflow-hidden rounded-2xl"
                onClick={handlePlay}
                onKeyDown={(e) => e.key === "Enter" && handlePlay()}
                role="button"
                tabIndex={0}
                aria-label="Play founder video"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(34, 197, 94, 0.15) 0%, rgba(34, 197, 94, 0.05) 100%)",
                  border: "1px solid rgba(34, 197, 94, 0.3)",
                }}
              >
                <div className="relative aspect-video w-full">
                  <Image
                    src={videoThumbnail}
                    alt="Founder video thumbnail"
                    fill
                    className="object-cover object-center transition-transform group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg sm:h-16 sm:w-16"
                      style={{
                        background: `linear-gradient(to bottom, rgba(34, 197, 94, 0.2) 0%, ${PRIMARY} 100%)`,
                      }}
                    >
                      <FaPlay className="ml-1 h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnView>
        </div>
      </div>

      {isPopupOpen &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4"
            onClick={handleClose}
            role="dialog"
            aria-modal="true"
            aria-label="Video player"
          >
            <div
              ref={popupRef}
              className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={handleClose}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70"
                aria-label="Close video"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              {createElement("wistia-player", {
                "media-id": videoId,
                aspect: WISTIA_ASPECT,
                autoplay: true,
                className: "w-full",
              })}
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}
