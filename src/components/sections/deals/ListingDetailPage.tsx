"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaDollarSign,
  FaBriefcase,
  FaList,
  FaPercent,
  FaRegCalendarAlt,
  FaRegHandshake,
  FaRegClock,
  FaRegChartBar,
} from "react-icons/fa";
import type { Deal, DealMetric } from "@/config/deals.config";
import { DealsBookCallSection } from "./DealsBookCallSection";

const PRIMARY = "#a36af6";
const PAGE_BG = "#F5EEFD";

const METRIC_ICONS: Record<DealMetric["icon"], React.ReactNode> = {
  revenue: <FaDollarSign className="h-4 w-4 metric-icon-outline" />,
  profit: <FaRegCalendarAlt className="h-4 w-4" />,
  monthly: <FaRegHandshake className="h-4 w-4" />,
  age: <FaRegClock className="h-4 w-4" />,
  asking: <FaBriefcase className="h-4 w-4 metric-icon-outline" />,
  multiple: <FaRegChartBar className="h-4 w-4" />,
};

const INVESTMENT_SNAPSHOT_ORDER: DealMetric["icon"][] = [
  "revenue",
  "profit",
  "monthly",
  "age",
  "multiple",
  "asking",
];

const METRIC_LABELS: Record<DealMetric["icon"], string> = {
  age: "Age",
  asking: "Asking Price",
  revenue: "TTM Revenue",
  multiple: "Profit Multiple",
  monthly: "Monthly Profit",
  profit: "TTM Net Profit",
};

interface ListingDetailPageProps {
  deal: Deal;
}

const INFO_CARD_ICONS = [
  "/assets/deals_assets/material-symbols_overview-rounded.png",
  "/assets/deals_assets/akar-icons_question.png",
  "/assets/deals_assets/tdesign_money.png",
  "/assets/deals_assets/ic_twotone-sell.png",
] as const;

