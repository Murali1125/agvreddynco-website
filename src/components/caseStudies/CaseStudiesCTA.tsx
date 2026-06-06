import { ActionButton } from "@/components/ui/ActionButton";

interface CaseStudiesCTAProps {
  headline: string;
  buttonLabel: string;
  href: string;
}

export function CaseStudiesCTA({ headline, buttonLabel, href }: CaseStudiesCTAProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-primary-200/80 bg-gradient-to-r from-primary-100 to-secondary-100 p-8 text-midnight shadow-panel sm:p-10">
        <h2 className="max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">{headline}</h2>
        <ActionButton href={href} className="mt-7" variant="secondary">
          {buttonLabel}
        </ActionButton>
      </div>
    </section>
  );
}
