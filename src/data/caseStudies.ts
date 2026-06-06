import { CaseStudiesPageContent } from "@/types/caseStudy";

export const caseStudiesPageData: CaseStudiesPageContent = {
  hero: {
    eyebrow: "Case Studies",
    headline: "Delivering Results Across Industries",
    subheadline:
      "Examples of how our expertise helps clients achieve compliance, efficiency and sustainable growth."
  },
  listing: {
    eyebrow: "Anonymized Success Stories",
    title: "Case Study Highlights",
    description: "Representative outcomes based on real engagement patterns while preserving client confidentiality.",
    studies: [
      {
        id: 1,
        sector: "Manufacturing Company",
        challenge: "Complex audit requirements",
        solution: "Risk-based audit approach",
        result: "Improved compliance framework"
      },
      {
        id: 2,
        sector: "Educational Institution",
        challenge: "Trust compliance management",
        solution: "Compliance restructuring",
        result: "Improved governance"
      },
      {
        id: 3,
        sector: "NGO",
        challenge: "12AB & 80G registration",
        solution: "End-to-end advisory",
        result: "Successful approval"
      },
      {
        id: 4,
        sector: "Healthcare Organization",
        challenge: "GST compliance",
        solution: "Tax process optimization",
        result: "Reduced compliance risks"
      },
      {
        id: 5,
        sector: "Construction Company",
        challenge: "Financial controls",
        solution: "Internal audit implementation",
        result: "Enhanced transparency"
      },
      {
        id: 6,
        sector: "Startup",
        challenge: "Business structuring",
        solution: "Corporate advisory",
        result: "Scalable compliance framework"
      }
    ]
  },
  successMetrics: {
    eyebrow: "Proven Outcomes",
    title: "Success Metrics",
    metrics: [
      { value: 40, suffix: "+", label: "Years Experience" },
      { value: 100, suffix: "+", label: "Professional Engagements" },
      { value: 3, label: "Office Locations" },
      { value: 4, label: "Major Regulatory Empanelments" }
    ]
  },
  trustFramework: {
    eyebrow: "Client Trust Framework",
    title: "How We Build Confidence",
    pillars: [
      "Integrity",
      "Confidentiality",
      "Technical Excellence",
      "Industry Knowledge",
      "Partner Involvement",
      "Timely Execution",
      "Professional Ethics",
      "Long-Term Relationships"
    ]
  },
  whyChooseUs: {
    eyebrow: "Why Clients Choose AGV",
    title: "Credibility Factors",
    items: [
      {
        title: "Peer Reviewed Firm",
        description: "Independent peer validation of quality and professional standards."
      },
      {
        title: "C&AG Empanelled",
        description: "Recognized capability for public-focused audit assignments."
      },
      {
        title: "RBI Registered",
        description: "Qualified for regulated financial institution audit requirements."
      },
      {
        title: "NABARD Empanelled",
        description: "Trusted for development finance and institutional engagements."
      },
      {
        title: "Experienced Leadership",
        description: "Partner-led execution informed by multi-decade professional depth."
      },
      {
        title: "Multi-Industry Expertise",
        description: "Cross-sector experience that improves decision quality and execution speed."
      }
    ]
  },
  cta: {
    headline: "Partner With Trusted Financial Advisors",
    buttonLabel: "Schedule Consultation",
    href: "#contact"
  },
  seo: {
    title: "Case Studies | AGV Reddy & Co.",
    description:
      "Review anonymized case studies showing how AGV Reddy & Co. delivers measurable compliance and advisory outcomes across industries.",
    keywords: [
      "case studies chartered accountants",
      "audit success stories",
      "tax compliance outcomes",
      "advisory impact",
      "agv reddy case studies"
    ],
    openGraphTitle: "Delivering Results Across Industries",
    openGraphDescription:
      "Anonymized case examples highlighting practical outcomes in compliance, governance and growth readiness."
  }
};
