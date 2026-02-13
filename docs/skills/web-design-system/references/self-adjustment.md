# Self-Adjustment Protocol

> **Theoretical Foundation**: This protocol synthesises reinforcement learning principles from Reflexion (Shinn et al., 2023), Constitutional AI (Bai et al., 2022), SCoRe (Kumar et al., 2024), Process Reward Models (Lightman et al., 2025), and Curriculum Learning (Bengio et al., 2009) into a practical closed-loop system for skill evolution within Claude Code/Cowork workflows.

## Why This Exists

Every defect we find during a review represents a gap in our skill files. If we fix the defect but don't update the skill, we're guaranteed to repeat it. This protocol ensures that **every substantial gap triggers a skill evolution**, creating a positive feedback loop where our design system gets measurably better after every session.

The goal: **zero repeat defects**. If we find the same class of issue twice, the protocol has failed.

---

## The DFRUVL Cycle

Six stages, executed in order after every review that uncovers a substantial gap:

```
DETECT → FIX → REFLECT → UPDATE → VERIFY → LOG
```

### Stage 1: DETECT (Find the Gap)

**Trigger**: Any review, audit, or quality check that surfaces an issue.

**Sources of detection**:
- Site governance audits (site-governance skill)
- Cross-page consistency checks (SKILL.md checklists)
- Accessibility audits (axe, WAVE, Lighthouse)
- Core Web Vitals performance scans
- Visual QA (screenshot comparison)
- User/stakeholder feedback
- Self-review during builds

**Classification** — Every detected gap gets a severity:

| Severity | Definition | Example | Action |
|----------|-----------|---------|--------|
| **Critical** | Breaks functionality or accessibility | Missing alt text on hero image, CTA links to 404 | Fix immediately, update skill same session |
| **Major** | Violates a stated skill rule | Inline styles where classes exist, wrong service labels | Fix immediately, update skill same session |
| **Minor** | Inconsistency or polish issue | Spacing off by 4px, inconsistent hover timing | Fix when convenient, batch skill updates |
| **Enhancement** | Not a defect, but an opportunity | New anti-pattern observed, better approach discovered | Log for next skill revision cycle |

**Decision gate**: Only **Critical** and **Major** gaps proceed through the full DFRUVL cycle. Minor and Enhancement items are logged in reflections.md for batch processing.

### Stage 2: FIX (Resolve the Immediate Issue)

Apply the fix to the codebase. This is the tactical step — make the code correct *now*.

**Rules**:
- Fix the specific instance(s) across ALL pages (not just the one where you found it)
- Use `grep` or equivalent to find every occurrence
- Commit with a descriptive message that references the gap type
- Commit message format: `fix(<scope>): <description> [gap: <category>]`
  - Example: `fix(footer): standardise service labels across all pages [gap: consistency]`

**Gap categories for commit messages**: `tokens`, `accessibility`, `consistency`, `conversion`, `seo`, `performance`, `polish`, `architecture`

### Stage 3: REFLECT (Root Cause Analysis)

This is the Reflexion step — verbal reflection stored as episodic memory. Ask these five questions:

1. **What was the gap?** (Describe the specific deficiency)
2. **Why did it exist?** (Root cause — was the rule missing, unclear, incomplete, or ignored?)
3. **Which skill file should have prevented it?** (Map to specific file and section)
4. **What's the generalised pattern?** (Abstract beyond this specific instance)
5. **What's the prevention rule?** (The new or clarified rule that prevents recurrence)

**Root cause taxonomy** (from Constitutional AI self-critique framework):

| Root Cause | Description | Skill Action |
|------------|-------------|-------------|
| **Missing rule** | No rule existed for this scenario | Add new rule to appropriate file |
| **Unclear rule** | Rule existed but was ambiguous | Rewrite with precision (exact values, examples) |
| **Incomplete rule** | Rule covered some cases but not this one | Expand scope with edge cases |
| **Buried rule** | Rule exists deep in a reference file but not in SKILL.md | Promote to SKILL.md quick reference or checklist |
| **Contradictory rules** | Two rules conflict | Resolve conflict, add precedence note |
| **Ignored rule** | Rule was clear but not followed | Promote to checklist, add to "Common Mistakes" |

