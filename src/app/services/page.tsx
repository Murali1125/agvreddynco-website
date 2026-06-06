import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { services, servicesListingSeo, servicesPageContent, servicesUiContent } from "@/data/services";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  path: "/services",
  title: servicesListingSeo.title,
  description: servicesListingSeo.description,
  keywords: servicesListingSeo.keywords,
  openGraph: {
    title: servicesListingSeo.openGraphTitle,
    description: servicesListingSeo.openGraphDescription,
    type: "website"
  }
});

export default function ServicesPage() {
  return (
    <main className="pb-8">
      <BreadcrumbSchema
        id="services-breadcrumb-schema"
        items={[
          { name: "Home", item: "https://agvreddy.com/" },
          { name: "Services", item: "https://agvreddy.com/services" }
        ]}
      />
      <ServiceHero
        eyebrow={servicesUiContent.listing.heroEyebrow}
        title={servicesPageContent.hero.headline}
        description={servicesPageContent.hero.subheadline}
      />
      <ServicesGrid services={services} buttonLabel={servicesUiContent.listing.learnMoreLabel} />
      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze">
          {servicesUiContent.listing.benefitsEyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">{servicesPageContent.benefits.title}</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {servicesPageContent.benefits.items.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-2xl border border-ink/10 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-panel"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-ink text-gold">
                  <Icon size={20} />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{item.description}</p>
              </article>
            );
          })}
        </div>
      </section>
      <ServiceCTA
        headline={servicesPageContent.cta.headline}
        buttonLabel={servicesPageContent.cta.buttonLabel}
        href={servicesPageContent.cta.href}
      />
    </main>
  );
}
