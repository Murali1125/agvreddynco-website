"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { FeatureItem } from "@/types/caseStudy";
import { SectionHeading } from "@/components/shared/SectionHeading";

interface WhyChooseUsProps {
  eyebrow: string;
  title: string;
  items: FeatureItem[];
}

export function WhyChooseUs({ eyebrow, title, items }: WhyChooseUsProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading eyebrow={eyebrow} title={title} />
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <motion.article
            key={item.title}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-ink text-gold">
              <Star size={18} />
            </span>
            <h3 className="mt-4 text-lg font-semibold text-ink">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate">{item.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
