import { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface HeroContent {
  headline: string;
  subheadline: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
}

export interface TrustIndicator {
  title: string;
  subtitle: string;
}

export interface WhyChooseUsItem {
  title: string;
  description: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface LocationItem {
  city: string;
  addressLine: string;
  mapUrl: string;
}

export interface FooterLinkGroup {
  title: string;
  links: NavItem[];
}

export interface ContactInfo {
  email: string;
  phone?: string;
}

export interface HomePageContent {
  companyName: string;
  navItems: NavItem[];
  hero: HeroContent;
  trustIndicators: TrustIndicator[];
  whyChooseUs: WhyChooseUsItem[];
  services: ServiceItem[];
  locations: LocationItem[];
  callToAction: {
    headline: string;
    buttonLabel: string;
    href: string;
  };
  footer: {
    quickLinks: FooterLinkGroup[];
    contact: ContactInfo;
    copyright: string;
  };
}
