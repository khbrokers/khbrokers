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
  priceRange: { label: "Price Range", min: 10000, max: 5000000, step: 10000 },
  annualProfit: { label: "Annual Profit (TTM)", min: 5000, max: 1500000, step: 1000 },
  annualRevenue: { label: "Annual Revenue (TTM)", min: 50000, max: 10000000, step: 50000 },
  businessAge: { label: "Business Age", min: 0, max: 10, step: 1, suffix: " years" },
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
    id: "2",
    recentlySold: true,
    platform: "Shopify",
    niche: "Home & Garden",
    title: "Shopify | Home & Garden",
    coverImage: "/assets/sellers_landing/whysell/card02.png",
    description:
      "Eco-Friendly Home Decor Brand. Strong organic traffic, loyal customer base, and scalable product line with multiple revenue streams.",
    verified: true,
    metrics: [
      { label: "TTM Revenue", value: "$890,000", icon: "revenue" },
      { label: "TTM Profit", value: "$142,400", icon: "profit" },
      { label: "Monthly Profit", value: "$11,867", icon: "monthly" },
      { label: "Business Age", value: "4 Years", icon: "age" },
      { label: "Asking Price", value: "$355,000", icon: "asking" },
      { label: "Profit Multiple", value: "2.5x", icon: "multiple" },
    ],
    askingPrice: 355000,
    speakHref: "#book-a-call",
    viewHref: "/deals/2",
    businessOverview: {
      content:
        "Eco-Friendly Home Decor Brand with 4-year track record. Strong organic traffic, loyal customer base, and scalable product line with multiple revenue streams. $890K TTM revenue and $142K net profit. Sustainable positioning in growing home & garden category.",
      hasMore: true,
    },
    whyBuilt: {
      content:
        "Built to address demand for sustainable home products. The brand combines environmental values with strong design and community appeal. Story-driven positioning for conscious consumers seeking eco-friendly alternatives.",
      hasMore: false,
    },
    revenueModel: {
      content:
        "DTC model via Shopify. Primary traffic from organic search and Pinterest, with Meta and Google Ads for paid acquisition. Strong repeat purchase rate and subscription options for recurring revenue.",
      hasMore: true,
    },
    whySelling: {
      content:
        "Strategic exit after building a profitable, scalable brand. Owner is reallocating capital toward new ventures. Business is ready for transition with documented processes and systems.",
      hasMore: true,
    },
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
    id: "4",
    platform: "Shopify",
    niche: "Pet",
    title: "Shopify | Pet",
    coverImage: "/assets/sellers_landing/whysell/card04.png",
    description:
      "Premium Pet Food & Supplements. Subscription model with high LTV, established brand in growing pet wellness category.",
    verified: true,
    metrics: [
      { label: "TTM Revenue", value: "$620,000", icon: "revenue" },
      { label: "TTM Profit", value: "$93,000", icon: "profit" },
      { label: "Monthly Profit", value: "$7,750", icon: "monthly" },
      { label: "Business Age", value: "2 Years", icon: "age" },
      { label: "Asking Price", value: "$232,500", icon: "asking" },
      { label: "Profit Multiple", value: "2.5x", icon: "multiple" },
    ],
    askingPrice: 232500,
    speakHref: "#book-a-call",
    viewHref: "/deals/4",
    recentlySold: true,
    businessOverview: {
      content:
        "Premium Pet Food & Supplements with 2-year track record. Subscription model with high LTV, established brand in growing pet wellness category. $620K TTM revenue and $93K net profit.",
      hasMore: true,
    },
    whyBuilt: {
      content:
        "Built to serve the growing pet wellness market. Combines premium positioning with subscription economics. Strong brand loyalty and repeat purchase behavior in a recession-resistant category.",
      hasMore: false,
    },
    revenueModel: {
      content:
        "DTC subscription model via Shopify. Primary acquisition through Meta and influencer partnerships. Strong retention and predictable recurring revenue from subscription base.",
      hasMore: true,
    },
    whySelling: {
      content:
        "Strategic exit after building a profitable subscription model. Owner is focusing on other ventures. Business has clear systems and growth runway for new owner.",
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
];
