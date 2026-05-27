# Portfolio Editorial Redesign Design

## Context

The current portfolio already has strong fundamentals: clear information architecture, coherent project narratives, bilingual support, and a distinctive graph section. The core issue is visual identity. The site feels like a polished dark template rather than a portfolio with an authored point of view that matches the sophistication of the work.

This redesign is aesthetic, not structural in content scope. The objective is to preserve the existing content and sections while changing the visual language so the portfolio feels more editorial, more intentional, and more credible for a data analyst working across healthcare, machine learning, BI, and operations.

## Goals

- Introduce typographic contrast between narrative, emphasis, and raw data.
- Turn the graph colors into a site-wide visual system rather than a local accent.
- Give the graph section stronger visual protagonism.
- Increase information hierarchy inside project cards without changing their content model.
- Remove or replace elements that weaken credibility, especially the AI-generated portrait and weak hero counters.
- Improve rhythm between dense and spacious sections so the page feels designed rather than uniformly padded.

## Non-Goals

- No rewrite of the portfolio content itself.
- No new sections or major IA changes.
- No change to core project narratives, featured project structure, or contact form behavior.
- No brand redesign of name, logo, or multilingual routing.

## Chosen Direction

The approved direction is `Dark editorial with data accents`.

This direction keeps the dark atmosphere of the current site, but makes it feel authored and premium rather than template-like. It combines:

- a restrained editorial typography system
- a material dark background with subtle grain
- a functional color taxonomy derived from the graph
- stronger contrast between narrative and evidence
- more generous spacing around the graph and other hero moments

The visual tone should feel sophisticated, analytical, and calm, without becoming fashion-oriented or overdesigned.

## Visual System

### Typography

Use a three-layer type hierarchy:

- `Poppins` for most body copy, navigation, descriptions, and structural UI text
- `DM Serif Display` for selective editorial emphasis only, especially the highlighted fragment inside the hero H1 and possibly one or two major section titles
- `Space Mono` or `JetBrains Mono` for data, metrics, labels, and compact technical descriptors

Rules:

- Serif should be rare and meaningful.
- Monospace should only represent evidence, labels, counts, or data-like text.
- The site should no longer feel like everything lives at the same visual weight.

### Color Taxonomy

Promote the existing graph palette into global semantic accents:

- `#14b8a6` teal for Healthcare / Health Analytics
- `#a78bfa` violet for ML / NLP / Graph work
- `#fbbf24` amber for BI / SQL / Operations

Usage rules:

- project cards get a thin left border or accent line mapped to their cluster
- methodology numbers inherit the nearest relevant cluster color
- graph labels and graph interactions keep using the same three colors
- selected separators and small highlights may use these colors sparingly

The colors should not become decorative confetti. They should function as categorization and visual continuity.

### Background and Texture

Keep the site dark, but move away from a flat uniform black. The new background should feel like dark graphite or editorial paper stock with soft tonal variation.

Use:

- very subtle radial lighting
- reduced grid presence compared with the current template-like look
- a low-opacity grain or noise texture at roughly 3 to 5 percent perceived intensity

The grain should not read as an obvious effect. It should only add material quality.

## Page Architecture

### Hero

The hero remains the primary opening statement, but becomes more specific and more editorial.

Approved eyebrow:

`Data Analysis · Team Management · Health Operations`

Hero behavior:

- replace the current generic category-style eyebrow with the approved phrase above
- preserve the current H1 concept
- render the main sentence in `Poppins`
- render the highlighted fragment `readable data` in `DM Serif Display` italic
- remove the current weak counters such as `05 / 06 / EN·PT`

Optional metric treatment:

- either show 2 to 3 strong real metrics in mono
- or remove counters completely if the metrics do not feel truly impressive in context

Recommendation:

- use real metrics only if they materially reinforce credibility

### About

The About section should stop behaving like a profile card with a stock-like illustration.

Changes:

- remove the AI-generated portrait
- let the narrative text occupy more horizontal space
- keep the supporting cards or supporting context blocks, but restyle them to feel more editorial and less dashboard-like

The section should read as a trajectory and positioning statement, not as a profile widget.

### Graph Section

The graph is the most distinctive part of the site and should become a central authored moment.

Changes:

