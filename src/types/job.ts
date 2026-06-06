export interface Job {
  id: number;
  slug: string;
  title: string;
  location: string;
  experience: string;
  type: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
}

export interface CareersSeoData {
  title: string;
  description: string;
  keywords: string[];
  openGraphTitle: string;
  openGraphDescription: string;
}

export interface CareersPageContent {
  hero: {
    eyebrow: string;
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
  };
  whyJoin: {
    eyebrow: string;
    title: string;
    items: string[];
  };
  culture: {
    eyebrow: string;
    title: string;
    items: string[];
  };
  openPositions: {
    eyebrow: string;
    title: string;
    applyLabel: string;
  };
  journey: {
    eyebrow: string;
    title: string;
    steps: string[];
  };
  benefits: {
    eyebrow: string;
    title: string;
    items: string[];
  };
  cta: {
    headline: string;
    buttonLabel: string;
    href: string;
  };
  seo: CareersSeoData;
}
