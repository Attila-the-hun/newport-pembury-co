# IMAGE-PROMPTS.md — Insights Page Image Generation Guide

Actionable reference for AI image generation across Newport Pembury & Co insights pages. Maps every image opportunity to the appropriate AI model with exact prompts, specifications, and accessibility requirements.

---

## Brand Context (Canonical)

- **Brand**: Newport Pembury & Co — Fractional CFO Consultancy, Sydney
- **Target Audience**: Founders of $5M–$50M businesses
- **Brand Colors**:
  - Charcoal (Primary): #1B2838
  - Gold (Secondary/Accent): #C5A55A
  - Dark: #0F1923
  - Ivory: #F5F0E8
- **Typography**: Cormorant Garamond (headings) + DM Sans (body)
- **Anti-Pattern**: NO stock cityscapes, skylines, handshakes, or generic office imagery. These damage credibility with B2B audiences.

---

## Image Generation Model Guide

### Claude (SVG)
- **Best for**: Abstract geometric compositions, data visualization motifs, line-art conceptual illustrations
- **Strengths**: Mathematical precision, dark-mode support via CSS custom properties, vector scalability, brand palette consistency
- **Output**: SVG code that can be embedded or compiled to PNG/WebP
- **Use cases**: Icons, geometric patterns, abstract data-themed art, decorative elements
- **Color approach**: Hardcode hex values but design for dark mode by using opacity and layering

### Gemini/Imagen
- **Best for**: Atmospheric, moody, abstract photorealistic textures and environments
- **Strengths**: Editorial-quality depth, material textures, lighting gradients, environmental mood
- **Output**: PNG or WebP (typically 1024px+)
- **Use cases**: Background textures, material close-ups, atmospheric editorial headers
- **Tip**: Request "high-end editorial photography" for credibility; avoid celebrity or heavily stylized looks

### ChatGPT/DALL-E 3
- **Best for**: Conceptual editorial illustrations, stylized compositions with clear visual metaphors
- **Strengths**: Narrative clarity, symbolic representation, clean composition, B2B aesthetic
- **Output**: PNG or WebP (typically 1024px+)
- **Use cases**: Representing abstract business concepts, metaphorical process illustrations, styled data environments
- **Tip**: Include "minimalist", "clean composition", and "professional illustration style" for B2B credibility

---

## INSIGHTS HUB (insights/index.html) — 7 Images Needed

### 1. Featured Article Hero
**Article**: "The $5M–$50M Blind Spot: Why Growing Companies Need a CFO Before They Think They Do"
**Category**: Strategy
**CSS Class**: `featured-image-gradient`

| Property | Value |
|----------|-------|
| **Model** | ChatGPT/DALL-E 3 |
| **Prompt** | `Minimalist editorial illustration: abstract financial inflection point concept, two upward-trending lines converging at a peak moment, clean geometric composition, navy and gold color palette with ivory accents, professional consulting aesthetic, no people or text, ultra-clean lines, 16:9` |
| **Aspect Ratio** | 16:9 |
| **Recommended Size** | 1200×675px (desktop featured card) |
| **Alt Text** | `Minimalist illustration showing financial inflection point where growing companies benefit most from CFO leadership` |
| **Dark Mode** | CSS gradient fallback: `linear-gradient(135deg, #1B2838 0%, #C5A55A 50%, #0F1923 100%)` |
| **Implementation** | Generate image, save as WebP, compress to <100KB. Use as background-image on featured-card div; provide fallback gradient in CSS. |

---

### 2. Article Card 1: M&A Hidden Costs
**Article**: "The Hidden Cost of Unprepared M&A: Why 70% of Deals Destroy Value"
**Category**: M&A
**CSS Class**: `article-image-charcoal`

