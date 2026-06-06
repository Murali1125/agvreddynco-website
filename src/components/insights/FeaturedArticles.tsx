import { SectionHeading } from "@/components/shared/SectionHeading";
import { Article } from "@/types/article";
import { ArticleCard } from "@/components/insights/ArticleCard";

interface FeaturedArticlesProps {
  eyebrow: string;
  title: string;
  articles: Article[];
}

export function FeaturedArticles({ eyebrow, title, articles }: FeaturedArticlesProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading eyebrow={eyebrow} title={title} />
      <div className="mt-8 grid gap-5">
        {articles.slice(0, 2).map((article) => (
          <ArticleCard key={article.id} article={article} featured />
        ))}
      </div>
    </section>
  );
}
