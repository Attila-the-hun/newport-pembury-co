# Design Tokens Reference

Complete design token specifications for professional business websites. Tokens are the **Semantic DNA** of each brand — a programmable infrastructure that scales identity, reduces Design Debt, and prepares assets for the Agentic Web.

---

## The Excellence Standard: Good vs. Great

A "good" implementation provides consistency for developers; a "great" implementation creates a living design logic that scales brand identity across platforms and reduces financial liability.

| Feature | Good (Static Variables) | Great (Digital Excellence) |
|---|---|---|
| Logic | Static variables (e.g., `$blue-500`) | Living design logic with inheritance |
| Architecture | Single layer of raw values | 3-Tier Hierarchy (Primitive → Semantic → Component) |
| Naming | Literal / appearance-based | Semantic / intent-based |
| Format | Proprietary / platform-specific CSS | W3C DTCG Standard (`$value`, `$type` in JSON) |
| Governance | Manual spot-checks | Automated AI-linting and CI/CD pipelines |
| Business Impact | Developer convenience | M&A readiness, Design Debt liquidation, EBITDA multiplier |

**Target**: Every implementation should aim for the "Great" column. The transition requires moving from hardcoded options to intent-based decisions.

---

## The 3-Tier Token Hierarchy

Leading systems (Adobe Spectrum, Atlassian, Salesforce Lightning) enforce a strict 3-tier consumption pattern to prevent "token sprawl" and decision fatigue.

### Tier 1: Primitive Tokens (The Options)

Raw values. They describe **what** a colour or unit is. **Never apply directly to components.**

```json
{
  "color": {
    "navy": {
      "500": { "$value": "#1B3A6B", "$type": "color" },
      "600": { "$value": "#15305A", "$type": "color" },
      "700": { "$value": "#0F2549", "$type": "color" }
    },
    "gold": {
      "400": { "$value": "#D4C085", "$type": "color" },
      "500": { "$value": "#C5A55A", "$type": "color" },
      "600": { "$value": "#B8960C", "$type": "color" }
    }
  },
  "spacing": {
    "4":  { "$value": "4px",  "$type": "dimension" },
    "8":  { "$value": "8px",  "$type": "dimension" },
    "16": { "$value": "16px", "$type": "dimension" },
    "24": { "$value": "24px", "$type": "dimension" },
    "32": { "$value": "32px", "$type": "dimension" }
  }
}
```

### Tier 2: Semantic Tokens (The Decisions)

Define **intent**. They alias a Primitive token to a specific role. This allows you to change the entire brand by updating one alias without touching components. **90% of your UI should be powered by Tier 2 tokens.**

```json
{
  "color": {
    "background": {
      "primary":   { "$value": "{color.cream.50}",  "$type": "color" },
      "secondary": { "$value": "{color.ivory.100}", "$type": "color" },
      "inverse":   { "$value": "{color.navy.700}",  "$type": "color" }
    },
    "text": {
      "primary":   { "$value": "{color.navy.700}",  "$type": "color" },
      "secondary": { "$value": "{color.slate.500}", "$type": "color" },
      "inverse":   { "$value": "{color.cream.50}",  "$type": "color" },
      "action":    { "$value": "{color.gold.500}",  "$type": "color" }
    },
    "border": {
      "default":   { "$value": "rgba({color.navy.700}, 0.06)", "$type": "color" },
      "strong":    { "$value": "rgba({color.navy.700}, 0.15)", "$type": "color" }
    },
    "feedback": {
      "success":   { "$value": "#28A745", "$type": "color" },
      "error":     { "$value": "#DC3545", "$type": "color" },
      "warning":   { "$value": "#FFC107", "$type": "color" }
    }
  },
  "spacing": {
    "inline":    { "$value": "{spacing.8}",  "$type": "dimension" },
    "stack":     { "$value": "{spacing.16}", "$type": "dimension" },
    "section":   { "$value": "{spacing.128}", "$type": "dimension" }
  }
}
```

### Tier 3: Component Tokens (The Overrides)

Use only for high-stakes, specific elements. Keep these lean — overuse defeats the purpose.

