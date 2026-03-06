// Sellers page theme: primary #16a34a, light bg #f0fdf4, accent #22c55e
export const sellersTheme = {
  primary: "#16a34a",
  lightBg: "#f0fdf4",
  accent: "#22c55e",
};

/** Hero video playback rate — lower = slower (0.5 = half speed, 1 = normal) */
export const HERO_VIDEO_PLAYBACK_RATE = 0.65;

export const sellersHeroConfig = {
  headline: {
    before: "Fast, Liquid Cash Exits, ",
    highlight: "Without CapEx",
    after: "",
  },
  subtitle:
    "Sell your SaaS or e-commerce business through an operator-led process — verified valuations, qualified buyers, and a structured exit in as little as 10 days.",
  highlightedTerms: ["verified valuations", "qualified buyers", "structured exit"],
  cta: {
    primary: { label: "Get Started", href: "#get-offer" },
    secondary: { label: "Book a Call", href: "#book-a-call" },
  },
  videoThumbnail: "/assets/sellers_landing/hero/hero.png",
  /** Full-screen hero background video */
  heroVideoSrc: "/assets/sellers_landing/hero/heroanimated_sellers.mp4",
  heroVideoPlaybackRate: HERO_VIDEO_PLAYBACK_RATE,
};

export const sellersTrustedByConfig = {
  heading: "Trusted By The Industry's Best",
  icons: [
    "/assets/hero/brand01.png",
    "/assets/hero/brand02.png",
    "/assets/hero/brand03.png",
    "/assets/hero/brand04.png",
  ],
};

export const sellersWhoWeAreConfig = {
  heading: {
    before: "Who We ",
    highlight: "Are",
  },
  subheading: "Built for sellers who want a fast, transparent exit.",
  cards: [
    {
      title: "Quick Exit",
      description:
        "We connect you with pre-vetted buyers who are ready to move. No lengthy listing periods — qualified buyers, serious offers, and a clear path to close.",
      icon: "/assets/hero/logo.png",
    },
    {
      title: "Sell In 10 Days",
      description:
        "Our structured process gets you from first conversation to signed LOI in as little as 10 days. No endless back-and-forth — just a streamlined, operator-led exit.",
      icon: "/assets/hero/logo.png",
    },
  ],
};

export const sellersWhySellConfig = {
  heading: {
    before: "Why Sell With ",
    highlight: "KH Brokers",
  },
  subheading: "We handle every type of exit, every deal size.",
  tabs: [
    { id: "all-exits", label: "All Exits", sublabel: "SaaS, e-commerce, content" },
    { id: "all-deals", label: "All Deals", sublabel: "From $50k to $5M+" },
    { id: "all-buyers", label: "All Buyers", sublabel: "Vetted, qualified, ready" },
  ],
  featureCard: {
    title: "Operator-Led Process",
    description:
      "We've built and sold businesses ourselves. We understand what buyers want, how to position your business, and how to close deals that work for both sides.",
    cta: { label: "Book a Call", href: "#book-a-call" },
  },
};

export const sellersStructuredApproachConfig = {
  heading: {
    before: "Our Structured ",
    highlight: "Approach",
  },
  subheading: "From first call to closed deal in four clear steps.",
  steps: [
    {
      title: "1. Discovery Call",
      description: "We learn about your business, goals, and timeline.",
    },
    {
      title: "2. Valuation & Package",
      description: "We build a verified valuation and prepare your listing package.",
    },
    {
      title: "3. Buyer Matching",
      description: "We introduce you to pre-vetted buyers who match your criteria.",
    },
    {
      title: "4. Close",
      description: "We guide you through LOI, diligence, and escrow to close.",
    },
  ],
};

