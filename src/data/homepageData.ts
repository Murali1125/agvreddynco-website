import {
  Banknote,
  BadgeCheck,
  Building2,
  ClipboardCheck,
  FileBadge,
  Handshake,
  Landmark,
  ScanSearch,
  Scale,
  ShieldCheck,
  TrendingUp
} from "lucide-react";
import { HomePageContent } from "@/types/homepage";

export const homepageData: HomePageContent = {
  companyName: "AGV Reddy & Co.",
  navItems: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" }
  ],
  hero: {
    headline: "Building Trust Since 1984",
    subheadline:
      "For more than four decades, AGV Reddy & Co. has been a trusted name in professional services, delivering excellence in audit, taxation, advisory, and regulatory compliance. Established in 1984, the firm has earned a reputation for integrity, technical expertise, and client-focused solutions. As a Peer Reviewed Firm, C&AG Empanelled Firm, RBI Registered Category III Audit Firm, and NABARD Category C Empanelled Firm, we provide professional services that meet the highest standards of quality, independence, and regulatory compliance.",
    primaryCta: {
      label: "Schedule Consultation",
      href: "/contact"
    },
    secondaryCta: {
      label: "Explore Services",
      href: "/services"
    }
  },
  trustIndicators: [
    { title: "Peer Reviewed Firm  level III.", subtitle: "Quality validated through professional review" },
    { title: "C&AG Empanelled", subtitle: "Empanelment No. SR3458" },
    { title: "RBI Category III Registered Audit Firm", subtitle: "Unique Code: 1018211" },
    { title: "NABARD Category C Empanelled", subtitle: "Recognized for institutional assignments" },
  ],
  whyChooseUs: [
    {
      title: "Established Legacy Since 1984",
      description: "A trusted professional legacy built over four decades."
    },
    {
      title: "Peer Reviewed Quality",
      description: "Independent validation of quality standards and professional processes."
    },
    {
      title: "Regulatory Credentials",
      description: "C&AG , RBI Category III Registered, and NABARD Category C empanelment."
    },
    {
      title: "Experienced Team",
      description: "Chartered accountants with deep expertise in audit, taxation, and advisory."
    },
    {
      title: "Client-Centric Approach",
      description: "Practical advice, timely execution, and partner-driven attention."
    },
    {
      title: "Strong Regional Presence",
      description: "Head office in Anantapur with branches in Tirupati and Bengaluru."
    }
  ],
  services: [
    {
      title: "Audit & Assurance",
      description: "Independent audit services that strengthen stakeholder confidence.",
      icon: ClipboardCheck
    },
    {
      title: "Direct Taxation",
      description: "Strategic tax planning and compliance for individuals and businesses.",
      icon: Banknote
    },
    {
      title: "GST Compliance",
      description: "Comprehensive GST advisory, filing, and litigation support.",
      icon: BadgeCheck
    },
    {
      title: "Corporate Law Compliance",
      description: "Timely secretarial and corporate compliance management.",
      icon: Building2
    },
    {
      title: "Business Advisory",
      description: "Financial due diligence, valuation, and management consulting for growth.",
      icon: TrendingUp
    },
    {
      title: "IS Audit",
      description: "Information systems assurance aligned with governance and control requirements.",
      icon: ShieldCheck
    },
    {
      title: "Financial Due Diligence",
      description: "Risk-focused financial review for acquisitions, investments, and strategic transactions.",
      icon: ScanSearch
    },
    {
      title: "Trust & NGO Services",
      description: "Registration, compliance, and governance support for trusts and non-profit organizations.",
      icon: Handshake
    }
  ],
  locations: [
    { city: "Anantapur", addressLine: "Head Office", mapUrl: "https://maps.app.goo.gl/jANfQxPvEUis744f7" },
    { city: "Tirupati", addressLine: "Branch Office", mapUrl: "https://maps.app.goo.gl/AMkX6E55RvRYXYKe8" },
    { city: "Bengaluru", addressLine: "Branch Office", mapUrl: "https://maps.app.goo.gl/md7jqb1Qdkk2iTy8A" }
  ],
  callToAction: {
    headline: "Committed to Excellence. Driven by Integrity.",
    buttonLabel: "Contact Us",
    href: "/contact"
  },
  footer: {
    quickLinks: [
      {
        title: "Explore",
        links: [
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Services", href: "/services" },
          { label: "Industries", href: "/industries" }
        ]
      },
      {
        title: "Resources",
        links: [
   
          { label: "Careers", href: "/careers" },
          { label: "Contact", href: "/contact" }
        ]
      }
    ],
    contact: {
      email: "info@agvreddy.com",
      phone: "08554 274969"
    },
    copyright: "© 2026 AGV Reddy & Co. All rights reserved."
  }
};

export const decorativeIcons = {
  landmark: Landmark,
  scale: Scale,
  fileBadge: FileBadge
};
