import type { Metadata } from "next";
import { ApplicationForm } from "@/components/careers/ApplicationForm";
import { careersApplyPageData, jobs } from "@/data/jobs";
import { createPageMetadata } from "@/lib/seo/metadata";

export function generateMetadata(): Metadata {
  return createPageMetadata({
    path: "/careers/apply",
    title: careersApplyPageData.seo.title,
    description: careersApplyPageData.seo.description,
    keywords: careersApplyPageData.seo.keywords,
    openGraph: {
      title: careersApplyPageData.seo.openGraphTitle,
      description: careersApplyPageData.seo.openGraphDescription,
      type: "website"
    }
  });
}

export default function CareersApplyPage() {
  return (
    <main className="pb-8">
      <ApplicationForm
        positions={jobs.map((job) => job.title)}
        title={careersApplyPageData.title}
        description={careersApplyPageData.description}
        submitLabel={careersApplyPageData.submitLabel}
        successTitle={careersApplyPageData.successTitle}
        successMessage={careersApplyPageData.successMessage}
      />
    </main>
  );
}
