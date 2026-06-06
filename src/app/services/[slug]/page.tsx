import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/services/Breadcrumb";
import { IndustriesServed } from "@/components/services/IndustriesServed";
import { ServiceBenefits } from "@/components/services/ServiceBenefits";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceOfferings } from "@/components/services/ServiceOfferings";
import { ServiceOverview } from "@/components/services/ServiceOverview";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { getServiceBySlug, services, servicesUiContent } from "@/data/services";
import { createPageMetadata } from "@/lib/seo/metadata";

interface ServiceDetailPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: ServiceDetailPageProps): Metadata {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return createPageMetadata({
      path: "/services",
      title: "Service Not Found | AGV Reddy & Co.",
      description: "The requested service page could not be found."
    });
  }

  return createPageMetadata({
    path: `/services/${service.slug}`,
    title: service.seo.title,
    description: service.seo.description,
    keywords: service.seo.keywords,
    openGraph: {
      title: service.seo.openGraphTitle,
      description: service.seo.openGraphDescription,
      type: "article"
    }
  });
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="pb-8">
      <BreadcrumbSchema
        id="service-detail-breadcrumb-schema"
        items={[
          { name: "Home", item: "https://agvreddy.com/" },
          { name: "Services", item: "https://agvreddy.com/services" },
          { name: service.title, item: `https://agvreddy.com/services/${service.slug}` }
        ]}
      />
      <ServiceHero
        eyebrow={servicesUiContent.detail.heroEyebrow}
        title={service.title}
        description={service.shortDescription}
        breadcrumb={
          <Breadcrumb
            items={[
              { label: servicesUiContent.detail.homeLabel, href: "/" },
              { label: servicesUiContent.detail.servicesLabel, href: "/services" },
              { label: service.title }
            ]}
          />
        }
      />
      <ServiceOverview title={servicesUiContent.detail.overviewTitle} description={service.description} />
      <ServiceOfferings title={servicesUiContent.detail.offeringsTitle} offerings={service.offerings} />
      <ServiceBenefits title={servicesUiContent.detail.benefitsTitle} items={service.benefits} />
      <IndustriesServed title={servicesUiContent.detail.industriesTitle} industries={service.industries} />
      <ServiceProcess title={servicesUiContent.detail.processTitle} steps={service.process} />
      {/* <ServiceFAQ title={servicesUiContent.detail.faqTitle} items={service.faqs} /> */}
      {/* <ServiceCTA
        headline={servicesUiContent.detail.ctaHeadline}
        buttonLabel={servicesUiContent.detail.ctaButtonLabel}
        href="#contact"
      /> */}
    </main>
  );
}
