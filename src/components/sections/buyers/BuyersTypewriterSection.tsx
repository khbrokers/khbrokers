"use client";

import { useEffect, useRef, useState } from "react";
import { buyersTypewriterConfig } from "@/config/buyers.config";
import { LazyBlock } from "@/components/ui/LazyBlock";
import { AnimateOnView } from "@/components/ui/AnimateOnView";

const PARAGRAPH_CLASS =
  "text-[22px] font-semibold leading-[1.1] tracking-[-2px] text-zinc-900/40 sm:tracking-[-3px] sm:text-[32px] md:text-[40px] lg:text-[48px]";

function getParagraphTexts(): { text: string; emphasis?: boolean }[][] {
  const first = buyersTypewriterConfig.paragraphs[0];
  const segments =
    typeof first === "object" && first !== null && "segments" in first
      ? first.segments
      : [];
  const firstPara = segments.map((s) => ({ text: s.text, emphasis: s.emphasis }));
  const rest = buyersTypewriterConfig.paragraphs.slice(1) as string[];
  return [firstPara, ...rest.map((p) => [{ text: p, emphasis: false }])];
}

export function BuyersTypewriterSection() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [revealProgress, setRevealProgress] = useState(0);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    const updateProgress = () => {
      const rect = content.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Progress 0 when content top at/below viewport bottom (not yet visible)
      // Progress 1 when content has scrolled through (bottom above viewport top)
      if (rect.top >= windowHeight) {
        setRevealProgress(0);
      } else if (rect.bottom <= 0) {
        setRevealProgress(1);
      } else {
        const scrollRange = windowHeight + rect.height;
        const progress = Math.min(1, Math.max(0, (windowHeight - rect.top) / scrollRange));
        setRevealProgress(progress);
      }
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  const paragraphs = getParagraphTexts();
  const totalChars = paragraphs.reduce(
    (sum, para) => sum + para.reduce((s, seg) => s + seg.text.length, 0),
    0
  );
  const revealedLength = Math.floor(totalChars * revealProgress);

  let globalCharCount = 0;

  return (
    <section className="bg-[#F5EEFD] px-4 py-12 sm:py-16 md:py-24 min-h-[70vh] sm:min-h-[120vh] md:min-h-[150vh]">
      <AnimateOnView animation="stagger" rootMargin="0px 0px -100px 0px">
      <div ref={contentRef} className="mx-auto max-w-5xl space-y-6 md:space-y-8">
        {paragraphs.map((para, paraIdx) => {
          const paraStart = globalCharCount;
          const paraLen = para.reduce((s, seg) => s + seg.text.length, 0);
          globalCharCount += paraLen;

          const paraRevealed = Math.max(
            0,
            Math.min(paraLen, revealedLength - paraStart)
          );

          let segCharCount = 0;

          return (
            <p
              key={paraIdx}
              className={`stagger-child ${PARAGRAPH_CLASS}`}
            >
              {para.map((segment, segIdx) => {
                const segStart = segCharCount;
                const segEnd = segCharCount + segment.text.length;
                segCharCount = segEnd;

                const visibleChars = Math.max(
                  0,
                  Math.min(segment.text.length, paraRevealed - segStart)
                );
                const visibleText = segment.text.slice(0, visibleChars);
                const remainingText = segment.text.slice(visibleChars);

                return (
                  <span
                    key={segIdx}
                    className={segment.emphasis ? "font-bold" : ""}
                  >
                    <span className="text-zinc-900">{visibleText}</span>
                    {remainingText && <span>{remainingText}</span>}
                  </span>
                );
              })}
            </p>
          );
        })}
      </div>
      </AnimateOnView>
    </section>
  );
}