```json
{
  "button": {
    "primary": {
      "background": {
        "default": { "$value": "{color.text.action}",  "$type": "color" },
        "hover":   { "$value": "{color.gold.400}",     "$type": "color" },
        "active":  { "$value": "{color.gold.600}",     "$type": "color" }
      },
      "text": {
        "default": { "$value": "{color.background.inverse}", "$type": "color" }
      }
    }
  },
  "card": {
    "background": { "$value": "{color.background.primary}", "$type": "color" },
    "shadow":     { "$value": "{shadow.md}", "$type": "shadow" },
    "radius":     { "$value": "{radius.md}", "$type": "dimension" }
  }
}
```

**The "Agentic" Benefit**: In 2026, AI agents use these semantic names as metadata to understand the purpose of UI elements. A token named `color.feedback.error` tells an agent exactly what that element represents, whereas `red-500` is just a colour.

---

## Semantic Naming Convention

Use the structured taxonomy: `category.subcategory.item.variant.state`

| Bad (Literal) | Good (Semantic) | Why It Matters |
|---|---|---|
| `--blue-500` | `--color-text-action` | Intent is clear; survives rebranding |
| `--spacing-small` | `--space-stack-sm` | "Small" is relative; "stack-sm" is a specific role |
| `--red-900` | `--color-feedback-error` | AI agents can infer purpose from name |
| `--shadow-1` | `--shadow-elevation-card` | Developer knows exactly where to use it |
| `--font-big` | `--type-heading-display` | "Big" breaks when the design evolves |

---

## W3C Design Token Community Group (DTCG) Format

All tokens should be stored in platform-agnostic JSON using the W3C DTCG standard. This JSON becomes the single source of truth, compiled to CSS custom properties, Tailwind config, iOS Swift, and Android XML via Style Dictionary or similar tools.

```json
{
  "$schema": "https://design-tokens.github.io/community-group/format/",
  "brand": {
    "charcoal": {
      "$value": "#1B2838",
      "$type": "color",
      "$description": "Primary brand dark. Used for headings, nav background, footer."
    },
    "gold": {
      "$value": "#C5A55A",
      "$type": "color",
      "$description": "Primary brand accent. Used for CTAs, focus rings, links on dark."
    }
  }
}
```

**Why JSON, not just CSS?** CSS custom properties are a delivery format, not a source format. JSON tokens can be compiled to CSS, Tailwind, Figma, iOS, and Android from a single source. This is critical for M&A readiness — acquirers assess how quickly a digital asset can be re-skinned for a new parent brand.

---

## Token Governance

### Automated Linting (The Enforcement Engine)

Use Stylelint or ESLint to **block any code commit containing hardcoded HEX or pixel values**. This forces 100% token adoption and prevents "Visual Design Debt".

```yaml
# .stylelintrc.yml
rules:
  declaration-property-value-disallowed-list:
    color: ["/^#/", "/^rgb/", "/^hsl/"]
    background-color: ["/^#/", "/^rgb/", "/^hsl/"]
    border-color: ["/^#/", "/^rgb/", "/^hsl/"]
  declaration-property-value-allowed-list:
    color: ["/^var\\(--/"]
    background-color: ["/^var\\(--/", "transparent", "inherit"]
```

### The 3% Rule

If your team spends more than 3% of a project budget "fixing" UI inconsistencies, you have a systemic token failure. Track this metric quarterly.

### Continuous Delivery for Design

Treat a token update like a code commit. When a designer changes a value in Figma, an automated pipeline (using GitHub Actions + Style Dictionary) triggers a pull request that updates Web, iOS, and Android simultaneously.

```
Figma Token Plugin → design-tokens.json → GitHub Actions → Style Dictionary →
├── CSS custom properties (web)
├── Tailwind config (web)
├── Swift UIColor extensions (iOS)
└── XML color resources (Android)
```

---

## Color Palettes

### Fractional CFO Brand (Newport Pembury & Co)

**NEW Brand System (Canonical):**
- **Brand Charcoal**: #1B2838 → `--brand-charcoal`
- **Brand Gold**: #C5A55A → `--brand-gold`
- **Brand Gold Light**: #D4C085 → `--brand-gold-light`
- **Brand Dark**: #0F1923 → `--brand-dark`
- **Brand Slate**: #6B7B8D → `--brand-slate`
- **Brand Ivory**: #F5F0E8 → `--brand-ivory`
- **Brand Cream**: #FAF8F4 → `--brand-cream`

