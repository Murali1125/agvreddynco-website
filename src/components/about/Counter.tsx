"use client";

import { useEffect, useMemo, useState } from "react";

interface CounterProps {
  value: number;
  suffix?: string;
  label: string;
}

export function Counter({ value, suffix = "", label }: CounterProps) {
  const [displayValue, setDisplayValue] = useState(0);

  const duration = useMemo(() => {
    if (value >= 100) {
      return 1500;
    }

    return 1000;
  }, [value]);

  useEffect(() => {
    let frameId: number;
    const start = performance.now();

    const tick = (timestamp: number) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.floor(eased * value));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [duration, value]);

  return (
    <article className="rounded-2xl border border-ink/10 bg-white px-6 py-7 text-center shadow-sm">
      <p className="text-4xl font-semibold text-ink">
        {displayValue}
        {suffix}
      </p>
      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate">{label}</p>
    </article>
  );
}
