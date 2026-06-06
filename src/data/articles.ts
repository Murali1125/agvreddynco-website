import { Article } from "@/types/article";
import { InsightCategory } from "@/types/category";

export const insightCategories: InsightCategory[] = [
  { slug: "audit-assurance", name: "Audit & Assurance", description: "Assurance practices, controls and reporting quality frameworks." },
  { slug: "income-tax", name: "Income Tax", description: "Tax planning, compliance and strategic filing updates." },
  { slug: "gst", name: "GST", description: "GST compliance, advisory and operational best practices." },
  {
    slug: "corporate-compliance",
    name: "Corporate Compliance",
    description: "Regulatory obligations, ROC matters and governance standards."
  },
  { slug: "business-advisory", name: "Business Advisory", description: "Decision support, due diligence and financial strategy guidance." },
  { slug: "startups-msmes", name: "Startups & MSMEs", description: "Practical compliance and growth guidance for emerging businesses." },
  { slug: "trusts-ngos", name: "Trusts & NGOs", description: "Governance, registration and exemption guidance for non-profits." },
  {
    slug: "regulatory-updates",
    name: "Regulatory Updates",
    description: "Important regulatory changes and their practical implications."
  },
  { slug: "industry-insights", name: "Industry Insights", description: "Sector-focused financial and operational perspectives." }
];

