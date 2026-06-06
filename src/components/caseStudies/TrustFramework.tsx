import { ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";

interface TrustFrameworkProps {
  eyebrow: string;
  title: string;
  pillars: string[];
}

export function TrustFramework({ eyebrow, title, pillars }: TrustFrameworkProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading eyebrow={eyebrow} title={title} />
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((pillar) => (
          <article key={pillar} className="rounded-2xl border border-ink/10 bg-white p-5 shadow-sm">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-cream text-bronze">
              <ShieldCheck size={18} />
            </span>
            <p className="mt-3 text-sm font-semibold text-ink">{pillar}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
