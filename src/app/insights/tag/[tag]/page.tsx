import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlesGrid } from "@/components/insights/ArticlesGrid";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { getAllTags, getArticlesByTag } from "@/data/articles";
import { createPageMetadata } from "@/lib/seo/metadata";

export const revalidate = 3600;

interface TagPageProps {
  params: {
    tag: string;
  };
}

export function generateStaticParams() {
  return getAllTags().map((tag) => ({ tag: encodeURIComponent(tag) }));
}

export function generateMetadata({ params }: TagPageProps): Metadata {
  const tag = decodeURIComponent(params.tag);

  return createPageMetadata({
    path: `/insights/tag/${encodeURIComponent(tag)}`,
    title: `Tag: ${tag} | AGV Insights`,
    description: `Explore articles tagged with ${tag} from AGV Reddy & Co. Knowledge Center.`,
    keywords: [tag, "insights", "knowledge center", "professional updates"],
    openGraph: {
      title: `${tag} Articles`,
      description: `Insights related to ${tag}`,
      type: "website"
    },
    twitter: {
      card: "summary",
      title: `${tag} Articles`,
      description: `Professional insights tagged with ${tag}`
    }
  });
}

export default function InsightTagPage({ params }: TagPageProps) {
  const tag = decodeURIComponent(params.tag);
  const articles = getArticlesByTag(tag);

  if (articles.length === 0) {
    notFound();
  }

  return (
    <main className="pb-10">
      <BreadcrumbSchema
        id="insight-tag-breadcrumb-schema"
        items={[
          { name: "Home", item: "https://agvreddy.com/" },
          { name: "Insights", item: "https://agvreddy.com/insights" },
          { name: tag, item: `https://agvreddy.com/insights/tag/${encodeURIComponent(tag)}` }
        ]}
      />
      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Tag"
          title={tag}
          description="Articles and updates grouped by topic keyword for faster topic discovery."
        />
      </section>
      <ArticlesGrid articles={articles} />
    </main>
  );
}
