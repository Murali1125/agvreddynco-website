import type { Metadata } from "next";
import Script from "next/script";
import { ContactCTA } from "@/components/contact/ContactCTA";
import { ContactFAQ } from "@/components/contact/ContactFAQ";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactTrustSection } from "@/components/contact/ContactTrustSection";
import { ConsultationForm } from "@/components/contact/ConsultationForm";
import { OfficeLocations } from "@/components/contact/OfficeLocations";
import { TrustBanner } from "@/components/shared/TrustBanner";
import { contactFaqs } from "@/data/contactFaqs";
import { contactPageData } from "@/data/contactInfo";
import { officeLocations } from "@/data/offices";
import { trustBannerData } from "@/data/trust";
import { createPageMetadata } from "@/lib/seo/metadata";
import { getFaqSchema } from "@/lib/seo/schema";

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata({
    path: "/contact",
    title: contactPageData.seo.contact.title,
    description: contactPageData.seo.contact.description,
    keywords: contactPageData.seo.contact.keywords,
    openGraph: {
      title: contactPageData.seo.contact.openGraphTitle,
      description: contactPageData.seo.contact.openGraphDescription,
      type: "website"
    }
  });
}

export default function ContactPage() {
  const faqSchema = getFaqSchema(
    contactFaqs.map((faq) => ({
      question: faq.question,
      answer: faq.answer
    }))
  );

  return (
    <main className="pb-8">
      <Script id="contact-faq-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(faqSchema)}
      </Script>
      <ContactHero
        eyebrow={contactPageData.hero.eyebrow}
        headline={contactPageData.hero.headline}
        subheadline={contactPageData.hero.subheadline}
        ctaLabel={contactPageData.hero.ctaLabel}
        ctaHref={contactPageData.hero.ctaHref}
      />
      <TrustBanner content={trustBannerData} />

      <section className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <ContactForm
          heading={contactPageData.form.heading}
          description={contactPageData.form.description}
          submitLabel={contactPageData.form.submitLabel}
          successMessage={contactPageData.form.successMessage}
          services={contactPageData.formOptions.services}
          officeLocations={contactPageData.formOptions.officeLocations}
          contactMethods={contactPageData.formOptions.contactMethods}
        />
        <ConsultationForm
          heading={contactPageData.consultation.heading}
          description={contactPageData.consultation.description}
          submitLabel={contactPageData.consultation.submitLabel}
          successMessage={contactPageData.consultation.successMessage}
          serviceCategories={contactPageData.consultation.serviceCategories}
        />
      </section>

      <OfficeLocations
        eyebrow={contactPageData.sections.officesEyebrow}
        title={contactPageData.sections.officesTitle}
        offices={officeLocations}
      />
      <ContactInfo
        eyebrow={contactPageData.sections.infoEyebrow}
        title={contactPageData.sections.infoTitle}
        items={contactPageData.infoCards}
      />
      <ContactFAQ
        eyebrow={contactPageData.sections.faqEyebrow}
        title={contactPageData.sections.faqTitle}
        faqs={contactFaqs}
      />
      <ContactTrustSection
        eyebrow={contactPageData.sections.trustEyebrow}
        title={contactPageData.sections.trustTitle}
        points={contactPageData.trustPoints}
      />
      <ContactCTA
        headline={contactPageData.finalCta.headline}
        buttonLabel={contactPageData.finalCta.buttonLabel}
        href={contactPageData.finalCta.href}
      />
    </main>
  );
}
