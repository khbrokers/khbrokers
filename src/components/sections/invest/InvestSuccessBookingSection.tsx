"use client";

import { FaClock, FaGlobe, FaVideo } from "react-icons/fa";
import { investSuccessBookingConfig } from "@/config/invest.config";
import { AnimateOnView } from "@/components/ui/AnimateOnView";
import { LimitedAvailabilityCalEmbed } from "@/components/ui/LimitedAvailabilityCalEmbed";

export function InvestSuccessBookingSection() {
  const {
    availabilityBadge,
    headline,
    subheadline,
    pickTimeTitle,
    pickTimeSubtext,
    slotsAvailable,
    callDuration,
    timezone,
    meetingType,
  } = investSuccessBookingConfig;

  const calendarHeaderItems = [
    { icon: FaClock, label: callDuration },
    { icon: FaGlobe, label: timezone },
    { icon: FaVideo, label: meetingType },
  ];

  return (
    <section className="px-4 py-8 sm:py-10 md:py-14">
      <div className="mx-auto max-w-6xl">
        <AnimateOnView
          animation="fade-up-slow"
          rootMargin="0px 0px -60px 0px"
          threshold={0.05}
        >
          {/* Dark purple hero container */}
          <div
            className="relative overflow-hidden rounded-2xl px-6 py-8 sm:rounded-[20px] sm:px-8 sm:py-10 md:px-10 md:py-12"
            style={{
              background:
                "linear-gradient(18deg, rgba(163, 106, 246, 0.3) 30%, rgb(254 254 254 / 0%) 60%, rgba(163, 106, 246, 0.3) 100%)",
             }}
          >
            {/* Gold availability badge */}
            <div className="mb-6 flex justify-center">
              <span
                className="inline-flex items-center rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em]"
                style={{
                  background: "#FFFFFF",
                  color: "#1a0f2e",
                  boxShadow: "0 2px 8px #a36af630",
                }}
              >
                {availabilityBadge}
              </span>
            </div>

            <h2 className="text-center font-inter text-[30px] tracking-[-2px] font-medium leading-[1.2] text-zinc-900 sm:text-[30px] md:text-[38px] lg:text-[40px]">
              {headline.before}<br/>
              <span className="font-serif italic text-[#a36af6] tracking-[-1px] text-[20px] sm:text-[20px] md:text-[28px] lg:text-[30px]">{headline.highlight}</span>
            </h2>
          </div>

          {/* Centered calendar card - overlaps hero for cohesive flow */}
          <div
            className="relative overflow-hidden rounded-2xl mt-[-30px] md:mt-[-40px] sm:rounded-[20px]"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255, 255, 255, 0.98) 0%, rgba(248, 245, 253, 0.95) 50%, rgba(240, 232, 252, 0.92) 100%)",
             }}
          >
       
  
            {/* Cal.com embed */}
            <div className="overflow-hidden rounded-xl bg-white shadow-sm">
              <LimitedAvailabilityCalEmbed
                className="rounded-xl"
                height={580}
              />
            </div>
          </div>
        </AnimateOnView>
      </div>
    </section>
  );
}
