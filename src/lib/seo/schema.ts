import { siteConfig } from "@/config/site";

export function getOrganizationSchema() {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.companyName,
    foundingDate: `${siteConfig.establishedYear}`,
    url: siteConfig.siteUrl,
    email: siteConfig.contact.email,
    address: siteConfig.locations.map((location) => ({
      "@type": "PostalAddress",
      addressLocality: location,
      addressCountry: "IN"
    }))
  };

  if (siteConfig.contact.phone) {
    return {
      ...baseSchema,
      telephone: siteConfig.contact.phone
    };
  }

  return {
    ...baseSchema
  };
}

export function getBreadcrumbSchema(items: Array<{ name: string; item: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: entry.name,
      item: entry.item
    }))
  };
}

export function getFaqSchema(questions: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}
