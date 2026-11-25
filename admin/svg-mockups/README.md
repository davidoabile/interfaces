# All SVG mockups

[Open the complete gallery](index.html).

**71 screens, with 1,136 SVG selections** across iOS/iPadOS and Android, light/dark themes, and phone, compact tablet, portrait tablet and landscape tablet layouts. Each selection opens an existing editable SVG. The new work has no separate raster exports or contact sheets.

| Set | Screens | SVG selections |
| --- | ---: | ---: |
| Account setup | 10 | 160 |
| Login and onboarding | 12 | 192 |
| AOS workspaces | 49 | 784 |
| Total | 71 | 1,136 |

The gallery reuses the existing 976 onboarding/AOS SVGs. It does not duplicate those assets into a second export set. Longer existing screens use their full-scroll SVG; new account screens have one full-content SVG each, rather than separate viewport/full versions. The native viewport size and content height are shown beside the preview. Satoshi fonts are embedded in the current SVG selections so they retain their typography when viewed directly.

## Personal signup

Personal details → three security questions/answers → five-digit AOS PIN → six-digit verification → Build your AOS → review detected Personas → review/save a Persona → existing personal workspace.

This follows the old Flutter signup, security questions, PIN and verification routes. Successful registration arms first-run AOS setup once. The maintained first-run page supports speaking, files, camera, photo library and pasted text. The review screens use an illustrative My.Work Persona and preserve review before saving. An extra PIN-confirmation step was not invented.

The question dropdowns retain the existing question set from `security_questions_page.dart` in the SVG metadata; the mockups show unselected choices and blank answers. These are visual states, not a replacement security policy or an implemented registration service. Continue/verify actions are explicit review affordances; native PIN/verification completion must follow the app's actual validation and request handling.

## Business account

Select a permitted organisation → select an existing entity, or add an entity under that organisation → existing address → review → business ready.

The existing organisation path does not register another organisation. The add-organisation action remains available and leads to the existing organisation form before adding an entity. One organisation can contain multiple entities. Choosing an existing entity preserves its identity and access role; it does not grant owner rights or register a duplicate. Existing entity continuation is illustrated as the boundary into its workspace, not simulated live access.

The account actions link to the same platform, theme and size. Existing authentication SVG actions are linked to the appropriate new account steps and the existing address/review/success states. Search controls and alternative unselected organisations are static review examples; the gallery is a design catalogue rather than a running native app.

## Build and check

```sh
node admin/login-register/account-flows/build.cjs
node admin/login-register/account-flows/wire.cjs
node admin/svg-mockups/build.cjs
python3 admin/svg-mockups/verify.py
node admin/svg-mockups/verify-gallery.cjs
```

`build.cjs` here assembles the catalogue and embeds the approved fonts in reused SVGs when needed. It does not render PNGs. `verify.py` parses all selected SVGs, checks dimensions, source/navigation links and screen coverage, and checks the registration field/digit counts. `verify-gallery.cjs` executes the generated gallery script across all screen/filter selections and checks categories and comparison controls. See [verification.json](verification.json).

Rendering for visual inspection stays in memory. Existing historical PNGs are retained without further exports. The current SVG gallery is the main review entry point.
