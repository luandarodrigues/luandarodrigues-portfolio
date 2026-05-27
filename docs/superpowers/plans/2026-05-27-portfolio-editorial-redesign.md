# Portfolio Editorial Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restyle the English and Portuguese homepages into a dark editorial portfolio with typographic contrast, semantic graph accents, a stronger graph centerpiece, cleaner project cards, and no AI-generated portrait.

**Architecture:** Keep the current single-file Astro homepage structure in place and implement the redesign directly inside `src/pages/index.astro` and `src/pages/pt/index.astro`. Update markup, inline CSS, and the small client-side scripts only where needed for graph labels, project card hierarchy, and contact transition treatment.

**Tech Stack:** Astro 5, inline HTML/CSS/JS, Google Fonts, canvas graph interaction

---

## File Structure

- Modify: `src/pages/index.astro`
  - English homepage markup, inline styles, graph labels, project cards, and interaction copy
- Modify: `src/pages/pt/index.astro`
  - Portuguese homepage equivalent of the same redesign decisions
- Verify: `package.json`
  - Use existing `astro build` script for regression checks

### Task 1: Establish The Editorial Visual System In The English Homepage

**Files:**
- Modify: `src/pages/index.astro`
- Test: `npm run build`

- [ ] **Step 1: Replace the current font import with the editorial font stack**

```html
<link
  href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Poppins:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap"
  rel="stylesheet"
/>
```

- [ ] **Step 2: Run the build before changing CSS to confirm the current page still compiles**

Run: `npm run build`
Expected: Astro build completes successfully and outputs `dist/`

- [ ] **Step 3: Replace the root color tokens and base typography rules with the new editorial system**

```css
:root{
  --bg:#06070a;
  --bg-soft:#0e1117;
  --ink:#f5f1e8;
  --soft:#c9c1b3;
  --muted:#8e877c;
  --line:rgba(245,241,232,.12);
  --panel:rgba(255,255,255,.035);
  --health:#14b8a6;
  --models:#a78bfa;
  --ops:#fbbf24;
}
body{
  margin:0;
  background:
    radial-gradient(circle at 18% 10%, rgba(20,184,166,.10), transparent 24%),
    radial-gradient(circle at 88% 0%, rgba(167,139,250,.10), transparent 22%),
    radial-gradient(circle at 60% 75%, rgba(251,191,36,.08), transparent 26%),
    var(--bg);
  color:var(--ink);
  font-family:'Poppins',sans-serif;
}
body::before{
  content:"";
  position:fixed;
  inset:0;
  pointer-events:none;
  opacity:.2;
  background-image:
    linear-gradient(rgba(245,241,232,.018) 1px, transparent 1px),
    linear-gradient(90deg, rgba(245,241,232,.018) 1px, transparent 1px);
  background-size:96px 96px;
}
body::after{
  content:"";
  position:fixed;
  inset:0;
  pointer-events:none;
  opacity:.045;
  background-image:
    radial-gradient(rgba(255,255,255,.9) .6px, transparent .8px);
  background-size:10px 10px;
  mix-blend-mode:soft-light;
}
```

- [ ] **Step 4: Update the base type selectors so serif is rare and mono is reserved for data**

```css
.eyebrow,
.topnav a,
.tabbtn,
.cloud-btn,
.featured-label,
.card-metric,
.meta-line,
label{
  font-family:'Space Mono',monospace;
}
.hero h1,
.about h2,
.cloud-copy h2,
.featured-copy h2,
.contact h2{
  font-family:'Poppins',sans-serif;
}
.hero h1 em,
.section-accent{
  font-family:'DM Serif Display',serif;
  font-style:italic;
}
```

- [ ] **Step 5: Run the build to verify the new font and token changes compile cleanly**

Run: `npm run build`
Expected: PASS with no Astro syntax errors

- [ ] **Step 6: Commit the visual token foundation**

```bash
git add src/pages/index.astro
git commit -m "feat: add editorial visual system to english homepage"
```

### Task 2: Reshape The English Hero, About, Graph, And Contact Sections

**Files:**
- Modify: `src/pages/index.astro`
- Test: `npm run build`

- [ ] **Step 1: Update the hero eyebrow and H1 treatment to match the approved direction**

```html
<p class="eyebrow reveal">Data Analysis · Team Management · Health Operations</p>
<h1 class="reveal">
  Turning complex systems into <em>readable data.</em>
</h1>
```

- [ ] **Step 2: Remove the weak hero counters from the sidebar**

```html
<!-- Remove this block entirely -->
<div class="side-stats">
  <div class="stat"><strong>05</strong><span>cases</span></div>
  <div class="stat"><strong>06</strong><span>layers</span></div>
  <div class="stat"><strong>EN/PT</strong><span>site</span></div>
</div>
```

