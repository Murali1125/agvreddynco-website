import { IndustriesPageContent } from "@/types/industry";

export const industriesPageData: IndustriesPageContent = {
  hero: {
    eyebrow: "Industries We Serve",
    headline: "Industry Expertise Built Over Four Decades",
    subheadline:
      "Serving businesses, corporates, trusts, educational institutions, government bodies, financial institutions, non-profit organizations and individuals across diverse sectors.",
    ctaLabel: "Explore Services",
    ctaHref: "/services"
  },
  grid: {
    eyebrow: "Sector Coverage",
    title: "Industries We Support",
    description: "Deep sector understanding combined with practical regulatory execution.",
    items: [
      {
        id: 1,
        iconKey: "manufacturing",
        name: "Manufacturing",
        shortDescription: "Assurance and compliance support for production-driven enterprises.",
        keyChallenges: ["Inventory controls", "Cost governance", "Multi-location compliance"],
        expertise: ["Statutory and internal audits", "GST compliance", "Process control advisory"]
      },
      {
        id: 2,
        iconKey: "construction",
        name: "Construction & Infrastructure",
        shortDescription: "Financial oversight for project-based and contract-intensive operations.",
        keyChallenges: ["Project accounting", "Cash flow control", "Contract taxation"],
        expertise: ["Internal audit frameworks", "Risk-based reviews", "Compliance monitoring"]
      },
      {
        id: 3,
        iconKey: "healthcare",
        name: "Healthcare",
        shortDescription: "Regulatory and financial support for hospitals and care providers.",
        keyChallenges: ["Regulatory compliance", "Revenue assurance", "GST complexity"],
        expertise: ["Audit and assurance", "GST advisory", "Operational control reviews"]
      },
      {
        id: 4,
        iconKey: "education",
        name: "Educational Institutions",
        shortDescription: "Governance and tax support for schools, colleges and trusts.",
        keyChallenges: ["Trust compliance", "Governance reporting", "Funding transparency"],
        expertise: ["Trust and NGO compliance", "Audit services", "Taxation support"]
      },
      {
        id: 5,
        iconKey: "agriculture",
        name: "Agriculture & Agri-Business",
        shortDescription: "Advisory for agri operations, cooperatives and allied businesses.",
        keyChallenges: ["Seasonal cash cycles", "Subsidy reporting", "Supply chain controls"],
        expertise: ["Financial reporting support", "Tax advisory", "Risk assessment"]
      },
      {
        id: 6,
        iconKey: "retail",
        name: "Retail & Trading",
        shortDescription: "Compliance and audit support for volume-driven business models.",
        keyChallenges: ["GST reconciliations", "Inventory leakages", "Branch controls"],
        expertise: ["GST process optimization", "Internal audit", "Compliance diagnostics"]
      },
      {
        id: 7,
        iconKey: "hospitality",
        name: "Hospitality",
        shortDescription: "Structured finance and tax support for service-first organizations.",
        keyChallenges: ["Margin controls", "Revenue leakages", "Compliance timeliness"],
        expertise: ["Revenue-focused audits", "Tax planning", "Control enhancements"]
      },
      {
        id: 8,
        iconKey: "real-estate",
        name: "Real Estate",
        shortDescription: "Regulatory and financial controls for developers and property businesses.",
        keyChallenges: ["Project risk tracking", "Taxation events", "Entity structuring"],
        expertise: ["Due diligence", "Regulatory support", "Advisory for structuring"]
      },
      {
        id: 9,
        iconKey: "financial-services",
        name: "Financial Services",
        shortDescription: "Control and compliance services for financial intermediaries.",
        keyChallenges: ["Regulatory scrutiny", "Control maturity", "Audit readiness"],
        expertise: ["Risk-based audits", "Assurance programs", "Compliance reviews"]
      },
      {
        id: 10,
        iconKey: "banking",
        name: "Banking & NBFCs",
        shortDescription: "Specialized audits and advisory for regulated lending institutions.",
        keyChallenges: ["Branch-level controls", "Regulatory reporting", "Portfolio risk"],
        expertise: ["Bank branch audits", "Concurrent audits", "Regulatory advisory"]
      },
      {
        id: 11,
        iconKey: "ngo",
        name: "Trusts & NGOs",
        shortDescription: "Registration, compliance and governance support for mission-driven entities.",
        keyChallenges: ["12AB and 80G approvals", "Audit requirements", "Governance structure"],
        expertise: ["End-to-end registration", "Audit and compliance", "CSR advisory"]
      },
      {
        id: 12,
        iconKey: "government",
        name: "Government Organizations",
        shortDescription: "Accountability-focused assurance and compliance support.",
        keyChallenges: ["Process transparency", "Regulatory adherence", "Audit scope complexity"],
        expertise: ["Empanelment-backed audit services", "Control assessments", "Compliance reporting"]
      },
      {
        id: 13,
        iconKey: "startup",
        name: "Startups & MSMEs",
        shortDescription: "Scalable financial and compliance foundations for growth-stage ventures.",
        keyChallenges: ["Entity structuring", "Tax readiness", "Governance systems"],
        expertise: ["Business advisory", "Corporate compliance", "Growth-aligned controls"]
      }
    ]
  },
  expertise: {
    eyebrow: "Industry Expertise",
    title: "Relevant Service Strength By Sector",
    description: "Expand each card to see where our specialized capabilities create measurable value.",
    items: [
      { industry: "Healthcare", services: ["Audit", "GST", "Compliance", "Advisory"] },
      { industry: "Education", services: ["Trust Compliance", "Audit", "Taxation"] },
      { industry: "NGOs", services: ["12AB", "80G", "Audit", "CSR Advisory"] },
      { industry: "Manufacturing", services: ["Risk-Based Audit", "GST", "Internal Controls"] },
      { industry: "Startups & MSMEs", services: ["Corporate Advisory", "Taxation", "Compliance"] }
    ]
  },
  process: {
    eyebrow: "Our Approach",
    title: "Industry Engagement Process",
    steps: [
      "Understand Industry",
      "Assess Risks",
      "Identify Compliance Needs",
      "Deliver Solutions",
      "Ongoing Advisory"
    ]
  },
  cta: {
    headline: "Need Industry-Specific Professional Support?",
    buttonLabel: "Talk To Our Experts",
    href: "#contact"
  },
  seo: {
    title: "Industries We Serve | AGV Reddy & Co.",
    description:
      "Explore AGV Reddy & Co.'s four-decade industry expertise across manufacturing, healthcare, education, banking, NGOs and more.",
    keywords: [
      "industries served",
      "chartered accountant industry expertise",
      "audit and advisory sectors",
      "financial compliance services",
      "agv reddy industries"
    ],
    openGraphTitle: "Industry Expertise Built Over Four Decades",
    openGraphDescription:
      "Specialized audit, taxation and advisory support tailored for diverse industries and institutions."
  }
};
