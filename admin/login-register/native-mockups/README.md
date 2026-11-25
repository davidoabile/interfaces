# Native login and registration mockups

**Superseded by the [refined v2 set](../native-mockups-v2/index.html)** on 26 November 2026. This earlier set remains as design history.

Produced 25 November 2026 using the approved [project requirements](../../../MOCKUP_REQUIREMENTS.md). Individual screens are ready for review; generation does not establish user approval.

Open [index.html](index.html) to browse the set. Choose a platform, theme and layout, then open an individual full-size PNG or editable SVG.

## Coverage

**192 individual compositions:** 12 screens × 2 native platform treatments × 2 themes × 4 layouts. Each composition has an SVG source and PNG export. There are also 32 contact sheets, with six screens per sheet.

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

Verification checks all 192 image exports and SVG references, content bounds, the six-digit OTP and five-digit PIN, original business upload limits, the wide-screen Persona teaser, and all 16 gallery filter combinations. Visual review includes dense phone forms and contact sheets across the responsive layouts and themes. These are static mockups, not runtime Swift/Kotlin implementations or evidence of native accessibility conformance.
