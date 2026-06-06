import Image from "next/image";
import Link from "next/link";
import { Article } from "@/types/article";

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export function ArticleCard({ article, featured = false }: ArticleCardProps) {
  const publishDate = new Date(article.publishDate).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });

  return (
    <article className={`overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm ${featured ? "lg:grid lg:grid-cols-2" : ""}`}>
      <div className={`relative ${featured ? "min-h-[280px]" : "h-44"}`}>
        <Image src={article.featuredImage} alt={article.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
      </div>
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-bronze">{article.category}</p>
        <h3 className="mt-2 text-xl font-semibold text-ink">
          <Link href={`/insights/${article.slug}`} className="hover:text-bronze">
            {article.title}
          </Link>
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate">{article.excerpt}</p>
        <p className="mt-4 text-xs font-medium text-slate">
          {publishDate} • {article.readTime}
        </p>
      </div>
    </article>
  );
}