**Semantic Layer:**
- **Text Primary**: var(--brand-charcoal) → `--color-text-primary`
- **Text Secondary**: var(--brand-slate) → `--color-text-secondary`
- **Text Inverse**: #FAFAFA → `--color-text-inverse`
- **Background Primary**: var(--brand-cream) → `--color-bg-primary`
- **Background Secondary**: var(--brand-ivory) → `--color-bg-secondary`
- **Background Inverse**: var(--brand-dark) → `--color-bg-inverse`
- **Action Primary**: var(--brand-gold) → `--color-action-primary`
- **Border Default**: rgba(27,40,56,0.06) → `--color-border`
- **Focus Ring**: var(--brand-gold) → `--color-focus`
- **Success**: #28A745 → `--color-feedback-success`
- **Error**: #DC3545 → `--color-feedback-error`
- **Warning**: #FFC107 → `--color-feedback-warning`

**OLD Brand System (Cowork Legacy — Do Not Use for New Work):**
- Primary Charcoal: #2C3E50 / Secondary Gold: #D4AF37 / CTA Blue: #0066CC
- Typography: Playfair Display + Lato

### Composite Materials Brand
- **Primary Navy**: #1B3A6B → `--brand-navy`
- **Secondary Steel Gray**: #5A6C7D → `--brand-steel`
- **Accent Teal**: #008DB9 → `--brand-teal`
- **CTA Orange**: #FFA500 → `--brand-cta`
- **Background**: #F5F5F5 → `--brand-bg`
- **Text Dark**: #1A1A2E / **Text Light**: #FAFAFA
- **Success**: #28A745 / **Error**: #DC3545 / **Warning**: #FFC107

#### Dark Mode (Composite)
- Primary Navy Dark: #0F1F3A / Background: #0A0E1A
- Text Light: #F5F5F5 / Secondary: #8FA3BC / Accent Teal Light: #00B8D4

### Carbon Fibre Garage Doors Brand
- **Primary Obsidian**: #1A1A2E → `--brand-obsidian`
- **Secondary Carbon Gray**: #2D2D3F → `--brand-carbon`
- **Accent Electric Red**: #E63946 → `--brand-red`
- **CTA Red**: #E63946 → `--brand-cta`
- **Background**: #F2F2F2 → `--brand-bg`
- **Carbon Weave**: #3A3A4A (texture overlays)
- **Metallic Silver**: #C0C0C0
- **Text Dark**: #1A1A2E / **Text Light**: #FAFAFA

#### Dark Mode (Garage Doors)
- Primary Deep: #0D0D17 / Background: #111118
- Text Light: #E8E8E8 / Accent Bright: #FF4D5A / Carbon Light: #4A4A5C

### Carbon Fibre Black Curtain Rods & Rails Brand
- **Primary Matte Black**: #1C1C1C → `--brand-black`
- **Secondary Warm Gray**: #8B8680 → `--brand-warmgray`
- **Accent Brushed Gold**: #C9A96E → `--brand-gold`
- **CTA Gold**: #C9A96E → `--brand-cta`
- **Background Linen**: #FAF8F5 → `--brand-bg`
- **Champagne**: #F7E7CE / **Slate**: #708090
- **Text Dark**: #2A2A2A / **Text Light**: #FAF8F5

#### Dark Mode (Curtain Rods)
- Primary Deep: #0F0F0F / Background: #141414
- Text Light: #F0EDE8 / Accent Bright: #D4B87A / Warm Gray Light: #A09A94

### Universal Neutral Gray Scale
- **Gray-50**: #F8F9FA / **Gray-100**: #E9ECEF / **Gray-200**: #DEE2E6
- **Gray-300**: #CED4DA / **Gray-400**: #ADB5BD / **Gray-500**: #6C757D
- **Gray-600**: #495057 / **Gray-700**: #343A40 / **Gray-800**: #212529

---

## Typography

### Brand Font Pairings

| Brand | Display Font | Body Font | Personality |
|---|---|---|---|
| Composite Materials | Montserrat (600-700) | Open Sans (400) | Technical, authoritative |
| Fractional CFO (NEW) | Cormorant Garamond (600-700) | DM Sans (400) | Sophisticated, trustworthy |
| Fractional CFO (OLD) | Playfair Display (700) | Lato (400) | Legacy — do not use |
| Carbon Fibre Garage Doors | Rajdhani (600-700) | Inter (400) | Industrial, bold |
| Curtain Rods & Rails | Cormorant Garamond (600-700) | Nunito Sans (400) | Elegant, refined |

