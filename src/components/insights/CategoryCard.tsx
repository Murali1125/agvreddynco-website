import Link from "next/link";
import { InsightCategory } from "@/types/category";

interface CategoryCardProps {
  category: InsightCategory;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <article className="rounded-2xl border border-ink/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-panel">
      <h3 className="text-lg font-semibold text-ink">
        <Link href={`/insights/category/${encodeURIComponent(category.name)}`} className="hover:text-bronze">
          {category.name}
        </Link>
      </h3>
      <p className="mt-2 text-sm text-slate">{category.description}</p>
    </article>
  );
}
