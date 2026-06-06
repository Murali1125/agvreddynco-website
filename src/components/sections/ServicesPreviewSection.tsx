import { homepageData } from "@/data/homepageData";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ServicesPreviewSection() {
  return (
    <section className="section-separator bg-white py-20 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Focused Financial, Audit and Compliance Solutions"
          description="A comprehensive portfolio designed to strengthen governance, reduce risk and support strategic growth."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {homepageData.services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group rounded-2xl border border-royal/12 bg-gradient-to-br from-white via-cloud/50 to-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-teal/45"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-royal/15 via-plum/10 to-teal/15 text-royal transition group-hover:scale-105">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-midnight">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
