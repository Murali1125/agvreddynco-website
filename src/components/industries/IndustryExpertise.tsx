"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { IndustryExpertiseItem } from "@/types/industry";
import { SectionHeading } from "@/components/shared/SectionHeading";

interface IndustryExpertiseProps {
  eyebrow: string;
  title: string;
  description: string;
  items: IndustryExpertiseItem[];
}

export function IndustryExpertise({ eyebrow, title, description, items }: IndustryExpertiseProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      <div className="mt-8 space-y-3">
        {items.map((item, index) => {
          const expanded = openIndex === index;

          return (
            <motion.article
              key={item.industry}
              className="overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <button
                type="button"
                className="flex w-full items-center justify-between px-5 py-4 text-left"
                aria-expanded={expanded}
                onClick={() => setOpenIndex(expanded ? null : index)}
              >
                <p className="text-base font-semibold text-ink">{item.industry}</p>
                <ChevronDown size={18} className={`text-slate transition ${expanded ? "rotate-180" : ""}`} />
              </button>
              {expanded ? (
                <div className="border-t border-ink/10 px-5 py-4">
                  <ul className="flex flex-wrap gap-2">
                    {item.services.map((service) => (
                      <li key={service} className="rounded-full border border-ink/12 bg-cream px-3 py-1 text-sm text-slate">
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
