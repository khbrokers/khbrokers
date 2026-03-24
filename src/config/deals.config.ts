export const dealsBookCallConfig = {
  heading: {
    before: "Unlock Full Brand Details & ",
    highlight: "Private Walkthrough",
  },
  subheading:
    "The business URL, backend overview, and deeper operational insights are disclosed during a private investor call.",
  calEmbedSlug: "khbrokers/welcome",
  calPrimaryColor: "#a36af6",
};

export const dealsHeroConfig = {
  tag: "Available Deals",
  headline: "Verified E-commerce Deals",
  highlight: "Selected by KH Brokers",
  description:
    "Each business listed below has completed our internal review and diligence process. We only present opportunities where seller intent, financial performance, and operational quality meet our standards.",
  ctaLabel: "Speak To KH Brokers",
  ctaHref: "#book-a-call",
};

export const dealsFiltersConfig = {
  refineTitle: "Refine Results",
  refineCollapsedLabel: "Refine Filter",
  priceRange: { label: "Price Range", min: 10000, max: 1500000, step: 10000 },
  annualProfit: { label: "Annual Profit (TTM)", min: 5000, max: 2000000, step: 1000 },
  annualRevenue: { label: "Annual Revenue (TTM)", min: 50000, max: 10000000, step: 50000 },
  businessAge: { label: "Business Age", min: 0, max: 36, step: 1, suffix: "" },
  industryLabel: "Industry/Niche",
  recentlySoldLabel: "Recently Sold",
  niches: [
    "Automotive",
    "Business",
    "Design & Style",
    "Education",
    "Electronics",
    "Food & Beverage",
    "Health & Beauty",
    "Home & Garden",
    "Pet",
    "Sports",
    "Travel",
    "Other",
  ],
};

export const dealsFaqConfig = {
  heading: {
    before: "Frequently Asked Questions From ",
    highlight: "Buyers",
  },
  subheading: "Direct answers. No ambiguity.",
  items: [
    {
      question: "How do I get access to available deals?",
      answer: [
        "→ There are two ways.",
        "The most recommended way is to book a call and speak directly with the KH Brokers team. This allows us to understand what you're looking for and present opportunities that actually fit your criteria.",
        "Alternatively, you can access our Available Deals page. This shows our current live deal flow. New listings don't appear daily — we're selective — but this is where approved opportunities are displayed.",
        "When you sign up to view deals, you're automatically added to our private email list, where we notify buyers as soon as new opportunities become available. This ensures you get first access to deals as they're released.",
      ],
    },
    {
      question:
        "Do I need prior e-commerce experience to buy a business through KH Brokers?",
      answer: [
        "No. Most buyers we work with are entering e-commerce for the first time. We structure our process around buyer protection — not prior experience. You'll receive operator-level context, live financial walkthroughs, and structured handover support so you can make informed decisions without guessing.",
      ],
    },
    {
      question:
        "I've seen the same business listed with another broker or company — why?",
      answer: [
        "Sellers sometimes list with multiple channels. We only present businesses we've verified from raw data — rebuilt financials, reconciled payouts, and operator-level diligence. If a business appears elsewhere, our view of it is based on our own verification, not third-party claims. We do not rely on seller-prepared summaries.",
      ],
    },
    {
      question: "What happens after I buy the business?",
      answer: [
        "We provide a structured handover: documentation, transition support, and ongoing guidance. The level of involvement depends on your ownership preference — full operator, strategic partner, or passive investor. You retain 100% ownership with no equity dilution.",
      ],
    },
    {
      question:
        "How do I know I'm protected when sending a large amount of funds?",
      answer: [
        "We use escrow-based closing with buyer protection. Funds are held in a secure third-party escrow until all conditions are met and the handover is complete. We do not handle funds directly — the process is designed to protect both parties.",
      ],
    },
  ],
};

export const dealsSearchConfig = {
  placeholder: "Search by niche, keyword, or brand name...",
  submitLabel: "Submit",
  sortOptions: ["Newest", "Price: Low to High", "Price: High to Low", "Revenue"],
};

export interface DealMetric {
  label: string;
  value: string;
  icon: "revenue" | "profit" | "monthly" | "age" | "asking" | "multiple";
}

export interface DealInfoCard {
  content: string;
  hasMore?: boolean;
}

export interface HowOperatesColumn {
  title: string;
  subtitle: string;
  intro: string;
  bullets: string[];
  quote: string;
}

export interface MonthlyFinancialRow {
  month: string;
  revenue: string;
  expenses: string;
  netProfit: string;
}

export interface Deal {
  id: string;
  platform: string;
  niche: string;
  title: string;
  description: string;
  coverImage?: string;
  verified: boolean;
  metrics: DealMetric[];
  askingPrice: number;
  speakHref: string;
  viewHref: string;
  /** Optional: Business Overview card content */
  businessOverview?: DealInfoCard;
  /** Optional: Why This Business Was Built */
  whyBuilt?: DealInfoCard;
  /** Optional: Revenue Model */
  revenueModel?: DealInfoCard;
  /** Optional: Why It Is Being Sold */
  whySelling?: DealInfoCard;
  /** Optional: How The Business Operates - two columns (marketingEngine, fulfilmentSupplyChain) */
  howOperatesColumns?: {
    marketingEngine: HowOperatesColumn;
    fulfilmentSupplyChain: HowOperatesColumn;
  };
  /** @deprecated Use howOperatesColumns. Kept for fallback. */
  howOperates?: DealInfoCard;
  /** Optional: Key Financial Metrics - 12 months */
  keyFinancialMetrics?: MonthlyFinancialRow[];
  /** Optional: Custom hero title (main heading) */
  heroTitle?: string;
  /** Optional: Custom hero subtitle (purple accent) */
  heroSubtitle?: string;
  /** If true, deal was sold recently (for "Recently Sold" filter) */
  recentlySold?: boolean;
}

