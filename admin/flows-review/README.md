# Flow theme refresh: first macOS review

[Open the Flow designer](01-flow-designer-macos-light-v1.svg).

The user requested the previously designed Flows in `admin` be updated to the current theme. This is one first macOS/light sample for approval, following their standing first-mockup preference. It is not a completed Flow batch. The current global gallery is unchanged.

The [source inventory](source-inventory.json) identifies 27 original JPG references: designer/add-step/publish review, contract setup and review, templates, terms, triggers, replay, signing and HTTP steps, plus CMS/commerce-linked Flow states. The first sample is grounded in `../14-Flow-Designer.jpg`, `../23-Flows-Add-Step.jpg` and `../24-Flows-Publish-Review.jpg`. Original references are intact.

Preserved in this review: explicit Acme Studio/Commerce project context, order_sync branch structure, approval_cond inputs and condition, the human Review path, inventory completion, configuration/HTQL/validation tabs, project-default permission summary, and historical run inspection/filter/column/export controls. Historical records are illustrative and separate from the current unexecuted draft. Numeric run amounts are display examples, not financial operations. Dense spreadsheet editing is not introduced for execution/audit records.

The outer navigation follows the approved chat-first hierarchy, with workspace context kept explicit. Satoshi Regular/Medium is embedded; logos use the exact original vector. Cool neutral surfaces, restrained copper, finer rules and shared semantic feedback replace the older beige/orange treatment. Publish stays disabled until validation and publish review prerequisites are satisfied. This is a design sample, not executable Flow grammar or a real validator.

Controls are annotated in [route-plan.json](route-plan.json). They are planned destinations for the approved linked batch, not fabricated links or live operations. After first-sample approval, preserve source-specific fields, conditions, agreement and approval gates while applying the accepted refresh to the remaining references, both themes and established native/web layouts. Use event-specific messages, image/document evidence controls and named scopes where required.

SVG only. Rendering is inspected in memory; no PNG or contact-sheet exports are written. Build with `node admin/flows-review/build.cjs`.


## Corrected view/edit split

The user clarified that v1 works as an opening/read-only view, and requested an explicit **Edit Flow** button leading to a separate drag-and-drop designer. Current review states: [Flow view v2](02-flow-view-macos-light-v2.svg) → [Edit Flow v2](03-flow-designer-macos-light-v2.svg). Both show the same `order_sync` example, original six-node topology and branch meanings. The view retains the accepted inspection/run-history layout. Its edit-mutating controls are removed or marked read-only. v1 is retained as history.

The editor follows the inspected Flutter implementation in `/Users/doabile/workspace/hedgetech/sigmar-investment-app/lib/src/feature/flows/presentation/flow_builder_page.dart`: a free-positioned 2D `DragTarget` + `InteractiveViewer`, movable 200×66 rounded cards, click-to-edit, node-menu connections, pan mode that locks node movement, zoom and a nonmodal Add Node tray. Palette clicks append; drops position a new node and open its editor. Existing incoming connections are not overwritten by auto-connect. Exact source palette grouping is retained: **14 Actions and 4 Logic** items from `flow_models.dart`; Contracts and Terms stay in their own tabs. The six tabs are Builder, Details, Contracts, Terms, Metadata and Audit Log. The editor uses Save and Preview compiled Flow, with review/Approve marking Ready; it does not substitute Publish/Validate for that source interaction.

The user referenced Shopify Flow. The [official workflow editor guide](https://help.shopify.com/en/manual/shopify-flow/create/workflow-editor) confirms opening a workflow then choosing Edit, a top-to-bottom draggable canvas and selected-step configuration. It is an interaction reference, not a replacement specification: Shopify's single-predecessor/no-branch-convergence restriction is not imported into Sigmar, whose Flutter model supports its own edge and merge behaviour. Sigmar's brand and palette remain original.

These two SVGs illustrate the navigation and interaction affordances, not a live draggable web application. The links between view/edit work; remaining edit actions are route annotations for the later approved batch. No runtime, provider, financial or engine operations occur. The corrected designer awaits visual approval before the full inventory and theme/device variants.

Build: `node admin/flows-review/build-flutter.cjs`. [Checks](flutter-verification.json) verify matching Flow identity, two-way navigation, 18 palette entries, six card handles, source tab structure, fonts and canvas bounds. Both SVGs decoded in memory; no raster exports.
