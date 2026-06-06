import { SectionHeading } from "@/components/shared/SectionHeading";
import { CaseStudyItem } from "@/types/caseStudy";
import { CaseStudyCard } from "@/components/caseStudies/CaseStudyCard";

interface CaseStudyGridProps {
  eyebrow: string;
  title: string;
  description: string;
  studies: CaseStudyItem[];
}

export function CaseStudyGrid({ eyebrow, title, description, studies }: CaseStudyGridProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {studies.map((study) => (
          <CaseStudyCard key={study.id} study={study} />
        ))}
      </div>
    </section>
  );
}
