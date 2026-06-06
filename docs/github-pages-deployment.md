# GitHub Pages Deployment Guide

## Project Overview

**Project**: AGV Reddy & Co. Website  
**Framework**: Next.js 14.2.5  
**Deployment Target**: GitHub Pages  
**Repository**: `Murali1125/agvreddynco-website`  
**Public URL**: `https://Murali1125.github.io/agvreddynco-website/`

---

## Deployment Readiness Assessment

✅ **Ready for GitHub Pages: YES**

### Build Configuration

| Property | Value |
|----------|-------|
| **Build Command** | `npm run build` |
| **Output Folder** | `out/` |
| **Base Path** | `/agvreddynco-website` |
| **Export Mode** | Static Export (`next export`) |
| **Build Size** | ~4.1 MB |
| **Pages Generated** | 63 static pages |

---

## Configuration Details

### 1. Next.js Static Export Configuration

The project has been configured for static export in `next.config.mjs`:

```javascript
const nextConfig = {
  // Enable static export for GitHub Pages deployment
  output: 'export',
  
  // Base path for GitHub Pages repository
  basePath: '/agvreddynco-website',
  
  // Trailing slash for static hosting compatibility
  trailingSlash: true,
  
  reactStrictMode: true,
  poweredByHeader: false,
};
```

**Key settings:**
- `output: 'export'` - Generates static HTML files instead of requiring a Node.js server
- `basePath: '/agvreddynco-website'` - Prefixes all routes with repository name for correct relative paths
- `trailingSlash: true` - Adds trailing slashes to URLs for better static hosting compatibility

### 2. Static-Incompatible Code Fixes

The following changes were made to support static export:

#### Removed unused imports from:
- `src/app/about/page.tsx` - Removed `AboutCTA`, `TrustCounters`
- `src/app/careers/page.tsx` - Removed `CareersCTA`, `CareerTimeline`
- `src/app/contact/page.tsx` - Removed `ContactCTA`, `ContactFAQ`
- `src/app/industries/page.tsx` - Removed `IndustryCTA`
- `src/app/services/page.tsx` - Removed `ServiceCTA`
- `src/app/services/[slug]/page.tsx` - Removed `ServiceCTA`, `ServiceFAQ`
- `src/components/contact/ContactHero.tsx` - Removed `ActionButton`, `ctaLabel`, `ctaHref` props

#### Fixed dynamic rendering issues:
- `src/app/insights/category/[category]/page.tsx` - Added `export const dynamic = 'force-static'` to allow static generation with `searchParams`

### 3. Dynamic Routes with Static Generation

The following dynamic routes are automatically pre-rendered:

```
Services:
  /services/[slug] - 5 services
  
Industries & Case Studies:
  /industries/ - Main page
  /case-studies/ - Main page
  
Careers:
  /careers/ - Main page
  /careers/[slug] - Multiple job listings
  
Insights (Knowledge Center):
  /insights/ - Main page
  /insights/[slug] - Individual articles
  /insights/category/[category] - 9 categories with pagination support
  /insights/tag/[tag] - 22 tags
```

---

## Deployment Instructions

### Prerequisites

```bash
# Ensure you have Node.js 18+ and npm installed
node --version  # v18.0.0 or higher
npm --version   # v9.0.0 or higher

# Install dependencies (if not already done)
npm install
```

### Step 1: Build the Project

```bash
npm run build
```

This generates static HTML files in the `out/` directory.

**Expected output:**
```
✓ Compiled successfully
✓ Generating static pages (63/63)
```

### Step 2: Deploy to GitHub Pages

#### Option A: Using gh-pages CLI (Recommended)

```bash
# Install gh-pages globally (one-time setup)
npm install -g gh-pages

# Deploy the out/ folder to GitHub Pages
npx gh-pages -d out
```

This will:
1. Create a `gh-pages` branch in your repository
2. Upload the contents of `out/` to the `gh-pages` branch
3. GitHub Pages automatically serves from this branch

#### Option B: Using Git Commands Manually

```bash
# Build the project
npm run build

# Initialize git subtree (if not already done)
git add out -f  # Force add the out directory

# Create and push to gh-pages branch
git subtree push --prefix out origin gh-pages
```

#### Option C: Using GitHub Actions (Recommended for CI/CD)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm install
      
      - name: Build
        run: npm run build
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
          cname: # Optional: uncomment to use custom domain
```

Push this file and GitHub Actions will automatically deploy on each push to `main`.

### Step 3: Enable GitHub Pages

1. Go to repository Settings
2. Navigate to **Pages** section
3. Under "Build and deployment":
   - Source: Select **Deploy from a branch**
   - Branch: Select **gh-pages**
   - Folder: Select **/(root)**
4. Click **Save**

### Step 4: Verify Deployment

After deployment completes (usually 1-2 minutes):

1. Check the Pages section shows: "Your site is live at `https://Murali1125.github.io/agvreddynco-website/`"
2. Visit `https://Murali1125.github.io/agvreddynco-website/` in your browser
3. Verify all pages load correctly and links work

---

## Quick Deploy Commands

### One-Command Deploy

```bash
npm install && npm run build && npx gh-pages -d out
```

### Commands Breakdown

```bash
# 1. Install/update dependencies
npm install

# 2. Build static files
npm run build

# 3. Deploy to gh-pages branch
npx gh-pages -d out

# 4. View deployment logs
# (Check GitHub repository Pages section)
```

---

## Accessibility & Compatibility

