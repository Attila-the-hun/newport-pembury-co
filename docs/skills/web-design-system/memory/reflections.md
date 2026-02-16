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
**Reflections**: REF-003, REF-004, REF-009, REF-011, REF-013
**Observation**: Header (REF-003), footer (REF-004), CTA banners (REF-009), CDN loading (REF-011), and CTA copy (REF-013) all drifted independently. Pattern now extends beyond HTML structure to infrastructure (CSS sources) and content (copy text). Any shared element — markup, styling source, or canonical copy — will drift without an explicit spec.
**Implication**: Before building any new shared component, write the canonical spec for structure, styling, AND copy. Apply changes site-wide in a single pass, not page-by-page.

### Pattern P-002: Rules Without Exact Values Get Ignored
**Reflections**: REF-001, REF-002, REF-008, REF-012
**Observation**: "Use design tokens" is too vague — you need "90% Tier 2, 0% hardcoded HEX". "Support dark mode" is too vague — you need explicit token mapping for every semantic category. "No hardcoded HEX" needs to specify what about fallback values and meta tags. Precision prevents interpretation.
**Implication**: Every rule should include a testable assertion with a numeric threshold or exact string match, AND explicitly address edge cases.

### Pattern P-003: Missing Rules Are More Common Than Ignored Rules
**Reflections**: REF-001, REF-002, REF-003, REF-004, REF-007, REF-013, REF-014, REF-015
**Observation**: In 9 out of 16 reflections, the root cause was "missing rule" (56%). The skill system is expanding but gaps remain in: legal page templates, context-appropriate CTA rules, and copy governance. Growth phase continues.
**Implication**: Prioritise coverage (more rules across more domains) over depth (more nuance in existing rules). New domains identified: legal pages, copy governance, context-aware CTA placement.

### Pattern P-005: Tokens Without Consumers Are Dead Code
**Reflections**: REF-010
**Observation**: 79 of 113 CSS custom properties in :root were defined but never referenced in component CSS or HTML. The token system looked comprehensive on paper but had zero governance impact. Defining a token and using it are two separate acts — defining without using creates maintenance overhead and false confidence. Conversely, CSS classes must exist BEFORE you can tell developers to stop using inline styles.
**Implication**: After defining any new token, immediately wire it into at least one consumer (CSS rule or utility class). After every batch of token additions, audit for dead tokens and prune or connect them.

### Pattern P-004: Generic Rules Need Classification Specificity
**Reflections**: REF-006, REF-008, REF-016
**Observation**: "Images have alt text" doesn't distinguish decorative from content images. "No hardcoded HEX" doesn't address fallbacks or meta tags. Generic rules create false confidence — they look complete but leave gaps for specific sub-categories.
**Implication**: When writing a rule, ask: "Are there sub-types where this rule applies differently?" If yes, document each sub-type explicitly.

---

## Resolved Archive

(Move resolved reflections here after 6 months with no repeat defects)

*Empty — system just launched*
