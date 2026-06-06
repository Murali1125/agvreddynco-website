import { SectionHeading } from "@/components/shared/SectionHeading";

interface JobRequirementsProps {
  requirements: string[];
}

export function JobRequirements({ requirements }: JobRequirementsProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Requirements" title="Qualifications & Skills" />
      <ul className="mt-6 space-y-2 rounded-2xl border border-ink/10 bg-white p-6 text-sm leading-relaxed text-slate shadow-sm">
        {requirements.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </section>
  );
}
