# macOS Discover: first proposal

**Global reference direction recorded in requirements section 16.** Further screen/theme/device samples still require first-mockup approval. One light macOS SVG at 1440 × 1000 logical units. No further screens or variants have been generated.

[Open the current editable SVG: v3](01-discover-macos-light-v3.svg)

V3 adds Projects directly after Discover. It introduces fine section rules, muted copper icon strokes, soft surface gradients and restrained card/composer depth. This is the same review screen. The user instructed that this design language apply globally, including web and small devices; see [requirements section 16](../../MOCKUP_REQUIREMENTS.md#16-global-sigmar-design-standard-26-november-2026). [Previous colour proposal: v2](01-discover-macos-light-v2.svg).

The layout was accepted; the warm background colours were rejected. V2 proposes cool neutral backgrounds, white cards, charcoal typography and primary action, with copper retained for the brand and microphone. This revised palette awaits approval. [V1 remains as history](01-discover-macos-light-v1.svg).

The short sidebar prioritises conversations. Discover presents twelve existing destinations as tiles, grouped into Your space, Explore and DNA. Workers remains separate from Flows. Profile-menu destinations proposed for the next stage are Purchases & licences, account switching, Add business account and Settings.

The window uses macOS traffic-light controls and a sidebar toggle, the original vector Sigmar logo, embedded Satoshi Regular and Medium, and the proposed cool neutral light palette. The composer retains attachments, typing and a labelled 44 × 44 microphone target. Chat titles and the account identity are illustrative.

Build with `node admin/macos-discover-review/build-v3.cjs` from the project root. The builder uses the existing shared vector/icon utilities and approved local Satoshi font files. The SVG is self-contained for review. Rendered in memory for visual inspection; no PNG export was saved. Controls illustrate the layout and are not an implemented native app.
