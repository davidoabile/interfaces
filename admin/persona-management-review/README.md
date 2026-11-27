# Persona management: first macOS review

[Open the first SVG](01-persona-management-macos-light-v1.svg)

Approved macOS/light reference, 1440 × 1000. Current linked suite: [Persona management](../persona-management/README.md), including the explicitly requested four-step wizard. The user requested Persona management only, all linked Persona screens, and the usual first-screen approval before extending the set. The existing app navigation is context; no unrelated application module is being redesigned.

The master/detail view shows six illustrative Personas with My.Career selected. It supports identity/purpose, category-driven section editing, provenance review, document input, typing/speaking and Active/Inactive status. This is a management surface rather than a chat conversation. All client data, counts and content are illustrative. The original logo, embedded Satoshi and approved light brand are preserved.

The [route plan](route-plan.json) annotates every control. Its Persona destinations are connected in the current suite; this historical reference retains its original route annotations. Existing app-navigation items are marked separately. The full approved linked set is in the global gallery.

## Flutter source grounding

Inspected source root: `/Users/doabile/workspace/hedgetech-wt-native-sync/sigmar-investment-app/lib/src/`.

- `feature/personas/presentation/personas_home_page.dart`: lines 32–132 load/reload the current account's on-device Persona list and filter retired records. Lines 313–338 send Add through `PersonaIntroRoute`. Lines 409 and 486 open the shared `PersonaViewPage`.
- `feature/personas/presentation/persona_intro_page.dart`: lines 21–32 describe the canonical type-or-speak creation flow, with identity plus synced category-specific sections. Lines 185–200 pass the stitched description through the extraction/review path and return to the Persona list after save. The later explicit user instruction requires a creation wizard; its four-step structure follows `create_persona_page.dart`, while retaining shared type/speak, review/save and dynamic sections.
- `feature/personas/presentation/persona_view_page.dart`: lines 23–31 establish the shared read/edit surface. Lines 92–150 resolve category-specific section contracts. Sections use the same type/speak editors and persist through the Persona update path. Lines 867–968 expose Active and Paused, displayed as Inactive, retaining accumulated knowledge.
- `feature/personas/presentation/widgets/persona_section.dart`: accordion, section-edit and section-add actions. The generic fallback section list is in `feature/personas/domain/persona_sections.dart`; it is not a universal schema for every Persona category.
- `feature/personas/presentation/edit_persona_page.dart`: lines 88–155 provide additional update, outbox and stale-version evidence. This source is not a reason to substitute the older form for the canonical shared view/edit route.

Search/sort controls in the inspected hub call `_soon`; Teams/Archived tabs render empty placeholders. The new search and Active/Inactive filter presentation is a proposed management UX, not evidence those particular Flutter controls were complete. This distinction does not negate the working create/review/save/edit/status paths. No runtime or database operations were performed.

## Scope for the eventual linked set

Cover list/search/filter/empty states; Add Persona and explanation; identity/name/category/avatar; category-specific description sections; type/speak/document input and review; Persona review/save/cancel; shared view/edit and item provenance; update pending/failure/stale-version handling; and Active/Inactive confirmation/outcomes. Keep changes within the selected Persona and account.

Source-origin labels in the first sample are Document and Your words. They do not certify the truth of uploaded content. Constitutional/compiled DNA is not authored by the member. Do not introduce independent DNA, training, publishing, marketplace, Guild, Flow or task-management screens. Goals & Tasks here is only a Persona-owned content section. Do not offer hard deletion of a Persona.

Build: `node admin/persona-management-review/build.cjs`. SVG only; rendered in memory for inspection. No PNG or contact-sheet outputs.
