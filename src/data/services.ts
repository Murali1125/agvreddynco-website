import { Clock3, Handshake, Layers3, ShieldCheck } from "lucide-react";
import { Service, ServicesPageContent } from "@/types/service";

export const industryCatalog = [
  "Manufacturing",
  "Construction & Infrastructure",
  "Healthcare",
  "Educational Institutions",
  "Agriculture & Agri-Business",
  "Retail & Trading",
  "Hospitality",
  "Real Estate",
  "Financial Services",
  "Banking & NBFCs",
  "Trusts & NGOs",
  "Government Organizations",
  "Startups & MSMEs"
];

const defaultProcess = [
  "Discovery discussion and requirement assessment",
  "Scope definition with timelines and deliverables",
  "Execution by specialist engagement team",
  "Management review with actionable insights",
  "Post-engagement support and compliance tracking"
];

export const servicesPageContent: ServicesPageContent = {
  hero: {
    headline: "Comprehensive Professional Services",
    subheadline:
      "Audit, taxation, advisory and compliance solutions delivered with technical depth, independence and integrity."
  },
  benefits: {
    title: "Why Clients Choose Our Services",
    items: [
      {
        title: "Regulatory Expertise",
        description: "Up-to-date interpretation of evolving compliance frameworks and standards.",
        icon: ShieldCheck
      },
      {
        title: "Industry Experience",
        description: "Decades of delivery across sectors with practical business understanding.",
        icon: Layers3
      },
      {
        title: "Personalized Solutions",
        description: "Engagement strategies tailored to organizational scale, risk and goals.",
        icon: Handshake
      },
      {
        title: "Timely Delivery",
        description: "Structured execution cycles with transparent milestones and dependable turnaround.",
        icon: Clock3
      }
    ]
  },
  cta: {
    headline: "Need Professional Guidance?",
    buttonLabel: "Talk To Our Experts",
    href: "#contact"
  }
};

export const servicesListingSeo = {
  title: "AGV Reddy & Co.",
  description:
    "Explore audit, taxation, corporate compliance and advisory services delivered by AGV Reddy & Co. since 1984.",
  keywords: [
    "chartered accountant services",
    "audit services",
    "taxation services",
    "business advisory",
    "regulatory compliance"
  ],
  openGraphTitle: "Comprehensive Professional Services",
  openGraphDescription:
    "Comprehensive professional services covering audit, taxation, advisory and regulatory compliance."
};

export const servicesUiContent = {
  listing: {
    heroEyebrow: "Service Portfolio",
    learnMoreLabel: "Learn More",
    benefitsEyebrow: "Client Value"
  },
  detail: {
    heroEyebrow: "Service Details",
    overviewTitle: "Service Overview",
    offeringsTitle: "Key Offerings",
    benefitsTitle: "Benefits",
    industriesTitle: "Industries Served",
    processTitle: "Process",
    faqTitle: "FAQs",
    ctaHeadline: "Need Support From Our Service Team?",
    ctaButtonLabel: "Contact Team",
    homeLabel: "Home",
    servicesLabel: "Services"
  }
};

