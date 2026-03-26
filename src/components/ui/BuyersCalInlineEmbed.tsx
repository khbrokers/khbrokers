"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect, useRef } from "react";

const BUYERS_CAL_BRAND = "#ebdefc";
const DEFAULT_HEIGHT = 630;

/**
 * Cal.com inline embed for buyers home page.
 * Uses namespace "intro", calLink "khbrokers/intro" (tracked separately).
 * White + purple theme with cal-brand #c8a5f9.
 */
export function BuyersCalInlineEmbed({ className = "", height = DEFAULT_HEIGHT }: { className?: string; height?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    let mounted = true;

    (async () => {
      const Cal = await getCalApi({ namespace: "intro" });
      if (!Cal || !container || !mounted) return;

      Cal("ui", {
        theme: "light",
        hideEventTypeDetails: false,
        layout: "month_view",
        styles: { branding: { brandColor: BUYERS_CAL_BRAND } },
        cssVarsPerTheme: {
          light: {
            "cal-brand": BUYERS_CAL_BRAND,
            "cal-brand-default": BUYERS_CAL_BRAND,
            "cal-brand-emphasis": BUYERS_CAL_BRAND,
            "cal-brand-foreground": "#ffffff",
            "cal-color-brand-foreground": "#ffffff",
            "cal-background": "#ffffff",
          },
          dark: {
            "cal-brand": BUYERS_CAL_BRAND,
            "cal-brand-default": BUYERS_CAL_BRAND,
            "cal-brand-emphasis": BUYERS_CAL_BRAND,
            "cal-brand-foreground": "#ffffff",
            "cal-color-brand-foreground": "#ffffff",
            "cal-background": "#ffffff",
          },
        },
      });

      Cal("inline", {
        elementOrSelector: container,
        calLink: "khbrokers/intro",
        config: {
          layout: "month_view",
          useSlotsViewOnSmallScreen: "true",
          theme: "light",
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
      id="my-cal-inline-intro"
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
