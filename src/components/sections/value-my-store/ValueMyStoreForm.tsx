"use client";

import { useState, FormEvent } from "react";
import { valueMyStoreConfig } from "@/config/value-my-store.config";
import { AnimateOnView } from "@/components/ui/AnimateOnView";

const PRIMARY = "#00965F";

export function ValueMyStoreForm() {
  const {
    formTitle,
    formDescription,
    formQuestion,
    formPlaceholder,
    submitLabel,
    submitHint,
  } = valueMyStoreConfig;

  const [answer, setAnswer] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!answer.trim() || isSubmitting) return;
    setIsSubmitting(true);
    // TODO: wire to API
    setTimeout(() => setIsSubmitting(false), 1000);
  };

  return (
    <section className="relative -mt-16 px-4 pb-24 sm:-mt-20 sm:px-6 md:pb-32">
      <div className="mx-auto flex w-full justify-center">
        <AnimateOnView
          animation="fade-up"
          rootMargin="0px 0px -60px 0px"
          className="w-[70%] overflow-hidden md:py-[60px] md:px-[100px] rounded-[40px] p-6 shadow-xl shadow-[#00965F]/10 sm:rounded-[28px] sm:p-8 md:p-10"
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

          <form onSubmit={handleSubmit} className="mt-8 sm:mt-10">
            <label className="block text-[15px] font-medium text-zinc-900 sm:text-base">
              {formQuestion}
            </label>
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder={formPlaceholder}
              className="mt-3 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3.5 text-[15px] text-zinc-900 placeholder:text-zinc-400 focus:border-[#00965F]/50 focus:outline-none focus:ring-2 focus:ring-[#00965F]/20 sm:py-4 sm:text-base"
            />

            <div className="mt-6 flex flex-row flex-wrap items-center gap-3">
              <button
                type="submit"
                disabled={!answer.trim() || isSubmitting}
                className="rounded-full border-2 px-6 py-3 text-[15px] font-medium text-white shadow-[inset_0_4px_14px_rgba(255,255,255,0.3)] transition-colors hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-50 sm:px-8 sm:py-3.5 sm:text-[16px]"
                style={{
                  borderColor: "rgba(255,255,255,0.5)",
                  backgroundColor: answer.trim() ? PRIMARY : "#94a3b8",
                }}
              >
                {isSubmitting ? "Submitting..." : submitLabel}
              </button>
              <span className="text-[13px] text-zinc-400 sm:text-sm">
                {submitHint}
              </span>
            </div>
          </form>
        </AnimateOnView>
      </div>
    </section>
  );
}
