# Refined native login and onboarding mockups

**Current review:** [All SVG screens](../../svg-mockups/index.html). SVGs are the current deliverables; raster exports and their historical build instructions below are retained as history.

Updated 26 November 2026 after approval of the revised login spacing and the instruction to restore the DNA background throughout onboarding. All 12 existing authentication/onboarding states are adapted in both themes, both native platform treatments and four layouts. [Project requirements](../../../MOCKUP_REQUIREMENTS.md), sections 15.5–15.6. Individual adaptations remain available for review.

Open [index.html](index.html) to browse the set. Choose a platform, theme and layout, then open an individual viewport PNG, editable SVG or full-scroll companion.

## Coverage

**192 individual compositions:** 12 screens × 2 native platform treatments × 2 themes × 4 layouts. Each composition has an SVG source and PNG export at 2× logical dimensions. There are also 44 full-scroll SVG/PNG companions for longer forms. There are also 32 contact sheets, with six screens per sheet.

| Dimension | Variants |
| --- | --- |
| Platform | iOS/iPadOS, Android |
| Theme | Dark, light |
| Phone | 393 × 852 logical units |
| Compact tablet | 600 × 960 logical units |
| Portrait tablet | 834 × 1194 logical units |
| Landscape tablet | 1366 × 1024 logical units |

| Screen | Content reference |
| --- | --- |
| 01 Login | [Original](../01-login.jpg) |
| 02 Verify passcode | [Original](../02-verify-passcode.jpg) |
| 03 Select account | [Original](../03-select-account.jpg) |
| 04 Organisation details | [Original](../04-business-organisation.jpg) |
| 05 Business entity | [Original](../05-business-entity.jpg) |
| 06 Business address | [Original](../06-business-address.jpg) |
| 07 Review business | [Original](../07-business-review.jpg) |
| 08 Business ready | [Original](../08-business-success.jpg) |
| 09 Session locked | [Original](../09-aos-pin-lock.jpg) |
| 10 Authorise HTQL CLI | [Original](../10-cli-authorisation.jpg) |
| 11 CLI login successful | [Original](../11-cli-login-success.jpg) |
| 12 Sign-in request expired | [Original](../12-sso-expired.jpg) |

Personal wide-screen authentication uses the approved nine-Persona teaser and central reveal. Business setup uses its four-stage progress visual. Lock screens keep the secure form centred. Large portrait login and passcode screens place the Persona teaser above the form. Compact views retain the subdued DNA background.

iOS/iPadOS uses segmented picker styling, rounded rectangular actions and checkmark selection. Android uses Material segmented buttons, floating field labels, radio selection and capsule actions. Light-theme selected controls use a darker copper indicator for contrast; primary action fills remain the shared copper.

## Shared spacing and background

The approved v7 login positioning carries through the set: 32-point phone gutters, a 329-point phone form, compact Satoshi type and clear spacing between control groups. Email/passcode request, six-digit code verification and five-digit AOS PIN unlock remain distinct states.

All screens use the original `sigmar-dna-light-background.png` or `sigmar-dna-dark-background.png` artwork, with blur and theme-coloured scrims. Forms, labels, logos and actions remain crisp. Longer onboarding forms scroll at readable control sizes. Their first-viewport previews show the initial content; open Full scroll PNG/SVG for the complete form and its action. No required fields, upload limits or setup steps were removed.

The earlier [native-mockups](../native-mockups/README.md) set is retained as history. Use this v2 gallery for current authentication designs.

## Files

- `ios/` and `android/`: native platform treatments.
- `<platform>/<theme>/<layout>/<screen>.svg`: editable source.
- `<platform>/<theme>/<layout>/<screen>.png`: rendered review image.
- [contact-sheets/](contact-sheets/): six-screen visual overviews.
- [manifest.json](manifest.json): complete file inventory, logical dimensions, field records and content bounds.
- [verification.json](verification.json): generation and gallery verification results.
- [build.cjs](build.cjs): shared layout and screen renderer.
- [catalogue.cjs](catalogue.cjs): review gallery and contact sheet builder.
- [verify.cjs](verify.cjs): file, content, geometry and gallery checks.

The SVGs use the project's original vector logo and AI artwork. DNA backgrounds are linked to `../samples/` through relative paths in each composition. Preserve the project folder structure when transferring editable sources. PNG exports are standalone.

## Rebuild

Run from any directory using the script path:

```sh
node build.cjs
node catalogue.cjs
node verify.cjs
```

The scripts currently resolve `sharp` and approved Satoshi fonts through the existing local `sigmar-aos-site` workspace and the sample font configuration. Resolve those paths before rebuilding on another machine. No network service or development server is required to browse the generated gallery.

Verification checks all 192 image exports and SVG references, viewport/full-scroll content bounds, the six-digit OTP and five-digit PIN, original business upload limits, the wide-screen Persona teaser, and all 16 gallery filter combinations. Visual review includes dense phone forms and contact sheets across the responsive layouts and themes. These are static mockups, not runtime Swift/Kotlin implementations or evidence of native accessibility conformance.
