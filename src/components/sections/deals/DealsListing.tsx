"use client";

import { useState, useMemo } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { DealsFilters } from "./DealsFilters";
import { DealCard } from "./DealCard";
import { AnimateOnView } from "@/components/ui/AnimateOnView";
import { dealsSearchConfig, dealsFiltersConfig, mockDeals } from "@/config/deals.config";

const { refineCollapsedLabel } = dealsFiltersConfig;
import type { Deal } from "@/config/deals.config";

const PRIMARY = "#a36af6";

/** Parse metric value (e.g. "$252,996", "$1.2M", "$500K") to number */
function parseMetricValue(str: string): number {
  const cleaned = str.replace(/\s/g, "").replace(/,/g, "");
  const match = cleaned.match(/^\$?([\d.]+)([KkMm])?$/);
  if (!match) return 0;
  let num = parseFloat(match[1]);
  if (isNaN(num)) return 0;
  const suffix = match[2]?.toUpperCase();
  if (suffix === "K") num *= 1_000;
  else if (suffix === "M") num *= 1_000_000;
  return num;
}

export function DealsListing() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState(dealsSearchConfig.sortOptions[0]);
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
  const [selectedNiches, setSelectedNiches] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([
    dealsFiltersConfig.priceRange.min,
    dealsFiltersConfig.priceRange.max,
  ]);
  const [annualProfit, setAnnualProfit] = useState<[number, number]>([
    dealsFiltersConfig.annualProfit.min,
    dealsFiltersConfig.annualProfit.max,
  ]);
  const [annualRevenue, setAnnualRevenue] = useState<[number, number]>([
    dealsFiltersConfig.annualRevenue.min,
    dealsFiltersConfig.annualRevenue.max,
  ]);
  const [businessAge, setBusinessAge] = useState<[number, number]>([
    dealsFiltersConfig.businessAge.min,
    dealsFiltersConfig.businessAge.max,
  ]);
  const [recentlySold, setRecentlySold] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(true);

  const handleNicheToggle = (niche: string) => {
    setSelectedNiches((prev) =>
      prev.includes(niche) ? prev.filter((n) => n !== niche) : [...prev, niche]
    );
  };

  const handleClearAllFilters = () => {
    setSelectedNiches([]);
    setPriceRange([dealsFiltersConfig.priceRange.min, dealsFiltersConfig.priceRange.max]);
    setAnnualProfit([dealsFiltersConfig.annualProfit.min, dealsFiltersConfig.annualProfit.max]);
    setAnnualRevenue([dealsFiltersConfig.annualRevenue.min, dealsFiltersConfig.annualRevenue.max]);
    setBusinessAge([dealsFiltersConfig.businessAge.min, dealsFiltersConfig.businessAge.max]);
    setRecentlySold(false);
  };

  const filteredAndSortedDeals = useMemo(() => {
    let result = [...mockDeals];

    // Search filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (d) =>
          d.niche.toLowerCase().includes(q) ||
          d.platform.toLowerCase().includes(q) ||
          d.description.toLowerCase().includes(q) ||
          d.title.toLowerCase().includes(q)
      );
    }

    // Niche filter
    if (selectedNiches.length > 0) {
      result = result.filter((d) => selectedNiches.includes(d.niche));
    }

    // Price range filter
    result = result.filter(
      (d) => d.askingPrice >= priceRange[0] && d.askingPrice <= priceRange[1]
    );

    // Annual profit filter
    const profitValue = (d: Deal) =>
      parseInt(d.metrics.find((m) => m.icon === "profit")?.value.replace(/[^0-9]/g, "") || "0", 10);
    result = result.filter(
      (d) => profitValue(d) >= annualProfit[0] && profitValue(d) <= annualProfit[1]
    );

    // Annual revenue filter
    const revenueValue = (d: Deal) =>
      parseInt(d.metrics.find((m) => m.icon === "revenue")?.value.replace(/[^0-9]/g, "") || "0", 10);
    result = result.filter(
      (d) => revenueValue(d) >= annualRevenue[0] && revenueValue(d) <= annualRevenue[1]
    );

    // Business age filter
    const ageValue = (d: Deal) =>
      parseInt(d.metrics.find((m) => m.icon === "age")?.value.replace(/\D/g, "") || "0", 10);
    result = result.filter(
      (d) => ageValue(d) >= businessAge[0] && ageValue(d) <= businessAge[1]
    );

    // Recently sold filter
    if (recentlySold) {
      result = result.filter((d) => d.recentlySold === true);
    }

    // Sort
    switch (sortBy) {
      case "Price: Low to High":
        result.sort((a, b) => a.askingPrice - b.askingPrice);
        break;
      case "Price: High to Low":
        result.sort((a, b) => b.askingPrice - a.askingPrice);
        break;
      case "Revenue":
        result.sort((a, b) => {
          const revA = parseMetricValue(a.metrics.find((m) => m.icon === "revenue")?.value || "0");
          const revB = parseMetricValue(b.metrics.find((m) => m.icon === "revenue")?.value || "0");
          return revB - revA;
        });
        break;
      default:
        // Newest - keep original order
        break;
    }

    return result;
  }, [
    searchQuery,
    selectedNiches,
    priceRange,
    annualProfit,
    annualRevenue,
    businessAge,
    recentlySold,
    sortBy,
  ]);

  return (
    <section className="relative overflow-visible px-4 pb-16 sm:pb-20 md:pb-24 z-[1000]">
      <div className="mx-auto max-w-6xl overflow-visible">
        <AnimateOnView
          animation="stagger"
          rootMargin="0px 0px -60px 0px"
          className="-mt-8 rounded-[24px] bg-white p-5 sm:-mt-10 sm:rounded-[28px] sm:p-6 md:-mt-14 md:p-[20px] lg:-mt-16"
          style={{
            position: "sticky",
            top: "10vh",
            zIndex: 10,
            border: "1px solid transparent",
            background:
              "linear-gradient(#FFFFFF, #FFFFFF) padding-box, linear-gradient(to bottom, #A363F450 0%, transparent 100%) border-box",
            backgroundClip: "padding-box, border-box",
          }}
        >
          {/* Search and sort bar */}
          <div className={`stagger-child flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between ${sortDropdownOpen ? "relative z-[100]" : ""}`}>
            <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-center border border-zinc-900/10 rounded-[10px] md:rounded-[30px] px-2 py-2">
              <input
                type="search"
                placeholder={dealsSearchConfig.placeholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 rounded-[20px] px-3 py-2 text-[14px] text-zinc-900 placeholder:text-zinc-400 focus:border-[#a36af6] focus:outline-none focus:ring-2 focus:ring-[#a36af6]/20 sm:text-[15px]"
              />
              <div className="flex gap-2">
                <button
                  type="button"
                  className="rounded-full border border-[#A363F4] hover:bg-[#A363F4] hover:text-white bg-white px-3 py-2 text-[14px] font-medium text-[#A363F4] transition-colors cursor-pointer sm:text-[15px]"
                >
                  {dealsSearchConfig.submitLabel}
                </button>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setSortDropdownOpen((o) => !o)}
                    className="flex items-center gap-2 rounded-full border border-[#A363F4] px-3 py-2 text-[14px] font-medium text-[#A363F4] sm:text-[15px]"
                 
                  >
                    {sortBy}
                    <FaChevronDown
                      className={`h-4 w-4 transition-transform ${sortDropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {sortDropdownOpen && (
                    <>
                      <div
                        className="fixed inset-0 z-[9998]"
                        onClick={() => setSortDropdownOpen(false)}
                        aria-hidden
                      />
                      <div className="absolute right-0 top-full z-[9999] mt-1 min-w-[180px] rounded-xl border border-zinc-200 bg-white py-2 shadow-lg">
                        {dealsSearchConfig.sortOptions.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => {
                              setSortBy(opt);
                              setSortDropdownOpen(false);
                            }}
                            className="w-full px-4 py-2 text-left text-[14px] text-zinc-700 transition-colors hover:bg-zinc-100"
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Main layout: filters + cards */}
          <div
            className={`stagger-child mt-8 flex flex-col gap-8 transition-all duration-300 md:grid ${
              filtersOpen ? "md:grid-cols-[280px_1fr] lg:grid-cols-[300px_1fr]" : "md:grid-cols-[56px_1fr]"
            }`}
          >
            <aside
              className={`flex shrink-0 flex-col overflow-hidden rounded-[20px] border border-zinc-900/10 transition-all duration-300 ease-out ${
                filtersOpen
                  ? "h-fit w-full md:w-[280px] lg:w-[300px]"
                  : "h-fit w-full md:w-14 md:min-w-14"
              }`}
            >
              {filtersOpen ? (
                <DealsFilters
                  onClose={() => setFiltersOpen(false)}
                  onClearAll={handleClearAllFilters}
                  selectedNiches={selectedNiches}
                onNicheToggle={handleNicheToggle}
                priceRange={priceRange}
                onPriceRangeChange={setPriceRange}
                annualProfit={annualProfit}
                onAnnualProfitChange={setAnnualProfit}
                annualRevenue={annualRevenue}
                onAnnualRevenueChange={setAnnualRevenue}
                businessAge={businessAge}
                onBusinessAgeChange={setBusinessAge}
                recentlySold={recentlySold}
                onRecentlySoldChange={setRecentlySold}
                />
              ) : (
                <div className="p-2">
                  <button
                    type="button"
                    onClick={() => setFiltersOpen(true)}
                    aria-label="Open filters"
                    className="flex h-10 w-full items-center gap-2 rounded-xl border border-zinc-900/10 bg-white px-3 transition-colors hover:bg-zinc-50 md:h-10 md:w-10 md:justify-center md:px-0"
                  >
                    <FaChevronRight
                      className="h-4 w-4 shrink-0 rotate-90 md:rotate-0"
                      style={{ color: PRIMARY }}
                    />
                    <span className="text-[14px] font-medium text-zinc-900 md:sr-only">
                      {refineCollapsedLabel}
                    </span>
                  </button>
                </div>
              )}
            </aside>

            <div className="min-w-0">
              <div className="grid gap-6 sm:grid-cols-1 lg:gap-8">
                {filteredAndSortedDeals.length > 0 ? (
                  filteredAndSortedDeals.map((deal, i) => (
                    <AnimateOnView
                      key={deal.id}
                      animation="fade-up"
                      rootMargin="0px 0px -60px 0px"
                      delayMs={i * 60}
                    >
                      <DealCard deal={deal} />
                    </AnimateOnView>
                  ))
                ) : (
                  <AnimateOnView animation="fade-up" rootMargin="0px 0px -60px 0px">
                    <div className="rounded-[20px] bg-zinc-50 py-16 text-center">
                      <p className="text-[16px] text-zinc-600">
                        No deals match your filters. Try adjusting your criteria.
                      </p>
                    </div>
                  </AnimateOnView>
                )}
              </div>
            </div>
          </div>
        </AnimateOnView>
      </div>
    </section>
  );
}
