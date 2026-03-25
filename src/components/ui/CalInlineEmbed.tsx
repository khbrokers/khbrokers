"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect, useRef } from "react";

interface CalInlineEmbedProps {
  calLink: string;
  namespace: string;
  primaryColor?: string;
  className?: string;
  height?: number;
}

const PRIMARY_PURPLE = "#ebdefc";
const DEFAULT_HEIGHT = 630;

/**
 * Cal.com inline embed with white + purple theme.
 * Uses getCalApi + ui instruction for brandColor (config.brandColor is unreliable per Cal.com issues).
 * ui.styles.branding.brandColor is the working approach per Cal.com GitHub.
 *
 * If purple still doesn't show: set it in Cal.com Dashboard → My Settings → Appearance → Brand Colors.
 * That applies to all embeds including this one.
 */
export function CalInlineEmbed({
  calLink,
  namespace,
  primaryColor = PRIMARY_PURPLE,
  className = "",
  height = DEFAULT_HEIGHT,
}: CalInlineEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    let mounted = true;

    (async () => {
      const cal = await getCalApi({ namespace });
      if (!cal || !container || !mounted) return;

      cal("ui", {
        theme: "light",
        hideEventTypeDetails: false,
        styles: {
          branding: {
            brandColor: primaryColor,
          },
        },
        layout: "month_view",
        cssVarsPerTheme: {
          light: {
            "cal-brand": primaryColor,
            "cal-brand-default": primaryColor,
            "cal-brand-emphasis": primaryColor,
            "cal-brand-foreground": "#ffffff",
            "cal-color-brand-foreground": "#ffffff",
            "cal-background": "#ffffff",
          },
          dark: {
            "cal-brand": primaryColor,
            "cal-brand-default": primaryColor,
            "cal-brand-emphasis": primaryColor,
            "cal-brand-foreground": "#ffffff",
            "cal-color-brand-foreground": "#ffffff",
            "cal-background": "#ffffff",
          },
        },
      });

      cal("inline", {
        elementOrSelector: container,
        calLink,
        config: {
          theme: "light",
          layout: "month_view",
          useSlotsViewOnSmallScreen: "true",
        },
      });
    })();

    return () => {
      mounted = false;
      if (container) container.innerHTML = "";
    };
  }, [calLink, namespace, primaryColor]);

  return (
    <div
      ref={containerRef}
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
