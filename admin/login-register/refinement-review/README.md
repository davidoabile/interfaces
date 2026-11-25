# Login spacing refinement

**Status:** Revised spacing accepted on 26 November 2026, with the instruction to restore the DNA background and extend the treatment across onboarding. Current reference: [v8 PNG](01-login-light-ios-v8.png) and [v8 SVG](01-login-light-ios-v8.svg). The [full updated set](../native-mockups-v2/index.html) follows this treatment.

Earlier v7 record: The user found the earlier authentication positioning crowded and below the quality of the latest AOS designs. The v7 exports remain as history; v8 restores the approved DNA artwork.

[Light iOS PNG](01-login-light-ios-v7.png) · [Editable SVG](01-login-light-ios-v7.svg)

The revision uses a 393 × 852 logical frame, 32-point aligned gutters and a 329-point form width. It gives the logo, introduction, contact method, email field, primary action and account creation separate visual space. The form is placed around the usable centre of the screen, with privacy/help at the footer. Type stays compact: 22-point Medium heading, 16-point body/input, 14-point labels and method choices, 15-point primary action and 12–13-point supporting text. Brand vectors and the faint DNA background are retained.

The screenshot attached to the user's feedback includes five PIN boxes on the passcode-request screen. That combination is not the current authentication contract: requesting a code, entering the six-digit received code and unlocking with an existing five-digit AOS PIN are separate states. The revised sample preserves that separation. This does not introduce a new company login, password or identity process.

Render using `node admin/login-register/refinement-review/build.cjs`. The builder reuses the project's established Satoshi/font configuration and sharp dependency. SVG artwork embeds the background; PNG is exported at 786 × 1704. The rendered sample was visually checked for alignment, text fit and spacing.

The user authorised extending this accepted positioning treatment across platforms, themes, tablets and the remaining authentication states. Dense setup forms must retain their fields and readable control sizes; use scrolling or reflow when applying the treatment rather than forcing additional content into the same short space.