Write the reflection entry in `memory/reflections.md` using the template in that file.

### Stage 4: UPDATE (Evolve the Skill)

This is the Constitutional AI step — updating the "constitution" (our skill files) based on the self-critique.

**Update taxonomy** — What to change depends on the root cause:

| Root Cause | Update Action |
|------------|---------------|
| Missing rule | Add rule to the most relevant reference file + add summary to SKILL.md if critical |
| Unclear rule | Rewrite with exact values, before/after examples, and explicit do/don't |
| Incomplete rule | Add the missing edge cases or scenarios |
| Buried rule | Add to SKILL.md checklist or "Common Mistakes to Catch" section |
| Contradictory rules | Resolve conflict, document precedence, add cross-reference |
| Ignored rule | Promote to a checklist item (checklists get followed more than prose) |

**Update principles** (from skill-creator best practices):
- **Generalise, don't overfit**: Write rules that cover the class of problem, not just this instance
- **Theory of mind**: Explain WHY the rule matters, not just what to do — rules with rationale stick better
- **Keep it lean**: If a section grows beyond 20 rules, consolidate or restructure
- **Use precise values**: "High contrast" is vague; "4.5:1 minimum ratio" is actionable
- **Add to checklists**: If it's checkable, it should be in a checklist
- **Cross-reference**: If a rule applies to multiple files, add a cross-reference rather than duplicating

**Anti-pattern**: Never add a rule that only applies to one specific page or one specific element. If you can't generalise it, it's not a skill rule — it's a code comment.

### Stage 5: VERIFY (Confirm Prevention)

Re-run the detection method that found the original gap to confirm:

1. **The fix resolves the immediate issue** (regression test)
2. **The skill update would catch it in future** (constitutional test)

**Constitutional test method**: Read the updated skill file section and ask: "If I were building this page from scratch using only these skill files, would I avoid this defect?" If the answer is no, the update isn't strong enough — iterate on Stage 4.

**Process Reward Model check**: Evaluate not just the final output but the intermediate steps:
- Did the rule appear in the right location (SKILL.md vs reference file)?
- Is the rule findable (good heading, in the right section)?
- Is the rule testable (can be verified with a yes/no check)?
- Is the rule proportionate (not over-engineered for a minor issue)?

### Stage 6: LOG (Record the Evolution)

Update `CHANGELOG.md` with a versioned entry:

```markdown
## v1.X.0 — YYYY-MM-DD
### [Category]
- **Added/Changed/Fixed**: Description of rule change
- **Trigger**: What gap triggered this update
- **File(s)**: Which skill files were modified
- **Reflection**: Link to reflections.md entry
```

Version numbering:
- **Major** (v2.0): Structural reorganisation or new reference file added
- **Minor** (v1.1): New rules or significant rule changes
- **Patch** (v1.0.1): Clarifications, typo fixes, minor improvements

---

## Curriculum Learning: Progressive Skill Difficulty

Skills evolve through maturity levels, inspired by curriculum learning research (Bengio 2009, CurLL 2024). Each reference file progresses through these stages:

| Level | Name | Focus | Example |
|-------|------|-------|---------|
| 1 | **Foundation** | Core rules that prevent critical defects | "Use semantic HTML", "4.5:1 contrast ratio" |
| 2 | **Competence** | Rules that ensure professional quality | "8px grid spacing", "Cross-page consistency" |
| 3 | **Excellence** | Rules that create premium, differentiated output | "Optical font sizing", "Stagger animations", "Asymmetric rhythm" |
| 4 | **Mastery** | Rules that handle edge cases and advanced patterns | "Dark mode token mapping", "Viewport-aware lazy loading" |

When a new rule is added, tag it with a maturity level. This helps prioritise during builds — Level 1-2 rules are non-negotiable, Level 3-4 rules are aspirational.

---

## Memory Architecture

