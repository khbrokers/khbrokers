"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Footer } from "./Footer";
import { getStoredLegalTheme } from "./ThemeTracker";

export function ConditionalFooter() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [storedTheme, setStoredTheme] = useState<"buyers" | "sellers">("buyers");
  useEffect(() => {
    setStoredTheme(getStoredLegalTheme());
  }, [pathname]);

  if (pathname === "/") return null;

  const isLegalPage = pathname === "/terms" || pathname === "/privacy";
  const paramTheme = searchParams.get("theme");
  const legalTheme = isLegalPage
    ? paramTheme === "sellers"
      ? "sellers"
      : paramTheme === "buyers"
        ? "buyers"
        : storedTheme
    : null;
  const isSellers =
    legalTheme === "sellers" ||
    pathname?.startsWith("/sellers") ||
    pathname?.startsWith("/value-my-store");
  return <Footer theme={isSellers ? "sellers" : "buyers"} />;
}
