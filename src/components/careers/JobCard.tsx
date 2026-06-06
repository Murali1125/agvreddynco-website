"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import Link from "next/link";
import { Job } from "@/types/job";

interface JobCardProps {
  job: Job;
  applyLabel: string;
}

export function JobCard({ job, applyLabel }: JobCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm"
    >
      <h3 className="text-xl font-semibold text-ink">{job.title}</h3>
      <div className="mt-4 space-y-2 text-sm text-slate">
        <p className="inline-flex items-center gap-2">
          <MapPin size={14} className="text-bronze" /> {job.location}
        </p>
        <p className="inline-flex items-center gap-2">
          <Briefcase size={14} className="text-bronze" /> {job.experience} • {job.type}
        </p>
      </div>
      <Link
        href={`/careers/${job.slug}`}
        className="mt-6 inline-flex rounded-full border border-ink/15 px-4 py-2 text-sm font-semibold text-ink transition hover:border-bronze hover:text-bronze"
      >
        {applyLabel}
      </Link>
    </motion.article>
  );
}
