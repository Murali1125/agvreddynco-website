import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { CareersCTA } from "@/components/careers/CareersCTA";
import { CareersHero } from "@/components/careers/CareersHero";
import { CareerTimeline } from "@/components/careers/CareerTimeline";
import { EmployeeBenefits } from "@/components/careers/EmployeeBenefits";
import { JobsGrid } from "@/components/careers/JobsGrid";
import { WhyJoinUs } from "@/components/careers/WhyJoinUs";
import { WorkCulture } from "@/components/careers/WorkCulture";
import { careersPageData, jobs } from "@/data/jobs";
import { createPageMetadata } from "@/lib/seo/metadata";

export function generateMetadata(): Metadata {
  return createPageMetadata({
    path: "/careers",
    title: careersPageData.seo.title,
    description: careersPageData.seo.description,
    keywords: careersPageData.seo.keywords,
    openGraph: {
      title: careersPageData.seo.openGraphTitle,
      description: careersPageData.seo.openGraphDescription,
      type: "website"
    }
  });
}

export default function CareersPage() {
  return (
    <main className="pb-8">
      <BreadcrumbSchema
        id="careers-breadcrumb-schema"
        items={[
          { name: "Home", item: "https://agvreddy.com/" },
          { name: "Careers", item: "https://agvreddy.com/careers" }
        ]}
      />
      <CareersHero
        eyebrow={careersPageData.hero.eyebrow}
        headline={careersPageData.hero.headline}
        subheadline={careersPageData.hero.subheadline}
        primaryCta={careersPageData.hero.primaryCta}
        secondaryCta={careersPageData.hero.secondaryCta}
      />
      <WhyJoinUs
        eyebrow={careersPageData.whyJoin.eyebrow}
        title={careersPageData.whyJoin.title}
        items={careersPageData.whyJoin.items}
      />
      <WorkCulture
        eyebrow={careersPageData.culture.eyebrow}
        title={careersPageData.culture.title}
        items={careersPageData.culture.items}
      />
      <JobsGrid
        id="open-positions"
        eyebrow={careersPageData.openPositions.eyebrow}
        title={careersPageData.openPositions.title}
        jobs={jobs}
        applyLabel={careersPageData.openPositions.applyLabel}
      />
      <CareerTimeline
        eyebrow={careersPageData.journey.eyebrow}
        title={careersPageData.journey.title}
        steps={careersPageData.journey.steps}
      />
      <EmployeeBenefits
        eyebrow={careersPageData.benefits.eyebrow}
        title={careersPageData.benefits.title}
        items={careersPageData.benefits.items}
      />
      <CareersCTA
        headline={careersPageData.cta.headline}
        buttonLabel={careersPageData.cta.buttonLabel}
        href={careersPageData.cta.href}
      />
    </main>
  );
}