| Property | Value |
|----------|-------|
| **Model** | Claude (SVG) |
| **Concept** | Abstract compressing/funnel visualization — money flow narrowing due to value destruction; clean line-art with geometric strength |
| **Prompt** | `SVG illustration: minimalist abstract funnel or waterfall concept, charcoal primary lines, subtle gold accents at compression points, suggesting financial value loss and preparation, geometric precision, no text, 16:9 canvas, CSS-compatible with hex colors and opacity layers for dark mode` |
| **Aspect Ratio** | 16:9 |
| **Recommended Size** | 800×450px (article card thumbnail) |
| **Alt Text** | `Abstract visualization of M&A deal value compression, showing importance of financial preparation` |
| **Dark Mode** | SVG uses `fill="#C5A55A"` and `opacity="0.8"` on navy background; automatically compatible |
| **Implementation** | Generate SVG code, embed inline in HTML or save as .svg file. Apply CSS class for lazy-loading and aspect-ratio container. |

---

### 3. Article Card 2: 13-Week Cash Flow
**Article**: "The 13-Week Cash Flow Forecast: A Founder's Safety Net"
**Category**: Cash Flow
**CSS Class**: `article-image-growth`

| Property | Value |
|----------|-------|
| **Model** | Claude (SVG) |
| **Concept** | Abstract rolling/cyclical cash flow waves; minimal line chart motif with upward inflection; representing safety net and continuous visibility |
| **Prompt** | `SVG illustration: minimalist rolling wave pattern or cyclical line graph, 13 small repeated intervals suggesting weekly cadence, charcoal background with gold accent lines, smooth curves suggesting stability and forward momentum, no text or numbers, geometric and editorial, 16:9 canvas` |
| **Aspect Ratio** | 16:9 |
| **Recommended Size** | 800×450px (article card thumbnail) |
| **Alt Text** | `Abstract wave pattern representing 13-week rolling cash flow visibility and founder financial safety` |
| **Dark Mode** | Native SVG support via stroke="#C5A55A" and custom properties |
| **Implementation** | Embed SVG or save as external file with lazy-loading. Use aspect-ratio CSS to maintain shape across viewports. |

---

### 4. Article Card 3: NetSuite Implementation
**Article**: "NetSuite Implementation: A CFO's Honest Guide to ERP Without the Pain"
**Category**: Systems
**CSS Class**: `article-image-charcoal-inverse`

| Property | Value |
|----------|-------|
| **Model** | Gemini/Imagen |
| **Concept** | Atmospheric abstract tech environment — subtle connectivity, system architecture metaphor; moody, sophisticated lighting; minimal human presence (optional) |
| **Prompt** | `Abstract atmospheric editorial photography: minimalist tech environment, interconnected geometric nodes or circuit-like patterns, moody navy and charcoal lighting with subtle gold accents, professional data-center or modern office aesthetic, shallow depth of field on architectural details, no people, no text, high-end editorial style, 16:9` |
| **Aspect Ratio** | 16:9 |
| **Recommended Size** | 800×450px (article card thumbnail) |
| **Alt Text** | `Atmospheric abstract visual suggesting system integration and digital architecture` |
| **Dark Mode** | Photograph naturally dark; may require CSS filter to enhance contrast |
| **Implementation** | Generate with Gemini, upscale to 1024px, convert to WebP. Use CSS object-fit: cover with aspect-ratio container. |

---

### 5. Article Card 4: Financial Models for Investors
**Article**: "Financial Models That Actually Get Funded: What Investors Look For"
**Category**: Strategy
**CSS Class**: `article-image-gold-light`

| Property | Value |
|----------|-------|
| **Model** | Claude (SVG) |
| **Concept** | Abstract data visualization motif — clean line chart or spreadsheet grid pattern with upward trajectory; representing investor confidence and financial clarity |
| **Prompt** | `SVG illustration: minimalist spreadsheet or grid pattern with ascending line chart overlay, clean geometric precision, charcoal grid lines with gold accent line showing growth trajectory, no data labels or text, professional financial aesthetic, 16:9 canvas, optimized for dark mode CSS custom properties` |
| **Aspect Ratio** | 16:9 |
| **Recommended Size** | 800×450px (article card thumbnail) |
| **Alt Text** | `Clean geometric visualization of financial modeling and investor confidence metrics` |
| **Dark Mode** | SVG native support; layer opacity adjustments for contrast |
| **Implementation** | Embed SVG; ensure text elements are skipped or hidden with role="img" on container. Use CSS media query for potential stroke-width adjustment in dark mode. |

