"use client";

import { motion } from "framer-motion";
import { ServiceOffering } from "@/types/service";

interface ServiceOfferingsProps {
  title: string;
  offerings: ServiceOffering[];
}

export function ServiceOfferings({ title, offerings }: ServiceOfferingsProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-semibold text-ink">{title}</h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {offerings.map((offering, index) => (
          <motion.article
            key={offering.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35, delay: index * 0.04 }}
            className="rounded-2xl border border-ink/10 bg-white p-5 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-ink">{offering.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate">{offering.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
