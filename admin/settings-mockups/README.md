# Complete linked settings mockups

[Open Settings in the unified gallery](../global-mockups/index.html#macos/settings/light).

The user approved the first macOS sample and requested all settings screens with every link covered. **137 states in 1,918 SVGs.** This set extends the approved utility-window design to eight panes and their detail, confirmation, pending, success, rejection and recovery states. It includes both light and approved Sigmar charcoal themes on macOS, desktop web, narrow web, iPhone, iPad, Android phone and tablet.

SVG links navigate review files. They do not change accounts, send reports, download member data, alter device permissions or delete anything. Client names and authority states are examples. Permission changes require confirmation, retain member/Persona/Flow restrictions and show pending versus accepted/rejected states. Device-owned permissions use guidance rather than pretend in-app switches. Account and history removal preserve unresolved lifecycle boundaries; legal-document states show unavailable/retry/support rather than invented policy wording. Recovery, MFA and provider-secret workflows are not invented.

Native window controls and static input fields are illustrative. Every app navigation/action link has a matching target, including contextual links into the existing AOS, account, source, licence and lock screens. Explicit theme choices cross into the corresponding theme; ordinary links keep platform and theme. Review-only alternate outcomes appear under Related review states in the gallery, outside the customer screen.

Rebuild settings with `node admin/settings-mockups/build.cjs`, then `node admin/global-mockups/gallery.cjs`. The complete pipeline is `node admin/global-mockups/build-all.cjs`. `catalogue.cjs` contains the screen inventory; `build.cjs` applies responsive layouts and the global brand. Satoshi fonts are embedded. Long screens use one full-content SVG with the native viewport recorded separately. No raster companions are exported.

The settings link audit checks every app action target, same-layout/theme navigation, contextual destinations and reachability of every screen, including alternate review outcomes. The exact results are in [link-verification.json](link-verification.json). The approved macOS main composition is retained with working links. Contrast uses a slightly darker functional boundary on light controls; charcoal brand surfaces remain unchanged.
