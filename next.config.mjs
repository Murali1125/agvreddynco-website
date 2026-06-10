/** @type {import('next').NextConfig} */
const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "frame-ancestors 'none'",
  "form-action 'self'",
  "img-src 'self' data: https:",
  "font-src 'self' data:",
  "style-src 'self' 'unsafe-inline'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://www.clarity.ms",
  "connect-src 'self' https://www.google-analytics.com https://www.clarity.ms",
  "object-src 'none'",
  "upgrade-insecure-requests"
].join("; ");

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: contentSecurityPolicy
  },
  {
    key: "X-Frame-Options",
    value: "DENY"
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff"
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin"
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()"
  }
];

// Default to GitHub project pages path mode for this repository URL.
// Set GITHUB_PAGES=false only when exporting for a custom root domain.
const isProjectPagesDeploy = process.env.GITHUB_PAGES !== "false";

const nextConfig = {
  // Enable static export for GitHub Pages deployment
  output: 'export',

  // Static export cannot use the default on-demand image optimizer.
  images: {
    unoptimized: true
  },
  
  // Use repository path only for project-pages deployments.
  // Custom domains must serve from root (no basePath).
  basePath: isProjectPagesDeploy ? '/agvreddynco-website' : '',
  assetPrefix: isProjectPagesDeploy ? '/agvreddynco-website/' : '',
  
  // Trailing slash for static hosting compatibility
  trailingSlash: true,
  
  reactStrictMode: true,
  poweredByHeader: false,
  
  // Skip headers configuration for static export
  // (Headers are not applicable to static HTML export)
  async headers() {
    // Headers are not supported in static export mode
    return [];
  }
};

export default nextConfig;