export const articles: Article[] = [
  {
    id: 1,
    slug: "understanding-gst-compliance-for-businesses",
    title: "Understanding GST Compliance For Businesses",
    excerpt: "A practical framework to strengthen GST filing readiness and reduce reconciliation risks.",
    content: [
      { type: "heading", id: "gst-foundation", level: 2, text: "Build A Reliable GST Foundation" },
      {
        type: "paragraph",
        text: "GST compliance quality depends on disciplined invoice capture, vendor alignment and periodic reconciliation controls."
      },
      {
        type: "list",
        items: [
          "Standardize invoice data capture",
          "Align vendor filing cadence with your returns",
          "Automate monthly reconciliation checkpoints"
        ]
      },
      { type: "heading", id: "gst-review", level: 2, text: "Monthly Review Structure" },
      {
        type: "table",
        headers: ["Control Area", "Frequency", "Owner"],
        rows: [
          ["Invoice Reconciliation", "Monthly", "Finance Team"],
          ["ITC Validation", "Monthly", "Tax Team"],
          ["Exception Review", "Bi-Weekly", "Management"]
        ]
      },
      {
        type: "quote",
        text: "Consistent process discipline is more valuable than year-end correction efforts.",
        cite: "AGV Editorial Team"
      },
      {
        type: "callout",
        title: "Pro Tip",
        text: "Track mismatch trends by vendor group to identify high-risk counterparties early."
      }
    ],
    category: "GST",
    tags: ["gst", "compliance", "itc", "filing"],
    author: "AGV Editorial Team",
    publishDate: "2026-05-10",
    readTime: "6 min read",
    featured: true,
    featuredImage: "/insights/gst.svg",
    seo: {
      title: "Understanding GST Compliance For Businesses | AGV Insights",
      description: "Strengthen GST compliance through structured reconciliations, controls and filing discipline.",
      keywords: ["gst compliance", "gst filing", "itc validation", "tax controls"],
      openGraphTitle: "Understanding GST Compliance For Businesses",
      openGraphDescription: "Practical GST control framework for sustainable compliance.",
      twitterTitle: "Understanding GST Compliance For Businesses",
      twitterDescription: "A practical GST checklist for businesses."
    }
  },
  {
    id: 2,
    slug: "income-tax-planning-strategies-for-smes",
    title: "Income Tax Planning Strategies For SMEs",
    excerpt: "How SMEs can optimize tax planning while preserving governance and compliance quality.",
    content: [
      { type: "heading", id: "tax-planning-sme", level: 2, text: "Tax Planning With Business Context" },
      {
        type: "paragraph",
        text: "SME tax planning should align with business cash flows, expansion plans and compliance capability."
      },
      {
        type: "list",
        items: ["Evaluate entity-level tax impact", "Plan advance tax payments", "Review deductions proactively"]
      },
      { type: "callout", title: "Planning Note", text: "Periodic tax simulations improve decision quality for growth-stage SMEs." }
    ],
    category: "Income Tax",
    tags: ["income tax", "sme", "planning"],
    author: "CA Kasi Reddy Nallappa Reddy",
    publishDate: "2026-05-14",
    readTime: "5 min read",
    featured: true,
    featuredImage: "/insights/tax.svg",
    seo: {
      title: "Income Tax Planning Strategies For SMEs | AGV Insights",
      description: "Effective tax planning guidance for SMEs balancing compliance and growth objectives.",
      keywords: ["income tax planning", "sme taxation", "tax strategy"],
      openGraphTitle: "Income Tax Planning Strategies For SMEs",
      openGraphDescription: "Tax planning priorities for SMEs in growth mode.",
      twitterTitle: "Income Tax Planning Strategies For SMEs",
      twitterDescription: "Practical income tax planning ideas for SMEs."
    }
  },
  {
    id: 3,
    slug: "importance-of-internal-audits",
    title: "Importance Of Internal Audits",
    excerpt: "Internal audits are a strategic mechanism for control maturity and decision confidence.",
    content: [
      { type: "heading", id: "internal-audit-role", level: 2, text: "Why Internal Audit Matters" },
      {
        type: "paragraph",
        text: "A strong internal audit program identifies process gaps, control weaknesses and governance blind spots early."
      },
      {
        type: "list",
        items: ["Improves control reliability", "Enhances governance confidence", "Supports operational efficiency"]
      },
      {
        type: "quote",
        text: "Internal audit is not a fault-finding function; it is a resilience-building function.",
        cite: "CA Mahaveer Bansal"
      }
    ],
    category: "Audit & Assurance",
    tags: ["internal audit", "controls", "governance"],
    author: "CA Mahaveer Bansal",
    publishDate: "2026-05-18",
    readTime: "4 min read",
    featured: false,
    featuredImage: "/insights/audit.svg",
    seo: {
      title: "Importance Of Internal Audits | AGV Insights",
      description: "Discover how internal audit programs improve governance and operational reliability.",
      keywords: ["internal audits", "audit controls", "governance audits"],
      openGraphTitle: "Importance Of Internal Audits",
      openGraphDescription: "Internal audits as a strategic governance tool.",
      twitterTitle: "Importance Of Internal Audits",
      twitterDescription: "How internal audits improve business control maturity."
    }
  },
  {
    id: 4,
    slug: "common-compliance-mistakes-startups-make",
    title: "Common Compliance Mistakes Startups Make",
    excerpt: "Frequent compliance gaps early-stage ventures should avoid to preserve growth readiness.",
    content: [
      { type: "heading", id: "startup-mistakes", level: 2, text: "Frequent Gaps In Startup Compliance" },
      {
        type: "list",
        items: [
          "Delayed statutory filings",
          "Weak documentation discipline",
          "Inadequate tax planning at funding milestones"
        ]
      },
      {
        type: "callout",
        title: "Startup Note",
        text: "Compliance hygiene is often a valuation factor during investor diligence."
      }
    ],
    category: "Startups & MSMEs",
    tags: ["startups", "compliance", "msme"],
    author: "CA Yasaswani Grandhi",
    publishDate: "2026-05-21",
    readTime: "5 min read",
    featured: false,
    featuredImage: "/insights/startup.svg",
    seo: {
      title: "Common Compliance Mistakes Startups Make | AGV Insights",
      description: "Understand key compliance mistakes startups should avoid for sustainable growth.",
      keywords: ["startup compliance", "msme compliance", "regulatory mistakes"],
      openGraphTitle: "Common Compliance Mistakes Startups Make",
      openGraphDescription: "Critical compliance gaps that affect startup growth readiness.",
      twitterTitle: "Common Compliance Mistakes Startups Make",
      twitterDescription: "Key compliance mistakes to avoid as a startup founder."
    }
  },
  {
    id: 5,
    slug: "understanding-12ab-registration",
    title: "Understanding 12AB Registration",
    excerpt: "A step-by-step perspective on 12AB registration readiness for trusts and NGOs.",
    content: [
      { type: "heading", id: "12ab-overview", level: 2, text: "12AB Registration Essentials" },
      {
        type: "paragraph",
        text: "Organizations should ensure governing documents, activity records and financial statements are consistent."
      },
      {
        type: "list",
        items: ["Review registration documents", "Validate activity evidence", "Prepare compliance records"]
      }
    ],
    category: "Trusts & NGOs",
    tags: ["12ab", "ngo", "trust compliance"],
    author: "AGV Editorial Team",
    publishDate: "2026-05-24",
    readTime: "6 min read",
    featured: false,
    featuredImage: "/insights/trust.svg",
    seo: {
      title: "Understanding 12AB Registration | AGV Insights",
      description: "Key requirements and preparation steps for successful 12AB registration.",
      keywords: ["12ab registration", "ngo compliance", "trust registration"],
      openGraphTitle: "Understanding 12AB Registration",
      openGraphDescription: "Preparation checklist for 12AB registration readiness.",
      twitterTitle: "Understanding 12AB Registration",
      twitterDescription: "Practical readiness guide for 12AB registration."
    }
  },
  {
    id: 6,
    slug: "financial-due-diligence-best-practices",
    title: "Financial Due Diligence Best Practices",
    excerpt: "A practical due diligence approach for better transaction confidence and faster decisions.",
    content: [
      { type: "heading", id: "fdd-focus", level: 2, text: "Focus Areas In Diligence" },
      {
        type: "table",
        headers: ["Area", "Objective", "Outcome"],
        rows: [
          ["Revenue Quality", "Validate sustainability", "Lower valuation risk"],
          ["Working Capital", "Assess adequacy", "Improved deal structuring"],
          ["Compliance Review", "Identify liabilities", "Better negotiation leverage"]
        ]
      },
      {
        type: "callout",
        title: "Deal Readiness",
        text: "Diligence quality improves when finance, legal and business teams align on scope early."
      }
    ],
    category: "Business Advisory",
    tags: ["due diligence", "transactions", "advisory"],
    author: "CA Mahaveer Bansal",
    publishDate: "2026-05-27",
    readTime: "7 min read",
    featured: true,
    featuredImage: "/insights/advisory.svg",
    seo: {
      title: "Financial Due Diligence Best Practices | AGV Insights",
      description: "Best practices to strengthen transaction diligence and reduce deal uncertainty.",
      keywords: ["financial due diligence", "transaction advisory", "deal readiness"],
      openGraphTitle: "Financial Due Diligence Best Practices",
      openGraphDescription: "Structured due diligence priorities for stronger decisions.",
      twitterTitle: "Financial Due Diligence Best Practices",
      twitterDescription: "How to run sharper diligence in transaction cycles."
    }
  },
  {
    id: 7,
    slug: "corporate-governance-essentials",
    title: "Corporate Governance Essentials",
    excerpt: "Governance fundamentals that improve accountability, compliance and business resilience.",
    content: [
      { type: "heading", id: "governance-pillars", level: 2, text: "Core Governance Pillars" },
      {
        type: "list",
        ordered: true,
        items: [
          "Clear accountability structures",
          "Reliable compliance monitoring",
          "Disciplined policy implementation"
        ]
      },
      {
        type: "quote",
        text: "Governance should be operational, not theoretical.",
        cite: "CA Kasi Reddy Nallappa Reddy"
      }
    ],
    category: "Corporate Compliance",
    tags: ["governance", "corporate compliance", "controls"],
    author: "CA Kasi Reddy Nallappa Reddy",
    publishDate: "2026-05-29",
    readTime: "5 min read",
    featured: false,
    featuredImage: "/insights/governance.svg",
    seo: {
      title: "Corporate Governance Essentials | AGV Insights",
      description: "Practical governance priorities for improved organizational control and compliance.",
      keywords: ["corporate governance", "compliance controls", "governance essentials"],
      openGraphTitle: "Corporate Governance Essentials",
      openGraphDescription: "Governance fundamentals for resilient organizations.",
      twitterTitle: "Corporate Governance Essentials",
      twitterDescription: "A practical governance blueprint for growing enterprises."
    }
  },
  {
    id: 8,
    slug: "preparing-for-statutory-audits",
    title: "Preparing For Statutory Audits",
    excerpt: "How organizations can improve statutory audit readiness and reduce reporting friction.",
    content: [
      { type: "heading", id: "audit-readiness", level: 2, text: "Audit Readiness Checklist" },
      {
        type: "list",
        items: [
          "Complete schedules and reconciliations",
          "Close unresolved compliance items",
          "Prepare management representations"
        ]
      },
      {
        type: "callout",
        title: "Execution Tip",
        text: "Early preparation shortens audit cycles and improves reporting confidence."
      }
    ],
    category: "Audit & Assurance",
    tags: ["statutory audit", "audit preparation", "assurance"],
    author: "AGV Editorial Team",
    publishDate: "2026-06-01",
    readTime: "6 min read",
    featured: true,
    featuredImage: "/insights/statutory.svg",
    seo: {
      title: "Preparing For Statutory Audits | AGV Insights",
      description: "A practical checklist for statutory audit readiness and smoother reporting cycles.",
      keywords: ["statutory audit", "audit readiness", "financial reporting"],
      openGraphTitle: "Preparing For Statutory Audits",
      openGraphDescription: "Checklist-driven approach for statutory audit preparation.",
      twitterTitle: "Preparing For Statutory Audits",
      twitterDescription: "Improve statutory audit readiness with this practical checklist."
    }
  }
];

