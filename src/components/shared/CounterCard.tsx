"use client";

import { useEffect, useState } from "react";

interface CounterCardProps {
  value: number;
  label: string;
  suffix?: string;
}

export function CounterCard({ value, label, suffix = "" }: CounterCardProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frameId = 0;
    const duration = value > 50 ? 1400 : 1000;
    const start = performance.now();

    const animate = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [value]);

  return (
    <article className="rounded-2xl border border-ink/10 bg-white px-6 py-7 text-center shadow-sm">
      <p className="text-4xl font-semibold text-ink">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate">{label}</p>
    </article>
  );
}