function TruncatedContent({
  content,
  maxLines = 4,
  primaryColor,
}: {
  content: string;
  maxLines?: number;
  primaryColor: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const [maxHeight, setMaxHeight] = useState<number | null>(null);
  const contentRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (expanded) return;
    const el = contentRef.current;
    if (!el) return;
    const check = () => setIsTruncated(el.scrollHeight > el.clientHeight);
    check();
    const ro = new ResizeObserver(check);
    ro.observe(el);
    return () => ro.disconnect();
  }, [content, expanded]);

  useEffect(() => {
    if (!expanded) return;
    const el = contentRef.current;
    if (!el) return;
    const endHeight = el.scrollHeight;
    setMaxHeight(endHeight);
  }, [expanded]);

  const handleExpand = () => {
    const el = contentRef.current;
    if (!el) return;
    const startHeight = el.offsetHeight;
    setMaxHeight(startHeight);
    setExpanded(true);
  };

  return (
    <div>
      <div
        className="overflow-hidden transition-[max-height] duration-300"
        style={{
          maxHeight: expanded && maxHeight !== null ? maxHeight : undefined,
          transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <p
          ref={contentRef}
          className="text-[14px] leading-relaxed text-zinc-900/60 sm:text-[14px] md:text-[18px]"
          style={
            expanded
              ? undefined
              : {
                  display: "-webkit-box",
                  WebkitLineClamp: maxLines,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }
          }
        >
          {content}
        </p>
      </div>
      {isTruncated && !expanded && (
        <button
          type="button"
          onClick={handleExpand}
          className="mt-1 cursor-pointer font-medium transition-colors hover:underline"
          style={{ color: primaryColor }}
        >
          more
        </button>
      )}
    </div>
  );
}

const INFO_CARDS = [
  {
    key: "businessOverview" as const,
    title: "Business Overview",
    iconSrc: INFO_CARD_ICONS[0],
    getContent: (d: Deal) =>
      d.businessOverview?.content ||
      `${d.description} This is a 2-year-old direct-to-consumer lifestyle apparel brand operating under a fully automated print-on-demand (POD) model. The business sells ocean-themed clothing aligned with environmental values, combining strong brand storytelling with a scalable digital infrastructure. Over the trailing twelve months, the brand has generated $1.95M in revenue and $252,996 in net profit, validating product-market fit and consistent paid acquisition performance. With no inventory held, no warehousing.`,
  },
  {
    key: "whyBuilt" as const,
    title: "Why This Business Was Built",
    iconSrc: INFO_CARD_ICONS[1],
    getContent: (d: Deal) =>
      d.whyBuilt?.content ||
      `A ${d.platform} business in the ${d.niche} space, built for scalability and long-term growth. The founder's vision and strategic approach are shared during the investor call.`,
  },
  {
    key: "revenueModel" as const,
    title: "Revenue Model",
    iconSrc: INFO_CARD_ICONS[2],
    getContent: (d: Deal) =>
      d.revenueModel?.content ||
      `Revenue generated through ${d.platform} with diversified traffic channels. Detailed breakdown of revenue streams and acquisition costs available during the call.`,
  },
  {
    key: "whySelling" as const,
    title: "Why It Is Being Sold",
    iconSrc: INFO_CARD_ICONS[3],
    getContent: (d: Deal) =>
      d.whySelling?.content ||
      `Strategic exit. The business is being transitioned to a new owner. Full context on the seller's motivation and timeline shared during the private call.`,
  },
] as const;

function parseMetricValue(value: string): number {
  const cleaned = value.replace(/[$,%\s]/g, "").replace(/,/g, "");
  return parseFloat(cleaned) || 0;
}

function getProfitMargin(deal: Deal): string {
  const revenue = deal.metrics.find((m) => m.icon === "revenue");
  const profit = deal.metrics.find((m) => m.icon === "profit");
  if (!revenue || !profit) return "—";
  const revNum = parseMetricValue(revenue.value);
  const profitNum = parseMetricValue(profit.value);
  if (revNum <= 0) return "—";
  return `${Math.round((profitNum / revNum) * 100)}%`;
}

const FINANCIAL_OVERVIEW_METRICS: (
  | { icon: DealMetric["icon"]; label: string; getValue?: never }
  | { icon: "margin"; label: string; getValue: (d: Deal) => string }
)[] = [
    { icon: "revenue", label: "TTM Revenue" },
    { icon: "profit", label: "TTM Profit" },
    { icon: "monthly", label: "Average Monthly Profit" },
    { icon: "margin", label: "Profit Margin", getValue: getProfitMargin },
  ];

const FINANCIAL_ICON_CLASS = "h-12 w-12 metric-icon-outline text-[#A363F4]/20";

const FINANCIAL_OVERVIEW_ICONS: Record<
  "revenue" | "profit" | "monthly" | "margin",
  React.ReactNode
> = {
  revenue: <FaRegCalendarAlt className={FINANCIAL_ICON_CLASS} />,
  profit: <FaRegHandshake className={FINANCIAL_ICON_CLASS} />,
  monthly: <FaDollarSign className={FINANCIAL_ICON_CLASS} />,
  margin: <FaPercent className={FINANCIAL_ICON_CLASS} />,
};

export function ListingDetailPage({ deal }: ListingDetailPageProps) {
  const hasCover = Boolean(deal.coverImage);
  const [expandedCards, setExpandedCards] = useState<Set<string>>(
    () => new Set(["businessOverview", "whyBuilt", "revenueModel", "whySelling"])
  );
  const [financialOverviewExpanded, setFinancialOverviewExpanded] = useState(true);
  const [howOperatesExpanded, setHowOperatesExpanded] = useState(true);
  const [keyFinancialExpanded, setKeyFinancialExpanded] = useState(true);

  const toggleCard = (key: string) => {
    setExpandedCards((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  return (
    <main className="min-h-screen bg-[#F5EEFD]">
      {/* Hero - cover image as background */}
      <section className="relative min-h-[60vh] overflow-hidden sm:min-h-[70vh] md:min-h-[75vh] lg:min-h-[80vh]">
        {hasCover ? (
          <Image
            src={deal.coverImage!}
            alt=""
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(163, 106, 246, 0.15) 0%, rgba(245, 238, 253, 0.9) 50%, rgba(163, 106, 246, 0.2) 100%)",
            }}
          />
        )}
        {/* Overlay gradient for readability */}
        <div
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(to bottom, rgba(245, 238, 253, 0) 0%, rgba(245, 238, 253, 0.2) 30%, rgba(245, 238, 253, 0.7) 100%)",
          }}
        />
        {/* Bottom fade */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-32 sm:h-40"
          style={{
            background: `linear-gradient(to top, ${PAGE_BG}, transparent)`,
          }}
        />

        <div className="relative z-10 mx-auto flex min-h-[70vh] flex-col items-center justify-center px-4 pl-6 pb-8 pt-24 sm:min-h-[75vh] sm:pb-12 sm:pt-28 sm:pl-10 md:min-h-[80vh] md:pb-16 md:pt-32 md:pl-16 lg:px-12 lg:pl-20">
          {/* Listings tag - exact DealsHero badge style */}
          <div className="mb-6 flex justify-center sm:mb-8">
            <div
              className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 backdrop-blur-sm sm:px-4 sm:py-2"
              style={{
                borderColor: "rgba(163, 106, 246, 0.3)",
                background: `linear-gradient(to bottom, ${PRIMARY}30 10%, transparent 100%)`,
              }}
            >
              <FaList className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" style={{ color: PRIMARY }} />
              <span className="text-xs font-medium text-zinc-700 sm:text-sm">Listings</span>
            </div>
          </div>

          {/* Title - custom hero or niche/platform */}
          <h1 className="text-center text-[24px] font-bold leading-[1.15] tracking-[-2px] text-zinc-900 sm:text-[28px] md:text-[36px] lg:text-[52px]">
            {deal.heroTitle ?? deal.niche}
          </h1>
          <p
            className="mt-2 text-center font-serif text-[18px] font-medium italic sm:text-[22px] md:text-[26px] lg:text-[30px]"
            style={{ color: PRIMARY }}
          >
            {deal.heroSubtitle ?? `${deal.platform} Business`}
          </p>

          {/* Subtitle / description */}
          <p className="mx-auto mt-4 max-w-2xl text-center text-[16px] leading-relaxed text-zinc-900/60 sm:text-[16px] md:text-[18px]">
            {deal.description}
          </p>

          {/* Investment Snapshot */}
          <div className="mt-10 flex flex-col items-center gap-2 w-full max-w-3xl lg:max-w-4xl">
            <div className="flex justify-center">
              <span
                className="inline-flex italic items-center gap-2 rounded-[12px] border px-3 py-1.5 text-xs tracking-[0] font-medium sm:px-4 sm:py-2 sm:text-[12px] md:text-[15px]"
                style={{
                  borderColor: "#FFFFFF",
                  background: PRIMARY,
                  color: "#FFFFFF",
                }}
              >
                Investment Snapshot
              </span>
            </div>
            <div
              className="grid w-full max-w-full grid-cols-2 gap-2 rounded-2xl border-2 border-[#a36af6]/20 bg-white/20 backdrop-blur-[6px] sm:grid-cols-3 sm:gap-3 sm:rounded-3xl md:grid-cols-6 md:gap-2 md:rounded-full lg:gap-3"
              style={{ borderBottom: "3px solid white" }}
            >
              {INVESTMENT_SNAPSHOT_ORDER.map((iconKey, idx) => {
                const metric = deal.metrics.find((m) => m.icon === iconKey);
                if (!metric) return null;
                return (
                  <div
                    key={metric.icon}
                    className="flex flex-row items-start justify-start gap-1 border-r-2 border-white p-2 sm:gap-1.5 sm:p-2.5 md:gap-1.5 md:px-2.5 md:py-3 [&:first-child]:md:pl-5 [&:last-child]:md:pr-5 [&:last-child]:!border-r-0 [&:nth-child(2n)]:max-sm:border-r-0 [&:nth-child(3n)]:sm:border-r-0 md:[&:nth-child(3n)]:border-r-2 md:[&:nth-child(3n)]:border-white"
                  >
                    <span
                      className="flex h-fit shrink-0 items-center justify-center rounded-full"
                      style={{
                        color: PRIMARY,

                      }}
                    >
                      {METRIC_ICONS[metric.icon]}
                    </span>
                    <div className="flex flex-col items-start justify-start gap-1 md:gap-1.5">
                      <p className="text-[13px] font-medium text-zinc-500 sm:text-[13px] md:text-[13px] md:whitespace-nowrap lg:text-[14px]">
                        {METRIC_LABELS[metric.icon]}
                      </p>
                      <p className="text-[15px] font-bold text-zinc-900 sm:text-[15px] md:text-[16px] md:whitespace-nowrap lg:text-[18px]">
                        {metric.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA Button - same style as Header Apply to Join */}
          <div className="mt-6 flex justify-center sm:mt-8">
            <Link
              href={deal.speakHref}
              className="inline-flex w-full max-w-[320px] items-center justify-center gap-2 rounded-full border-2 font-medium text-white shadow-[inset_0_4px_14px_white] transition-colors hover:!bg-[#6d28d9] px-5 py-3 text-sm sm:w-auto sm:max-w-none sm:px-8 sm:py-3 sm:text-[15px]"
              style={{
                borderColor: "rgba(247, 239, 255, 0.5)",
                backgroundColor: "#a36af6",
              }}
            >
              Book Private Brand Reveal Call
              <span className="text-lg">→</span>
            </Link>
          </div>

          {/* Disclosure */}
          <p className="mt-6 text-center text-[12px] text-zinc-500 sm:text-[13px]">
            Full financials available below.
          </p>
          <p className="mt-1 text-center text-[12px] text-zinc-500 sm:text-[13px]">
            Brand identity disclosed via investor call.
          </p>
        </div>
      </section>

      {/* Info cards - 2x2 grid below hero */}
      <section className="bg-[#F5EEFD] px-4 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-start gap-4 sm:gap-6 md:grid-cols-2">
            {INFO_CARDS.map((card) => {
              const content = card.getContent(deal);
              const isExpanded = expandedCards.has(card.key);

              return (
                <div
                  key={card.key}
                  className="overflow-hidden rounded-2xl border border-zinc-200/80 bg-white p-4 shadow-sm transition-shadow hover:shadow-md sm:p-5 md:p-6"
                >
                  <button
                    type="button"
                    onClick={() => toggleCard(card.key)}
                    className="flex w-full items-start justify-between gap-3 text-left"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"

                      >
                        <Image
                          src={card.iconSrc}
                          alt=""
                          width={20}
                          height={20}
                          className="h-10 w-10 object-contain"
                        />
                      </span>
                      <h3 className="text-base font-medium text-zinc-900 text-[18px] tracking-[-1px] sm:text-[20px] md:text-[24px]">
                        {card.title}
                      </h3>
                    </div>
                  </button>
                  <div
                    className="grid transition-[grid-template-rows] duration-300 ease-out overflow-hidden"
                    style={{ gridTemplateRows: isExpanded ? "1fr" : "0fr" }}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <div
                        className="-mx-5 -mb-5 rounded-b-2xl px-5 pb-5 pt-4 sm:-mx-6 sm:-mb-6 sm:px-6 sm:pb-6"

                      >
                        <TruncatedContent
                          content={content}
                          maxLines={4}
                          primaryColor={PRIMARY}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Financial Performance Overview - full width card */}
          <div className="mt-8 w-full overflow-hidden rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-sm sm:p-6">
            <button
              type="button"
              onClick={() => setFinancialOverviewExpanded((p) => !p)}
              className="flex w-full items-center justify-between gap-3 text-left"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg">
                  <Image
                    src="/assets/deals_assets/solar_graph-bold-duotone-1.png"
                    alt=""
                    width={24}
                    height={24}
                    className="h-10 w-10 object-contain"
                  />
                </span>
                <h3 className="text-base font-medium text-zinc-900 text-[20px] tracking-[-1px] sm:text-[20px] md:text-[24px]">
                  Financial Performance Overview
                </h3>
              </div>
            </button>
            <div
              className="grid transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: financialOverviewExpanded ? "1fr" : "0fr" }}
            >
              <div className="min-h-0 overflow-hidden">
                <div className="grid grid-cols-1 gap-3 border-t border-zinc-100 pt-4 sm:grid-cols-2 sm:gap-4">
                  {FINANCIAL_OVERVIEW_METRICS.map((m) => {
                    const value =
                      "getValue" in m && m.getValue
                        ? m.getValue(deal)
                        : deal.metrics.find((x) => x.icon === m.icon)?.value ?? "—";
                    return (
                      <div
                        key={m.icon}
                        className="flex items-center gap-3 rounded-xl border-l-4 border-[#A363F4]/22 p-3 sm:gap-4 sm:rounded-[20px] sm:p-4"
                        style={{
                          background: "linear-gradient(to right, #EFE6F9, transparent)",
                        }}
                      >
                        <span
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                          style={{ color: PRIMARY }}
                        >
                          {FINANCIAL_OVERVIEW_ICONS[m.icon as keyof typeof FINANCIAL_OVERVIEW_ICONS]}
                        </span>
                        <div className="min-w-0">
                          <p
                            className="truncate text-[20px] font-medium text-zinc-900 tracking-[-1px] sm:text-[20px] md:text-[24px]"
                            style={{ color: PRIMARY }}
                          >
                            {value}
                          </p>
                          <p className="text-[14px] font-medium text-zinc-900/60 sm:text-[14px] md:text-[18px]">
                            {m.label}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

  {/* How The Business Operates - full width card */}
          <div className="mt-6 w-full overflow-hidden rounded-2xl border border-zinc-200/80 bg-white p-4 shadow-sm transition-shadow hover:shadow-md sm:mt-8 sm:p-5 md:p-6">
            <button
              type="button"
              onClick={() => setHowOperatesExpanded((p) => !p)}
              className="flex w-full items-center justify-between gap-3 text-left"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                  <Image
                    src="/assets/deals_assets/boxicons_business-filled.png"
                    alt=""
                    width={24}
                    height={24}
                    className="h-10 w-10 object-contain"
                  />
                </span>
                <h3 className="text-base font-medium text-zinc-900 text-[20px] tracking-[-1px] sm:text-[20px] md:text-[24px]">
                  How The Business Operates
                </h3>
              </div>
            </button>
            <div
              className="mt-4 grid transition-[grid-template-rows] duration-300 ease-out rounded-xl border-2 border-[#EAD9FF]/70 p-3 sm:rounded-[20px] sm:p-4 md:mt-5 md:rounded-[25px] md:p-5"
              style={{
                gridTemplateRows: howOperatesExpanded ? "1fr" : "0fr",
                background:
                  "linear-gradient(45deg, rgba(163,106,246,0.1) 10%, #FCFDFF 50%, rgba(163,106,246,0.1) 90%)",

              }}
            >
              <div className="min-h-0 overflow-hidden">
                <div className="pt-4">
                  {deal.howOperatesColumns ? (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 md:gap-12 lg:gap-16">
                      {/* Col 1: Marketing Engine - banner then bullets (mobile: stacked, desktop: row 1) */}
                      <div className="flex flex-col gap-4 sm:gap-6">
                        <div
                          className="rounded-lg px-4 py-3 sm:px-5 sm:py-4"
                          style={{
                            background: `linear-gradient(to right, ${PRIMARY} 0%, transparent 100%)`,
                          }}
                        >
                          <h4 className="text-[18px] font-bold text-white sm:text-[20px] md:text-[22px]">
                            {deal.howOperatesColumns.marketingEngine.title}
                          </h4>
                          <p className="mt-1 text-[14px] font-medium text-white/90 sm:text-[15px]">
                            {deal.howOperatesColumns.marketingEngine.subtitle}
                          </p>
                        </div>
                        <div className="flex flex-col">
                          <p className="text-[14px] text-zinc-900/60 sm:text-[15px] md:text-[16px]">
                            {deal.howOperatesColumns.marketingEngine.intro}
                          </p>
                          <ul className="mt-4 space-y-2">
                            {deal.howOperatesColumns.marketingEngine.bullets.map((item, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-3 text-[14px] text-zinc-900/60 sm:text-[15px] md:text-[16px]"
                              >
                                <span
                                  className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
                                  style={{ backgroundColor: PRIMARY }}
                                />
                                {item}
                              </li>
                            ))}
                          </ul>
                          <p
                            className="mt-6 italic sm:text-[15px] md:text-[16px]"
                            style={{ color: PRIMARY }}
                          >
                            {deal.howOperatesColumns.marketingEngine.quote}
                          </p>
                        </div>
                      </div>

                      {/* Col 2: Fulfilment - banner then bullets (mobile: title/subtitle above bullets) */}
                      <div className="flex flex-col gap-4 sm:gap-6">
                        <div
                          className="rounded-lg px-4 py-3 text-left sm:px-5 sm:py-4 sm:text-right"
                          style={{
                            background: "linear-gradient(to left, rgba(163, 106, 246, 0.08) 0%, transparent 100%)",
                          }}
                        >
                          <h4 className="text-[18px] font-bold text-zinc-900 sm:text-[20px] md:text-[22px]">
                            {deal.howOperatesColumns.fulfilmentSupplyChain.title}
                          </h4>
                          <p className="mt-1 text-[14px] font-medium text-zinc-900/60 sm:text-[15px]">
                            {deal.howOperatesColumns.fulfilmentSupplyChain.subtitle}
                          </p>
                        </div>
                        <div className="flex flex-col">
                          <p className="text-[14px] text-zinc-900/60 sm:text-[15px] md:text-[16px]">
                            {deal.howOperatesColumns.fulfilmentSupplyChain.intro}
                          </p>
                          <ul className="mt-4 space-y-2">
                            {deal.howOperatesColumns.fulfilmentSupplyChain.bullets.map((item, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-3 text-[14px] text-zinc-900/60 sm:text-[15px] md:text-[16px]"
                              >
                                <span
                                  className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
                                  style={{ backgroundColor: PRIMARY }}
                                />
                                {item}
                              </li>
                            ))}
                          </ul>
                          <p
                            className="mt-6 italic sm:text-[15px] md:text-[16px]"
                            style={{ color: PRIMARY }}
                          >
                            {deal.howOperatesColumns.fulfilmentSupplyChain.quote}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p className="whitespace-pre-line text-[14px] leading-relaxed text-zinc-900/60 sm:text-[15px]">
                      {deal.howOperates?.content ||
                        `The business operates under a scalable model with diversified traffic channels. Full operational details, fulfillment setup, and day-to-day workflows are shared during the private investor call.`}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Key Financial Metrics - full width card with table */}
          <div className="mt-6 w-full overflow-hidden rounded-2xl border border-zinc-200/80 bg-white p-4 shadow-sm transition-shadow hover:shadow-md sm:mt-8 sm:p-5 md:p-6">
            <button
              type="button"
              onClick={() => setKeyFinancialExpanded((p) => !p)}
              className="flex w-full flex-col items-stretch gap-3 text-left sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex min-w-0 flex-1 flex-col gap-1">

                <div className="flex items-center gap-3  mb-2 md:mb-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg">
                    <Image
                      src="/assets/deals_assets/solar_graph-bold-duotone-1.png"
                      alt=""
                      width={24}
                      height={24}
                      className="h-10 w-10 object-contain"
                    />
                  </span>
                  <h3 className="text-base font-medium text-zinc-900 text-[20px] tracking-[-1px] sm:text-[20px] md:text-[24px]">
                    Key Financial Metrics
                  </h3>
                </div>
                <p className="text-[14px] text-zinc-500 sm:text-[15px]">
                  The table below reflects performance for the most recent 12 months.
                </p>
              </div>
            </button>
            <div
              className="grid transition-[grid-template-rows] duration-300 ease-out"
              style={{
                gridTemplateRows: keyFinancialExpanded ? "1fr" : "0fr"
              }}
            >
              <div className="min-h-0 overflow-hidden">
                <div className="pt-4">
                  {deal.keyFinancialMetrics && deal.keyFinancialMetrics.length > 0 ? (
                    <>
                      <div className="overflow-hidden rounded-xl border border-zinc-200/60 sm:rounded-2xl">
                        <div className="relative overflow-x-auto">
                          {/* Gradient overlay for Net Profit column - same as KH Brokers in The Difference */}
                          <div
                            className="pointer-events-none absolute inset-0 z-0"
                            style={{
                              backgroundImage:
                                "linear-gradient(to top, rgba(163, 106, 246, 0) 0%, rgba(163, 106, 246, 0.2) 100%)",
                              backgroundSize: "25% 100%",
                              backgroundPosition: "right 0 top 0",
                              backgroundRepeat: "no-repeat",
                            }}
                            aria-hidden
                          />
                          <table className="relative z-10 min-w-[320px] w-full table-fixed border-collapse">
                            <thead>
                              <tr>
                                <th className="border-b border-r border-[#a36af6]/20 bg-white p-3 text-left text-[12px] font-semibold text-zinc-900 sm:p-4 sm:text-[14px] md:p-5 md:text-[16px]">
                                  Month
                                </th>
                                <th className="border-b border-r border-[#a36af6]/20 bg-white p-3 text-left text-[12px] font-semibold text-zinc-900 sm:p-4 sm:text-[14px] md:p-5 md:text-[16px]">
                                  Revenue
                                </th>
                                <th className="border-b border-r border-[#a36af6]/20 bg-white p-3 text-left text-[12px] font-semibold text-zinc-900 sm:p-4 sm:text-[14px] md:p-5 md:text-[16px]">
                                  Expenses
                                </th>
                                <th
                                  className="border-b border-[#a36af6]/20 p-3 text-left text-[12px] font-semibold text-zinc-900 sm:p-4 sm:text-[14px] md:p-5 md:text-[16px]"
                                  style={{ background: "transparent" }}
                                >
                                  Net Profit
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {deal.keyFinancialMetrics.map((row, idx) => (
                                <tr key={idx}>
                                  <td className="border-b border-r border-[#a36af6]/20 bg-white p-3 text-[12px] font-medium text-zinc-900 sm:p-4 sm:text-[14px] md:p-5 md:text-[16px]">
                                    {row.month}
                                  </td>
                                  <td className="border-b border-r border-[#a36af6]/20 bg-white p-3 text-[12px] font-medium text-zinc-900 sm:p-4 sm:text-[14px] md:p-5 md:text-[16px]">
                                    {row.revenue}
                                  </td>
                                  <td className="border-b border-r border-[#a36af6]/20 bg-white p-3 text-[12px] font-medium text-zinc-900 sm:p-4 sm:text-[14px] md:p-5 md:text-[16px]">
                                    {row.expenses}
                                  </td>
                                  <td
                                    className="border-b border-[#a36af6]/20 p-3 text-[12px] font-medium text-zinc-900 sm:p-4 sm:text-[14px] md:p-5 md:text-[16px]"
                                    style={{ background: "transparent" }}
                                  >
                                    {row.netProfit}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="mt-6 flex justify-center">
                        {deal.downloadfile ? (
                          <a
                            href={deal.downloadfile}
                            download
                            className="inline-flex items-center gap-2 rounded-full border-2 font-medium text-white shadow-[inset_0_4px_14px_rgba(255,255,255,0.3)] transition-colors hover:bg-[#6d28d9] px-5 py-2.5 text-sm sm:px-8 sm:py-3 sm:text-[15px]"
                            style={{
                              background: `linear-gradient(to right, ${PRIMARY}, #b794f6)`,
                              borderColor: "rgba(247, 239, 255, 0.5)",
                            }}
                          >
                            Download Full P&L Statement
                            <span className="text-lg">↓</span>
                          </a>
                        ) : (
                          <Link
                            href={deal.speakHref}
                            className="inline-flex items-center gap-2 rounded-full border-2 font-medium text-white shadow-[inset_0_4px_14px_rgba(255,255,255,0.3)] transition-colors hover:bg-[#6d28d9] px-5 py-2.5 text-sm sm:px-8 sm:py-3 sm:text-[15px]"
                            style={{
                              background: `linear-gradient(to right, ${PRIMARY}, #b794f6)`,
                              borderColor: "rgba(247, 239, 255, 0.5)",
                            }}
                          >
                            Download Full P&L Statement
                            <span className="text-lg">→</span>
                          </Link>
                        )}
                      </div>
                    </>
                  ) : (
                    <p className="text-[14px] text-zinc-500 sm:text-[15px]">
                      Full financial metrics and P&L statement are shared during the private investor
                      call.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

        

          {/* The KH Brokers Model */}

          <div className="mt-6 w-full overflow-hidden rounded-2xl border border-zinc-200/80 bg-white p-4 shadow-sm transition-shadow hover:shadow-md sm:mt-8 sm:p-5 md:p-6">

            {/* Section title */}
            <div className="mb-6 flex items-center gap-3 sm:mb-8 md:mb-10">
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center"
                style={{ color: PRIMARY }}
              >
                <Image
                  src="/assets/deals_assets/fluent_triangle-24-filled.png"
                  alt=""
                  width={24}
                  height={24}
                  className="h-6 w-6 object-contain"
                />
              </span>
              <h2 className="text-[22px] font-bold text-zinc-900 sm:text-[26px] md:text-[28px]">
                The KH Brokers Model
              </h2>
            </div>

            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12">
              {/* Left: #1 Fully Hands-Off Structure */}
              <div className="flex flex-col overflow-hidden justify-between rounded-xl border-2 border-[#F0E4FF] bg-zinc-50/50 p-6 sm:p-8"
                style={{
                  background:
                    "linear-gradient(45deg, rgba(163,106,246,0.2) 40%, #FCFDFF 50%, rgba(163,106,246,0.2) 90%)",
                }}
              >
                <span
                  className="shrink-0 bg-clip-text text-[60px] font-bold leading-none text-transparent sm:text-[80px] md:text-[180px] lg:text-[200px]"
                  style={{
                    backgroundImage:
                      "linear-gradient(to bottom, rgba(163, 106, 246, 0.3) 0%, rgba(234, 217, 255, 0.3) 100%)",
                    WebkitBackgroundClip: "text",
                    filter: "drop-shadow(8px 8px 0 rgba(163, 106, 246, 0.25))",
                  }}
                >
                  #1
                </span>
                <div className="mt-4">
                  <h3 className="text-[18px] font-medium text-zinc-900 sm:text-[20px] md:text-[22px]">
                    Fully Hands-Off Structure
                  </h3>
                  <p className="mt-4 text-[14px] text-zinc-900/60 sm:text-[15px] md:text-[16px]">
                    For passive investors, we can structure:
                  </p>
                  <ul className="mt-4 space-y-0">
                    {[
                      "Site management",
                      "Customer service",
                      "Media buying",
                      "Creative execution",
                      "Ongoing operational oversight",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-[14px] text-zinc-900/60 sm:text-[15px] md:text-[16px]"
                      >
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-zinc-900/60" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-[14px] text-zinc-900/60 sm:text-[15px] md:text-[16px]">
                    The team operates as a functioning system from day one.
                  </p>
                  <p className="mt-1 text-[14px] text-zinc-900/60 sm:text-[15px] md:text-[16px]">
                    No prior ecommerce experience required.
                  </p>
                </div>
              </div>

              {/* Right: #2, #3, #4 stacked */}
              <div className="flex flex-col gap-4 sm:gap-6">
                {[
                  {
                    num: "2",
                    title: "Designed for First-Time & Passive Investors",
                    desc: "KH Brokers specialises in working with capital-ready buyers who may not have operational ecommerce backgrounds. Each acquisition is structured based on desired involvement level.",
                  },
                  {
                    num: "3",
                    title: "Flexible Ownership Model",
                    desc: "Some buyers prefer strategic oversight. Others prefer deeper involvement. Infrastructure is structured first. Ownership role is defined second.",
                  },
                  {
                    num: "4",
                    title: "Built for Long-Term Operation",
                    desc: "Operational support does not end after transition. The structured team can remain in place for as long as desired. This positions ecommerce as a structured digital asset — not an operational burden.",
                  },
                ].map((item) => (
                  <div
                    key={item.num}
                    className="flex flex-col overflow-hidden rounded-xl border-2 border-[#F0E4FF] bg-zinc-50/50 p-4 sm:flex-row sm:items-start sm:gap-6 sm:p-6 md:p-8"
                    style={{
                      background:
                        "linear-gradient(45deg, rgba(163,106,246,0.2) 30%, #FCFDFF 50%, rgba(163,106,246,0.2) 90%)",
                    }}
                  >
                    <span
                      className="shrink-0 bg-clip-text text-[48px] font-bold leading-none text-transparent sm:text-[60px] md:text-[78px] lg:text-[88px]"
                      style={{
                        backgroundImage:
                          "linear-gradient(to bottom, rgba(163, 106, 246, 0.3) 0%, rgba(234, 217, 255, 0.3) 100%)",
                        WebkitBackgroundClip: "text",
                        filter: "drop-shadow(8px 8px 0 rgba(163, 106, 246, 0.25))",
                      }}
                    >
                      #{item.num}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-[18px] font-medium text-zinc-900 sm:text-[20px] md:text-[22px]">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-[14px] leading-relaxed text-zinc-900/60 sm:text-[15px] md:text-[16px]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>



      <DealsBookCallSection bookingBg="#F5EEFD" sectionBg="#F5EEFD" />

    </main>
  );
}
