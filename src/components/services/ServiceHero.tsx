import { ReactNode } from "react";

interface ServiceHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumb?: ReactNode;
}

export function ServiceHero({ eyebrow, title, description, breadcrumb }: ServiceHeroProps) {
  return (
    <section className="bg-hero-gradient border-b border-ink/10">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {breadcrumb ? <div className="mb-5">{breadcrumb}</div> : null}
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-ink sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate sm:text-lg">{description}</p>
      </div>
    </section>
  );
}