export const services: Service[] = [
  {
    id: 1,
    slug: "audit-assurance",
    iconKey: "audit",
    title: "Audit & Assurance",
    shortDescription: "Independent audit and assurance solutions that strengthen confidence and governance.",
    description:
      "Our Audit & Assurance practice delivers objective financial and operational assurance with a focus on risk, controls and reporting integrity. We combine regulatory rigor with business understanding to support stakeholder confidence.",
    offerings: [
      { title: "Statutory Audit", description: "Independent statutory audits aligned with applicable standards and regulations." },
      { title: "Tax Audit", description: "Tax audits focused on compliance quality and reporting accuracy." },
      { title: "Internal Audit", description: "Control-oriented internal audit programs to improve governance and efficiency." },
      { title: "Concurrent Audit", description: "Continuous transaction review to support control discipline in real time." },
      { title: "Bank Branch Audit", description: "Specialized branch-level audits for banking operations and reporting." },
      { title: "Stock Audit", description: "Inventory verification and valuation review to strengthen reporting reliability." },
      { title: "Revenue Audit", description: "Revenue process audits to identify leakages and improve billing assurance." },
      { title: "IS Audit", description: "Technology control audits evaluating IT systems, access and reliability." },
      { title: "Due Diligence Reviews", description: "Financial and control due diligence for strategic decisions and transactions." },
      { title: "Risk-Based Audits", description: "Audit planning and execution prioritizing high-impact business risks." },
      { title: "Management Audits", description: "Process and managerial audits to improve decision controls and performance." }
      ,
      { title: "Special Purpose Audits", description: "Targeted audit assignments for specific compliance and assurance objectives." }
    ],
    benefits: [
      "Improved governance and control maturity",
      "High confidence in financial reporting",
      "Proactive risk identification and mitigation",
      "Stronger readiness for regulators and stakeholders"
    ],
    industries: industryCatalog,
    process: defaultProcess,
    faqs: [
      {
        question: "How often should a business perform internal audits?",
        answer: "Frequency depends on risk profile, regulatory obligations and operational scale, but most organizations benefit from at least annual internal audit cycles."
      },
      {
        question: "Do you support both statutory and specialized audits?",
        answer: "Yes. Our team handles statutory, tax, bank branch, stock, revenue and risk-based audits through tailored engagement plans."
      }
    ],
    seo: {
      title: "Audit & Assurance Services | AGV Reddy & Co.",
      description: "Statutory, tax, internal and specialized audit services focused on governance, compliance and risk control.",
      keywords: ["audit assurance", "statutory audit", "internal audit", "tax audit", "risk based audit"],
      openGraphTitle: "Audit & Assurance Services",
      openGraphDescription: "Independent audit services that strengthen control, reporting and stakeholder trust."
    }
  },
  {
    id: 2,
    slug: "direct-taxation",
    iconKey: "tax",
    title: "Direct Taxation",
    shortDescription: "End-to-end direct tax support including planning, filings and dispute representation.",
    description:
      "Our Direct Taxation services provide strategic and compliance-led support for businesses and individuals. We help clients manage obligations, optimize structures and navigate assessments with confidence.",
    offerings: [
      { title: "Income Tax Return Filing", description: "Accurate and timely filing for individuals, firms and companies." },
      { title: "Corporate Tax Compliance", description: "Comprehensive support for tax computations and statutory compliance." },
      { title: "Tax Planning", description: "Forward-looking structuring advice aligned with lawful optimization goals." },
      { title: "TDS Compliance", description: "TDS applicability review, deductions, deposits and return filing support." },
      { title: "International Tax Advisory", description: "Advisory support for cross-border transactions and related tax implications." },
      { title: "Assessments", description: "Representation and documentation support during scrutiny and assessments." },
      { title: "Appeals", description: "Structured appellate support with technical drafting and case preparation." },
      { title: "Litigation Support", description: "Professional support through complex tax disputes and proceedings." }
    ],
    benefits: [
      "Reduced tax risk through robust compliance",
      "Practical strategies for tax efficiency",
      "Experienced support in scrutiny and appeals",
      "Ongoing guidance on regulatory changes"
    ],
    industries: industryCatalog,
    process: defaultProcess,
    faqs: [
      {
        question: "Can you help with tax notices and scrutiny cases?",
        answer: "Yes. We provide end-to-end support from notice response to assessment and appellate representation."
      },
      {
        question: "Is tax planning available for both businesses and promoters?",
        answer: "Yes. We design compliant tax planning approaches for corporates, firms and individuals."
      }
    ],
    seo: {
      title: "Direct Taxation Services | AGV Reddy & Co.",
      description: "Direct tax filing, planning, compliance, assessments and appeal support for businesses and individuals.",
      keywords: ["direct taxation", "income tax return", "corporate tax", "tds compliance", "tax appeals"],
      openGraphTitle: "Direct Taxation Services",
      openGraphDescription: "Compliant and strategic direct taxation support for sustainable business outcomes."
    }
  },
  {
    id: 3,
    slug: "gst-indirect-taxation",
    iconKey: "gst",
    title: "GST & Indirect Taxation",
    shortDescription: "Operational and strategic GST services for compliant and efficient tax management.",
    description:
      "We help clients manage GST and indirect tax responsibilities through structured compliance, advisory and litigation support. Our approach ensures process reliability while minimizing tax exposure.",
    offerings: [
      { title: "GST Registration", description: "Entity-level GST registration support with documentation and filings." },
      { title: "GST Filing", description: "Periodic return filing workflows with accuracy checks and reconciliations." },
      { title: "GST Advisory", description: "Transaction-level advisory on classifications, place of supply and eligibility." },
      { title: "GST Litigation", description: "Representation support in notices, adjudication and appellate matters." },
      { title: "ITC Reviews", description: "Input tax credit reviews to improve claim integrity and compliance readiness." },
      { title: "Compliance Reviews", description: "Diagnostic reviews of GST controls, reconciliations and documentation." }
    ],
    benefits: [
      "Reduced GST filing and reconciliation errors",
      "Stronger ITC claim defensibility",
      "Lower exposure to litigation risk",
      "Efficient compliance operating model"
    ],
    industries: industryCatalog,
    process: defaultProcess,
    faqs: [
      {
        question: "Do you assist with monthly and annual GST compliance?",
        answer: "Yes. We support ongoing monthly returns, annual reconciliations and year-end reporting obligations."
      },
      {
        question: "Can you review ITC and mismatch risks?",
        answer: "Yes. We perform ITC diagnostics, vendor alignment checks and corrective action recommendations."
      }
    ],
    seo: {
      title: "GST & Indirect Taxation Services | AGV Reddy & Co.",
      description: "GST registration, filing, advisory, litigation and ITC review services for robust compliance.",
      keywords: ["gst services", "indirect tax", "gst filing", "itc review", "gst advisory"],
      openGraphTitle: "GST & Indirect Taxation Services",
      openGraphDescription: "Comprehensive GST and indirect tax services for reliable compliance and control."
    }
  },
  {
    id: 4,
    slug: "corporate-regulatory-services",
    iconKey: "corporate",
    title: "Corporate & Regulatory Services",
    shortDescription: "Corporate compliance, restructuring and regulatory support across the entity lifecycle.",
    description:
      "Our Corporate & Regulatory Services practice supports companies from incorporation to ongoing governance and restructuring. We ensure compliant execution across statutory and regulatory touchpoints.",
    offerings: [
      { title: "Company Incorporation", description: "Entity setup assistance including structuring and registration formalities." },
      { title: "ROC Compliance", description: "Routine compliance management with Registrar of Companies requirements." },
      { title: "Annual Filings", description: "Preparation and filing of annual forms and statutory disclosures." },
      { title: "Corporate Restructuring", description: "Support for structural changes aligned with business objectives." },
      { title: "Strike Off and Closure Services", description: "Regulatory support for strike off, closure, and related statutory processes." },
      { title: "FEMA Support", description: "Advisory and compliance support for FEMA-related transactions." },
      { title: "Secretarial Coordination", description: "Coordination support for board processes and statutory records." }
    ],
    benefits: [
      "Lower risk of statutory non-compliance",
      "Faster response to regulatory deadlines",
      "Reliable governance documentation",
      "Practical support during restructuring"
    ],
    industries: industryCatalog,
    process: defaultProcess,
    faqs: [
      {
        question: "Can you support newly incorporated companies?",
        answer: "Yes. We assist with setup, statutory registrations and recurring regulatory obligations from day one."
      },
      {
        question: "Do you handle FEMA-related compliance matters?",
        answer: "Yes. We provide advisory and documentation support for applicable FEMA scenarios."
      }
    ],
    seo: {
      title: "Corporate & Regulatory Services | AGV Reddy & Co.",
      description: "Company incorporation, ROC compliance, annual filings, FEMA and restructuring support.",
      keywords: ["corporate compliance", "roc filings", "company incorporation", "fema support", "regulatory services"],
      openGraphTitle: "Corporate & Regulatory Services",
      openGraphDescription: "Comprehensive corporate and statutory compliance services for growing enterprises."
    }
  },
  {
    id: 5,
    slug: "business-advisory",
    iconKey: "advisory",
    title: "Business Advisory",
    shortDescription: "Strategic financial and operational advisory for growth, transactions and risk decisions.",
    description:
      "Our Business Advisory services combine financial insight, risk perspective and commercial clarity to support high-impact decisions. We partner with leadership teams to improve performance and resilience.",
    offerings: [
      { title: "Business Valuation", description: "Valuation support for transactions, planning and strategic decisions." },
      { title: "Financial Due Diligence", description: "Structured due diligence for acquisitions and investment decisions." },
      { title: "Project Finance", description: "Financial model and funding support for expansion and capital projects." },
      { title: "Risk Management", description: "Risk diagnostics and mitigation planning for key business exposures." },
      { title: "Financial Planning", description: "Performance-focused planning frameworks for sustainable growth." },
      { title: "Management Consulting", description: "Advisory on process improvements, controls and strategic alignment." }
    ],
    benefits: [
      "Better decision quality with data-backed insight",
      "Improved preparedness for capital events",
      "Stronger risk visibility and governance",
      "Actionable recommendations for growth"
    ],
    industries: industryCatalog,
    process: defaultProcess,
    faqs: [
      {
        question: "Do you provide advisory for both growth and turnaround situations?",
        answer: "Yes. Our advisory approach is tailored for expansion, optimization and resilience priorities."
      },
      {
        question: "Can your team assist during investor or lender discussions?",
        answer: "Yes. We support financial narratives, diligence readiness and structured documentation."
      }
    ],
    seo: {
      title: "Business Advisory Services | AGV Reddy & Co.",
      description: "Valuation, due diligence, project finance, risk and management consulting for strategic growth.",
      keywords: ["business advisory", "valuation", "project finance", "management consulting", "risk management"],
      openGraphTitle: "Business Advisory Services",
      openGraphDescription: "Strategic advisory services for growth, transactions and performance improvement."
    }
  },
  {
    id: 6,
    slug: "trusts-ngo-services",
    iconKey: "trust",
    title: "Trusts & NGO Services",
    shortDescription: "Registration, compliance and governance support for trusts and non-profit organizations.",
    description:
      "We support trusts and NGOs with structured registration, tax exemptions, compliance and governance. Our services help mission-driven organizations stay compliant while focusing on impact.",
    offerings: [
      { title: "Trust Registration", description: "Guidance for trust formation, deed documentation and registration steps." },
      { title: "12AB Registration", description: "Eligibility assessment and registration support under applicable provisions." },
      { title: "80G Registration", description: "Support for donor-tax-benefit registration and documentation compliance." },
      { title: "Audit & Compliance", description: "Audit and annual compliance support tailored for NGO obligations." },
      { title: "CSR Advisory", description: "Advisory for CSR program structuring, deployment and reporting." },
      { title: "NGO Governance", description: "Governance framework support for transparency and accountability." }
    ],
    benefits: [
      "Clear compliance roadmap for non-profits",
      "Stronger governance and reporting structure",
      "Support for registration and exemption processes",
      "Alignment between mission and regulatory obligations"
    ],
    industries: ["Trusts & NGOs", "Educational Institutions", "Healthcare", "Government Organizations", "Startups & MSMEs"],
    process: defaultProcess,
    faqs: [
      {
        question: "Can you assist with both 12AB and 80G registrations?",
        answer: "Yes. We support end-to-end application preparation, document validation and filing workflows."
      },
      {
        question: "Do you offer governance support beyond compliance filings?",
        answer: "Yes. We provide governance advisory on controls, reporting and accountability practices."
      }
    ],
    seo: {
      title: "Trusts & NGO Services | AGV Reddy & Co.",
      description: "Trust registration, 12AB, 80G, NGO compliance, CSR advisory and governance services.",
      keywords: ["ngo services", "trust registration", "12ab", "80g", "ngo compliance"],
      openGraphTitle: "Trusts & NGO Services",
      openGraphDescription: "Specialized compliance and governance support for trusts and non-profit institutions."
    }
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
