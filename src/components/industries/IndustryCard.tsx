"use client";

import {
  Banknote,
  Building2,
  Factory,
  GraduationCap,
  Handshake,
  HeartPulse,
  Hotel,
  Landmark,
  Leaf,
  Store,
  Tractor,
  TrendingUp,
  Warehouse
} from "lucide-react";
import { motion } from "framer-motion";
import { IndustryCardItem } from "@/types/industry";

interface IndustryCardProps {
  item: IndustryCardItem;
}

const iconMap = {
  manufacturing: Factory,
  construction: Building2,
  healthcare: HeartPulse,
  education: GraduationCap,
  agriculture: Tractor,
  retail: Store,
  hospitality: Hotel,
  "real-estate": Warehouse,
  "financial-services": Banknote,
  banking: Landmark,
  ngo: Handshake,
  government: Landmark,
  startup: TrendingUp,
  default: Leaf
};

export function IndustryCard({ item }: IndustryCardProps) {
  const Icon = iconMap[item.iconKey as keyof typeof iconMap] ?? iconMap.default;

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm"
    >
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-gold">
        <Icon size={22} />
      </span>
      <h3 className="mt-4 text-xl font-semibold text-ink">{item.name}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate">{item.shortDescription}</p>

      <div className="mt-5 space-y-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-bronze">Key Challenges</p>
          <ul className="mt-2 space-y-1 text-sm text-slate">
            {item.keyChallenges.map((challenge) => (
              <li key={challenge}>• {challenge}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-bronze">AGV Expertise</p>
          <ul className="mt-2 space-y-1 text-sm text-slate">
            {item.expertise.map((skill) => (
              <li key={skill}>• {skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  );
}
