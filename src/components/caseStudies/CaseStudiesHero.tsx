import { SectionHeading } from "@/components/shared/SectionHeading";

interface CaseStudiesHeroProps {
  eyebrow: string;
  headline: string;
  subheadline: string;
}

export function CaseStudiesHero({ eyebrow, headline, subheadline }: CaseStudiesHeroProps) {
  return (
    <section className="bg-hero-gradient border-b border-ink/10">
      <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading eyebrow={eyebrow} title={headline} description={subheadline} />
      </div>
    </section>
  );
}
