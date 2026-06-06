import { TimelineItem } from "@/types/about";

interface TimelineProps {
  title: string;
  description: string;
  items: TimelineItem[];
}

export function Timeline({ title, description, items }: TimelineProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-18 sm:px-6 lg:px-8 py-10">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bronze">Our Story</p>
        <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">{title}</h2>
        <p className="mt-4 text-base leading-relaxed text-slate">{description}</p>
      </div>

      <ol className="relative mt-12 space-y-6 border-l border-bronze/25 pl-6 sm:space-y-7 sm:pl-8">
        {items.map((item) => (
          <li key={`${item.period}-${item.title}`} className="group relative">
            <span className="absolute -left-[33px] top-1 h-4 w-4 rounded-full border-4 border-white bg-bronze shadow-md shadow-bronze/30 sm:-left-[41px]" />
            <div className="rounded-2xl border border-ink/8 bg-white p-5 shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:shadow-panel">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze">{item.period}</p>
              <p className="mt-2 text-lg font-semibold text-ink">{item.title}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
