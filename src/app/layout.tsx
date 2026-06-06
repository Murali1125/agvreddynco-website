import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { StoreProvider } from "@/providers/StoreProvider";
import { canEnableClarity, getClarityConfig } from "@/analytics/clarity";
import { canEnableGoogleAnalytics, getGoogleAnalyticsConfig } from "@/analytics/googleAnalytics";
import { createPageMetadata } from "@/lib/seo/metadata";
import { getOrganizationSchema } from "@/lib/seo/schema";

export const metadata: Metadata = createPageMetadata({ path: "/" });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const gaConfig = getGoogleAnalyticsConfig();
  const clarityConfig = getClarityConfig();
  const organizationSchema = getOrganizationSchema();

  return (
    <html lang="en">
      <body>
        {canEnableGoogleAnalytics() && gaConfig.measurementId ? (
          <>
            <Script src={`${gaConfig.scriptUrl}?id=${gaConfig.measurementId}`} strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaConfig.measurementId}', { page_path: window.location.pathname });
              `}
            </Script>
          </>
        ) : null}
        {canEnableClarity() && clarityConfig.projectId ? (
          <Script id="microsoft-clarity" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${clarityConfig.projectId}");
            `}
          </Script>
        ) : null}
        <Script id="schema-organization" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(organizationSchema)}
        </Script>
        <StoreProvider>
          <Header />
          {children}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
