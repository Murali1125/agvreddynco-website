import type { Metadata } from "next";
import { IndustriesHero } from "@/components/industries/IndustriesHero";
import { IndustryCTA } from "@/components/industries/IndustryCTA";
import { IndustryExpertise } from "@/components/industries/IndustryExpertise";
import { IndustryGrid } from "@/components/industries/IndustryGrid";
import { IndustryProcess } from "@/components/industries/IndustryProcess";
import { TrustBanner } from "@/components/shared/TrustBanner";
import { industriesPageData } from "@/data/industries";
import { trustBannerData } from "@/data/trust";
import { createPageMetadata } from "@/lib/seo/metadata";

export function generateMetadata(): Metadata {
  return createPageMetadata({
    path: "/industries",
    title: industriesPageData.seo.title,
    description: industriesPageData.seo.description,
    keywords: industriesPageData.seo.keywords,
    openGraph: {
      title: industriesPageData.seo.openGraphTitle,
      description: industriesPageData.seo.openGraphDescription,
      type: "website"
    }
  });
}

export default function IndustriesPage() {
  return (
    <main className="pb-8">
      <IndustriesHero
        eyebrow={industriesPageData.hero.eyebrow}
        headline={industriesPageData.hero.headline}
        subheadline={industriesPageData.hero.subheadline}
        ctaLabel={industriesPageData.hero.ctaLabel}
        ctaHref={industriesPageData.hero.ctaHref}
      />
      <TrustBanner content={trustBannerData} />
      <IndustryGrid
        eyebrow={industriesPageData.grid.eyebrow}
        title={industriesPageData.grid.title}
        description={industriesPageData.grid.description}
        items={industriesPageData.grid.items}
      />
      <IndustryExpertise
        eyebrow={industriesPageData.expertise.eyebrow}
        title={industriesPageData.expertise.title}
        description={industriesPageData.expertise.description}
        items={industriesPageData.expertise.items}
      />
      <IndustryProcess
        eyebrow={industriesPageData.process.eyebrow}
        title={industriesPageData.process.title}
        steps={industriesPageData.process.steps}
      />

    </main>
  );
}
