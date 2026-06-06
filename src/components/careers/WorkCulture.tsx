"use client";

import { Handshake, Lightbulb, Scale, ShieldCheck, Users } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";

interface WorkCultureProps {
  eyebrow: string;
  title: string;
  items: string[];
}

const cultureIconMap = {
  "Client-Centric Mindset": Handshake,
  "Professional Ethics": Scale,
  "Knowledge Sharing": Lightbulb,
  "Team Collaboration": Users,
  "Innovation & Growth": ShieldCheck
};

export function WorkCulture({ eyebrow, title, items }: WorkCultureProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading eyebrow={eyebrow} title={title} />
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {items.map((item) => {
          const Icon = cultureIconMap[item as keyof typeof cultureIconMap] ?? ShieldCheck;

          return (
            <motion.article
              key={item}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="rounded-2xl border border-ink/10 bg-white p-5 shadow-sm"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cream text-bronze">
                <Icon size={18} />
              </span>
              <p className="mt-3 text-sm font-semibold text-ink">{item}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
