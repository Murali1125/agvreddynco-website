import { Service } from "@/types/service";
import { ServiceCard } from "@/components/services/ServiceCard";

interface ServicesGridProps {
  services: Service[];
  buttonLabel: string;
}

export function ServicesGrid({ services, buttonLabel }: ServicesGridProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          return (
            <ServiceCard
              key={service.slug}
              iconKey={service.iconKey}
              title={service.title}
              description={service.shortDescription}
              href={`/services/${service.slug}`}
              buttonLabel={buttonLabel}
            />
          );
        })}
      </div>
    </section>
  );
}
