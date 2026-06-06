import { IndustryCardItem } from "@/types/industry";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { IndustryCard } from "@/components/industries/IndustryCard";

interface IndustryGridProps {
  eyebrow: string;
  title: string;
  description: string;
  items: IndustryCardItem[];
}

export function IndustryGrid({ eyebrow, title, description, items }: IndustryGridProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <IndustryCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
