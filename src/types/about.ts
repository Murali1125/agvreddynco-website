import { LucideIcon } from "lucide-react";
import { StaticImageData } from "next/image";

export interface AboutHeroMetric {
  label: string;
  value: string;
}

export interface AboutHeroContent {
  headline: string;
  subheadline: string;
  metrics: AboutHeroMetric[];
  cta: {
    label: string;
    href: string;
  };
}

export interface TimelineItem {
  period: string;
  title: string;
}

export interface JourneyContent {
  title: string;
  description: string;
  timeline: TimelineItem[];
}

export interface IconCardItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface VisionMissionContent {
  vision: string;
  mission: string;
}

export interface Leader {
  name: string; 
  role: string;
  imageUrl?: string | StaticImageData;
  description: string;
}

export interface CounterItem {
  value: number;
  suffix?: string;
  label: string;
}

export interface OfficeLocation {
  city: string;
  officeType: string;
  description: string;
}

export interface AboutPageContent {
  hero: AboutHeroContent;
  journey: JourneyContent;
  credentials: {
    title: string;
    description: string;
    items: IconCardItem[];
  };
  visionMission: VisionMissionContent;
  coreValues: {
    title: string;
    description: string;
    items: IconCardItem[];
  };
  leadership: {
    title: string;
    description: string;
    leaders: Leader[];
  };
  trustCounters: {
    title: string;
    counters: CounterItem[];
  };
  officePresence: {
    title: string;
    locations: OfficeLocation[];
  };
  cta: {
    headline: string;
    subheadline: string;
    button: {
      label: string;
      href: string;
    };
  };
}