---

### 6. Article Card 5: Competitor Acquisitions
**Article**: "Acquiring a Competitor: Lessons From Two Acquisitions in Three Years"
**Category**: M&A
**CSS Class**: `article-image-charcoal-growth`

| Property | Value |
|----------|-------|
| **Model** | ChatGPT/DALL-E 3 |
| **Concept** | Abstract convergence/merging metaphor — two entities combining with clean, professional visual language; representing strategic integration |
| **Prompt** | `Minimalist editorial illustration: abstract acquisition metaphor, two converging geometric shapes or paths merging into unified form, navy and charcoal with gold accent at convergence point, clean composition, professional consulting style, no people, no text, ultra-minimal line work, 16:9` |
| **Aspect Ratio** | 16:9 |
| **Recommended Size** | 800×450px (article card thumbnail) |
| **Alt Text** | `Minimalist illustration representing strategic acquisition and business integration` |
| **Dark Mode** | Illustration uses dark background; pair with CSS gradient fallback if needed |
| **Implementation** | Generate with DALL-E 3, optimize for web, lazy-load on article grid with CSS aspect-ratio wrapper. |

---

### 7. Article Card 6: Bespoke Booking System
**Article**: "Building a Bespoke Booking System: When Off-the-Shelf Isn't Enough"
**Category**: Systems
**CSS Class**: `article-image-charcoal`

| Property | Value |
|----------|-------|
| **Model** | Claude (SVG) |
| **Concept** | Abstract custom/bespoke architecture — building blocks or interconnected system modules; representing tailored solution and precision engineering |
| **Prompt** | `SVG illustration: minimalist modular architecture pattern, abstract stacked or interconnected rectangular blocks suggesting custom-built systems, charcoal primary structure with gold accent connectors, clean geometric precision, no labels or text, professional technical aesthetic, 16:9 canvas` |
| **Aspect Ratio** | 16:9 |
| **Recommended Size** | 800×450px (article card thumbnail) |
| **Alt Text** | `Abstract modular architecture visualization representing custom system design and engineering` |
| **Dark Mode** | SVG with CSS custom properties; opacity layers for emphasis |
| **Implementation** | Generate SVG, embed inline or external with lazy-loading. Ensure high contrast between charcoal and gold for readability. |

---

## M&A ARTICLE PAGE RELATED CARDS (insights/ma-readiness-checklist/index.html) — 3 Related Articles

### 8. Related Card 1: 13-Week Cash Flow Forecast
**Article Link**: `/insights/13-week-cashflow-forecast/`
**Category**: Cash Flow Strategy
**CSS Class**: `related-card`

| Property | Value |
|----------|-------|
| **Model** | Reuse Image #3 above |
| **Image Source** | `/insights/13-week-cashflow-forecast/card-image.svg` or PNG |
| **Aspect Ratio** | 16:9 |
| **Alt Text** | `Abstract wave pattern representing 13-week rolling cash flow visibility and founder financial safety` |
| **Note** | This image appears in both the Insights Hub grid and the M&A Article's related section. Create once, reference twice. Maintain single source of truth. |

---

### 9. Related Card 2: When to Replace Your Accounting System
**Article**: "When to Replace Your Accounting System (And When Not To)"
**Category**: Systems & Transformation
**CSS Class**: `related-card`

| Property | Value |
|----------|-------|
| **Model** | Gemini/Imagen |
| **Concept** | Atmospheric transition metaphor — old system fading into new; subtle tech environment; suggesting transformation without disruption |
| **Prompt** | `Abstract atmospheric editorial photography: minimalist tech environment with subtle contrast between old and new elements, navy and charcoal tones with gold accent lighting, modern office or data architecture, shallow depth of field, professional editorial style, no people, no text, high-end magazine aesthetic, 16:9` |
| **Aspect Ratio** | 16:9 |
| **Recommended Size** | 600×338px (related card thumbnail, smaller than featured) |
| **Alt Text** | `Atmospheric visualization of system transformation and technology transition` |
| **Dark Mode** | Photograph naturally dark; may need CSS filter adjustment |
| **Implementation** | Generate standalone, optimize for web, use lazy-loading on related articles section. |

