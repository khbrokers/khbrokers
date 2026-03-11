// Sellers page theme: primary #16a34a, light bg #f0fdf4, accent #22c55e
export const sellersTheme = {
  primary: "#16a34a",
  lightBg: "#f0fdf4",
  accent: "#22c55e",
};

/** Hero video playback rate — lower = slower (0.5 = half speed, 1 = normal) */
export const HERO_VIDEO_PLAYBACK_RATE = 0.65;

export const sellersHeroConfig = {
  trustedBy: "#1 Chosen E-commerce Broker",
  trustBadgeAvatars: [
    "/assets/hero/avatar01.jpg",
    "/assets/hero/avatar02.png",
    "/assets/hero/avatar03.png",
  ],
  headline: {
    before: "Fast, Liquid Cash Exits, Without",
    highlight: "Complexity",
    after: "",
  },
  subtitle:
    "KH Brokers is the most active private exit point for Shopify founders seeking fast, liquid exits. When a business passes our process, it moves quickly — often within days.",
  highlightedTerms: ["verified valuations", "qualified buyers", "structured exit"],
  cta: {
    primary: { label: "Get a Cash Valuation", href: "#get-offer" },
    secondary: { label: "Speak with us", href: "#book-a-call" },
  },
  asFeaturedIn: "Trusted by 30+ Partners",
  featuredBrands: [
    "/assets/sellers_landing/brands/brand01.png",
    "/assets/sellers_landing/brands/brand02.png",
    "/assets/sellers_landing/brands/brand03.png",
    "/assets/sellers_landing/brands/brand04.png",
    "/assets/sellers_landing/brands/brand05.png",
  ],
  videoThumbnail: "/assets/sellers_landing/hero/videocover.png",
  /** Full-screen hero background video */
  heroVideoSrc: "/assets/sellers_landing/hero/heroanimated_sellers.mp4",
  heroVideoPlaybackRate: HERO_VIDEO_PLAYBACK_RATE,
};

