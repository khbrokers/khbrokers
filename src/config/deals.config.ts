export const dealsBookCallConfig = {
  heading: {
    before: "Unlock Full Brand Details & ",
    highlight: "Private Walkthrough",
  },
  subheading:
    "The business URL, backend overview, and deeper operational insights are disclosed during a private investor call.",
  calEmbedSlug: "khbrokers/brand-reveal",
  calPrimaryColor: "#ebdefc",
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
  annualRevenue: { label: "Annual Revenue (TTM)", min: 0, max: 10000000, step: 50000 },
  businessAge: { label: "Site Age", min: 0, max: 36, step: 1, suffix: "" },
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
  mobileImage?: string;
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
  /** Optional: Path to downloadable file (e.g. P&L statement PDF) in /public */
  downloadfile?: string;
}

export const mockDeals: Deal[] = [
  {
    id: "54",
    platform: "Shopify",
    niche: "Health & Beauty",
    title: "A Proven Solution to a High-Frequency Consumer Problem",
    coverImage: "/assets/deals/card54.jpg",
    description:
      "Targeting Millions of Aligner, Retainer, and Dental Appliance Users. $80K+ Revenue. 25% Margins. Subscription Upside With Clear Scale Potential",
    verified: true,
    metrics: [
      { label: "TTM Revenue", value: "$80,563", icon: "revenue" },
      { label: "TTM Profit", value: "$20,153", icon: "profit" },
      { label: "Monthly Profit", value: "$5,038", icon: "monthly" },
      { label: "Site Age", value: "4 Months", icon: "age" },
      { label: "Asking Price", value: "$30,000", icon: "asking" },
      { label: "Profit Multiple", value: "1.5x", icon: "multiple" },
    ],
    askingPrice: 30000,
    speakHref: "#book-a-call",
    viewHref: "/deals/54",
    businessOverview: {
      content:
        "A fast-growing oral care business centered around a high-margin, problem-solving product within the dental hygiene space. The brand targets a large and expanding audience of aligner, retainer, and dental appliance users, offering a simple, effective solution that integrates easily into daily routines. The model is lean by design, with minimal operational overhead and a strong focus on performance-driven growth. In a short period, the business has generated over $80K in revenue with $20K+ in profit, maintaining healthy margins and consistent demand. The foundation is built for scalability, with clear pathways to expand both revenue and product offering without increasing complexity.",
      hasMore: true,
    },
    whyBuilt: {
      content:
        "The business was created to address a clear gap between professional-grade dental cleaning and everyday consumer habits. While millions of people invest heavily in dental treatments, the ongoing care and maintenance of these products remains underserved, often relying on ineffective or damaging methods. By introducing a more advanced yet accessible solution, the business bridges this gap with a product that delivers both convenience and tangible value. The concept is rooted in solving a real, recurring problem, which naturally supports repeat usage and long-term customer retention. This positions the business within a growing category where awareness is still developing, creating strong upside as adoption increases.",
      hasMore: false,
    },
    revenueModel: {
      content:
        "Revenue is generated through a direct-to-consumer eCommerce model, with products sold through a streamlined online storefront. The primary driver of sales is paid acquisition, particularly through Meta advertising, where campaigns are structured around education, demonstration, and clear problem-solution messaging. In addition to one-time purchases, the business has introduced a subscription component for consumable products, creating an opportunity for recurring revenue and increased customer lifetime value. Google Ads and retargeting campaigns support demand capture and conversion optimization, while the overall model remains flexible and easy to scale as new channels are introduced.",
      hasMore: true,
    },
    whySelling: {
      content:
        "The decision to sell is based on focus and resource allocation rather than performance. The business has reached a point where further growth requires more consistent attention across marketing, product expansion, and operational oversight. With other commitments taking priority, the current owner is unable to dedicate the level of focus needed to fully capitalize on the opportunity. Rather than limiting its trajectory, the business is being transitioned to a new owner who can scale it more aggressively. With validated demand, strong margins, and multiple growth levers already identified, the business presents a compelling opportunity for expansion under dedicated ownership.",
      hasMore: true,
    },
    howOperatesColumns: {
      marketingEngine: {
        title: "Marketing Engine",
        subtitle: "Structured Creative Testing & Scaling Framework",
        intro: "Customer acquisition is built around a performance-driven system that prioritizes speed, clarity of messaging, and continuous iteration. Rather than relying on isolated winning creatives, the approach focuses on consistently introducing new angles tied directly to a clear, problem-solution narrative within the dental care space. The marketing system is built around:",
        bullets: [
          "Ongoing creative testing aligned with real customer pain points",
          "Multiple messaging angles targeting different use cases and audiences",
          "Fast budget allocation toward proven, high-converting campaigns",
          "Immediate optimization and removal of underperforming assets",
        ],
        quote:
          "This approach creates a scalable and repeatable growth engine, where performance improves over time as more data is collected. It reduces reliance on short-term trends and instead builds a stable foundation for consistent customer acquisition. This enables sustainable scaling driven by systemized testing rather than unpredictable creative wins.",
      },
      fulfilmentSupplyChain: {
        title: "Fulfilment & Supply Chain",
        subtitle: "Fully Automated Infrastructure With Built-In Flexibility",
        intro: "Operations are designed to remain lean while supporting reliable fulfillment and a strong customer experience. The business works with established third-party suppliers, allowing orders to flow seamlessly from purchase to delivery without manual involvement. The process is simple and efficient:",
        bullets: [
          "Customer places order through the storefront",
          "Order is automatically transmitted to the supplier",
          "Supplier handles production, packing, and shipping",
        ],
        quote:
          "This structure minimizes operational complexity and keeps overhead low, while maintaining consistency in delivery and product quality. The current setup also provides flexibility to evolve—whether through increased domestic inventory or faster shipping solutions—as the business scales. This model reduces operational risk, preserves capital, and allows for straightforward expansion under new ownership.",
      },
    },
    keyFinancialMetrics: [
      { month: "Dec 2025", revenue: "$646", expenses: "$266", netProfit: "$380" },
      { month: "Jan 2026", revenue: "$894", expenses: "$1,938", netProfit: "-$1,044" },
      { month: "Feb 2026", revenue: "$6,815", expenses: "$7,196", netProfit: "-$381" },
      { month: "Mar 2026", revenue: "$72,208", expenses: "$51,010", netProfit: "$21,198" },
    ],
    downloadfile: "/assets/deals/54PL-Mar-Br.xlsx",
    heroTitle: "A Proven Solution to a High-Frequency Consumer Problem",
    heroSubtitle: "Targeting Millions of Aligner, Retainer, and Dental Appliance Users",
  },
 {
    id: "50",
    platform: "Shopify",
    niche: "Health & Beauty",
    title: "A High-Demand Beauty Product With Proven Demand",
    coverImage: "/assets/deals/card50.jpg",
    description:
      "Simple, High-Converting Product Backed by Repeatable Paid Acquisition. $896K Revenue. $89K Profit. Lean Model With Clear Scaling Opportunities.",
    verified: true,
    metrics: [
      { label: "TTM Revenue", value: "$896,833", icon: "revenue" },
      { label: "TTM Profit", value: "$89,915", icon: "profit" },
      { label: "Monthly Profit", value: "$7,492", icon: "monthly" },
      { label: "Site Age", value: "1+ Year", icon: "age" },
      { label: "Asking Price", value: "$30,000", icon: "asking" },
      { label: "Profit Multiple", value: "0.3x", icon: "multiple" },
    ],
    askingPrice: 30000,
    speakHref: "#book-a-call",
    viewHref: "/deals/50",
    businessOverview: {
      content:
        "This is a direct-to-consumer beauty business built around a focused, high-demand product designed to deliver visible results without unnecessary complexity. Positioned within the broader self-care market, it targets a wide audience looking for simple, non-invasive solutions that can be easily integrated into daily routines. Over the past 12 months, the business has generated consistent revenue while maintaining a lean operational structure. Growth has been driven through paid acquisition and strong product-market alignment, allowing for scale without operational friction. With automated fulfillment and minimal overhead, the business is efficient by design and well-positioned for further expansion.",
      hasMore: true,
    },
    whyBuilt: {
      content:
        "The business was created based on a clear consumer insight: most people want effective results, but are discouraged by expensive treatments or complicated routines that require time and consistency. Instead of competing with complexity, the product was designed around ease and practicality—something customers can realistically use and maintain. By removing friction and aligning with everyday behavior, the offering quickly resonated with a broad audience. This simplicity became the core advantage. A clear problem, a straightforward solution, and messaging that directly connects with the end user—allowing the business to validate demand early and scale through focused execution.",
      hasMore: false,
    },
    revenueModel: {
      content:
        "Revenue is driven primarily through paid social advertising, using a structured, creative-led approach to customer acquisition. Campaigns are built around testing multiple angles, hooks, and formats, then scaling the highest-performing creatives. The model is based on iteration rather than reliance on a single winning asset. New creatives are continuously introduced, performance is tracked closely, and budget is allocated dynamically. This creates a more predictable and controllable growth engine. Additional upside exists through backend improvements. Opportunities such as funnel optimization, upsells, and retention channels (email/SMS) are not fully leveraged, providing clear pathways to increase both conversion rates and overall profitability.",
      hasMore: true,
    },
    whySelling: {
      content:
        "The decision to sell is driven by focus rather than necessity. The business continues to perform consistently, with a validated product and a functioning acquisition system already in place. However, unlocking the next stage of growth requires more dedicated attention across marketing, creative scaling, and expansion initiatives. With time and resources currently allocated elsewhere, it makes more sense to transition ownership. This creates an opportunity for a new operator to step into an established, revenue-generating business with strong fundamentals and clear, actionable growth levers.",
      hasMore: true,
    },
    howOperatesColumns: {
      marketingEngine: {
        title: "Marketing Engine",
        subtitle: "Performance-Led Creative System Built for Scalable Growth",
        intro: "Customer acquisition is driven by a disciplined, data-first approach to creative testing and iteration. Rather than relying on single winning ads, the system is designed to consistently produce, validate, and scale new concepts across multiple angles and audience segments. At its core, the process focuses on:",
        bullets: [
          "Continuous introduction of new creatives and hooks",
          "Testing variations to identify high-converting messaging",
          "Rapid budget allocation toward proven performers",
          "Immediate optimization or removal of underperforming assets",
        ],
        quote:
          "This structured approach creates a repeatable acquisition engine that can be scaled with confidence. As creative volume increases, so does the ability to unlock new audiences and extend campaign longevity—reducing volatility and enabling more predictable revenue growth.",
      },
      fulfilmentSupplyChain: {
        title: "Fulfilment & Supply Chain",
        subtitle: "Lean, Reliable Infrastructure Designed for Scale",
        intro: "The operational backbone is built around a trusted network of fulfillment partners, enabling a streamlined, hands-off order process from purchase through delivery. Orders are automatically routed, processed, and shipped without manual intervention, allowing the business to operate efficiently at scale. The current setup prioritizes:",
        bullets: [
          "Consistent product quality through established supplier relationships",
          "Reliable processing and shipping timelines",
          "Low operational overhead with minimal day-to-day management",
        ],
        quote:
          "Importantly, the infrastructure is designed to evolve alongside growth. As volume increases, there is clear optionality to transition into faster shipping methods or localized fulfillment solutions, further improving customer experience and margins. Overall, the supply chain is stable, flexible, and built to support higher throughput without requiring operational reinvention—making it highly transferable and immediately scalable for a new owner.",
      },
    },
    keyFinancialMetrics: [
      { month: "Apr 2025", revenue: "$49,501", expenses: "$44,854", netProfit: "$4,647" },
      { month: "May 2025", revenue: "$79,305", expenses: "$71,841", netProfit: "$7,464" },
      { month: "Jun 2025", revenue: "$74,215", expenses: "$65,107", netProfit: "$9,108" },
      { month: "Jul 2025", revenue: "$100,152", expenses: "$90,445", netProfit: "$9,707" },
      { month: "Aug 2025", revenue: "$119,115", expenses: "$103,882", netProfit: "$15,233" },
      { month: "Sep 2025", revenue: "$96,835", expenses: "$89,880", netProfit: "$6,955" },
      { month: "Oct 2025", revenue: "$107,360", expenses: "$99,555", netProfit: "$7,805" },
      { month: "Nov 2025", revenue: "$89,857", expenses: "$76,789", netProfit: "$13,068" },
      { month: "Dec 2025", revenue: "$82,388", expenses: "$74,802", netProfit: "$7,586" },
      { month: "Jan 2026", revenue: "$76,215", expenses: "$70,356", netProfit: "$5,859" },
      { month: "Feb 2026", revenue: "$20,418", expenses: "$19,085", netProfit: "$1,333" },
      { month: "Mar 2026", revenue: "$1,472", expenses: "$322", netProfit: "$1,150" },
    ],
    downloadfile: "/assets/deals/50PL-Mar-EB.xlsx",
    heroTitle: "A High-Demand Beauty Product With Proven Demand",
    heroSubtitle: "Simple, High-Converting Product Backed by Repeatable Paid Acquisition",
  },
 {
    id: "51",
    platform: "Shopify",
    niche: "Health & Beauty",
    title: "A Market-Validated Skincare Brand With Scalable Economics",
    coverImage: "/assets/deals/card51.jpg",
    description:
      "Validated Product, Repeatable Acquisition, and Strong Market Demand. $1.6M+ Revenue. $200K+ Profit. Consistent Performance With Clear Upside.",
    verified: true,
    metrics: [
      { label: "TTM Revenue", value: "$1,608,796", icon: "revenue" },
      { label: "TTM Profit", value: "$202,280", icon: "profit" },
      { label: "Monthly Profit", value: "$16,856", icon: "monthly" },
      { label: "Site Age", value: "1+ Year", icon: "age" },
      { label: "Asking Price", value: "$285,000", icon: "asking" },
      { label: "Profit Multiple", value: "1.4x", icon: "multiple" },
    ],
    askingPrice: 285000,
    speakHref: "#book-a-call",
    viewHref: "/deals/51",
    businessOverview: {
      content:
        "This is a direct-to-consumer skincare brand built around a single clear promise: delivering visible results without unnecessary complexity. The business focuses on high-demand anti-aging solutions, positioned to appeal to a broad audience seeking simple, effective alternatives to traditional multi-step routines. Over the past year, the brand has demonstrated consistent performance, supported by strong unit economics and a lean operating model. Revenue has scaled through paid acquisition while maintaining healthy margins, with minimal operational overhead due to a streamlined fulfillment setup. The business is structured to remain efficient while supporting continued growth.",
      hasMore: true,
    },
    whyBuilt: {
      content:
        "The brand was created in response to a clear gap between what customers want and what most skincare products deliver. Many consumers are overwhelmed by overly complicated routines that require time, consistency, and multiple products to see results. At the same time, there is strong demand for solutions that are both effective and easy to integrate into everyday life. This insight shaped the direction of the business. Rather than competing on breadth, the focus was on clarity—offering a product that solves a specific problem in a straightforward way. By aligning product design, messaging, and marketing around this simplicity, the brand was able to resonate quickly with its target audience and build traction early.",
      hasMore: false,
    },
    revenueModel: {
      content:
        "The business operates on a direct-response model, with paid media driving the majority of customer acquisition. Campaigns are structured around continuous creative testing, allowing the brand to identify high-performing angles and scale them efficiently. This approach enables consistent revenue generation without relying on seasonal spikes or one-off trends. On the backend, the model is designed to maximize value per customer through strong product positioning and upsell opportunities. While acquisition is the primary driver, there is additional upside through retention channels such as email and repeat purchasing behavior, which remain under-optimized and present clear growth potential.",
      hasMore: true,
    },
    whySelling: {
      content:
        "The decision to sell is based on prioritization rather than performance. The business is stable, profitable, and operating efficiently, but scaling it further requires a higher level of focus and execution than can currently be allocated. Rather than maintaining it at its current level, the intention is to transition ownership to someone positioned to fully capitalize on its potential. With proven demand, established systems, and clear expansion opportunities, the business is well-suited for an operator looking to step into a functioning asset and drive the next phase of growth.",
      hasMore: true,
    },
    howOperatesColumns: {
      marketingEngine: {
        title: "Marketing Engine",
        subtitle: "Performance-Led Acquisition System",
        intro: "Customer acquisition is driven by a disciplined, data-first testing framework rather than guesswork or trend dependency. The business is built around identifying and scaling winning creatives quickly, allowing for consistent performance even as market conditions shift. At its core, the system focuses on:",
        bullets: [
          "Continuous creative iteration and testing cycles",
          "Multiple positioning angles per core offer",
          "Fast capital allocation into proven performers",
          "Immediate removal of underperforming campaigns",
        ],
        quote:
          "This approach creates a repeatable acquisition engine where growth is driven by process, not single-product volatility. As a result, the business has been able to maintain stable performance while still unlocking new scaling opportunities through creative expansion.",
      },
      fulfilmentSupplyChain: {
        title: "Fulfilment & Supply Chain",
        subtitle: "Lean, Scalable, Operator-Friendly Infrastructure",
        intro: "The operational side of the business is intentionally lightweight, designed to support scale without introducing complexity. A dedicated third-party partner manages sourcing, order processing, and global fulfillment, allowing the business to operate without internal logistics overhead. The order flow is fully streamlined:",
        bullets: [
          "Orders are captured and automatically routed to the fulfillment partner",
          "Products are prepared, packed, and dispatched directly to customers",
          "Tracking and delivery updates are handled within the system",
        ],
        quote:
          "This structure keeps working capital requirements low while maintaining flexibility to scale volume quickly. It also provides a clear pathway for optimization—whether through faster shipping solutions or transitioning to localized fulfillment as the business grows.",
      },
    },
    keyFinancialMetrics: [
      { month: "Apr 2025", revenue: "$195,696", expenses: "$194,170", netProfit: "$1,526" },
      { month: "May 2025", revenue: "$133,345", expenses: "$136,475", netProfit: "-$3,130" },
      { month: "Jun 2025", revenue: "$97,792", expenses: "$89,186", netProfit: "$8,606" },
      { month: "Jul 2025", revenue: "$156,555", expenses: "$141,097", netProfit: "$15,458" },
      { month: "Aug 2025", revenue: "$143,919", expenses: "$110,722", netProfit: "$33,197" },
      { month: "Sep 2025", revenue: "$135,635", expenses: "$106,378", netProfit: "$29,257" },
      { month: "Oct 2025", revenue: "$137,261", expenses: "$116,620", netProfit: "$20,641" },
      { month: "Nov 2025", revenue: "$131,966", expenses: "$105,400", netProfit: "$26,566" },
      { month: "Dec 2025", revenue: "$140,099", expenses: "$115,642", netProfit: "$24,457" },
      { month: "Jan 2026", revenue: "$129,922", expenses: "$114,870", netProfit: "$15,052" },
      { month: "Feb 2026", revenue: "$106,556", expenses: "$84,654", netProfit: "$21,902" },
      { month: "Mar 2026", revenue: "$100,050", expenses: "$91,302", netProfit: "$8,748" },
    ],
    downloadfile: "/assets/deals/51PL-Mar-Los.xlsx",
    heroTitle: "A Market-Validated Skincare Brand With Scalable Economics",
    heroSubtitle: "Validated Product, Repeatable Acquisition, and Strong Market Demand",
  },
 {
    id: "52",
    platform: "Shopify",
    niche: "Health & Beauty",
    title: "A High-Quality Beauty & Wellness Brand",
    coverImage: "/assets/deals/card52.jpg",
    description:
      "Proven Skincare Market Fit With Significant Room to Expand Channels Further. $465K+ Revenue. $66K+ Profit. 14% Margin. Proven Paid Acquisition Engine.",
    verified: true,
    metrics: [
      { label: "TTM Revenue", value: "$465,204", icon: "revenue" },
      { label: "TTM Profit", value: "$66,874", icon: "profit" },
      { label: "Monthly Profit", value: "$6,687", icon: "monthly" },
      { label: "Site Age", value: "10 Months", icon: "age" },
      { label: "Asking Price", value: "$64,999", icon: "asking" },
      { label: "Profit Multiple", value: "1x", icon: "multiple" },
    ],
    askingPrice: 64999,
    speakHref: "#book-a-call",
    viewHref: "/deals/52",
    businessOverview: {
      content:
        "This is a new but already proven direct-to-consumer brand operating in the beauty and wellness space, built around a focused product that converts consistently and scales efficiently. In under a year, the business has generated over $465K in revenue while maintaining stable profitability, validating both demand and execution. Rather than relying on a broad catalog, the model is intentionally concentrated—allowing for tighter control over margins, clearer positioning, and faster decision-making. With a working acquisition engine and supplier infrastructure already in place, the business is set up to grow without adding unnecessary complexity.",
      hasMore: true,
    },
    whyBuilt: {
      content:
        "The idea behind the brand came from a simple observation: most products in this category either overpromise or overcomplicate. There was an opportunity to do the opposite—offer something straightforward, effective, and easy to integrate into everyday routines. Early testing confirmed that simplicity itself was the advantage. Customers responded to clear messaging, visible results, and a product that didn't require explanation. From there, the brand was shaped around that principle—keeping the offer tight, the positioning clear, and the experience frictionless. What started as a single concept evolved into a repeatable system for identifying and scaling what actually resonates.",
      hasMore: false,
    },
    revenueModel: {
      content:
        "Revenue is driven through a performance-focused approach, where creative testing sits at the center of growth. Instead of relying on static campaigns, the business continuously rotates new angles, hooks, and formats to stay ahead of fatigue and maintain efficiency. This allows winning creatives to be identified quickly and scaled with confidence. Combined with strong product margins and opportunities for bundling, the model supports both steady cash flow and scalable upside. Growth is not dependent on one-off trends, but on a process that can be repeated and expanded.",
      hasMore: true,
    },
    whySelling: {
      content:
        "While it continues to perform and operate smoothly, it has reached a point where further growth would benefit from more dedicated attention. With time being allocated across multiple ventures, the decision has been made to step back rather than operate at partial capacity. This creates a clean handover opportunity for a new owner to take over a functioning, profitable system and push it further with full focus. The foundation is already built—the next phase is simply execution.",
      hasMore: true,
    },
    howOperatesColumns: {
      marketingEngine: {
        title: "Marketing Engine",
        subtitle: "Creative-Led Growth & Iterative Scaling System",
        intro: "Growth is driven by a hands-on, test-and-learn approach rather than static campaigns. The focus is on consistently introducing new creatives, quickly identifying what resonates, and leaning into what works. At its core, the system revolves around:",
        bullets: [
          "Ongoing product and angle testing",
          "Multiple creative directions per concept",
          "Scaling spend behind clear winners",
          "Cutting underperforming campaigns early",
        ],
        quote:
          "This approach keeps performance stable while allowing for continuous improvement, avoiding reliance on one-off winning products or short-lived trends.",
      },
      fulfilmentSupplyChain: {
        title: "Fulfilment & Supply Chain",
        subtitle: "Streamlined, Supplier-Managed Infrastructure",
        intro: "The operational side of the business is intentionally simple. Orders are routed directly to established suppliers, who handle production, packing, and shipping without manual input. The process follows a straightforward flow:",
        bullets: [
          "Orders are placed through the store",
          "Fulfilment is automatically triggered",
          "Suppliers handle production and delivery",
        ],
        quote:
          "Because logistics are handled externally, there's no need for warehousing or inventory management on a day-to-day basis. The result is a lean setup that reduces operational overhead while remaining flexible enough to support growth.",
      },
    },
    keyFinancialMetrics: [
      { month: "Jun 2025", revenue: "$17,105", expenses: "$21,300", netProfit: "-$4,195" },
      { month: "Jul 2025", revenue: "$28,342", expenses: "$31,434", netProfit: "-$3,092" },
      { month: "Aug 2025", revenue: "$49,140", expenses: "$39,668", netProfit: "$9,472" },
      { month: "Sep 2025", revenue: "$72,718", expenses: "$60,454", netProfit: "$12,264" },
      { month: "Oct 2025", revenue: "$63,266", expenses: "$51,396", netProfit: "$11,870" },
      { month: "Nov 2025", revenue: "$49,060", expenses: "$45,342", netProfit: "$3,718" },
      { month: "Dec 2025", revenue: "$47,919", expenses: "$46,571", netProfit: "$1,348" },
      { month: "Jan 2026", revenue: "$54,176", expenses: "$42,729", netProfit: "$11,447" },
      { month: "Feb 2026", revenue: "$48,537", expenses: "$36,806", netProfit: "$11,731" },
      { month: "Mar 2026", revenue: "$34,941", expenses: "$22,630", netProfit: "$12,311" },
    ],
    downloadfile: "/assets/deals/52PL-Mar-Auv.xlsx",
    heroTitle: "A High-Quality Beauty & Wellness Brand",
    heroSubtitle: "Proven Skincare Market Fit With Significant Room to Expand Channels Further",
  },
  {
    id: "53",
    platform: "Shopify",
    niche: "Design & Style",
    title: "A Fast-Scaling Ecommerce Brand With Proven Product Market",
    coverImage: "/assets/deals/card53.jpg",
    description:
      "An 8 Month Old Q4 Driven Kids Creativity Brand. Total Revenue $2.2M | Total Net Profit $557k | Running In The US Market. Transitioning Into A Non Seasonal Store",
    verified: true,
    metrics: [
      { label: "TTM Revenue", value: "$2,463,465", icon: "revenue" },
      { label: "TTM Profit", value: "$557,176", icon: "profit" },
      { label: "Monthly Profit", value: "$69,647", icon: "monthly" },
      { label: "Site Age", value: "8 Months", icon: "age" },
      { label: "Asking Price", value: "$130,000", icon: "asking" },
      { label: "Profit Multiple", value: "0.2x", icon: "multiple" },
    ],
    askingPrice: 130000,
    speakHref: "#book-a-call",
    viewHref: "/deals/53",
    businessOverview: {
      content:
        "This is a fast-growing direct-to-consumer brand operating in the children's gifting space, built around products that are highly visual, easy to understand, and naturally shareable. The offering is designed to capture attention quickly and convert through emotional appeal rather than complexity. In under a year, the business has generated over $2.4M in revenue and more than $540K in profit, supported by strong margins and consistent performance across paid channels. The structure is lean but proven, with systems already in place to support continued scale.",
      hasMore: true,
    },
    whyBuilt: {
      content:
        "The idea came from recognizing that many products in this category lacked originality and emotional pull, especially in formats that perform well online. There was an opportunity to create something that felt more engaging, giftable, and immediately appealing to both children and buyers. By focusing on products that stand out visually and connect emotionally, the brand was able to gain traction quickly. This approach made it particularly effective on social platforms, where attention and first impressions are critical.",
      hasMore: false,
    },
    revenueModel: {
      content:
        "Revenue is generated through a direct-to-consumer model, with customer acquisition driven primarily by paid social advertising. The products are positioned in a way that encourages bundling and multi-unit purchases, naturally increasing average order value. Growth comes from continuously testing new creatives and scaling what performs. Once a concept proves profitable, spend is increased while new variations are introduced to maintain performance and extend lifecycle.",
      hasMore: true,
    },
    whySelling: {
      content:
        "The business is being sold as part of a broader shift in focus toward other projects. While the brand continues to perform well, scaling it further would require more dedicated attention across marketing, product expansion, and backend systems. Rather than stretching resources, the decision has been made to pass the business to a new owner who can focus fully on growth. With strong fundamentals already established, the next phase is execution rather than rebuilding.",
      hasMore: true,
    },
    howOperatesColumns: {
      marketingEngine: {
        title: "Marketing Engine",
        subtitle: "Creative-Led Growth With Continuous Iteration",
        intro: "Growth is driven by a test-and-refine approach rather than relying on single breakout products. The focus is on identifying what captures attention quickly, then evolving those ideas into scalable campaigns. The system centers around:",
        bullets: [
          "Ongoing rollout of new creatives and concepts",
          "Refining top-performing angles instead of restarting",
          "Increasing spend on proven campaigns at the right time",
          "Removing underperformers early to maintain efficiency",
        ],
        quote:
          "This creates a compounding effect where performance improves through iteration, resulting in more consistent and predictable growth over time.",
      },
      fulfilmentSupplyChain: {
        title: "Fulfilment & Supply Chain",
        subtitle: "Flexible, Scalable Supplier Infrastructure",
        intro: "The business operates with a hybrid fulfillment setup built around established supplier relationships in China. Orders are processed automatically and handled end-to-end by the supplier, minimizing operational involvement. Order flow:",
        bullets: [
          "Customer completes purchase",
          "Order is routed directly to the supplier",
          "Supplier manages production, packing, and shipping",
        ],
        quote:
          "Inventory is strategically held to support faster delivery in key markets, improving customer experience and reducing fulfillment delays. The supply chain is already optimized for both consistency and flexibility, allowing the business to scale without requiring major operational changes. This setup keeps overhead controlled while maintaining reliability, making it easy for a new owner to step in and continue scaling without disruption.",
      },
    },
    keyFinancialMetrics: [
      { month: "Aug 2025", revenue: "$5,864", expenses: "$5,135", netProfit: "$729" },
      { month: "Sep 2025", revenue: "$160,219", expenses: "$128,756", netProfit: "$31,463" },
      { month: "Oct 2025", revenue: "$319,848", expenses: "$245,605", netProfit: "$74,243" },
      { month: "Nov 2025", revenue: "$855,655", expenses: "$641,920", netProfit: "$213,735" },
      { month: "Dec 2025", revenue: "$1,001,268", expenses: "$786,732", netProfit: "$214,536" },
      { month: "Jan 2026", revenue: "$15,360", expenses: "$15,434", netProfit: "-$74" },
      { month: "Feb 2026", revenue: "$14,280", expenses: "$10,525", netProfit: "$3,755" },
      { month: "Mar 2026", revenue: "$90,971", expenses: "$72,182", netProfit: "$18,789" },
    ],
    downloadfile: "/assets/deals/53PL-Mar-P&B.xlsx",
    heroTitle: "A Fast-Scaling Ecommerce Brand With Proven Product Market",
    heroSubtitle: "High-Appeal Children's Creative Products Engineered for Gifting Occasions and Bundles",
  },
 {
    id: "49",
    platform: "Shopify",
    niche: "Health & Beauty",
    title: "A Brand Built Around Simplifying Everyday Beauty",
    coverImage: "/assets/deals/multicosmetics.jpg",
    description:
      "Turning time-saving makeup products into scalable, repeatable revenue. 12-Month Brand. $700K+ Revenue. $125k+ Profit. Built for Scalable Growth.",
    verified: true,
    metrics: [
      { label: "TTM Revenue", value: "$781,564", icon: "revenue" },
      { label: "TTM Profit", value: "$125,327", icon: "profit" },
      { label: "Monthly Profit", value: "$10,443", icon: "monthly" },
      { label: "Site Age", value: "1 Year", icon: "age" },
      { label: "Asking Price", value: "$119,999", icon: "asking" },
      { label: "Profit Multiple", value: "0.95x", icon: "multiple" },
    ],
    askingPrice: 119999,
    speakHref: "#book-a-call",
    viewHref: "/deals/49",
    businessOverview: {
      content:
        "This is a beauty brand built around simplifying everyday routines through multi-functional, easy-to-use products. Rather than competing on complexity, the brand focuses on convenience-driven solutions that deliver results without requiring time-intensive processes. Over the past 11 months, the business has scaled to over $700K in revenue and $125K+ in net profit, supported by strong product-market fit and consistent paid acquisition performance. The model is lean, with no inventory held, and built to scale efficiently without operational friction.",
      hasMore: true,
    },
    whyBuilt: {
      content:
        "The brand was created after identifying a clear gap in the market for beauty products that prioritize simplicity and efficiency. Many existing solutions required multiple steps or long routines, which created friction for everyday users. The goal was to develop products that combine functionality into a single, streamlined experience. This positioning resonated quickly with customers, particularly those looking for practical, time-saving solutions. From the beginning, the business was designed to validate demand quickly, iterate based on performance, and scale what works.",
      hasMore: false,
    },
    revenueModel: {
      content:
        "The business operates on a direct-to-consumer model, with products fulfilled on demand through supplier partnerships. This allows for efficient scaling without the need for upfront inventory or complex logistics. Customer acquisition is driven primarily through paid social advertising, where ongoing creative testing identifies winning hooks and angles. Once validated, campaigns are scaled to drive consistent revenue. Supporting channels such as email marketing and retargeting help maximize conversion rates and increase overall customer value.",
      hasMore: true,
    },
    whySelling: {
      content:
        "The decision to sell is based on a change of focus toward other ventures rather than any issues with the business itself. While the brand continues to perform well, scaling it further would require more dedicated time and attention. At its current stage, the business is stable, systemized, and well-positioned for growth. Transitioning ownership allows a new operator to step in and fully capitalize on the existing foundation, rather than the business being limited by divided focus.",
      hasMore: true,
    },
    howOperatesColumns: {
      marketingEngine: {
        title: "Marketing Engine",
        subtitle: "Performance-Driven Creative Testing & Scaling System",
        intro: "The growth model is built around continuous iteration and fast feedback loops rather than relying on one-off winning products. Performance is driven by identifying what resonates quickly, then doubling down with structured scaling. The system focuses on:",
        bullets: [
          "Consistent testing of new creatives and product angles",
          "Iterating on proven concepts rather than starting from scratch",
          "Scaling spend aggressively once performance stabilizes",
          "Cutting underperforming campaigns early to protect margins",
        ],
        quote:
          "This approach creates a more stable and repeatable acquisition engine, allowing the business to grow through refinement rather than depending on unpredictable spikes.",
      },
      fulfilmentSupplyChain: {
        title: "Fulfilment & Supply Chain",
        subtitle: "Lean, Automated Dropshipping Infrastructure",
        intro: "The business operates through a streamlined supplier setup, with fulfillment handled entirely by a trusted partner in China. Orders are automatically routed after purchase, removing the need for manual processing or inventory management. Order flow:",
        bullets: [
          "Customer places an order",
          "Order is automatically transmitted to the supplier",
          "Supplier handles production, packing, and delivery",
        ],
        quote:
          "The relationship with the supplier is established and reliable, with consistent delivery times and clear communication. This model keeps operations simple, minimizes upfront capital requirements, and allows the business to scale without adding operational complexity or fixed overhead.",
      },
    },
    keyFinancialMetrics: [
      { month: "Apr 2025", revenue: "$144,516", expenses: "$121,543", netProfit: "$22,973" },
      { month: "May 2025", revenue: "$123,897", expenses: "$109,051", netProfit: "$14,846" },
      { month: "Jun 2025", revenue: "$99,345", expenses: "$94,243", netProfit: "$5,102" },
      { month: "Jul 2025", revenue: "$51,756", expenses: "$47,594", netProfit: "$4,162" },
      { month: "Aug 2025", revenue: "$21,424", expenses: "$16,849", netProfit: "$4,575" },
      { month: "Sep 2025", revenue: "$16,568", expenses: "$13,318", netProfit: "$3,250" },
      { month: "Oct 2025", revenue: "$30,702", expenses: "$21,959", netProfit: "$8,743" },
      { month: "Nov 2025", revenue: "$51,848", expenses: "$42,630", netProfit: "$9,218" },
      { month: "Dec 2025", revenue: "$60,203", expenses: "$51,580", netProfit: "$8,623" },
      { month: "Jan 2026", revenue: "$44,928", expenses: "$39,442", netProfit: "$5,486" },
      { month: "Feb 2026", revenue: "$68,765", expenses: "$47,766", netProfit: "$20,999" },
      { month: "Mar 2026", revenue: "$67,612", expenses: "$50,262", netProfit: "$17,350" },
    ],
    downloadfile: "/assets/deals/PL-Mar-Multicosmetics.xlsx",
    heroTitle: "A Brand Built Around Simplifying Everyday Beauty",
    heroSubtitle: "Turning time-saving makeup products into scalable, repeatable revenue",
  },
 {
    id: "47",
    platform: "Shopify",
    niche: "Health & Beauty",
    title: "A Recurring Revenue Brand in the Growing Wellness Market",
    coverImage: "/assets/deals/nutrively.jpg",
    description:
      "Subscription-based engine driven by liquid-format products and strong customer retention. 8-Month Brand. $1.7M+ Revenue. $400K+ Profit. Built for Scalable Growth.",
    verified: true,
    metrics: [
      { label: "TTM Revenue", value: "$1,708,439", icon: "revenue" },
      { label: "TTM Profit", value: "$409,231", icon: "profit" },
      { label: "Monthly Profit", value: "$51,153", icon: "monthly" },
      { label: "Site Age", value: "8 Months", icon: "age" },
      { label: "Asking Price", value: "$285,000", icon: "asking" },
      { label: "Profit Multiple", value: "0.7x", icon: "multiple" },
    ],
    askingPrice: 285000,
    speakHref: "#book-a-call",
    viewHref: "/deals/47",
    businessOverview: {
      content:
        "A rapidly scaling direct-to-consumer supplement brand built around a subscription-first model. The business focuses on liquid-format products designed for ease of use, daily consumption, and strong repeat purchase behavior. In just 7 months, it has generated over $1.5M in revenue and nearly $400K in profit, demonstrating clear product-market fit and efficient customer acquisition. The operation is lean, with no inventory held and fulfillment handled entirely by a private supplier, allowing for high margins and scalable growth without operational complexity.",
      hasMore: true,
    },
    whyBuilt: {
      content:
        "The brand was built to simplify how people approach daily health supplementation. Instead of complicated routines or hard-to-follow regimens, the focus was on creating products that are easy to use and easy to stick with. Liquid supplements were chosen intentionally for their convenience and higher adherence compared to traditional formats. From the beginning, the goal was to build a business around retention — not just acquiring customers, but keeping them through a product that naturally fits into their daily habits.",
      hasMore: false,
    },
    revenueModel: {
      content:
        "Revenue is driven primarily through a subscription-based structure, where customers are billed on a recurring basis. Paid advertising, particularly through Facebook, is used to acquire customers at scale, with funnels optimized to convert first-time buyers into long-term subscribers. This creates consistent monthly revenue and strong visibility on cash flow. Because customers continue purchasing over time, the model allows for efficient scaling by reinvesting into acquisition while increasing overall lifetime value.",
      hasMore: true,
    },
    whySelling: {
      content:
        "The decision to sell is based on shifting priorities rather than business performance. The brand is profitable, stable, and growing, but the owner is moving focus toward other ventures that require full attention. Rather than dividing time across multiple projects, the business is being transitioned to a new owner who can fully capitalize on its current momentum. With systems already in place and a strong subscription base, the business is well positioned for continued growth under dedicated ownership.",
      hasMore: true,
    },
    howOperatesColumns: {
      marketingEngine: {
        title: "Marketing Engine",
        subtitle: "Subscription-Focused Acquisition & Retention System",
        intro: "The marketing system is built around:",
        bullets: [
          "High-volume creative testing on Facebook",
          "Subscription-first funnels designed for retention",
          "Scaling campaigns based on CAC vs LTV performance",
          "Fast iteration on offers, hooks, and creatives",
        ],
        quote:
          "The focus is not just on acquiring customers, but on acquiring the right customers — those likely to stay subscribed and generate long-term value. This creates a compounding revenue model driven by retention, rather than relying purely on one-time purchases.",
      },
      fulfilmentSupplyChain: {
        title: "Fulfilment & Supply Chain",
        subtitle: "Automated, Branded Direct Fulfilment",
        intro: "The business operates through a private supplier based in China. Order process:",
        bullets: [
          "Customer places an order",
          "Order syncs automatically to the supplier",
          "Supplier handles production, packaging, and shipping",
        ],
        quote:
          "All products are fully branded, ensuring a consistent customer experience without requiring in-house logistics. This structure removes operational overhead, keeps the business capital-light, and allows a new owner to scale without managing inventory or fulfillment complexity.",
      },
    },
    keyFinancialMetrics: [
      { month: "Aug 2025", revenue: "$9,935", expenses: "$9,281", netProfit: "$654" },
      { month: "Sep 2025", revenue: "$178,216", expenses: "$160,916", netProfit: "$17,300" },
      { month: "Oct 2025", revenue: "$364,288", expenses: "$322,807", netProfit: "$41,481" },
      { month: "Nov 2025", revenue: "$288,526", expenses: "$175,937", netProfit: "$112,589" },
      { month: "Dec 2025", revenue: "$286,339", expenses: "$210,440", netProfit: "$75,899" },
      { month: "Jan 2026", revenue: "$226,897", expenses: "$144,762", netProfit: "$82,135" },
      { month: "Feb 2026", revenue: "$210,672", expenses: "$149,746", netProfit: "$60,926" },
      { month: "Mar 2026", revenue: "$143,566", expenses: "$125,319", netProfit: "$18,247" },
    ],
    downloadfile: "/assets/deals/PL-Feb-Nutrively.xlsx",
    heroTitle: "A Recurring Revenue Brand in the Growing Wellness Market",
    heroSubtitle: "Subscription-based engine driven by liquid-format products and strong customer retention",
  },
 {
    id: "48",
    platform: "Shopify",
    niche: "Design & Style",
    title: "A Fast-Validating Fashion Brand Built on Timeless Demand",
    coverImage: "/assets/deals/luremon.jpg",
    description:
      "Built on Proven Creative Performance and Scalable Unit Economics. $16K+ Monthly Revenue. 20% Margins. Ready to Push Further.",
    verified: true,
    metrics: [
      { label: "TTM Revenue", value: "$83,250", icon: "revenue" },
      { label: "TTM Profit", value: "$16,903", icon: "profit" },
      { label: "Monthly Profit", value: "$3,380", icon: "monthly" },
      { label: "Site Age", value: "5 Months", icon: "age" },
      { label: "Asking Price", value: "$14,999", icon: "asking" },
      { label: "Profit Multiple", value: "0.9x", icon: "multiple" },
    ],
    askingPrice: 14999,
    speakHref: "#book-a-call",
    viewHref: "/deals/48",
    businessOverview: {
      content:
        "This is an early-stage fashion store built around the \"old money\" / minimalist luxury aesthetic — a style that continues to perform strongly across social platforms. Instead of chasing short-lived trends, the focus is on clean, timeless pieces that consistently appeal to a broad audience. The business has been kept intentionally simple: strong product selection, clear positioning, and offers that convert without relying on heavy branding. Despite being only a few months old, it has already generated steady revenue and profit, showing clear signs of a repeatable model.",
      hasMore: true,
    },
    whyBuilt: {
      content:
        "The store was created after seeing how consistently this aesthetic was gaining traction online. It's a niche where the appeal is immediate — customers understand the look, the lifestyle, and the value without needing much explanation. Rather than overcomplicating the brand, the goal was to build something that could move quickly — products that feel premium, are easy to market visually, and can plug directly into existing demand across platforms like Instagram and TikTok.",
      hasMore: false,
    },
    revenueModel: {
      content:
        "Revenue is driven primarily through paid social, with Meta used for both testing and scaling. The approach is straightforward — launch multiple creatives, identify what resonates, and increase spend on the campaigns that perform. Email marketing supports this by capturing additional value from existing customers and improving overall margins. The focus has been on consistency rather than one-off wins, building a system that can be repeated and scaled.",
      hasMore: true,
    },
    whySelling: {
      content:
        "The decision to sell comes down to focus. With multiple projects running at once, it's difficult to allocate the time needed to fully scale each one. The business is already profitable and operating smoothly, but still early in its lifecycle. It would benefit from an owner who can give it full attention and push it further, rather than keeping it as one of several competing priorities.",
      hasMore: true,
    },
    howOperatesColumns: {
      marketingEngine: {
        title: "Marketing Engine",
        subtitle: "Creative-Led Testing & Scaling System",
        intro: "The marketing approach is built around:",
        bullets: [
          "Continuous product and creative testing",
          "Multiple angles per product (lifestyle, aspirational, minimal)",
          "Scaling only proven winners with clear data",
          "Cutting spend quickly on anything that underperforms",
        ],
        quote:
          "The focus is less on chasing trends and more on finding visuals that consistently resonate with the \"old money\" aesthetic — clean, premium, and instantly recognizable. This creates a steady, repeatable growth cycle instead of relying on short-lived viral products.",
      },
      fulfilmentSupplyChain: {
        title: "Fulfilment & Supply Chain",
        subtitle: "Lean, Flexible Supplier Model",
        intro: "The business operates through established suppliers based in China. Order process:",
        bullets: [
          "Customer places an order",
          "Order is automatically routed to the supplier",
          "Supplier handles fulfillment and delivery",
        ],
        quote:
          "For stronger-performing products, suppliers can support faster processing or reserved stock if needed, without forcing large upfront commitments. This structure keeps operations lightweight, reduces risk, and makes it easy for a new owner to scale without operational friction.",
      },
    },
    keyFinancialMetrics: [
      { month: "Nov 2025", revenue: "$3,500", expenses: "$2,891", netProfit: "$609" },
      { month: "Dec 2025", revenue: "$10,400", expenses: "$7,161", netProfit: "$3,239" },
      { month: "Jan 2026", revenue: "$12,150", expenses: "$9,566", netProfit: "$2,584" },
      { month: "Feb 2026", revenue: "$21,400", expenses: "$16,790", netProfit: "$4,610" },
      { month: "Mar 2026", revenue: "$35,800", expenses: "$29,939", netProfit: "$5,861" },
    ],
    downloadfile: "/assets/deals/PL-Feb-Luremon.xlsx",
    heroTitle: "A Fast-Validating Fashion Brand Built on Timeless Demand",
    heroSubtitle: "Built on Proven Creative Performance and Scalable Unit Economics",
  },
 {
    id: "30",
    platform: "Shopify | Other",
    niche: "Design & Style",
    title: "A Cash-Flowing Digital Product Business with Proven Demand",
    coverImage: "/assets/deals/card30.jpg",
    mobileImage: "/assets/deals/test.png",
    description:
      "Performance-Led Growth with Strong Customer Retention. 2 Years Operating. TTM: $1.7M Revenue. $357K Profit. Optimized, Systemized, and Ready to Grow.",
    verified: true,
    metrics: [
      { label: "TTM Revenue", value: "$1,747,756", icon: "revenue" },
      { label: "TTM Profit", value: "$357,204", icon: "profit" },
      { label: "Monthly Profit", value: "$29,767", icon: "monthly" },
      { label: "Site Age", value: "2+ Years", icon: "age" },
      { label: "Asking Price", value: "$399,999", icon: "asking" },
      { label: "Profit Multiple", value: "1.1x", icon: "multiple" },
    ],
    askingPrice: 399999,
    speakHref: "#book-a-call",
    viewHref: "/deals/30",
    businessOverview: {
      content:
        "A two-year-old direct-to-consumer digital brand operating with a fully on-demand delivery model. The business focuses on personalized, emotionally driven products supported by strong creative strategy and a streamlined backend system. It has generated approximately $1.7M in revenue and $357K in net profit over the trailing twelve months. With no physical inventory, logistics, or warehousing, the model remains lean, flexible, and highly scalable.",
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
      { month: "Apr 2025", revenue: "$270,708", expenses: "$215,912", netProfit: "$54,796" },
      { month: "May 2025", revenue: "$175,608", expenses: "$141,993", netProfit: "$33,615" },
      { month: "Jun 2025", revenue: "$105,713", expenses: "$92,767", netProfit: "$12,946" },
      { month: "Jul 2025", revenue: "$105,944", expenses: "$92,884", netProfit: "$13,060" },
      { month: "Aug 2025", revenue: "$126,014", expenses: "$101,631", netProfit: "$24,383" },
      { month: "Sep 2025", revenue: "$131,952", expenses: "$114,628", netProfit: "$17,324" },
      { month: "Oct 2025", revenue: "$124,663", expenses: "$107,317", netProfit: "$17,346" },
      { month: "Nov 2025", revenue: "$129,314", expenses: "$97,569", netProfit: "$31,745" },
      { month: "Dec 2025", revenue: "$191,272", expenses: "$126,280", netProfit: "$64,992" },
      { month: "Jan 2026", revenue: "$153,940", expenses: "$113,861", netProfit: "$40,079" },
      { month: "Feb 2026", revenue: "$108,000", expenses: "$88,505", netProfit: "$19,495" },
      { month: "Mar 2026", revenue: "$124,628", expenses: "$97,205", netProfit: "$27,423" },
    ],
    downloadfile: "/assets/deals/30-PL-Feb-SG.xlsx",
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
      "Profitable Women's Lifestyle Jewelry Business. 1-Year-Old Jewelry Brand. TTM: $3.4M+ Revenue. $636K Net Profit. Positioned for Continued Market Expansion.",
    verified: true,
    metrics: [
      { label: "TTM Revenue", value: "$3,454,977", icon: "revenue" },
      { label: "TTM Profit", value: "$636,094", icon: "profit" },
      { label: "Monthly Profit", value: "$53,007", icon: "monthly" },
      { label: "Site Age", value: "1+ Year", icon: "age" },
      { label: "Asking Price", value: "$124,999", icon: "asking" },
      { label: "Profit Multiple", value: "0.2x", icon: "multiple" },
    ],
    askingPrice: 124999,
    speakHref: "#book-a-call",
    viewHref: "/deals/31",
    businessOverview: {
      content:
        "A U.S.-focused direct-to-consumer jewelry brand targeting women aged 45+, a demographic known for strong purchasing power and consistent online engagement. The product range is centered around classic, wearable pieces designed for both daily use and gifting occasions. Over the past 12 months, the business has generated $3.6M+ in revenue and $722K in net profit. With automated systems, established supplier relationships, and a focused customer base, the brand operates efficiently while offering clear scalability.",
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
      { month: "Mar 2026", revenue: "$197,978", expenses: "$175,119", netProfit: "$22,859" },
    ],
    downloadfile: "/assets/deals/31-PL-Feb-AJ.xlsx",
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
      "Fashion Jewelry E-Commerce Store. 2-Year-Old Jewelry Brand. TTM: $465K+ TTM Revenue. $140K Net Profit. Positioned for Continued Market Expansion.",
    verified: true,
    metrics: [
      { label: "TTM Revenue", value: "$466,190", icon: "revenue" },
      { label: "TTM Profit", value: "$140,863", icon: "profit" },
      { label: "Monthly Profit", value: "$11,738", icon: "monthly" },
      { label: "Site Age", value: "2+ Years", icon: "age" },
      { label: "Asking Price", value: "$99,999", icon: "asking" },
      { label: "Profit Multiple", value: "0.7x", icon: "multiple" },
    ],
    askingPrice: 99999,
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
        subtitle: "Automated Shopify Dropshipping Infrastructure",
        intro: "The business operates through established third-party suppliers connected directly to Shopify. Order Process:",
        bullets: [
          "Customer places order through the Shopify storefront",
          "Order automatically syncs with the supplier via integrated apps",
          "Supplier processes, packages, and ships the product directly to the customer",
        ],
        quote:
          "This structure eliminates inventory requirements, reduces operational overhead, and allows the business to scale without logistics constraints.",
      },
    },
    keyFinancialMetrics: [
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
      { month: "Mar 2026", revenue: "$15,220", expenses: "$11,552", netProfit: "$3,668" },
    ],
    downloadfile: "/assets/deals/32-JewelryBusiness-$99,999.xlsx",
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
      "Health & Performance Shilajit Gummies E-Commerce Store. A 1-Year-Old Vitality Supplement Business. $540K+ Revenue. $97K+ Net Profit. Driven by Consistent Snapchat Customer Acquisition.",
    verified: true,
    metrics: [
      { label: "TTM Revenue", value: "$544,908", icon: "revenue" },
      { label: "TTM Profit", value: "$97,410", icon: "profit" },
      { label: "Monthly Profit", value: "$8,117", icon: "monthly" },
      { label: "Site Age", value: "1 Year", icon: "age" },
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
      { month: "Mar 2026", revenue: "$38,279", expenses: "$30,920", netProfit: "$7,359" },
    ],
    downloadfile: "/assets/deals/33-PL-Feb-ZH.xlsx",
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
      "Products Designed to Convert in a Visual-First Market. 11 Months of Data. $280K+ Revenue. $44K+ Profit. Ready for Higher Volume Execution.",
    verified: true,
    metrics: [
      { label: "TTM Revenue", value: "$280,663", icon: "revenue" },
      { label: "TTM Profit", value: "$44,966", icon: "profit" },
      { label: "Monthly Profit", value: "$4,087", icon: "monthly" },
      { label: "Site Age", value: "11 Months", icon: "age" },
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
      { month: "Mar 2026", revenue: "$5,415", expenses: "$3,966", netProfit: "$1,449" },
    ],
    downloadfile: "/assets/deals/34-PL-Feb-Ho.xlsx",
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
      "Longevity-Focused NAD+ Gummy Business. 1 Year Old Brand. $185K Revenue. $38K Net Profit. Proven Product with Significant Room to Scale.",
    verified: true,
    metrics: [
      { label: "TTM Revenue", value: "$185,501", icon: "revenue" },
      { label: "TTM Profit", value: "$38,240", icon: "profit" },
      { label: "Monthly Profit", value: "$3,186", icon: "monthly" },
      { label: "Site Age", value: "1 Year", icon: "age" },
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
      { month: "Apr 2025", revenue: "$24,429", expenses: "$27,605", netProfit: "-$3,176" },
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
      { month: "Mar 2026", revenue: "$3,447", expenses: "$1,763", netProfit: "$1,684" },
    ],
    downloadfile: "/assets/deals/35-PL-Feb-AL.xlsx",
    heroTitle: "A Scalable Supplement Subscription Brand",
    heroSubtitle: "Longevity-Focused NAD+ Gummy Business",
  },
 {
    id: "36",
    platform: "Shopify",
    niche: "Design & Style",
    title: "A Mission-Driven Ocean Lifestyle Brand",
    coverImage: "/assets/deals/card36.jpg",
    description:
      "Thriving Ocean-Themed Fashion Apparel E-Commerce Business. 2-Year-Old Brand. $1.8M+ Revenue. $237K Net Profit. Built to Resonate with Conscious Consumers and Scale Globally.",
    verified: true,
    metrics: [
      { label: "TTM Revenue", value: "$1,813,133", icon: "revenue" },
      { label: "TTM Profit", value: "$237,408", icon: "profit" },
      { label: "Monthly Profit", value: "$19,784", icon: "monthly" },
      { label: "Site Age", value: "2+ Years", icon: "age" },
      { label: "Asking Price", value: "$285,000", icon: "asking" },
      { label: "Profit Multiple", value: "1.2x", icon: "multiple" },
    ],
    askingPrice: 285000,
    speakHref: "#book-a-call",
    viewHref: "/deals/36",
    businessOverview: {
      content:
        "A 2-year-old apparel brand centered around ocean-inspired designs and a clear environmental theme. Operating on a print-on-demand model, the business combines strong visual identity with efficient backend systems to deliver products without holding inventory. The brand has generated approximately $1.9M in revenue and $257K in net profit, supported by consistent paid acquisition and a repeatable creative strategy. With no warehousing requirements and streamlined operations, the business is built for scalability and ease of management.",
      hasMore: true,
    },
    whyBuilt: {
      content:
        "The brand was created with a dual focus: building a recognizable lifestyle apparel brand while aligning with ocean conservation values. A story-led concept designed for long-term growth, centered around visual identity, customer connection, and consistent creative execution to appeal to a purpose-driven audience.",
      hasMore: false,
    },
    revenueModel: {
      content:
        "The business operates under a print-on-demand model, where products are produced only after a customer order is placed. Traffic acquisition is primarily driven through Meta advertising (Facebook & Instagram), focused on testing new designs, scaling winning creatives, and iterating quickly. Google Ads supports retargeting and demand capture.",
      hasMore: true,
    },
    whySelling: {
      content:
        "The decision to sell is strategic rather than performance-driven. After establishing product-market fit, stable operations, and consistent paid acquisition results, the current owner is reallocating focus toward other ventures. The business is being transitioned to a new owner to maintain growth momentum and avoid divided attention.",
      hasMore: true,
    },
    howOperatesColumns: {
      marketingEngine: {
        title: "Marketing Engine",
        subtitle: "Creative Testing & Scaling System",
        intro: "The marketing system is built around:",
        bullets: [
          "Consistently launching new designs and testing what resonates",
          "Running multiple creative angles to find what converts best",
          "Increasing spend behind designs that show strong traction",
          "Cutting underperforming ads quickly to stay efficient",
        ],
        quote:
          "This approach allows the business to scale through repeatable winners rather than relying on one-off products.",
      },
      fulfilmentSupplyChain: {
        title: "Fulfilment & Supply Chain",
        subtitle: "Automated Print-On-Demand Setup",
        intro: "The business runs through established POD suppliers based in China. Order Process:",
        bullets: [
          "Customer places an order through the website",
          "Order is automatically sent to the supplier",
          "Supplier prints, packs, and ships directly to the customer",
        ],
        quote:
          "This model removes the need for inventory, keeps overhead low, and makes the business easy to operate and transfer.",
      },
    },
    keyFinancialMetrics: [
      { month: "Apr 2025", revenue: "$204,362", expenses: "$200,113", netProfit: "$4,249" },
      { month: "May 2025", revenue: "$71,808", expenses: "$63,754", netProfit: "$8,054" },
      { month: "Jun 2025", revenue: "$152,067", expenses: "$123,859", netProfit: "$28,208" },
      { month: "Jul 2025", revenue: "$209,579", expenses: "$180,541", netProfit: "$29,038" },
      { month: "Aug 2025", revenue: "$161,010", expenses: "$132,540", netProfit: "$28,470" },
      { month: "Sep 2025", revenue: "$73,443", expenses: "$66,216", netProfit: "$7,227" },
      { month: "Oct 2025", revenue: "$84,943", expenses: "$74,828", netProfit: "$10,115" },
      { month: "Nov 2025", revenue: "$134,501", expenses: "$113,752", netProfit: "$20,749" },
      { month: "Dec 2025", revenue: "$319,268", expenses: "$282,729", netProfit: "$36,539" },
      { month: "Jan 2026", revenue: "$232,642", expenses: "$194,992", netProfit: "$37,650" },
      { month: "Feb 2026", revenue: "$64,370", expenses: "$54,000", netProfit: "$10,370" },
      { month: "Mar 2026", revenue: "$105,140", expenses: "$88,401", netProfit: "$16,739" },
    ],
    downloadfile: "/assets/deals/36-PL-Feb-OBP.xlsx",
    heroTitle: "A Mission-Driven Ocean Lifestyle Brand",
    heroSubtitle: "Thriving Ocean-Themed Fashion Apparel E-Commerce Business",
  },
 {
    id: "37",
    platform: "Shopify",
    niche: "Health & Beauty",
    title: "A Proven Pain Relief Brand with Strong Financial Performance",
    coverImage: "/assets/deals/card37.jpg",
    description:
      "A 1.5+ Year Old Pain Neck Pain Relief Business Scaling In A Booming Market. Generating Over $9.6M In Revenue | Net Profit Exceeds $1m | Cash Flowing Monthly",
    verified: true,
    metrics: [
      { label: "TTM Revenue", value: " $6,920,959", icon: "revenue" },
      { label: "TTM Profit", value: "$662,670", icon: "profit" },
      { label: "Monthly Profit", value: "$55,222", icon: "monthly" },
      { label: "Site Age", value: "1+ Years", icon: "age" },
      { label: "Asking Price", value: "$650,000", icon: "asking" },
      { label: "Profit Multiple", value: "0.1x", icon: "multiple" },
    ],
    askingPrice: 650000,
    speakHref: "#book-a-call",
    viewHref: "/deals/37",
    businessOverview: {
      content:
        "This is a U.S.-based ecommerce business operating in the health and pain relief space, built around a single high-performing product that has already demonstrated strong demand at scale. After an initial testing phase and repositioning, the brand found a clear product-market fit and has since generated multi-million dollar revenue with consistent monthly performance. The operation is streamlined, with systems in place across marketing, fulfillment, and support, allowing it to run efficiently while still offering significant headroom for growth.",
      hasMore: true,
    },
    whyBuilt: {
      content:
        "The business began as a product-first project, with the goal of identifying something that could be scaled quickly within a proven market. Rather than committing to a fixed niche from the outset, multiple products were tested across different categories until a clear winner emerged. Once traction was established, the focus shifted toward improving the product itself—refining quality, upgrading components, and strengthening positioning to support long-term scalability. What started as a testing process evolved into a structured and profitable operation.",
      hasMore: false,
    },
    revenueModel: {
      content:
        "Revenue is primarily driven through paid social advertising, where new creatives are introduced consistently and scaled based on performance data. The strategy centers on rapid iteration—testing multiple angles, identifying winners early, and increasing spend on campaigns that convert. Search campaigns complement this by capturing additional demand and improving efficiency across the funnel. This creates a model that combines ongoing experimentation with stable, repeatable revenue.",
      hasMore: true,
    },
    whySelling: {
      content:
        "The current owner prefers building and launching new projects, and at this stage, the business has reached a level of stability where it requires less experimentation and more focused scaling. Rather than splitting attention across ventures, the decision has been made to transition the business to an operator better suited to take it through its next phase of growth.",
      hasMore: true,
    },
    howOperatesColumns: {
      marketingEngine: {
        title: "Marketing Engine",
        subtitle: "Ongoing Creative Iteration & Performance-Based Scaling",
        intro: "Growth is driven by a disciplined approach to testing and optimization:",
        bullets: [
          "New products and angles introduced on a consistent basis",
          "Multiple creative directions explored for each campaign",
          "Budget shifted quickly toward ads showing strong returns",
          "Inefficient spend identified early and removed",
        ],
        quote:
          "This creates a system where performance compounds over time, allowing the business to scale what works while continuously refreshing its acquisition pipeline.",
      },
      fulfilmentSupplyChain: {
        title: "Fulfilment & Supply Chain",
        subtitle: "Reliable Supplier-Led Operations with Built-In Scalability",
        intro: "The business works with an established supplier who manages both inventory and order fulfillment from their warehouse in China. The process is straightforward:",
        bullets: [
          "Orders are transmitted directly after purchase",
          "Fulfillment, packing, and dispatch handled by the supplier",
          "Products shipped directly to customers with consistent delivery times",
        ],
        quote:
          "Inventory is managed at the supplier level, with flexible payment terms that support cash flow. This structure reduces operational burden, maintains product quality, and allows the business to scale without adding logistical complexity.",
      },
    },
    keyFinancialMetrics: [
      { month: "March 2025", revenue: "$559,981", expenses: "$501,153", netProfit: "$58,828" },
      { month: "April 2025", revenue: "$686,669", expenses: "$603,642", netProfit: "$83,027" },
      { month: "May 2025", revenue: "$731,175", expenses: "$666,400", netProfit: "$64,775" },
      { month: "Jun 2025", revenue: "$894,543", expenses: "$783,730", netProfit: "$110,813" },
      { month: "Jul 2025", revenue: "$738,712", expenses: "$644,172", netProfit: "$94,540" },
      { month: "Aug 2025", revenue: "$863,411", expenses: "$784,377", netProfit: "$79,034" },
      { month: "Sep 2025", revenue: "$428,464", expenses: "$395,623", netProfit: "$32,841" },
      { month: "Oct 2025", revenue: "$368,557", expenses: "$351,863", netProfit: "$16,694" },
      { month: "Nov 2025", revenue: "$200,701", expenses: "$209,276", netProfit: "-$8,575" },
      { month: "Dec 2025", revenue: "$341,664", expenses: "$310,234", netProfit: "$31,430" },
      { month: "Jan 2026", revenue: "$603,061", expenses: "$543,369", netProfit: "$59,692" },
      { month: "Feb 2026", revenue: "$504,021", expenses: "$464,450", netProfit: "$39,571" },
    ],
    downloadfile: "/assets/deals/37-PL-Feb-HT.xlsx",
    heroTitle: "A Proven Pain Relief Brand with Strong Financial Performance",
    heroSubtitle: "Profitable Consumer Product Business with Scalable Infrastructure",
  },
 {
    id: "39",
    platform: "Shopify",
    niche: "Design & Style",
    title: "A High-Revenue Jewelry Brand with Consistent Cash Flow",
    coverImage: "/assets/deals/card39.jpg",
    description:
      "A 2.7 Year Old Jewelry Store Selling In U.S. Total Revenue $5.8M | Toal Net Profit $1.5M | Cash flowing With Constant Profits",
    verified: true,
    metrics: [
      { label: "TTM Revenue", value: "$1,739,280", icon: "revenue" },
      { label: "TTM Profit", value: "$291,768", icon: "profit" },
      { label: "Monthly Profit", value: "$24,314", icon: "monthly" },
      { label: "Site Age", value: "2+ Years", icon: "age" },
      { label: "Asking Price", value: "$125,000", icon: "asking" },
      { label: "Profit Multiple", value: "0.4x", icon: "multiple" },
    ],
    askingPrice: 125000,
    speakHref: "#book-a-call",
    viewHref: "/deals/39",
    businessOverview: {
      content:
        "This is an established e-commerce  jewelry brand operating in the U.S. market, built around a broad product range rather than a single hero item. The business has scaled to over $5.8M in total revenue with $1.5M in net profit, supported by consistent demand and a repeatable acquisition strategy. Operations are streamlined, allowing the brand to maintain strong performance while remaining relatively simple to manage.",
      hasMore: true,
    },
    whyBuilt: {
      content:
        "The brand was originally created to build a long-term presence in a category with steady, year-round demand and strong gifting appeal. Jewelry lends itself well to repeat purchases and emotional buying behavior, making it a solid foundation for a scalable consumer brand. From early on, the focus was on creating a store that could support multiple products, test new offers quickly, and grow through paid traffic without being dependent on short-term trends.",
      hasMore: false,
    },
    revenueModel: {
      content:
        "Revenue is driven primarily through paid acquisition, with Meta platforms acting as the core traffic source. The approach centers on continuously testing creatives, offers, and audiences, then scaling what performs. Google Ads plays a supporting role by capturing high-intent traffic and improving overall conversion efficiency. This combination has allowed the business to generate consistent monthly revenue without relying on a single product or campaign.",
      hasMore: true,
    },
    whySelling: {
      content:
        "The decision to sell comes down to shifting priorities. As the owners have taken on other projects, their time and focus have become more limited. While the business continues to perform and generate steady profit, pushing it to the next level would require more dedicated attention. Rather than keeping it at its current pace, the choice was made to transition it to someone who can focus on scaling it further.",
      hasMore: true,
    },
    howOperatesColumns: {
      marketingEngine: {
        title: "Marketing Engine",
        subtitle: "Disciplined Creative Testing & Performance Scaling System",
        intro: "The growth model is driven by a structured, data-led acquisition process:",
        bullets: [
          "Continuous product and creative testing cadence",
          "Diverse messaging angles developed for each offer",
          "Aggressive budget allocation toward validated winners",
          "Underperforming campaigns quickly identified and cut",
        ],
        quote:
          "This approach builds a repeatable and scalable acquisition engine, reducing volatility and avoiding reliance on one-off winning products.",
      },
      fulfilmentSupplyChain: {
        title: "Fulfilment & Supply Chain",
        subtitle: "Automated, Asset-Light Delivery Infrastructure",
        intro: "Operations are supported by established third-party suppliers with fully integrated systems. Order flow is seamless:",
        bullets: [
          "Orders are transmitted instantly after purchase",
          "Fulfillment is handled directly by the supplier",
          "Production and shipping are completed without manual input",
        ],
        quote:
          "This setup removes the need for inventory, limits working capital requirements, and keeps operational overhead low. The business is designed to run efficiently and transition cleanly to a new owner without added complexity.",
      },
    },
    keyFinancialMetrics: [
      { month: "March 2025", revenue: "$179,227", expenses: "$132,913", netProfit: "$46,314" },
      { month: "April 2025", revenue: "$181,621", expenses: " $144,695", netProfit: "$36,926" },
      { month: "May 2025", revenue: "$176,473", expenses: "$139,903", netProfit: "$36,570" },
      { month: "Jun 2025", revenue: "$160,377", expenses: "$134,444", netProfit: "$25,933" },
      { month: "Jul 2025", revenue: "$243,318", expenses: "$199,558", netProfit: "$43,760" },
      { month: "Aug 2025", revenue: "$221,805", expenses: "$185,180", netProfit: "$36,625" },
      { month: "Sep 2025", revenue: "$239,283", expenses: "$217,319", netProfit: "$21,964 " },
      { month: "Oct 2025", revenue: "$105,059", expenses: "$95,134", netProfit: "$9,925" },
      { month: "Nov 2025", revenue: "$80,806", expenses: "$73,256", netProfit: "$7,550" },
      { month: "Dec 2025", revenue: "$76,803", expenses: "$64,079", netProfit: "$12,724" },
      { month: "Jan 2026", revenue: "$39,864", expenses: "$32,781", netProfit: "$7,083" },
      { month: "Feb 2026", revenue: "$34,644", expenses: "$28,250", netProfit: "$6,394" },
    ],
    downloadfile: "/assets/deals/39-PL-Feb-TT.xlsx",
    heroTitle: "A High-Revenue Jewelry Brand with Consistent Cash Flow",
    heroSubtitle: "Established Profitable U.S. Consumer Business",
  },
 {
    id: "40",
    platform: "Shopify",
    niche: "Design & Style",
    title: "A Trend-Driven Fashion Brand Built for Rapid Scaling",
    coverImage: "/assets/deals/card40.jpg",
    description:
      "Women's Apparel Store in a Rapidly Expanding Mexican Market. 7-Month-Old Business. $270K+ Revenue. $71K Profit. Strong Foundation with Room to Scale Aggressively.",
    verified: true,
    metrics: [
      { label: "TTM Revenue", value: "$272,446", icon: "revenue" },
      { label: "TTM Profit", value: "$71,818", icon: "profit" },
      { label: "Monthly Profit", value: "$10,259", icon: "monthly" },
      { label: "Site Age", value: "7 Months", icon: "age" },
      { label: "Asking Price", value: "$44,999", icon: "asking" },
      { label: "Profit Multiple", value: "0.6x", icon: "multiple" },
    ],
    askingPrice:  44999,
    speakHref: "#book-a-call",
    viewHref: "/deals/40",
    businessOverview: {
      content:
        "This is a 6-month-old fashion store focused on women’s apparel, operating in the Mexican market. The business centers around identifying trending styles and bringing them to market quickly through a flexible, multi-product setup. It has generated over $200K in revenue and close to $60K in profit so far, with a model designed to keep operations simple while allowing for consistent growth and easy scaling.",
      hasMore: true,
    },
    whyBuilt: {
      content:
        "The idea came from seeing how underdeveloped parts of the Latin American fashion market still are compared to the US and Europe. Demand is there, but competition and advertising costs are lower, which creates a strong opportunity. The store was built to take advantage of this by combining proven ad strategies with a rotating product catalog, making it possible to test, iterate, and scale quickly without being tied to one product or trend.",
      hasMore: false,
    },
    revenueModel: {
      content:
        "The business generates revenue through a mix of paid traffic and continuous product testing. New items are introduced regularly, and those that perform well are pushed further through advertising, while weaker ones are replaced. This keeps the store fresh and reduces reliance on a single winner. Most traffic comes from Meta platforms, with additional opportunities to expand into other channels as the business grows.",
      hasMore: true,
    },
    whySelling: {
      content:
        "The sale comes down to focus rather than performance. With several projects running at the same time, it’s become harder to give this business the attention it deserves. Instead of stretching resources thin, the decision was made to pass it on to someone who can fully focus on scaling it. The fundamentals are in place, and there’s still plenty of room to grow under the right owner.",
      hasMore: true,
    },
    howOperatesColumns: {
      marketingEngine: {
        title: "Marketing Engine",
        subtitle: "Performance-Driven Creative Testing & Scaling System",
        intro: "The acquisition strategy is built around:",
        bullets: [
          "Continuous testing of new products and creatives",
          "Multiple messaging angles deployed per offer",
          "Aggressive scaling of proven winners",
          "Rapid elimination of underperforming campaigns",
        ],
        quote:
          "This disciplined approach enables consistent customer acquisition and reduces reliance on single-product volatility, creating a repeatable and scalable growth framework.",
      },
      fulfilmentSupplyChain: {
        title: "Fulfilment & Supply Chain",
        subtitle: "Automated, Low-Overhead Supplier Infrastructure",
        intro: "The business operates through established third-party suppliers based in China. Order flow is fully systemized:",
        bullets: [
          "Orders are placed by customers through the store",
          "Orders are automatically transmitted to the supplier",
          "Supplier handles production, packing, and delivery",
        ],
        quote:
          "This structure removes the need for inventory holding, minimizes working capital requirements, and keeps operations lean. The supply chain is stable, efficient, and easily transferable to a new owner without disruption.",
      },
    },
    keyFinancialMetrics: [
      { month: "Sep 2025", revenue: "$5,247", expenses: "$4,786", netProfit: "$461" },
      { month: "Oct 2025", revenue: "$63,193", expenses: "$51,568", netProfit: "$11,625" },
      { month: "Nov 2025", revenue: "$55,679", expenses: "$43,884", netProfit: "$11,795" },
      { month: "Dec 2025", revenue: "$29,513", expenses: "$15,189", netProfit: "$14,324" },
      { month: "Jan 2026", revenue: "$33,856", expenses: "$23,905", netProfit: "$9,951" },
      { month: "Feb 2026", revenue: "$31,107", expenses: "$20,460", netProfit: "$10,647" },
      { month: "Mar 2026", revenue: "$53,851", expenses: "$40,836", netProfit: "$13,015" },
    ],
    downloadfile: "/assets/deals/40-PL-Feb-EDB.pdf",
    heroTitle: "A Trend-Driven Fashion Brand Built for Rapid Scaling",
    heroSubtitle: "Women’s Apparel Store in a Rapidly Expanding Mexican Market",
  },
 {
    id: "41",
    platform: "Shopify",
    niche: "Home & Garden Store",
    title: "A High-Utility Kitchen Brand Built Around Proven Products",
    coverImage: "/assets/deals/card41.jpg",
    description:
      "Solving a Clear Consumer Need with Simple, Scalable Design. Consistent Revenue. $7M+ Revenue Generated. $1M+ Profit. Positioned for Further Expansion.",
    verified: true,
    metrics: [
      { label: "TTM Revenue", value: "$7,027,088", icon: "revenue" },
      { label: "TTM Profit", value: "$1,155,511", icon: "profit" },
      { label: "Monthly Profit", value: "$96,292", icon: "monthly" },
      { label: "Site Age", value: "1+ Years", icon: "age" },
      { label: "Asking Price", value: "$599,999", icon: "asking" },
      { label: "Profit Multiple", value: "0.5x", icon: "multiple" },
    ],
    askingPrice:  599999,
    speakHref: "#book-a-call",
    viewHref: "/deals/41",
    businessOverview: {
      content:
        "This is a fast-scaling kitchen accessories business built around highly-practical products that solves a common everyday problem. By simplifying a traditionally complex task into something safe and easy to use, the brand quickly found strong traction with a broad consumer audience. The business has grown rapidly through a clear value proposition, strong conversion rates, and efficient paid acquisition. With consistent sales, healthy margins, and reliable supplier relationships already in place, it operates as a streamlined, product-led e-commerce business.",
      hasMore: true,
    },
    whyBuilt: {
      content:
        "The idea came from noticing how unnecessarily complicated many kitchen tools had become, especially for everyday users. Existing solutions often required skill, time, or confidence that the average consumer didn’t have, creating a clear gap in the market. The goal was to create a product that removed that friction — something simple, safe, and effective that anyone could use without prior experience. By focusing on ease of use and clear outcomes, the product immediately resonated with customers. Rather than building a brand around trends, the business was built around solving a real problem. That clarity is what allowed it to gain traction quickly and establish a strong foothold in the category.",
      hasMore: false,
    },
    revenueModel: {
      content:
        "The business operates on a direct-to-consumer model, with sales driven primarily through paid advertising across Meta and Google. Each channel plays a distinct role, combining demand capture with scalable customer acquisition. Google Ads targets high-intent users actively searching for solutions, while Meta focuses on creative-driven campaigns to generate new demand and scale volume. Continuous testing of creatives and messaging allows the business to consistently identify and scale winning angles. This approach creates a balanced and repeatable system for acquiring customers, without relying on a single channel or short-term trends.",
      hasMore: true,
    },
    whySelling: {
      content:
        "The decision to sell is based on a shift in focus rather than any performance issues. The business has reached a stage where further growth will require more attention toward brand expansion, product development, and scaling operations. At the same time, the owner is moving on to new projects and does not want to divide time across multiple ventures. Rather than slowing progress, the intention is to pass the business to someone who can fully focus on taking it to the next level. With strong fundamentals already in place, this presents an opportunity for a new owner to step into a profitable, well-structured business and continue building on its existing momentum.",
      hasMore: true,
    },
    howOperatesColumns: {
      marketingEngine: {
        title: "Marketing Engine",
        subtitle: "Creative Testing & Scalable Acquisition",
        intro: "Growth is driven by a structured but flexible approach to testing and scaling what performs.",
        bullets: [
          "Continuous testing of new creatives and messaging",
          "Multiple variations built around the same core product",
          "Scaling spend quickly on proven winners",
          "Cutting underperforming campaigns early",
        ],
        quote:
          "Rather than chasing trends, the focus is on refining a product that already converts well. This creates a more stable and repeatable growth pattern, built around improving performance over time instead of relying on constant product changes.",
      },
      fulfilmentSupplyChain: {
        title: "Fulfilment & Supply Chain",
        subtitle: "Established Supplier & Reliable Delivery",
        intro: "The supply chain is built around a long-term manufacturing partner, with fulfilment designed to stay consistent as volume increases.",
        bullets: [
          "Inventory is produced based on demand and forecasts",
          "Orders are packed and shipped directly to customers",
          "Supplier manages production, stock levels, and dispatch",
        ],
        quote:
          "This setup keeps operations straightforward while maintaining control over product quality and availability. With clear communication and predictable lead times, the business is able to scale without adding unnecessary operational complexity, making it easy for a new owner to step in and continue running it smoothly.",
      },
    },
    keyFinancialMetrics: [
      { month: "Apr 2025", revenue: "$231,563", expenses: "$158,683", netProfit: "$72,880" },
      { month: "May 2025", revenue: "$305,170", expenses: "$253,958", netProfit: "$51,212" },
      { month: "Jun 2025", revenue: "$330,935", expenses: "$307,284", netProfit: "$23,651" },
      { month: "Jul 2025", revenue: "$356,875", expenses: "$310,402", netProfit: "$46,473" },
      { month: "Aug 2025", revenue: "$536,380", expenses: "$413,578", netProfit: "$122,802" },
      { month: "Sep 2025", revenue: "$590,848", expenses: "$505,884", netProfit: "$84,964" },
      { month: "Oct 2025", revenue: "$740,666", expenses: "$600,318", netProfit: "$140,348" },
      { month: "Nov 2025", revenue: "$164,084", expenses: "$131,703", netProfit: "$32,381" },
      { month: "Dec 2025", revenue: "$122,225", expenses: "$112,754", netProfit: "$9,470" },
      { month: "Jan 2026", revenue: "$563,833", expenses: "$475,123", netProfit: "$88,710" },
      { month: "Feb 2026", revenue: "$286,665", expenses: "$292,782", netProfit: "-$6,117" },
      { month: "Mar 2026", revenue: "$221,053", expenses: "$108,991", netProfit: "$112,062" },
    ],
    downloadfile: "/assets/deals/41-PL-Jan-No.xlsx",
    heroTitle: "A High-Utility Kitchen Brand Built Around Proven Products",
    heroSubtitle: "Solving a Clear Consumer Need with Simple, Scalable Design",
  },
 {
    id: "42",
    platform: "Shopify",
    niche: "Education",
    title: "A Scalable Educational Toy Brand with Proven Demand",
    coverImage: "/assets/deals/card42.jpg",
    description:
      "A 1+ Year Old Shopify Brand Selling Kids Educational Toys. Over $1.3M Revenue Generated With $119k NET Profit. Ready To Be Scaled Into New SKUs",
    verified: true,
    metrics: [
      { label: "TTM Revenue", value: "$1,527,889", icon: "revenue" },
      { label: "TTM Profit", value: "$139,140", icon: "profit" },
      { label: "Monthly Profit", value: "$11,595", icon: "monthly" },
      { label: "Site Age", value: "1+ Years", icon: "age" },
      { label: "Asking Price", value: "$129,999", icon: "asking" },
      { label: "Profit Multiple", value: "0.9x", icon: "multiple" },
    ],
    askingPrice:  129999,
    speakHref: "#book-a-call",
    viewHref: "/deals/42",
    businessOverview: {
      content:
        "This is a U.S.-focused ecommerce brand operating in the children’s educational toy space, built around a small number of proven products rather than a wide catalog. Over the past year, the business has generated over $1.5M in revenue with consistent monthly sales, supported by a combination of paid acquisition, influencer activity, and repeat customer demand. The operation is already structured with external support across creative, customer service, and fulfillment, making it straightforward to manage while leaving room to expand the product range.",
      hasMore: true,
    },
    whyBuilt: {
      content:
        "The business started as a way to gain hands-on experience building a consumer brand from the ground up, with a focus on a niche that naturally lends itself to strong demand—parents purchasing educational products for their children. Early on, a standout product was identified and used as the foundation to test the market, validate demand, and build out the brand. Over time, it evolved from a learning project into a fully functioning store with established systems across marketing, operations, and supplier relationships.",
      hasMore: false,
    },
    revenueModel: {
      content:
        "Sales are primarily driven through paid social advertising, where creatives and offers are tested continuously and scaled based on performance. Influencer collaborations and organic content also play an important role, particularly in building trust with the target audience. Email marketing supports retention and repeat purchases, while the overall model allows for new products to be introduced and tested without disrupting the core revenue stream.",
      hasMore: true,
    },
    whySelling: {
      content:
        "The sale is driven by a shift in priorities rather than performance. The owner is moving focus toward a new business in a different category that requires full attention and deeper personal alignment. While the brand continues to generate revenue and operate reliably, unlocking its next phase of growth will require more consistent involvement in areas like creative strategy, product expansion, and marketing. This creates an opportunity for a buyer to step in and scale an already validated business.",
      hasMore: true,
    },
    howOperatesColumns: {
      marketingEngine: {
        title: "Marketing Engine",
        subtitle: "Performance-Driven Acquisition & Creative Testing System",
        intro: "The business is built on a structured and repeatable marketing framework:",
        bullets: [
          "Ongoing testing of new products and creative concepts",
          "Multiple creative variations deployed per offer",
          "Capital efficiently allocated toward validated winners",
          "Underperforming campaigns quickly identified and cut",
        ],
        quote:
          "This system enables consistent customer acquisition while reducing reliance on any single product or campaign, supporting more stable and scalable revenue generation.",
      },
      fulfilmentSupplyChain: {
        title: "Fulfilment & Supply Chain",
        subtitle: "Established Supplier Network with Scalable Infrastructure",
        intro: "Operations are supported by a dedicated fulfillment partner with a warehouse in China, managing both inventory and order execution. Order flow is streamlined:",
        bullets: [
          "Inventory is forecasted and pre-positioned with the supplier",
          "Orders are processed with same-day pick, pack, and dispatch",
          "End-to-end shipping handled directly to the customer",
        ],
        quote:
          "This setup ensures reliable delivery timelines, strong operational visibility, and efficient scaling without requiring additional infrastructure. The supply chain is already established, reducing execution risk for a new owner while supporting future growth.",
      },
    },
    keyFinancialMetrics: [
      { month: "March 2025", revenue: "$5,414", expenses: "$8,224", netProfit: "-$2,810" },
      { month: "April 2025", revenue: "$91,759", expenses: "$75,255", netProfit: "$16,504" },
      { month: "May 2025", revenue: "$76,524", expenses: "$80,007", netProfit: "-$3,483" },
      { month: "Jun 2025", revenue: "$66,750", expenses: "$65,770", netProfit: "$980" },
      { month: "Jul 2025", revenue: "$63,214", expenses: "$55,701", netProfit: "$7,513" },
      { month: "Aug 2025", revenue: "$79,263", expenses: "$65,335", netProfit: "$13,928" },
      { month: "Sep 2025", revenue: "$155,944", expenses: "$138,783", netProfit: "$17,161" },
      { month: "Oct 2025", revenue: "$171,797", expenses: "$180,141", netProfit: "-$8,344" },
      { month: "Nov 2025", revenue: "$383,657", expenses: "$322,122", netProfit: "$61,535" },
      { month: "Dec 2025", revenue: "$269,242", expenses: "$259,456", netProfit: "$9,786" },
      { month: "Jan 2026", revenue: "$25,387", expenses: "$27,216", netProfit: "-$1,829" },
      { month: "Feb 2026", revenue: "$138,938", expenses: "$110,739", netProfit: "$28,199" },
    ],
    downloadfile: "/assets/deals/42-PL-Feb-ML.xlsx",
    heroTitle: "A Scalable Educational Toy Brand with Proven Demand",
    heroSubtitle: "Established Ecommerce Business Serving U.S. Consumers",
  },
 {
    id: "43",
    platform: "Shopify",
    niche: "Automotive",
    title: "A Niche E-commerce Brand Serving a Dedicated Rider Market",
    coverImage: "/assets/deals/card43.jpg",
    description:
      "Premium Motorcycle Intercom Products with Proven Demand. 2.5-Year Operating History. $572K Revenue. $61K Profit. Built for Scalable Growth.",
    verified: true,
    metrics: [
      { label: "TTM Revenue", value: "$503,321", icon: "revenue" },
      { label: "TTM Profit", value: "$57,706", icon: "profit" },
      { label: "Monthly Profit", value: "$4,808", icon: "monthly" },
      { label: "Site Age", value: "2+ Years", icon: "age" },
      { label: "Asking Price", value: "$39,999", icon: "asking" },
      { label: "Profit Multiple", value: "0.6x", icon: "multiple" },
    ],
    askingPrice: 39999,
    speakHref: "#book-a-call",
    viewHref: "/deals/43",
    businessOverview: {
      content:
        "This is a niche e-commerce brand focused on motorcycle communication systems, built by riders who understood the gaps in the market firsthand. The product offering is centered around intercom headsets that balance functionality, reliability, and price—something that resonates strongly with everyday riders. Over the past 2.5 years, the business has grown into a recognizable brand within its space, generating over $570K in annual revenue and $61K in net profit. The setup remains lean, with no inventory held and a structure that allows the business to run efficiently without heavy operational demands.",
      hasMore: true,
    },
    whyBuilt: {
      content:
        "The business started from a simple observation: most intercom systems on the market were either too expensive or didn’t deliver on what riders actually needed. Being riders ourselves, we saw the opportunity to create something better positioned—practical, accessible, and built around real use cases. What began as a side project during university quickly turned into a focused effort to build a brand within a niche we genuinely understood. That foundation has shaped everything—from product selection to messaging—and is a big reason why the business has been able to find consistent traction.",
      hasMore: false,
    },
    revenueModel: {
      content:
        "Revenue is driven primarily through paid acquisition, with Meta Ads acting as the core growth channel. The approach is straightforward: test creatives, identify what resonates with riders, and scale the campaigns that perform. Because the product sits in a clear niche with strong intent, campaigns tend to convert well when positioned correctly. The model allows for ongoing optimization without overcomplicating the process, while still leaving room to expand into additional channels like Google or YouTube.",
      hasMore: true,
    },
    whySelling: {
      content:
        "The brand is stable, operational, and still has clear growth potential, but our focus is now moving toward other ventures that require full attention. At this stage, the business would benefit from someone who can dedicate more time to scaling—whether that’s pushing marketing further, expanding the product range, or strengthening the brand. Rather than holding it back by splitting focus, we’re choosing to pass it on at a point where a new owner can take it further.",
      hasMore: true,
    },
    howOperatesColumns: {
      marketingEngine: {
        title: "Marketing Engine",
        subtitle: "Creative-Led Acquisition Built Around Rider Psychology",
        intro: "Growth comes from understanding how riders actually think and buy, not from overcomplicated systems. The focus has always been on putting the product in front of the right audience with messaging that feels real and relevant.",
        bullets: [
          "Consistent testing of new creatives and angles",
          "Different positioning styles to match rider preferences",
          "Scaling spend behind ads that clearly convert",
          "Cutting underperforming campaigns early",
        ],
        quote:
          "Rather than relying on one breakout product or ad, the business improves performance over time by continuously refining what works and doubling down on it.",
      },
      fulfilmentSupplyChain: {
        title: "Fulfilment & Supply Chain",
        subtitle: "Agent-Led Sourcing with Flexible, Low-Commitment Operations",
        intro: "The supply chain is handled through a dedicated sourcing agent who works directly with manufacturers, manages production, and oversees shipping. This removes the need to deal with factories or logistics on a day-to-day basis.",
        bullets: [
          "Orders are sent directly to the agent after purchase",
          "The agent handles sourcing, packaging, and dispatch",
          "Branded packaging is arranged where needed",
          "Payment is made after fulfillment, not upfront",
        ],
        quote:
          "This setup keeps things flexible and avoids tying up cash in inventory, while still allowing the brand to maintain a more customized feel than standard dropshipping. It’s simple to manage, easy to understand, and already dialed in.",
      },
    },
    keyFinancialMetrics: [
      { month: "Apr 2025", revenue: "$84,694", expenses: "$79,210", netProfit: "$5,484" },
      { month: "May 2025", revenue: "$72,459", expenses: "$68,647", netProfit: "$3,812" },
      { month: "Jun 2025", revenue: "$58,516", expenses: "$53,218", netProfit: "$5,298" },
      { month: "Jul 2025", revenue: "$44,887", expenses: "$39,798", netProfit: "$5,089" },
      { month: "Aug 2025", revenue: "$48,534", expenses: "$39,469", netProfit: "$9,065" },
      { month: "Sep 2025", revenue: "$47,143", expenses: "$40,917", netProfit: "$6,226" },
      { month: "Oct 2025", revenue: "$36,890", expenses: "$34,415", netProfit: "$2,475" },
      { month: "Nov 2025", revenue: "$33,287", expenses: "$29,445", netProfit: "$3,842" },
      { month: "Dec 2025", revenue: "$16,398", expenses: "$11,841", netProfit: "$4,557" },
      { month: "Jan 2026", revenue: "$12,210", expenses: "$9,849", netProfit: "$2,361" },
      { month: "Feb 2026", revenue: "$15,462", expenses: "$10,711", netProfit: "$4,751" },
      { month: "Mar 2026", revenue: "$32,841", expenses: "$28,095", netProfit: "$4,746" },
    ],
    downloadfile: "/assets/deals/43-PL-Feb-RK.xlsx",
    heroTitle: "A Niche E-commerce Brand Serving a Dedicated Rider Market",
    heroSubtitle: "Premium Motorcycle Intercom Products with Proven Demand",
  },
 {
    id: "44",
    platform: "Shopify",
    niche: "Health & Beauty",
    title: "A Lean Profitable Supplements Brand for the Mexican Market",
    coverImage: "/assets/deals/card44.jpg",
    description:
      "Positioned Where Demand Is Rising and Competition Is Still Inefficient. $44K+ Monthly Revenue. $7K+ Monthly Profit. Clear Scaling Opportunity Ahead.",
    verified: true,
    metrics: [
      { label: "TTM Revenue", value: "$447,116", icon: "revenue" },
      { label: "TTM Profit", value: "$70,790", icon: "profit" },
      { label: "Monthly Profit", value: "$7,079", icon: "monthly" },
      { label: "Site Age", value: "10 Months", icon: "age" },
      { label: "Asking Price", value: "$29,999", icon: "asking" },
      { label: "Profit Multiple", value: "0.4x", icon: "multiple" },
    ],
    askingPrice:  29999,
    speakHref: "#book-a-call",
    viewHref: "/deals/44",
    businessOverview: {
      content:
        "This is a growing supplements brand focused on the Mexican market, where demand for accessible health products continues to increase. The business has been built around straightforward, high-converting offers rather than overcomplicated branding, allowing it to scale efficiently in a relatively underdeveloped ecommerce space. From early on, the focus has been on clarity — simple messaging, competitive pricing, and products that are easy for customers to understand and trust. This approach has allowed the business to generate consistent sales while keeping operations lean and manageable.",
      hasMore: true,
    },
    whyBuilt: {
      content:
        "The business started from recognizing how underserved the supplements market is in Mexico compared to more mature regions. While demand is clearly there, many existing brands either price themselves too high or fail to communicate their value effectively. The goal was to create something more direct — products positioned in a way that feels approachable, trustworthy, and aligned with what customers are already searching for. Instead of reinventing the category, the focus was on executing better within it.",
      hasMore: false,
    },
    revenueModel: {
      content:
        "Revenue is primarily driven through paid acquisition, with Meta Ads and Google Ads working together to capture both demand and intent. Meta is used for creative testing and scaling winning angles, while Google focuses on high-intent traffic that converts more predictably. The strategy has been less about chasing one winning product and more about maintaining consistent performance through ongoing testing and optimization. This creates a steadier revenue base and reduces reliance on short-term spikes.",
      hasMore: true,
    },
    whySelling: {
      content:
        "The decision to sell comes down to focus rather than performance. The business is stable, profitable, and running smoothly, but managing multiple projects at once limits how far each one can be pushed. At this stage, it makes more sense for the business to transition to someone who can dedicate full attention to scaling it further, rather than keeping it under a split focus where growth may slow over time.",
      hasMore: true,
    },
    howOperatesColumns: {
      marketingEngine: {
        title: "Marketing Engine",
        subtitle: "Performance-Driven Acquisition Built for an Underserved Market",
        intro: "The growth strategy is centered around simple offers and fast creative iteration:",
        bullets: [
          "Continuous testing of new angles tailored to local buying behavior",
          "Multiple creatives launched per product to identify winning messaging",
          "Rapid scaling of profitable campaigns once performance stabilizes",
          "Quick removal of underperforming ads to maintain efficiency",
        ],
        quote:
          "Because the market is less saturated than the U.S., strong creatives tend to hold performance longer, allowing campaigns to scale more predictably once a winning angle is found. This creates a more stable acquisition model with room to push spend without immediate creative fatigue.",
      },
      fulfilmentSupplyChain: {
        title: "Fulfilment & Supply Chain",
        subtitle: "Lean, Flexible Dropshipping Setup",
        intro: "The business operates through a streamlined supplier network built for consistency:",
        bullets: [
          "Orders are automatically routed to suppliers after checkout",
          "Suppliers handle packing and shipping directly to customers",
          "Tracking is generated and shared without manual involvement",
        ],
        quote:
          "Overall, the supply chain is designed for flexibility — making it easy to scale volume without increasing operational complexity.",
      },
    },
    keyFinancialMetrics: [
      { month: "Jun 2025", revenue: "$7,330", expenses: "$5,606", netProfit: "$1,724" },
      { month: "Jul 2025", revenue: "$65,661", expenses: "$53,644", netProfit: "$12,017" },
      { month: "Aug 2025", revenue: "$70,588", expenses: "$61,880", netProfit: "$8,708" },
      { month: "Sep 2025", revenue: "$100,887", expenses: "$92,133", netProfit: "$8,754" },
      { month: "Oct 2025", revenue: "$75,355", expenses: "$65,497", netProfit: "$9,858" },
      { month: "Nov 2025", revenue: "$55,028", expenses: "$3,341", netProfit: "$10,308" },
      { month: "Dec 2025", revenue: "$24,426", expenses: "$20,925", netProfit: "$3,501" },
      { month: "Jan 2026", revenue: "$20,609", expenses: "$16,589", netProfit: "$4,020" },
      { month: "Feb 2026", revenue: "$13,721", expenses: "$10,619", netProfit: "$3,102" },
      { month: "Mar 2026", revenue: "$13,511", expenses: "$7,712", netProfit: "$5,799" },
    ],
    downloadfile: "/assets/deals/44-PL-Feb-VM.xlsx",
    heroTitle: "A Lean Profitable Supplements Brand for the Mexican Market",
    heroSubtitle: "Positioned Where Demand Is Rising and Competition Is Still Inefficient",
  },
 {
    id: "45",
    platform: "Shopify",
    niche: "Design & Style",
    title: "A Profitable Fashion Brand with Clear Expansion Opportunities",
    coverImage: "/assets/deals/card45.jpg",
    description:
      "Established European Store with Consistent Sales Performance. 1+ Year Old. $1M+ Revenue. $150K+ Profit. 14% Margins. Stable and Scalable.",
    verified: true,
    metrics: [
      { label: "TTM Revenue", value: "$1,066,750", icon: "revenue" },
      { label: "TTM Profit", value: "$150,074", icon: "profit" },
      { label: "Monthly Profit", value: "$12,506", icon: "monthly" },
      { label: "Site Age", value: "1+ Years", icon: "age" },
      { label: "Asking Price", value: "$85,000", icon: "asking" },
      { label: "Profit Multiple", value: "0.6x", icon: "multiple" },
    ],
    askingPrice:  85000,
    speakHref: "#book-a-call",
    viewHref: "/deals/45",
    businessOverview: {
      content:
        "This is a strong fashion-focused ecommerce store operating in the European market, built around a simple but effective direct-to-consumer model. The brand has been developed with a clear focus on product selection, customer appeal, and efficient execution rather than unnecessary complexity. Over its first year, the business has generated just over $1M in revenue and $146K in net profit. The structure is intentionally lean, allowing it to operate smoothly while still leaving plenty of room for further growth and refinement.",
      hasMore: true,
    },
    whyBuilt: {
      content:
        "The store was created out of a genuine interest in building a fashion brand that could balance creativity with performance. From the beginning, the goal was to test products quickly, understand what resonates with customers, and build something that could scale without becoming operationally heavy. It wasn’t about chasing a single winning product, but about creating a system that consistently identifies demand and turns it into revenue. That approach has shaped how the business operates today and why it has been able to grow steadily within its niche.",
      hasMore: false,
    },
    revenueModel: {
      content:
        "Revenue is driven primarily through paid acquisition, with a focus on testing and scaling products based on real performance data. Campaigns are structured to identify what works quickly, then allocate budget toward the strongest performers. Google Ads complements this by capturing high-intent traffic, while Meta remains the main driver for discovery and scaling. This combination creates a reliable flow of customers and allows the business to maintain consistent performance without relying on a single channel.",
      hasMore: true,
    },
    whySelling: {
      content:
        "While the business is running well and generating consistent profit, the owner is moving toward new projects and doesn’t want to divide attention across multiple ventures. At its current stage, the store is stable and proven, but there is still a clear upside for someone willing to invest more time into scaling it. Passing it on now allows a new owner to take over a functioning business and push it further, rather than starting from scratch.",
      hasMore: true,
    },
    howOperatesColumns: {
      marketingEngine: {
        title: "Marketing Engine",
        subtitle: "Performance-Driven Acquisition & Product Testing System",
        intro: "Growth is driven by a simple but effective approach: test quickly, scale what works, and cut what doesn’t. The business consistently introduces new products and creatives, using real performance data to guide decisions rather than assumptions.",
        bullets: [
          "Ongoing product and creative testing",
          "Multiple variations per offer to find winners",
          "Budget shifted aggressively toward top performers",
          "Underperforming campaigns removed early",
        ],
        quote:
          "This keeps the business moving forward without relying on a single product, creating a more stable and repeatable growth pattern over time.",
      },
      fulfilmentSupplyChain: {
        title: "Fulfilment & Supply Chain",
        subtitle: "Lean Dropshipping Model with Minimal Overhead",
        intro: "The store operates on a streamlined dropshipping setup, meaning products are only sourced and shipped after a customer places an order. There is no need to manage inventory or handle logistics directly.",
        bullets: [
          "Orders are automatically routed to suppliers",
          "Suppliers handle packing and shipping",
          "Tracking is synced back to the store in real time",
        ],
        quote:
          "This setup keeps operations simple, reduces upfront costs, and allows the business to stay flexible when testing new products or scaling demand. It’s a structure that’s easy to manage and straightforward for a new owner to step into.",
      },
    },
    keyFinancialMetrics: [
      { month: "Apr 2025", revenue: "$42,621", expenses: "$36,406", netProfit: "$6,215" },
      { month: "May 2025", revenue: "$89,727", expenses: "$74,232", netProfit: "$15,495" },
      { month: "Jun 2025", revenue: "$33,892", expenses: "$30,800", netProfit: "$3,092" },
      { month: "Jul 2025", revenue: "$85,272", expenses: "$65,305", netProfit: "$19,967" },
      { month: "Aug 2025", revenue: "$109,186", expenses: "$89,130", netProfit: "$20,056" },
      { month: "Sep 2025", revenue: "$86,271", expenses: "$77,523", netProfit: "$8,748" },
      { month: "Oct 2025", revenue: "$57,650", expenses: "$52,892", netProfit: "$4,758" },
      { month: "Nov 2025", revenue: "$84,271", expenses: "$67,522", netProfit: "$16,749" },
      { month: "Dec 2025", revenue: "$171,835", expenses: "$151,528", netProfit: "$20,307" },
      { month: "Jan 2026", revenue: "$142,131", expenses: "$122,152", netProfit: "$19,979" },
      { month: "Feb 2026", revenue: "$85,502", expenses: "$78,842", netProfit: "$6,660" },
      { month: "Mar 2026", revenue: "$78,392", expenses: "$70,344", netProfit: "$8,048" },
    ],
    downloadfile: "/assets/deals/45-PL-Feb-DL.xlsx",
    heroTitle: "A Profitable Fashion Brand with Clear Expansion Opportunities",
    heroSubtitle: "Established European Store with Consistent Sales Performance",
  },
 {
    id: "46",
    platform: "Shopify",
    niche: "Health & Beauty",
    title: "High-Margin Wellness Brand with Built-In Recurring Revenue",
    coverImage: "/assets/deals/card46.jpg",
    description:
      "Explosive 1+ Year Old Vaginal Health Supplement Brand. Generating Over $400,000 Net Profit And $685k+ Total Revenue. With $10k+ Monthly Subscription",
    verified: true,
    metrics: [
      { label: "TTM Revenue", value: "$322,311", icon: "revenue" },
      { label: "TTM Profit", value: "$210,338", icon: "profit" },
      { label: "Monthly Profit", value: "$17,528", icon: "monthly" },
      { label: "Site Age", value: "1+ Years", icon: "age" },
      { label: "Asking Price", value: "$65,000", icon: "asking" },
      { label: "Profit Multiple", value: "0.3x", icon: "multiple" },
    ],
    askingPrice:  65000,
    speakHref: "#book-a-call",
    viewHref: "/deals/46",
    businessOverview: {
      content:
        "This is a fast-growing direct-to-consumer women’s wellness brand focused on high-demand, repeat-use products within a highly engaged niche. The business has been built around strong product-market fit, combining emotional resonance with performance-driven marketing to consistently convert and retain customers. With over $320K in revenue and $210K+ in profit, the brand operates at an exceptional 65% margin. A growing subscription base and strong reorder behavior create reliable cash flow, while the lean structure keeps operations efficient and highly scalable.",
      hasMore: true,
    },
    whyBuilt: {
      content:
        "The brand was created to serve a market that is both deeply personal and often underserved—women actively looking for better, more effective wellness solutions. Rather than following existing competitors, the approach was to refine the product and position it in a way that felt more compelling, trustworthy, and results-driven. That shift in angle quickly validated itself through strong early traction. Customers connected with both the product and the messaging, allowing the business to scale while building genuine demand rather than relying purely on short-term trends.",
      hasMore: false,
    },
    revenueModel: {
      content:
        "Revenue is generated through a mix of direct-response advertising, subscription-based purchases, and multi-channel distribution. Shopify acts as the core funnel, where traffic is converted through optimized creatives and high-performing landing pages. TikTok Shop and Amazon add additional layers of distribution, capturing both impulse-driven and intent-based buyers. The subscription component plays a key role in increasing lifetime value, creating a more predictable and compounding revenue stream over time.",
      hasMore: true,
    },
    whySelling: {
      content:
        "The business is performing strongly, but scaling it to the next level requires focused execution across new channels, product expansion, and infrastructure improvements. Rather than splitting time across multiple opportunities, the decision has been made to transition the business while it’s in a healthy and profitable position. There is clear upside—particularly through TikTok Shop, creator partnerships, and marketplace growth—that has not yet been fully exploited. For a buyer looking to step into a high-margin business with proven demand and multiple growth levers, this represents a strong opportunity.",
      hasMore: true,
    },
    howOperatesColumns: {
      marketingEngine: {
        title: "Marketing Engine",
        subtitle: "Creative-Driven Acquisition with Strong Repeat Revenue",
        intro: "Growth is driven by a consistent flow of high-performing creatives across Meta and TikTok. The focus is on testing new angles, identifying what resonates, and quickly scaling what works. The system is built around:",
        bullets: [
          "Ongoing creative testing and iteration",
          "Leveraging native, UGC-style content",
          "Scaling proven ads across platforms",
          "Supporting retention through subscriptions",
        ],
        quote:
          "This approach allows the business to continuously acquire customers while increasing lifetime value through repeat purchases.",
      },
      fulfilmentSupplyChain: {
        title: "Fulfilment & Supply Chain",
        subtitle: "Lean Inventory Model with U.S. Fulfilment",
        intro: "The business operates with inventory sourced from China and shipped to the U.S., where orders are fulfilled directly to customers. This allows for faster delivery while maintaining control over stock levels. Order Process:",
        bullets: [
          "Customer places order",
          "Product is shipped from U.S.-held inventory",
          "Inventory is restocked based on demand",
        ],
        quote:
          "This structure improves delivery speed, keeps operations simple, and avoids the limitations of traditional dropshipping.",
      },
    },
    keyFinancialMetrics: [
      { month: "Mar 2025", revenue: "$30,618", expenses: "$13,666", netProfit: "$16,952" },
      { month: "Apr 2025", revenue: "$32,033", expenses: "$15,364", netProfit: "$16,669" },
      { month: "May 2025", revenue: "$73,503", expenses: "$18,859", netProfit: "$54,644" },
      { month: "Jun 2025", revenue: "$54,032", expenses: "$17,441", netProfit: "$36,591" },
      { month: "Jul 2025", revenue: "$29,733", expenses: "$7,790", netProfit: "$21,943" },
      { month: "Aug 2025", revenue: "$20,451", expenses: "$9,242", netProfit: "$11,209" },
      { month: "Sep 2025", revenue: "$20,136", expenses: "$7,476", netProfit: "$12,660" },
      { month: "Oct 2025", revenue: "$18,399", expenses: "$13,266", netProfit: "$5,133" },
      { month: "Nov 2025", revenue: "$13,649", expenses: "$3,341", netProfit: "$10,308" },
      { month: "Dec 2025", revenue: "$11,898", expenses: "$2,388", netProfit: "$9,510" },
      { month: "Jan 2026", revenue: "$9,526", expenses: "$232", netProfit: "$9,294" },
      { month: "Feb 2026", revenue: "$8,333", expenses: "$2,908", netProfit: "$5,425" },
    ],
    downloadfile: "/assets/deals/46-PL-Feb-PY.xlsx",
    heroTitle: "High-Margin Wellness Brand with Built-In Recurring Revenue",
    heroSubtitle: "Modern Women’s Wellness Business with Strong Customer Loyalty",
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
      { label: "Site Age", value: "11 Months", icon: "age" },
      { label: "Sold For", value: "$12,500", icon: "asking" },
      { label: "Profit Multiple", value: "0.27x", icon: "multiple" },
    ],
    askingPrice: 12500,
    speakHref: "#book-a-call",
    viewHref: "/deals/26",
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
      { label: "Site Age", value: "6 Months", icon: "age" },
      { label: "Sold For", value: "$35,000", icon: "asking" },
      { label: "Profit Multiple", value: "0.52x", icon: "multiple" },
    ],
    askingPrice: 35000,
    speakHref: "#book-a-call",
    viewHref: "/deals/25",
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
      { label: "Site Age", value: "10 Months", icon: "age" },
      { label: "Sold For", value: "$99,999", icon: "asking" },
      { label: "Profit Multiple", value: "1.08x", icon: "multiple" },
    ],
    askingPrice: 99999,
    speakHref: "#book-a-call",
    viewHref: "/deals/24",
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
      { label: "Site Age", value: "6 Months", icon: "age" },
      { label: "Sold For", value: "$199,999", icon: "asking" },
      { label: "Profit Multiple", value: "0.86x", icon: "multiple" },
    ],
    askingPrice: 199999,
    speakHref: "#book-a-call",
    viewHref: "/deals/23",
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
      { label: "Site Age", value: "9 Months", icon: "age" },
      { label: "Sold For", value: "$14,999", icon: "asking" },
      { label: "Profit Multiple", value: "0.83x", icon: "multiple" },
    ],
    askingPrice: 14999,
    speakHref: "#book-a-call",
    viewHref: "/deals/22",
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
      { label: "Site Age", value: "1+ Year", icon: "age" },
      { label: "Sold For", value: "$285,000", icon: "asking" },
      { label: "Profit Multiple", value: "1.19x", icon: "multiple" },
    ],
    askingPrice: 285000,
    speakHref: "#book-a-call",
    viewHref: "/deals/21",
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
      { label: "Site Age", value: "8 Months", icon: "age" },
      { label: "Sold For", value: "$12,500", icon: "asking" },
      { label: "Profit Multiple", value: "1.51x", icon: "multiple" },
    ],
    askingPrice: 12500,
    speakHref: "#book-a-call",
    viewHref: "/deals/20",
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
      { label: "Site Age", value: "8 Months", icon: "age" },
      { label: "Sold For", value: "$22,500", icon: "asking" },
      { label: "Profit Multiple", value: "0.38x", icon: "multiple" },
    ],
    askingPrice: 22500,
    speakHref: "#book-a-call",
    viewHref: "/deals/19",
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
      { label: "Site Age", value: "2+ Years", icon: "age" },
      { label: "Sold For", value: "$99,999", icon: "asking" },
      { label: "Profit Multiple", value: "0.87x", icon: "multiple" },
    ],
    askingPrice: 99999,
    speakHref: "#book-a-call",
    viewHref: "/deals/18",
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
      { label: "Site Age", value: "10 Months", icon: "age" },
      { label: "Sold For", value: "$124,999", icon: "asking" },
      { label: "Profit Multiple", value: "0.81x", icon: "multiple" },
    ],
    askingPrice: 124999,
    speakHref: "#book-a-call",
    viewHref: "/deals/17",
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
      { label: "Site Age", value: "3 Months", icon: "age" },
      { label: "Sold For", value: "$29,999", icon: "asking" },
      { label: "Profit Multiple", value: "1x", icon: "multiple" },
    ],
    askingPrice: 29999,
    speakHref: "#book-a-call",
    viewHref: "/deals/16",
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
      { label: "Site Age", value: "1.8 Years", icon: "age" },
      { label: "Sold For", value: "$160,000", icon: "asking" },
      { label: "Profit Multiple", value: "0.67x", icon: "multiple" },
    ],
    askingPrice: 160000,
    speakHref: "#book-a-call",
    viewHref: "/deals/15",
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
      { label: "Site Age", value: "1+ Year", icon: "age" },
      { label: "Sold For", value: "$65,000", icon: "asking" },
      { label: "Profit Multiple", value: "0.53x", icon: "multiple" },
    ],
    askingPrice: 65000,
    speakHref: "#book-a-call",
    viewHref: "/deals/14",
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
      { label: "Site Age", value: "7 Months", icon: "age" },
      { label: "Sold For", value: "$30,000", icon: "asking" },
      { label: "Profit Multiple", value: "0.49x", icon: "multiple" },
    ],
    askingPrice: 30000,
    speakHref: "#book-a-call",
    viewHref: "/deals/13",
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
      { label: "Site Age", value: "1+ Year", icon: "age" },
      { label: "Sold For", value: "$69,999", icon: "asking" },
      { label: "Profit Multiple", value: "0.83x", icon: "multiple" },
    ],
    askingPrice: 69999,
    speakHref: "#book-a-call",
    viewHref: "/deals/12",
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
      { label: "Site Age", value: "7 Months", icon: "age" },
      { label: "Sold For", value: "$70,000", icon: "asking" },
      { label: "Profit Multiple", value: "0.86x", icon: "multiple" },
    ],
    askingPrice: 70000,
    speakHref: "#book-a-call",
    viewHref: "/deals/11",
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
      { label: "Site Age", value: "7 Months", icon: "age" },
      { label: "Sold For", value: "$300,000", icon: "asking" },
      { label: "Profit Multiple", value: "0.99x", icon: "multiple" },
    ],
    askingPrice: 300000,
    speakHref: "#book-a-call",
    viewHref: "/deals/10",
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
      { label: "Site Age", value: "2+ Years", icon: "age" },
      { label: "Sold For", value: "$205,000", icon: "asking" },
      { label: "Profit Multiple", value: "0.63x", icon: "multiple" },
    ],
    askingPrice: 205000,
    speakHref: "#book-a-call",
    viewHref: "/deals/9",
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
      { label: "Site Age", value: "7 Months", icon: "age" },
      { label: "Sold For", value: "$350,000", icon: "asking" },
      { label: "Profit Multiple", value: "1.12x", icon: "multiple" },
    ],
    askingPrice: 350000,
    speakHref: "#book-a-call",
    viewHref: "/deals/8",
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
      { label: "Site Age", value: "8 Months", icon: "age" },
      { label: "Sold For", value: "$185,000", icon: "asking" },
      { label: "Profit Multiple", value: "0.82x", icon: "multiple" },
    ],
    askingPrice: 185000,
    speakHref: "#book-a-call",
    viewHref: "/deals/7",
  },
];