---

### 10. Related Card 3: What Buyers Look For in a Data Room
**Article**: "What Buyers Actually Look For in a Data Room"
**Category**: M&A Advisory
**CSS Class**: `related-card`

| Property | Value |
|----------|-------|
| **Model** | Claude (SVG) |
| **Concept** | Abstract information architecture — organized hierarchy, clarity, structure; representing documentation and evidence arrangement |
| **Prompt** | `SVG illustration: minimalist filing or information hierarchy pattern, organized rectangular cells or document stacks, charcoal primary with gold accent lines showing structure and order, clean geometric precision, professional documentation aesthetic, no text or labels, 16:9 canvas` |
| **Aspect Ratio** | 16:9 |
| **Recommended Size** | 600×338px (related card thumbnail) |
| **Alt Text** | `Minimalist visualization of organized data structure and documentation hierarchy` |
| **Dark Mode** | Native SVG support via CSS custom properties |
| **Implementation** | Generate SVG, embed inline with role="img" on parent container. Use CSS aspect-ratio for responsive scaling. |

---

## Implementation Checklist

### Before Generation
- [ ] Review brand color palette and ensure consistency across all prompts
- [ ] Confirm no stock photography anti-patterns in any prompt (no handshakes, skylines, etc.)
- [ ] Identify which images are reused across pages (e.g., Card 1 = Card 8)
- [ ] Plan for dark mode support: SVG images automatically scale; PNG/WebP may need CSS filter adjustments

### During Generation
- [ ] Use exact aspect ratios specified (primarily 16:9 for featured, 16:9 for cards, 600×338px for related)
- [ ] Generate at 1.5× intended display size for sharpness (e.g., 1200×675px for 800×450px display)
- [ ] For SVG: Embed color values as hex codes; design with dark background in mind; test on both light and dark CSS backgrounds
- [ ] For PNG/WebP: Request editorial quality; verify no AI artifacts (extra elements, text gibberish, impossible geometry); check consistency with brand aesthetic

### After Generation
- [ ] Convert all raster images to WebP format (use `cwebp` tool or online converter)
- [ ] Generate responsive sizes: 800w, 1024w, 1536w for `srcset` attribute (if using <img> with picture element)
- [ ] Compress WebP files to <100KB for featured images, <60KB for thumbnails
- [ ] Test all images on both light and dark theme backgrounds
- [ ] Verify alt text is descriptive (15–125 characters) and doesn't start with "Image of" or "Picture of"
- [ ] Run accessibility check: ensure color contrast passes WCAG AA even if image fails to load (CSS gradient fallback)
- [ ] Lazy-load all card images with `loading="lazy"` attribute or Intersection Observer

### CSS Integration Pattern

```css
/* Featured article image with gradient fallback */
.featured-image-gradient {
    background: linear-gradient(135deg, #1B2838 0%, #C5A55A 50%, #0F1923 100%);
    background-image: url('/insights/path-to-featured-image.webp');
    background-size: cover;
    background-position: center;
    aspect-ratio: 16 / 9;
}

/* Article card images */
.article-image-charcoal {
    background: linear-gradient(135deg, #1B2838 0%, #0F1923 100%);
    background-image: url('/insights/path-to-card-image.svg');
    background-size: cover;
    background-position: center;
    aspect-ratio: 16 / 9;
}

/* Dark mode adjustments (if needed for raster images) */
@media (prefers-color-scheme: dark) {
    .article-image-charcoal {
        filter: brightness(0.95) contrast(1.05);
    }
}
```

### HTML Integration Pattern

