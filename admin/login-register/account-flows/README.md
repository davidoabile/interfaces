# Account setup

[Open all SVG screens](../../svg-mockups/index.html#setup-01).

The complete set has **10 account screens in 160 SVG selections**: both native platforms, both themes, and four phone/tablet layouts. Each screen has one full-content SVG per selection. There are no new PNGs, raster contact sheets or duplicate viewport/full exports.

| Screen | State |
| --- | --- |
| 01 Personal account | Names/email, optional phone/country/postcode |
| 02 Organisation selection | Existing organisations the member can manage |
| 03 Entity selection | Existing entities, with an add-entity option |
| 04 Add entity | Explicit parent organisation and entity details |
| 05 Security questions | Three question/answer pairs from the maintained signup flow |
| 06 AOS PIN | Five-digit setup |
| 07 Verification | Six-digit email code |
| 08 Build your AOS | Speak, file, camera, library or pasted text |
| 09 Review Personas | Inspect the proposed Persona from the shared experience |
| 10 Persona review | Check details and capabilities before saving |

The existing address, review and business-ready screens are reused through links, as are the personal workspace screens. Organisation/entity relationships, required fields, optional ABN and the 2 MB entity-logo limit remain explicit. Illustrative names, counts and roles are not live account data.

Personal setup is grounded in the old Flutter `sign_up_page.dart`, `security_questions_page.dart`, `pin_code_page.dart`, `sms_code_page.dart`, `build_your_aos_page.dart` and `resume_personas_page.dart`. Security question candidates are those already in the source; questions and answers in the mockups are unselected/blank. No new recovery process or PIN-confirmation requirement was added.

The initial light-iOS review SVGs remain at this folder's root. Other SVGs are in `<platform>/<theme>/<layout>/`. All themes retain original logo vectors, the supplied AI icon and DNA background, embedded Satoshi fonts, compact type and approved spacing. Dense content scrolls; larger layouts retain readable form widths and show the setup progress.

Run `node admin/login-register/account-flows/build.cjs` to update the SVGs, then `node admin/login-register/account-flows/wire.cjs` to link authentication entry points. The unified SVG gallery and checks are documented in [the gallery README](../../svg-mockups/README.md). Do not run the historical PNG-producing builders for new work.
