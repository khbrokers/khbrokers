import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "KH Brokers",
  tagline: "Acquire & Sell Vetted Shopify E-commerce Brands",
  description:
    "KH Brokers is a private Shopify M&A advisory facilitating acquisitions of cash-flowing e-commerce businesses for qualified buyers and motivated sellers.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://khbrokers.com",
  ogImage: "/og-image.png",
};
