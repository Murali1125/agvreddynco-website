You are a Senior Solution Architect, UX Architect, and Frontend Engineer.

Project:
AGV Reddy & Co. Corporate Website

Current Status:

✅ Phase-1 Homepage

✅ Phase-2 About Us

✅ Phase-3 Services

✅ Phase-4 Industries & Trust

✅ Phase-5 Contact & Lead Generation

Your task:

Implement ONLY Phase-6.

Do NOT modify previous phases.

Do NOT implement future phases.

=====================================
PHASE-6 OBJECTIVE
=====================================

Build a professional Careers Module.

The goal is to attract:

- Chartered Accountants
- Articleship Students
- Audit Professionals
- Tax Consultants
- Finance Graduates
- Interns

The design should reflect:

- Professional Growth
- Learning Culture
- Leadership Opportunities
- Long-Term Career Development

=====================================
ROUTES
=====================================

Create:

/careers

/careers/[slug]

/careers/apply

Only these routes.

=====================================
PAGE 1
CAREERS LANDING PAGE
=====================================

Route:

/careers

=====================================
SECTION 1
CAREERS HERO
=====================================

Headline:

"Build Your Career With AGV Reddy & Co."

Subheadline:

"Join a firm that values excellence, integrity, continuous learning and professional growth."

Primary CTA:

View Opportunities

Secondary CTA:

Apply Now

=====================================
SECTION 2
WHY JOIN US
=====================================

Create feature cards.

Display:

Professional Development

Partner Mentorship

Exposure To Diverse Industries

Leadership Opportunities

Continuous Learning

Collaborative Environment

=====================================
SECTION 3
WORK CULTURE
=====================================

Create modern culture showcase.

Topics:

- Client-Centric Mindset
- Professional Ethics
- Knowledge Sharing
- Team Collaboration
- Innovation & Growth

Use icon cards.

=====================================
SECTION 4
OPEN POSITIONS
=====================================

Display sample positions.

1. Chartered Accountant

2. Audit Associate

3. Tax Consultant

4. Article Assistant

5. Finance Executive

6. Internship Program

Each card should include:

- Position Title
- Experience Required
- Location
- Employment Type
- Apply Button

=====================================
SECTION 5
CAREER JOURNEY
=====================================

Create timeline.

Example:

Intern

↓

Article Assistant

↓

Associate

↓

Senior Associate

↓

Manager

↓

Partner Track

Create reusable timeline component.

=====================================
SECTION 6
EMPLOYEE BENEFITS
=====================================

Cards:

Professional Development

Training Programs

Mentorship

Flexible Learning

Industry Exposure

Career Advancement

=====================================
SECTION 7
FINAL CTA
=====================================

Headline:

"Ready To Grow With Us?"

Button:

Apply Today

=====================================
PAGE 2
JOB DETAIL PAGE
=====================================

Dynamic Route:

/careers/[slug]

Examples:

/careers/chartered-accountant

/careers/audit-associate

=====================================
SECTION 1
JOB HERO
=====================================

Display:

Job Title

Location

Experience

Employment Type

Apply Now Button

=====================================
SECTION 2
JOB OVERVIEW
=====================================

Detailed role summary.

=====================================
SECTION 3
RESPONSIBILITIES
=====================================

Bullet list.

=====================================
SECTION 4
REQUIREMENTS
=====================================

Qualifications

Experience

Skills

=====================================
SECTION 5
BENEFITS
=====================================

Role-specific benefits.

=====================================
SECTION 6
APPLICATION CTA
=====================================

Apply Button

=====================================
PAGE 3
APPLICATION PAGE
=====================================

Route:

/careers/apply

=====================================
APPLICATION FORM
=====================================

Fields:

Full Name *

Email *

Phone Number *

Position Applying For *

Current Location *

Years of Experience

Highest Qualification

Current Employer

Expected Salary

Notice Period

LinkedIn Profile

Cover Letter

Resume Upload

=====================================
VALIDATIONS
=====================================

Required:

Name

Email

Phone

Position

Resume

Validate:

Email

Phone

File Upload

=====================================
RESUME UPLOAD
=====================================

Support:

PDF

DOC

DOCX

Max Size:

5MB

Create reusable file upload component.

=====================================
SUCCESS PAGE STATE
=====================================

After submission:

Display:

Application Submitted Successfully

Our recruitment team will review your profile and contact you if your qualifications match our requirements.

=====================================
DATA ARCHITECTURE
=====================================

Create:

data/jobs.ts

Store:

job {
 id
 slug
 title
 location
 experience
 type
 overview
 responsibilities[]
 requirements[]
 benefits[]
}

No hardcoded content.

=====================================
TYPE DEFINITIONS
=====================================

Create:

types/job.ts

types/application.ts

=====================================
COMPONENT STRUCTURE
=====================================

components/

careers/
├── CareersHero.tsx
├── WhyJoinUs.tsx
├── WorkCulture.tsx
├── JobCard.tsx
├── JobsGrid.tsx
├── CareerTimeline.tsx
├── EmployeeBenefits.tsx
├── CareersCTA.tsx
├── JobHero.tsx
├── JobOverview.tsx
├── JobResponsibilities.tsx
├── JobRequirements.tsx
├── JobBenefits.tsx
├── JobApplyCTA.tsx
├── ApplicationForm.tsx
└── ResumeUpload.tsx

=====================================
FORM VALIDATION
=====================================

Use:

React Hook Form

Zod

Create:

lib/validation/

applicationSchema.ts

=====================================
UI REQUIREMENTS
=====================================

Use:

Framer Motion

Hover Effects

Loading States

Success States

Error Handling

Responsive Design

Accessibility Best Practices

=====================================
SEO REQUIREMENTS
=====================================

Implement:

generateMetadata()

For:

/careers

/careers/[slug]

/careers/apply

Include:

- title
- description
- keywords
- open graph metadata

=====================================
ACCESSIBILITY
=====================================

Support:

Keyboard Navigation

Screen Readers

Proper Labels

Error Announcements

=====================================
DELIVERABLE
=====================================

1. Folder Structure

2. Route Structure

3. Career Module Architecture

4. Data Models

5. Type Definitions

6. Careers Landing Page

7. Dynamic Job Pages

8. Application Page

9. Resume Upload Component

10. Validation Setup

11. SEO Setup

12. Architecture Explanation

Important:

Do NOT create Blog Module.

Do NOT create CMS.

Do NOT create Admin Panel.

Do NOT integrate Recruitment APIs.

Implement ONLY Phase-6.