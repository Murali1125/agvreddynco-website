import Script from "next/script";
import { getBreadcrumbSchema } from "@/lib/seo/schema";

interface BreadcrumbSchemaProps {
  items: Array<{ name: string; item: string }>;
  id: string;
}

export function BreadcrumbSchema({ items, id }: BreadcrumbSchemaProps) {
  return (
    <Script id={id} type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(getBreadcrumbSchema(items))}
    </Script>
  );
}