Inspired by Reflexion's episodic memory buffer and Claude Reflect's hierarchical memory:

```
Working Memory (CLAUDE.md)
  ├── Project context (current state, recent decisions)
  ├── Active principles (top 5 lessons from recent sessions)
  └── Session continuity (what to pick up next)

Episodic Memory (memory/reflections.md)
  ├── Gap entries (what we found, why, how we fixed it)
  ├── Patterns (recurring themes across multiple gaps)
  └── Anti-patterns (things that seemed right but weren't)

Procedural Memory (Skill files)
  ├── SKILL.md (quick reference + checklists)
  ├── Reference files (deep knowledge)
  └── CHANGELOG.md (evolution history)
```

**Memory pruning** (from catastrophic forgetting research):
- Reflections older than 6 months: Archive to `memory/archive/` unless still actively relevant
- If a pattern has been fully codified into a skill rule with no repeat defects: Mark reflection as "resolved"
- Keep the 5 most impactful reflections promoted to CLAUDE.md "Active Principles"

---

## Scoring and Metrics

Track these metrics to measure system effectiveness:

### Per-Session Metrics
- **Gaps detected**: How many issues found this session
- **Gaps by severity**: Critical / Major / Minor / Enhancement breakdown
- **Root cause distribution**: Missing / Unclear / Incomplete / Buried / Contradictory / Ignored
- **Skill files updated**: Which files were evolved
- **Repeat rate**: Were any gaps the same class as a previous reflection? (Target: 0%)

### Cumulative Metrics
- **Total reflections**: Running count of episodic memory entries
- **Skill file growth**: Lines added to each file over time
- **Governance score**: Latest site audit score (target: 9.0+/10)
- **Repeat defect rate**: Gaps that match a previous reflection / total gaps (target: <5%)
- **Mean time to codify**: Average sessions between gap detection and skill update (target: 0 — same session)

---

## Integration Points

### With Site Governance Skill
The site-governance skill runs audits. When it finds issues, they feed into Stage 1 (DETECT) of this protocol. The governance audit categories map directly to our gap categories.

### With Skill Creator
When a new reference file needs to be created (major gap requiring a whole new domain of rules), use the skill-creator's eval and benchmark modes to test the new skill before deploying.

### With CLAUDE.md
After every session that triggers DFRUVL, update CLAUDE.md's "Active Principles" section with the top lessons learned. This ensures the next session starts with fresh context about recent improvements.

### With Git Workflow
Skill file updates should be committed alongside the code fix they address. Use the commit message format from Stage 2 to make the connection traceable.

---

## Quick Reference: The 5-Question Reflection

After every substantial gap, answer these five questions:

1. **What broke?** → Gap description
2. **Why?** → Root cause (missing / unclear / incomplete / buried / contradictory / ignored)
3. **Where?** → Which skill file and section
4. **So what?** → Generalised pattern (not just this instance)
5. **Now what?** → The prevention rule (exact, testable, proportionate)

If you can't answer all five, the reflection isn't complete. Iterate.

---

## Academic Foundations

| Concept | Paper | How We Apply It |
|---------|-------|----------------|
| Verbal reinforcement learning | Reflexion (Shinn et al., 2023) | Reflections.md as episodic memory buffer |
| Self-critique against principles | Constitutional AI (Bai et al., 2022) | Skill files as the "constitution" we critique against |
| Multi-turn self-correction | SCoRe (Kumar et al., 2024) | DFRUVL cycle as structured self-correction |
| Intermediate step evaluation | Process Reward Models (Lightman et al., 2025) | Verify step checks process, not just outcome |
| Progressive difficulty | Curriculum Learning (Bengio, 2009) | Skill maturity levels 1-4 |
| Catastrophic forgetting prevention | Self-Synthesized Rehearsal (2024) | Memory pruning and archive strategy |
| Learning to learn | MAML (Finn et al., 2017) | Meta-pattern: the protocol itself evolves |
| Self-bootstrapping | STaR (Zelikman et al., 2023) | Using our own outputs to improve our own process |
