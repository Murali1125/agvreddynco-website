# Design System Theme Refresh

## Overview
This update introduces a modern, professional, and trustworthy light theme focused on blue and green color families for a financial services context.

Design goals achieved:
- Professional and premium visual language
- Light-first UI with clean surfaces
- Blue-led brand identity
- Green-led trust and positive-action accents
- Soft gradients and subtle elevation
- Accessibility-conscious contrast for core text and actions

## 1. Complete Color Palette

### Primary Blue
- 50: #F0F9FF
- 100: #E0F2FE
- 200: #BAE6FD
- 300: #7DD3FC
- 400: #38BDF8
- 500: #0EA5E9
- 600: #0284C7
- 700: #0369A1

### Secondary Green
- 50: #F0FDF4
- 100: #DCFCE7
- 200: #BBF7D0
- 300: #86EFAC
- 400: #4ADE80
- 500: #22C55E
- 600: #16A34A
- 700: #15803D

### Neutrals
- 50: #FAFCFD
- 100: #F5F9FB
- 200: #E2E8F0
- 300: #CBD5E1
- 400: #94A3B8
- 500: #64748B
- 600: #475569
- 700: #334155
- 800: #1E293B
- 900: #0F172A

### Status Colors
- Success 50/100/200/500/600/700
- Warning 50/100/500/600
- Error 50/100/500/600

### Background and Surface Colors
- Page Background: #FAFCFD
- Section Alternate: #F5F9FB
- Card Background: #FFFFFF
- Highlight Background: #F0FDF4
- Trust Section Background: #EFF6FF

## 2. Design Token File

Centralized in:
- [src/config/theme/colors.ts](src/config/theme/colors.ts)

Exports:
- primary
- secondary
- neutral
- success
- warning
- error
- surfaces
- semantic aliases used by existing component classes

## 3. Tailwind Theme Extension

Updated in:
- [tailwind.config.ts](tailwind.config.ts)

What changed:
- Tailwind colors now ingest token groups from [src/config/theme/colors.ts](src/config/theme/colors.ts)
- Existing semantic color names (ink, royal, bronze, gold, etc.) are mapped to blue/green-safe values for broad compatibility
- Shadow system updated to softer blue/green-based depth

## 4. Component Color Mapping

### Blue-Led Components
- Header and nav active states: primary blue gradients and borders
- Hero backgrounds: soft blue/green radial + linear blends
- Primary buttons: blue gradient
- Link hover and key outlines: blue tints

### Green Accent Components
- Trust indicators and badges
- Secondary buttons and CTA accents
- Certification-like highlight areas
- Positive action accents

### Trust Sections
- [src/components/sections/TrustIndicatorsSection.tsx](src/components/sections/TrustIndicatorsSection.tsx)
- [src/components/shared/TrustBanner.tsx](src/components/shared/TrustBanner.tsx)

Now use blue/green trust backgrounds and softer bordered cards.

## 5. Updated Button Variants

Updated in:
- [src/components/ui/ActionButton.tsx](src/components/ui/ActionButton.tsx)

Variants:
- primary: blue gradient, darker-blue hover
- secondary: green gradient, darker-green hover
- ghost: white surface, blue border and blue-hover tint

## 6. Updated Card Variants

Card styling now follows:
- White background
- Soft blue border tones
- Soft premium shadow
- Subtle hover elevation

Applied via semantic remapping and section-level updates across existing card classes using border-ink/bg-white/shadow-soft/shadow-panel conventions.

## 7. Updated Form Variants

Form components keep behavior unchanged while inheriting refreshed palette:
- Input borders and focus states now align with blue/green token mapping via semantic aliases
- Submission and success visual cues remain clear and accessible

Primary impacted components:
- [src/components/contact/ContactForm.tsx](src/components/contact/ContactForm.tsx)
- [src/components/contact/ConsultationForm.tsx](src/components/contact/ConsultationForm.tsx)
- [src/components/careers/ApplicationForm.tsx](src/components/careers/ApplicationForm.tsx)

## 8. Updated Layout Styling

Updated:
- [src/app/globals.css](src/app/globals.css)
- [src/components/layout/Header.tsx](src/components/layout/Header.tsx)
- [src/components/layout/Footer.tsx](src/components/layout/Footer.tsx)
- [src/components/ui/LogoPlaceholder.tsx](src/components/ui/LogoPlaceholder.tsx)

Improvements:
- Light-first page foundations
- Softer mesh and gradient effects
- Cleaner footer readability on light premium gradients
- Brand mark updated to blue/green light treatment

## 9. Updated Hero and CTA Sections

Heroes and CTAs now use lighter premium gradients and blue/green accents:
- Hero utility gradient: from-blue-50 via-sky-50 to-green-50
- CTA surfaces: from-blue-100 to-green-100
- Trust backgrounds: from-sky-50 to-emerald-50

Updated CTA components:
- [src/components/sections/CallToActionSection.tsx](src/components/sections/CallToActionSection.tsx)
- [src/components/services/ServiceCTA.tsx](src/components/services/ServiceCTA.tsx)
- [src/components/contact/ContactCTA.tsx](src/components/contact/ContactCTA.tsx)
- [src/components/industries/IndustryCTA.tsx](src/components/industries/IndustryCTA.tsx)
- [src/components/careers/CareersCTA.tsx](src/components/careers/CareersCTA.tsx)
- [src/components/caseStudies/CaseStudiesCTA.tsx](src/components/caseStudies/CaseStudiesCTA.tsx)
- [src/components/insights/InsightsCTA.tsx](src/components/insights/InsightsCTA.tsx)

## 10. Accessibility Notes

- Text colors maintain strong contrast on white and light tinted surfaces.
- Buttons retain visible hover and focus affordances.
- Form readability and error/success states remain clear.
- Dark theme is not introduced.

## 11. Business Logic Safety

No business logic, routing, or architecture changes were made.
Only visual/theme tokens and presentation styling were updated.
