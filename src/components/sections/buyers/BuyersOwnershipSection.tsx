"use client";

import { buyersOwnershipConfig } from "@/config/buyers.config";
import { LazyBlock } from "@/components/ui/LazyBlock";
import { AnimateOnView } from "@/components/ui/AnimateOnView";

function HighlightedText({
  text,
  highlight,
}: {
  text: string;
  highlight: string;
}) {
  if (!highlight || !text.includes(highlight)) {
    return <>{text}</>;
  }
  const parts = text.split(highlight);
  return (
    <>
      {parts[0]}
      <span className="text-[#6824BF] font-medium">{highlight}</span>
      {parts[1]}
    </>
  );
}

export function BuyersOwnershipSection() {
  const { heading, description, cards } = buyersOwnershipConfig;

  return (
    <section className="bg-[#F5EEFD] px-4 py-12 sm:py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 sm:gap-12 md:grid-cols-[30%_1fr] md:gap-16 lg:gap-20">
          <LazyBlock>
          <div className="flex flex-col justify-start">
            <h2 className="text-[28px] font-medium leading-[1.1] tracking-[-2px] text-[#1A1A1A] sm:text-[44px] md:text-[60px] lg:text-[72px]">
              {heading.before}
              <span className="font-serif font-medium italic text-[#6824BF]">
                {heading.highlight}
              </span>
            </h2>
            <p className="mt-6 text-[18px] font-normal leading-[1.6] text-zinc-900/60">
              {description}
            </p>
          </div>
          </LazyBlock>

          <AnimateOnView animation="stagger" rootMargin="0px 0px -80px 0px">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:grid-rows-2 sm:gap-6 sm:min-h-[900px] md:gap-8 md:min-h-[1100px]">
            {cards.map((card, idx) => {
              const isThirdCard = idx === 2;
              const gradientStyle = {
                background:
                  "linear-gradient(to bottom, #C89CFF 0%, rgba(163, 99, 244, 0) 100%)",
              };
              const numberStyle = {
                background:
                  "linear-gradient(to bottom, rgba(163, 99, 244, 0) 0%, rgba(163, 99, 244, 0.3) 100%)",
                WebkitBackgroundClip: "text" as const,
                backgroundClip: "text" as const,
                color: "transparent",
              };
              return (
                <div
                  key={idx}
                  className={`stagger-child flex h-full ${isThirdCard ? "sm:col-span-2" : ""}`}
                >
                  <div
                    className="group flex h-full w-full flex-col rounded-[20px] p-[2px] transition-colors"
                    style={gradientStyle}
                  >
                    <article className="relative flex h-full flex-col justify-between overflow-hidden rounded-[18px] bg-white p-5 sm:p-6 md:p-[30px] lg:p-[40px]">
                      <div
                        className="pointer-events-none absolute inset-0 rounded-[18px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        style={{
                          background:
                            "linear-gradient(to bottom, #C89CFF 0%, rgba(163, 99, 244, 0) 100%)",
                        }}
                        aria-hidden
                      />
                      <span className="relative inline-block shrink-0">
                        <span
                          className="block text-[48px] font-bold leading-none transition-opacity duration-300 group-hover:opacity-0 sm:text-[64px] md:text-[80px] lg:text-[96px]"
                          style={numberStyle}
                          aria-hidden
                        >
                          #{card.number}
                        </span>
                        <span
                          className="absolute left-0 top-0 block text-[48px] font-bold leading-none opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:text-[64px] md:text-[80px] lg:text-[96px]"
                          style={{
                            background:
                              "linear-gradient(to bottom, white 0%, rgb(228, 228, 231) 100%)",
                            WebkitBackgroundClip: "text",
                            backgroundClip: "text",
                            color: "transparent",
                          }}
                          aria-hidden
                        >
                          #{card.number}
                        </span>
                      </span>
                      <div className="mt-auto flex shrink-0 flex-col gap-[10px]">
                        <h3 className="text-[20px] md:text-[22px] font-medium leading-tight text-zinc-900 transition-colors duration-300 group-hover:text-black">
                          {card.title}
                        </h3>
                        <p className="text-[16px] font-normal leading-[1.6] text-zinc-900/60 md:text-[18px]">
                          {card.description.split("\n").map((paragraph, i) => (
                            <span key={i}>
                              {i > 0 && <span className="block h-5" aria-hidden />}
                              <HighlightedText
                                text={paragraph}
                                highlight={card.highlight}
                              />
                            </span>
                          ))}
                        </p>
                      </div>
                    </article>
                  </div>
                </div>
              );
            })}
          </div>
          </AnimateOnView>
        </div>
      </div>
    </section>
  );
}
