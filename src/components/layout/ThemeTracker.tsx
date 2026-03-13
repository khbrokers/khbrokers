"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const LEGAL_THEME_KEY = "legalTheme";

export function ThemeTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;
    if (
      pathname.startsWith("/buyers") ||
      pathname.startsWith("/deals") ||
      pathname.startsWith("/invest-success")
    ) {
      typeof window !== "undefined" && sessionStorage.setItem(LEGAL_THEME_KEY, "buyers");
    } else if (
      pathname.startsWith("/sellers") ||
      pathname.startsWith("/value-my-store")
    ) {
      typeof window !== "undefined" && sessionStorage.setItem(LEGAL_THEME_KEY, "sellers");
    }
  }, [pathname]);

  return null;
}

export function getStoredLegalTheme(): "buyers" | "sellers" {
  if (typeof window === "undefined") return "buyers";
  return sessionStorage.getItem(LEGAL_THEME_KEY) === "sellers" ? "sellers" : "buyers";
}
