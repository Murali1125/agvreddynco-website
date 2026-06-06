"use client";

import { motion } from "framer-motion";
import { CaseStudyItem } from "@/types/caseStudy";

interface CaseStudyCardProps {
  study: CaseStudyItem;
}

export function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-bronze">Case Study {study.id}</p>
      <h3 className="mt-3 text-xl font-semibold text-ink">{study.sector}</h3>
      <div className="mt-5 space-y-4 text-sm text-slate">
        <div>
          <p className="font-semibold text-ink">Challenge</p>
          <p className="mt-1">{study.challenge}</p>
        </div>
        <div>
          <p className="font-semibold text-ink">Solution</p>
          <p className="mt-1">{study.solution}</p>
        </div>
        <div>
          <p className="font-semibold text-ink">Result</p>
          <p className="mt-1">{study.result}</p>
        </div>
      </div>
    </motion.article>
  );
}
