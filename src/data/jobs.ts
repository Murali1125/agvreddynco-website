import { CareersPageContent, Job } from "@/types/job";

export const jobs: Job[] = [
  {
    id: 1,
    slug: "chartered-accountant",
    title: "Chartered Accountant",
    location: "Anantapur / Bengaluru",
    experience: "3-6 Years",
    type: "Full-Time",
    overview:
      "Lead audit, taxation and advisory assignments while mentoring junior team members and ensuring high-quality delivery.",
    responsibilities: [
      "Handle end-to-end audit and assurance engagements",
      "Review financial statements and regulatory filings",
      "Provide tax planning and compliance advisory",
      "Coordinate with clients and internal delivery teams",
      "Support partner-level review and execution standards"
    ],
    requirements: [
      "Qualified Chartered Accountant",
      "3+ years of relevant professional experience",
      "Strong analytical and communication skills",
      "Knowledge of audit standards and tax regulations",
      "Client-facing engagement experience"
    ],
    benefits: [
      "Partner mentorship and strategic exposure",
      "Role progression roadmap",
      "Cross-industry assignment exposure",
      "Learning support for certifications"
    ]
  },
  {
    id: 2,
    slug: "audit-associate",
    title: "Audit Associate",
    location: "Tirupati / Anantapur",
    experience: "1-3 Years",
    type: "Full-Time",
    overview:
      "Support audit execution, documentation and control reviews for diverse client portfolios under senior supervision.",
    responsibilities: [
      "Prepare audit workpapers and documentation",
      "Perform transaction testing and reconciliations",
      "Assist in internal and statutory audit assignments",
      "Track observations and compliance gaps",
      "Collaborate on timely reporting"
    ],
    requirements: [
      "CA Inter / B.Com / M.Com / Equivalent",
      "Understanding of accounting and audit basics",
      "Good documentation discipline",
      "Team collaboration mindset"
    ],
    benefits: [
      "Structured skill development",
      "Guided mentorship from seniors",
      "Exposure to multiple sectors",
      "Professional certification support"
    ]
  },
  {
    id: 3,
    slug: "tax-consultant",
    title: "Tax Consultant",
    location: "Bengaluru",
    experience: "2-5 Years",
    type: "Full-Time",
    overview:
      "Deliver direct and indirect tax advisory, return management and representation support across varied industries.",
    responsibilities: [
      "Manage direct and GST compliance cycles",
      "Prepare tax computations and filings",
      "Support notices, assessments and appeals",
      "Provide transaction-level tax advisory",
      "Coordinate with clients on tax planning"
    ],
    requirements: [
      "CA / CA Inter / Qualified Tax Professional",
      "Experience in direct and indirect tax compliance",
      "Familiarity with assessments and notices",
      "Strong drafting and analytical capability"
    ],
    benefits: [
      "Specialized taxation exposure",
      "Complex case handling opportunities",
      "Continuous regulatory learning",
      "Career growth into leadership tracks"
    ]
  },
  {
    id: 4,
    slug: "article-assistant",
    title: "Article Assistant",
    location: "Anantapur / Tirupati",
    experience: "CA Articleship",
    type: "Articleship",
    overview:
      "Gain practical exposure in audits, taxation and compliance under a structured articleship learning model.",
    responsibilities: [
      "Assist in field and office audit assignments",
      "Prepare compliance working files",
      "Support taxation and filing workflows",
      "Contribute to research and documentation",
      "Participate in review discussions"
    ],
    requirements: [
      "Registered CA articleship candidate",
      "Strong learning orientation",
      "Basic accounting and taxation knowledge",
      "Commitment to professional ethics"
    ],
    benefits: [
      "Direct partner interaction",
      "Hands-on multi-domain exposure",
      "Structured training sessions",
      "Strong foundation for CA career"
    ]
  },
  {
    id: 5,
    slug: "finance-executive",
    title: "Finance Executive",
    location: "Bengaluru / Tirupati",
    experience: "1-4 Years",
    type: "Full-Time",
    overview:
      "Support finance operations, reporting, compliance tracking and management information workflows for clients.",
    responsibilities: [
      "Prepare reports and financial summaries",
      "Coordinate routine compliance activities",
      "Support budgeting and review discussions",
      "Maintain documentation and controls",
      "Assist client service delivery teams"
    ],
    requirements: [
      "B.Com / M.Com / MBA Finance",
      "Experience in accounting or finance operations",
      "Comfort with spreadsheets and MIS reports",
      "Strong communication and organization"
    ],
    benefits: [
      "Practical finance operations exposure",
      "Cross-functional client engagement",
      "Guided development pathway",
      "Performance-based progression"
    ]
  },
  {
    id: 6,
    slug: "internship-program",
    title: "Internship Program",
    location: "Anantapur / Bengaluru / Tirupati",
    experience: "0-1 Years",
    type: "Internship",
    overview:
      "A structured internship program for finance graduates to build practical readiness in audit, tax and advisory.",
    responsibilities: [
      "Assist in data collection and documentation",
      "Support basic analysis and reconciliations",
      "Participate in internal learning sessions",
      "Work with mentors on assignment tasks",
      "Contribute to process quality checks"
    ],
    requirements: [
      "Commerce / finance graduate or final-year student",
      "Strong willingness to learn",
      "Basic accounting understanding",
      "Professional conduct and communication"
    ],
    benefits: [
      "Real project exposure",
      "Mentorship from experienced professionals",
      "Learning-oriented environment",
      "Potential full-time conversion pathway"
    ]
  }
];

