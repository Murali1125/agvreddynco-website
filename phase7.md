You are a Senior Solution Architect, Content Platform Architect, SEO Specialist, and Frontend Engineer.

Project:
AGV Reddy & Co. Corporate Website

Current Status:

✅ Phase-1 Homepage

✅ Phase-2 About Us

✅ Phase-3 Services

✅ Phase-4 Industries & Trust

✅ Phase-5 Contact & Lead Generation

✅ Phase-6 Careers Module

Your task:

Implement ONLY Phase-7.

Do NOT modify previous phases.

Do NOT implement future phases.

=====================================
PHASE-7 OBJECTIVE
=====================================

Build a professional Knowledge Center.

Purpose:

- Improve SEO
- Demonstrate expertise
- Build trust
- Generate inbound leads
- Educate clients

The Knowledge Center should position AGV Reddy & Co. as a trusted authority in:

- Audit
- Taxation
- GST
- Corporate Compliance
- Business Advisory
- Regulatory Updates

Design should resemble:

- Deloitte Insights
- EY Insights
- PwC Insights
- KPMG Insights

=====================================
ROUTES
=====================================

Create:

/insights

/insights/[slug]

/insights/category/[category]

/insights/tag/[tag]

Only these routes.

=====================================
PAGE 1
INSIGHTS LANDING PAGE
=====================================

Route:

/insights

=====================================
SECTION 1
HERO
=====================================

Headline:

"Insights, Updates & Professional Guidance"

Subheadline:

"Stay informed with the latest developments in taxation, compliance, audit, business advisory and regulatory matters."

CTA:

Explore Articles

=====================================
SECTION 2
FEATURED ARTICLES
=====================================

Display:

Latest Featured Articles

Large Card Layout

Include:

- Featured Image
- Category
- Title
- Excerpt
- Read Time
- Publish Date

=====================================
SECTION 3
ARTICLE CATEGORIES
=====================================

Display categories:

Audit & Assurance

Income Tax

GST

Corporate Compliance

Business Advisory

Startups & MSMEs

Trusts & NGOs

Regulatory Updates

Industry Insights

Create reusable CategoryCard.

=====================================
SECTION 4
LATEST ARTICLES
=====================================

Grid layout.

Display:

- Thumbnail
- Category
- Title
- Summary
- Publish Date
- Reading Time

=====================================
SECTION 5
NEWSLETTER CTA
=====================================

Headline:

"Stay Updated With Professional Insights"

Input:

Email Address

Button:

Subscribe

(No API Integration Yet)

=====================================
PAGE 2
ARTICLE DETAIL PAGE
=====================================

Dynamic Route:

/insights/[slug]

=====================================
ARTICLE HEADER
=====================================

Display:

Title

Category

Author

Publish Date

Reading Time

Featured Image

=====================================
ARTICLE CONTENT
=====================================

Support:

- Headings
- Lists
- Tables
- Quotes
- Callout Boxes

Use rich content rendering.

=====================================
SECTION
RELATED ARTICLES
=====================================

Display:

3-4 related articles

Based on category.

=====================================
SECTION
ARTICLE CTA
=====================================

Headline:

"Need Professional Assistance?"

Button:

Contact Our Team

=====================================
PAGE 3
CATEGORY PAGE
=====================================

Route:

/insights/category/[category]

Display:

Category Information

All Articles In Category

Pagination Ready Architecture

=====================================
PAGE 4
TAG PAGE
=====================================

Route:

/insights/tag/[tag]

Display:

Tag Information

Related Articles

=====================================
ARTICLE DATA MODEL
=====================================

Create:

data/articles.ts

Structure:

article {
 id
 slug
 title
 excerpt
 content
 category
 tags[]
 author
 publishDate
 readTime
 featured
 featuredImage
 seo
}

=====================================
INITIAL ARTICLE DATA
=====================================

Create sample articles.

Examples:

1.
Understanding GST Compliance For Businesses

2.
Income Tax Planning Strategies For SMEs

3.
Importance Of Internal Audits

4.
Common Compliance Mistakes Startups Make

5.
Understanding 12AB Registration

6.
Financial Due Diligence Best Practices

7.
Corporate Governance Essentials

8.
Preparing For Statutory Audits

=====================================
AUTHOR SYSTEM
=====================================

Create:

data/authors.ts

Example Authors:

AGV Editorial Team

CA Kasi Reddy Nallappa Reddy

CA Yasaswani Grandhi

CA Mahaveer Bansal

=====================================
SEARCH ARCHITECTURE
=====================================

Create reusable search component.

Features:

Search By:

- Title
- Category
- Tags

Client-side filtering only.

No backend.

=====================================
FILTER SYSTEM
=====================================

Support:

Category Filters

Tag Filters

Featured Filters

Latest Filters

=====================================
COMPONENT STRUCTURE
=====================================

components/

insights/
├── InsightsHero.tsx
├── FeaturedArticles.tsx
├── ArticleCard.tsx
├── ArticlesGrid.tsx
├── CategoryCard.tsx
├── CategoryGrid.tsx
├── SearchBar.tsx
├── FilterPanel.tsx
├── ArticleHeader.tsx
├── ArticleContent.tsx
├── RelatedArticles.tsx
├── NewsletterCTA.tsx
└── InsightsCTA.tsx

=====================================
TYPE DEFINITIONS
=====================================

Create:

types/article.ts

types/category.ts

types/author.ts

=====================================
SEO REQUIREMENTS
=====================================

Implement Advanced SEO.

Use:

generateMetadata()

for:

/insights

/insights/[slug]

/insights/category/[category]

/insights/tag/[tag]

Include:

- SEO Title
- Meta Description
- Keywords
- Open Graph
- Twitter Cards

=====================================
STRUCTURED DATA
=====================================

Implement:

Schema.org

For Articles.

Support:

- Article Schema
- Author Schema
- Organization Schema

=====================================
READABILITY FEATURES
=====================================

Add:

Reading Time

Table Of Contents

Share Buttons (UI only)

Previous Article

Next Article

=====================================
NEWSLETTER COMPONENT
=====================================

Create UI Only.

Fields:

Email

Button:

Subscribe

Show:

Success State

No backend integration.

=====================================
PERFORMANCE REQUIREMENTS
=====================================

Support:

Static Generation

ISR Ready Architecture

Lazy Loading

Optimized Images

=====================================
ACCESSIBILITY
=====================================

Support:

Keyboard Navigation

Screen Readers

Semantic HTML

Proper Heading Hierarchy

=====================================
DELIVERABLE
=====================================

1. Folder Structure

2. Route Structure

3. Article Architecture

4. Category Architecture

5. Search Architecture

6. Data Models

7. Type Definitions

8. Insights Landing Page

9. Dynamic Article Pages

10. Category Pages

11. Tag Pages

12. SEO Setup

13. Schema.org Setup

14. Architecture Documentation

Important:

Do NOT create CMS.

Do NOT create Admin Panel.

Do NOT integrate newsletter APIs.

Do NOT create Client Portal.

Implement ONLY Phase-7.