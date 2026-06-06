export interface CaseStudyItem {
  id: number;
  sector: string;
  challenge: string;
  solution: string;
  result: string;
}

export interface SuccessMetricItem {
  label: string;
  value: number;
  suffix?: string;
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface CaseStudiesPageSeo {
  title: string;
  description: string;
  keywords: string[];
  openGraphTitle: string;
  openGraphDescription: string;
}

export interface CaseStudiesPageContent {
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
  };
  listing: {
    eyebrow: string;
    title: string;
    description: string;
    studies: CaseStudyItem[];
  };
  successMetrics: {
    eyebrow: string;
    title: string;
    metrics: SuccessMetricItem[];
  };
  trustFramework: {
    eyebrow: string;
    title: string;
    pillars: string[];
  };
  whyChooseUs: {
    eyebrow: string;
    title: string;
    items: FeatureItem[];
  };
  cta: {
    headline: string;
    buttonLabel: string;
    href: string;
  };
  seo: CaseStudiesPageSeo;
}
