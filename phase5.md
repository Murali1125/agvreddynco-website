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

✅ Phase-4 Completed
- Industries & Trust Module

Your task:

Implement ONLY Phase-5.

Do NOT modify previous phases.

Do NOT implement future phases.

=====================================
PHASE-5 OBJECTIVE
=====================================

Build a premium Contact & Lead Generation system.

This phase should focus on:

- Lead Capture
- Consultation Requests
- Contact Information
- Office Locations
- Inquiry Routing
- User Trust

The objective is to maximize consultation requests while maintaining a professional CA firm appearance.

=====================================
ROUTES
=====================================

Create:

/contact

/contact/thank-you

Only these routes.

=====================================
PAGE 1
CONTACT PAGE
=====================================

Route:

/contact

=====================================
SECTION 1
CONTACT HERO
=====================================

Headline:

"Let's Discuss Your Financial & Compliance Needs"

Subheadline:

"Our team is ready to help you navigate audits, taxation, compliance and business advisory challenges."

CTA:

Book a Consultation

=====================================
SECTION 2
CONTACT FORM
=====================================

Create a premium multi-section form.

Fields:

Full Name *

Company Name

Email Address *

Phone Number *

Service Interested In *

Office Location Preference

Message *

Preferred Contact Method

Options:

- Phone
- Email
- WhatsApp

=====================================
VALIDATIONS
=====================================

Required:

- Full Name
- Email
- Phone
- Message

Validate:

- Email Format
- Phone Number
- Empty Fields

Show inline validation messages.

Use React Hook Form + Zod.

=====================================
SECTION 3
CONSULTATION REQUEST FORM
=====================================

Separate consultation request component.

Fields:

Name

Email

Phone

Preferred Date

Preferred Time

Service Category

Additional Notes

CTA:

Request Consultation

=====================================
SECTION 4
OFFICE LOCATIONS
=====================================

Display office cards.

=====================================

ANANTAPUR
HEAD OFFICE

A.G.V Reddy’s Falcon Crest
80 Feet Road
Sangamesh Nagar
Anantapur
Andhra Pradesh – 515001

=====================================

TIRUPATI
BRANCH OFFICE

No.104
Sneha Apartments
Shanthi Nagar
Khadi Colony
Tirupati
Andhra Pradesh – 517501

=====================================

BENGALURU
BRANCH OFFICE

39
III Floor
Padam Complex
SDM Lane
Manavarthipet
Bengaluru
Karnataka – 560063

=====================================

Each card should include:

- Office Type
- Address
- Email Button
- Call Button
- Direction Button Placeholder

=====================================
SECTION 5
CONTACT INFORMATION
=====================================

Display:

Email:
info@agvreddy.com

Firm Registration:
003245S

C&AG Empanelment:
SR3458

RBI Code:
1018211

Use premium info cards.

=====================================
SECTION 6
FAQ SECTION
=====================================

Create FAQ accordion.

Questions:

1. How do I schedule a consultation?

2. Which industries do you serve?

3. Do you provide GST services?

4. Do you support startups?

5. Do you provide audit services?

6. Can consultations be conducted online?

=====================================
SECTION 7
WHY CONTACT US
=====================================

Cards:

40+ Years Experience

Peer Reviewed Firm

RBI Registered

C&AG Empanelled

NABARD Empanelled

Partner-Led Engagements

=====================================
SECTION 8
FINAL CTA
=====================================

Headline:

"Ready To Work With Trusted Financial Advisors?"

Button:

Schedule Consultation

=====================================
THANK YOU PAGE
=====================================

Route:

/contact/thank-you

Display:

Success Icon

Headline:

"Thank You For Contacting Us"

Message:

"Our team will reach out to you shortly."

Buttons:

Return Home

Explore Services

=====================================
FORM ARCHITECTURE
=====================================

Create:

lib/

validation/
├── contactSchema.ts
├── consultationSchema.ts

=====================================
FORM COMPONENTS
=====================================

components/contact/

├── ContactHero.tsx
├── ContactForm.tsx
├── ConsultationForm.tsx
├── OfficeLocations.tsx
├── OfficeCard.tsx
├── ContactInfo.tsx
├── ContactFAQ.tsx
├── ContactTrustSection.tsx
└── ContactCTA.tsx

=====================================
FORM STATE MANAGEMENT
=====================================

Use:

- React Hook Form
- Zod Validation

Requirements:

- Reusable Form Components
- Clean Error Handling
- Loading States
- Success States

=====================================
LEAD MANAGEMENT STRUCTURE
=====================================

Create:

types/lead.ts

Interfaces:

ContactInquiry

ConsultationRequest

=====================================
DATA STRUCTURE
=====================================

Create:

data/offices.ts

data/contactFaqs.ts

data/contactInfo.ts

No hardcoded content.

=====================================
UI REQUIREMENTS
=====================================

Use:

- Framer Motion
- Smooth Animations
- Accessible Forms
- Mobile Responsive Design

Provide:

Loading Buttons

Success Messages

Error Messages

=====================================
SEO REQUIREMENTS
=====================================

Implement:

generateMetadata()

for:

/contact

/contact/thank-you

Include:

- title
- description
- keywords
- open graph metadata

=====================================
ACCESSIBILITY
=====================================

Ensure:

- Proper Labels
- Keyboard Navigation
- Screen Reader Support
- Form Error Announcements

=====================================
DELIVERABLE
=====================================

1. Folder Structure
2. Route Structure
3. Validation Architecture
4. Form Components
5. Data Models
6. Contact Page
7. Thank You Page
8. SEO Setup
9. Accessibility Review
10. Architecture Explanation

Important:

Do NOT create Careers Module.
Do NOT create Blog.
Do NOT create CMS.
Do NOT create Admin Panel.
Do NOT integrate Email APIs yet.

Implement ONLY Phase-5.