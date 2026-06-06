interface ServiceOverviewProps {
  title: string;
  description: string;
}

export function ServiceOverview({ title, description }: ServiceOverviewProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-4xl rounded-3xl border border-ink/10 bg-white p-8 shadow-sm">
        <h2 className="text-3xl font-semibold text-ink">{title}</h2>
        <p className="mt-4 text-base leading-relaxed text-slate">{description}</p>
      </div>
    </section>
  );
}
