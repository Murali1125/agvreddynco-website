import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticlesGrid } from "@/components/insights/ArticlesGrid";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { getArticlesByCategory, insightCategories } from "@/data/articles";
import { createPageMetadata } from "@/lib/seo/metadata";

export const revalidate = 3600;

const PAGE_SIZE = 6;

interface CategoryPageProps {
  params: {
    category: string;
  };
  searchParams?: {
    page?: string;
  };
}

export function generateStaticParams() {
  return insightCategories.map((category) => ({ category: encodeURIComponent(category.name) }));
}

export function generateMetadata({ params }: CategoryPageProps): Metadata {
  const categoryName = decodeURIComponent(params.category);

  return createPageMetadata({
    path: `/insights/category/${encodeURIComponent(categoryName)}`,
    title: `${categoryName} Insights | AGV Reddy & Co.`,
    description: `Read ${categoryName} articles and professional updates from AGV Reddy & Co.`,
    keywords: [categoryName, "insights", "knowledge center", "professional guidance"],
    openGraph: {
      title: `${categoryName} Insights`,
      description: `Category-focused articles for ${categoryName}`,
      type: "website"
    },
    twitter: {
      card: "summary",
      title: `${categoryName} Insights`,
      description: `Professional ${categoryName} updates and guidance`
    }
  });
}

export default function InsightCategoryPage({ params, searchParams }: CategoryPageProps) {
  const categoryName = decodeURIComponent(params.category);
  const categoryInfo = insightCategories.find((item) => item.name.toLowerCase() === categoryName.toLowerCase());

  if (!categoryInfo) {
    notFound();
  }

  const allArticles = getArticlesByCategory(categoryName);
  const page = Number(searchParams?.page ?? "1");
  const pageSafe = Number.isFinite(page) && page > 0 ? page : 1;
  const start = (pageSafe - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const pagedArticles = allArticles.slice(start, end);
  const totalPages = Math.max(1, Math.ceil(allArticles.length / PAGE_SIZE));

  return (
    <main className="pb-10">
      <BreadcrumbSchema
        id="insight-category-breadcrumb-schema"
        items={[
          { name: "Home", item: "https://agvreddy.com/" },
          { name: "Insights", item: "https://agvreddy.com/insights" },
          { name: categoryInfo.name, item: `https://agvreddy.com/insights/category/${encodeURIComponent(categoryInfo.name)}` }
        ]}
      />
      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Category" title={categoryInfo.name} description={categoryInfo.description} />
      </section>
      <ArticlesGrid articles={pagedArticles} />
      <section className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 pb-10 sm:px-6 lg:px-8">
        <Link
          href={pageSafe > 1 ? `/insights/category/${encodeURIComponent(categoryInfo.name)}?page=${pageSafe - 1}` : "#"}
          aria-disabled={pageSafe <= 1}
          className={`rounded-full border px-4 py-2 text-sm ${pageSafe <= 1 ? "cursor-not-allowed border-ink/10 text-slate/40" : "border-ink/20 text-slate hover:border-bronze hover:text-bronze"}`}
        >
          Previous
        </Link>
        <p className="text-sm text-slate">
          Page {pageSafe} of {totalPages}
        </p>
        <Link
          href={pageSafe < totalPages ? `/insights/category/${encodeURIComponent(categoryInfo.name)}?page=${pageSafe + 1}` : "#"}
          aria-disabled={pageSafe >= totalPages}
          className={`rounded-full border px-4 py-2 text-sm ${pageSafe >= totalPages ? "cursor-not-allowed border-ink/10 text-slate/40" : "border-ink/20 text-slate hover:border-bronze hover:text-bronze"}`}
        >
          Next
        </Link>
      </section>
    </main>
  );
}
