"use client";

import Image from "next/image";
import { sellersTestimonialsConfig } from "@/config/sellers.config";
import { LazyBlock } from "@/components/ui/LazyBlock";
import { AnimateOnView } from "@/components/ui/AnimateOnView";

const PRIMARY = "#16a34a";

export function SellersTestimonialsSection() {
  const { heading, subheading, testimonials } = sellersTestimonialsConfig;

  return (
    <section
      className="px-4 py-12 sm:py-16 md:py-24"
      style={{ backgroundColor: "#f0fdf4" }}
    >
      <div className="mx-auto max-w-6xl">
        <LazyBlock>
          <header className="mx-auto mb-12 w-[80%] text-center sm:w-auto md:mb-16">
            <h2 className="text-[26px] font-medium leading-[1.1] tracking-[-2px] text-zinc-900 sm:text-[36px] md:text-[52px] lg:text-[60px]">
              {heading.before}
              <span className="font-serif font-medium italic" style={{ color: PRIMARY }}>
                {heading.highlight}
              </span>
            </h2>
            <p className="mt-4 text-[16px] font-normal leading-[1.5] text-zinc-600 md:text-[18px]">
              {subheading}
            </p>
          </header>
        </LazyBlock>

        <AnimateOnView animation="stagger" rootMargin="0px 0px -80px 0px">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, idx) => (
              <article
                key={idx}
                className="stagger-child flex flex-col rounded-xl bg-white p-5 shadow-sm sm:rounded-2xl sm:p-6 md:p-8"
                style={{
                  border: "1px solid rgba(34, 197, 94, 0.2)",
                }}
              >
                <blockquote className="text-[16px] font-normal leading-[1.5] text-zinc-900 sm:text-[18px] md:text-[20px]">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-4 flex items-center gap-2 sm:mt-6 sm:gap-3">
                  {t.avatar ? (
                    <Image
                      src={t.avatar}
                      alt=""
                      width={40}
                      height={40}
                      className="h-8 w-8 rounded-full object-cover sm:h-10 sm:w-10"
                    />
                  ) : (
                    <div
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[14px] font-medium sm:h-10 sm:w-10 sm:text-[18px]"
                      style={{ backgroundColor: `${PRIMARY}20`, color: PRIMARY }}
                    >
                      {t.name.charAt(0)}
                    </div>
                  )}
                  <span className="text-[14px] font-medium text-zinc-900 sm:text-[16px] md:text-[18px]">
                    {t.name}
                  </span>
                </div>
                <div className="mt-3">
                  <span
                    className="inline-flex items-center rounded-lg px-2.5 py-1 text-[14px] font-medium sm:rounded-xl sm:px-4 sm:py-2 sm:text-[16px]"
                    style={{
                      background:
                        "linear-gradient(to right, rgba(34, 197, 94, 0.15) 0%, rgba(34, 197, 94, 0) 100%)",
                      color: PRIMARY,
                    }}
                  >
                    {t.badge}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </AnimateOnView>
      </div>
    </section>
  );
}
