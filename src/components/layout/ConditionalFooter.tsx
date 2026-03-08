"use client";

import { usePathname } from "next/navigation";
import { Footer } from "./Footer";

export function ConditionalFooter() {
  const pathname = usePathname();
  const isSellers = pathname?.startsWith("/sellers");
  return <Footer theme={isSellers ? "sellers" : "buyers"} />;
}