- [ ] **Step 3: Replace the About photo layout with a text-led editorial layout**

```html
<div class="about-body about-body--textual">
  <div class="about-cards">
    <!-- existing supporting cards stay here -->
  </div>
</div>
```

```css
.about-body--textual{
  display:block;
}
.about-text{
  border-left:0;
  max-width:68ch;
}
.about-cards{
  grid-template-columns:repeat(2,minmax(0,1fr));
  border-top:1px solid var(--line);
}
```

- [ ] **Step 4: Remove the AI-generated portrait markup**

```html
<!-- Delete the image node -->
<img class="about-photo" src="/assets/ChatGPT%20Image..." alt="..." />
```

- [ ] **Step 5: Promote the graph section by adding overlay labels and removing the boxed legend**

```html
<div class="cloud-stage" id="cloudStage">
  <canvas class="graph-canvas" id="graphCanvas"></canvas>
  <div class="cluster-label cluster-label--health">Healthcare</div>
  <div class="cluster-label cluster-label--models">Models &amp; NLP</div>
  <div class="cluster-label cluster-label--ops">BI &amp; Operations</div>
</div>
```

```css
.cloud-section{
  height:280vh;
}
.cloud-stage{
  height:min(820px,calc(100vh - 96px));
  min-height:620px;
}
.cluster-label{
  position:absolute;
  font:700 12px 'Space Mono',monospace;
  letter-spacing:.12em;
  text-transform:uppercase;
}
.cluster-label--health{left:8%;top:16%;color:var(--health);}
.cluster-label--models{right:10%;top:14%;color:var(--models);}
.cluster-label--ops{left:52%;bottom:12%;color:var(--ops);}
```

- [ ] **Step 6: Add the tricolor transition line before contact**

```html
<section class="contact-divider" aria-hidden="true">
  <span></span><span></span><span></span>
</section>
<section class="contact" id="contact">
```

```css
.contact-divider{
  display:grid;
  grid-template-columns:1fr 1fr 1fr;
  gap:0;
  margin-top:48px;
}
.contact-divider span:nth-child(1){height:2px;background:var(--health);}
.contact-divider span:nth-child(2){height:2px;background:var(--models);}
.contact-divider span:nth-child(3){height:2px;background:var(--ops);}
```

- [ ] **Step 7: Run the build to verify the structural English section changes**

Run: `npm run build`
Expected: PASS with no invalid HTML or Astro parse errors

- [ ] **Step 8: Commit the hero, about, graph, and contact restructure**

```bash
git add src/pages/index.astro
git commit -m "feat: restyle english hero graph and about sections"
```

### Task 3: Restyle The English Featured Area, Project Cards, And Methodology Rhythm

**Files:**
- Modify: `src/pages/index.astro`
- Test: `npm run build`

- [ ] **Step 1: Introduce promoted metrics and simplified meta lines in the project cards**

```html
<article class="card card--health">
  <span class="num">01</span>
  <div>
    <p class="card-metric">47,714 facilities</p>
    <h3>Mapping Primary Healthcare Units in Brazil</h3>
    <p>...</p>
    <p class="meta-line">Health Analytics · Geoanalysis · Data Quality · Public Health</p>
  </div>
</article>
```

```css
.card{
  position:relative;
  padding:26px 24px 24px 26px;
}
.card::before{
  content:"";
  position:absolute;
  left:0;
  top:20px;
  bottom:20px;
  width:2px;
  border-radius:999px;
}
.card--health::before{background:var(--health);}
.card--models::before{background:var(--models);}
.card--ops::before{background:var(--ops);}
.card-metric{
  margin:0 0 10px;
  color:var(--ink);
  font:700 18px 'Space Mono',monospace;
  letter-spacing:.06em;
}
.meta-line{
  margin-top:18px;
  color:var(--muted);
  font:400 11px 'Space Mono',monospace;
  letter-spacing:.08em;
  text-transform:uppercase;
}
```

- [ ] **Step 2: Remove the pill tag list from the English project cards**

```html
<!-- Remove this list -->
<ul><li>Health Analytics</li><li>Geoanalysis</li>...</ul>
```

- [ ] **Step 3: Refine the featured section to share the same palette and type language**

```css
.featured-shell{
  background:linear-gradient(135deg,rgba(20,184,166,.08),rgba(255,255,255,.025));
}
.featured-stat strong{
  color:var(--ink);
  font-family:'Space Mono',monospace;
}
.featured-question{
  font-family:'Poppins',sans-serif;
  font-weight:300;
}
```

- [ ] **Step 4: Convert the methodology grid into a more sequential vertical rhythm**

