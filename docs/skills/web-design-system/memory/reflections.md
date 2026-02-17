# Reflections — Episodic Memory

> This file is the episodic memory buffer for the self-adjustment protocol. Each entry records a gap we found, why it existed, and how we evolved the skill to prevent recurrence. Inspired by Reflexion (Shinn et al., 2023) — verbal reinforcement signals stored as persistent memory.

## Entry Template

```
### REF-XXX — [Date] — [Severity]
**Gap**: What was the deficiency?
**Root Cause**: Missing | Unclear | Incomplete | Buried | Contradictory | Ignored
**Detection Method**: How was this found?
**Skill File**: Which file should have prevented it?
**Generalised Pattern**: The abstract lesson (not just this instance)
**Prevention Rule**: The exact rule added/updated
**Skill Update**: What changed in which file
**Status**: Active | Resolved (resolved = codified in skill with 0 repeat defects)
```

---

## Active Reflections

### REF-001 — 2026-02-12 — Major
**Gap**: Design tokens existed only as flat colour lists with no semantic naming, no governance framework, and no component-level mapping. CSS used hardcoded HEX values throughout.
**Root Cause**: Incomplete — original design-tokens.md had palettes but no architecture.
**Detection Method**: Design token gap analysis comparing our system against industry standards.
**Skill File**: references/design-tokens.md
**Generalised Pattern**: A colour palette is not a design system. Tokens need three tiers (primitive → semantic → component) to prevent hardcoded values from proliferating. Without governance, developers will always take shortcuts.
**Prevention Rule**: "90% of UI should reference Tier 2 (semantic) tokens. Never apply Tier 1 (primitive) values directly to components. No hardcoded HEX or pixel values in CSS."
**Skill Update**: Added 3-Tier Token Architecture to design-tokens.md. Added governance enforcement as Core Workflow step 6 in SKILL.md.
**Status**: Active — monitoring for hardcoded values in new builds

### REF-002 — 2026-02-12 — Major
**Gap**: Dark mode had white text on near-white backgrounds, making content unreadable. Theme toggle was a confusing 3-state switch (light/dark/system) that most users wouldn't understand.
**Root Cause**: Missing — no dark mode colour mapping existed in the design tokens. Toggle UX had no rule about simplicity.
**Detection Method**: Visual QA after dark mode implementation.
**Skill File**: references/design-tokens.md, references/conversion-rules.md
**Generalised Pattern**: Every light mode token needs an explicit dark mode counterpart. UI controls should use the simplest model that serves the user — a binary toggle, not a tri-state.
**Prevention Rule**: "Dark mode requires explicit semantic token mapping for every surface, text, and border colour. Prefer binary toggles (light/dark) over tri-state (light/dark/system) for user-facing controls."
**Skill Update**: Added dark mode token mapping to design-tokens.md. Simplified toggle guidance in conversion-rules.md.
**Status**: Resolved — dark mode tokens now comprehensive, toggle simplified

### REF-003 — 2026-02-12 — Major
**Gap**: Navbar had inconsistent font sizes, bare `<a>` tags without semantic `<ul>/<li>` lists, "Home" and "Get in Touch" as redundant links, title case instead of sentence case, CTA floating outside nav structure, theme toggle in wrong position.
**Root Cause**: Missing — no navbar specification existed in skill files. The initial build used ad hoc patterns.
**Detection Method**: 15-criteria navigation scorecard applied during site governance audit.
**Skill File**: SKILL.md (no nav spec existed)
**Generalised Pattern**: Navigation is the most-viewed component on every page. It needs a rigid specification — exact link order, exact text, exact semantic markup, exact positioning of utility elements (CTA, toggle). Ad hoc navigation leads to rapid drift.
**Prevention Rule**: Cross-Page Consistency Checklist → Header/Navigation section (8 specific checks).
**Skill Update**: Added Header/Navigation checklist to SKILL.md with 8 mandatory checks including semantic markup, link order, CTA text, toggle positioning, and aria-controls.
**Status**: Resolved — navbar standardised across all pages

### REF-004 — 2026-02-13 — Major
**Gap**: 3 different footer patterns across 8 pages: (a) inline-styled footers with wrong service labels, (b) CSS-class footers but bare `<a>` tags without semantic `<nav>`/`<ul>`, (c) extra "Legal" column that didn't exist on other pages.
**Root Cause**: Missing — no footer specification existed. Each page's footer was built independently.
**Detection Method**: Cross-page HTML comparison during site governance audit.
**Skill File**: SKILL.md (no footer spec existed)
**Generalised Pattern**: Any shared component (header, footer, CTA banner) will drift if there's no canonical HTML pattern enforced. "Copy from homepage" is not a specification — it allows interpretation. The canonical pattern must list exact class names, exact labels, exact hrefs, and exact semantic markup.
**Prevention Rule**: Cross-Page Consistency Checklist → Footer section (10 specific checks) + Common Mistakes to Catch section.
**Skill Update**: Added Footer checklist (10 items), CTA Banners checklist (8 items), Brand Consistency checklist (7 items), and Common Mistakes section to SKILL.md.
**Status**: Resolved — footer standardised across all 8 pages, canonical pattern documented

### REF-005 — 2026-02-13 — Enhancement
**Gap**: No mechanism existed to learn from reviews. Gaps were found and fixed, but the same classes of issues could recur because skill files weren't updated systematically.
**Root Cause**: Missing — no self-adjustment or reflection protocol existed.
**Detection Method**: User observation that fixes should feed back into skill evolution.
**Skill File**: None existed
**Generalised Pattern**: A design system without a feedback loop is static. Static systems accumulate drift. The system needs a closed loop: detect → fix → reflect → update → verify → log. Every substantial gap must trigger a skill evolution in the same session.
**Prevention Rule**: The DFRUVL protocol in self-adjustment.md.
**Skill Update**: Created references/self-adjustment.md, memory/reflections.md, CHANGELOG.md. Integrated into SKILL.md Core Workflow.
**Status**: Active — this is the reflection about the reflection system itself (meta-reflection)

