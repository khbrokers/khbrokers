"use client";

import { useState } from "react";
import { buyersOwnershipConfig } from "@/config/buyers.config";
import { AnimateOnView } from "@/components/ui/AnimateOnView";

function HighlightedText({
  text,
  highlight,
  variant = "default",
}: {
  text: string;
  highlight: string;
  variant?: "default" | "light";
}) {
  if (!highlight || !text.includes(highlight)) {
    return <>{text}</>;
  }
  const parts = text.split(highlight);
  const highlightClass =
    variant === "light" ? "text-white font-medium" : "text-[#6824BF] font-medium";
  return (
    <>
      {parts[0]}
      <span className={highlightClass}>{highlight}</span>
      {parts[1]}
    </>
  );
}

export function BuyersOwnershipSection() {
  const { heading, description, cards } = buyersOwnershipConfig;
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="bg-[#F5EEFD] px-4 py-12 sm:py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 sm:gap-12 md:grid-cols-[30%_1fr] md:gap-16 lg:gap-20">
          <AnimateOnView
            animation="fade-up-slow"
            rootMargin="100px 0px -40px 0px"
            threshold={0.05}
            delayMs={0}
            className="flex flex-col items-center text-center md:items-start md:text-left"
          >
            <h2 className="text-[28px] font-medium leading-[1.1] tracking-[-2px] text-zinc-900 sm:tracking-[-3px] sm:text-[40px] md:text-[58px] lg:text-[68px]">
              {heading.before}
              <span className="font-serif font-medium italic text-[#6824BF]">
                {heading.highlight}
              </span>
            </h2>
            <AnimateOnView
              animation="fade-up-slow"
              rootMargin="100px 0px -40px 0px"
              threshold={0.05}
              delayMs={80}
            >
              <p className="mt-6 text-[14px] md:text-[18px] font-normal leading-[1.6] text-zinc-900/60">
                {description}
              </p>
            </AnimateOnView>
          </AnimateOnView>

          <AnimateOnView
            animation="stagger"
            rootMargin="100px 0px -40px 0px"
            threshold={0.05}
            className="grid grid-cols-1 min-h-[1200px] gap-4 sm:grid-cols-2 sm:grid-rows-2 sm:gap-6 sm:min-h-[900px] md:gap-8 md:min-h-[1100px]"
          >
            {cards.map((card, idx) => {
              const isThirdCard = idx === 2;
              const gradientStyle = {
                background:
                  "linear-gradient(to bottom, #C89CFF 0%, rgba(163, 106, 246, 0) 100%)",
              };
              const numberStyle = {
                background:
                  "linear-gradient(to bottom, rgba(163, 106, 246, 0) 0%, rgba(163, 106, 246, 0.3) 100%)",
                WebkitBackgroundClip: "text" as const,
                backgroundClip: "text" as const,
                color: "transparent",
              };
              return (
                <div
                  key={idx}
                  className={`stagger-child flex [perspective:1000px] ${isThirdCard ? "h-[300px] sm:h-[300px] md:h-[380px] sm:col-span-2" : "h-full"}`}
                >
                  <div
                    className="relative h-full w-full"
                    onMouseEnter={() => setHoveredCard(idx)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div
                      className="relative h-full w-full rounded-[20px] p-[2px] transition-transform duration-500 ease-out [transform-style:preserve-3d]"
                      style={{
                        ...gradientStyle,
                        transform: hoveredCard === idx ? "rotateY(180deg)" : "rotateY(0deg)",
                      }}
                    >
                    {/* Front face */}
                    <article
                      className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-[18px] bg-white p-5 sm:p-6 md:p-[30px] lg:p-[40px] [backface-visibility:hidden]"
                      style={{ transform: "rotateY(0deg)" }}
                    >
                      <AnimateOnView
                        animation="stagger"
                        rootMargin="100px 0px -40px 0px"
                        threshold={0.05}
                        className={`flex flex-1 flex-col ${isThirdCard ? "justify-between gap-4" : ""}`}
                      >
                        <span className="stagger-child relative inline-block shrink-0">
                          <span
                            className="block text-[68px] font-bold leading-none sm:text-[64px] md:text-[80px] lg:text-[96px]"
                            style={numberStyle}
                            aria-hidden
                          >
                            #{card.number}
                          </span>
                        </span>
                        <div
                          className={`stagger-child flex shrink-0 flex-col gap-[10px] ${isThirdCard ? "" : "mt-auto"}`}
                        >
                          <h3 className="text-[20px] md:text-[22px] font-medium leading-tight text-zinc-900">
                            {card.title}
                          </h3>
                          <p className="text-[14px] md:text-[18px] font-normal leading-[1.6] text-zinc-900/60">
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
                      </AnimateOnView>
                    </article>
                    {/* Back face - same gradient as hover */}
                    <article
                      className={`absolute inset-0 flex flex-col overflow-hidden rounded-[18px] bg-white p-5 sm:p-6 md:p-[30px] lg:p-[40px] [backface-visibility:hidden] ${isThirdCard ? "justify-between gap-4" : "justify-between"}`}
                      style={{
                        background:
                          "linear-gradient(to bottom, #A363F480 0%, #A363F440 100%)",
                        transform: "rotateY(180deg)",
                      }}
                    >
                      <span
                        className="block shrink-0 text-[68px] font-bold leading-none text-white/90 sm:text-[64px] md:text-[80px] lg:text-[96px]"
                        aria-hidden
                      >
                        #{card.number}
                      </span>
                      <div className="flex shrink-0 flex-col gap-[10px]">
                        <h3 className="text-[20px] md:text-[22px] font-medium leading-tight text-white">
                          {card.title}
                        </h3>
                        <p className="text-[14px] md:text-[18px] font-normal leading-[1.6] text-white/80">
                        {card.description.split("\n").map((paragraph, i) => (
                          <span key={i}>
                            {i > 0 && <span className="block h-5" aria-hidden />}
                            <HighlightedText
                              text={paragraph}
                              highlight={card.highlight}
                              variant="light"
                            />
                          </span>
                        ))}
                        </p>
                      </div>
                    </article>
                    </div>
                  </div>
                </div>
              );
            })}
          </AnimateOnView>
        </div>
      </div>
    </section>
  );
}
