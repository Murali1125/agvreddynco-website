'use client';

import { MapPin } from "lucide-react";
import { homepageData } from "@/data/homepageData";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function LocationsSection() {
  return (
    <section className="section-separator bg-cloud py-20 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Locations"
          title="Serving Clients Across Key Business Hubs"
          description="Our offices in Anantapur, Tirupati and Bengaluru provide responsive support for businesses and institutions."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {homepageData.locations.map((location) => (
            <article
              key={location.city}
              className="glass-panel rounded-2xl p-6 shadow-soft cursor-pointer transition-transform hover:scale-105 hover:shadow-md"
              onClick={() => window.open(location.mapUrl, '_blank')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  window.open(location.mapUrl, '_blank');
                }
              }}
            >
              <MapPin className="h-5 w-5 text-teal" />
              <h3 className="mt-4 text-xl font-semibold text-midnight">{location.city}</h3>
              <p className="mt-2 text-sm text-slate">{location.addressLine}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