---

## Patterns Observed

### Pattern P-001: Shared Components Drift Without Canonical Specs
**Reflections**: REF-003, REF-004
**Observation**: Header (REF-003) and footer (REF-004) both drifted independently because no canonical HTML pattern was documented. This will apply to any shared component — CTA banners, sidebar widgets, breadcrumbs, meta tags.
**Implication**: Before building any new shared component, write the canonical spec FIRST. Don't build and then document — document and then build.

### Pattern P-002: Rules Without Exact Values Get Ignored
**Reflections**: REF-001, REF-002
**Observation**: "Use design tokens" is too vague — you need "90% Tier 2, 0% hardcoded HEX". "Support dark mode" is too vague — you need explicit token mapping for every semantic category. Precision prevents interpretation.
**Implication**: Every rule should include a testable assertion with a numeric threshold or exact string match.

### Pattern P-003: Missing Rules Are More Common Than Ignored Rules
**Reflections**: REF-001, REF-002, REF-003, REF-004
**Observation**: In 4 out of 5 reflections, the root cause was "missing rule" — the skill files simply didn't cover the scenario. This suggests the skill system is still in its growth phase (curriculum Level 1-2) and needs breadth before depth.
**Implication**: Prioritise coverage (more rules across more domains) over depth (more nuance in existing rules) during the current phase.

### REF-006 — 2026-02-13 — Critical
**Gap**: Hero image on index.html had `alt=""`, making screen readers skip the most prominent visual. The `<picture>` element's `<img>` tag was empty, violating WCAG 2.2 AA Success Criterion 1.1.1 (Non-text Content).
**Root Cause**: Incomplete — accessibility.md states "All images have alt text" but doesn't specify that hero/above-the-fold images are highest priority or that `alt=""` is only acceptable for truly decorative images.
**Detection Method**: Site governance audit — HTML structure and accessibility dimension.
**Skill File**: references/accessibility.md, SKILL.md Testing Checklist
**Generalised Pattern**: A generic "images have alt text" rule is insufficient. It must distinguish between decorative images (where `alt=""` is correct) and content images (where `alt=""` is a critical defect). Hero images, author photos, and data visualisations are never decorative.
**Prevention Rule**: "Hero images, author photos, and informational graphics must have descriptive alt text (15-125 characters). Only use alt='' for purely decorative elements (borders, spacers, background textures). Review alt text during cross-page consistency checks."
**Skill Update**: Added image alt text classification rule to accessibility.md. Added to Testing Checklist in SKILL.md.
**Status**: Resolved — hero image now has descriptive alt text

### REF-007 — 2026-02-13 — Critical
**Gap**: FAQ accordion on contact.html used `<div role="button" tabindex="0">` instead of native `<button>` elements. This creates fragile keyboard navigation — the div requires manual keydown handlers for Enter and Space, and won't receive native browser button behaviour.
**Root Cause**: Missing — no accordion pattern specification existed in skill files. The ARIA Authoring Practices Guide recommends native `<button>` elements for disclosure patterns.
**Detection Method**: Site governance audit — HTML structure and accessibility dimension.
**Skill File**: references/accessibility.md
**Generalised Pattern**: Never use `<div role="button">` when `<button>` exists. Native HTML elements carry built-in keyboard handling, focus management, and assistive technology support that synthetic ARIA roles can only approximate. This applies to all interactive patterns: buttons, links, inputs, selects.
**Prevention Rule**: "Always use native HTML elements over ARIA role equivalents: <button> not <div role='button'>, <a href> not <span role='link'>, <input> not <div contenteditable>. Add to Common Mistakes checklist."
**Skill Update**: Added native element preference rule to accessibility.md. Added to SKILL.md Common Mistakes section.
**Status**: Resolved — accordion now uses native <button> elements

### REF-008 — 2026-02-13 — Major
**Gap**: Contact form error indicators used fallback HEX `#c0392b` instead of canonical error token `#DC3545`. Inline CTA button styles on insights pages duplicated CSS class properties. Theme-color meta tag missing from 4 pages and invalid (using CSS var()) on 1 page.
**Root Cause**: Incomplete — token governance rule says "no hardcoded HEX" but doesn't address: (a) CSS var() fallback values, (b) meta tag attributes where CSS vars are invalid, (c) inline styles that duplicate existing CSS classes.
**Detection Method**: Site governance audit — design token governance dimension.
**Skill File**: references/design-tokens.md, SKILL.md
**Generalised Pattern**: Token governance needs to cover three edge cases that the core rule misses: (1) fallback values in var() must match canonical tokens, (2) HTML attributes that can't use CSS vars (meta tags, SVG attributes) should reference the documented primitive value, (3) inline styles that duplicate CSS classes should be removed, not "tokenised".
**Prevention Rule**: "var() fallback values must match the canonical primitive token. Meta tag values (theme-color, og:image colors) must use the documented HEX value, not var() references. If an element has a CSS class that provides the styling, remove inline styles — don't tokenise them."
**Skill Update**: Added var() fallback rule and meta tag exception to design-tokens.md. Added inline style duplication to Common Mistakes in SKILL.md.
**Status**: Resolved — fallbacks corrected, meta tags fixed, inline duplicates removed

