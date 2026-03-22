"use client";

import { useState } from "react";
import { FaFilter, FaTimes } from "react-icons/fa";
import { dealsFiltersConfig } from "@/config/deals.config";

const PRIMARY = "#a36af6";

function countActiveFilters(
  selectedNiches: string[],
  priceRange: [number, number],
  annualProfit: [number, number],
  annualRevenue: [number, number],
  businessAge: [number, number],
  recentlySold: boolean
): number {
  const { priceRange: pr, annualProfit: ap, annualRevenue: ar, businessAge: ba } =
    dealsFiltersConfig;
  let count = selectedNiches.length;
  if (priceRange[0] !== pr.min || priceRange[1] !== pr.max) count += 1;
  if (annualProfit[0] !== ap.min || annualProfit[1] !== ap.max) count += 1;
  if (annualRevenue[0] !== ar.min || annualRevenue[1] !== ar.max) count += 1;
  if (businessAge[0] !== ba.min || businessAge[1] !== ba.max) count += 1;
  if (recentlySold) count += 1;
  return count;
}

function parseFilterInput(
  input: string,
  type: "currency" | "years"
): number | null {
  const cleaned = input.replace(/\s/g, "").replace(/,/g, "");
  if (type === "years") {
    const num = parseInt(cleaned.replace(/[^0-9]/g, ""), 10);
    return isNaN(num) ? null : num;
  }
  const match = cleaned.match(/^\$?([\d.]+)([KkMm])?$/);
  if (!match) return null;
  let num = parseFloat(match[1]);
  if (isNaN(num)) return null;
  const suffix = match[2]?.toUpperCase();
  if (suffix === "K") num *= 1_000;
  else if (suffix === "M") num *= 1_000_000;
  return num;
}

interface DealsFiltersProps {
  onClose?: () => void;
  onClearAll?: () => void;
  selectedNiches: string[];
  onNicheToggle: (niche: string) => void;
  priceRange: [number, number];
  onPriceRangeChange: (value: [number, number]) => void;
  annualProfit: [number, number];
  onAnnualProfitChange: (value: [number, number]) => void;
  annualRevenue: [number, number];
  onAnnualRevenueChange: (value: [number, number]) => void;
  businessAge: [number, number];
  onBusinessAgeChange: (value: [number, number]) => void;
  recentlySold: boolean;
  onRecentlySoldChange: (value: boolean) => void;
}

function SliderRow({
  label,
  value,
  min,
  max,
  step,
  suffix = "",
  format,
  parseType = "currency",
  onChange,
}: {
  label: string;
  value: [number, number];
  min: number;
  max: number;
  step: number;
  suffix?: string;
  format?: (v: number) => string;
  parseType?: "currency" | "years";
  onChange: (v: [number, number]) => void;
}) {
  const [inputValue, setInputValue] = useState<string>("");
  const [isFocused, setIsFocused] = useState(false);

  const displayValue = format
    ? format(value[1])
    : suffix
      ? `${value[1]}${suffix}`
      : value[1] >= 1_000_000
        ? `$${(value[1] / 1_000_000).toFixed(1)}M`
        : value[1] >= 1_000
          ? `$${(value[1] / 1_000).toFixed(0)}K`
          : `$${value[1].toLocaleString()}`;

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = Number(e.target.value);
    onChange([value[0], v]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = e.target.value;
    setInputValue(next);
    const parsed = parseFilterInput(next, parseType);
    if (parsed !== null) {
      const stepped = Math.round(parsed / step) * step;
      const clamped = Math.min(max, Math.max(min, stepped));
      onChange([value[0], clamped]);
    }
  };

  const handleInputBlur = () => {
    setIsFocused(false);
    setInputValue("");
  };

  const handleInputFocus = () => {
    setIsFocused(true);
    setInputValue(displayValue);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      (e.target as HTMLInputElement).blur();
    }
  };

  return (
    <div className="rounded-xl bg-zinc-50/80 border border-zinc-900/10 px-4 py-4">
      <div className="flex items-center justify-between gap-2">
        <span className="text-[12px] font-medium text-zinc-600 sm:text-[13px]">
          {label}
        </span>
        <input
          type="text"
          inputMode="numeric"
          value={isFocused ? inputValue : displayValue}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onKeyDown={handleInputKeyDown}
          className="w-14 min-w-0 shrink-0 rounded-[10px] border border-zinc-900/10 bg-[#F4F4F4] px-2 py-1.5 text-right text-[12px] font-semibold text-zinc-900 outline-none focus:border-[#a36af6] focus:ring-1 focus:ring-[#a36af6]/30 sm:w-16 sm:text-[13px]"
        />
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value[1]}
        onChange={handleSliderChange}
        className="deals-slider mt-2 h-[15px] w-full cursor-pointer appearance-none rounded-full"
        style={{
          background: `linear-gradient(to right, rgba(163, 106, 246, 0.7) 0%, rgba(163, 106, 246, 0.35) ${((value[1] - min) / (max - min)) * 50}%, rgba(163, 106, 246, 0.7) ${((value[1] - min) / (max - min)) * 100}%, rgba(163, 106, 246, 0.2) ${((value[1] - min) / (max - min)) * 100}%, rgba(163, 106, 246, 0.2) 100%)`,
        }}
      />
    </div>
  );
}

