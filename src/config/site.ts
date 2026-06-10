interface SiteConfig {
  companyName: string;
  establishedYear: number;
  siteUrl: string;
  contact: {
    email: string;
    phone?: string;
  };
  locations: string[];
  socialLinks: {
    linkedin: string;
    x: string;
  };
  seoDefaults: {
    title: string;
    description: string;
    keywords: string[];
    openGraphTitle: string;
    openGraphDescription: string;
    twitterTitle: string;
    twitterDescription: string;
  };
}

export const siteConfig: SiteConfig = {
  companyName: "AGV Reddy & Co.",
  establishedYear: 1984,
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://agvreddy.com",
  contact: {
    email: "agvreddynco@gmail.com"
  },
  locations: ["Anantapur", "Tirupati", "Bengaluru"],
  socialLinks: {
    linkedin: "https://www.linkedin.com",
    x: "https://x.com"
  },
  seoDefaults: {
    title: "AGV Reddy & Co. | Chartered Accountants",
    description:
      "AGV Reddy & Co. delivers trusted audit, taxation, advisory and compliance services with over four decades of experience.",
    keywords: [
      "chartered accountants",
      "audit services",
      "taxation",
      "gst compliance",
      "business advisory",
      "corporate compliance"
    ],
    openGraphTitle: "AGV Reddy & Co. | Chartered Accountants",
    openGraphDescription:
      "Trusted professional services in audit, taxation, compliance and advisory since 1984.",
    twitterTitle: "AGV Reddy & Co.",
    twitterDescription: "Professional updates on audit, taxation, compliance and advisory."
  }
};
