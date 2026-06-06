import { SectionHeading } from "@/components/shared/SectionHeading";
import { InsightCategory } from "@/types/category";
import { CategoryCard } from "@/components/insights/CategoryCard";

interface CategoryGridProps {
  eyebrow: string;
  title: string;
  categories: InsightCategory[];
}

export function CategoryGrid({ eyebrow, title, categories }: CategoryGridProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading eyebrow={eyebrow} title={title} />
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <CategoryCard key={category.slug} category={category} />
        ))}
      </div>
    </section>
  );
}
