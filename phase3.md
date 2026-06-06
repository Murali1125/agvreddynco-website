You are a Senior Solution Architect, UI Architect, and Frontend Engineer.

Project:
AGV Reddy & Co. Corporate Website

Current Status:

✅ Phase-1 Completed
- Homepage

✅ Phase-2 Completed
- About Page
- Leadership
- Vision & Mission
- Core Values

Your task:

Implement ONLY Phase-3.

Do NOT modify previous phases.

Do NOT implement future phases.

=====================================
PHASE-3 OBJECTIVE
=====================================

Build a scalable Services Module.

The architecture must support:

- Current Services
- Future Services
- SEO Friendly URLs
- Dynamic Service Pages
- Reusable Components

Design style:

Premium Consulting Firm
Professional
Corporate
Minimal

Reference:
https://accolet.com/

Technology:

- Next.js App Router
- TypeScript
- Tailwind CSS

=====================================
SERVICES TO IMPLEMENT
=====================================

Create support for:

1. Audit & Assurance

2. Direct Taxation

3. GST & Indirect Taxation

4. Corporate & Regulatory Services

5. Business Advisory

6. Trusts & NGO Services

7. Information Systems Audit

8. Financial Due Diligence

=====================================
ROUTES
=====================================

Create:

/services

/services/[slug]

Examples:

/services/audit-assurance

/services/direct-taxation

/services/gst-indirect-taxation

/services/business-advisory

=====================================
PAGE 1
SERVICES LISTING PAGE
=====================================

Route:

/services

Create:

-------------------------------------

Hero Section

Headline:

"Professional Services Designed For Growth"

Subheadline:

"Comprehensive audit, taxation, advisory and compliance solutions tailored to your business needs."

-------------------------------------

Services Grid

Display all services.

Each card:

- Icon
- Service Name
- Short Description
- Learn More Button

-------------------------------------

Benefits Section

Why Clients Choose Our Services

Cards:

- Regulatory Expertise
- Industry Experience
- Personalized Solutions
- Timely Delivery

-------------------------------------

CTA Section

"Need Professional Guidance?"

Button:

Schedule Consultation

=====================================
PAGE 2
SERVICE DETAIL PAGE
=====================================

Create dynamic route.

Example:

/services/audit-assurance

Every service page should contain:

-------------------------------------

1. Hero

Service Name

Description

Breadcrumb

-------------------------------------

2. Service Overview

Detailed explanation

-------------------------------------

3. Key Offerings

Display offerings as cards

-------------------------------------

4. Benefits

Why clients should choose AGV Reddy

-------------------------------------

5. Industries Served

Display industries

-------------------------------------

6. Process

Step-by-step engagement process

-------------------------------------

7. FAQs

Accordion Component

-------------------------------------

8. CTA

Contact Team

=====================================
SERVICE CONTENT
=====================================

AUDIT & ASSURANCE

Offerings:

- Statutory Audit
- Tax Audit
- Internal Audit
- Concurrent Audit
- Bank Branch Audit
- Stock Audit
- Revenue Audit
- IS Audit
- Due Diligence Reviews
- Risk-Based Audits
- Management Audits

-------------------------------------

DIRECT TAXATION

Offerings:

- Income Tax Return Filing
- Corporate Tax Compliance
- Tax Planning
- TDS Compliance
- Assessments
- Appeals
- Litigation Support

-------------------------------------

GST & INDIRECT TAXATION

Offerings:

- GST Registration
- GST Filing
- GST Advisory
- GST Litigation
- ITC Reviews
- Compliance Reviews

-------------------------------------

CORPORATE & REGULATORY

Offerings:

- Company Incorporation
- ROC Compliance
- Annual Filings
- Corporate Restructuring
- FEMA Support
- Secretarial Coordination

-------------------------------------

BUSINESS ADVISORY

Offerings:

- Business Valuation
- Financial Due Diligence
- Project Finance
- Risk Management
- Financial Planning
- Management Consulting

-------------------------------------

TRUSTS & NGO SERVICES

Offerings:

- Trust Registration
- 12AB Registration
- 80G Registration
- Audit & Compliance
- CSR Advisory
- NGO Governance

-------------------------------------

IS AUDIT

Offerings:

- IT Controls Review
- Security Assessment
- Compliance Audits
- System Evaluation

-------------------------------------

FINANCIAL DUE DILIGENCE

Offerings:

- Financial Review
- Risk Assessment
- Acquisition Support
- Transaction Advisory

=====================================
INDUSTRIES MODULE
=====================================

Reusable Component

Display:

- Manufacturing
- Construction
- Healthcare
- Education
- Agriculture
- Retail
- Hospitality
- Real Estate
- Financial Services
- Banking & NBFCs
- NGOs
- Government Organizations
- Startups & MSMEs

=====================================
SEO REQUIREMENTS
=====================================

Create metadata for:

All service pages.

Generate:

- title
- description
- keywords
- open graph metadata

Implement:

generateMetadata()

for dynamic pages.

=====================================
COMPONENT STRUCTURE
=====================================

components/

services/
├── ServiceHero.tsx
├── ServiceCard.tsx
├── ServicesGrid.tsx
├── ServiceOverview.tsx
├── ServiceOfferings.tsx
├── ServiceBenefits.tsx
├── ServiceProcess.tsx
├── ServiceFAQ.tsx
├── IndustriesServed.tsx
├── ServiceCTA.tsx
└── Breadcrumb.tsx

=====================================
DATA STRUCTURE
=====================================

Create:

data/services.ts

Structure:

service {
  id
  slug
  title
  shortDescription
  description
  offerings[]
  benefits[]
  industries[]
  faqs[]
  seo
}

All content must come from data layer.

No hardcoded text inside components.

=====================================
TYPE DEFINITIONS
=====================================

Create:

types/service.ts

Interfaces:

Service
ServiceOffering
FAQ
SEOData

=====================================
UI REQUIREMENTS
=====================================

Use:

- Framer Motion
- Hover Effects
- Smooth Transitions
- Responsive Design

Maintain consistent styling from Phase-1 and Phase-2.

=====================================
DELIVERABLE
=====================================

1. Folder Structure
2. Route Structure
3. Service Data Model
4. Type Definitions
5. Reusable Components
6. Services Listing Page
7. Dynamic Service Detail Pages
8. SEO Implementation
9. Final Architecture Explanation

Important:

Do NOT create contact page.
Do NOT create careers page.
Do NOT create blog.
Do NOT create CMS.
Do NOT create admin panel.

Implement ONLY Phase-3.