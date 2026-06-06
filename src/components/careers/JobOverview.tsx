import { SectionHeading } from "@/components/shared/SectionHeading";

interface JobOverviewProps {
  overview: string;
}

export function JobOverview({ overview }: JobOverviewProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Job Overview" title="Role Summary" />
      <div className="mt-6 rounded-2xl border border-ink/10 bg-white p-6 shadow-sm">
        <p className="text-base leading-relaxed text-slate">{overview}</p>
      </div>
    </section>
  );
}
