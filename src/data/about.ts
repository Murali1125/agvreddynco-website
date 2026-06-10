import {
  Award,
  BadgeCheck,
  BookOpenText,
  Building2,
  FileCheck2,
  Globe,
  Landmark,
  Lock,
  Scale,
  ShieldCheck,
  TrendingUp,
  Users
} from "lucide-react";
import AgvReddyImage from "@/assets/AgvReddy.jpeg";
import NallappaImage from "@/assets/Nallappa.jpeg";
import { AboutPageContent } from "@/types/about";

export const aboutPageData: AboutPageContent = {
  hero: {
    headline: "More Than Four Decades of Professional Excellence",
    subheadline:
      "Since 1984, AGV Reddy & Co. has been delivering trusted audit, taxation, advisory and compliance services across diverse industries.",
    metrics: [
      { label: "Established", value: "1984" },
      { label: "Experience", value: "40+ Years" },
      { label: "Locations", value: "3 Offices" }
    ],
    cta: {
      label: "Contact Us",
      href: "/contact"
    }
  },
  journey: {
    title: "Our Journey",
    description:
      "Established in 1984, AGV Reddy & Co. was founded with a vision to provide quality professional services grounded in integrity, independence and technical excellence. Over the years, the firm has served clients across manufacturing, trading, infrastructure, construction, healthcare, education, agriculture, financial services, charitable institutions, government sectors and non-profit organizations.",
    timeline: [
      { period: "1984", title: "Firm Established" },
      { period: "2000+", title: "Expanded Regional Presence" },
      { period: "2010+", title: "Broader Sectoral Engagement" },
      { period: "Today", title: "Respected Multi-Office Professional Firm" }
    ]
  },
  credentials: {
    title: "Firm Credentials",
    description: "Recognized by leading regulatory institutions and trusted for high-stakes assignments.",
    items: [
      { title: "Peer Reviewed Firm - level III", description: "Quality and process standards validated by peer review.", icon: BadgeCheck },
      { title: "C&AG Empanelled ", description: "Empanelled under C&AG Category III (SR3458).", icon: FileCheck2 },
      { title: "RBI Category III Registered Audit Firm", description: "Registered with RBI for audit assignments (Code: 1018211).", icon: Landmark },
      { title: "NABARD Category C Empanelled", description: "Empanelled with NABARD under Category C.", icon: Building2 },
      { title: "40+ Years Experience", description: "A legacy built through consistency, integrity and technical depth.", icon: TrendingUp },
      { title: "Multi-City Presence", description: "Strategic offices to serve clients across key business locations.", icon: Globe }
    ]
  },
  visionMission: {
    vision:
      "To be the most trusted professional advisory firm recognized for excellence, innovation, integrity and client success.",
    mission:
      "To deliver value-driven professional solutions through technical expertise, ethical conduct and unwavering commitment to client satisfaction."
  },
  coreValues: {
    title: "Core Values",
    description: "The principles that shape every engagement and long-term relationship.",
    items: [
      { title: "Integrity", description: "We act with transparency, honesty and accountability in every assignment.", icon: Scale },
      { title: "Professional Excellence", description: "We bring rigor, precision and domain expertise to every deliverable.", icon: Award },
      { title: "Client Focus", description: "We align our approach to each client context and business priorities.", icon: Users },
      { title: "Confidentiality", description: "We uphold strict confidentiality and trust across all engagements.", icon: Lock },
      { title: "Continuous Learning", description: "We stay current with evolving regulations and professional standards.", icon: BookOpenText },
      { title: "Quality Service", description: "We maintain disciplined review practices for consistent quality outcomes.", icon: ShieldCheck }
    ]
  },
  leadership: {
    title: "Leadership Team",
    description: "Our partners combine technical depth and practical insight to deliver client-centric solutions.",
    leaders: [
      {
        name: "CA Dr. A.G. Venugopal Reddy",
        imageUrl: AgvReddyImage,
        role: "Founder Partner",
        description:
          "Founder of the firm and a highly respected chartered accountant with extensive professional experience spanning more than four decades."
      },
      {
        name: "CA Kasi Reddy Nallappa Reddy",
        imageUrl: NallappaImage,
        role: "Partner",
        description: "Specializing in audit, Indian taxation and US taxation compliance and advisory services with practical business-focused guidance."
      },
      {
        name: "CA Yasaswani Grandhi", 
        role: "Partner",
        description: "Experienced in direct taxation, GST compliance, audit assignments, regulatory advisory and financial consulting."
      },
      {
        name: "CA Mahaveer Bansal",
        role: "Partner",
        description: "Specializes in corporate advisory, financial reporting, compliance management and business consulting."
      }
    ]
  },
  trustCounters: {
    title: "Why Clients Trust Us",
    counters: [
      { value: 40, suffix: "+", label: "Years Experience" },
      { value: 3, label: "Office Locations" },
      { value: 12, suffix: "+", label: "Industries Served" },
      { value: 4, label: "Major Regulatory Empanelments" }
    ]
  },
  officePresence: {
    title: "Office Presence",
    locations: [
      { city: "Anantapur", officeType: "Head Office", description: "Primary operations and leadership center." },
      { city: "Tirupati", officeType: "Branch Office", description: "Regional client delivery and support office." },
      { city: "Bengaluru", officeType: "Branch Office", description: "Corporate advisory and compliance services hub." }
    ]
  },
  cta: {
    headline: "Your Trusted Financial Advisors Since 1984",
    subheadline: "Serving businesses. Supporting growth. Delivering trust.",
    button: {
      label: "Get In Touch",
      href: "#contact"
    }
  }
};
