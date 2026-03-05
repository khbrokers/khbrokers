"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect, useRef } from "react";

interface CalInlineEmbedProps {
  calLink: string;
  primaryColor?: string;
  className?: string;
}

const PRIMARY_PURPLE = "#a36af6";

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
  primaryColor = PRIMARY_PURPLE,
  className = "",
}: CalInlineEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    (async () => {
      const cal = await getCalApi();
      if (!cal || !containerRef.current) return;

      cal("ui", {
        theme: "light",
        styles: {
          branding: {
            brandColor: primaryColor,
          },
        },
        layout: "month_view",
      });

      cal("inline", {
        elementOrSelector: containerRef.current,
        calLink,
        config: {
          theme: "light",
          layout: "month_view",
        },
      });
    })();
  }, [calLink, primaryColor]);

  return (
    <div
      ref={containerRef}
      className={`cal-embed overflow-hidden rounded-lg ${className}`.trim()}
      style={{
        width: "100%",
        height: "630px",
        maxWidth: "100%",
        minHeight: "630px",
        contain: "layout",
      }}
    />
  );
}
