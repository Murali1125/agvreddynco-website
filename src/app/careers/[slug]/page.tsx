import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JobApplyCTA } from "@/components/careers/JobApplyCTA";
import { JobBenefits } from "@/components/careers/JobBenefits";
import { JobHero } from "@/components/careers/JobHero";
import { JobOverview } from "@/components/careers/JobOverview";
import { JobRequirements } from "@/components/careers/JobRequirements";
import { JobResponsibilities } from "@/components/careers/JobResponsibilities";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { getJobBySlug, jobs } from "@/data/jobs";
import { createPageMetadata } from "@/lib/seo/metadata";

interface JobPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }));
}

export function generateMetadata({ params }: JobPageProps): Metadata {
  const job = getJobBySlug(params.slug);

  if (!job) {
    return createPageMetadata({
      path: "/careers",
      title: "Job Not Found | AGV Reddy & Co.",
      description: "The requested job opening could not be found."
    });
  }

  return createPageMetadata({
    path: `/careers/${job.slug}`,
    title: `${job.title} | Careers | AGV Reddy & Co.`,
    description: `${job.title} role at AGV Reddy & Co. in ${job.location}. Apply for this ${job.type.toLowerCase()} opportunity.`,
    keywords: [job.title, "careers", "agv reddy jobs", "finance jobs", "audit careers"],
    openGraph: {
      title: `${job.title} | Careers`,
      description: `Explore responsibilities, requirements and benefits for the ${job.title} role at AGV Reddy & Co.`,
      type: "article"
    }
  });
}

export default function JobDetailPage({ params }: JobPageProps) {
  const job = getJobBySlug(params.slug);

  if (!job) {
    notFound();
  }

  const applyHref = `/careers/apply?position=${encodeURIComponent(job.title)}`;

  return (
    <main className="pb-8">
      <BreadcrumbSchema
        id="job-detail-breadcrumb-schema"
        items={[
          { name: "Home", item: "https://agvreddy.com/" },
          { name: "Careers", item: "https://agvreddy.com/careers" },
          { name: job.title, item: `https://agvreddy.com/careers/${job.slug}` }
        ]}
      />
      <JobHero
        title={job.title}
        location={job.location}
        experience={job.experience}
        type={job.type}
        applyHref={applyHref}
      />
      <JobOverview overview={job.overview} />
      <JobResponsibilities responsibilities={job.responsibilities} />
      <JobRequirements requirements={job.requirements} />
      <JobBenefits benefits={job.benefits} />
      <JobApplyCTA href={applyHref} />
    </main>
  );
}
