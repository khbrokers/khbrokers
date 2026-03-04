import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "KH Brokers",
  tagline: "Enterprise Brokerage Solutions",
  description:
    "Professional brokerage platform for modern trading. Scalable, secure, and built for growth.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://khbrokers.com",
  ogImage: "/og-image.png",
};
