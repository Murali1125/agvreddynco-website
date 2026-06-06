export function getGoogleAnalyticsConfig() {
  return {
    measurementId: process.env.NEXT_PUBLIC_GA_ID || "",
    scriptUrl: "https://www.googletagmanager.com/gtag/js"
  };
}

export function canEnableGoogleAnalytics() {
  return Boolean(process.env.NEXT_PUBLIC_GA_ID);
}
