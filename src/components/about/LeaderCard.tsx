import { UserRound } from "lucide-react";
import { Leader } from "@/types/about";

interface LeaderCardProps {
  leader: Leader;
}

export function LeaderCard({ leader }: LeaderCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-bronze/35 hover:shadow-panel">
      <div className="flex h-52 items-center justify-center bg-gradient-to-br from-slate-100 via-white to-slate-200">
        <div className="inline-flex h-20 w-20 items-center justify-center rounded-full border border-ink/10 bg-white text-slate shadow-sm">
          <UserRound size={34} />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-ink">{leader.name}</h3>
        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-bronze">{leader.role}</p>
        <p className="mt-4 text-sm leading-relaxed text-slate">{leader.description}</p>
      </div>
    </article>
  );
}
