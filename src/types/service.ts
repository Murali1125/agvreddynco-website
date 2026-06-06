import { LucideIcon } from "lucide-react";

export interface ServiceOffering {
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  openGraphTitle: string;
  openGraphDescription: string;
}

export interface Service {
  id: number;
  slug: string;
  iconKey: string;
  title: string;
  shortDescription: string;
  description: string;
  offerings: ServiceOffering[];
  benefits: string[];
  industries: string[];
  process: string[];
  faqs: FAQ[];
  seo: SEOData;
}

export interface IconFeature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ServicesPageContent {
  hero: {
    headline: string;
    subheadline: string;
  };
  benefits: {
    title: string;
    items: IconFeature[];
  };
  cta: {
    headline: string;
    buttonLabel: string;
    href: string;
  };
}