### REF-009 — 2026-02-13 — Major
**Gap**: CTA banner used 3 different HTML patterns across pages: index.html used `.cta-banner` + `.cta-banner-content` + `.btn .btn-primary`, about.html used `.cta-content` + `.cta-headline` + `.cta-button` with inline overrides, services.html used entirely inline styles with no `.cta-banner` class at all. Additionally, main.css contained 5 different button class systems (`.btn-primary`, `.cta-btn-primary`, `.cta-button`, `.hero-cta-btn`, `.mid-cta-btn`).
**Root Cause**: Missing — the CTA Banners checklist in SKILL.md said "CTA buttons use `.btn .btn-primary` classes or `.cta-button` class" — offering two alternatives instead of mandating one canonical pattern. No canonical HTML template was documented.
**Detection Method**: Site governance audit — cross-page consistency dimension.
**Skill File**: SKILL.md Cross-Page Consistency Checklist → CTA Banners section
**Generalised Pattern**: When a checklist says "use X or Y", it permits divergence. Shared components need ONE canonical pattern, not alternatives. The checklist must include the exact HTML template, the exact class names, and the rule "zero inline styles". This directly confirms Pattern P-001 (shared components drift without canonical specs) — the CTA banner is the third case after header (REF-003) and footer (REF-004).
**Prevention Rule**: Canonical CTA banner HTML template added to SKILL.md with exact structure: `<section class="cta-banner">` → `.cta-banner-content scroll-reveal` → `.cta-subtitle` → `h2` → `p` → `.cta-buttons` → `.cta-btn-primary` + `.cta-btn-ghost`. Rule: "Zero inline style= attributes anywhere in the CTA banner section." Button classes consolidated to `.cta-btn-primary` and `.cta-btn-ghost` only.
**Skill Update**: Replaced CTA Banners checklist in SKILL.md with canonical HTML template + 11 specific checks. Consolidated button class guidance from "use X or Y" to "use .cta-btn-primary only".
**Status**: Resolved — all standard CTA banners now use canonical pattern

### REF-010 — 2026-02-13 — Critical
**Gap**: Token governance scored 6.8/10 despite 113 tokens defined in :root. Root cause analysis revealed: (a) 70% of tokens (79 of 113) were defined but never referenced in component CSS — dead code giving a false sense of governance. (b) 130 inline `style=` attributes across 8 pages bypassed the token system entirely — footer `<ul>` lists alone accounted for 12 identical inline declarations. (c) No font-size, animation-duration, or article-category colour tokens existed, so developers had no tokens to reference. (d) The SKILL.md testing checklist said "design tokens applied correctly" with no verifiable assertion — no way to count violations.
**Root Cause**: Incomplete + Ignored — the token architecture was defined top-down (create :root vars) but never applied bottom-up (audit actual code, build classes, wire up usage). Rules said "no hardcoded values" but provided no verification mechanism and no utility classes to use instead.
**Detection Method**: Deep root cause analysis with 5-question diagnostic framework.
**Skill File**: SKILL.md, references/design-tokens.md
**Generalised Pattern**: Confirms and extends P-002 (rules without exact values) and P-005 (new). Tokens without consumers are dead code. Rules without verification are wishes. The fix required three simultaneous actions: (1) add missing token categories, (2) create utility CSS classes, (3) add testable checklist assertions.
**Prevention Rule**: Added "Token Governance Checklist" to SKILL.md with grep-based verifiable assertions for inline styles (<20 results), hardcoded HEX (0 results), dead tokens (0 defined-but-unused), and coverage thresholds (80%+ for font-size and spacing). Created 25+ utility classes (.footer-list, .label-uppercase, .pricing-amount, etc.) to provide a governed alternative to inline styles.
**Skill Update**: Added --font-size-*, --duration-*, --color-category-*, --color-*-bg/border/dark tokens to :root. Created utility classes in section 1b. Replaced 14 hardcoded HEX in component CSS. Stripped 32 inline styles from 8 HTML pages. Added Token Governance Checklist with verifiable assertions.
**Status**: In progress — inline style count reduced from 130 to 94, hardcoded HEX in component CSS reduced from 19 to 0. Further work needed on services.html (31 remaining) and insights/index.html (43 remaining).

### REF-011 — 2026-02-17 — Major
**Gap**: Tailwind CDN (cdn.tailwindcss.com) still loaded on contact.html, M&A article, privacy.html, and terms.html — despite being removed from insights hub during the 4-phase overhaul. Creates token duplication (Tailwind config hardcodes brand HEX values that duplicate main.css tokens) and performance variance.
**Root Cause**: Incomplete — CDN removal was executed per-page during insights overhaul, not as a site-wide sweep. No "zero CDN" assertion existed in testing checklist.
**Detection Method**: Cross-AI full site review (Claude + ChatGPT + Gemini, 2026-02-17).
**Skill File**: SKILL.md Testing Checklist
**Generalised Pattern**: Per-page fixes create inconsistency if not followed by a site-wide sweep. Any change to shared infrastructure (CSS loading, meta tags, schema) must be applied to ALL pages in the same session. Confirms P-001.
**Prevention Rule**: "After any infrastructure change (CSS source, font loading, meta tag pattern), grep ALL HTML files to confirm consistency. Testing Checklist: 'Tailwind CDN removed from ALL pages (grep for cdn.tailwindcss.com — 0 results)'."
**Skill Update**: Add CDN removal check to SKILL.md Testing Checklist.
**Status**: Active — awaiting fix execution

### REF-012 — 2026-02-17 — Major
**Gap**: Contact form has 6+ fields (name, email, phone, company, revenue range, checkboxes, message) violating the "3 fields max for highest conversion" rule documented in conversion-rules.md.
**Root Cause**: Ignored — the rule existed but wasn't applied during contact page build. No verification mechanism caught it.
**Detection Method**: Cross-AI full site review — all 3 AIs flagged this independently.
**Skill File**: references/conversion-rules.md, SKILL.md Testing Checklist
**Generalised Pattern**: Conversion rules that lack a verifiable checklist item get bypassed during builds. "3 fields max" was prose buried in a reference file, not a checkable assertion.
**Prevention Rule**: "Contact/lead forms: count visible required fields. Maximum 3 for first-touch forms (Name, Email, Message). Move qualification fields to post-submission step. Testing Checklist: 'Primary lead form has ≤3 visible fields'."
**Skill Update**: Promote form field limit to SKILL.md Testing Checklist with count assertion.
**Status**: Active — awaiting fix execution

