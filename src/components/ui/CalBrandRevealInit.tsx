"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export function CalBrandRevealInit() {
  useEffect(() => {
    (async () => {
      const Cal = await getCalApi({ namespace: "brand-reveal" });
      if (!Cal) return;
      Cal("ui", {
        theme: "light",
        hideEventTypeDetails: false,
        layout: "month_view",
        cssVarsPerTheme: {
          light: { "cal-brand": "#ebdefc" },
        },
      });
    })();
  }, []);

  return null;
}
