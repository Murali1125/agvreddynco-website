import { SectionHeading } from "@/components/shared/SectionHeading";

interface ContactInfoItem {
  label: string;
  value: string;
}

interface ContactInfoProps {
  eyebrow: string;
  title: string;
  items: ContactInfoItem[];
}

export function ContactInfo({ eyebrow, title, items }: ContactInfoProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading eyebrow={eyebrow} title={title} />
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <article key={item.label} className="rounded-2xl border border-ink/10 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-bronze">{item.label}</p>
            <p className="mt-2 text-base font-medium text-ink">{item.value}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