export const insightsPageData = {
  hero: {
    eyebrow: "Knowledge Center",
    headline: "Insights, Updates & Professional Guidance",
    subheadline:
      "Stay informed with the latest developments in taxation, compliance, audit, business advisory and regulatory matters.",
    ctaLabel: "Explore Articles",
    ctaHref: "#latest-articles"
  },
  featured: {
    eyebrow: "Featured Articles",
    title: "Latest Featured Articles"
  },
  categories: {
    eyebrow: "Article Categories",
    title: "Explore By Topic"
  },
  latest: {
    eyebrow: "Latest Articles",
    title: "Recent Updates"
  },
  newsletter: {
    headline: "Stay Updated With Professional Insights",
    buttonLabel: "Subscribe"
  },
  seo: {
    title: "Insights | AGV Reddy & Co.",
    description:
      "Read AGV Reddy & Co. insights on audit, taxation, GST, corporate compliance, business advisory and regulatory updates.",
    keywords: ["tax insights", "audit updates", "gst articles", "corporate compliance insights", "regulatory updates"],
    openGraphTitle: "Insights, Updates & Professional Guidance",
    openGraphDescription: "Professional articles and updates from AGV Reddy & Co.",
    twitterTitle: "AGV Insights",
    twitterDescription: "Professional guidance on compliance, taxation and advisory topics."
  }
};

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getFeaturedArticles(): Article[] {
  return articles.filter((article) => article.featured);
}

export function getLatestArticles(): Article[] {
  return [...articles].sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
}

export function getArticlesByCategory(category: string): Article[] {
  return articles.filter((article) => article.category.toLowerCase() === decodeURIComponent(category).toLowerCase());
}

export function getArticlesByTag(tag: string): Article[] {
  return articles.filter((article) => article.tags.some((item) => item.toLowerCase() === decodeURIComponent(tag).toLowerCase()));
}

export function getRelatedArticles(slug: string, category: string): Article[] {
  return articles.filter((article) => article.slug !== slug && article.category === category).slice(0, 4);
}

export function getAllTags(): string[] {
  return Array.from(new Set(articles.flatMap((article) => article.tags)));
}

export function getPrevNextArticle(slug: string): { prev?: Article; next?: Article } {
  const sorted = getLatestArticles();
  const index = sorted.findIndex((article) => article.slug === slug);

  return {
    prev: index < sorted.length - 1 ? sorted[index + 1] : undefined,
    next: index > 0 ? sorted[index - 1] : undefined
  };
}
