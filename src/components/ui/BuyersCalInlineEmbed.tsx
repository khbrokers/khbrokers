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

      // Inject CSS into the Cal.com iframe to disable the profile link
      const disableProfileLink = () => {
        const calInline = container.querySelector("cal-inline");
        const shadow = calInline?.shadowRoot;
        if (!shadow) return false;
        const iframe = shadow.querySelector("iframe") as HTMLIFrameElement | null;
        if (!iframe) return false;
        try {
          const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
          if (!iframeDoc || !iframeDoc.body) return false;
          // Check if style already injected
          if (iframeDoc.getElementById("kh-disable-profile")) return true;
          const style = iframeDoc.createElement("style");
          style.id = "kh-disable-profile";
          style.textContent = `a[href*="/khbrokers"] { pointer-events: none !important; cursor: default !important; }`;
          iframeDoc.head.appendChild(style);
          return true;
        } catch {
          return false;
        }
      };

      // Retry until iframe is loaded and style is injected
      let attempts = 0;
      const interval = setInterval(() => {
        attempts++;
        if (disableProfileLink() || !mounted || attempts > 50) clearInterval(interval);
      }, 300);
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
