# Technical SEO Reference

Apply these standards to every site build. Technical SEO ensures search engines (and AI agents) can discover, crawl, interpret, and rank the site correctly.

## Table of Contents

1. [Schema Markup (JSON-LD)](#schema-markup-json-ld)
2. [Open Graph & Social Meta Tags](#open-graph--social-meta-tags)
3. [XML Sitemap](#xml-sitemap)
4. [Robots.txt & Bot Governance](#robotstxt--bot-governance)
5. [llms.txt & Generative Engine Optimisation (GEO)](#llmstxt--generative-engine-optimisation-geo)
6. [Canonical Tags](#canonical-tags)
7. [Site Architecture](#site-architecture)
8. [Per-Page SEO Checklist](#per-page-seo-checklist)

---

## Schema Markup (JSON-LD)

Add structured data to every page as JSON-LD in the `<head>`. This enables rich snippets in search results and provides context to AI agents.

### LocalBusiness / ProfessionalService (for service businesses)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Business Name",
  "description": "One-sentence description of what the business does.",
  "url": "https://domain.com.au",
  "logo": "https://domain.com.au/logo.svg",
  "image": "https://domain.com.au/og-image.jpg",
  "telephone": "+61-XXX-XXX-XXX",
  "email": "hello@domain.com.au",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Sydney",
    "addressRegion": "NSW",
    "addressCountry": "AU"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -33.8688,
    "longitude": 151.2093
  },
  "areaServed": {
    "@type": "City",
    "name": "Sydney"
  },
  "priceRange": "$$",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    "opens": "09:00",
    "closes": "17:00"
  },
  "sameAs": [
    "https://linkedin.com/in/profile",
    "https://linkedin.com/company/name"
  ]
}
</script>
```

### Product (for e-commerce / product businesses)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Product Name",
  "description": "Product description.",
  "image": "https://domain.com.au/product.jpg",
  "brand": {
    "@type": "Brand",
    "name": "Brand Name"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "AUD",
    "price": "0",
    "priceValidUntil": "2026-12-31",
    "availability": "https://schema.org/InStock",
    "url": "https://domain.com.au/product"
  }
}
</script>
```

### WebSite with SearchAction (homepage only)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Business Name",
  "url": "https://domain.com.au",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://domain.com.au/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
</script>
```

Only include SearchAction if the site has actual search functionality.

### BreadcrumbList (all interior pages)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://domain.com.au/"},
    {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://domain.com.au/services"}
  ]
}
</script>
```

### FAQPage (if the page contains Q&A content)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a fractional CFO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A fractional CFO provides part-time executive financial leadership..."
      }
    }
  ]
}
</script>
```

---

## Open Graph & Social Meta Tags

Include on every page in `<head>`. These control how the page appears when shared on LinkedIn, Twitter/X, Facebook, and messaging apps.

```html
<!-- Primary Meta -->
<meta name="description" content="Page-specific description. 155 characters max. Include primary keyword naturally.">

<!-- Open Graph (LinkedIn, Facebook) -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://domain.com.au/page">
<meta property="og:title" content="Page Title — Business Name">
<meta property="og:description" content="Same as meta description or a social-specific variant.">
<meta property="og:image" content="https://domain.com.au/og-image.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="en_AU">
<meta property="og:site_name" content="Business Name">

<!-- Twitter/X Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Page Title — Business Name">
<meta name="twitter:description" content="Social-specific description.">
<meta name="twitter:image" content="https://domain.com.au/og-image.jpg">
```

**OG Image requirements:** 1200x630px, <300KB, WebP or JPG. Include business name and a visual that works at thumbnail size.

---

## XML Sitemap

Generate `sitemap.xml` in the root directory. Include only indexable, canonical pages.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://domain.com.au/</loc>
    <lastmod>2026-02-07</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://domain.com.au/services</loc>
    <lastmod>2026-02-07</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <!-- One entry per indexable page -->
</urlset>
```

**Rules:**
- Never include non-indexable pages (redirects, 404s, noindex pages)
- Never include URLs that canonical to a different URL
- Update `lastmod` when content actually changes (not automatically)
- Priority: homepage 1.0, main pages 0.8, subpages 0.6, blog posts 0.4

---

## Robots.txt & Bot Governance

Place `robots.txt` in the root directory. This controls which bots can crawl which paths.

```
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /private/
Disallow: /tmp/

# AI Bot Governance (opt out of training data)
User-agent: GPTBot
Disallow: /

User-agent: Google-Extended
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: anthropic-ai
Disallow: /

# Allow standard search engines
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

Sitemap: https://domain.com.au/sitemap.xml
```

**Bot governance decisions — this is a business decision, discuss with client:**
- **Option A (Block AI training):** Block GPTBot, Google-Extended, CCBot, anthropic-ai. Use when client wants to protect content from AI training data. Content won't appear in AI-generated answers.
- **Option B (Allow AI visibility):** Allow AI crawlers. Use when client wants to be cited in AI search responses (ChatGPT, Google AI Overview, Perplexity). Recommended for professional services firms that benefit from AI referrals.
- Most businesses should choose Option B — being cited by AI is increasingly how clients discover services.

---

## llms.txt & Generative Engine Optimisation (GEO)

Traditional SEO optimises for search engine ranking. GEO (Generative Engine Optimisation) optimises for being **cited by AI agents** in their responses. Both matter in 2026.

### llms.txt

Deploy an `llms.txt` file at the site root. This acts as a discovery index for LLM crawlers (GPTBot, OAI-SearchBot, Google-Extended), telling them which content is most authoritative.

```
# [Business Name]
> One-sentence description of the business.

## About
- [About Page](https://domain.com.au/about): Background on the founder and firm.

## Services
- [Services Overview](https://domain.com.au/services): Full list of services offered.

## Contact
- [Contact](https://domain.com.au/contact): How to reach us.

## Insights
- [Insights](https://domain.com.au/insights): Articles and analysis.
```

**Rules:**
- Keep it concise — this is a table of contents, not a sitemap
- Link to the most authoritative pages only
- Use the same canonical URLs as your sitemap
- Update when content structure changes
- Only deploy if robots.txt allows AI crawlers (Option B above)

### GEO Principles

Pages with comprehensive Schema.org markup (`ProfessionalService`, `FAQPage`, `Article`) are cited more frequently in LLM responses. To maximise AI citation:

- **Use FAQPage schema** on any page with Q&A content. AI agents extract these directly.
- **Use structured headings** (H2/H3) that match common queries ("What is a fractional CFO?", "How much does X cost?")
- **Answer questions directly** in the first 1-2 sentences of each section, then elaborate.
- **Include specific data** (numbers, credentials, locations) — AI agents prefer citable facts over atmospheric copy.
- **Static HTML is ideal** — most AI agents cannot execute complex JavaScript. Our flat HTML approach is an advantage.

### FAQPage Schema Template

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does a fractional CFO do?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A fractional CFO provides part-time executive financial leadership..."
      }
    },
    {
      "@type": "Question",
      "name": "How much does a fractional CFO cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Fractional CFO services typically range from..."
      }
    }
  ]
}
</script>
```

---

## Canonical Tags

Every page must have a self-referencing canonical tag in `<head>`:

```html
<link rel="canonical" href="https://domain.com.au/services">
```

**Rules:**
- Use the exact URL you want indexed (with or without trailing slash — be consistent)
- Never point canonical to a URL that redirects
- Never point canonical to a non-200 page
- If content exists at both www and non-www, canonical to one

---

## Site Architecture

**Flat architecture rule:** Every page reachable within 3 clicks from homepage.

For a 5-page site: homepage links to all 4 interior pages via nav. Interior pages link to each other. This is inherently flat. For larger sites, use hub-and-spoke: hub pages (services, blog) link to individual sub-pages.

**Internal linking rules:**
- Every page links to at least 2 other pages
- Use descriptive anchor text (not "click here")
- Most important pages should have the most internal links pointing to them
- Navigation counts as internal links

---

## Per-Page SEO Checklist

Apply to every page before launch:

```
[ ] Unique <title> tag (50-60 characters, primary keyword near start)
[ ] Unique meta description (120-155 characters, includes CTA)
[ ] Canonical tag (self-referencing)
[ ] OG meta tags (title, description, image, url)
[ ] Twitter card meta tags
[ ] Schema markup (JSON-LD, page-appropriate type)
[ ] H1 tag (one per page, includes primary keyword)
[ ] Heading hierarchy (H1 → H2 → H3, no skipping)
[ ] Alt text on all images (descriptive, not keyword-stuffed)
[ ] Internal links to at least 2 other pages
[ ] External links open in new tab (rel="noopener noreferrer")
[ ] No orphan pages (every page linked from at least one other)
[ ] Page loads in <2.0s (LCP) — tightened for 2026
[ ] Mobile-responsive (test at 375px, 768px, 1024px)
[ ] URL is clean, lowercase, hyphenated (no query params for content pages)
[ ] llms.txt deployed (if AI visibility desired)
[ ] FAQPage schema on any page with Q&A content
```
