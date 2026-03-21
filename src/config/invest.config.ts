export const investHeroConfig = {
  profitBadge: "Generating $50K-$3M In Annual Profit",
  headline: {
    before: "Acquire a Fully-Vetted E-commerce Brand At ",
    highlight: "Real Market Price",
    after: ", With 100% Ownership",
  },
  benefits: [
    {
      icon: "equity",
      text: "Keep 100% of Your Equity",
    },
    {
      icon: "price",
      text: "Lowest Price Multiples",
    },
    {
      icon: "growth",
      text: "Hands-Off Growth",
    },
  ],
  socialProof: {
    text: "Join",
    highlight: "300+ smart investors",
    suffix: " who trust KH Brokers.",
  },
  trustBadgeAvatars: [
    "/assets/hero/avatar01.jpg",
    "/assets/hero/avatar02.png",
    "/assets/hero/avatar03.png",
  ],
};

export const investStatsConfig = [
  {
    icon: "dollar",
    stat: "300+",
    description: "Brands Sold",
  },
  {
    icon: "handshake",
    stat: "$20M+",
    description: "Total Brand Sales",
  },
  {
    icon: "tag",
    stat: "40+",
    description: "Current Brands for sales",
  },
  {
    icon: "chart",
    stat: "#1",
    description: "Award Winning Brokers",
  },
];

export const investBenefitsConfig = {
  heading: {
    before: "Invest Smarter.",
    highlight: "Scale Faster.",
  },
  cards: [
    {
      title: "Exclusive, Direct-to-Buyer Deals",
      description:
        "At KH Brokers, you invest straight from the source — not through layers of middlemen who mark up the price. We unlock private deal flow you won't find anywhere else, with the lowest price multiples in the market and full deal exclusivity. It's how smart investors buy direct, keep 100% equity, and protect their profit from day one.",
      image: "/assets/invest/investcard-01.png",
    },
    {
      title: "Lowest Global Multiples — Proven Returns",
      description:
        "Unlike traditional brokers who sell at 2-4x profit multiples, we connect you to brands at 0.7-1.4x, so you recoup your investment faster. Each business is vetted by real operators for performance, consistency, and scale potential — meaning more money back, sooner, and safer.",
      image: "/assets/invest/investcard-02.png",
    },
    {
      title: "Done-For-You Growth — Zero Equity Split",
      description:
        "You keep full ownership — yet still get access to our trusted network of operators, marketers, and support teams. Our post-sale infrastructure means you don't have to figure it out alone. Stay hands-off while real experts help you run, scale, and protect your investment long term — without giving away 50% profit.",
      image: "/assets/invest/investcard-03.png",
    },
  ],
  cta: {
    label: "Receive List – starting at $25K",
    href: "#",
  },
};

export const investFaqConfig = {
  heading: {
    before: "Frequently Asked ",
    highlight: "Questions",
  },
  subheading: "Direct answers. No ambiguity.",
  cta: {
    label: "Receive List – starting at $25K",
    href: "#",
  },
  items: [
    {
      question: "What sets KH Brokers apart from other E-commerce brokerages?",
      answer: [
        "→ We're built around trust and operator-led diligence. We run our own e-commerce brands, so we understand what makes a business work — and what doesn't. Buyers consistently tell us they appreciate our transparency, our focus on real numbers over seller narratives, and our commitment to only presenting deals we'd be comfortable owning ourselves.",
      ],
    },
    {
      question:
        "What safeguards are in place when it comes to acquiring a brand & sending substantial funds?",
      answer: [
        "We use escrow-based closing with buyer protection. Funds are held in a secure third-party escrow until all conditions are met and the handover is complete. We do not handle funds directly — the process is designed to protect both parties. Every deal goes through structured diligence before any capital is committed.",
      ],
    },
    {
      question:
        "Do you foresee any challenges for a newbie like me in running a brand without prior experience?",
      answer: [
        "Most buyers we work with are entering e-commerce for the first time. We structure our process around buyer protection — not prior experience. You'll receive operator-level context, live financial walkthroughs, and structured handover support. Our post-sale infrastructure means you don't have to figure it out alone — you can stay hands-off while our trusted network of operators, marketers, and support teams help you run, scale, and protect your investment.",
      ],
    },
    {
      question: "What does the post-acquisition side of things look like?",
      answer: [
        "We provide a structured handover: documentation, transition support, and ongoing guidance. The level of involvement depends on your ownership preference — full operator, strategic partner, or passive investor. You retain 100% ownership with no equity dilution. Our post-sale infrastructure connects you with operators, marketers, and support teams so you can stay hands-off while real experts help you run and scale.",
      ],
    },
  ],
};

export const investSuccessConfig = {
  headline: {
    before: "Your ",
    highlight: "list of available brands",
    after: " will arrive in your inbox within 1 hour.",
  },
  subheadline: {
    before: "You'll receive the current ",
    highlight: "list of cash-flowing e-commerce brands",
    after: " available for acquisition in your inbox within the next hour.",
  },
};

export const investSuccessBookingConfig = {
  availabilityBadge: "● LIMITED AVAILABILITY THIS WEEK",
  headline: {
    before: "Book a Free Call With Our Team",
    highlight: "Get Matched to the Right Brand -Before It's Gone.",
  },
  subheadline:
    "We'll shortlist the 2–3 brands that match your budget and goals, walk you through the real financials, and give you priority access before other buyers see them.",
  pickTimeTitle: "Pick a Time",
  pickTimeSubtext: "1h call with Kane · Free · Zoom",
  slotsAvailable: "● Slots available",
  callDuration: "1 h",
  timezone: "Europe/London",
  meetingType: "Zoom",
};

export const investDownloadConfig = {
  headline: {
    before: "Receive our current ",
    highlight: "list of brands",
    after: " available right now.",
  },
  downloadButton: {
    label: "Receive List – starting at $25K",
    href: "/invest-success",
  },
  form: {
    fields: [
      { name: "name", placeholder: "Name", icon: "person" },
      { name: "phone", placeholder: "Phone", icon: "phone" },
      { name: "email", placeholder: "Email", icon: "email" },
      { name: "budget", placeholder: "Budget", icon: "budget", type: "select" },
    ],
    budgetOptions: ["$25K - $50K", "$50K - $100K", "$100K - $250K", "$250K - $500K", "$500K+"],
  },
};
