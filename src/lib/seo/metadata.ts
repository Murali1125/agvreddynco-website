import { Metadata } from "next";
import { siteConfig } from "@/config/site";

interface MetadataInput {
  title?: string;
  description?: string;
  keywords?: string[];
  path?: string;
  openGraph?: {
    title?: string;
    description?: string;
    type?: "website" | "article";
  };
  twitter?: {
    card?: "summary" | "summary_large_image";
    title?: string;
    description?: string;
  };
  openGraphTitle?: string;
  openGraphDescription?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  type?: "website" | "article";
}

export function createPageMetadata({
  title,
  description,
  keywords,
  path = "/",
  openGraph,
  twitter,
  openGraphTitle,
  openGraphDescription,
  twitterTitle,
  twitterDescription,
  type = "website"
}: MetadataInput): Metadata {
  const canonical = new URL(path, siteConfig.siteUrl).toString();

  return {
    metadataBase: new URL(siteConfig.siteUrl),
    title: title ?? siteConfig.seoDefaults.title,
    description: description ?? siteConfig.seoDefaults.description,
    keywords: keywords ?? siteConfig.seoDefaults.keywords,
    alternates: {
      canonical
    },
    openGraph: {
      title: openGraph?.title ?? openGraphTitle ?? siteConfig.seoDefaults.openGraphTitle,
      description: openGraph?.description ?? openGraphDescription ?? siteConfig.seoDefaults.openGraphDescription,
      type: openGraph?.type ?? type,
      url: canonical,
      siteName: siteConfig.companyName
    },
    twitter: {
      card: twitter?.card ?? "summary_large_image",
      title: twitter?.title ?? twitterTitle ?? siteConfig.seoDefaults.twitterTitle,
      description: twitter?.description ?? twitterDescription ?? siteConfig.seoDefaults.twitterDescription
    }
  };
}
