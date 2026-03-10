"use client";

import { valueMyStoreConfig } from "@/config/value-my-store.config";
import { AnimateOnView } from "@/components/ui/AnimateOnView";

const PRIMARY = "#00965F";
const TYPEFORM_URL = "https://form.typeform.com/to/tKEml6uU";

export function ValueMyStoreForm() {
  const { formTitle, formDescription } = valueMyStoreConfig;

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

          {/* Typeform embed */}
          <div className="mt-8 sm:mt-10 w-full overflow-hidden rounded-xl border border-zinc-200 bg-white">
            <iframe
              src={TYPEFORM_URL}
              title="Value My Store - Typeform"
              className="h-[500px] w-full min-h-[500px] border-0 sm:h-[550px] sm:min-h-[550px] md:h-[600px] md:min-h-[600px]"
              allow="camera; microphone; fullscreen"
            />
          </div>
        </AnimateOnView>
      </div>
    </section>
  );
}
