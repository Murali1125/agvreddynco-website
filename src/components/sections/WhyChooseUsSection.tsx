import { homepageData } from "@/data/homepageData";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyChooseUsSection() {
  return (
    <section className="section-separator bg-cloud py-10 sm:py-10">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="A Practice Built on Expertise, Governance and Partner Attention"
          description="Every engagement is led with technical depth, independent thinking and long-term accountability."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {homepageData.whyChooseUs.map((item) => (
            <article
              key={item.title}
              className="glass-panel rounded-2xl p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-premium"
            >
              <h3 className="text-lg font-semibold text-midnight">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
