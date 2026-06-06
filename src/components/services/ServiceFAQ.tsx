"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { FAQ } from "@/types/service";

interface ServiceFAQProps {
  title: string;
  items: FAQ[];
}

export function ServiceFAQ({ title, items }: ServiceFAQProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-semibold text-ink">{title}</h2>
      <div className="mt-8 space-y-3">
        {items.map((faq, index) => {
          const isOpen = activeIndex === index;

          return (
            <article key={faq.question} className="overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm">
              <button
                type="button"
                onClick={() => setActiveIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between px-5 py-4 text-left"
                aria-expanded={isOpen}
              >
                <span className="pr-4 text-sm font-semibold text-ink">{faq.question}</span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-slate transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isOpen ? <p className="border-t border-ink/10 px-5 py-4 text-sm leading-relaxed text-slate">{faq.answer}</p> : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}