### REF-013 — 2026-02-17 — Major
**Gap**: CTA text varies across pages: "Book My Free Call" (canonical), "Get My Free Diagnostic" (contact hero), "Get the M&A Readiness Checklist" (article mid-CTA). No canonical CTA copy rule existed.
**Root Cause**: Missing — SKILL.md CTA Banners checklist specifies HTML structure but not copy text. REF-009 fixed structural drift but didn't address textual drift.
**Detection Method**: Cross-AI full site review (ChatGPT + Claude flagged).
**Skill File**: SKILL.md Cross-Page Consistency Checklist
**Generalised Pattern**: Structural consistency (HTML/CSS) and textual consistency (copy, labels) are separate failure modes. REF-009 solved structure; this gap shows copy needs its own canonical rule. Extends P-001 to cover content drift, not just markup drift.
**Prevention Rule**: "CTA Copy Governance: Primary CTA = 'Book My Free Call' (canonical). Secondary CTA = 'Email Timothy Directly'. Content-specific CTAs (checklist downloads, newsletter) are permitted on their own pages but must NOT replace the primary CTA in shared components (nav, footer, CTA banner)."
**Skill Update**: Add CTA Copy Governance section to SKILL.md.
**Status**: Active — awaiting fix execution

### REF-014 — 2026-02-17 — Minor
**Gap**: Privacy and terms pages have 10-13 equally-weighted sections with no visual hierarchy aids (styled numbers, dividers, icons). Creates scanning fatigue.
**Root Cause**: Missing — no legal/policy page template exists in skill files. All templates focus on marketing pages.
**Detection Method**: Cross-AI full site review (Claude flagged).
**Skill File**: references/ux-architecture.md (Page Architecture Patterns section)
**Generalised Pattern**: Non-marketing pages (legal, policy, FAQ) also need design system treatment. A design system that only covers hero sections and service cards leaves utility pages looking unfinished.
**Prevention Rule**: "Legal/policy pages: style section numbers (gold, bold), add horizontal dividers between major sections, constrain body text to max-width 65ch. Apply same typography hierarchy as content pages."
**Skill Update**: Add Legal Page Template to ux-architecture.md Page Architecture Patterns.
**Status**: Active — awaiting fix execution

### REF-015 — 2026-02-17 — Minor
**Gap**: Sticky mobile CTA ("Book My Free Call") appears on privacy.html and terms.html. A sales CTA on legal pages undermines credibility and creates perception of consent pressure.
**Root Cause**: Missing — no rule about context-inappropriate CTA placement.
**Detection Method**: Cross-AI full site review (Claude flagged).
**Skill File**: references/conversion-rules.md
**Generalised Pattern**: CTAs should be omitted from pages where the user's mindset is legal/compliance, not purchase. Persistent sales CTAs on policy pages signal "we're trying to sell you while you read our legal terms."
**Prevention Rule**: "Hide persistent sales CTAs (sticky footer, floating buttons) on /privacy and /terms pages. Add body class `no-sticky-cta` and CSS rule to hide. Navigation CTA (in-nav button) is acceptable."
**Skill Update**: Add context-appropriate CTA rule to conversion-rules.md.
**Status**: Active — awaiting fix execution

### REF-016 — 2026-02-17 — Minor
**Gap**: Focus rings use default browser blue outline instead of brand-matched gold. Visually jarring on a charcoal/gold palette.
**Root Cause**: Incomplete — accessibility.md says "visible focus indicators" but doesn't specify brand styling.
**Detection Method**: Cross-AI full site review (Gemini flagged).
**Skill File**: references/accessibility.md
**Generalised Pattern**: Accessibility rules often specify the WHAT (focus must be visible) but not the HOW (what does it look like in our brand). Brand-matched accessibility features feel intentional; default browser features feel like oversights.
**Prevention Rule**: "Focus indicators: `*:focus-visible { outline: 2px solid var(--color-action-primary); outline-offset: 2px; }`. Remove default blue outline. Ensure 3:1 contrast against adjacent backgrounds."
**Skill Update**: Add brand-matched focus ring specification to accessibility.md.
**Status**: Active — awaiting fix execution

---

## Patterns Observed (Updated)

### Pattern P-001: Shared Components Drift Without Canonical Specs
**Reflections**: REF-003, REF-004, REF-009, REF-011, REF-013, REF-018, REF-019, REF-021, REF-025
**Observation**: Header (REF-003), footer (REF-004), CTA banners (REF-009), CDN loading (REF-011), CTA copy (REF-013, REF-018), services page CTAs (REF-019, REF-025), and lead magnet strategy (REF-021) all drifted independently. R8 added service card CTAs (REF-025) — even after canonical rules existed, new page sections introduced without templates defaulted to generic copy.
**Implication**: Before building any new shared component, write the canonical spec for structure, styling, AND copy. Apply changes site-wide in a single pass, not page-by-page. Page-specific templates (services, articles) also need canonical CTA rules.

### Pattern P-002: Rules Without Exact Values Get Ignored
**Reflections**: REF-001, REF-002, REF-008, REF-012
**Observation**: "Use design tokens" is too vague — you need "90% Tier 2, 0% hardcoded HEX". "Support dark mode" is too vague — you need explicit token mapping for every semantic category. "No hardcoded HEX" needs to specify what about fallback values and meta tags. Precision prevents interpretation.
**Implication**: Every rule should include a testable assertion with a numeric threshold or exact string match, AND explicitly address edge cases.

### Pattern P-003: Missing Rules Are More Common Than Ignored Rules
**Reflections**: REF-001, REF-002, REF-003, REF-004, REF-007, REF-013, REF-014, REF-015, REF-017, REF-019, REF-020, REF-021, REF-025, REF-026, REF-030
**Observation**: In 16 out of 28 reflections, the root cause was "missing rule" (57%). R8 added two: page-specific CTA templates (REF-025) and inline style prevention gate (REF-026). The skill system is expanding but gaps remain in: deployment procedures, form state management, SVG accessibility, and font loading strategy. Many R8 fixes were adding missing skill rules rather than fixing code.
**Implication**: Prioritise coverage (more rules across more domains) over depth (more nuance in existing rules). The skill system is nearing breadth completion for the current 8-page site.

