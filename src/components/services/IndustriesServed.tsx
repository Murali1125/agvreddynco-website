import { Building2 } from "lucide-react";

interface IndustriesServedProps {
  title: string;
  industries: string[];
}

export function IndustriesServed({ title, industries }: IndustriesServedProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-semibold text-ink">{title}</h2>
      <div className="mt-8 flex flex-wrap gap-3">
        {industries.map((industry) => (
          <div
            key={industry}
            className="inline-flex items-center gap-2 rounded-full border border-ink/12 bg-white px-4 py-2 text-sm text-slate shadow-sm"
          >
            <Building2 size={14} className="text-bronze" />
            <span>{industry}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
