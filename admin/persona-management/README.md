# Linked Persona-management mockups

[Open Persona management](../global-mockups/index.html#macos/persona-home/light).

The first screen is approved. The user explicitly confirmed a creation wizard. The current set covers Persona management only: list/search/filter, identity and images, category-appropriate content, source origin, document input, type-or-speak editing, state changes, pending/acknowledged/offline/conflict states, and the creation wizard.

The wizard has four steps: Basic information → Constitution → Permissions → Review & add. Its description editors use the shared section model and typing/speaking. Constitutional references are reviewed within the Persona; the set does not design external DNA, training, publishing, marketplace, Guild, Flow, independent task management or settings operations. No compiled DNA is authored. Persona status is Active/Inactive; deactivation retains knowledge and no hard-delete action is offered.

All names, records, permissions and source contents are illustrative. SVG links navigate review states, not live operations. Registering or activating a Persona does not widen authority. Local availability, queued updates, acknowledgement, rejection and stale-version conflict are distinct. Source labels do not certify claims. Read-only fields are visual mockups, not browser form inputs.

The approved macOS overview is retained, with its route annotations connected to the new destinations. Ordinary links stay within platform and theme. The existing primary app navigation links to existing screens only; these modules are not redesigned. Alternative outcomes are exposed as Related review states in the gallery, outside the customer screen.

The example creation path is a consistent personal Persona. Alternate name/type pages describe choices and explicitly return to the example identity; the mockups are a finite set of review snapshots rather than a persistent combinatorial input engine. Access sharing has explicit review and acknowledgement states and remains separate from type choice or public distribution.

Build with `node admin/persona-management/build.cjs`, then `node admin/global-mockups/gallery.cjs`. The full pipeline runs base themes, settings and Persona management in order. Original Satoshi fonts are embedded as compressed WOFF without installing dependencies. SVG only; no PNG companions or contact sheets.

Inventory: **676 screen states / 9,464 SVGs**, seven layouts and two themes. [Every state is reachable](link-verification.json); the audit covers **64,428 links and 37,928 interactive controls** with no missing destinations or unintended platform/theme changes. Global structural checks cover SVG validity, fonts and text bounds. The previous 6,104-SVG render report is retained as history. Current new/revised feedback and integration screens passed in-memory decoding; no raster files were written.

Recovery UX now distinguishes retained edits, saved content, status failures and version conflicts. The shared semantic feedback component supplies danger/warning/success/info across both themes and all layouts. Twenty-four scoped recovery states were added. The previous full 6,104-SVG decode report is historical; the latest revised-feedback audit is in `../own-ai-mockups/render-verification.json`.

The latest correction includes a visible creation-wizard entry, thumbnails, file selection/upload and image/document preview journeys. [Media details](MEDIA_NOTES.md) · [Media library](../global-mockups/index.html#macos/persona-media-career-library/light) · [Upload files](../global-mockups/index.html#macos/persona-media-career-upload/light). `ux-verification.json` checks the reported gaps; `media-render-verification.json` is the current revised-screen decoding report. Section 26 supersedes the older generic feedback treatment.

Latest verification: all **64,428 Persona links** pass with every state reachable in all fourteen platform/theme combinations. Regression checks cover 14 overview entries, 56 wizard-stage variants, 98 media-library variants and 406 section-upload variants; the rejected generic feedback headings are absent. The current rendering audit decoded **9,366 revised SVGs** without errors or raster exports.