### Pattern P-005: Tokens Without Consumers Are Dead Code
**Reflections**: REF-010
**Observation**: 79 of 113 CSS custom properties in :root were defined but never referenced in component CSS or HTML. The token system looked comprehensive on paper but had zero governance impact. Defining a token and using it are two separate acts — defining without using creates maintenance overhead and false confidence. Conversely, CSS classes must exist BEFORE you can tell developers to stop using inline styles.
**Implication**: After defining any new token, immediately wire it into at least one consumer (CSS rule or utility class). After every batch of token additions, audit for dead tokens and prune or connect them.

### Pattern P-004: Generic Rules Need Classification Specificity
**Reflections**: REF-006, REF-008, REF-016, REF-022, REF-029
**Observation**: "Images have alt text" doesn't distinguish decorative from content images. "No hardcoded HEX" doesn't address fallbacks or meta tags. "SVGs have alt text" doesn't work because SVGs are containers, not images. Generic rules create false confidence — they look complete but leave gaps for specific sub-categories.
**Implication**: When writing a rule, ask: "Are there sub-types where this rule applies differently?" If yes, document each sub-type explicitly.

### Pattern P-006: Deployment & Environment Configuration
**Reflections**: REF-017
**Observation**: Code works in local development but fails in production because environment-dependent configuration (API keys, email addresses, endpoint URLs) isn't verified during deployment. The function exists, the HTML wires to it, but the env var that makes it actually send email was never set.
**Implication**: Deployment checklists must include step-by-step verification of every environment variable used by production code. "Code deployed" ≠ "feature working."

---

### REF-017 — 2026-02-17 — Critical
**Gap**: Contact form endpoint (functions/api/contact.js) exists but is not activated. CONTACT_EMAIL environment variable is not set on Cloudflare Pages. Form submissions are accepted by the UI but discarded server-side — zero leads collected.
**Root Cause**: Missing — no deployment checklist in SKILL.md covers environment variable configuration for Cloudflare Functions.
**Detection Method**: Cross-AI full site review Round 2 (Claude source code inspection).
**Skill File**: SKILL.md (Deployment section)
**Generalised Pattern**: Serverless function deployment requires bridging local development (where env vars exist) to production (where they must be explicitly set). Without a deployment checklist, critical configuration gets forgotten. Pattern P-006.
**Prevention Rule**: "Deployment Checklist: (1) Verify functions/api/contact.js exists, (2) Confirm CONTACT_EMAIL is set in Cloudflare Pages environment settings, (3) Send test submission to verify email delivery, (4) Check Cloudflare Pages Functions logs for errors."
**Skill Update**: Add Deployment Checklist to SKILL.md.
**Status**: Active — blocking lead collection

### REF-018 — 2026-02-17 — Major
**Gap**: CTA language has re-diverged since REF-013 fix. Current variants: "Get My Free Strategy Call" (canonical), "Strategy Session" (contact hero), "Request My Strategy Session" (contact button), "Financial Diagnostic" (services). REF-013 fixed 23 instances of the old copy but missed contextual variants introduced during the same update.
**Root Cause**: Incomplete — REF-013's canonical was "Book My Free Call" which was later changed to "Get My Free Strategy Call". The rule wasn't updated after the change, and secondary CTA variants weren't addressed.
**Detection Method**: Cross-AI full site review Round 2 (ChatGPT + Claude independently flagged).
**Skill File**: SKILL.md CTA Copy Governance section
**Generalised Pattern**: When a canonical value changes, the rule AND all instances must be swept again. Changing primary copy without updating secondary patterns creates asymmetry. Extends P-001 to copy governance.
**Prevention Rule**: "CTA Copy Hierarchy: Primary = 'Get My Free Strategy Call' (exact, no variants). Prohibited variants: 'Strategy Session', 'Financial Diagnostic', 'Strategy Call', 'Free Consultation'. Testing: grep all HTML for 'Session', 'Diagnostic', 'Consultation' — 0 results in CTAs."
**Skill Update**: Expand CTA Copy Governance in SKILL.md. Add prohibited variants list.
**Status**: Active — awaiting fix execution

### REF-019 — 2026-02-17 — Major
**Gap**: Services page has 4 service sections each with a distinct CTA verb: "Discuss Your Transaction", "See the Dashboard", "Start My AI Transformation". Creates cognitive overload — 4+ competing primary actions instead of funnelling to one.
**Root Cause**: Missing — no services page template exists in skill files. Each service section was designed ad hoc.
**Detection Method**: Cross-AI full site review Round 2 (Claude + ChatGPT independently flagged).
**Skill File**: references/ux-architecture.md (Page Architecture Patterns)
**Generalised Pattern**: Page-specific templates need their own canonical CTA rules. The design system covers shared components (header, footer) but not page-specific conversion patterns. Extends P-001 to page templates.
**Prevention Rule**: "Services Page: All service sections use maximum 2 CTA types: (1) Primary = 'Get My Free Strategy Call' (links to /contact), (2) Secondary = 'Learn More' (expands or deep-links). Prohibited: custom verbs per service."
**Skill Update**: Add Services Page Template to ux-architecture.md.
**Status**: Active — awaiting fix execution

