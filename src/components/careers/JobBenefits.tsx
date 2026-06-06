import { SectionHeading } from "@/components/shared/SectionHeading";

interface JobBenefitsProps {
  benefits: string[];
}

export function JobBenefits({ benefits }: JobBenefitsProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Benefits" title="What You Can Expect" />
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {benefits.map((benefit) => (
          <article key={benefit} className="rounded-2xl border border-ink/10 bg-white p-5 text-sm font-medium text-slate shadow-sm">
            {benefit}
          </article>
        ))}
      </div>
    </section>
  );
}
