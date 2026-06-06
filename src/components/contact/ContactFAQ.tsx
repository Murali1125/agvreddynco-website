"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ContactFaq } from "@/data/contactFaqs";

interface ContactFAQProps {
  eyebrow: string;
  title: string;
  faqs: ContactFaq[];
}

export function ContactFAQ({ eyebrow, title, faqs }: ContactFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading eyebrow={eyebrow} title={title} />
      <div className="mt-8 space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <article key={faq.question} className="overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm">
              <button
                type="button"
                className="flex w-full items-center justify-between px-5 py-4 text-left"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${index}`}
              >
                <span className="pr-4 text-sm font-semibold text-ink">{faq.question}</span>
                <ChevronDown size={18} className={`text-slate transition ${isOpen ? "rotate-180" : ""}`} />
              </button>
              {isOpen ? (
                <div id={`faq-panel-${index}`} className="border-t border-ink/10 px-5 py-4">
                  <p className="text-sm leading-relaxed text-slate">{faq.answer}</p>
                </div>
              ) : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}