export function DealsFilters({
  onClose,
  onClearAll,
  selectedNiches,
  onNicheToggle,
  priceRange,
  onPriceRangeChange,
  annualProfit,
  onAnnualProfitChange,
  annualRevenue,
  onAnnualRevenueChange,
  businessAge,
  onBusinessAgeChange,
  recentlySold,
  onRecentlySoldChange,
}: DealsFiltersProps) {
  const { refineTitle, priceRange: pr, annualProfit: ap, annualRevenue: ar, businessAge: ba, industryLabel, recentlySoldLabel, niches } =
    dealsFiltersConfig;

  const activeCount = countActiveFilters(
    selectedNiches,
    priceRange,
    annualProfit,
    annualRevenue,
    businessAge,
    recentlySold
  );

  return (
    <div className="space-y-5 h-fit rounded-[30px] p-2 md:p-3">
      <div className="flex h-10 items-center gap-2 rounded-xl">
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close filters"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] border border-zinc-900/10 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
          >
            <FaTimes className="h-4 w-4" />
          </button>
        )}
        <div className="flex min-w-0 flex-1 items-center justify-between gap-2 rounded-[10px] border border-zinc-900/10 px-2 py-1.5">
          <h3 className="text-[16px] md:text-[18px] font-normal text-zinc-900 sm:text-[18px]">
            {refineTitle}
          </h3>
          {activeCount > 0 ? (
            <button
              type="button"
              onClick={onClearAll}
              aria-label="Clear all filters"
              className="flex h-7 shrink-0 cursor-pointer items-center gap-1.5 rounded-full bg-[#a36af6] px-3 text-white transition-colors hover:bg-[#a36af650] hover:text-[#a36af6] [&>svg]:hover:text-[#a36af6]"
            >
              <FaTimes className="h-2 w-2 shrink-0 md:h-3 md:w-3" />
              <span className="text-[13px] md:text-[14px] font-normal border-l border-white/10 pl-2">{activeCount}</span>
            </button>
          ) : (
            <FaFilter className="h-4 w-4 shrink-0" style={{ color: PRIMARY }} />
          )}
        </div>
      </div>

      <div className="space-y-3">
        <SliderRow
          label={pr.label}
          value={priceRange}
          min={pr.min}
          max={pr.max}
          step={pr.step}
          format={(v) => (v >= 1_000_000 ? `$${(v / 1_000_000).toFixed(1)}M` : v >= 1_000 ? `$${(v / 1_000).toFixed(0)}K` : `$${v.toLocaleString()}`)}
          onChange={onPriceRangeChange}
        />
        <SliderRow
          label={ap.label}
          value={annualProfit}
          min={ap.min}
          max={ap.max}
          step={ap.step}
          format={(v) => (v >= 1_000_000 ? `$${(v / 1_000_000).toFixed(1)}M` : v >= 1_000 ? `$${(v / 1_000).toFixed(0)}K` : `$${v.toLocaleString()}`)}
          onChange={onAnnualProfitChange}
        />
        <SliderRow
          label={ar.label}
          value={annualRevenue}
          min={ar.min}
          max={ar.max}
          step={ar.step}
          format={(v) => (v >= 1_000_000 ? `$${(v / 1_000_000).toFixed(1)}M` : v >= 1_000 ? `$${(v / 1_000).toFixed(0)}K` : `$${v.toLocaleString()}`)}
          onChange={onAnnualRevenueChange}
        />
        <SliderRow
          label={ba.label}
          value={businessAge}
          min={ba.min}
          max={ba.max}
          step={ba.step}
          format={(v) => {
            if (v <= 3) return "3 Months";
            if (v <= 6) return "6 Months";
            if (v <= 12) return "1 Year";
            if (v <= 24) return "2 Years";
            return "3+ Years";
          }}
          parseType="years"
          onChange={onBusinessAgeChange}
        />
      </div>

      <div className="border border-zinc-900/10 rounded-[10px] p-2 md:p-4 flex flex-col gap-2">
        <h4 className="mb-2 text-[13px] font-medium text-zinc-900 sm:text-[14px]">
          {industryLabel}
        </h4>
        <div className="flex flex-wrap gap-2 mt-2">
          {niches.map((niche) => {
            const isSelected = selectedNiches.includes(niche);
            return (
              <button
                key={niche}
                type="button"
                onClick={() => onNicheToggle(niche)}
                className="rounded-[10px] border border-zinc-900/10 bg-[#F4F4F4] px-3 py-1.5 text-[12px] font-medium transition-colors sm:text-[13px]"
                style={{
                  backgroundColor: isSelected
                    ? `${PRIMARY}20`
                    : "rgba(0,0,0,0.06)",
                  color: isSelected ? PRIMARY : "rgb(39,39,42)",
                }}
              >
                {niche}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-between rounded-xl border border-zinc-900/10 px-4 py-3">
        <span className="text-[13px] font-medium text-zinc-900">
          {recentlySoldLabel}
        </span>
        <button
          type="button"
          role="switch"
          aria-checked={recentlySold}
          onClick={() => onRecentlySoldChange(!recentlySold)}
          className="relative h-6 w-11 shrink-0 rounded-[10px] transition-colors"
          style={{
            backgroundColor: recentlySold ? PRIMARY : "rgba(0,0,0,0.15)",
          }}
        >
          <span
            className="absolute top-1 left-1 h-4 w-4 rounded-[8px] bg-white shadow-sm transition-transform"
            style={{
              transform: recentlySold ? "translateX(20px)" : "translateX(0)",
            }}
          />
        </button>
      </div>
    </div>
  );
}
