"use client";

import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Building2,
  Landmark,
  Scale,
  SearchCheck,
  Shield,
  WalletCards,
  Waypoints
} from "lucide-react";

interface ServiceCardProps {
  iconKey: string;
  title: string;
  description: string;
  href: string;
  buttonLabel: string;
}

const iconMap: Record<string, LucideIcon> = {
  audit: Shield,
  tax: Scale,
  gst: WalletCards,
  corporate: Building2,
  advisory: BriefcaseBusiness,
  trust: Landmark,
  systems: Waypoints,
  diligence: SearchCheck
};

export function ServiceCard({ iconKey, title, description, href, buttonLabel }: ServiceCardProps) {
  const Icon = iconMap[iconKey] ?? Shield;

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm"
    >
      <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-gold">
        <Icon size={22} />
      </div>
      <h3 className="mt-4 text-xl font-semibold text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate">{description}</p>
      <Link
        href={href}
        className="mt-6 inline-flex rounded-full border border-ink/15 px-4 py-2 text-sm font-semibold text-ink transition hover:border-bronze hover:text-bronze"
      >
        {buttonLabel}
      </Link>
    </motion.article>
  );
}