export const sellersTrustedByConfig = {
  /** Scroll duration in seconds for brand marquee (higher = slower) */
  scrollDuration: 70,
  heading: {
    before: "Trusted by ",
    highlight: "300+",
    after: " Founders",
  },
  row1Icons: [
    "/assets/sellers_landing/partners/partner01.png",
    "/assets/sellers_landing/partners/partner02.png",
    "/assets/sellers_landing/partners/partner03.png",
    "/assets/sellers_landing/partners/partner04.png",
    "/assets/sellers_landing/partners/partner05.png",
    "/assets/sellers_landing/partners/partner06.png",
    "/assets/sellers_landing/partners/partner07.png",
    "/assets/sellers_landing/partners/partner08.png",
  ],
  row2Icons: [
    "/assets/sellers_landing/partners/partner09.png",
    "/assets/sellers_landing/partners/partner10.png",
    "/assets/sellers_landing/partners/partner11.png",
    "/assets/sellers_landing/partners/partner12.png",
    "/assets/sellers_landing/partners/partner13.png",
    "/assets/sellers_landing/partners/partner14.png",
    "/assets/sellers_landing/partners/partner15.png",
    "/assets/sellers_landing/partners/partner16.png",
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

export const sellersWhoWeRepresentConfig = {
  heading: {
    before: "Who We ",
    highlight: "Represent",
  },
  subheading:
    "We review a wide range of Shopify brands — but only take businesses to market that meet our performance and operational standards.",
  cards: [
    {
      title: "Shopify DTC Brands",
      description:
        "Direct-to-consumer e-commerce businesses across all fulfilment models.",
      image: "/assets/sellers_landing/bentos/bento01.png",
    },
    {
      title: "Cash-Flow Positive",
      description:
        "Minimum $20,000 USD total net profit. Actively operating and generating real earnings.",
      image: "/assets/sellers_landing/bentos/bento02.png",
    },
    {
      title: "Clean Operations",
      description:
        "Stable payment processing. Structured ad accounts. No hidden operational risk.",
      image: "/assets/sellers_landing/bentos/bento03.png",
    },
    {
      title: "Investment-Worthy",
      description:
        "We only represent businesses buyers should own — regardless of hype.",
      image: "/assets/sellers_landing/bentos/bento04.png",
    },
  ],
};

export const sellersWhySellConfig = {
  heading: {
    before: "Why Sell With ",
    highlight: "KH Brokers",
  },
  tagline: "The Exit Partner Founders Choose When Speed Matters",
  ctas: [
    { label: "Value My Store", href: "#get-offer", primary: true },
    { label: "Book A Call", href: "#book-a-call", primary: false },
  ],
  bentoCards: [
    {
      title: "Unmatched Speed",
      description: "Businesses often sell in days — sometimes same day.",
      image: "/assets/sellers_landing/whysell/card01.png",
      variant: "translucent" as const,
    },
    {
      title: "Valuation Precision",
      description: "Pricing aligned to real demand — not theory.",
      image: "/assets/sellers_landing/whysell/card02.png",
      variant: "white" as const,
    },
    {
      title: "Operator-Led Process",
      description:
        "We've built and sold businesses ourselves. We understand what buyers want.",
      image: "/assets/sellers_landing/whysell/card03.png",
      variant: "translucent" as const,
    },
    {
      title: "Pre-Vetted Buyers",
      description: "Qualified buyers ready to move — no tire-kickers.",
      image: "/assets/sellers_landing/whysell/card04.png",
      variant: "translucent" as const,
    },
    {
      title: "End-to-End Support",
      description: "From valuation to close — we handle every step.",
      image: "/assets/sellers_landing/whysell/card05.png",
      variant: "translucent" as const,
    },
  ],
};

export const sellersStructuredApproachConfig = {
  heading: {
    before: "A Structured, Fast ",
    highlight: "Exit Process",
  },
  subheading: "Clear steps. No friction. No delays.",
  steps: [
    {
      title: "Valuation Alignment",
      description:
        "We assess profit and loss quickly to determine liquidity and pricing alignment. No long forms. No delays.",
      top: "79%",
      left: "5%",
      topMobile: "64%",
      leftMobile: "0%",
    },
    {
      title: "One-Day Verification",
      description: "24-hour verification of financials, operations, and assets.",
      top: "15%",
      left: "25%",
      topMobile: "18%",
      leftMobile: "22%",
    },
    {
      title: "Buyer Activation",
      description:
        "Direct placement with capital-ready buyers for immediate cashflow.",
      top: "71%",
      left: "47%",
      topMobile: "60%",
      leftMobile: "42%",
    },
    {
      title: "Close & Payout",
      description:
        "Secure escrow, seamless ownership transfer, and instant fund release.",
      top: "3%",
      left: "71%",
      topMobile: "14%",
      leftMobile: "66%",
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

export const sellersTestimonialsVideoItems = [
  { thumbnail: "/assets/sellers_landing/reviews/review01.png", videoId: "1y2QZ8SAMNkgG1GzSF0tz7npOW0I-CU3M" },
  { thumbnail: "/assets/sellers_landing/reviews/review02.png", videoId: "1Q02DZe9gFx9JfMQUhgqUqO2Wdn7VkGcz" },
  { thumbnail: "/assets/sellers_landing/reviews/review03.png", videoId: "1Xpqlk3mwY2pfW6j0HHql7M0q0Ub4Mppm" },
];

export const sellersTestimonialsConfig = {
  heading: {
    before: "The Broker Founders ",
    highlight: "Come Back To",
  },
  subheading: "Over 300 brands sold. Hear from founders who continue to work with KH Brokers because the process works.",
  testimonials: [
    {
      quote:
        "Sold in 12 days. KH Brokers handled everything — I just showed up for the calls.",
      name: "Alex",
      role: "Founder, SaaS Brand",
      xProfile: "https://x.com/example",
      xUsername: "alex",
      avatar: null,
      badge: "SaaS Exit",
      stars: 5,
      metrics: [
        { value: "12 days", label: "To close" },
        { value: "SaaS", label: "Exit type" },
      ],
    },
    {
      quote:
        "The valuation was fair and the process was transparent. No surprises.",
      name: "Sam",
      role: "Founder, E-commerce Brand",
      xProfile: "https://x.com/example",
      xUsername: "sam",
      avatar: null,
      badge: "E-commerce Exit",
      stars: 5,
      metrics: [
        { value: "Transparent", label: "Process" },
        { value: "E-commerce", label: "Exit type" },
      ],
    },
    {
      quote:
        "Best decision I made. They found a buyer who actually understood my business.",
      name: "Jordan",
      role: " 7 Figure Ecommerce Operator",
      xProfile: "https://x.com/example",
      xUsername: "jordan",
      avatar: null,
      badge: "Content Exit",
      stars: 5,
      metrics: [
        { value: "Right fit", label: "Buyer match" },
        { value: "Content", label: "Exit type" },
      ],
    },
  ],
};

export const sellersBookCallConfig = {
  heading: {
    before: "Get Your Liquid Cash  ",
    highlight: "Valuation",
  },
  subheading:
    "On the call, we assess your numbers, timing, and exit potential — and tell you exactly what serious buyers would pay today.",
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
      question: "How much commission do you take?",
      answer: [
        "KH Brokers does not operate on a rigid, one-size-fits-all commission model. Fees vary depending on factors such as deal size, complexity, buyer type, and how quickly the transaction moves. During the valuation call, we clearly outline the expected net amount you would receive after all fees, so there are no surprises. We are fully transparent about how we're compensated, and our priority is aligning on a deal structure you're comfortable with.",
      ],
    },
    {
      question: "Who are the buyers and where are they based?",
      answer: [
        "Our buyers are vetted individuals and small funds who have been through our qualification process. They are capital-ready and understand digital businesses. We work with buyers globally — many of our transactions are cross-border. We match you with buyers who fit your business profile and timeline.",
      ],
    },
    {
      question: "Are there any upfront costs? What's expected from me?",
      answer: [
        "There are no upfront fees to list or engage with us. Our model is success-based — we're paid when you close. From your side, we need access to accurate financials, a willingness to participate in verification, and responsiveness during the process. We'll outline exactly what we need during the discovery call.",
      ],
    },
    {
      question: "How do I know this is safe? What if the buyer doesn't pay?",
      answer: [
        "Every transaction closes through escrow. Funds are held by a third-party escrow provider until all conditions are met and the handover is complete. You don't transfer ownership until payment is released. This structure protects both parties and is standard for business acquisitions.",
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
    "Liquidity, speed, and structured execution — without complexity.",
  cta: {
    primary: { label: "Value My Store", href: "#book-a-call" },
    secondary: { label: "Book a Call", href: "#get-offer" },
  },
};
