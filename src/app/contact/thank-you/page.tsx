import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { ActionButton } from "@/components/ui/ActionButton";
import { contactPageData } from "@/data/contactInfo";
import { createPageMetadata } from "@/lib/seo/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata({
    path: "/contact/thank-you",
    title: contactPageData.seo.thankYou.title,
    description: contactPageData.seo.thankYou.description,
    keywords: contactPageData.seo.thankYou.keywords,
    openGraph: {
      title: contactPageData.seo.thankYou.openGraphTitle,
      description: contactPageData.seo.thankYou.openGraphDescription,
      type: "website"
    }
  });
}

export default function ThankYouPage() {
  return (
    <main className="mx-auto flex min-h-[65vh] w-full max-w-4xl items-center px-4 py-16 sm:px-6 lg:px-8">
      <section className="w-full rounded-3xl border border-ink/10 bg-white p-10 text-center shadow-panel">
        <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
          <CheckCircle2 size={32} />
        </div>
        <h1 className="mt-6 text-3xl font-semibold text-ink sm:text-4xl">{contactPageData.thankYou.headline}</h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-slate">{contactPageData.thankYou.message}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <ActionButton href={contactPageData.thankYou.homeHref}>{contactPageData.thankYou.homeLabel}</ActionButton>
          <ActionButton href={contactPageData.thankYou.servicesHref} variant="secondary">
            {contactPageData.thankYou.servicesLabel}
          </ActionButton>
        </div>
      </section>
    </main>
  );
}
