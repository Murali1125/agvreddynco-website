You are a Senior UI Architect and Frontend Engineer.

Project:
AGV Reddy & Co. Corporate Website

Current Status:
Phase-1 (Homepage) is already completed.

Your task is to implement ONLY Phase-2.

Do NOT modify Phase-1.

Do NOT create future phases.

=====================================
PHASE-2 GOAL
=====================================

Create a premium "About Us" experience that builds credibility, trust, and authority.

The company is a Chartered Accountancy firm established in 1984 with offices in:

- Anantapur
- Tirupati
- Bengaluru

The About section should communicate:

- Legacy
- Professional Excellence
- Trust
- Leadership
- Regulatory Credentials

Design should resemble premium consulting firms.

Reference:
https://accolet.com/

Use:

- Next.js
- TypeScript
- Tailwind CSS
- Reusable Components
- Responsive Design

=====================================
ROUTES
=====================================

Create:

/about

Only create the About page.

=====================================
SECTION 1
PAGE HERO
=====================================

Headline:

"More Than Four Decades of Professional Excellence"

Subheadline:

"Since 1984, AGV Reddy & Co. has been delivering trusted audit, taxation, advisory and compliance services across diverse industries."

Display:

Established:
1984

Experience:
40+ Years

Locations:
3 Offices

CTA:
Contact Us

Use elegant visual hierarchy.

=====================================
SECTION 2
OUR STORY
=====================================

Title:

"Our Journey"

Content should explain:

- Founded in 1984
- Long-standing reputation
- Commitment to ethics
- Client-first philosophy
- Growth into multiple locations

Create a timeline component.

Timeline Items:

1984
Firm Established

2000+
Regional Expansion

2010+
Growing Client Portfolio

Today
Trusted Professional Advisory Firm

Create timeline as reusable component.

=====================================
SECTION 3
FIRM CREDENTIALS
=====================================

Create premium credential cards.

Cards:

Peer Reviewed Firm

C&AG Empanelled Firm

RBI Registered Audit Firm

NABARD Empanelled Firm

40+ Years Experience

Multi-City Presence

Use icon-based cards.

Include hover effects.

=====================================
SECTION 4
VISION & MISSION
=====================================

Create split layout.

VISION

"To be the most trusted professional advisory firm recognized for excellence, innovation, integrity and client success."

MISSION

"To deliver value-driven professional solutions through technical expertise, ethical conduct and unwavering commitment to client satisfaction."

Use premium card design.

=====================================
SECTION 5
CORE VALUES
=====================================

Create value cards.

Values:

Integrity

Professional Excellence

Client Focus

Confidentiality

Continuous Learning

Quality Service

Each card:

- Icon
- Title
- Short Description

Hover animation.

=====================================
SECTION 6
LEADERSHIP TEAM
=====================================

Create leadership showcase.

Create reusable LeaderCard component.

Display:

--------------------------------

CA Dr. A.G. Venugopal Reddy

Founder Partner

Description:

Founder of the firm with over four decades of professional experience and leadership.

--------------------------------

CA Kasi Reddy Nallappa Reddy

Partner

Description:

Specialist in audit, taxation, compliance and advisory services.

--------------------------------

CA Yasaswani Grandhi

Partner

Description:

Experienced in taxation, GST, audit assignments and regulatory advisory.

--------------------------------

CA Mahaveer Bansal

Partner

Description:

Specialist in corporate advisory, compliance and business consulting.

--------------------------------

Requirements:

- Professional portrait placeholders
- Responsive card layout
- Hover animations
- Modern executive style

=====================================
SECTION 7
WHY CLIENTS TRUST US
=====================================

Create statistics section.

Display:

40+
Years Experience

3
Office Locations

100+
Professional Engagements

4
Major Regulatory Empanelments

Display as animated counters.

Build reusable Counter component.

=====================================
SECTION 8
OFFICE PRESENCE
=====================================

Create office location cards.

Locations:

Anantapur
Head Office

Tirupati
Branch Office

Bengaluru
Branch Office

Add:

- Office icon
- Location details
- Modern card design

No maps yet.

=====================================
SECTION 9
CALL TO ACTION
=====================================

Headline:

"Partner With a Firm Built on Trust"

Subheadline:

"Experience professional excellence backed by over four decades of expertise."

Button:

"Get In Touch"

=====================================
ARCHITECTURE REQUIREMENTS
=====================================

Create reusable components.

Suggested structure:

components/

about/
├── AboutHero.tsx
├── Timeline.tsx
├── Credentials.tsx
├── VisionMission.tsx
├── CoreValues.tsx
├── LeadershipSection.tsx
├── LeaderCard.tsx
├── TrustCounters.tsx
├── OfficePresence.tsx
└── AboutCTA.tsx

=====================================
DATA STRUCTURE
=====================================

Create:

data/about.ts

Store:

- timeline
- leadership
- values
- credentials
- locations
- counters

Do not hardcode content inside components.

=====================================
DELIVERABLE
=====================================

1. Folder Structure
2. Architecture Design
3. Reusable Components
4. Type Definitions
5. Data Models
6. Complete About Page Implementation

Important:

Do NOT create service pages.
Do NOT create contact forms.
Do NOT create careers page.
Do NOT create blog.
Do NOT create future phases.

Implement ONLY Phase-2.