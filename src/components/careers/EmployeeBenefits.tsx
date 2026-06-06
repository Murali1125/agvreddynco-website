"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";

interface EmployeeBenefitsProps {
  eyebrow: string;
  title: string;
  items: string[];
}

export function EmployeeBenefits({ eyebrow, title, items }: EmployeeBenefitsProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading eyebrow={eyebrow} title={title} />
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <motion.article
            key={item}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            className="rounded-2xl border border-ink/10 bg-white p-5 shadow-sm"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-ink text-gold">
              <Award size={18} />
            </span>
            <p className="mt-3 text-sm font-semibold text-ink">{item}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
