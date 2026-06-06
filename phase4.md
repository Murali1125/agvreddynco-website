You are a Senior Solution Architect, UX Architect, and Frontend Engineer.

Project:
AGV Reddy & Co. Corporate Website

Current Status:

✅ Phase-1 Completed
- Homepage

✅ Phase-2 Completed
- About Us

✅ Phase-3 Completed
- Services Module

Your task:

Implement ONLY Phase-4.

Do NOT modify previous phases.

Do NOT implement future phases.

=====================================
PHASE-4 OBJECTIVE
=====================================

Build the credibility and authority layer of the website.

This phase should help visitors quickly understand:

- Industries served
- Experience depth
- Professional credentials
- Why clients trust AGV Reddy & Co.
- Real business impact

This phase is focused on conversion and trust building.

=====================================
ROUTES
=====================================

Create:

/industries

/case-studies

Do NOT create any other routes.

=====================================
PAGE 1
INDUSTRIES WE SERVE
=====================================

Route:

/industries

Goal:

Show industry expertise.

Create a premium industry showcase page.

=====================================
SECTION 1
INDUSTRIES HERO
=====================================

Headline:

"Industry Expertise Built Over Four Decades"

Subheadline:

"Serving businesses, institutions and organizations across diverse sectors with specialized financial, audit and advisory services."

CTA:

Explore Services

=====================================
SECTION 2
INDUSTRIES GRID
=====================================

Display:

1. Manufacturing
2. Construction & Infrastructure
3. Healthcare
4. Educational Institutions
5. Agriculture & Agri-Business
6. Retail & Trading
7. Hospitality
8. Real Estate
9. Financial Services
10. Banking & NBFCs
11. Trusts & NGOs
12. Government Organizations
13. Startups & MSMEs

Each card should contain:

- Industry Icon
- Industry Name
- Short Description
- Key Challenges
- AGV Expertise

Create reusable IndustryCard.

=====================================
SECTION 3
INDUSTRY EXPERTISE
=====================================

Create interactive cards.

Show:

Industry Name

Relevant Services

Example:

Healthcare:
- Audit
- GST
- Compliance
- Advisory

Education:
- Trust Compliance
- Audit
- Taxation

NGOs:
- 12AB
- 80G
- Audit
- CSR Advisory

Use expandable cards.

=====================================
SECTION 4
INDUSTRY PROCESS
=====================================

Display AGV approach:

1. Understand Industry
2. Assess Risks
3. Identify Compliance Needs
4. Deliver Solutions
5. Ongoing Advisory

Create reusable timeline component.

=====================================
SECTION 5
INDUSTRY CTA
=====================================

Headline:

"Need Industry-Specific Financial Expertise?"

Button:

Talk To Our Experts

=====================================
PAGE 2
CASE STUDIES
=====================================

Route:

/case-studies

Purpose:

Demonstrate expertise.

Since real client information may be confidential:

Create anonymized case studies.

=====================================
SECTION 1
CASE STUDIES HERO
=====================================

Headline:

"Delivering Results Across Industries"

Subheadline:

"Examples of how our expertise helps clients achieve compliance, efficiency and sustainable growth."

=====================================
SECTION 2
CASE STUDY LISTING
=====================================

Create reusable CaseStudyCard.

Display 6 sample case studies.

-------------------------------------

Case Study 1

Manufacturing Company

Challenge:
Complex audit requirements

Solution:
Risk-based audit approach

Result:
Improved compliance framework

-------------------------------------

Case Study 2

Educational Institution

Challenge:
Trust compliance management

Solution:
Compliance restructuring

Result:
Improved governance

-------------------------------------

Case Study 3

NGO

Challenge:
12AB & 80G registration

Solution:
End-to-end advisory

Result:
Successful approval

-------------------------------------

Case Study 4

Healthcare Organization

Challenge:
GST compliance

Solution:
Tax process optimization

Result:
Reduced compliance risks

-------------------------------------

Case Study 5

Construction Company

Challenge:
Financial controls

Solution:
Internal audit implementation

Result:
Enhanced transparency

-------------------------------------

Case Study 6

Startup

Challenge:
Business structuring

Solution:
Corporate advisory

Result:
Scalable compliance framework

=====================================
SECTION 3
SUCCESS METRICS
=====================================

Create counters.

Display:

40+
Years Experience

100+
Professional Engagements

3
Office Locations

4
Major Regulatory Empanelments

Use animated counters.

=====================================
SECTION 4
CLIENT TRUST FRAMEWORK
=====================================

Display trust pillars.

Cards:

Integrity

Confidentiality

Technical Excellence

Industry Knowledge

Partner Involvement

Timely Execution

Professional Ethics

Long-Term Relationships

=====================================
SECTION 5
WHY CLIENTS CHOOSE AGV
=====================================

Create premium feature cards.

Display:

Peer Reviewed Firm

C&AG Empanelled

RBI Registered

NABARD Empanelled

Experienced Leadership

Multi-Industry Expertise

=====================================
SECTION 6
FINAL CTA
=====================================

Headline:

"Partner With Trusted Financial Advisors"

Button:

Schedule Consultation

=====================================
GLOBAL TRUST COMPONENT
=====================================

Create reusable TrustBanner component.

Can be reused throughout website.

Display:

✓ Established Since 1984

✓ Peer Reviewed Firm

✓ RBI Registered Audit Firm

✓ C&AG Empanelled

✓ NABARD Empanelled

=====================================
COMPONENT STRUCTURE
=====================================

components/

industries/
├── IndustriesHero.tsx
├── IndustryCard.tsx
├── IndustryGrid.tsx
├── IndustryExpertise.tsx
├── IndustryProcess.tsx
└── IndustryCTA.tsx

caseStudies/
├── CaseStudiesHero.tsx
├── CaseStudyCard.tsx
├── CaseStudyGrid.tsx
├── SuccessMetrics.tsx
├── TrustFramework.tsx
├── WhyChooseUs.tsx
└── CaseStudiesCTA.tsx

shared/
├── TrustBanner.tsx
├── CounterCard.tsx
└── SectionHeading.tsx

=====================================
DATA STRUCTURE
=====================================

Create:

data/industries.ts

data/caseStudies.ts

data/trust.ts

All content must come from data files.

No hardcoded data inside components.

=====================================
TYPE DEFINITIONS
=====================================

Create:

types/industry.ts

types/caseStudy.ts

types/trust.ts

=====================================
SEO REQUIREMENTS
=====================================

Implement:

generateMetadata()

for:

/industries

/case-studies

Include:

- title
- description
- keywords
- open graph metadata

=====================================
DESIGN REQUIREMENTS
=====================================

Use:

- Framer Motion
- Hover Animations
- Modern Card Layouts
- Responsive Design
- Accessibility Best Practices

The design should feel like:

Deloitte
PwC
KPMG
EY

but cleaner and more modern.

=====================================
DELIVERABLE
=====================================

1. Folder Structure
2. Route Structure
3. Component Architecture
4. Data Models
5. Type Definitions
6. Industries Page
7. Case Studies Page
8. Shared Trust Components
9. SEO Implementation
10. Final Architecture Explanation

Important:

Do NOT create Careers Page.
Do NOT create Contact Forms.
Do NOT create Blog.
Do NOT create CMS.
Do NOT create Admin Panel.

Implement ONLY Phase-4.