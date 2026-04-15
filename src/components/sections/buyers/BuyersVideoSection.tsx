"use client";

import Script from "next/script";
import Image from "next/image";
import { createElement, useRef, useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { FaPlay } from "react-icons/fa";

const WISTIA_MEDIA_ID = "h6xfyxiaea";
const WISTIA_ASPECT = 1.7777777777777777;

interface BuyersVideoSectionProps {
  /** Optional label to show beside the play icon (e.g. "Know more") */
  playLabel?: string;
}

export function BuyersVideoSection({ playLabel }: BuyersVideoSectionProps = {}) {
  const popupRef = useRef<HTMLDivElement>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePlay = () => setIsPopupOpen(true);
  const handleClose = useCallback(() => setIsPopupOpen(false), []);

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
  }, [isPopupOpen, handleClose]);

  useEffect(() => {
    if (!isPopupOpen) return;
    const playWhenReady = async () => {
      const player = popupRef.current?.querySelector("wistia-player") as { play?: () => void };
      if (player?.play) {
        player.play();
      } else if (typeof customElements !== "undefined") {
        await customElements.whenDefined("wistia-player");
        const p = popupRef.current?.querySelector("wistia-player") as { play?: () => void };
        p?.play?.();
      }
    };
    const t = setTimeout(playWhenReady, 300);
    return () => clearTimeout(t);
  }, [isPopupOpen]);

  return (
    <div className="relative z-10 px-4 pb-12 pt-6 sm:pb-20 sm:pt-8 md:pb-24">
      <Script
        src="https://fast.wistia.com/player.js"
        strategy="lazyOnload"
      />
      <Script
        src={`https://fast.wistia.com/embed/${WISTIA_MEDIA_ID}.js`}
        strategy="lazyOnload"
        type="module"
      />
      <div className="mx-auto max-w-5xl">
        <div
          className="group relative overflow-hidden rounded-xl p-[6px] cursor-pointer sm:rounded-2xl md:rounded-[2rem]"
          style={{
            background:
              "linear-gradient(to bottom, #D6BBFA 0%, #D6BBFA 40%, #FFFFFF80 100%)",
            filter: "drop-shadow(0 12px 40px rgba(163, 100, 244, 30%))",
          }}
        >
          <div
            className="relative aspect-video w-full overflow-hidden rounded-[14px] sm:rounded-2xl md:rounded-[2rem]"
            onClick={handlePlay}
            onKeyDown={(e) => e.key === "Enter" && handlePlay()}
            role="button"
            tabIndex={0}
            aria-label="Play video"
          >
            <Image
              src="/assets/videocover.png"
              alt="Video thumbnail"
              fill
              className="object-cover object-center transition-transform group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="flex items-center justify-center gap-3 rounded-full p-2 backdrop-blur-[10px] transition-transform group-hover:scale-105 sm:gap-4"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%)",
                }}
              >
                <div
                  className={`flex shrink-0 items-center justify-center rounded-full text-white shadow-lg ${
                    playLabel ? "gap-2.5 px-4 py-2 sm:px-5 sm:py-3 md:py-5 md:px-5" : "h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16"
                  }`}
                  style={{
                    background:
                      "linear-gradient(to bottom, #E7D6FC 0%, #a36af6 100%)",
                    ...(playLabel && {
                      width: "max-content",
                      gap: "10px",
                      color: "white",
                    }),
                  }}
                >
                  {playLabel && (
                    <span className="text-[14px] font-medium sm:text-[16px] md:text-[18px]">
                      {playLabel === "Know more" ? (
                        <>
                          Know <span className="font-serif text-[16px] font-medium sm:text-[18px] md:text-[20px] italic">more</span>
                        </>
                      ) : (
                        playLabel
                      )}
                    </span>
                  )}
                  <FaPlay className={playLabel ? "h-4 w-4 sm:h-5 sm:w-5" : "ml-1 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video popup modal - rendered via portal above header (z-[9999]) */}
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
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              {createElement("wistia-player", {
                "media-id": WISTIA_MEDIA_ID,
                aspect: WISTIA_ASPECT,
                autoplay: true,
                className: "w-full",
              })}
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
