import type { SectionConfig } from "@/types";

export const heroConfig: SectionConfig = {
  id: "hero",
  title: "Brokerage Made Simple",
  subtitle:
    "Enterprise-grade platform for trading professionals. Scale with confidence.",
  data: {
    ctaPrimary: "Start Free Trial",
    ctaSecondary: "Book a Demo",
  },
};

export const featuresConfig: SectionConfig[] = [
  {
    id: "features",
    title: "Features",
    subtitle: "Everything you need to run a modern brokerage",
    data: {
      items: [
        {
          title: "Real-time Analytics",
          description:
            "Live dashboards and reporting for informed decisions.",
          icon: "chart",
        },
        {
          title: "Multi-asset Support",
          description: "Stocks, forex, crypto — one unified platform.",
          icon: "layers",
        },
        {
          title: "Secure & Compliant",
          description:
            "Enterprise security with regulatory compliance built-in.",
          icon: "shield",
        },
      ],
    },
  },
];

export const pricingConfig: SectionConfig = {
  id: "pricing",
  title: "Simple Pricing",
  subtitle: "Choose the plan that fits your needs",
  data: {
    plans: [
      { name: "Starter", price: "$99", period: "/mo", features: ["Up to 100 users", "Basic analytics"] },
      { name: "Pro", price: "$299", period: "/mo", features: ["Unlimited users", "Advanced analytics", "API access"] },
      { name: "Enterprise", price: "Custom", period: "", features: ["Everything in Pro", "Dedicated support", "SLA"] },
    ],
  },
};
