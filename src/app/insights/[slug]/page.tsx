import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import { ArticleContent } from "@/components/insights/ArticleContent";
import { ArticleHeader } from "@/components/insights/ArticleHeader";
import { InsightsCTA } from "@/components/insights/InsightsCTA";
import { RelatedArticles } from "@/components/insights/RelatedArticles";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { getArticleBySlug, getLatestArticles, getPrevNextArticle, getRelatedArticles } from "@/data/articles";
import { getAuthorByName } from "@/data/authors";
import { createPageMetadata } from "@/lib/seo/metadata";

export const revalidate = 3600;

interface InsightArticlePageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return getLatestArticles().map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: InsightArticlePageProps): Metadata {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    return createPageMetadata({
      path: "/insights",
      title: "Article Not Found | AGV Insights",
      description: "The requested article could not be found."
    });
  }

  return createPageMetadata({
    path: `/insights/${article.slug}`,
    title: article.seo.title,
    description: article.seo.description,
    keywords: article.seo.keywords,
    openGraph: {
      title: article.seo.openGraphTitle,
      description: article.seo.openGraphDescription,
      type: "article"
    },
    twitter: {
      card: "summary_large_image",
      title: article.seo.twitterTitle,
      description: article.seo.twitterDescription
    }
  });
}

export default function InsightArticlePage({ params }: InsightArticlePageProps) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const author = getAuthorByName(article.author);
  const related = getRelatedArticles(article.slug, article.category);
  const { prev, next } = getPrevNextArticle(article.slug);

  const schemaArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    datePublished: article.publishDate,
    author: {
      "@type": "Person",
      name: author?.name ?? article.author
    },
    publisher: {
      "@type": "Organization",
      name: "AGV Reddy & Co.",
      url: "https://agvreddy.com"
    },
    description: article.excerpt,
    image: article.featuredImage
  };

  return (
    <main className="pb-8">
      <BreadcrumbSchema
        id="insight-article-breadcrumb-schema"
        items={[
          { name: "Home", item: "https://agvreddy.com/" },
          { name: "Insights", item: "https://agvreddy.com/insights" },
          { name: article.title, item: `https://agvreddy.com/insights/${article.slug}` }
        ]}
      />
      <Script id="schema-article" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schemaArticle)}
      </Script>
      <ArticleHeader
        title={article.title}
        category={article.category}
        author={article.author}
        publishDate={article.publishDate}
        readTime={article.readTime}
        featuredImage={article.featuredImage}
      />
      <ArticleContent
        article={article}
        prevLink={prev ? { label: prev.title, href: `/insights/${prev.slug}` } : undefined}
        nextLink={next ? { label: next.title, href: `/insights/${next.slug}` } : undefined}
      />
      <RelatedArticles articles={related} />
      <InsightsCTA headline="Need Professional Assistance?" buttonLabel="Contact Our Team" href="/contact" />
    </main>
  );
}