### REF-020 — 2026-02-17 — Major
**Gap**: Contact page displays a success message ("Success! Your message has been received...") in the default page load state, visible before user submits the form. Trust violation — users see confirmation without action.
**Root Cause**: Incomplete — form validation and success state logic exists but no visibility rule specified whether success message should be hidden on initial load.
**Detection Method**: Cross-AI full site review Round 2 (ChatGPT flagged as "trust killer").
**Skill File**: references/conversion-rules.md, SKILL.md Testing Checklist
**Generalised Pattern**: Form state management requires explicit rules for initial state, input state, validation state, and submission state. Forms without state-specific visibility rules leak states.
**Prevention Rule**: "Form success state: hidden attribute or display:none on page load. Visible ONLY after successful submission. Testing: view contact.html in fresh tab — success message not visible."
**Skill Update**: Add Form State Management section to conversion-rules.md.
**Status**: Active — awaiting fix execution

### REF-021 — 2026-02-17 — Moderate
**Gap**: 3+ competing lead magnets: Strategy Call (primary nav/footer), email-gated M&A Checklist (mid-article), newsletter capture (insights hub). Splits intent and dilutes premium CFO positioning.
**Root Cause**: Missing — no lead magnet strategy or hierarchy exists in conversion-rules.md. Magnets added page-by-page without coordination.
**Detection Method**: Cross-AI full site review Round 2 (Claude + ChatGPT flagged).
**Skill File**: references/conversion-rules.md
**Generalised Pattern**: Lead magnet strategy is a shared conversion architecture element — needs a declared hierarchy, not emergent plurality. Extends P-001 to conversion strategy.
**Prevention Rule**: "Lead Magnet Hierarchy: Primary = Strategy Call (all pages). Secondary = content lead magnets (articles only, max 1 per article, ~50% scroll depth). Tertiary = newsletter (insights hub footer only). Homepage + services = primary CTA only."
**Skill Update**: Add Lead Magnet Strategy section to conversion-rules.md.
**Status**: Active — awaiting fix execution

### REF-022 — 2026-02-17 — Moderate
**Gap**: Inline SVG diagrams lack role="img" and aria-label. Screen readers announce individual SVG child elements instead of treating diagrams as cohesive data visualizations.
**Root Cause**: Incomplete — accessibility.md says "images have alt text" but doesn't specify that inline SVGs require role="img" + aria-label as a wrapper, not alt on individual paths.
**Detection Method**: Cross-AI full site review Round 2 (Claude + Gemini flagged).
**Skill File**: references/accessibility.md
**Generalised Pattern**: SVGs are containers with many children, not images. Treating them like <img> tags leads to incomplete accessibility coverage. Extends P-004.
**Prevention Rule**: "SVG Data Visualizations: Wrap with <figure role='img' aria-label='[Chart title and key insight]'><svg>...</svg></figure>."
**Skill Update**: Add SVG diagram accessibility rule to accessibility.md.
**Status**: Active — awaiting fix execution

### REF-023 — 2026-02-17 — Minor
**Gap**: Web fonts (Cormorant Garamond, DM Sans) cause flash of unstyled text (FOUT) on load.
**Root Cause**: Incomplete — font-display CSS property not optimised. No font preload strategy documented.
**Detection Method**: Cross-AI full site review Round 2 (Gemini flagged).
**Skill File**: references/premium-polish.md
**Generalised Pattern**: Web font loading has performance/UX tradeoffs. Rules should declare the strategy explicitly.
**Prevention Rule**: "font-display: optional for headings, swap for body. Preload critical font weights. Testing: disable web fonts → page readable in fallback."
**Skill Update**: Add Font Loading Strategy to premium-polish.md.
**Status**: Active — awaiting fix execution

### REF-024 — 2026-02-17 — Minor
**Gap**: Footer links on mobile (375px) have insufficient touch target spacing. Links cluster with <8px padding, creating misclick risk.
**Root Cause**: Incomplete — footer template (REF-004) specifies HTML structure but not mobile spacing rules.
**Detection Method**: Cross-AI full site review Round 2 (ChatGPT + Gemini flagged).
**Skill File**: references/accessibility.md, SKILL.md
**Generalised Pattern**: Extends P-002. "Touch-friendly" is too vague. Rules need explicit dimensions (48x48px minimum, 8px spacing).
**Prevention Rule**: "Footer touch targets: ≥48x48px per link, ≥8px gap between adjacent items. Testing: 375px mobile view — all footer links tappable without misclick risk."
**Skill Update**: Add touch target spacing rule to accessibility.md.
**Status**: Active — awaiting fix execution

### REF-025 — 2026-02-17 — Major (R8)
**Gap**: Homepage service cards and services engagement cards all used generic "Get Started →" CTA text. 4 homepage cards + 3 engagement cards = 7 identical generic CTAs competing for attention with no intent differentiation.
**Root Cause**: Missing — no page-specific CTA template existed. SKILL.md CTA Copy Governance covered primary/secondary CTAs but not card-level CTAs within page sections.
**Detection Method**: Cross-AI R8 review (Claude source code + ChatGPT browser both flagged independently).
**Skill File**: SKILL.md (Page-Specific CTA Templates — new section)
**Generalised Pattern**: CTA taxonomy drift is the #1 persistent defect across R1-R8 (flagged in R2, R4, R6, R7, R8). Generic verbs ("Get Started", "Learn More", "Submit") reintroduce themselves every 1-2 rounds because they're the path of least resistance. Prevention requires an explicit prohibited list AND page-specific alternatives.
**Prevention Rule**: "Page-Specific CTA Templates added to SKILL.md with exact text for each card. Prohibited: 'Get Started' anywhere in CTA buttons (grep test: 0 results). Each service card maps to a specific intent verb."
**Skill Update**: Added Page-Specific CTA Templates section to SKILL.md with 4 homepage service card CTAs, 3 services engagement card CTAs, and article CTA rules. Added "Get Started" to prohibited variants in conversion-rules.md CTA Copy Governance.
**Status**: Resolved — all 7 generic CTAs replaced with intent-specific copy (R8 + R8b commits)

