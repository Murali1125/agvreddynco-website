import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { OfficeLocation } from "@/data/offices";

interface OfficeCardProps {
  office: OfficeLocation;
}

export function OfficeCard({ office }: OfficeCardProps) {
  return (
    <article className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-bronze">{office.officeType}</p>
      <h3 className="mt-3 text-2xl font-semibold text-ink">{office.city}</h3>

      <address className="mt-4 not-italic text-sm leading-relaxed text-slate">
        {office.addressLines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </address>

      <div className="mt-5 flex flex-wrap gap-2">
        <Link
          href={`mailto:${office.email}`}
          className="inline-flex items-center gap-2 rounded-full border border-ink/12 px-3 py-2 text-xs font-semibold text-ink transition hover:border-bronze hover:text-bronze"
        >
          <Mail size={14} /> Email
        </Link>
        {office.phone ? (
          <Link
            href={`tel:${office.phone}`}
            className="inline-flex items-center gap-2 rounded-full border border-ink/12 px-3 py-2 text-xs font-semibold text-ink transition hover:border-bronze hover:text-bronze"
          >
            <Phone size={14} /> Call
          </Link>
        ) : null}
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full border border-ink/12 px-3 py-2 text-xs font-semibold text-slate"
          aria-label={`Directions for ${office.city} office coming soon`}
        >
          <MapPin size={14} /> {office.directionsPlaceholder}
        </button>
      </div>
    </article>
  );
}
