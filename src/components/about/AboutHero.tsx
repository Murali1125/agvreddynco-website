import { ActionButton } from "@/components/ui/ActionButton";
import { AboutHeroContent } from "@/types/about";

interface AboutHeroProps {
  content: AboutHeroContent;
}

export function AboutHero({ content }: AboutHeroProps) {
  return (
    <section className="bg-hero-gradient border-b border-ink/10">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.35fr_1fr] lg:items-end lg:px-8 lg:py-20">
        <div className="space-y-6">
          <p className="inline-flex rounded-full border border-bronze/25 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-bronze">
            About AGV Reddy & Co.
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-ink sm:text-5xl lg:text-6xl" style={{ textAlign: "justify" }}>
            {content.headline}
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-slate sm:text-lg">{content.subheadline}</p>
          <ActionButton href={content.cta.href} className="mt-2">
            {content.cta.label}
          </ActionButton>
        </div>

        <div className="rounded-3xl border border-bronze/15 bg-white/80 p-6 shadow-panel backdrop-blur sm:p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bronze">Legacy Snapshot</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {content.metrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-ink/8 bg-white px-4 py-4">
                <p className="text-2xl font-semibold text-ink">{metric.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
