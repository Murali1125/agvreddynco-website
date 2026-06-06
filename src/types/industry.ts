export interface IndustryCardItem {
  id: number;
  iconKey: string;
  name: string;
  shortDescription: string;
  keyChallenges: string[];
  expertise: string[];
}

export interface IndustryExpertiseItem {
  industry: string;
  services: string[];
}

export interface IndustryPageSeo {
  title: string;
  description: string;
  keywords: string[];
  openGraphTitle: string;
  openGraphDescription: string;
}

export interface IndustriesPageContent {
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    ctaLabel: string;
    ctaHref: string;
  };
  grid: {
    eyebrow: string;
    title: string;
    description: string;
    items: IndustryCardItem[];
  };
  expertise: {
    eyebrow: string;
    title: string;
    description: string;
    items: IndustryExpertiseItem[];
  };
  process: {
    eyebrow: string;
    title: string;
    steps: string[];
  };
  cta: {
    headline: string;
    buttonLabel: string;
    href: string;
  };
  seo: IndustryPageSeo;
}
