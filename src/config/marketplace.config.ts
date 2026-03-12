import type { NavItem } from "@/types";

export const marketplaceNavConfig: NavItem[] = [
  { label: "For Buyers", href: "/buyers" },
  { label: "For Sellers", href: "/sellers" },
  { label: "Value My Store", href: "/value-my-store" },
  { label: "Available Deals", href: "/deals" },
];

export const marketplaceCtaConfig = {
  signInLabel: "Buyer Sign In",
  signInHref: "/signin",
  applyLabel: "Apply to Join",
  applyHref: "/signup",
};
