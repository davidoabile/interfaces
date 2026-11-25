# Sigmar personal AOS native mockups

**Current review:** [All SVG screens](../svg-mockups/index.html). SVGs are the current deliverables; raster exports and their historical build instructions below are retained as history.

Native adaptations of all **47 supplied reference screens**, plus the approved returning-user briefing and complete side menu: **49 screen designs × 2 platforms × 2 themes × 4 layouts = 784 viewport compositions**. Editable SVG and PNG are supplied for each composition. Dense screens also have full-scroll SVG and PNG companions.

Open [the gallery](index.html). Choose platform, theme, size and screen; switch between first viewport and full scroll. Compare themes side by side. The gallery works offline without a dev server. [Source map](source-map.md) links every design to the original reference and its phone preview. [Verification](verification.json) records the export checks. The login/register set is separate: [192 mockups](../login-register/native-mockups-v2/index.html).

## Screen coverage

| Area | Supplied screens |
| --- | ---: |
| Home, Personas, Career, Knowledge, settings, DNA, opportunities, Workers | 10 |
| Flows, designer and tasks | 3 |
| Agreements and review | 2 |
| Blackboard and shared context | 2 |
| Training Hub, setup, research, evidence, training, evaluation, release and monitoring | 18 |
| Marketplace, purchase, payment, linking and licences | 8 |
| Publishing, licence/pricing, review and readiness | 4 |
| Additional returning-user briefing and menu state | 2 |
| **Total** | **49** |

The reference inventory is `../sigmar_aos_admin/00_Index/README.txt`, corroborated by the matching `../Sigmar_Individual/` images. This is a native adaptation of the approved direction and supplied content, not a claim that the user separately reviewed every generated image.

## Approved behaviour retained

- Personal AOS remains a conversation with relevant workspaces. No bottom app menus. Narrow layouts use a hamburger drawer; wide layouts use the complete grouped sidebar. Flows and Agreements remain reachable from the supplied Flow workspace structure.
- Every conversation composer has a prominent microphone, “Type or talk to Sigmar”, a Persona selector and attachment access. Voice capture, transcript review and typed-message sending are implementation requirements recorded in the shared requirements; static icons do not record audio.
- First login offers relevant starting actions. Returning login explains a personal state, proposes concrete changes and quantifies the effect before approval. The returning example preserves the approved arithmetic: 90 minutes moved, from 60 minutes over capacity to 30 minutes free today. This is redistribution, not effort saved.
- All records are illustrative. Work, learning and family context is shown only as a permitted example. Original business-scoped reference examples, such as Retail Operations purchasing a licence or a Project Owner reviewing work, retain their explicit Guild/role scope rather than becoming invented personal transactions.
- Consent starts unchecked. Licence continuation and work approval are disabled in the unaccepted state. Review and request-change paths remain visible.
- A failed fitness scenario remains failed: 0.76 against a required 0.80. Publication stays blocked. Evidence, holdout independence, exact candidate versions, release gates and read-only evaluation semantics remain explicit.
- Payment verification does not activate DNA. The purchase Flow retains licence review, payment, verification, linking and completion. The source example is A$390 + A$39 GST = A$429 per month; these are example commercial records, not current product pricing.
- The Flow designer uses draft Task/Approval/End concepts and input labels supported by the old Flutter `flow_models.dart` and `flow_node_inputs.dart`. Contracts and Terms have their own tabs, not invented canvas nodes. This mockup is not executable HTQL and does not validate a Flow grammar or promise a particular compiled topology.

## Layout and assets

| Layout | iOS / iPadOS logical frame | Android logical frame |
| --- | --- | --- |
| Phone | 393 × 852 | 412 × 892 |
| Compact tablet | 600 × 960 | 600 × 960 |
| Portrait tablet | 834 × 1194 | 834 × 1194 |
| Landscape tablet | 1366 × 1024 | 1366 × 1024 |

PNGs are exported at twice the logical dimensions. SVGs remain editable. Full-scroll captures retain the logical width and extend the height to expose all adapted content; first-viewport captures retain the dimensions above. Scroll companions are content reviews, not extra device sizes or a requirement to stretch a physical screen.

Original logos and supplied Sigmar AI artwork are imported as vectors. Warm theme tokens, compact Satoshi Regular/Medium, dark text on copper, faint blurred DNA, suitable safe areas and native control shapes follow [MOCKUP_REQUIREMENTS.md](../../MOCKUP_REQUIREMENTS.md). Essential controls use visible boundaries. Android primary controls are capsules with 48 dp targets; iOS controls use 44 pt targets. Larger screens reflow modules and cap readable conversation width; font size is not inflated to fill space.

Dense desktop tables are reorganised into titled cards, row details and statuses on mobile. The first viewport may show only part of a workspace; use its full-scroll export to inspect all sections. Tabs are horizontally scrollable on narrow screens; their complete labels are retained in the screen model and SVG metadata. The persistent sidebar begins at wide layouts; smaller tablets use the same complete drawer as phones, never a shortened rail.

## Build and review

Run from the project root:

```sh
node admin/aos-native-mockups/build.cjs
node admin/aos-native-mockups/catalogue.cjs
node admin/aos-native-mockups/contact-sheets.cjs
node admin/aos-native-mockups/verify.cjs
node admin/aos-native-mockups/verify-gallery.cjs
```

`components.cjs` resolves the existing local `sharp` package and Satoshi font configuration. Resolve those environment-specific dependencies before rebuilding on a different machine. Output PNGs and the embedded-data SVG artwork are self-contained, apart from the SVG viewer needing Satoshi installed to match the font exactly. PNGs preserve the reviewed lettering.

`screens.cjs` is the source content model. `manifest.json` indexes every export and its original source. Builders run PNG exports in three independent lanes within one process. Use `AOS_SCREENS`, `AOS_PLATFORM`, `AOS_THEME` and `AOS_LAYOUT` environment variables for a targeted rebuild; these write `sample-manifest.json` without replacing the full manifest.

Representative phone, tablet and full-scroll outputs and the contact sheets are visually reviewed. Export verification checks completeness, source links, dimensions, microphone presence, consent state and action target geometry. The generated gallery script is also exercised across all 784 screen/filter selections, full-scroll links and theme comparison. These static files do not demonstrate native runtime, text enlargement, real permissions, payment processing or working backend integration.
