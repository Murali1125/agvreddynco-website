import { CounterItem } from "@/types/about";
import { Counter } from "@/components/about/Counter";

interface TrustCountersProps {
  title: string;
  counters: CounterItem[];
}

export function TrustCounters({ title, counters }: TrustCountersProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-18 sm:px-6 lg:px-8 py-10">
      <div className="mb-8 max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bronze">Proof Of Performance</p>
        <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">{title}</h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {counters.map((counter) => (
          <Counter key={counter.label} value={counter.value} suffix={counter.suffix} label={counter.label} />
        ))}
      </div>
    </section>
  );
}
