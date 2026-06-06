import { CallToActionSection } from "@/components/sections/CallToActionSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { LocationsSection } from "@/components/sections/LocationsSection";
import { ServicesPreviewSection } from "@/components/sections/ServicesPreviewSection";
import { TrustIndicatorsSection } from "@/components/sections/TrustIndicatorsSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <TrustIndicatorsSection />
      <WhyChooseUsSection />
      <ServicesPreviewSection />
      <LocationsSection />
      <CallToActionSection />
    </main>
  );
}
