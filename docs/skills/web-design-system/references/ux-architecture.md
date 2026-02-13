# UX Architecture Reference

Structural principles for designing user journeys that build trust progressively, reduce cognitive load, and create narrative momentum. Apply these alongside the visual and conversion rules in the other references.

## Table of Contents

1. [The Trust Pyramid](#the-trust-pyramid)
2. [Narrative Structure for User Journeys](#narrative-structure-for-user-journeys)
3. [Cognitive Load Management](#cognitive-load-management)
4. [Progressive Disclosure](#progressive-disclosure)
5. [Page Architecture Patterns](#page-architecture-patterns)

---

## The Trust Pyramid

Users don't arrive ready to buy. Trust builds through progressive stages. Design each page to move users up one level, not to leap from stranger to customer in a single scroll.

### The Five Stages

```
Stage 5: ADVOCACY — Recommends you to others
Stage 4: RELIANCE — Uses your service regularly, shares sensitive data
Stage 3: COMMITMENT — Books a call, submits a form, shares email
Stage 2: EXPLORATION — Reads content, checks credentials, browses services
Stage 1: ASSESSMENT — Judges visual credibility within 3-5 seconds
```

### Designing for Each Stage

**Stage 1 — Assessment (hero section, first 5 seconds):**
- Professional visual appearance (clean gradient, typography, no stock photos)
- Credential signals visible immediately (CA, CPA, certifications)
- Audience qualification in headline ("for founders scaling $1M to $10M")
- No asks. Zero. The only job is to pass the credibility test.

**Stage 2 — Exploration (services, about, process sections):**
- Specific, verifiable claims (not atmospheric copy)
- Social proof: trust badges, quantified experience, real credentials
- Clear navigation so users feel in control
- Each section answers: "Why should I keep reading?"

**Stage 3 — Commitment (lead capture, CTAs):**
- Low-friction first ask: email for a checklist, not a 30-minute call
- First-person CTA language ("Get My Free Assessment")
- Value exchange: what does the user get in return for their commitment?
- Clear expectation setting ("Free. No obligation. 12-point checklist.")

**Stage 4 — Reliance (contact, consultation booking):**
- Higher-friction ask is appropriate here: phone number, business details
- Reassurance signals: "Confidential", "No obligation", specific time commitment
- Human elements: real name, real email, direct contact options
- Dual CTA pattern: primary action + lower-commitment alternative

**Stage 5 — Advocacy (post-conversion, ongoing):**
- Deliver on promises (if you offered a checklist, it must be excellent)
- Follow-up communication that adds value, not just sells
- Make sharing easy (but don't beg for it)

### Mapping the Pyramid to Page Sections

```
Homepage:    Assessment → Exploration → Commitment
Services:    Exploration → Commitment
About:       Exploration → Commitment
Contact:     Commitment → Reliance
Insights:    Exploration → Commitment (via newsletter)
```

---

## Narrative Structure for User Journeys

Frame the user's journey through the site as a story. Users are the hero, not the business.

### The Story Circle (Dan Harmon, simplified for UX)

Apply this 8-step structure to the homepage scroll:

1. **Comfort zone** — User is in their current situation (browsing, has a problem)
2. **Want** — They recognise a need (headline qualifies their problem)
3. **Enter unfamiliar** — They engage with the site (scroll past hero)
4. **Adapt** — They learn what you offer (services, process, credentials)
5. **Get what they want** — They find the answer to their problem (your solution)
6. **Pay the price** — They commit (fill a form, book a call, share email)
7. **Return** — They complete the action (confirmation, thank-you)
8. **Changed** — They leave empowered (with a checklist, a booked call, clarity)

### Practical Application

- **Hero section** = Steps 1-2 (acknowledge their situation, state their desire)
- **Services/Process** = Steps 3-4 (introduce your world, show how it works)
- **Trust signals/Credentials** = Step 5 (prove you can deliver)
- **CTA/Lead capture** = Step 6 (the commitment moment)
- **Thank-you page** = Steps 7-8 (confirm and empower)

### Scroll-telling Principles

When using scroll-based narrative:
- Every scroll should reveal new information (no dead zones)
- Animations must serve the story, not decorate it
- Use progressive reveal: most important content first, detail on demand
- Maintain a rhythm: content section → breathing space → content section
- The page should feel like it has a beginning, middle, and end

---

## Cognitive Load Management

### Hick's Law

Decision time increases logarithmically with the number of choices. Reduce options to reduce friction.

**Application:**
- Navigation: 5-7 items maximum
- Service cards: 3-4 options, not 8-10
- CTA sections: 1 primary action + 1 secondary maximum
- Form fields: 3 fields for highest conversion, progressive disclosure for more
- Hero: one headline, one description, one CTA. Not three headlines and five buttons.

### Miller's Law

Working memory holds 7±2 items. Group information into chunks.

**Application:**
- Stats in groups of 3 (not 5 or 7)
- Process steps in groups of 3-5
- Feature lists chunked with clear headings
- Use visual hierarchy to signal which chunks matter most

### Jakob's Law

Users expect your site to work like other sites they've used. Don't reinvent navigation, form patterns, or checkout flows.

**Application:**
- Logo top-left, links to homepage
- Navigation top-right
- Search (if present) top-right or center
- Contact in footer and nav
- CTA button in nav (right-most position)
- Standard form patterns (label above input, submit at bottom)

---

## Progressive Disclosure

Show only what's needed at each stage. Reveal detail on demand.

### Techniques

- **Accordion FAQ**: Show questions, reveal answers on click
- **Read more**: Truncate long descriptions, expand on interaction
- **Tabbed content**: Show one service category at a time
- **Hover details**: Show summary cards, reveal specifics on hover
- **Multi-step forms**: Show 3 fields first, then ask for more
- **Scroll reveal**: Content appears as user scrolls into viewport

### Rules

- Default state should answer the most common question
- Expanded state should answer the follow-up question
- Never hide critical information behind interactions (credentials, pricing, contact)
- Progressive disclosure reduces cognitive load but increases interaction cost — use judiciously

---

## Page Architecture Patterns

### Service Business Homepage (5-section minimum)

```
1. Hero (Assessment + Want)
   → Qualified headline, credential signals, primary CTA

2. Services Overview (Exploration)
   → 3-4 service cards, specific outcomes, individual CTAs

3. Process/Approach (Adaptation)
   → 3-5 steps, numbered, timeline or steps pattern

4. Trust Signals (Proof)
   → Credentials, certifications, quantified experience

5. Lead Capture (Low-commitment ask)
   → Value exchange: checklist, guide, assessment

6. CTA Banner (High-commitment ask)
   → Book consultation, direct contact

7. Footer (Utility)
   → Nav links, contact details, legal
```

### Behavioural Psychology Principles

#### Pratfall Effect ("Radical Trust" Content Strategy)

People trust competent individuals more after seeing a minor, relatable flaw. Once you've established credibility (credentials, experience, results), strategically sharing what didn't work builds deeper trust than perfection.

**Application:**
- Only deploy after competence is firmly established (Stage 2+ of Trust Pyramid)
- Insights/blog content: "What I learned from a failed ERP implementation"
- About page: mention a career pivot or lesson learned alongside achievements
- Case studies: include challenges encountered, not just outcomes
- Never lead with vulnerability — lead with competence, then humanise

**Rules:**
- The flaw must be minor and past-tense (resolved, learned from)
- It must relate to professional growth, not current capability
- One vulnerability per page maximum — more reads as insecure
- Always pair with a positive resolution or lesson

#### Goal Gradient Effect

People accelerate effort as they approach a goal. Apply progress indicators to multi-step processes to increase completion rates.

**Application:**
- Multi-step forms: show "Step 2 of 3" with visual progress bar
- Onboarding flows: percentage complete indicator
- Content consumption: reading progress bar (scroll depth)
- Service pages: numbered process steps (1 → 2 → 3 → Done)
- Email sequences: "Email 3 of 5 in your Financial Health series"

**Implementation:**
- Progress bars should be honest (don't show 80% when user is at step 1 of 5)
- Use visual momentum: each completed step should feel like progress
- Final step should feel close — "Just one more thing" converts better than "Step 5 of 5"
- Combine with celebration micro-interactions (checkmark animation on completion)

### Product Business Homepage

```
1. Hero (Problem + Solution)
   → Product benefit headline, hero image/video, primary CTA

2. Features/Benefits (Why this product)
   → 3-4 key differentiators with visuals

3. Specifications (Technical proof)
   → Material, dimensions, performance data

4. Social Proof (Trust)
   → Reviews, installations, case studies

5. Comparison (Decision support)
   → vs. alternatives, with honest positioning

6. CTA (Purchase or enquiry)
   → Request a quote, buy now, get a sample
```