- increase vertical space around the section
- enlarge the graph stage
- reduce the sense that the graph is merely one module among others
- remove the boxy legend treatment
- place cluster labels directly in the graph area as floating text near each cluster

Suggested cluster labels:

- `Healthcare`
- `Models & NLP`
- `BI & Operations`

The section title should also become stronger and less generic than the current cloud-oriented naming.

The graph should feel like the conceptual center of the portfolio.

### Featured Project

The featured WHO case already has the right structural role and should remain the primary anchor case.

Refinement focus:

- align its typography and accent behavior with the new system
- keep it visually elevated, but bring it closer to the same editorial language as the rest of the page
- avoid a separate visual universe that feels disconnected from the redesigned cards

### Project Cards

The secondary cards should gain hierarchy and lose UI noise.

Changes:

- add a cluster-colored accent line on the left edge of each card
- surface the strongest metric in large monospace near the top of the content column
- keep the `Scope / Method / Decision value` structure
- replace pill tags with small plain text terms separated by `·`

Examples of promoted metrics:

- `47,714 facilities`
- `99,441 orders`
- `918 observations`

The cards should no longer feel equal-weight and repetitive. They should feel related but individually legible.

### Methodology

The methodology content is currently dense and visually uniform.

Changes:

- move away from six equal-feeling boxes if possible within the existing markup constraints
- increase vertical spacing between items
- add subtle dividing lines
- color the numbers using the semantic accent system

The result should feel like a sequence or progression rather than a utility grid.

### Contact

The contact section should feel clearly separated from the analytical stack above it.

Changes:

- add a full-width or near-full-width transition line using the three semantic colors before the contact section
- lighten the visual heaviness of form containers where possible
- preserve functionality and clarity

The page should feel like it reaches a designed conclusion.

## Interaction and Motion

Motion should support refinement, not call attention to itself.

Guidelines:

- keep existing reveal behaviors if they remain elegant after the redesign
- prefer slower, smoother fades and upward transitions
- avoid flashy motion or high-frequency interaction effects
- preserve graph interactivity, but let the visual framing do more of the work

## Responsive Behavior

The redesign must preserve mobile usability.

Key expectations:

- hero typography should remain expressive without collapsing into oversized blocks
- graph labels may need simplified positioning or reduced density on mobile
- project metrics must remain visually distinct even in single-column cards
- the editorial rhythm should survive the mobile stack, not collapse into identical padded boxes

## Implementation Notes

The current homepage is heavily authored inline inside `src/pages/index.astro` and `src/pages/pt/index.astro`, with large inline style blocks and script-driven enhancements. The redesign should work with that architecture rather than trying to introduce a broad structural rewrite during the same pass.

Implementation should focus on:

- revising the font imports
- replacing the current color token system
- updating hero, about, graph, methodology, project card, and contact styling
- removing portrait usage from both language versions
- adjusting scripts only where needed for graph labels, project card structure, or section naming

## Testing Strategy

Verification should include:

- visual review in desktop and mobile widths
- confirmation that hero hierarchy matches the new typography system
- confirmation that project cards display promoted metrics cleanly
- confirmation that graph labels remain legible and non-overlapping
- confirmation that the contact transition feels intentional
- bilingual parity review between English and Portuguese homepages

## Risks and Mitigations

### Risk: The redesign still feels like a styled template

Mitigation:

- reduce generic pills and boxed UI
- strengthen serif restraint
- use the semantic colors consistently instead of broadly

### Risk: Too much serif makes the site feel fashion-oriented

Mitigation:

- confine serif usage to hero emphasis and rare headline moments

### Risk: The graph becomes visually crowded when labels are moved into the canvas area

Mitigation:

- render floating labels as layered HTML overlays if needed instead of canvas text
- simplify on mobile

### Risk: Removing the portrait leaves the About section visually empty

Mitigation:

- rebalance the section with stronger composition, spacing, and supporting editorial blocks

## Success Criteria

The redesign is successful if:

- the site feels authored and distinctive rather than template-derived
- the hero immediately communicates sophistication and clarity
- the graph becomes a memorable centerpiece
- project cards feel more hierarchical and less repetitive
- the portfolio looks more credible after removing the AI-generated portrait
- the bilingual pages remain visually consistent