### ✅ Supported Features
- All static HTML pages
- Client-side React components
- Redux state management
- React Hook Form validation
- Tailwind CSS styling
- Next.js Image optimization (converted to static images)
- Google Analytics and Microsoft Clarity tracking
- SEO metadata and schema markup

### ⚠️ Limitations & Notes

1. **Server-Side Features Not Available:**
   - Server-side rendering (SSR)
   - API routes (`/api/*`)
   - Real-time data updates
   - Middleware
   - Next.js security headers

2. **Form Submissions:**
   - The contact and application forms are currently UI-only
   - To make them functional, implement:
     - Form service (Firebase, Netlify Forms, etc.)
     - Email service (SendGrid, Mailgun, etc.)
     - Backend API (separate server)

3. **Dynamic Data:**
   - All content is baked into static HTML at build time
   - Updates require rebuilding and redeploying
   - Consider using Contentful, Sanity, or Strapi for dynamic content management

4. **Asset Paths:**
   - All assets automatically use correct base path `/agvreddynco-website`
   - Next.js handles this automatically with `basePath` configuration

---

## Troubleshooting

### Issue: Build Fails with ESLint Errors

**Solution:**
```bash
# Fix linting issues
npx eslint . --fix

# Then rebuild
npm run build
```

### Issue: Pages Show 404 After Deployment

**Causes & Solutions:**
1. GitHub Pages not enabled - Enable in repository Settings
2. Wrong branch selected - Should be `gh-pages` branch
3. Base path incorrect - Verify `basePath: '/agvreddynco-website'` in `next.config.mjs`
4. Trailing slashes - Ensure `trailingSlash: true` is set

### Issue: Assets Not Loading (CSS/Images Broken)

**Solution:**
```javascript
// Already configured - but if issues persist:
// In next.config.mjs, verify:
basePath: '/agvreddynco-website'
```

### Issue: Routing Issues (Links Not Working)

**Verification:**
- All `Link` components use relative paths (Next.js handles base path)
- All asset imports use `@/` alias or relative paths
- No hardcoded domain URLs

### Issue: Site Works Locally but Not on GitHub Pages

**Steps to diagnose:**
```bash
# Preview production build locally
npm run build
npx next start  # Requires Node.js server

# Or with static export
cd out
npx http-server  # Preview static files
```

---

## Performance Metrics

| Metric | Value |
|--------|-------|
| Build Time | ~30 seconds |
| Output Size | 4.1 MB |
| Number of Pages | 63 |
| Image Optimization | Enabled |
| CSS Optimization | Enabled |
| JavaScript Minification | Enabled |

### Optimization Tips:
1. Run `npm run build` to verify build size
2. Use Chrome DevTools to check network performance
3. Test with `npx lighthouse` for performance scores
4. Consider image optimization for large images

---

## Maintenance & Updates

### Regular Tasks:

```bash
# Check for dependency updates
npm outdated

# Update dependencies (carefully)
npm update

# Check for security vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix
```

### Deployment Workflow:

```bash
# 1. Make code changes
git add .
git commit -m "feat: update content"

# 2. Test locally
npm run dev  # Development server

# 3. Build for production
npm run build

# 4. Deploy
npx gh-pages -d out

# 5. Push code changes
git push origin main
```

---

## Environment Variables

For build-time environment variables, create `.env.local`:

```env
# .env.local
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G_XXXXXXXXXX
NEXT_PUBLIC_CLARITY_PROJECT_ID=xxxxxxxxxxxx
```

These are embedded at build time and available in browser.

---

## Security Considerations

### ✅ Current Security Measures:
- CSP headers configured (though not enforced on static hosting)
- Type-safe TypeScript throughout
- ESLint validation
- Automated security headers in development

### 📝 Recommendations:
1. Enable branch protection rules on `main`
2. Require PR reviews before merge
3. Use GitHub's security scanning features
4. Regularly update dependencies
5. Monitor for security vulnerabilities with `npm audit`

---

## Support & Resources

### Documentation:
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Next.js Deployment Guide](https://nextjs.org/docs/app/building-your-application/deploying)

### Useful Commands:

```bash
# Check Next.js version
npm list next

# View build output
ls -la out/

# Clean rebuild
rm -rf .next out node_modules && npm install && npm run build

# Test production build locally
npm run build && cd out && npx http-server
```

---

## Deployment Checklist

- [ ] Create `.github/workflows/deploy.yml` for GitHub Actions (optional)
- [ ] Enable GitHub Pages in repository Settings
- [ ] Select `gh-pages` branch as deployment source
- [ ] Run `npm run build` successfully
- [ ] Run `npx gh-pages -d out` successfully
- [ ] Verify site loads at `https://Murali1125.github.io/agvreddynco-website/`
- [ ] Test all main navigation links
- [ ] Check responsive design on mobile
- [ ] Verify analytics tracking (Google Analytics, Clarity)
- [ ] Test forms (they may need backend setup)
- [ ] Set up CI/CD with GitHub Actions (optional)

---

## Contact & Support

For questions or issues with this deployment guide, refer to:
- GitHub Issues: [Create an issue](https://github.com/Murali1125/agvreddynco-website/issues)
- Next.js Discord: [Join community](https://discord.gg/bUG7V3yhzn)
- GitHub Pages Support: [Contact support](https://support.github.com)

---

**Last Updated:** 2026-06-06  
**Next.js Version:** 14.2.5  
**Node.js Required:** 18.0.0+