### REF-026 — 2026-02-17 — Major (R8)
**Gap**: 15+ inline `style=` attributes persisted across 7 pages despite REF-010's reduction effort (130 → 94). New inline styles were introduced during subsequent builds (newsletter sections, mobile CTA, proof object, engagement pricing).
**Root Cause**: Missing — no pre-build gate existed to prevent NEW inline styles from being introduced. REF-010 reduced existing inline styles but didn't prevent new ones.
**Detection Method**: Cross-AI R8 review (Claude source code inspection found hardcoded #ef4444, inline widths, inline backgrounds).
**Skill File**: SKILL.md (Inline Style Prevention Rule — new section)
**Generalised Pattern**: Inline styles are a hydra — fix 10, introduce 5 more in the next build. Removal is reactive; prevention requires a proactive workflow gate: "Before writing `style=`, check if a CSS class exists. If not, create one in main.css first."
**Prevention Rule**: "Inline Style Prevention Rule: 4-step workflow added to SKILL.md. Check → Exists? → Use class. Doesn't exist? → Create class → Use class. Zero new inline styles permitted."
**Skill Update**: Added Inline Style Prevention Rule to SKILL.md. Created 12+ utility classes in main.css (R8 commit).
**Status**: Resolved — all identified inline styles replaced with CSS classes

### REF-027 — 2026-02-17 — Minor (R8)
**Gap**: ChatGPT R8 marked schema.org `hasCredential` as FAIL despite it being live and verified. Browser-based reviewers cannot inspect `<script type="application/ld+json">` content — they only see rendered DOM.
**Root Cause**: Limitation of reviewer tool — ChatGPT reviews rendered pages, not source code. Schema.org in JSON-LD is invisible to browser rendering.
**Detection Method**: Cross-AI R8 review (ChatGPT false negative, verified live via JavaScript).
**Skill File**: SKILL.md (Cross-AI Review Methodology — new section)
**Generalised Pattern**: Each AI reviewer has blind spots. ChatGPT can't see schema.org. Gemini doesn't penalise missing features (inflated scores). Claude subagent may miscount DOM elements. Documented in "What Each AI Cannot See" section.
**Prevention Rule**: "Cross-AI Review Methodology: document what each AI can and cannot evaluate. Never treat a single AI's regression FAIL as definitive without manual verification."
**Skill Update**: Added Cross-AI Review Methodology section to SKILL.md with reviewer personas, blind spots, and calibration rules.
**Status**: Resolved — methodology documented, false negatives expected and handled

### REF-028 — 2026-02-17 — Enhancement (R8)
**Gap**: After 8 rounds of iterative improvement, ChatGPT score plateaued at 8.94/10. All three AIs consistently flag trust signals as "strong but self-asserted." The remaining 0.06 to 9.0 requires verifiable external proof (client logos, named testimonials, case study metrics) — a content problem, not a code problem.
**Root Cause**: Missing — no trust signal maturity model existed. All trust elements are Level 1-2 (self-asserted credentials, structured data). Level 3-4 (social proof with names, verifiable external evidence) requires real client data.
**Detection Method**: Pattern analysis across R1-R8 scores (diminishing returns curve).
**Skill File**: references/conversion-rules.md (Trust Signal Maturity Ladder — new section)
**Generalised Pattern**: Code-level optimisation has a ceiling (~8.9). Breaking through 9.0 requires content that code can't generate: real client names, real logos, real case study metrics. The Trust Signal Maturity Ladder maps 5 levels with score impact estimates.
**Prevention Rule**: "Trust Signal Maturity Ladder: Level 1-2 (self-asserted) gets to ~8.5. Level 3 (named testimonials) +0.2. Level 4 (client logos, case studies) +0.3. Level 5 (third-party badges) +0.2. Current state: Level 2."
**Skill Update**: Added Trust Signal Maturity Ladder to conversion-rules.md with 5 levels and score impact estimates.
**Status**: Active — requires real client content (not a code fix)

---

## Patterns Observed (Updated — R8)

### Pattern P-007: CTA Taxonomy Drift Is the #1 Persistent Defect
**Reflections**: REF-013, REF-018, REF-019, REF-025
**Observation**: Generic CTA text ("Get Started", "Learn More", "Submit") reintroduced itself in R2, R4, R6, R7, and R8 despite being fixed each time. Root cause: generic verbs are the path of least resistance. Prevention requires both a prohibited list AND pre-written alternatives for every CTA placement.
**Implication**: The skill system must provide exact replacement text for every CTA position, not just rules about what NOT to write. "Don't use 'Get Started'" is insufficient without "'Use [exact alternative] instead'".

### Pattern P-008: Code Optimisation Has a Ceiling (~8.9)
**Reflections**: REF-028
**Observation**: After 8 rounds of fixes across 3 AIs, scores converge around 8.9. The remaining gap to 9.0+ is consistently "trust is self-asserted" — a content/business problem requiring real client testimonials, logos, and case studies. No amount of HTML/CSS/JS improvement bridges this gap.
**Implication**: Declare code-level optimisation substantially complete at 8.9. Next improvement phase is content: onboard first client, collect testimonial, add logo bar. Document this transition in CLAUDE.md.

### REF-029 — 2026-02-18 — Critical (R9)
**Gap**: Key Takeaways "WHAT YOU'LL LEARN" label on Cash Compass article was invisible — gold text (#806B3A) on dark background (#0F1923) = ~2.8:1 contrast ratio. Reviewer dismissed it as "faint gold — subtle but intentional" across multiple screenshots instead of flagging it as a contrast bug.
**Root Cause**: Incomplete — `.takeaway-label` used `var(--color-action-text)` (#806B3A), a token designed for light backgrounds. No dark-section token map existed to guide correct token selection. Additionally, the review process had no requirement to compute actual contrast ratios.
**Detection Method**: User visual inspection ("Is anything missing from this image?").
**Skill File**: references/accessibility.md, SKILL.md
**Generalised Pattern**: "Subtle" and "invisible" are indistinguishable without measurement. Eyeballing contrast from screenshots is unreliable — reviewers rationalise faint text as design intent. Contrast verification must be computed (getComputedStyle + WCAG formula), never visual. New Pattern P-009.
**Prevention Rule**: "Dark Background Contrast Verification Protocol: compute actual WCAG ratio for every text element on dark sections. 'Faint' = red flag, not design choice. Added dark section token quick reference to SKILL.md and accessibility.md."
**Skill Update**: Added Dark Background Verification Rule to SKILL.md. Added Dark Background Contrast Verification section to accessibility.md with token map table. Added 3 new Testing Checklist items.
**Status**: Resolved — token swapped to `var(--color-action-primary)` (#C5A55A, ~5.2:1)

### REF-030 — 2026-02-18 — Critical (R9)
**Gap**: Engagement pricing section on services.html had 5 CSS classes used in HTML but never defined in main.css: `.engagement-label`, `.engagement-secondary`, `.engagement-body`, `.engagement-recommended-badge`, `.section-heading-lg-36-inverse`. All text inherited charcoal (#1B2838) from body — invisible on dark background (#0F1923). Section appeared completely blank.
**Root Cause**: Missing — HTML was written with intended class names but the corresponding CSS rules were never created. No "class existence check" was part of the build workflow.
**Detection Method**: User visual inspection + JavaScript getComputedStyle audit showing `rgb(27, 40, 56)` on all text elements.
**Skill File**: SKILL.md
**Generalised Pattern**: HTML classes without CSS definitions are silent failures — no error, no warning, just invisible text. The build workflow must include a class existence check: every class in HTML must have a matching definition in CSS. New extension of P-003 (missing rules).
**Prevention Rule**: "Undefined CSS Class Prevention Rule: Search main.css for the class name BEFORE using it in HTML. Zero classes in HTML without CSS definitions. Added to Common Mistakes and Testing Checklist."
**Skill Update**: Added Undefined CSS Class Prevention Rule to SKILL.md. Added testing assertion to Testing Checklist.
**Status**: Resolved — 5 class definitions added, all text visible

### REF-031 — 2026-02-18 — Major (R9)
**Gap**: "Engagement Models" label on services page appeared 68px left of the "Structured to fit your stage" heading. Both had `text-align: center` but the label (a `<p>` element) was constrained to 711px by the global `p { max-width: 65ch }` rule, while the `<h2>` had no max-width (848px). Both started at the same left edge, so the label centred within its narrower box — visually offset from the heading.
**Root Cause**: Incomplete — global `p { max-width: 65ch }` is correct for body text readability but shouldn't apply to section intro labels, centred headings, or other non-body text elements. No override existed for centred section labels.
**Detection Method**: User visual inspection ("The words Engagement Models start slightly to the left").
**Skill File**: SKILL.md, references/accessibility.md
**Generalised Pattern**: Global element rules (`p`, `img`, `a`) create unintended side effects on elements that happen to use those tags but serve a different purpose. A `<p>` used as a section label behaves differently from a `<p>` used as body text — global rules can't distinguish intent. Override rules are needed for semantic-role overrides. New Pattern P-010.
**Prevention Rule**: "Centred section labels that use `<p>` tags must override global `p { max-width: 65ch }` with `max-width: none`. Testing: visually verify centred labels and headings share the same visual centre axis."
**Skill Update**: Added to Testing Checklist and Common Mistakes in SKILL.md.
**Status**: Resolved — `max-width: none` added to `.engagement-section .section-intro-label`

---

## Patterns Observed (Updated — R9)

### Pattern P-009: "Subtle" Text Is Indistinguishable From Invisible Without Measurement
**Reflections**: REF-029
**Observation**: A reviewer looked at barely-visible text (#806B3A on #0F1923, contrast 2.8:1) across multiple screenshots and rationalised it as "faint gold — subtle but intentional design choice." The text was actually a WCAG violation. The human eye adapts to low contrast on screens and normalises it as "intentional." Only computed measurement distinguishes subtle-by-design (≥4.5:1) from invisible-by-bug (<4.5:1).
**Implication**: Every contrast assessment must use computed values (getComputedStyle + luminance formula), never visual judgment from screenshots. "Faint" in a review should trigger a measurement, not an explanation.

### Pattern P-010: Global Element Rules Create Unintended Side Effects
**Reflections**: REF-031
**Observation**: `p { max-width: 65ch }` is excellent for body text readability but broke centre alignment of a `<p>` used as a section label. The global rule can't distinguish a body paragraph from a label that happens to use the `<p>` tag. Similar risks exist for other global rules on `img`, `a`, `ul`, etc.
**Implication**: When writing global element rules, document which use cases they're designed for and which need overrides. When building sections that use common elements in non-standard ways (centred labels, decorative images, navigation lists), check for inherited global constraints.

---

## Resolved Archive

(Move resolved reflections here after confirmed 0 repeat defects across 2+ review rounds)

### Archived — REF-002 (Dark Mode Tokens)
Resolved R3 — dark mode tokens comprehensive, binary toggle implemented, 0 repeat defects through R8.

### Archived — REF-003 (Navbar Drift)
Resolved R4 — navbar standardised across all 8 pages, 0 repeat defects through R8.

### Archived — REF-004 (Footer Drift)
Resolved R4 — footer standardised across all 8 pages with canonical HTML pattern, 0 repeat defects through R8.

### Archived — REF-006 (Hero Image Alt Text)
Resolved R5 — hero image has descriptive alt text, 0 repeat defects through R8.

### Archived — REF-007 (Div Role Button)
Resolved R5 — FAQ accordion uses native `<button>` elements, 0 repeat defects through R8.

### Archived — REF-008 (Token Fallback HEX)
Resolved R6 — all var() fallbacks match canonical primitives, meta tags use documented HEX, 0 repeat defects through R8.

### Archived — REF-009 (CTA Banner Pattern)
Resolved R6 — canonical CTA banner HTML template documented and applied, 0 repeat defects through R8.