```css
#methodtab .grid{
  grid-template-columns:1fr;
  gap:0;
}
#methodtab .box{
  border:none;
  border-top:1px solid var(--line);
  border-radius:0;
  padding:22px 0 26px;
  background:transparent;
}
#methodtab .box span{
  display:inline-block;
  min-width:3ch;
}
#methodtab .box:nth-child(1) span,
#methodtab .box:nth-child(2) span{color:var(--health);}
#methodtab .box:nth-child(3) span,
#methodtab .box:nth-child(4) span{color:var(--models);}
#methodtab .box:nth-child(5) span,
#methodtab .box:nth-child(6) span{color:var(--ops);}
```

- [ ] **Step 5: Update the English graph section copy label away from `Scroll / Data Cloud`**

```html
<p class="eyebrow">Analytical Constellations</p>
```

- [ ] **Step 6: Run the build to verify cards, featured section, and methodology compile**

Run: `npm run build`
Expected: PASS with no CSS or Astro template issues

- [ ] **Step 7: Commit the English card and methodology redesign**

```bash
git add src/pages/index.astro
git commit -m "feat: redesign english cards featured area and methodology"
```

### Task 4: Mirror The Approved Redesign In The Portuguese Homepage

**Files:**
- Modify: `src/pages/pt/index.astro`
- Test: `npm run build`

- [ ] **Step 1: Port the same visual token, font, and background system to the Portuguese file**

```html
<link
  href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Poppins:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap"
  rel="stylesheet"
/>
```

- [ ] **Step 2: Replace the Portuguese hero eyebrow and remove the sidebar counters**

```html
<p class="eyebrow reveal">Data Analysis · Team Management · Health Operations</p>
<!-- remove .side-stats block -->
```

- [ ] **Step 3: Remove the Portuguese About portrait and apply the same textual layout**

```html
<!-- Delete -->
<img class="about-photo" src="/assets/ChatGPT%20Image..." alt="..." />
```

- [ ] **Step 4: Add the same cluster label overlays and remove the Portuguese legend**

```html
<div class="cluster-label cluster-label--health">Saúde</div>
<div class="cluster-label cluster-label--models">Modelos &amp; NLP</div>
<div class="cluster-label cluster-label--ops">BI &amp; Operações</div>
```

- [ ] **Step 5: Promote the Portuguese card metrics and replace pill tags with plain meta lines**

```html
<p class="card-metric">47.714 unidades</p>
<p class="meta-line">Health Analytics · Geoanálise · Data Quality · Saúde pública</p>
```

- [ ] **Step 6: Apply the same methodology rhythm and contact divider in Portuguese**

```html
<section class="contact-divider" aria-hidden="true">
  <span></span><span></span><span></span>
</section>
```

- [ ] **Step 7: Run the build to verify Portuguese parity**

Run: `npm run build`
Expected: PASS with both `/` and `/pt/` generated successfully

- [ ] **Step 8: Commit the Portuguese homepage redesign**

```bash
git add src/pages/pt/index.astro
git commit -m "feat: mirror editorial redesign on portuguese homepage"
```

### Task 5: Final Verification And Visual QA

**Files:**
- Modify: `src/pages/index.astro`
- Modify: `src/pages/pt/index.astro`
- Test: `npm run build`

- [ ] **Step 1: Run the full production build after all homepage edits**

Run: `npm run build`
Expected: PASS and Astro reports generated routes for `/` and `/pt/`

- [ ] **Step 2: Start the local preview server for manual visual QA**

Run: `npm run dev`
Expected: Astro starts a local server and prints a localhost URL

- [ ] **Step 3: Check the English homepage against the approved design criteria**

```text
- hero eyebrow reads "Data Analysis · Team Management · Health Operations"
- H1 emphasis uses serif italic only on the highlighted fragment
- sidebar counters are gone
- about section has no AI portrait
- graph stage is larger and uses floating cluster labels
- project cards show promoted metrics and plain-text meta lines
- methodology reads vertically with subtle separators
- contact area is introduced by the tricolor divider
```

- [ ] **Step 4: Check the Portuguese homepage for parity**

```text
- same editorial hierarchy as English
- no AI portrait
- same graph prominence and cluster overlays
- card metrics are promoted and tags are no longer pills
- contact divider and methodology rhythm match the English page
```

- [ ] **Step 5: Make any final CSS nips needed for mobile widths**

```css
@media (max-width: 920px){
  .cluster-label{font-size:10px;}
  .card-metric{font-size:16px;}
  #methodtab .box{padding:18px 0 20px;}
}
```

- [ ] **Step 6: Run the build one last time after QA tweaks**

Run: `npm run build`
Expected: PASS

- [ ] **Step 7: Commit the verified redesign**

```bash
git add src/pages/index.astro src/pages/pt/index.astro
git commit -m "feat: finalize editorial redesign for portfolio homepages"
```
