# Performance Review

## Current Optimizations
- Static generation and revalidation are enabled for key content routes.
- Next.js route-based code splitting active by App Router architecture.
- Image delivery standardized through `next/image` in content-heavy pages.
- Search/filter logic remains client-side and scoped to page-level datasets.

## Further Opportunities
- Add bundle analyzer for dependency-level visibility.
- Convert additional client components to server components where possible.
- Introduce selective dynamic imports for heavy interactive sections.
- Add Lighthouse CI in deployment pipeline.
