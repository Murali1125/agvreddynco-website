import { Eye, Target } from "lucide-react";
import { VisionMissionContent } from "@/types/about";

interface VisionMissionProps {
  content: VisionMissionContent;
}

export function VisionMission({ content }: VisionMissionProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-18 sm:px-6 lg:px-8">
      <div className="grid gap-5 lg:grid-cols-2">
        <article className="rounded-3xl border border-ink/10 bg-white p-7 shadow-panel">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-gold">
            <Eye size={24} />
          </div>
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-bronze">Vision</p>
          <p className="mt-3 text-lg leading-relaxed text-ink">{content.vision}</p>
        </article>

        <article className="rounded-3xl border border-bronze/20 bg-gradient-to-br from-white to-amber-50 p-7 shadow-panel">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-bronze text-white">
            <Target size={24} />
          </div>
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-bronze">Mission</p>
          <p className="mt-3 text-lg leading-relaxed text-ink">{content.mission}</p>
        </article>
      </div>
    </section>
  );
}
