"use client";

import { usePathname } from "next/navigation";
import { Header } from "./Header";

const AUTH_PATHS = ["/signin", "/signup", "/demo"];

export function ConditionalHeader() {
  const pathname = usePathname() ?? "";
  const isAuthPage = AUTH_PATHS.some(
    (p) => pathname === p || pathname.startsWith(`${p}/`)
  );

  if (isAuthPage) return null;
  return <Header />;
}
