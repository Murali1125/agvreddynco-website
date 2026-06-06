import { SectionHeading } from "@/components/shared/SectionHeading";
import { CounterCard } from "@/components/shared/CounterCard";
import { SuccessMetricItem } from "@/types/caseStudy";

interface SuccessMetricsProps {
  eyebrow: string;
  title: string;
  metrics: SuccessMetricItem[];
}

export function SuccessMetrics({ eyebrow, title, metrics }: SuccessMetricsProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading eyebrow={eyebrow} title={title} />
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <CounterCard key={metric.label} value={metric.value} suffix={metric.suffix} label={metric.label} />
        ))}
      </div>
    </section>
  );
}
