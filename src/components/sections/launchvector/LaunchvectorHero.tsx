"use client";

import Image from "next/image";
import Link from "next/link";
import { launchvectorHeroConfig } from "@/config/launchvector.config";
import { AnimateOnView } from "@/components/ui/AnimateOnView";

export function LaunchvectorHero() {
  const { trustedBy, trustAvatars, headline, description, cta, stats } =
    launchvectorHeroConfig;

  return (
    <section className="relative overflow-hidden bg-[#F5EEFD] pb-0">
      {/* Hero top area with gradient background */}
      <div className="relative mx-[8px] overflow-hidden rounded-[30px] sm:mx-[13px]">
        {/* Background layers */}
        <div className="absolute inset-0 z-0 rounded-[30px]">
          {/* 1) Base purple colour */}
          <div className="absolute inset-0 bg-[#c8afe7] rounded-[30px]" />
          {/* 2) Cloud / mountain image – slow drifting animation */}
          <div className="absolute inset-[-60px] overflow-hidden rounded-[30px]">
            <div
              className="absolute inset-0"
              style={{ animation: "cloudDrift 20s ease-in-out infinite alternate" }}
            >
              <Image
                src="/assets/hero/hero2.png"
                alt=""
                fill
                className="object-cover object-bottom opacity-80"
                sizes="(max-width: 1440px) 120vw, 1600px"
                priority
              />
            </div>
          </div>
          {/* 3) Gradient overlay – white at top fading to transparent so clouds show */}
          <div
            className="absolute inset-0 rounded-[30px]"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.7) 30%, rgba(255,255,255,0.15) 60%, transparent 100%)",
            }}
          />
          {/* 4) Subtle purple tint from bottom */}
          <div
            className="absolute inset-0 rounded-[30px]"
            style={{
              background:
                "linear-gradient(to top, rgba(163,99,244,0.2) 0%, transparent 40%)",
            }}
          />
        </div>

        <AnimateOnView
          animation="stagger-slow"
          visibleImmediately
          className="relative z-10 mx-auto max-w-[850px] px-4 pb-8 pt-[120px] sm:px-6 sm:pb-12 sm:pt-28 md:pb-16 md:pt-[150px] lg:px-8"
          rootMargin="0px 0px 0px 0px"
          threshold={0.15}
        >
          {/* Trusted By badge */}
          <div className="stagger-child flex justify-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[rgba(163,99,244,0.4)] px-3 py-1.5 backdrop-blur-sm sm:mb-8"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgba(163,99,244,0.2) 2%, rgba(211,202,253,0.2) 98%)",
              }}
            >
              <div className="relative h-[22px] w-[86px] shrink-0 overflow-hidden rounded-full sm:h-[28px] sm:w-[108px]">
                <Image
                  src={trustAvatars}
                  alt="Trusted investors"
                  fill
                  className="object-contain object-left"
                  sizes="108px"
                />
              </div>
              <span className="text-[12px] font-normal text-black/80 sm:text-[15px]">
                {trustedBy}
              </span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="stagger-child mx-auto max-w-[850px] text-center text-[32px] font-medium leading-[1.35] tracking-[-2px] text-black sm:text-[42px] sm:tracking-[-3px] md:text-[55px] md:leading-[1.25] md:tracking-[-3.3px]">
            {headline.before}
            {/* 4x badge — cross top-right */}
            <span className="relative mx-0.5 inline-block -rotate-3 align-middle sm:mx-1" style={{ animation: "badgeFloat1 4s cubic-bezier(0.45,0,0.55,1) infinite" }}>
              <span className="inline-flex items-center justify-center rounded-[12px] border-2 border-[#9e52ff] bg-gradient-to-b from-[rgba(158,82,255,0.3)] to-[rgba(158,82,255,0.15)] px-2 py-0.5 shadow-[0px_7px_20px_0px_rgba(0,0,0,0.18)] sm:rounded-[17px] sm:px-3 sm:py-1">
                <span className="bg-gradient-to-b from-[#8728ff] to-[rgba(158,82,255,0.4)] bg-clip-text text-[22px] font-medium text-transparent sm:text-[30px] md:text-[38px]">
                  {headline.highlight4x}
                </span>
              </span>
              <span className="absolute -right-1.5 -top-1.5 flex h-[16px] w-[16px] items-center justify-center rounded-full border border-[#9e52ff] bg-white shadow-[0px_4px_12px_0px_rgba(0,0,0,0.15)] sm:-right-2 sm:-top-2 sm:h-[22px] sm:w-[22px] md:h-[25px] md:w-[25px]">
                <svg width="7" height="7" viewBox="0 0 10 10" fill="none" className="sm:h-[9px] sm:w-[9px]">
                  <path d="M2 2l6 6M8 2l-6 6" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </span>
            </span>
            {" "}Multiples for{" "} <br/>
            {/* 50% badge — cross top-right */}
            <span className="relative mx-0.5 inline-block -rotate-3 align-middle sm:mx-1" style={{ animation: "badgeFloat2 4.8s cubic-bezier(0.45,0,0.55,1) infinite", animationDelay: "0.6s" }}>
              <span className="inline-flex items-center justify-center rounded-[12px] border-2 border-[#9e52ff] bg-gradient-to-b from-[rgba(158,82,255,0.3)] to-[rgba(158,82,255,0.15)] px-2 py-0.5 shadow-[0px_7px_20px_0px_rgba(0,0,0,0.18)] sm:rounded-[17px] sm:px-3 sm:py-1">
                <span className="bg-gradient-to-b from-[#8728ff] to-[rgba(158,82,255,0.4)] bg-clip-text text-[22px] font-semibold text-transparent sm:text-[30px] md:text-[38px]">
                  50%
                </span>
              </span>
              <span className="absolute -right-1.5 -top-1.5 flex h-[16px] w-[16px] items-center justify-center rounded-full border border-[#9e52ff] bg-white shadow-[0px_4px_12px_0px_rgba(0,0,0,0.15)] sm:-right-2 sm:-top-2 sm:h-[22px] sm:w-[22px] md:h-[25px] md:w-[25px]">
                <svg width="7" height="7" viewBox="0 0 10 10" fill="none" className="sm:h-[9px] sm:w-[9px]">
                  <path d="M2 2l6 6M8 2l-6 6" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </span>
            </span>
            {" "}Ownership. Get{" "}
            {/* 100% badge — checkmark top-right */}
            <span className="relative mx-0.5 inline-block rotate-3 align-middle sm:mx-1" style={{ animation: "badgeFloat3 5.2s cubic-bezier(0.45,0,0.55,1) infinite", animationDelay: "1.2s" }}>
              <span className="inline-flex items-center justify-center rounded-[12px] border-2 border-[#9e52ff] bg-gradient-to-b from-[#9e52ff] to-[rgba(158,82,255,0.5)] px-2 py-1 shadow-[0px_7px_20px_0px_rgba(163,99,244,0.2)] sm:rounded-[17px] sm:px-3 sm:py-2">
                <span className="bg-gradient-to-b from-white to-[rgba(255,255,255,0.5)] bg-clip-text text-[20px] font-semibold text-transparent sm:text-[28px] md:text-[35px]">
                  {headline.highlight100}
                </span>
              </span>
              <span className="absolute -right-1.5 -top-1.5 flex h-[16px] w-[16px] items-center justify-center rounded-full border border-[#9e52ff] bg-white shadow-[0px_4px_12px_0px_rgba(0,0,0,0.15)] sm:-right-2 sm:-top-2 sm:h-[22px] sm:w-[22px] md:h-[25px] md:w-[25px]">
                <svg width="8" height="8" viewBox="0 0 14 14" fill="none" className="sm:h-[11px] sm:w-[11px] md:h-[14px] md:w-[14px]">
                  <path d="M3 7l3 3 5-5" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </span>
            {" "}of the Business at Half the Price.
          </h1>

          {/* Description */}
          <p className="stagger-child mx-auto mt-4 max-w-[640px] text-center text-[15px] leading-[1.5] text-black/50 sm:mt-6 sm:text-[18px]">
            <span className="font-medium text-black/70">LaunchVector</span>{" "}
            charges{" "}
            <span className="font-medium text-black/70">
              $100K–$500K for as little as 12.5% of a business
            </span>
            . {description.split(". ").slice(1).join(". ")}
          </p>

          {/* CTA */}
          <div className="stagger-child mt-6 flex flex-row flex-wrap items-center justify-center gap-3 sm:mt-10">
            <Link
              href={cta.primary.href}
              className="rounded-full border-2 border-[#a363f4] bg-[#a363f4] px-5 py-3 text-[14px] font-medium text-white shadow-[inset_0_4px_8px_rgba(255,255,255,0.6)] transition-colors hover:bg-[#6d28d9] sm:px-[30px] sm:py-[20px] sm:text-[18px]"
            >
              {cta.primary.label}
            </Link>
            <Link
              href={cta.secondary.href}
              className="rounded-full border-2 border-[#131313]/20 bg-white px-5 py-3 text-[14px] font-medium text-black/70 transition-colors hover:bg-zinc-100 sm:px-[20px] sm:py-[20px] sm:text-[18px]"
            >
              {cta.secondary.label}
            </Link>
          </div>

        </AnimateOnView>

        {/* Stats bar — 2×2 grid on mobile, single row on md+ */}
        <AnimateOnView
          animation="stagger"
          rootMargin="100px 0px -40px 0px"
          threshold={0.05}
          className="relative z-10 mx-auto max-w-[1054px] px-4 pb-8 sm:px-6 md:pb-12"
        >
          <div className="grid grid-cols-2 gap-x-4 gap-y-5 py-5 md:flex md:items-center md:justify-between md:gap-0">
            {stats.map((stat, i) => (
              <div key={i} className="stagger-child flex items-center">
                {i > 0 && (
                  <div className="mx-5 hidden h-[60px] w-px bg-black/10 md:block lg:mx-8" />
                )}
                <div className="flex items-center gap-3 md:gap-5">
                  <div
                    className="flex h-[45px] w-[45px] shrink-0 items-center justify-center overflow-hidden rounded-[12px] border border-[#a363f4] md:h-[80px] md:w-[80px] md:rounded-[20px]"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(234,217,255,0.3) 0%, rgba(255,255,255,1) 100%)",
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={stat.icon}
                      alt=""
                      className="h-5 w-5 md:h-10 md:w-10"
                    />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span
                      className="text-[18px] font-bold tracking-[-1.8px] md:text-[30px]"
                      style={{
                        backgroundImage:
                          "linear-gradient(180deg, rgb(0,0,0) 0%, rgb(187,187,187) 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {stat.value}
                    </span>
                    <span className="text-[12px] font-medium leading-[1.3] tracking-[-0.5px] text-black/50 md:text-[18px] md:tracking-[-1.08px]">
                      {stat.label}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimateOnView>
      </div>

      {/* Cloud drift + badge float keyframes */}
      <style jsx>{`
        @keyframes cloudDrift {
          0% {
            transform: translateX(0) translateY(0) scale(1.08);
          }
          33% {
            transform: translateX(-40px) translateY(8px) scale(1.12);
          }
          66% {
            transform: translateX(30px) translateY(-5px) scale(1.06);
          }
          100% {
            transform: translateX(-20px) translateY(10px) scale(1.1);
          }
        }
        @keyframes badgeFloat1 {
          0% {
            transform: rotate(-3deg) translateY(0) scale(1);
          }
          25% {
            transform: rotate(-1deg) translateY(-10px) scale(1.03);
          }
          50% {
            transform: rotate(-4deg) translateY(-4px) scale(1.01);
          }
          75% {
            transform: rotate(-2deg) translateY(-12px) scale(1.04);
          }
          100% {
            transform: rotate(-3deg) translateY(0) scale(1);
          }
        }
        @keyframes badgeFloat2 {
          0% {
            transform: rotate(-3deg) translateY(0) scale(1);
          }
          30% {
            transform: rotate(-5deg) translateY(-14px) scale(1.04);
          }
          60% {
            transform: rotate(-1deg) translateY(-6px) scale(1.01);
          }
          80% {
            transform: rotate(-4deg) translateY(-11px) scale(1.03);
          }
          100% {
            transform: rotate(-3deg) translateY(0) scale(1);
          }
        }
        @keyframes badgeFloat3 {
          0% {
            transform: rotate(3deg) translateY(0) scale(1);
          }
          20% {
            transform: rotate(5deg) translateY(-8px) scale(1.03);
          }
          50% {
            transform: rotate(1deg) translateY(-15px) scale(1.05);
          }
          70% {
            transform: rotate(4deg) translateY(-5px) scale(1.01);
          }
          100% {
            transform: rotate(3deg) translateY(0) scale(1);
          }
        }
      `}</style>
    </section>
  );
}