**System Fallback**: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif

### Type Scale

Use `clamp()` for responsive heading sizes. No fixed pixel values for h1-h2.

| Element | Size | Line Height | Letter Spacing | Notes |
|---|---|---|---|---|
| H1 (Hero) | clamp(36px, 5vw, 72px) | 1.1 | -0.02em | text-wrap: balance |
| H2 (Section) | clamp(32px, 5vw, 48px) | 1.2 | -0.02em | text-wrap: balance |
| H3 (Card) | 24-32px | 1.3 | -0.02em | |
| H4 | 18-24px | 1.4 | -0.01em | |
| H5 | 16-18px | 1.4 | 0 | |
| H6 | 14-16px | 1.5 | 0 | |
| Body | 16px (1rem) | 1.6-1.7 | 0 | text-wrap: pretty |
| Body Large | 18px | 1.6 | 0 | |
| Body Small | 14px | 1.5 | 0.02em | |
| Caption | 12px | 1.4 | 0.02em | |
| Button | 13px | 1 | 0.08em | text-transform: uppercase |

### Font Loading Strategy
- Load with `font-display: swap`
- Preconnect to `fonts.googleapis.com` and `fonts.gstatic.com`
- System fonts for <100ms first paint
- Web fonts max 2s load, subset to used characters
- `-webkit-font-smoothing: antialiased` + `-moz-osx-font-smoothing: grayscale`

---

## Spacing Scale

8px base unit system. The "25% Rule": use a modular scale to ensure mathematical harmony, creating "Processing Fluency" — the psychological ease with which a user's brain handles visual information, directly increasing brand trust.

### Token Scale

| Token | Value | Pixels | Semantic Role |
|---|---|---|---|
| --space-xs | 0.25rem | 4px | Tight gaps, icon margins |
| --space-sm | 0.5rem | 8px | Inline spacing, small gaps |
| --space-md | 1rem | 16px | Standard paragraph spacing, card padding |
| --space-lg | 1.5rem | 24px | Section subheading gaps |
| --space-xl | 2rem | 32px | Card padding, form group spacing |
| --space-2xl | 3rem | 48px | Section heading to content |
| --space-3xl | 4rem | 64px | Between major sections |
| --space-4xl | 6rem | 96px | CTA banner padding |
| --space-5xl | 8rem | 128px | Section top padding |

### Section & Content
- **Section Vertical Gap**: 80-128px (desktop), 40-64px (mobile)
- **Asymmetric Rhythm**: Section top padding (--space-5xl) > bottom (--space-4xl) for visual breathing room
- **Content Max-Width**: 1200px
- **Content Padding**: 24-40px (desktop), 16-24px (mobile)
- **Component Padding**: 16-24px
- **Button Padding**: 14px vertical, 28px horizontal

**Rule**: No arbitrary pixel values in padding or margin. All spacing must use scale tokens.

---

## Shadows

Depth and layering system. All shadows referenced via CSS custom properties.

| Token | Value | Usage |
|---|---|---|
| --shadow-sm | 0 1px 2px rgba(0,0,0,0.05) | Card rest state |
| --shadow-md | 0 4px 12px rgba(0,0,0,0.07) | Card hover, dropdowns |
| --shadow-lg | 0 10px 24px rgba(0,0,0,0.1) | Elevated cards, modals |
| --shadow-xl | 0 20px 48px rgba(0,0,0,0.1) | Hero overlays, sticky headers |
| --shadow-gold | 0 8px 24px rgba(197,165,90,0.3) | Gold CTA button hover |

Do not exceed xl shadow on web. Avoid shadow stacking. Never use inline `box-shadow` values.

---

## Border Radius

| Token | Value | Usage |
|---|---|---|
| --radius-sm | 4px | Tags, chips, small elements |
| --radius-md | 8px | Buttons, cards, inputs (standard) |
| --radius-lg | 12px | Large cards, modals |
| --radius-xl | 16px | Hero overlays, feature sections |
| --radius-full | 9999px | Pills, avatars |

**Rule**: Buttons use --radius-md (8px). Never use arbitrary radius values (e.g., 6px is non-compliant).

---

## Transitions & Animations

### Easing Functions

