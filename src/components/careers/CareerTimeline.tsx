import { SectionHeading } from "@/components/shared/SectionHeading";

interface CareerTimelineProps {
  eyebrow: string;
  title: string;
  steps: string[];
}

export function CareerTimeline({ eyebrow, title, steps }: CareerTimelineProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading eyebrow={eyebrow} title={title} />
      <ol className="relative mt-8 space-y-4 border-l border-bronze/25 pl-6 sm:pl-8">
        {steps.map((step, index) => (
          <li key={step} className="relative">
            <span className="absolute -left-[33px] top-1 h-4 w-4 rounded-full border-4 border-white bg-bronze sm:-left-[41px]" />
            <div className="rounded-2xl border border-ink/10 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-bronze">Stage {index + 1}</p>
              <p className="mt-2 text-base font-medium text-ink">{step}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
