import { Article } from "@/types/article";
import { ArticleCard } from "@/components/insights/ArticleCard";

interface ArticlesGridProps {
  id?: string;
  articles: Article[];
}

export function ArticlesGrid({ id, articles }: ArticlesGridProps) {
  return (
    <section id={id} className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}
