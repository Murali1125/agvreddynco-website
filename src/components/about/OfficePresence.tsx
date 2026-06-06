import { Building2 } from "lucide-react";
import { OfficeLocation } from "@/types/about";

interface OfficePresenceProps {
  title: string;
  locations: OfficeLocation[];
}

export function OfficePresence({ title, locations }: OfficePresenceProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-18 sm:px-6 lg:px-8">
      <div className="mb-8 max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bronze">Multi-City Presence</p>
        <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">{title}</h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {locations.map((location) => (
          <article
            key={location.city}
            className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-bronze/30 hover:shadow-panel"
          >
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cream text-bronze">
              <Building2 size={20} />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-ink">{location.city}</h3>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate">{location.officeType}</p>
            <p className="mt-4 text-sm text-slate">{location.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
