import { IconCardItem } from "@/types/about";

interface CredentialsProps {
  title: string;
  description: string;
  items: IconCardItem[];
}

export function Credentials({ title, description, items }: CredentialsProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-18 sm:px-6 lg:px-8 py-10">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bronze">Regulatory Strength</p>
        <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">{title}</h2>
        <p className="mt-4 text-base leading-relaxed text-slate">{description}</p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className="group rounded-2xl border border-ink/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-bronze/35 hover:shadow-panel"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-gold transition group-hover:bg-bronze group-hover:text-white">
                <Icon size={22} />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{item.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
