import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { CoreValues } from "@/components/about/CoreValues";
import { Credentials } from "@/components/about/Credentials";
import { LeadershipSection } from "@/components/about/LeadershipSection";
import { OfficePresence } from "@/components/about/OfficePresence";
import { Timeline } from "@/components/about/Timeline";
import { VisionMission } from "@/components/about/VisionMission";
import { aboutPageData } from "@/data/about";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  path: "/about",
  title: "AGV Reddy & Co.",
  description:
    "Learn about AGV Reddy & Co., established in 1984, with trusted professional audit, taxation, advisory and compliance expertise across Anantapur, Tirupati and Bengaluru."
});

export default function AboutPage() {
  return (
    <main className="pb-8">
      <AboutHero content={aboutPageData.hero} />
      <Timeline
        title={aboutPageData.journey.title}
        description={aboutPageData.journey.description}
        items={aboutPageData.journey.timeline}
      />
      <Credentials
        title={aboutPageData.credentials.title}
        description={aboutPageData.credentials.description}
        items={aboutPageData.credentials.items}
      />
      <VisionMission content={aboutPageData.visionMission} />
      <CoreValues
        title={aboutPageData.coreValues.title}
        description={aboutPageData.coreValues.description}
        items={aboutPageData.coreValues.items}
      />
      <LeadershipSection
        title={aboutPageData.leadership.title}
        description={aboutPageData.leadership.description}
        leaders={aboutPageData.leadership.leaders}
      />
      {/* <TrustCounters title={aboutPageData.trustCounters.title} counters={aboutPageData.trustCounters.counters} /> */}
      <OfficePresence title={aboutPageData.officePresence.title} locations={aboutPageData.officePresence.locations} />
      {/* <AboutCTA
        headline={aboutPageData.cta.headline}
        subheadline={aboutPageData.cta.subheadline}
        button={aboutPageData.cta.button}
      /> */}
    </main>
  );
}
