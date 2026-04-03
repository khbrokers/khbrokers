"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect, useRef } from "react";

const CAL_BRAND = "#EBDEFC";
const DEFAULT_HEIGHT = 630;

export function LaunchvectorCalInlineEmbed({ className = "", height = DEFAULT_HEIGHT }: { className?: string; height?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    let mounted = true;

    (async () => {
      const Cal = await getCalApi({ namespace: "limited-lv" });
      if (!Cal || !container || !mounted) return;

      Cal("ui", {
        theme: "light",
        hideEventTypeDetails: false,
        layout: "month_view",
        styles: { branding: { brandColor: CAL_BRAND } },
        cssVarsPerTheme: {
          light: {
            "cal-brand": CAL_BRAND,
            "cal-brand-default": CAL_BRAND,
            "cal-brand-emphasis": CAL_BRAND,
            "cal-brand-foreground": "#ffffff",
            "cal-color-brand-foreground": "#ffffff",
            "cal-background": "#ffffff",
          },
          dark: {
            "cal-brand": CAL_BRAND,
            "cal-brand-default": CAL_BRAND,
            "cal-brand-emphasis": CAL_BRAND,
            "cal-brand-foreground": "#ffffff",
            "cal-color-brand-foreground": "#ffffff",
            "cal-background": "#ffffff",
          },
        },
      });

      Cal("inline", {
        elementOrSelector: container,
        calLink: "khbrokers/limited-lv",
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
          if (iframeDoc.getElementById("kh-disable-profile-lv")) return true;
          const style = iframeDoc.createElement("style");
          style.id = "kh-disable-profile-lv";
          style.textContent = `a[href*="/khbrokers"] { pointer-events: none !important; cursor: default !important; }`;
          iframeDoc.head.appendChild(style);
          return true;
        } catch {
          return false;
        }
      };

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
      id="my-cal-inline-limited-lv"
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
