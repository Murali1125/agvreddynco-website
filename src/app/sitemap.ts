import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { jobs } from "@/data/jobs";
import { articles } from "@/data/articles";
import { services } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/about",
    "/services",
    "/industries",
    "/case-studies",
    "/careers",
    "/careers/apply",
    "/contact",
    "/insights"
  ].map((path) => ({
    url: `${siteConfig.siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8
  }));

  const servicePages = services.map((service) => ({
    url: `${siteConfig.siteUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  const careerPages = jobs.map((job) => ({
    url: `${siteConfig.siteUrl}/careers/${job.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  const articlePages = articles.map((article) => ({
    url: `${siteConfig.siteUrl}/insights/${article.slug}`,
    lastModified: new Date(article.publishDate),
    changeFrequency: "monthly" as const,
    priority: 0.75
  }));

  return [...staticPages, ...servicePages, ...careerPages, ...articlePages];
}
