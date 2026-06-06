"use client";

import { ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";

interface ContactTrustSectionProps {
  eyebrow: string;
  title: string;
  points: string[];
}

export function ContactTrustSection({ eyebrow, title, points }: ContactTrustSectionProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading eyebrow={eyebrow} title={title} />
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {points.map((point) => (
          <motion.article
            key={point}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            className="rounded-2xl border border-ink/10 bg-white p-5 shadow-sm"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-ink text-gold">
              <ShieldCheck size={18} />
            </span>
            <p className="mt-3 text-sm font-semibold text-ink">{point}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
