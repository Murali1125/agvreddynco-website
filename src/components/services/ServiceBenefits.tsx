import { BadgeCheck } from "lucide-react";

interface ServiceBenefitsProps {
  title: string;
  items: string[];
}

export function ServiceBenefits({ title, items }: ServiceBenefitsProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-semibold text-ink">{title}</h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <article key={item} className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-cream text-bronze">
              <BadgeCheck size={18} />
            </div>
            <p className="mt-3 text-sm font-medium leading-relaxed text-slate">{item}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