export const careersPageData: CareersPageContent = {
  hero: {
    eyebrow: "Careers",
    headline: "Join a Firm That Values Excellence",
    subheadline:
      "At AGV Reddy & Co., we believe our people are our greatest strength and provide an environment that encourages professional growth, continuous learning and leadership development.",
    primaryCta: {
      label: "View Opportunities",
      href: "#open-positions"
    },
    secondaryCta: {
      label: "Apply Now",
      href: "/careers/apply"
    }
  },
  whyJoin: {
    eyebrow: "Why Join Us",
    title: "Grow With Experienced Professionals",
    items: [
      "Professional Development",
      "Partner Mentorship",
      "Exposure To Diverse Industries",
      "Leadership Opportunities",
      "Continuous Learning",
      "Collaborative Environment"
    ]
  },
  culture: {
    eyebrow: "Work Culture",
    title: "A Learning-Focused Professional Culture",
    items: [
      "Client-Centric Mindset",
      "Professional Ethics",
      "Knowledge Sharing",
      "Team Collaboration",
      "Innovation & Growth"
    ]
  },
  openPositions: {
    eyebrow: "Open Positions",
    title: "Current Opportunities",
    applyLabel: "Apply"
  },
  journey: {
    eyebrow: "Career Journey",
    title: "Progression Path At AGV",
    steps: ["Intern", "Article Assistant", "Associate", "Senior Associate", "Manager", "Partner Track"]
  },
  benefits: {
    eyebrow: "Employee Benefits",
    title: "What You Gain With Us",
    items: [
      "Professional Development",
      "Training Programs",
      "Mentorship",
      "Flexible Learning",
      "Industry Exposure",
      "Career Advancement"
    ]
  },
  cta: {
    headline: "Email your resume to careers@agvreddy.com",
    buttonLabel: "Apply Now",
    href: "/careers/apply"
  },
  seo: {
    title: "Careers | AGV Reddy & Co.",
    description:
      "Explore career opportunities at AGV Reddy & Co. for chartered accountants, audit professionals, tax consultants, interns and finance graduates.",
    keywords: [
      "chartered accountant jobs",
      "audit associate jobs",
      "tax consultant careers",
      "articleship opportunities",
      "finance internships"
    ],
    openGraphTitle: "Join a Firm That Values Excellence",
    openGraphDescription: "Join a professional firm focused on growth, mentorship and long-term career development."
  }
};

export const careersApplyPageData = {
  eyebrow: "Career Application",
  title: "Apply To AGV Reddy & Co.",
  description: "Submit your profile for current and upcoming opportunities, or email your resume to careers@agvreddy.com.",
  submitLabel: "Submit Application",
  successTitle: "Application Submitted Successfully",
  successMessage:
    "Our recruitment team will review your profile and contact you if your qualifications match our requirements.",
  seo: {
    title: "Apply For Careers | AGV Reddy & Co.",
    description: "Submit your career application to AGV Reddy & Co. for roles in audit, taxation, advisory and finance.",
    keywords: ["career application", "apply finance jobs", "ca firm careers", "audit jobs apply"],
    openGraphTitle: "Apply To AGV Reddy & Co.",
    openGraphDescription: "Share your profile and grow your career with AGV Reddy & Co."
  }
};

export function getJobBySlug(slug: string): Job | undefined {
  return jobs.find((job) => job.slug === slug);
}
