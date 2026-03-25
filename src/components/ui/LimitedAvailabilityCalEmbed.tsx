"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect, useRef } from "react";

const BRAND_REVEAL_CAL_BRAND = "#ebdefc";
const DEFAULT_HEIGHT = 630;

/**
 * Cal.com inline embed for brand-reveal booking.
 * calLink: khbrokers/brand-reveal
 */
export function LimitedAvailabilityCalEmbed({
  className = "",
  height = DEFAULT_HEIGHT,
}: {
  className?: string;
  height?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    let mounted = true;

    (async () => {
      const Cal = await getCalApi({ namespace: "brand-reveal" });
      if (!Cal || !container || !mounted) return;

      Cal("ui", {
        theme: "light",
        hideEventTypeDetails: false,
        layout: "month_view",
        cssVarsPerTheme: {
          light: {
            "cal-brand": BRAND_REVEAL_CAL_BRAND,
          },
          dark: {
            "cal-brand": BRAND_REVEAL_CAL_BRAND,
          },
        },
      });

      Cal("inline", {
        elementOrSelector: container,
        calLink: "khbrokers/brand-reveal",
        config: {
          layout: "month_view",
          useSlotsViewOnSmallScreen: "true",
        },
      });
    })();

    return () => {
      mounted = false;
      if (container) container.innerHTML = "";
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="my-cal-inline-brand-reveal"
      className={`cal-embed overflow-auto rounded-lg ${className}`.trim()}
      style={{
        width: "100%",
        height: `${height}px`,
        maxWidth: "100%",
        minHeight: `${height}px`,
        contain: "layout",
      }}
    />
  );
}
