import { Leader } from "@/types/about";
import { LeaderCard } from "@/components/about/LeaderCard";

interface LeadershipSectionProps {
  title: string;
  description: string;
  leaders: Leader[];
}

export function LeadershipSection({ title, description, leaders }: LeadershipSectionProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-18 sm:px-6 lg:px-8 py-10">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bronze">Executive Team</p>
        <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">{title}</h2>
        <p className="mt-4 text-base leading-relaxed text-slate">{description}</p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {leaders.map((leader) => (
          <LeaderCard key={leader.name} leader={leader} />
        ))}
      </div>
    </section>
  );
}
