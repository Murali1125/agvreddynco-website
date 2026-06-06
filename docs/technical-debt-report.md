# Technical Debt Report

## Identified Debt
- Repeated section heading strings across feature modules.
- Mixed metadata patterns from early phases before centralization.
- Limited automated testing around SEO and schema output.

## Impact
- Medium maintenance overhead for future copy and SEO updates.
- Potential inconsistency risk as more routes are added.

## Mitigation Plan
- Consolidate metadata into helper-based generation (Phase 8 baseline added).
- Add lint rule checks for required metadata fields per route.
- Add smoke tests for sitemap, robots, and core schema pages.
