import type { Metadata } from "next";
import { FeaturedArticles } from "@/components/insights/FeaturedArticles";
import { CategoryGrid } from "@/components/insights/CategoryGrid";
import { InsightsHero } from "@/components/insights/InsightsHero";
import { NewsletterCTA } from "@/components/insights/NewsletterCTA";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ArticlesExplorer } from "@/components/insights/ArticlesExplorer";
import { getAllTags, getFeaturedArticles, getLatestArticles, insightCategories, insightsPageData } from "@/data/articles";
import { createPageMetadata } from "@/lib/seo/metadata";

export const revalidate = 3600;

export function generateMetadata(): Metadata {
  return createPageMetadata({
    path: "/insights",
    title: insightsPageData.seo.title,
    description: insightsPageData.seo.description,
    keywords: insightsPageData.seo.keywords,
    openGraph: {
      title: insightsPageData.seo.openGraphTitle,
      description: insightsPageData.seo.openGraphDescription,
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: insightsPageData.seo.twitterTitle,
      description: insightsPageData.seo.twitterDescription
    }
  });
}

export default function InsightsPage() {
  const featuredArticles = getFeaturedArticles();
  const latestArticles = getLatestArticles();

  return (
    <main className="pb-8">
      <BreadcrumbSchema
        id="insights-breadcrumb-schema"
        items={[
          { name: "Home", item: "https://agvreddy.com/" },
          { name: "Insights", item: "https://agvreddy.com/insights" }
        ]}
      />
      <InsightsHero
        headline={insightsPageData.hero.headline}
        subheadline={insightsPageData.hero.subheadline}
        ctaLabel={insightsPageData.hero.ctaLabel}
        ctaHref={insightsPageData.hero.ctaHref}
      />
      <FeaturedArticles
        eyebrow={insightsPageData.featured.eyebrow}
        title={insightsPageData.featured.title}
        articles={featuredArticles}
      />
      <CategoryGrid
        eyebrow={insightsPageData.categories.eyebrow}
        title={insightsPageData.categories.title}
        categories={insightCategories}
      />
      <section className="mx-auto w-full max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={insightsPageData.latest.eyebrow} title={insightsPageData.latest.title} />
      </section>
      <ArticlesExplorer
        articles={latestArticles}
        categories={insightCategories.map((category) => category.name)}
        tags={getAllTags()}
      />
      <NewsletterCTA headline={insightsPageData.newsletter.headline} buttonLabel={insightsPageData.newsletter.buttonLabel} />
    </main>
  );
}
