import { MapPin } from "lucide-react";
import { ActionButton } from "@/components/ui/ActionButton";

interface JobHeroProps {
  title: string;
  location: string;
  experience: string;
  type: string;
  applyHref: string;
}

export function JobHero({ title, location, experience, type, applyHref }: JobHeroProps) {
  return (
    <section className="bg-hero-gradient border-b border-ink/10">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze">Job Opening</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-ink sm:text-5xl">{title}</h1>
        <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-slate">
          <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-3 py-1.5">
            <MapPin size={14} className="text-bronze" /> {location}
          </span>
          <span className="rounded-full border border-ink/10 bg-white px-3 py-1.5">{experience}</span>
          <span className="rounded-full border border-ink/10 bg-white px-3 py-1.5">{type}</span>
        </div>
        <ActionButton href={applyHref} className="mt-8">
          Apply Now
        </ActionButton>
      </div>
    </section>
  );
}
