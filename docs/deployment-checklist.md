# Deployment Checklist

## Build Verification
- [ ] Run `npm ci`
- [ ] Run `npm run build`
- [ ] Run smoke tests for critical routes

## SEO Verification
- [ ] Verify sitemap at `/sitemap.xml`
- [ ] Verify robots at `/robots.txt`
- [ ] Validate canonical URLs and metadata
- [ ] Validate structured data via Rich Results Test

## Security Verification
- [ ] Validate response security headers
- [ ] Validate CSP in staging environment
- [ ] Run dependency vulnerability scan

## Performance Verification
- [ ] Run Lighthouse for key pages
- [ ] Validate image optimization and caching
- [ ] Review bundle sizes for regressions

## Accessibility Verification
- [ ] Keyboard-only navigation pass
- [ ] Form error announcement checks
- [ ] Heading hierarchy and landmark checks

## Analytics Verification
- [ ] Configure `NEXT_PUBLIC_GA_ID`
- [ ] Configure `NEXT_PUBLIC_CLARITY_ID`
- [ ] Verify script loading in production
