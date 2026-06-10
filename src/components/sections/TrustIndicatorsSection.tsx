import { homepageData } from "@/data/homepageData";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TrustIndicatorsSection() {
  return (
    <section className="section-separator bg-gradient-to-r from-primary-50 to-secondary-50 py-20 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Trust Indicators"
          title="Credentials That Reinforce Confidence"
          description="Recognitions and empanelments that reflect our long-standing commitment to quality."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-4">
          <article className="rounded-2xl border border-primary-200 bg-white p-5 text-center shadow-soft">
            <p className="text-3xl font-semibold text-midnight">1984</p>
            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate">Established</p>
          </article>
          <article className="rounded-2xl border border-primary-200 bg-white p-5 text-center shadow-soft">
            <p className="text-3xl font-semibold text-midnight">40+</p>
            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate">Years Experience</p>
          </article>
          <article className="rounded-2xl border border-primary-200 bg-white p-5 text-center shadow-soft">
            <p className="text-3xl font-semibold text-midnight">3</p>
            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate">Office Locations</p>
          </article>
          <article className="rounded-2xl border border-primary-200 bg-white p-5 text-center shadow-soft">
            <p className="text-3xl font-semibold text-midnight">10+</p>
            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate">Industries Served</p>
          </article>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {homepageData.trustIndicators.map((badge) => (
            <article
              key={badge.title}
              className="rounded-2xl border border-primary-200/80 bg-gradient-to-br from-white via-primary-50 to-secondary-50 p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-secondary-300"
            >
              <h3 className="text-sm font-semibold text-midnight">{badge.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate">{badge.subtitle}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
