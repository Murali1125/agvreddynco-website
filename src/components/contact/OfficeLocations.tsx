import { SectionHeading } from "@/components/shared/SectionHeading";
import { OfficeLocation } from "@/data/offices";
import { OfficeCard } from "@/components/contact/OfficeCard";

interface OfficeLocationsProps {
  eyebrow: string;
  title: string;
  offices: OfficeLocation[];
}

export function OfficeLocations({ eyebrow, title, offices }: OfficeLocationsProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading eyebrow={eyebrow} title={title} />
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {offices.map((office) => (
          <OfficeCard key={office.city} office={office} />
        ))}
      </div>
    </section>
  );
}
