import type { Metadata } from "next";
import { CaseStudiesCTA } from "@/components/caseStudies/CaseStudiesCTA";
import { CaseStudiesHero } from "@/components/caseStudies/CaseStudiesHero";
import { CaseStudyGrid } from "@/components/caseStudies/CaseStudyGrid";
import { SuccessMetrics } from "@/components/caseStudies/SuccessMetrics";
import { TrustFramework } from "@/components/caseStudies/TrustFramework";
import { WhyChooseUs } from "@/components/caseStudies/WhyChooseUs";
import { TrustBanner } from "@/components/shared/TrustBanner";
import { caseStudiesPageData } from "@/data/caseStudies";
import { trustBannerData } from "@/data/trust";
import { createPageMetadata } from "@/lib/seo/metadata";

export function generateMetadata(): Metadata {
  return createPageMetadata({
    path: "/case-studies",
    title: caseStudiesPageData.seo.title,
    description: caseStudiesPageData.seo.description,
    keywords: caseStudiesPageData.seo.keywords,
    openGraph: {
      title: caseStudiesPageData.seo.openGraphTitle,
      description: caseStudiesPageData.seo.openGraphDescription,
      type: "website"
    }
  });
}

export default function CaseStudiesPage() {
  return (
    <main className="pb-8">
      <CaseStudiesHero
        eyebrow={caseStudiesPageData.hero.eyebrow}
        headline={caseStudiesPageData.hero.headline}
        subheadline={caseStudiesPageData.hero.subheadline}
      />
      <TrustBanner content={trustBannerData} />
      <CaseStudyGrid
        eyebrow={caseStudiesPageData.listing.eyebrow}
        title={caseStudiesPageData.listing.title}
        description={caseStudiesPageData.listing.description}
        studies={caseStudiesPageData.listing.studies}
      />
      <SuccessMetrics
        eyebrow={caseStudiesPageData.successMetrics.eyebrow}
        title={caseStudiesPageData.successMetrics.title}
        metrics={caseStudiesPageData.successMetrics.metrics}
      />
      <TrustFramework
        eyebrow={caseStudiesPageData.trustFramework.eyebrow}
        title={caseStudiesPageData.trustFramework.title}
        pillars={caseStudiesPageData.trustFramework.pillars}
      />
      <WhyChooseUs
        eyebrow={caseStudiesPageData.whyChooseUs.eyebrow}
        title={caseStudiesPageData.whyChooseUs.title}
        items={caseStudiesPageData.whyChooseUs.items}
      />
      <CaseStudiesCTA
        headline={caseStudiesPageData.cta.headline}
        buttonLabel={caseStudiesPageData.cta.buttonLabel}
        href={caseStudiesPageData.cta.href}
      />
    </main>
  );
}