| Token | Value | Usage |
|---|---|---|
| --ease-smooth | cubic-bezier(0.4, 0, 0.2, 1) | Default for all UI transitions |
| --ease-out | cubic-bezier(0, 0, 0.58, 1) | Exit animations, menu close |
| --ease-in-out | cubic-bezier(0.42, 0, 0.58, 1) | Scroll-triggered reveals |
| --ease-spring | cubic-bezier(0.34, 1.56, 0.64, 1) | Micro-interactions (bounce) |

### Duration Standards
- **UI Response**: 200-300ms (buttons, links, toggles)
- **Scroll Reveal**: 600ms
- **Hero Entrance**: 800ms
- **Counter Animation**: 1200ms
- **Quick Feedback**: 150ms

Use `transform` and `opacity` only. Never animate layout properties.

---

## Responsive Breakpoints

| Breakpoint | Width | Layout |
|---|---|---|
| Mobile | < 480px | Single column, hamburger nav, sticky CTA |
| Tablet | 480-768px | 2-column grids, hamburger nav |
| Desktop | 768-1024px | 3-column grids, horizontal nav |
| Wide | > 1200px | Max-width container (1200px), centred |

Use mobile-first approach with min-width media queries.

---

## Component Specifications

### Buttons
- **Height**: 44px minimum (touch targets)
- **Padding**: 14px vertical, 28px horizontal
- **Border Radius**: var(--radius-md) (8px)
- **Font**: 13px, weight 700, uppercase, letter-spacing 0.08em
- **Transition**: 0.3s var(--ease-smooth)
- **Hover**: translateY(-2px) scale(1.02) + variant shadow
- **Active**: translateY(0) scale(0.98) + shadow: none

### Form Inputs
- **Height**: 44px
- **Padding**: 12px 16px
- **Border**: 1px solid var(--color-border)
- **Border Radius**: var(--radius-md) (8px)
- **Font**: 16px body font (prevents iOS zoom)
- **Focus**: border-color var(--brand-gold), box-shadow 0 0 0 3px rgba(197,165,90,0.15)
- **Error**: border-color var(--color-feedback-error) #DC3545

### Cards
- **Padding**: var(--space-xl) (32px)
- **Border Radius**: var(--radius-md) (8px)
- **Shadow**: var(--shadow-sm) → var(--shadow-md) on hover
- **Hover**: translateY(-4px to -8px), transition 0.4s var(--ease-smooth)
- **Background**: white (light) / var(--brand-dark) (dark mode)

### Links
- **Color**: var(--color-action-primary)
- **Decoration**: none (underline on hover)
- **Focus**: outline 2px solid var(--color-focus) with 2px offset
- **Transition**: 0.2s var(--ease-smooth)

---

## CSS Custom Properties Template (3-Tier)

