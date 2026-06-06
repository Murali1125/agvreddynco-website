interface ServiceProcessProps {
  title: string;
  steps: string[];
}

export function ServiceProcess({ title, steps }: ServiceProcessProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-semibold text-ink">{title}</h2>
      <ol className="mt-8 grid gap-4 lg:grid-cols-5">
        {steps.map((step, index) => (
          <li key={step} className="rounded-2xl border border-ink/10 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-bronze">Step {index + 1}</p>
            <p className="mt-3 text-sm leading-relaxed text-slate">{step}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