export const sellersFoundersConfig = {
  heading: {
    before: "From Our ",
    highlight: "Founders",
  },
  subheading: "Real operators who've built and sold businesses.",
  quote:
    "We've been on both sides of the table. We know what it takes to sell a business quickly, fairly, and without the usual broker friction. That's why we built KH Brokers.",
  name: "Kane",
  title: "Founder & Head of KH Brokers",
  avatar: null,
  videoThumbnail: "/assets/sellers_landing/hero/hero.png",
  videoId: "h6xfyxiaea",
};

export const sellersGetOfferConfig = {
  heading: {
    before: "Get Your ",
    highlight: "Offer",
  },
  subheading:
    "Tell us about your business and we'll provide a preliminary valuation range.",
  formPlaceholder: "Share your business details below and we'll provide a preliminary valuation within 48 hours.",
  cta: { label: "Submit", href: "#" },
};

export const sellersTestimonialsConfig = {
  heading: {
    before: "What Sellers Say ",
    highlight: "After the Exit",
  },
  subheading: "Real exits. Real results.",
  testimonials: [
    {
      quote:
        "Sold in 12 days. KH Brokers handled everything — I just showed up for the calls.",
      name: "Alex",
      avatar: null,
      badge: "SaaS Exit",
    },
    {
      quote:
        "The valuation was fair and the process was transparent. No surprises.",
      name: "Sam",
      avatar: null,
      badge: "E-commerce Exit",
    },
    {
      quote:
        "Best decision I made. They found a buyer who actually understood my business.",
      name: "Jordan",
      avatar: null,
      badge: "Content Exit",
    },
  ],
};

export const sellersBookCallConfig = {
  heading: {
    before: "Book a ",
    highlight: "Strategy Call",
  },
  subheading:
    "A focused discussion to understand your exit goals, timeline, and what we can do to help.",
  host: {
    name: "Kane",
    title: "Founder & Head of KH Brokers",
    avatar: null,
    description: [
      "This call is designed for sellers who want to exit quickly and fairly.",
      "We'll walk through your business, discuss valuation, and outline our process — so you have full clarity before moving forward.",
    ],
  },
  callTitle: "Seller introductory call",
  calLink: "https://cal.com/khbrokers/welcome",
  calEmbedSlug: "khbrokers/welcome",
  calPrimaryColor: "#16a34a",
};

export const sellersFaqConfig = {
  heading: {
    before: "Frequently Asked Questions From ",
    highlight: "Sellers",
  },
  subheading: "Direct answers. No ambiguity.",
  items: [
    {
      question: "How long does it take to sell my business?",
      answer: [
        "Most sellers go from first call to signed LOI in 10–30 days, depending on deal size and complexity. We prioritize speed without sacrificing quality — you'll work with qualified buyers who are ready to move.",
      ],
    },
    {
      question: "What types of businesses do you sell?",
      answer: [
        "We work with SaaS, e-commerce, content, and digital businesses. Deal sizes typically range from $50k to $5M+. If you're not sure if we're a fit, book a call and we'll discuss.",
      ],
    },
    {
      question: "How do you value my business?",
      answer: [
        "We build valuations from raw data — revenue, profit, growth, and market comparables. We don't rely on seller-prepared summaries alone. You'll get a transparent, defensible valuation that buyers trust.",
      ],
    },
    {
      question: "What fees do you charge?",
      answer: [
        "Our fee structure is transparent and success-based. We'll outline everything on the discovery call. No hidden costs, no surprises.",
      ],
    },
    {
      question: "Can I sell if my business isn't profitable yet?",
      answer: [
        "It depends. We focus on cash-flowing or clearly path-to-profit businesses. If you're pre-revenue or heavily unprofitable, we may not be the right fit — but we'll tell you honestly on the first call.",
      ],
    },
  ],
};

export const sellersCtaConfig = {
  heading: {
    before: "Ready to ",
    highlight: "Exit?",
  },
  subheading:
    "Get a preliminary valuation and see how fast we can help you close.",
  cta: {
    primary: { label: "Book a Call", href: "#book-a-call" },
    secondary: { label: "Get Offer", href: "#get-offer" },
  },
};