```html
<!-- Featured article card -->
<div class="featured-image featured-image-gradient" role="img" aria-label="The $5M–$50M Blind Spot: Why Growing Companies Need a CFO">
    <!-- Optional fallback text for accessibility; remove if using proper alt attribute elsewhere -->
</div>

<!-- Article grid card with lazy-loading -->
<div class="article-card">
    <div class="article-image article-image-charcoal" role="img" aria-label="Abstract visualization of M&A deal value compression">
        <!-- Lazy-loaded background image via CSS; no <img> tag needed if using background-image -->
    </div>
    <div class="article-body">
        <!-- Card content -->
    </div>
</div>

<!-- Related article card with picture element for responsive images -->
<article class="related-card">
    <picture>
        <source media="(min-width: 1024px)" srcset="/insights/related-card-2-1024.webp">
        <source srcset="/insights/related-card-2-600.webp">
        <img src="/insights/related-card-2-600.webp" alt="Abstract visualization of system transformation and technology transition" loading="lazy">
    </picture>
    <!-- Card content -->
</article>
```

---

## Cost & Timeline Estimate

| Image | Model | Effort | Cost | Timeline |
|-------|-------|--------|------|----------|
| Featured Hero (1) | DALL-E 3 | 2 prompts max | ~$0.50 | <5 min |
| M&A Card (2) | Claude SVG | 1 prompt | $0 | <10 min |
| Cash Flow Card (3) | Claude SVG | 1 prompt | $0 | <10 min |
| NetSuite Card (4) | Gemini | 1–2 prompts | ~$0 (free tier) | <10 min |
| Models Card (5) | DALL-E 3 | 2 prompts max | ~$0.50 | <5 min |
| Acquisitions Card (6) | DALL-E 3 | 2 prompts max | ~$0.50 | <5 min |
| Booking Card (7) | Claude SVG | 1 prompt | $0 | <10 min |
| Cash Flow Related (8) | Reuse #3 | — | $0 | — |
| Accounting Card (9) | Gemini | 1–2 prompts | ~$0 (free tier) | <10 min |
| Data Room Card (10) | Claude SVG | 1 prompt | $0 | <10 min |
| **Total** | Mixed | ~15 iterations | **~$3–5** | **2–3 hours** |

---

## Quality Assurance

### Visual Consistency Check
- [ ] All images maintain charcoal + gold + ivory palette consistency
- [ ] SVG images have consistent line weight (suggest 1–2px for fine detail, 3–4px for primary elements)
- [ ] Editorial photography (Gemini) maintains consistent color temperature and mood
- [ ] No image is recognizably stock photography (check reverse image search if unsure)

### Accessibility Check
- [ ] All images have descriptive alt text (no alt="image" or alt="")
- [ ] Color contrast passes WCAG AA even without the image (CSS gradient fallback provides acceptable contrast)
- [ ] SVG images have role="img" on parent container, not on SVG element itself
- [ ] Images load gracefully on slow networks (WebP format + lazy-loading)

### Brand Coherence Check
- [ ] Featured hero image reflects sophistication and professional authority
- [ ] Card images are visually distinct from each other (not generic duplicates)
- [ ] No image suggests financial risk, instability, or unprepared state (positive framing only)
- [ ] Color palette reinforces confidence and premium positioning (not playful or casual)

---

## Revision Log

| Date | Image ID | Change | Reason |
|------|----------|--------|--------|
| 2026-02-16 | All | Initial prompt mapping created | Standardize AI generation across insights pages |

---

## Support & References

- **Brand Palette**: See CLAUDE.md Brand Tokens section
- **Image Strategy Skill**: `/mnt/.claude/skills/web-design-system/references/image-strategy.md`
- **Data Visualization Guide**: `/mnt/.claude/skills/web-design-system/references/data-visualization.md`
- **Accessibility Standards**: `/mnt/.claude/skills/web-design-system/references/accessibility.md`
- **Claude SVG Generation**: Ask Claude directly for SVG code with `role="img"` wrapper and CSS custom property compatibility

---

**Last Updated**: 2026-02-16
**Maintained By**: Newport Pembury & Co Design System
**Version**: 1.0.0
