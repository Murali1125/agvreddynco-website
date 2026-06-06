import { ActionButton } from "@/components/ui/ActionButton";

interface AboutCTAProps {
  headline: string;
  subheadline: string;
  button: {
    label: string;
    href: string;
  };
}

export function AboutCTA({ headline, subheadline, button }: AboutCTAProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-18 sm:px-6 lg:px-8 py-10">
      <div className="rounded-3xl border border-ink/10 bg-ink p-8 text-white shadow-panel sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Work With Us</p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">{headline}</h2>
        <p className="mt-4 max-w-2xl text-base text-mist/90">{subheadline}</p>
        <ActionButton href={button.href} className="mt-7 bg-white text-ink hover:bg-mist">
          {button.label}
        </ActionButton>
      </div>
    </section>
  );
}
