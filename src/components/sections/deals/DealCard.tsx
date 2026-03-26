"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaChartLine,
  FaDollarSign,
  FaCalendarAlt,
  FaClock,
  FaHandshake,
  FaBriefcase,
} from "react-icons/fa";
import { SiShopify } from "react-icons/si";
import type { Deal, DealMetric } from "@/config/deals.config";

const PRIMARY = "#a36af6";

const METRIC_ICONS: Record<DealMetric["icon"], React.ReactNode> = {
  revenue: <FaDollarSign className="h-4 w-4" />,
  profit: <FaCalendarAlt className="h-4 w-4" />,
  monthly: <FaHandshake className="h-4 w-4" />,
  age: <FaClock className="h-4 w-4" />,
  asking: <FaBriefcase className="h-4 w-4" />,
  multiple: <FaChartLine className="h-4 w-4" />,
};

const METRIC_ORDER: DealMetric["icon"][] = [
  "revenue",
  "age",
  "profit",
  "asking",
  "monthly",
  "multiple",
];

function formatPrice(value: number): string {
  return `$${value.toLocaleString("en-US")} USD`;
}

interface DealCardProps {
  deal: Deal;
}

export function DealCard({ deal }: DealCardProps) {
  const hasCover = Boolean(deal.coverImage);

  return (
    <article
      className="flex flex-col overflow-hidden rounded-2xl border border-[#EBDAFF] sm:flex-row sm:rounded-[20px]"
      style={{
         background:
          "linear-gradient(45deg, rgba(163,106,246, 0.2) 40%, #FFFFFF 50%, rgba(163,106,246,0.2) 60%,  #FCFDFF 100%) padding-box, border-box",
        backgroundClip: "padding-box, border-box",
      }}
    >
      {/* Cover image - full width top on mobile, 40% left on desktop */}
      <div className="relative w-full shrink-0 p-2 sm:w-[40%] sm:self-stretch sm:p-4 md:p-5">
        <div
          className={`relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-xl sm:aspect-auto sm:min-h-[120px] sm:h-full ${
            hasCover ? "" : "bg-white"
          }`}
        >
          {hasCover ? (
            <Image
              src={deal.coverImage!}
              alt=""
              fill
              className="object-cover"
              quality={100}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 400px"
            />
          ) : (
            <div aria-hidden />
          )}
          {deal.recentlySold && (
            <>
              <div className="absolute inset-0 z-10 rounded-xl bg-black/40" />
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <span
                  className="select-none rounded-full px-7 py-3 text-[16px] font-bold tracking-[0.15em] text-white uppercase sm:px-9 sm:py-3.5 sm:text-[20px]"
                  style={{
                    transform: "rotate(-12deg)",
                    background: "linear-gradient(135deg, #a36af6 0%, #7c3aed 100%)",
                    boxShadow:
                      "0 0 30px rgba(163, 106, 246, 0.5), 0 0 60px rgba(163, 106, 246, 0.25), inset 0 2px 4px rgba(255,255,255,0.25)",
                  }}
                >
                  SOLD
                </span>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4 sm:p-5 md:p-6">
        {/* Header */}
        <div className="flex flex-wrap items-center gap-2">
        <h3 className="text-[15px] font-bold text-zinc-900 sm:text-[16px] md:text-[18px]">
          {deal.title}
        </h3>
        {deal.verified && (
          <span
            className="inline-flex items-center gap-1 text-[#A363F4] border border-[#A363F4] rounded-full px-2.5 py-1 text-[11px] font-medium sm:text-[12px]"
            style={{
              borderColor: "rgba(163, 106, 246, 0.3)",
              background: `linear-gradient(to bottom, ${PRIMARY}30 10%, transparent 100%)`,
            }}
          >
            <SiShopify className="h-3 w-3" />
            Verified
          </span>
        )}
        </div>

        {/* Description */}
      <p className="mt-2 text-[13px] leading-relaxed text-zinc-900/60 sm:mt-3 sm:text-[14px] md:text-[15px]">
        {deal.description}
      </p>

      {/* Metrics grid - 2 cols on mobile, 3 cols on sm+, vertical dividers */}
      <div
        className="mt-3 grid grid-cols-2 gap-0 overflow-hidden rounded-xl sm:mt-4 sm:grid-cols-3"
        style={{ backgroundColor: "rgba(163, 106, 246, 0)" }}
      >
        {METRIC_ORDER.map((iconKey, idx) => {
          const metric = deal.metrics.find((m) => m.icon === iconKey);
          if (!metric) return null;
          const isColEndMobile = (idx + 1) % 2 === 0;
          const isColEndDesktop = (idx + 1) % 3 === 0;
          return (
            <div
              key={`${metric.label}-${metric.value}`}
              className={`flex items-start gap-1.5 p-2 sm:gap-2 sm:p-3 md:p-4 ${
                isColEndMobile ? "max-sm:border-r-0" : "max-sm:border-r border-[#a36af6]/10"
              } ${!isColEndDesktop ? "sm:border-r sm:border-[#a36af6]/10" : ""}`}
            >
              <span
                className="mt-0.5 inline-flex shrink-0"
                style={{
                  color: "#A363F4",
                  maskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
                  maskSize: "100% 100%",
                  WebkitMaskSize: "100% 100%",
                }}
                aria-hidden
              >
                {METRIC_ICONS[metric.icon]}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[10px] font-medium text-zinc-500 sm:text-[11px] md:text-[12px]">
                  {metric.label}
                </p>
                <p className="truncate text-[12px] font-bold text-zinc-900 sm:text-[13px] md:text-[14px]">
                  {metric.value}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Asking price + CTAs */}
      <div className="mt-4 flex flex-col gap-3 sm:mt-5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <div className="flex flex-col items-start">
          <p className={`font-medium text-zinc-900 ${deal.recentlySold ? "text-[16px] sm:text-[18px] md:text-[20px]" : "text-[20px] sm:text-[24px] md:text-[28px]"}`}>
            {formatPrice(deal.askingPrice)}
          </p>
          <span className="text-[10px] font-normal text-zinc-900/60 sm:text-[10px] md:text-[12px]">
            {deal.recentlySold ? "Sold For" : "Asking Price"}
          </span>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-3">
        <button
          type="button"
          onClick={() => window.dispatchEvent(new CustomEvent("open-deal-speak-modal", { detail: { headline: `Speak with us about ${deal.title}` } }))}
          className="inline-flex cursor-pointer items-center justify-center rounded-full border-2 border-zinc-200 bg-white px-4 py-3 text-[13px] font-medium text-zinc-900 transition-colors hover:border-zinc-300 hover:bg-zinc-50 sm:py-2.5 sm:text-[14px]"
        >
          Speak with us
        </button>
        {!deal.recentlySold && (
        <Link
          href={deal.viewHref}
          className="inline-flex items-center justify-center rounded-full border-2 font-medium text-white shadow-[inset_0_4px_14px_white] transition-colors hover:!bg-[#6d28d9] px-4 py-3 text-[13px] sm:py-2.5 sm:text-[14px]"
          style={{
            borderColor: "rgba(247, 239, 255, 0.5)",
            backgroundColor: "#a36af6",
          }}
        >
          View Listing
        </Link>
        )}
        </div>
      </div>
      </div>
    </article>
  );
}
