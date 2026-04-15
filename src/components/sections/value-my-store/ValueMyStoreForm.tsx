"use client";

import { useEffect, useRef, useState } from "react";
import { valueMyStoreConfig } from "@/config/value-my-store.config";
import { AnimateOnView } from "@/components/ui/AnimateOnView";

const PRIMARY = "#00965F";
const TYPEFORM_LIVE_ID = "01KHRW1Q39EC9SYDTFQDPYG364";

export function ValueMyStoreForm() {
  const { formTitle, formDescription } = valueMyStoreConfig;
  const [isFormReady, setIsFormReady] = useState(false);
  const formContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = formContainerRef.current;
    if (!container) return;

    const attachLoadListener = (iframe: HTMLIFrameElement) => {
      iframe.addEventListener(
        "load",
        () => setIsFormReady(true),
        { once: true }
      );
    };

    const checkForIframe = () => {
      const iframe = container.querySelector("iframe");
      if (iframe) {
        attachLoadListener(iframe);
        return true;
      }
      return false;
    };

    if (checkForIframe()) return;

    const observer = new MutationObserver(() => {
      if (checkForIframe()) observer.disconnect();
    });
    observer.observe(container, { childList: true, subtree: true });

    const fallbackTimer = setTimeout(() => setIsFormReady(true), 10000);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <section className="relative px-4 pb-24 sm:px-6 md:pb-32 top-[40px] md:top-[120px]">
      <div className="mx-auto flex w-full justify-center">
        <AnimateOnView
          animation="fade-up"
          rootMargin="0px 0px -60px 0px"
          className="w-[100%] md:w-[70%] overflow-hidden md:py-[60px] md:px-[100px] rounded-[20px] md:rounded-[40px] p-6 shadow-xl shadow-[#00965F]/10 sm:rounded-[28px] sm:p-8 md:p-10"
          style={{
            border: "2px solid transparent",
            background:
              "linear-gradient(#F0FFFA, #F0FFFA) padding-box, linear-gradient(to bottom, #55AA73 0%, transparent 100%) border-box",
            backgroundClip: "padding-box, border-box",
          }}
        >
          {/* Section title */}
          <h2
            id="valuation-form"
            className="scroll-mt-24 text-center text-[28px] font-medium leading-[1.1] tracking-[-2px] text-zinc-900 sm:text-[36px] md:text-[44px]"
          >
            {formTitle.before}
            <span className="font-serif font-medium italic" style={{ color: PRIMARY }}>
              {formTitle.highlight}
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-center text-[15px] leading-relaxed text-zinc-900/60 sm:text-base">
            {formDescription}
          </p>

          {/* Typeform embed */}
          <div
            ref={formContainerRef}
            className="relative mt-8 sm:mt-10 w-full overflow-hidden rounded-xl border border-zinc-200 bg-white"
          >
            {!isFormReady && (
              <div
                className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-white/95"
                aria-live="polite"
                aria-busy="true"
              >
                <div
                  className="h-6 w-6 animate-spin rounded-full border-2 border-[#00965F] border-t-transparent"
                  aria-hidden
                />
                <p className="text-sm font-medium text-zinc-600">
                  getting form ready..
                </p>
              </div>
            )}
            <div
              data-tf-live={TYPEFORM_LIVE_ID}
              className="h-[500px] w-full min-h-[500px] sm:h-[550px] sm:min-h-[550px] md:h-[600px] md:min-h-[600px]"
            />
          </div>
        </AnimateOnView>
      </div>
    </section>
  );
}
