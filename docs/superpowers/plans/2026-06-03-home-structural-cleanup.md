# Homepage Structural Cleanup Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Consolidate the duplicated EN/PT homepages into a shared implementation, improve mobile behavior and spacing, and tighten the featured case narrative without changing the site's information architecture.

**Architecture:** Move localized copy into a shared data module and render both locales through one Astro component. Keep the current visual system, but centralize markup/CSS/JS so tabs, graph behavior, featured detail, and responsive adjustments are maintained in one place.

**Tech Stack:** Astro 5, TypeScript data module, shared Astro component, vanilla client-side JS

---

### Task 1: Define the shared homepage content contract

**Files:**
- Create: `src/data/homeContent.ts`

- [ ] **Step 1: Define the content shape**

Add typed structures for navigation, hero, featured case, projects, tabs, contact, and graph labels so both locales use the same component contract.

- [ ] **Step 2: Populate EN and PT content**

Move the current homepage copy into locale objects, preserving URLs and section ordering while fixing Portuguese text encoding in the new source file.

- [ ] **Step 3: Commit**

```bash
git add src/data/homeContent.ts
git commit -m "refactor: extract localized homepage content"
```

### Task 2: Build a shared Astro homepage component

**Files:**
- Create: `src/components/PortfolioHome.astro`

- [ ] **Step 1: Move shared document structure into one component**

Create a single Astro component that renders the full homepage from props instead of duplicating HTML in each page file.

- [ ] **Step 2: Preserve the current visual language**

Carry over the editorial styling, but keep CSS in the component so spacing and responsive changes live in one place.

- [ ] **Step 3: Commit**

```bash
git add src/components/PortfolioHome.astro
git commit -m "refactor: add shared portfolio homepage component"
```

### Task 3: Point EN/PT pages to the shared component

**Files:**
- Modify: `src/pages/index.astro`
- Modify: `src/pages/pt/index.astro`

- [ ] **Step 1: Replace duplicated page markup**

Render the shared component from the locale-specific page entries, passing only the correct locale content object.

- [ ] **Step 2: Keep alternate-language wiring intact**

Preserve title, language switch, `hreflang`, and localized routes through the shared props.

- [ ] **Step 3: Commit**

```bash
git add src/pages/index.astro src/pages/pt/index.astro
git commit -m "refactor: route homepage locales through shared component"
```

### Task 4: Tighten mobile layout and featured detail behavior

**Files:**
- Modify: `src/components/PortfolioHome.astro`
- Modify: `src/data/homeContent.ts`

- [ ] **Step 1: Rebalance mobile spacing**

Adjust sticky navigation, side column collapse, contact spacing, cards, and feature spacing so narrow viewports feel intentional instead of compressed.

- [ ] **Step 2: Refine featured detail copy and layout**

Keep the existing case structure, but rewrite the expandable detail into a cleaner editorial sequence and use the available width better.

- [ ] **Step 3: Commit**

```bash
git add src/components/PortfolioHome.astro src/data/homeContent.ts
git commit -m "feat: improve homepage mobile layout and featured detail"
```

### Task 5: Stabilize interactive behavior and verify

**Files:**
- Modify: `src/components/PortfolioHome.astro`

- [ ] **Step 1: Make graph density respond to breakpoint changes**

Rebuild graph groups when the viewport crosses the mobile threshold instead of only resizing the canvas.

- [ ] **Step 2: Re-check tabs and contact interactions**

Keep the active panel logic scoped to the shared component and preserve the contact form submission flow.

- [ ] **Step 3: Run verification**

Run: `npm.cmd run build`
Expected: `astro build` completes successfully with no errors

- [ ] **Step 4: Commit**

```bash
git add src/components/PortfolioHome.astro
git commit -m "fix: stabilize homepage interactions across breakpoints"
```
