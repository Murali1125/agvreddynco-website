import { ActionButton } from "@/components/ui/ActionButton";

interface InsightsHeroProps {
  headline: string;
  subheadline: string;
  ctaLabel: string;
  ctaHref: string;
}

export function InsightsHero({ headline, subheadline, ctaLabel, ctaHref }: InsightsHeroProps) {
  return (
    <section className="bg-hero-gradient border-b border-ink/10">
      <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bronze">Knowledge Center</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-ink sm:text-5xl lg:text-6xl">{headline}</h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate sm:text-lg">{subheadline}</p>
        <ActionButton href={ctaHref} className="mt-8">
          {ctaLabel}
        </ActionButton>
      </div>
    </section>
  );
}
