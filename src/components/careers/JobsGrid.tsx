import { SectionHeading } from "@/components/shared/SectionHeading";
import { Job } from "@/types/job";
import { JobCard } from "@/components/careers/JobCard";

interface JobsGridProps {
  id?: string;
  eyebrow: string;
  title: string;
  jobs: Job[];
  applyLabel: string;
}

export function JobsGrid({ id, eyebrow, title, jobs, applyLabel }: JobsGridProps) {
  return (
    <section id={id} className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading eyebrow={eyebrow} title={title} />
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} applyLabel={applyLabel} />
        ))}
      </div>
    </section>
  );
}