export const mockDeals: Deal[] = [
  {
    id: "1",
    platform: "Shopify",
    niche: "Design & Style",
    title: "A Mission-Driven Ocean Lifestyle Apparel Brand",
    coverImage: "/assets/sellers_landing/whysell/card01.png",
    description:
      "2-Year-Old POD Brand. $2M+ Lifetime Revenue. $258K Net Profit. Positioned for Market Expansion.",
    verified: true,
    metrics: [
      { label: "TTM Revenue", value: "$1,950,460", icon: "revenue" },
      { label: "TTM Profit", value: "$252,996", icon: "profit" },
      { label: "Monthly Profit", value: "$21,083", icon: "monthly" },
      { label: "Business Age", value: "2 Years", icon: "age" },
      { label: "Asking Price", value: "$285,000", icon: "asking" },
      { label: "Profit Multiple", value: "1.1x", icon: "multiple" },
    ],
    askingPrice: 285000,
    speakHref: "#book-a-call",
    viewHref: "/deals/1",
    businessOverview: {
      content:
        "A 2-year-old direct-to-consumer lifestyle apparel brand operating on a print-on-demand (POD) model. Ocean-themed clothing with environmental values, strong brand storytelling, and scalable digital infrastructure. $1.95M in revenue and $252,996 in net profit over the trailing twelve months — no inventory held, no warehousing.",
      hasMore: true,
    },
    whyBuilt: {
      content:
        "The brand was built with a dual mission: to build a meaningful lifestyle brand and support ocean conservation initiatives. A story-driven brand designed for long-term expansion, built around emotional positioning, community appeal, and strong creative direction to resonate with conscious consumers and leverage modern ecommerce systems to scale efficiently.",
      hasMore: false,
    },
    revenueModel: {
      content:
        "The business operates under a print-on-demand model, where products are manufactured after a customer places an order. Traffic acquisition is primarily through Meta advertising (Facebook & Instagram) for testing new designs, scaling budgets, and introducing variations. Google Ads serves as a complementary retargeting and demand capture channel.",
      hasMore: true,
    },
    whySelling: {
      content:
        "The decision to sell is strategic rather than performance-driven. After achieving product-market validation, operational stability, and consistent paid acquisition performance, the current owner is reallocating focus and capital toward other ventures. The business is being transitioned to a new owner rather than dividing resources or slowing growth momentum.",
      hasMore: true,
    },
    howOperatesColumns: {
      marketingEngine: {
        title: "Marketing Engine",
        subtitle: "Structured Creative Testing & Scaling Framework",
        intro: "The marketing system is built around:",
        bullets: [
          "Weekly product testing",
          "Multiple ad angles per design",
          "Rapid budget scaling for winners",
          "Immediate pausing of inefficiencies",
        ],
        quote:
          "This creates a predictable growth model rather than dependence on single-product spikes.",
      },
      fulfilmentSupplyChain: {
        title: "Fulfilment & Supply Chain",
        subtitle: "Fully Automated POD Infrastructure",
        intro: "The business operates through established third-party suppliers based in China. Order Process:",
        bullets: [
          "Customer places order",
          "Order syncs automatically",
          "Supplier produces and ships",
        ],
        quote:
          "This structure eliminates warehousing, minimizes capital exposure, simplifies operational management, transfers seamlessly to a new owner.",
      },
    },
    keyFinancialMetrics: [
      { month: "Feb 2025", revenue: "$95,468", expenses: "$89,219", netProfit: "$6,249" },
      { month: "Mar 2025", revenue: "$112,340", expenses: "$98,120", netProfit: "$14,220" },
      { month: "Apr 2025", revenue: "$128,560", expenses: "$105,440", netProfit: "$23,120" },
      { month: "May 2025", revenue: "$145,220", expenses: "$118,900", netProfit: "$26,320" },
      { month: "Jun 2025", revenue: "$158,900", expenses: "$132,100", netProfit: "$26,800" },
      { month: "Jul 2025", revenue: "$165,400", expenses: "$138,200", netProfit: "$27,200" },
      { month: "Aug 2025", revenue: "$172,800", expenses: "$144,500", netProfit: "$28,300" },
      { month: "Sep 2025", revenue: "$168,200", expenses: "$142,100", netProfit: "$26,100" },
      { month: "Oct 2025", revenue: "$178,500", expenses: "$148,200", netProfit: "$30,300" },
      { month: "Nov 2025", revenue: "$195,200", expenses: "$162,400", netProfit: "$32,800" },
      { month: "Dec 2025", revenue: "$212,400", expenses: "$176,800", netProfit: "$35,600" },
      { month: "Jan 2026", revenue: "$158,670", expenses: "$132,100", netProfit: "$26,570" },
    ],
    heroTitle: "A Mission-Driven Ocean",
    heroSubtitle: "Lifestyle Apparel Brand",
  },
  {
    id: "3",
    platform: "Shopify",
    niche: "Electronics",
    title: "Shopify | Electronics",
    coverImage: "/assets/sellers_landing/whysell/card03.png",
    description:
      "Tech Accessories & Gadgets Store. Proven Amazon + DTC hybrid model with strong margins and repeat purchase rate.",
    verified: true,
    metrics: [
      { label: "TTM Revenue", value: "$2,100,000", icon: "revenue" },
      { label: "TTM Profit", value: "$315,000", icon: "profit" },
      { label: "Monthly Profit", value: "$26,250", icon: "monthly" },
      { label: "Business Age", value: "5 Years", icon: "age" },
      { label: "Asking Price", value: "$787,500", icon: "asking" },
      { label: "Profit Multiple", value: "2.5x", icon: "multiple" },
    ],
    askingPrice: 787500,
    speakHref: "#book-a-call",
    viewHref: "/deals/3",
    businessOverview: {
      content:
        "Tech Accessories & Gadgets Store with 5-year history. Proven Amazon + DTC hybrid model with strong margins and repeat purchase rate. $2.1M TTM revenue and $315K net profit. Diversified sales channels.",
      hasMore: true,
    },
    whyBuilt: {
      content:
        "Built to capitalize on the growing tech accessories market. Combines Amazon's reach with DTC margins. Strong brand positioning and product differentiation in a competitive space.",
      hasMore: false,
    },
    revenueModel: {
      content:
        "Hybrid model: Amazon FBA for scale and discovery, DTC for margin and customer ownership. Meta and Google Ads for paid acquisition. Strong organic traffic from branded search.",
      hasMore: true,
    },
    whySelling: {
      content:
        "Owner achieved target returns and is pursuing other opportunities. Business is operationally stable with clear systems. Ready for new owner to scale or optimize further.",
      hasMore: true,
    },
  },
  {
    id: "5",
    platform: "Shopify",
    niche: "Food & Beverage",
    title: "Shopify | Food & Beverage",
    coverImage: "/assets/sellers_landing/whysell/card05.png",
    description:
      "Specialty Coffee & Tea Brand. DTC subscription with strong retention, wholesale partnerships, and premium positioning.",
    verified: true,
    metrics: [
      { label: "TTM Revenue", value: "$1,050,000", icon: "revenue" },
      { label: "TTM Profit", value: "$168,000", icon: "profit" },
      { label: "Monthly Profit", value: "$14,000", icon: "monthly" },
      { label: "Business Age", value: "3 Years", icon: "age" },
      { label: "Asking Price", value: "$420,000", icon: "asking" },
      { label: "Profit Multiple", value: "2.5x", icon: "multiple" },
    ],
    askingPrice: 420000,
    speakHref: "#book-a-call",
    viewHref: "/deals/5",
    businessOverview: {
      content:
        "Specialty Coffee & Tea Brand with 3-year history. DTC subscription with strong retention, wholesale partnerships, and premium positioning. $1.05M TTM revenue and $168K net profit.",
      hasMore: true,
    },
    whyBuilt: {
      content:
        "Built to serve the growing specialty coffee market. Combines premium product with subscription convenience. Strong brand identity and community appeal in the wellness-adjacent space.",
      hasMore: false,
    },
    revenueModel: {
      content:
        "DTC subscription model with wholesale channel. Meta and Google Ads for acquisition. Strong organic traffic from branded search. Repeat purchase and subscription retention drive unit economics.",
      hasMore: true,
    },
    whySelling: {
      content:
        "Owner achieved target scale and is pursuing other interests. Business is profitable with clear growth levers. Ready for transition with documented processes.",
      hasMore: true,
    },
  },
  {
    id: "6",
    platform: "Shopify",
    niche: "Design & Style",
    title: "Shopify | Design & Style",
    coverImage: "/assets/sellers_landing/whysell/card06.png",
    description:
      "Minimalist Fashion & Accessories. Strong brand identity, influencer partnerships, and growing international sales.",
    verified: true,
    metrics: [
      { label: "TTM Revenue", value: "$1,780,000", icon: "revenue" },
      { label: "TTM Profit", value: "$267,000", icon: "profit" },
      { label: "Monthly Profit", value: "$22,250", icon: "monthly" },
      { label: "Business Age", value: "4 Years", icon: "age" },
      { label: "Asking Price", value: "$667,500", icon: "asking" },
      { label: "Profit Multiple", value: "2.5x", icon: "multiple" },
    ],
    askingPrice: 667500,
    speakHref: "#book-a-call",
    viewHref: "/deals/6",
    businessOverview: {
      content:
        "Minimalist Fashion & Accessories with 4-year history. Strong brand identity, influencer partnerships, and growing international sales. $1.78M TTM revenue and $267K net profit.",
      hasMore: true,
    },
    whyBuilt: {
      content:
        "Built to serve the minimalist fashion market. Combines design-led positioning with scalable ecommerce. Strong brand identity and community appeal in the lifestyle space.",
      hasMore: false,
    },
    revenueModel: {
      content:
        "DTC model via Shopify. Primary acquisition through Meta, influencer partnerships, and organic social. Strong international expansion potential. Growing repeat purchase rate.",
      hasMore: true,
    },
    whySelling: {
      content:
        "Strategic exit after building a profitable, scalable brand. Owner is reallocating focus. Business has strong growth trajectory and systems for new owner to scale.",
      hasMore: true,
    },
  },
  {
    id: "7",
    recentlySold: true,
    platform: "Shopify",
    niche: "Health & Beauty",
    title: "Shopify | Health & Beauty",
    coverImage: "/assets/deals/gel-cushon.jpg",
    description:
      "An 8 Month Old Health Store Selling A Natural Pain Relief Product | Explosive Revenue Of $1.9M | Total Net Profit $243k | Ready For SKU Expansion",
    verified: true,
    metrics: [
      { label: "TTM Revenue", value: "$1,894,494", icon: "revenue" },
      { label: "TTM Profit", value: "$243,075", icon: "profit" },
      { label: "Monthly Profit", value: "$30,384", icon: "monthly" },
      { label: "Business Age", value: "8 Months", icon: "age" },
      { label: "Sold For", value: "$185,000", icon: "asking" },
      { label: "Profit Multiple", value: "0.82x", icon: "multiple" },
    ],
    askingPrice: 185000,
    speakHref: "#book-a-call",
    viewHref: "/deals/7",
  },
  {
    id: "8",
    recentlySold: true,
    platform: "Shopify",
    niche: "Health & Beauty",
    title: "Shopify | Health & Beauty",
    coverImage: "/assets/deals/loravey.jpg",
    description:
      "A Rapid Growing Soap Brand Combating Fungal Related Issues. Over 9,000 Customers Subscribed To Receive Monthly Soap Bars | Net Profit Exceeds $300k",
    verified: true,
    metrics: [
      { label: "TTM Revenue", value: "$1,562,260", icon: "revenue" },
      { label: "TTM Profit", value: "$312,039", icon: "profit" },
      { label: "Monthly Profit", value: "$39,004", icon: "monthly" },
      { label: "Business Age", value: "7 Months", icon: "age" },
      { label: "Sold For", value: "$350,000", icon: "asking" },
      { label: "Profit Multiple", value: "1.12x", icon: "multiple" },
    ],
    askingPrice: 350000,
    speakHref: "#book-a-call",
    viewHref: "/deals/8",
  },
  {
    id: "9",
    recentlySold: true,
    platform: "Shopify",
    niche: "Design & Style",
    title: "Shopify | Design & Style",
    coverImage: "/assets/deals/barestep.jpg",
    description:
      "An Approaching 3 Year Old Shoe Brand Selling In The U.S & International Markets. Total Revenue $3.4M | Net Profit $800k+ | Consistent & Stable",
    verified: true,
    metrics: [
      { label: "TTM Revenue", value: "$2,654,777", icon: "revenue" },
      { label: "TTM Profit", value: "$324,168", icon: "profit" },
      { label: "Monthly Profit", value: "$27,014", icon: "monthly" },
      { label: "Business Age", value: "2+ Years", icon: "age" },
      { label: "Sold For", value: "$205,000", icon: "asking" },
      { label: "Profit Multiple", value: "0.63x", icon: "multiple" },
    ],
    askingPrice: 205000,
    speakHref: "#book-a-call",
    viewHref: "/deals/9",
  },
  {
    id: "10",
    recentlySold: true,
    platform: "Shopify",
    niche: "Health & Beauty",
    title: "Shopify | Health & Beauty",
    coverImage: "/assets/deals/norma.jpg",
    description:
      "A 7 Month Old Fitness Store Selling Balance & Mobility Boards. Aggressive Scale As Revenue Exceeds $1.6M With A NET Profit Of $300k+",
    verified: true,
    metrics: [
      { label: "TTM Revenue", value: "$1,632,510", icon: "revenue" },
      { label: "TTM Profit", value: "$302,928", icon: "profit" },
      { label: "Monthly Profit", value: "$43,275", icon: "monthly" },
      { label: "Business Age", value: "7 Months", icon: "age" },
      { label: "Sold For", value: "$300,000", icon: "asking" },
      { label: "Profit Multiple", value: "0.99x", icon: "multiple" },
    ],
    askingPrice: 300000,
    speakHref: "#book-a-call",
    viewHref: "/deals/10",
  },
  {
    id: "11",
    recentlySold: true,
    platform: "Shopify",
    niche: "Health & Beauty",
    title: "Shopify | Health & Beauty",
    coverImage: "/assets/deals/vivo-sleep.jpg",
    description:
      "A 7 Month Old Neck Mobility Relief Brand Selling In The U.S Market. Total Sales $300k+ | Total Net Profit $81k+ | Ready To Expand",
    verified: true,
    metrics: [
      { label: "TTM Revenue", value: "$333,447", icon: "revenue" },
      { label: "TTM Profit", value: "$81,524", icon: "profit" },
      { label: "Monthly Profit", value: "$11,646", icon: "monthly" },
      { label: "Business Age", value: "7 Months", icon: "age" },
      { label: "Sold For", value: "$70,000", icon: "asking" },
      { label: "Profit Multiple", value: "0.86x", icon: "multiple" },
    ],
    askingPrice: 70000,
    speakHref: "#book-a-call",
    viewHref: "/deals/11",
  },
  {
    id: "12",
    recentlySold: true,
    platform: "Shopify",
    niche: "Health & Beauty",
    title: "Shopify | Health & Beauty",
    coverImage: "/assets/deals/curlic.jpg",
    description:
      "A 1 Year Old Branded Hair Care Store Selling In The U.S. Total Revenue Exceeds $660k+ | NET Profit $69k | Ready To Be Scaled Into New Product Verticals",
    verified: true,
    metrics: [
      { label: "TTM Revenue", value: "$732,661", icon: "revenue" },
      { label: "TTM Profit", value: "$84,107", icon: "profit" },
      { label: "Monthly Profit", value: "$7,008", icon: "monthly" },
      { label: "Business Age", value: "1+ Year", icon: "age" },
      { label: "Sold For", value: "$69,999", icon: "asking" },
      { label: "Profit Multiple", value: "0.83x", icon: "multiple" },
    ],
    askingPrice: 69999,
    speakHref: "#book-a-call",
    viewHref: "/deals/12",
  },
  {
    id: "13",
    recentlySold: true,
    platform: "Shopify",
    niche: "Health & Beauty",
    title: "Shopify | Health & Beauty",
    coverImage: "/assets/deals/glossan.jpg",
    description:
      "A 7 Month Old Lipstick Brand Selling In The U.S Market. Total Revenue Exceeds $352k Whilst Netting $52k. Ready For New Ownership & Fresh Minds",
    verified: true,
    metrics: [
      { label: "TTM Revenue", value: "$395,085", icon: "revenue" },
      { label: "TTM Profit", value: "$61,039", icon: "profit" },
      { label: "Monthly Profit", value: "$8,719", icon: "monthly" },
      { label: "Business Age", value: "7 Months", icon: "age" },
      { label: "Sold For", value: "$30,000", icon: "asking" },
      { label: "Profit Multiple", value: "0.49x", icon: "multiple" },
    ],
    askingPrice: 30000,
    speakHref: "#book-a-call",
    viewHref: "/deals/13",
  },
  {
    id: "14",
    recentlySold: true,
    platform: "Shopify",
    niche: "Home & Garden",
    title: "Shopify | Home & Garden",
    coverImage: "/assets/deals/bonco.jpeg",
    description:
      "A 1 Year Old French Dropshipping Store Selling General Products. Total Revenue Of $670k With A NET Profit Of $146k. Growing MoM & Has Stable Income",
    verified: true,
    metrics: [
      { label: "TTM Revenue", value: "$657,572", icon: "revenue" },
      { label: "TTM Profit", value: "$122,895", icon: "profit" },
      { label: "Monthly Profit", value: "$10,241", icon: "monthly" },
      { label: "Business Age", value: "1+ Year", icon: "age" },
      { label: "Sold For", value: "$65,000", icon: "asking" },
      { label: "Profit Multiple", value: "0.53x", icon: "multiple" },
    ],
    askingPrice: 65000,
    speakHref: "#book-a-call",
    viewHref: "/deals/14",
  },
  {
    id: "15",
    recentlySold: true,
    platform: "Shopify",
    niche: "Home & Garden",
    title: "Shopify | Home & Garden",
    coverImage: "/assets/deals/solar-energy.webp",
    description:
      "An Approaching 2 Year Old Home Decor Automated Shopify Store. Total Revenue $720k | Total Net Profit $200k+. Fully Automated & Passive",
    verified: true,
    metrics: [
      { label: "TTM Revenue", value: "$711,631", icon: "revenue" },
      { label: "TTM Profit", value: "$193,659", icon: "profit" },
      { label: "Monthly Profit", value: "$16,138", icon: "monthly" },
      { label: "Business Age", value: "1.8 Years", icon: "age" },
      { label: "Sold For", value: "$160,000", icon: "asking" },
      { label: "Profit Multiple", value: "0.67x", icon: "multiple" },
    ],
    askingPrice: 160000,
    speakHref: "#book-a-call",
    viewHref: "/deals/15",
  },
  {
    id: "16",
    recentlySold: true,
    platform: "Shopify",
    niche: "Health & Beauty",
    title: "Shopify | Health & Beauty",
    coverImage: "/assets/deals/nurvate.jpg",
    description:
      "A Young & Exciting Health & Wellness Store. Total Revenue Generated $200k | Total Net Profit $29k+ | Full Team Included To Manage & Scale The Business.",
    verified: true,
    metrics: [
      { label: "TTM Revenue", value: "$205,720", icon: "revenue" },
      { label: "TTM Profit", value: "$29,566", icon: "profit" },
      { label: "Monthly Profit", value: "$9,855", icon: "monthly" },
      { label: "Business Age", value: "3 Months", icon: "age" },
      { label: "Sold For", value: "$29,999", icon: "asking" },
      { label: "Profit Multiple", value: "1x", icon: "multiple" },
    ],
    askingPrice: 29999,
    speakHref: "#book-a-call",
    viewHref: "/deals/16",
  },
  {
    id: "17",
    recentlySold: true,
    platform: "Shopify",
    niche: "Health & Beauty",
    title: "Shopify | Health & Beauty",
    coverImage: "/assets/deals/bluile.jpg",
    description:
      "A Fast-Growing Skincare Brand Built On A Proven, Custom Collagen Formula. Over $776K in sales & $137K profit With $38K+ Monthly Subscriptions",
    verified: true,
    metrics: [
      { label: "TTM Revenue", value: "$837,290", icon: "revenue" },
      { label: "TTM Profit", value: "$154,267", icon: "profit" },
      { label: "Monthly Profit", value: "$15,426", icon: "monthly" },
      { label: "Business Age", value: "10 Months", icon: "age" },
      { label: "Sold For", value: "$124,999", icon: "asking" },
      { label: "Profit Multiple", value: "0.81x", icon: "multiple" },
    ],
    askingPrice: 124999,
    speakHref: "#book-a-call",
    viewHref: "/deals/17",
  },
  {
    id: "18",
    recentlySold: true,
    platform: "Shopify",
    niche: "Design & Style",
    title: "Shopify | Design & Style",
    coverImage: "/assets/deals/jouvie.jpg",
    description:
      "A 2+ Year Old Watch Store With Stable & Consistent Profits. Total Revenue $2M | Total Net Profit $270k | Perfect For First Time Buyers",
    verified: true,
    metrics: [
      { label: "TTM Revenue", value: "$869,291", icon: "revenue" },
      { label: "TTM Profit", value: "$113,665", icon: "profit" },
      { label: "Monthly Profit", value: "$9,472", icon: "monthly" },
      { label: "Business Age", value: "2+ Years", icon: "age" },
      { label: "Sold For", value: "$99,999", icon: "asking" },
      { label: "Profit Multiple", value: "0.87x", icon: "multiple" },
    ],
    askingPrice: 99999,
    speakHref: "#book-a-call",
    viewHref: "/deals/18",
  },
  {
    id: "19",
    recentlySold: true,
    platform: "Shopify",
    niche: "Design & Style",
    title: "Shopify | Design & Style",
    coverImage: "/assets/deals/aussie tactix.jpg",
    description:
      "An 8 Month Old Fully Automated Dropshipping Clothing Store Selling In Australia. Total Revenue Exceeds $240k | Net Profit $44k | Stable & Consistent",
    verified: true,
    metrics: [
      { label: "TTM Revenue", value: "$322,452", icon: "revenue" },
      { label: "TTM Profit", value: "$58,999", icon: "profit" },
      { label: "Monthly Profit", value: "$7,374", icon: "monthly" },
      { label: "Business Age", value: "8 Months", icon: "age" },
      { label: "Sold For", value: "$22,500", icon: "asking" },
      { label: "Profit Multiple", value: "0.38x", icon: "multiple" },
    ],
    askingPrice: 22500,
    speakHref: "#book-a-call",
    viewHref: "/deals/19",
  },
  {
    id: "20",
    recentlySold: true,
    platform: "Shopify",
    niche: "Health & Beauty",
    title: "Shopify | Health & Beauty",
    coverImage: "/assets/deals/wake-loop.jpg",
    description:
      "An 8 Month Old Branded Health Store Selling Sleep Enhancing Watches. Total Revenue $118k | Total Net Profit $18k | Perfect For First Time Buyers",
    verified: true,
    metrics: [
      { label: "TTM Revenue", value: "$118,722", icon: "revenue" },
      { label: "TTM Profit", value: "$18,920", icon: "profit" },
      { label: "Monthly Profit", value: "$2,365", icon: "monthly" },
      { label: "Business Age", value: "8 Months", icon: "age" },
      { label: "Sold For", value: "$12,500", icon: "asking" },
      { label: "Profit Multiple", value: "1.51x", icon: "multiple" },
    ],
    askingPrice: 12500,
    speakHref: "#book-a-call",
    viewHref: "/deals/20",
  },
  {
    id: "21",
    recentlySold: true,
    platform: "Shopify",
    niche: "Health & Beauty",
    title: "Shopify | Health & Beauty",
    coverImage: "/assets/deals/ethale.jpg",
    description:
      "A 1+ Year Old Subscription-Based Supplement Store With Explosive Growth. Total Revenue Exceeds $1.1M Whilst Netting $190K+. Over $150K In Monthly Subscribers.",
    verified: true,
    metrics: [
      { label: "TTM Revenue", value: "$1,356,456", icon: "revenue" },
      { label: "TTM Profit", value: "$238,785", icon: "profit" },
      { label: "Monthly Profit", value: "$19,898", icon: "monthly" },
      { label: "Business Age", value: "1+ Year", icon: "age" },
      { label: "Sold For", value: "$285,000", icon: "asking" },
      { label: "Profit Multiple", value: "1.19x", icon: "multiple" },
    ],
    askingPrice: 285000,
    speakHref: "#book-a-call",
    viewHref: "/deals/21",
  },
  {
    id: "22",
    recentlySold: true,
    platform: "Shopify",
    niche: "Health & Beauty",
    title: "Shopify | Health & Beauty",
    coverImage: "/assets/deals/veluna.jpg",
    description:
      "A 9 Month Old Health & Wellness Store Selling Back Pain Relief Products. Total Revenue Exceeds $120k Whilst Profiting $18k | Perfect For First Time Buyers",
    verified: true,
    metrics: [
      { label: "TTM Revenue", value: "$124,503", icon: "revenue" },
      { label: "TTM Profit", value: "$18,081", icon: "profit" },
      { label: "Monthly Profit", value: "$2,260", icon: "monthly" },
      { label: "Business Age", value: "9 Months", icon: "age" },
      { label: "Sold For", value: "$14,999", icon: "asking" },
      { label: "Profit Multiple", value: "0.83x", icon: "multiple" },
    ],
    askingPrice: 14999,
    speakHref: "#book-a-call",
    viewHref: "/deals/22",
  },
  {
    id: "23",
    recentlySold: true,
    platform: "Shopify",
    niche: "Health & Beauty",
    title: "Shopify | Health & Beauty",
    coverImage: "/assets/deals/flexwrap.jpg",
    description:
      "A 6 Month Old Health & Wellness Brand With Explosive Growth. Revenue Of $1.8m Whilst Netting $231K In Profit.",
    verified: true,
    metrics: [
      { label: "TTM Revenue", value: "$1,886,676", icon: "revenue" },
      { label: "TTM Profit", value: "$231,003", icon: "profit" },
      { label: "Monthly Profit", value: "$38,500", icon: "monthly" },
      { label: "Business Age", value: "6 Months", icon: "age" },
      { label: "Sold For", value: "$199,999", icon: "asking" },
      { label: "Profit Multiple", value: "0.86x", icon: "multiple" },
    ],
    askingPrice: 199999,
    speakHref: "#book-a-call",
    viewHref: "/deals/23",
  },
  {
    id: "24",
    recentlySold: true,
    platform: "Shopify",
    niche: "Design & Style",
    title: "Shopify | Design & Style",
    coverImage: "/assets/deals/somnea.jpg",
    description:
      "A 10 Month Old Custom Store Selling High Quality Tank Tops For Men. Explosive Revenue Of $750k Whilst Netting $79k In Profit. Ready For Product Expansion",
    verified: true,
    metrics: [
      { label: "TTM Revenue", value: "$854,603", icon: "revenue" },
      { label: "TTM Profit", value: "$92,222", icon: "profit" },
      { label: "Monthly Profit", value: "$9,222", icon: "monthly" },
      { label: "Business Age", value: "10 Months", icon: "age" },
      { label: "Sold For", value: "$99,999", icon: "asking" },
      { label: "Profit Multiple", value: "1.08x", icon: "multiple" },
    ],
    askingPrice: 99999,
    speakHref: "#book-a-call",
    viewHref: "/deals/24",
  },
  {
    id: "25",
    recentlySold: true,
    platform: "Shopify",
    niche: "Home & Garden",
    title: "Shopify | Home & Garden",
    coverImage: "/assets/deals/elmbridge.jpg",
    description:
      "A 6 Month Old Dropshipping Brand In The Home Decor Niche | Total Revenue $275k | Total Profit $66k | Perfect For First Time Buyers",
    verified: true,
    metrics: [
      { label: "TTM Revenue", value: "$275,950", icon: "revenue" },
      { label: "TTM Profit", value: "$66,256", icon: "profit" },
      { label: "Monthly Profit", value: "$13,251", icon: "monthly" },
      { label: "Business Age", value: "6 Months", icon: "age" },
      { label: "Sold For", value: "$35,000", icon: "asking" },
      { label: "Profit Multiple", value: "0.52x", icon: "multiple" },
    ],
    askingPrice: 35000,
    speakHref: "#book-a-call",
    viewHref: "/deals/25",
  },
  {
    id: "26",
    recentlySold: true,
    platform: "Shopify",
    niche: "Design & Style",
    title: "Shopify | Design & Style",
    coverImage: "/assets/deals/r&b-builds.jpg",
    description:
      "An 11 Month Old Organic Dropshipping Store Selling Custom Lego Kits. Total Revenue Exceeds $70k | Net Profit $36k | Perfect For First Time Buyers",
    verified: true,
    metrics: [
      { label: "TTM Revenue", value: "$86,176", icon: "revenue" },
      { label: "TTM Profit", value: "$46,143", icon: "profit" },
      { label: "Monthly Profit", value: "$3,845", icon: "monthly" },
      { label: "Business Age", value: "11 Months", icon: "age" },
      { label: "Sold For", value: "$12,500", icon: "asking" },
      { label: "Profit Multiple", value: "0.27x", icon: "multiple" },
    ],
    askingPrice: 12500,
    speakHref: "#book-a-call",
    viewHref: "/deals/26",
  },
 {
    id: "30",
    platform: "Shopify | Other",
    niche: "Design & Style",
    title: "A Cash-Flowing Digital Product Business with Proven Demand",
    coverImage: "/assets/deals/card30.jpg",
    description:
      "An Approaching 3 Year Old Digital Product Store Selling In the Spiritual Niche. Total Revenue $3.3M | Total Net Profit $790k+ | Over 75k Customers.",
    verified: true,
    metrics: [
      { label: "TTM Revenue", value: "$1,933,474", icon: "revenue" },
      { label: "TTM Profit", value: "$393,854", icon: "profit" },
      { label: "Monthly Profit", value: "$32,821", icon: "monthly" },
      { label: "Business Age", value: "2+ Years", icon: "age" },
      { label: "Asking Price", value: "$285,000", icon: "asking" },
      { label: "Profit Multiple", value: "1.02x", icon: "multiple" },
    ],
    askingPrice: 399999,
    speakHref: "#book-a-call",
    viewHref: "/deals/30",
    businessOverview: {
      content:
        "A two-year-old direct-to-consumer digital brand operating with a fully on-demand delivery model. The business focuses on personalized, emotionally driven products supported by strong creative strategy and a streamlined backend system. It has generated approximately $1.9M in revenue and $394K in net profit over the trailing twelve months. With no physical inventory, logistics, or warehousing, the model remains lean, flexible, and highly scalable.",
      hasMore: true,
    },
    whyBuilt: {
      content:
        "The concept was built around creating a product that feels personal at scale, combining emotional appeal with performance marketing. Rather than competing in saturated physical product categories, the focus was on delivering meaningful digital experiences that naturally drive engagement and repeat purchases. The brand was designed to grow through creative positioning, strong messaging, and efficient acquisition systems, allowing it to scale quickly while maintaining high margins and customer connection.",
      hasMore: false,
    },
    revenueModel: {
      content:
        "Revenue is generated through a digital, on-demand model where each order is fulfilled after purchase, eliminating traditional supply chain constraints. Customer acquisition is driven primarily through Meta platforms (Facebook and Instagram), with a heavy focus on creative testing, rapid iteration, and scaling high-performing campaigns. Google Ads supports demand capture and retargeting, helping maximize conversion efficiency across the funnel.",
      hasMore: true,
    },
    whySelling: {
      content:
        "The sale is driven by strategic priorities rather than business performance. With the core systems now proven—consistent acquisition, stable operations, and strong profitability—the current owners are shifting focus toward other opportunities. Rather than dividing attention, the decision has been made to transition the business to a new owner who can fully dedicate time and resources to scaling it further and unlocking the next stage of growth.",
      hasMore: true,
    },
    howOperatesColumns: {
      marketingEngine: {
        title: "Marketing Engine",
        subtitle: "High-Volume Creative Testing & Funnel Optimization",
        intro: "Growth is driven by an aggressive and data-led creative testing framework:",
        bullets: [
          "~40 new creatives launched weekly across multiple angles",
          "Heavy focus on emotional hooks and conversion-driven messaging",
          "Rapid scaling of winning ads based on real-time performance",
          "Continuous iteration to combat creative fatigue and maintain efficiency",
        ],
        quote:
          "This approach creates a highly optimized acquisition engine where performance is driven by creative output and fast decision-making, rather than reliance on a single product or campaign.",
      },
      fulfilmentSupplyChain: {
        title: "Fulfilment & Supply Chain",
        subtitle: "Digital Delivery with Structured, Scalable Operations",
        intro: "The business operates without a traditional supply chain, as all products are delivered digitally. Once an order is placed, it is automatically routed into an internal workflow and assigned to the operations team.",
        bullets: [
          "Orders are received and organized through the system in real time",
          "AI-assisted processes generate personalized outputs at scale",
          "Virtual assistants review and finalize each delivery for quality control",
          "Completed orders are sent directly to customers via email within set timeframes"
        ],
        quote:
          "This model removes the need for inventory, shipping, or logistics, while still maintaining a high level of consistency and personalization. As automation continues to improve, the delivery process becomes even more efficient, increasing margins and reducing manual involvement over time.",
      },
    },
    keyFinancialMetrics: [
      { month: "Mar 2025", revenue: "$310,346", expenses: "$246,273", netProfit: "$64,073" },
      { month: "Apr 2025", revenue: "$270,708", expenses: "$215,912", netProfit: "$54,796" },
      { month: "May 2025", revenue: "$175,608", expenses: "$141,993", netProfit: "$33,615" },
      { month: "Jun 2025", revenue: "$105,713", expenses: "$92,767", netProfit: "$12,946" },
      { month: "Jul 2025", revenue: "$105,944", expenses: "$92,884", netProfit: "$13,060" },
      { month: "Aug 2025", revenue: "$126,014 ", expenses: "$101,631 ", netProfit: "$24,383" },
      { month: "Sep 2025", revenue: "$131,952 ", expenses: "$114,628", netProfit: "$17,324" },
      { month: "Oct 2025", revenue: "$124,663", expenses: "$107,317", netProfit: "$17,346" },
      { month: "Nov 2025", revenue: "$129,314", expenses: "$97,569", netProfit: "$31,745" },
      { month: "Dec 2025", revenue: "$191,272 ", expenses: "$126,280", netProfit: "$64,992" },
      { month: "Jan 2026", revenue: "$153,940", expenses: "$113,861", netProfit: "$40,079" },
      { month: "Feb 2026", revenue: "$108,000", expenses: "$88,505", netProfit: "$19,495" },
    ],
    heroTitle: "A Cash-Flowing Digital Product Business with Proven Demand",
    heroSubtitle: "Performance-Led Growth with Strong Customer Retention",
  },
 {
    id: "31",
    platform: "Shopify",
    niche: "Design & Style",
    title: "A Proven U.S. Jewelry E-Commerce Brand",
    coverImage: "/assets/deals/card31.jpg",
    description:
      "1-Year-Old Jewelry Brand. $3.6M+ Revenue. $722K Net Profit. Positioned for Continued Market Expansion.",
    verified: true,
    metrics: [
      { label: "TTM Revenue", value: "$3,660,305", icon: "revenue" },
      { label: "TTM Profit", value: "$722,578", icon: "profit" },
      { label: "Monthly Profit", value: "$60,214", icon: "monthly" },
      { label: "Business Age", value: "1+ Years", icon: "age" },
      { label: "Asking Price", value: "$285,000", icon: "asking" },
      { label: "Profit Multiple", value: "0.2x", icon: "multiple" },
    ],
    askingPrice: 124999,
    speakHref: "#book-a-call",
    viewHref: "/deals/31",
    businessOverview: {
      content:
        "A U.S.-focused direct-to-consumer jewelry brand targeting women aged 45+, a demographic known for strong purchasing power and consistent online engagement. The product range is centered around classic, wearable pieces designed for both daily use and gifting occasions.",
      hasMore: true,
    },
    whyBuilt: {
      content:
        "The business was developed to serve a high-value yet under-targeted segment: women over 45 who prioritize quality, comfort, and timeless style over fast-changing trends. The brand was built with a long-term approach, emphasizing customer connection, consistency in product offering, and a cohesive identity. This has allowed it to drive repeat purchases and establish a loyal customer base within a clearly defined market.",
      hasMore: false,
    },
    revenueModel: {
      content:
        "The business generates revenue through direct online sales of jewelry products, supported by a targeted approach to customer acquisition. Traffic is driven primarily through Meta advertising, where ongoing creative testing and campaign optimization are used to identify and scale winning ads. This structure allows for predictable growth while maintaining efficient marketing performance.",
      hasMore: true,
    },
    whySelling: {
      content:
        "The sale is driven by a strategic shift in the founders’ priorities, as they move focus and resources toward other ventures within their portfolio. Although the business continues to perform well, further growth would benefit from an owner dedicated to expanding marketing efforts and building on the brand’s existing foundation.",
      hasMore: true,
    },
    howOperatesColumns: {
      marketingEngine: {
        title: "Marketing Engine",
        subtitle: "Performance-Driven Paid Acquisition Framework",
        intro: "The marketing system is centered around:",
        bullets: [
          "Consistent testing of new creatives and product angles",
          " Iterating messaging to identify top-performing variations",
          "Scaling ad spend on campaigns that meet performance targets",
          "Ongoing adjustments based on campaign data and efficiency metrics",
        ],
        quote:
          "This approach supports steady, repeatable growth driven by structured testing rather than reliance on single winning products.",
      },
      fulfilmentSupplyChain: {
        title: "Fulfilment & Supply Chain",
        subtitle: "Streamlined Dropshipping & Supplier Network",
        intro: "The business operates through established third-party suppliers integrated directly with Shopify. Order Process:",
        bullets: [
          "Customer places order through the online storefront",
          " Order details are automatically transmitted to the supplier",
          "Supplier prepares, packages, and ships directly to the customer",
        ],
        quote:
          "This setup removes the need for inventory management, reduces operational workload, and enables efficient scaling under new ownership.",
      },
    },
    keyFinancialMetrics: [
      { month: "Mar 2025", revenue: "$40,3306", expenses: "$293,963", netProfit: "$109,343" },
      { month: "Apr 2025", revenue: "$711,086", expenses: "$539,728", netProfit: "$171,358" },
      { month: "May 2025", revenue: "$390,947", expenses: "$299,879", netProfit: "$91,068" },
      { month: "Jun 2025", revenue: "$254,313", expenses: "$198,527", netProfit: "$55,786" },
      { month: "Jul 2025", revenue: "$315,418", expenses: "$248,274", netProfit: "$67,144" },
      { month: "Aug 2025", revenue: "$262,832", expenses: "$214,899", netProfit: "$47,933" },
      { month: "Sep 2025", revenue: "$190,847", expenses: "$165,753", netProfit: "$25,094" },
      { month: "Oct 2025", revenue: "$172,427", expenses: "$160,157", netProfit: "$12,270" },
      { month: "Nov 2025", revenue: "$115,161", expenses: "$94,764", netProfit: "$20,397" },
      { month: "Dec 2025", revenue: "$246,722", expenses: "$192,104", netProfit: "$54,618" },
      { month: "Jan 2026", revenue: "$339,509", expenses: "$294,477", netProfit: "$45,032" },
      { month: "Feb 2026", revenue: "$257,737", expenses: "$235,202", netProfit: "$22,535" },
    ],
    heroTitle: "A Proven U.S. Jewelry E-Commerce Brand",
    heroSubtitle: "Profitable Women’s Lifestyle Jewelry Business",
  },
 {
    id: "32",
    platform: "Shopify",
    niche: "Design & Style",
    title: "A Scalable UK Jewelry Brand",
    coverImage: "/assets/deals/card32.jpg",
    description:
      "2-Year-Old Jewelry Brand. $470K+ TTM Revenue. $143K Net Profit. Positioned for Continued Market Expansion.",
    verified: true,
    metrics: [
      { label: "TTM Revenue", value: "$470,269", icon: "revenue" },
      { label: "TTM Profit", value: "$143,401", icon: "profit" },
      { label: "Monthly Profit", value: "$11,950", icon: "monthly" },
      { label: "Business Age", value: "2 Years", icon: "age" },
      { label: "Asking Price", value: "$99,999", icon: "asking" },
      { label: "Profit Multiple", value: "0.69x", icon: "multiple" },
    ],
    askingPrice: 999999,
    speakHref: "#book-a-call",
    viewHref: "/deals/32",
    businessOverview: {
      content:
        "A UK-focused fashion jewelry brand built as a scalable Shopify store offering stylish, affordable pieces designed for everyday wear and gifting. The business operates within one of Europe’s largest e-commerce markets and targets customers seeking trend-driven jewelry at accessible price points. The store was built with a lean structure designed for rapid product testing and trend responsiveness, allowing new styles and collections to be introduced quickly while maintaining strong margins.",
      hasMore: true,
    },
    whyBuilt: {
      content:
        "The brand was created to capture demand within the fashion jewelry market, a category known for strong online performance due to its emotional appeal, affordable price points, and frequent purchase behavior. By focusing on modern designs and accessible pricing, the store was designed to attract a broad audience while maintaining the flexibility to adapt quickly to changing fashion trends.",
      hasMore: false,
    },
    revenueModel: {
      content:
        "The business generates revenue through direct-to-consumer product sales via its Shopify storefront. Customers purchase individual jewelry pieces, with opportunities to increase order value through bundles and product collections. Because the catalog can be expanded quickly, the store is able to continuously introduce new styles that align with evolving fashion trends.",
      hasMore: true,
    },
    whySelling: {
      content:
        "The founders are transitioning their focus toward other ventures that now require the majority of their time and operational attention. While the business continues to operate smoothly, scaling the brand further would benefit from an owner focused on marketing optimization, creative testing, and growth strategy.",
      hasMore: true,
    },
    howOperatesColumns: {
      marketingEngine: {
        title: "Marketing Engine",
        subtitle: "Paid Advertising & Creative Testing Framework",
        intro: "The marketing system is built around:",
        bullets: [
          "Meta Ads (Facebook & Instagram) as the primary acquisition channel",
          "Continuous testing of new ad creatives and product angles",
          "Scaling high-performing campaigns based on performance data",
          "Complementary demand capture through Google Ads",
        ],
        quote:
          "This approach enables consistent customer acquisition while allowing campaigns to scale efficiently as winning creatives are identified.",
      },
      fulfilmentSupplyChain: {
        title: "Fulfilment & Supply Chain",
        subtitle: "Streamlined Dropshipping & Supplier Network",
        intro: "The business operates through established third-party suppliers integrated directly with Shopify. Order Process:",
        bullets: [
          "Customer places order through the online storefront",
          " Order details are automatically transmitted to the supplier",
          "Supplier prepares, packages, and ships directly to the customer",
        ],
        quote:
          "This structure eliminates inventory requirements, reduces operational overhead, and allows the business to scale without logistics constraints.",
      },
    },
    keyFinancialMetrics: [
      { month: "Mar 2025", revenue: "$18,872", expenses: "$12,671", netProfit: "$6,202" },
      { month: "Apr 2025", revenue: "$18,907", expenses: "$12,694", netProfit: "$6,213" },
      { month: "May 2025", revenue: "$13,907", expenses: "$10,457", netProfit: "$3,451" },
      { month: "Jun 2025", revenue: "$25,778", expenses: "$16,300", netProfit: "$9,478" },
      { month: "Jul 2025", revenue: "$45,218", expenses: "$29,553", netProfit: "$15,665" },
      { month: "Aug 2025", revenue: "$46,479", expenses: "$35,774", netProfit: "$10,705" },
      { month: "Sep 2025", revenue: "$31,963", expenses: "$25,235", netProfit: "$6,729" },
      { month: "Oct 2025", revenue: "$30,173", expenses: "$21,043", netProfit: "$9,130" },
      { month: "Nov 2025", revenue: "$68,795", expenses: "$44,586", netProfit: "$24,209" },
      { month: "Dec 2025", revenue: "$82,715", expenses: "$55,917", netProfit: "$26,798" },
      { month: "Jan 2026", revenue: "$51,027", expenses: "$36,749", netProfit: "$14,278" },
      { month: "Feb 2026", revenue: "$32,809", expenses: "$22,265", netProfit: "$10,544" },
    ],
    heroTitle: "A Scalable UK Jewelry Brand",
    heroSubtitle: " Fashion Jewelry E-Commerce Store",
  },
 {
    id: "33",
    platform: "Shopify",
    niche: "Health & Beauty",
    title: "A Fast-Growing Wellness Supplement Brand",
    coverImage: "/assets/deals/card33.jpg",
    description:
      "Approaching 1-Year-Old Vitality Supplement Business. $500K+ Revenue. $90K+ Net Profit. Driven by Consistent Snapchat Customer Acquisition.",
    verified: true,
    metrics: [
      { label: "TTM Revenue", value: "$506,629", icon: "revenue" },
      { label: "TTM Profit", value: "$90,051", icon: "profit" },
      { label: "Monthly Profit", value: "$8,186", icon: "monthly" },
      { label: "Business Age", value: "11 Months", icon: "age" },
      { label: "Asking Price", value: "$85,000", icon: "asking" },
      { label: "Profit Multiple", value: "0.9x", icon: "multiple" },
    ],
    askingPrice: 85000,
    speakHref: "#book-a-call",
    viewHref: "/deals/33",
    businessOverview: {
      content:
        "An 11-month-old direct-to-consumer supplement brand focused on high-demand wellness products within the U.S. market. The business centers around Shilajit, a trending health supplement with strong global demand and growing consumer awareness. Built on a lean e-commerce infrastructure, the brand has generated over $500K in revenue and $90K in net profit. With established supplier relationships, a streamlined fulfillment system, and a proven customer acquisition channel, the business operates efficiently while remaining highly scalable.",
      hasMore: true,
    },
    whyBuilt: {
      content:
        "The brand was created after identifying a strong gap between the rapidly growing demand for Shilajit supplements and the limited marketing presence within certain social advertising channels. While most competitors focused heavily on platforms like Facebook and TikTok, Snapchat remained largely untapped within the niche. By establishing an early presence on the platform, the business was able to capture attention in a less competitive environment and scale customer acquisition efficiently.",
      hasMore: false,
    },
    revenueModel: {
      content:
        "The business operates as a direct-to-consumer supplement store, generating revenue through online sales of Shilajit within the growing wellness market. Customer acquisition is driven primarily through Snapchat advertising, supported by structured creative testing. The store also includes a subscription model that generates recurring revenue from repeat customers.",
      hasMore: true,
    },
    whySelling: {
      content:
        "The decision to sell the business is strategic. The owners are reallocating their time and capital toward another venture within their portfolio that is currently experiencing rapid growth. While the business remains profitable with a proven acquisition model, it would benefit from an owner focused on expanding marketing channels and scaling operations further.",
      hasMore: true,
    },
    howOperatesColumns: {
      marketingEngine: {
        title: "Marketing Engine",
        subtitle: "Snapchat-Focused Creative Testing Framework",
        intro: "The marketing system is built around:",
        bullets: [
          "Snapchat as the primary customer acquisition channel",
          "Continuous testing of new ad creatives and messaging angles",
          "Scaling advertising spend on high-performing campaigns",
          "Ongoing optimization based on performance data",
        ],
        quote:
          "This creates a scalable acquisition model built around structured testing and repeatable campaign performance.",
      },
      fulfilmentSupplyChain: {
        title: "Fulfilment & Supply Chain",
        subtitle: "Automated Logistics & Inventory Infrastructure",
        intro: "The business operates through a dedicated logistics partner based in China. Order Process:",
        bullets: [
          "Customer places order through the online store",
          "Order automatically syncs with the fulfillment system",
          " Warehouse team processes, packs, and ships the product",
        ],
        quote:
          "This structure ensures reliable fulfillment, efficient inventory management, and a streamlined operational workflow for a new owner.",
      },
    },
    keyFinancialMetrics: [
      { month: "Apr 2025", revenue: "$6,482", expenses: "$7,927", netProfit: "-$1445" },
      { month: "May 2025", revenue: "$28,736", expenses: "$28,953", netProfit: "-$217" },
      { month: "Jun 2025", revenue: "$56,261", expenses: "$55,942", netProfit: "$314" },
      { month: "Jul 2025", revenue: "$67,694", expenses: "$57,014", netProfit: "$10,680" },
      { month: "Aug 2025", revenue: "$60,654", expenses: "$36,427", netProfit: "$24,227" },
      { month: "Sep 2025", revenue: "$54,668", expenses: "$45,881", netProfit: "$8,787" },
      { month: "Oct 2025", revenue: "$52,017", expenses: "$42,026", netProfit: "$9,991" },
      { month: "Nov 2025", revenue: "$56,683", expenses: "$51,636", netProfit: "$5,047" },
      { month: "Dec 2025", revenue: "$44,546", expenses: "$28,370", netProfit: "$16,176" },
      { month: "Jan 2026", revenue: "$44,201", expenses: "$37,457", netProfit: "$6,744" },
      { month: "Feb 2026", revenue: "$34,687", expenses: "$24,945", netProfit: "$9,742" },
    ],
    heroTitle: "A Fast-Growing Wellness Supplement Brand",
    heroSubtitle: "Health & Performance Shilajit Gummies E-Commerce Store",
  },
 {
    id: "34",
    platform: "Shopify",
    niche: "Home & Garden",
    title: "An Ecommerce Store Turning Home Decor Trends into Profit",
    coverImage: "/assets/deals/card34.jpg",
    description:
      "A 10 Month Old Dropshipping Store Selling Home Decor In UK Market | Total Revenue Exceeds $275k | Total Net Profit +$43k | Perfect To Scale",
    verified: true,
    metrics: [
      { label: "TTM Revenue", value: "$275,248", icon: "revenue" },
      { label: "TTM Profit", value: "$43,517", icon: "profit" },
      { label: "Monthly Profit", value: "$4,351", icon: "monthly" },
      { label: "Business Age", value: "10 Months", icon: "age" },
      { label: "Asking Price", value: "$24,999", icon: "asking" },
      { label: "Profit Multiple", value: "0.6x", icon: "multiple" },
    ],
    askingPrice: 24999,
    speakHref: "#book-a-call",
    viewHref: "/deals/34",
    businessOverview: {
      content:
        "This is a UK-based home decor ecommerce store built around visually appealing, trend-led products that convert well through paid traffic. The business focuses on items that are easy to market, simple to fulfill, and consistently in demand within a large and active market. In under a year, the store has generated over $275K in revenue and $43K+ in profit, validating both the product selection and acquisition strategy. The model remains lean, with no inventory held, allowing for flexible scaling without adding operational complexity.",
      hasMore: true,
    },
    whyBuilt: {
      content:
        "The business came from experience operating in other ecommerce niches, where higher return rates and operational friction made scaling more difficult. Home decor presented a more stable alternative—products with broader appeal, fewer returns, and stronger margins. It also aligned well with current content trends. Home-focused visuals perform consistently across platforms, making it easier to drive traffic and sales through both paid ads and organic exposure.",
      hasMore: false,
    },
    revenueModel: {
      content:
        "Revenue is driven primarily through Google Ads, which acts as the main source of consistent, high-intent traffic. Campaigns are already set up and optimized, providing a steady flow of customers and predictable performance. The model is flexible, allowing new products to be tested quickly and winning items to be scaled without upfront inventory. This makes it easy to adapt to trends while maintaining efficiency.",
      hasMore: true,
    },
    whySelling: {
      content:
        "The decision to sell is based on a shift toward more brand-focused ecommerce projects that require a different level of involvement. While the store continues to perform well, scaling it further would require ongoing attention within the current model. Rather than splitting focus, the business is being offered at a point where it is stable, profitable, and ready to be pushed further. For a new owner, the foundations are already in place with clear opportunities to scale.",
      hasMore: true,
    },
    howOperatesColumns: {
      marketingEngine: {
        title: "Marketing Engine",
        subtitle: "Consistent Testing & Scalable Acquisition",
        intro: "The growth strategy is built around a steady cycle of testing, refining, and scaling what works.",
        bullets: [
          "Ongoing product testing to identify new winners",
          "Multiple creative variations for each product",
          "Scaling budgets quickly on profitable campaigns",
          "Cutting underperforming ads early",
        ],
        quote:
          "Rather than relying on one-off products, this approach creates a steady pipeline of opportunities and more stable performance over time.",
      },
      fulfilmentSupplyChain: {
        title: "Fulfilment & Supply Chain",
        subtitle: "Lean Dropshipping Infrastructure",
        intro: "The store runs on a streamlined dropshipping setup, with orders automatically passed to a trusted supplier for fulfillment.",
        bullets: [
          "Customer places an order on the store",
          "Order is sent directly to the supplier",
          "Supplier handles packing and delivery",
        ],
        quote:
          "This setup removes the need for inventory, warehousing, or complex logistics, keeping operations simple and easy to manage while allowing the business to scale without added overhead.",
      },
    },
    keyFinancialMetrics: [
      { month: "May 2025", revenue: "$353", expenses: "$553", netProfit: "-$200" },
      { month: "Jun 2025", revenue: "$2,529", expenses: "$3,332", netProfit: "-$803" },
      { month: "Jul 2025", revenue: "$12,393", expenses: "$10,506", netProfit: "$1,887" },
      { month: "Aug 2025", revenue: "$37,777", expenses: "$27,849", netProfit: "$9,928" },
      { month: "Sep 2025", revenue: "$56,259", expenses: "$44,751", netProfit: "$11,508" },
      { month: "Oct 2025", revenue: "$63,231", expenses: "$54,435", netProfit: "$8,796" },
      { month: "Nov 2025", revenue: "$61,981", expenses: "$53,657", netProfit: "$8,324" },
      { month: "Dec 2025", revenue: "$20,136", expenses: "$19,414", netProfit: "$722" },
      { month: "Jan 2026", revenue: "$11,628", expenses: "$10,185", netProfit: "$1,443" },
      { month: "Feb 2026", revenue: "$8,961", expenses: "$7,049", netProfit: "$1,912" },
    ],
    heroTitle: "An Ecommerce Store Turning Home Decor Trends into Profit",
    heroSubtitle: "Products Designed to Convert in a Visual-First Market",
  },
 {
    id: "35",
    platform: "Shopify",
    niche: "Health & Beauty",
    title: "A Scalable Supplement Subscription Brand",
    coverImage: "/assets/deals/card35.jpg",
    description:
      "11-Month-Old Brand. $182K Revenue. $36K Net Profit. Proven Product with Significant Room to Scale.",
    verified: true,
    metrics: [
      { label: "TTM Revenue", value: "$182,054", icon: "revenue" },
      { label: "TTM Profit", value: "$36,556", icon: "profit" },
      { label: "Monthly Profit", value: "$3,323", icon: "monthly" },
      { label: "Business Age", value: "11 Months", icon: "age" },
      { label: "Asking Price", value: "$19,999", icon: "asking" },
      { label: "Profit Multiple", value: "0.5x", icon: "multiple" },
    ],
    askingPrice: 19999,
    speakHref: "#book-a-call",
    viewHref: "/deals/35",
    businessOverview: {
      content:
        "A fast-growing direct-to-consumer supplement brand operating in the NAD+ and longevity space. The business focuses on delivering a simple, high-demand product in a format designed for daily use and long-term customer retention. To date, the brand has generated $182K in revenue and $36K in net profit, supported by consistent paid acquisition and repeat purchasing behavior. With lean operations and a streamlined backend, the business is structured for ease of management and efficient scaling.",
      hasMore: true,
    },
    whyBuilt: {
      content:
        "The idea originated from the gap between high-cost clinical NAD+ treatments and the limited availability of accessible alternatives for everyday consumers. The goal was to reposition the product into a more convenient, affordable format without compromising on perceived value. From the outset, the brand was built to align with the growing interest in longevity, energy, and wellness. Emphasis was placed on creating a product that fits naturally into daily routines, encouraging repeat usage and building a foundation for long-term customer value.",
      hasMore: false,
    },
    revenueModel: {
      content:
        "Revenue is generated through a direct-to-consumer model, with sales driven via the online storefront. The product is designed for ongoing use, naturally encouraging repeat purchases and consistent customer lifetime value. Traffic is acquired primarily through Meta advertising, where campaigns are tested, refined, and scaled based on performance. This creates a system where growth is driven by identifying winning creatives and increasing spend on profitable campaigns, supported by returning customers.",
      hasMore: true,
    },
    whySelling: {
      content:
        "The decision to sell comes down to prioritization rather than performance. The business has established a solid base, but scaling it further requires dedicated time and focus that the current owner is unable to commit. With attention shifting toward other opportunities, the brand is being transitioned to a new owner who can fully capitalize on its existing momentum. The underlying systems and product-market fit are already in place, providing a clear path for continued growth.",
      hasMore: true,
    },
    howOperatesColumns: {
      marketingEngine: {
        title: "Marketing Engine",
        subtitle: "Performance-Led Creative Testing & Scaling System",
        intro: "The marketing system is built around:",
        bullets: [
          "Ongoing testing of new creative concepts and messaging",
          "Exploring multiple angles to identify top-performing ads",
          "Increasing spend on campaigns that meet efficiency targets",
          "Continuously refining and cutting underperforming variations",
        ],
        quote:
          "This approach enables steady, data-driven growth without relying on one-off winning products or short-term spikes.",
      },
      fulfilmentSupplyChain: {
        title: "Fulfilment & Supply Chain",
        subtitle: "Integrated Supplier & Automated Order Handling",
        intro: "The business operates with a dedicated supplier managing production and fulfillment. Order Process:",
        bullets: [
          "Customer completes purchase through the store",
          "Order information is automatically sent to the supplier",
          "Supplier handles packing and direct delivery to the customer",
        ],
        quote:
          "This setup removes the need for inventory management, reduces operational involvement, and allows for smooth handover to a new owner.",
      },
    },
    keyFinancialMetrics: [
      { month: "April 2025", revenue: "$24,429", expenses: "$27,605", netProfit: "-$3,176" },
      { month: "May 2025", revenue: "$35,902", expenses: "$36,800", netProfit: "-$898" },
      { month: "Jun 2025", revenue: "$20,288", expenses: "$12,632", netProfit: "$7,656" },
      { month: "Jul 2025", revenue: "$18,502", expenses: "$13,165", netProfit: "$5,337" },
      { month: "Aug 2025", revenue: "$16,541", expenses: "$11,161", netProfit: "$5,380" },
      { month: "Sep 2025", revenue: "$17,695", expenses: "$15,242", netProfit: "$2,453" },
      { month: "Oct 2025", revenue: "$15,860", expenses: "$11,607", netProfit: "$4,253" },
      { month: "Nov 2025", revenue: "$14,439", expenses: "$9,004", netProfit: "$5,435" },
      { month: "Dec 2025", revenue: "$8,196", expenses: "$3,632", netProfit: "$4,564" },
      { month: "Jan 2026", revenue: "$6,078", expenses: "$2,986", netProfit: "$3,092" },
      { month: "Feb 2026", revenue: "$4,124", expenses: "$1,664", netProfit: "$2,460" },
    ],
    heroTitle: "A Scalable Supplement Subscription Brand",
    heroSubtitle: "Longevity-Focused NAD+ Gummy Business",
  },
];
