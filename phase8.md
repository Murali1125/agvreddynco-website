You are a Principal Software Architect, SEO Architect, Performance Engineer, Security Engineer, and DevOps Consultant.

Project:
AGV Reddy & Co. Corporate Website

Current Status:

✅ Phase-1 Homepage

✅ Phase-2 About Us

✅ Phase-3 Services

✅ Phase-4 Industries & Trust

✅ Phase-5 Contact & Lead Generation

✅ Phase-6 Careers

✅ Phase-7 Knowledge Center

Your task:

Implement ONLY Phase-8.

Do NOT create new business features.

Do NOT create CMS.

Do NOT create Admin Panel.

Focus entirely on production readiness.

=====================================
PHASE-8 OBJECTIVE
=====================================

Prepare the website for production deployment.

Primary Goals:

- Enterprise SEO
- High Performance
- Security Hardening
- Accessibility
- Monitoring
- Analytics
- Production Deployment Readiness

=====================================
PART 1
SEO FOUNDATION
=====================================

Implement:

1. Metadata Standardization

Ensure every page contains:

- SEO Title
- Meta Description
- Keywords
- Open Graph
- Twitter Card

Use centralized metadata configuration.

=====================================

2. Sitemap

Create:

/sitemap.xml

Automatically include:

- Home
- About
- Services
- Service Details
- Industries
- Case Studies
- Careers
- Job Pages
- Insights
- Articles

=====================================

3. Robots

Create:

/robots.txt

Allow indexing.

Disallow:

- Internal paths
- Temporary pages

=====================================

4. Canonical URLs

Implement canonical URL strategy.

Prevent duplicate indexing.

=====================================

5. Breadcrumb Schema

Implement:

Schema.org BreadcrumbList

For:

- Services
- Articles
- Careers

=====================================

6. Organization Schema

Implement:

Schema.org Organization

Include:

AGV Reddy & Co.

Established:
1984

Locations:
Anantapur
Tirupati
Bengaluru

=====================================

7. Article Schema

Implement:

Schema.org Article

For all insight pages.

=====================================

8. FAQ Schema

Implement:

Schema.org FAQPage

For FAQ sections.

=====================================

=====================================
PART 2
PERFORMANCE OPTIMIZATION
=====================================

Audit entire application.

Identify:

- Unnecessary re-renders
- Large bundles
- Duplicate dependencies
- Performance bottlenecks

=====================================

Implement:

Code Splitting

Dynamic Imports

Lazy Loading

Route-level Splitting

Image Optimization

Font Optimization

=====================================

Use:

Next.js Image Component

Optimize:

- Hero Images
- Article Images
- Team Photos

=====================================

Reduce:

JavaScript Bundle Size

Unused CSS

Unused Components

=====================================

Target:

Lighthouse Score:

Performance:
95+

SEO:
100

Accessibility:
95+

Best Practices:
95+

=====================================
PART 3
ACCESSIBILITY AUDIT
=====================================

Audit entire application.

Ensure:

WCAG Compliance

=====================================

Validate:

Heading Hierarchy

Color Contrast

Keyboard Navigation

Screen Reader Support

Focus Indicators

Form Labels

Error Announcements

ARIA Attributes

=====================================

Generate:

accessibility-report.md

=====================================
PART 4
SECURITY HARDENING
=====================================

Implement:

Security Headers

=====================================

Content Security Policy

X-Frame-Options

X-Content-Type-Options

Referrer Policy

Permissions Policy

=====================================

Prevent:

XSS Risks

Clickjacking

Unsafe Inline Scripts

=====================================

Create:

security-review.md

=====================================
PART 5
ERROR HANDLING
=====================================

Create:

404 Page

500 Page

Global Error Boundary

Loading States

Fallback UI

=====================================

Implement:

error.tsx

not-found.tsx

loading.tsx

=====================================
PART 6
MONITORING
=====================================

Prepare architecture for:

Google Analytics

Google Search Console

Microsoft Clarity

=====================================

Create:

analytics/

├── googleAnalytics.ts
├── clarity.ts

Only setup architecture.

No production keys.

=====================================
PART 7
LOGGING STRATEGY
=====================================

Create reusable logger.

Environment-aware logging.

Support:

Development

Production

=====================================

Create:

lib/logger/

logger.ts

=====================================
PART 8
ENVIRONMENT CONFIGURATION
=====================================

Create:

.env.example

Include:

NEXT_PUBLIC_SITE_URL

NEXT_PUBLIC_GA_ID

NEXT_PUBLIC_CLARITY_ID

=====================================

Create:

config/site.ts

Centralize:

Company Name

Contact Info

SEO Defaults

Social Links

=====================================
PART 9
QUALITY REVIEW
=====================================

Audit:

Components

Routes

Data Layer

Type Safety

=====================================

Generate:

architecture-review.md

=====================================

Generate:

technical-debt-report.md

=====================================

Generate:

performance-review.md

=====================================

Generate:

seo-review.md

=====================================

Generate:

security-review.md

=====================================

Generate:

accessibility-review.md

=====================================
PART 10
DEPLOYMENT READINESS
=====================================

Prepare deployment checklist.

Create:

deployment-checklist.md

Include:

Build Verification

SEO Verification

Security Verification

Performance Verification

Accessibility Verification

Analytics Verification

=====================================
FOLDER STRUCTURE
=====================================

Create:

config/
├── site.ts

analytics/
├── googleAnalytics.ts
├── clarity.ts

lib/
├── logger/
│   └── logger.ts

docs/
├── architecture-review.md
├── technical-debt-report.md
├── seo-review.md
├── performance-review.md
├── security-review.md
├── accessibility-review.md
├── deployment-checklist.md

=====================================
DELIVERABLE
=====================================

1. SEO Audit

2. SEO Improvements

3. Structured Data Implementation

4. Sitemap

5. Robots.txt

6. Canonical Strategy

7. Performance Optimization

8. Accessibility Audit

9. Security Hardening

10. Error Handling

11. Analytics Architecture

12. Logging Architecture

13. Environment Configuration

14. Production Readiness Reports

15. Deployment Checklist

16. Final Architecture Review

Important:

Do NOT build CMS.

Do NOT build Admin Panel.

Do NOT create new pages.

Do NOT add new business features.

Focus ONLY on production readiness and enterprise-grade optimization.