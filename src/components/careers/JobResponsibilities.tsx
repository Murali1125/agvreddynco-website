import { SectionHeading } from "@/components/shared/SectionHeading";

interface JobResponsibilitiesProps {
  responsibilities: string[];
}

export function JobResponsibilities({ responsibilities }: JobResponsibilitiesProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Responsibilities" title="What You Will Do" />
      <ul className="mt-6 space-y-2 rounded-2xl border border-ink/10 bg-white p-6 text-sm leading-relaxed text-slate shadow-sm">
        {responsibilities.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </section>
  );
}