```css
:root {
  /* ===== TIER 1: PRIMITIVES (never use directly in components) ===== */
  --primitive-navy-500: #1B3A6B;
  --primitive-navy-700: #0F2549;
  --primitive-charcoal-500: #1B2838;
  --primitive-charcoal-700: #0F1923;
  --primitive-gold-400: #D4C085;
  --primitive-gold-500: #C5A55A;
  --primitive-gold-600: #B8960C;
  --primitive-slate-500: #6B7B8D;
  --primitive-ivory-100: #F5F0E8;
  --primitive-cream-50: #FAF8F4;
  --primitive-white: #FFFFFF;
  --primitive-gray-50: #F8F9FA;
  --primitive-gray-200: #DEE2E6;
  --primitive-gray-500: #6C757D;
  --primitive-gray-800: #212529;

  /* ===== TIER 2: SEMANTIC (use these in 90% of code) ===== */
  /* Brand */
  --brand-charcoal: var(--primitive-charcoal-500);
  --brand-gold: var(--primitive-gold-500);
  --brand-gold-light: var(--primitive-gold-400);
  --brand-dark: var(--primitive-charcoal-700);
  --brand-slate: var(--primitive-slate-500);
  --brand-ivory: var(--primitive-ivory-100);
  --brand-cream: var(--primitive-cream-50);

  /* Text (semantic intent) */
  --color-text-primary: var(--brand-charcoal);
  --color-text-secondary: var(--brand-slate);
  --color-text-inverse: #FAFAFA;
  --color-text-action: var(--brand-gold);

  /* Backgrounds (semantic intent) */
  --color-bg-primary: var(--brand-cream);
  --color-bg-secondary: var(--brand-ivory);
  --color-bg-inverse: var(--brand-dark);

  /* Borders */
  --color-border: rgba(27, 40, 56, 0.06);
  --color-border-strong: rgba(27, 40, 56, 0.15);

  /* Feedback */
  --color-feedback-success: #28A745;
  --color-feedback-error: #DC3545;
  --color-feedback-warning: #FFC107;

  /* Focus */
  --color-focus: var(--brand-gold);

  /* Typography */
  --font-display: "Cormorant Garamond", serif;
  --font-body: "DM Sans", sans-serif;
  --font-system: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;

  /* Spacing (8px grid) */
  --space-xs: 0.25rem;   /* 4px */
  --space-sm: 0.5rem;    /* 8px */
  --space-md: 1rem;      /* 16px */
  --space-lg: 1.5rem;    /* 24px */
  --space-xl: 2rem;      /* 32px */
  --space-2xl: 3rem;     /* 48px */
  --space-3xl: 4rem;     /* 64px */
  --space-4xl: 6rem;     /* 96px */
  --space-5xl: 8rem;     /* 128px */

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.07);
  --shadow-lg: 0 10px 24px rgba(0,0,0,0.1);
  --shadow-xl: 0 20px 48px rgba(0,0,0,0.1);
  --shadow-gold: 0 8px 24px rgba(197,165,90,0.3);

  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;

  /* Easing */
  --ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-out: cubic-bezier(0, 0, 0.58, 1);
  --ease-in-out: cubic-bezier(0.42, 0, 0.58, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);

  /* Duration */
  --duration-fast: 150ms;
  --duration-normal: 300ms;
  --duration-slow: 600ms;

  /* ===== TIER 3: COMPONENT (use sparingly for overrides) ===== */
  --btn-primary-bg: var(--brand-gold);
  --btn-primary-text: var(--brand-dark);
  --btn-primary-hover-bg: var(--brand-gold-light);
  --btn-primary-hover-shadow: var(--shadow-gold);
  --btn-radius: var(--radius-md);
  --input-focus-ring: 0 0 0 3px rgba(197, 165, 90, 0.15);
  --card-shadow: var(--shadow-sm);
  --card-hover-shadow: var(--shadow-md);
}
```

### Brand-Specific Overrides

```css
/* Composite Materials — swap brand layer only */
:root[data-brand="composite"] {
  --brand-charcoal: var(--primitive-navy-500);
  --brand-gold: #FFA500; /* CTA Orange */
  --brand-dark: var(--primitive-navy-700);
  --brand-slate: #5A6C7D;
  --brand-ivory: #F5F5F5;
  --brand-cream: #FAFAFA;
  --font-display: "Montserrat", sans-serif;
  --font-body: "Open Sans", sans-serif;
}

/* Carbon Fibre Garage Doors */
:root[data-brand="garage-doors"] {
  --brand-charcoal: #1A1A2E;
  --brand-gold: #E63946; /* Accent Red */
  --brand-dark: #0D0D17;
  --brand-slate: #2D2D3F;
  --brand-ivory: #F2F2F2;
  --brand-cream: #FAFAFA;
  --font-display: "Rajdhani", sans-serif;
  --font-body: "Inter", sans-serif;
}

/* Carbon Fibre Curtain Rods & Rails */
:root[data-brand="curtain-rods"] {
  --brand-charcoal: #1C1C1C;
  --brand-gold: #C9A96E;
  --brand-dark: #0F0F0F;
  --brand-slate: #8B8680;
  --brand-ivory: #FAF8F5;
  --brand-cream: #FAF8F5;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Nunito Sans", sans-serif;
}
```

---

## ROI and Valuation Impact

From a strategic perspective, Design Tokens are a financial multiplier:

- **Liquidation of Design Debt**: If your team spends >3% of project budget fixing UI inconsistencies, you have a systemic token failure. Track and report quarterly.
- **M&A Readiness**: A tokenized architecture signals to acquirers that your digital asset is highly maintainable and ready for international scaling. This directly impacts EBITDA valuation multiples.
- **Multi-Platform Scaling**: JSON tokens compiled to CSS + Tailwind + iOS + Android from a single source mean a rebrand costs days, not months.
- **Key Change for Immediate Impact**: Rename your most-used colour and spacing variables from "literal" to "semantic" roles. This single shift moves the system from a static library to a dynamic logic engine.
