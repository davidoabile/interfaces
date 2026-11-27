# Sigmar interface mockup requirements

**Status:** Global design standard updated 27 November 2026, Australia/Melbourne. Section 16 is the current cross-platform authority, including the mandatory content and visual policy in section 16.6; earlier sections retain the design history and functional requirements.

**Purpose:** Give another AI enough information to continue these mockups without repeating the rejected design directions. This is a design project containing references and mockup assets. The sample builders are design utilities, not production application implementations.

## 1. Sources and precedence

Apply the user's latest instructions first, then the global standard in section 16, then the remaining project record, then the shared [Sigmar branding topology and design system](https://github.com/davidoabile/apcce/blob/main/htql/docs/website/sigmar-branding-topology.md). Consult [sigmar.io](https://sigmar.io/) for product context and maintained product language. Section 16.6 establishes mandatory Shopify-derived content and visual guidance and restricts Pitch Anything framing to commercial and voluntary connection invitations.

The shared guide describes a primarily dark system. The user explicitly requires **both light and dark themes on mobile and tablets**. The approved examples in this project establish the light treatment for this work.

Inspect these files before designing:

| Reference | Role |
| --- | --- |
| [Large landscape tablet, dark, v6](admin/login-register/samples/01-login-tablet-large-landscape-dark-v6.png) | Approved personal Persona teaser with central spotlight |
| [Large landscape tablet, light, v6](admin/login-register/samples/01-login-tablet-large-landscape-light-v6.png) | Matching light treatment |
| [Phone examples, dark, v6](admin/login-register/samples/01-login-native-dna-dark-v6.png) | Earlier phone reference for compact type, native controls and softened DNA |
| [Phone examples, light, v6](admin/login-register/samples/01-login-native-dna-light-v6.png) | Matching phone light treatment |
| [Regular portrait tablet, dark, v6](admin/login-register/samples/01-login-tablet-regular-portrait-dark-v6.png) | Responsive adaptation of the approved direction |
| [Regular portrait tablet, light, v6](admin/login-register/samples/01-login-tablet-regular-portrait-light-v6.png) | Matching portrait adaptation |

The user's final approval followed the **tablet v6 central spotlight teaser**. Portrait adaptations and phone references help carry that direction across sizes; they do not establish individual approval for every future screen. The user subsequently authorised the remaining login and registration mockups. The resulting [native set](admin/login-register/native-mockups/README.md) contains 192 compositions and is ready for individual screen review. It does not replace the approved visual references above.

Older sample versions, the initial six-screen generation boards in `ios/` and `android/`, scenic backgrounds and workflow-led personal login experiments are superseded explorations. Keep them as history; do not use them as visual authority.

## 2. Product and platform context

- The user now requires native macOS. Earlier desktop references used Tauri 2 and React; do not assume they define the current Mac implementation. The web portal shares the same global design system.
- iOS and iPadOS use native Swift interfaces. Android uses native Kotlin interfaces.
- Share the brand, semantic colours, typography, voice and content hierarchy across platforms.
- Adapt navigation, controls, safe areas, system chrome, keyboards and interaction conventions to each native platform.
- The personal login introduces **personal Sigmar AOS**. Its promotional visual must relate to an individual's life and personal Personas.
- Business screens may use relevant business examples when that is their actual context. A personal login must not default to business order approvals, inventory, Treasury or a generic enterprise dashboard.

## 3. Overall visual character

Sigmar is a sophisticated AI platform with a biological DNA identity. The interface must feel calm, precise, mature and carefully composed for demanding users.

Use the cool neutral surfaces, white raised surfaces, charcoal typography and restrained copper details in section 16, with comfortable space and small, professional app typography. Earlier warm beige surfaces are design history. Preserve a clear visual hierarchy: the login action is immediately usable; the surrounding visual invites curiosity.

Background interest comes from faint biological forms and the Persona teaser. Avoid plain empty compositions, loud technology illustrations, robots, circuit boards, neon, orange particles, lens flares, sharp decorative DNA and oversized marketing headlines. Bank login examples were inspiration for an engaging welcome surface, not permission to copy bank branding or features. The coastal experiment has been replaced by the DNA direction.

## 4. Original brand assets

Use the project's actual assets:

- [Main Logo.svg](logos/Main%20Logo.svg): original lockup with dark wordmark, used on light backgrounds.
- [Black BG Main Logo.svg](logos/Black%20BG%20Main%20Logo.svg): original white-wordmark artwork for dark backgrounds. In an editable composition, the background matte may be omitted while preserving every logo path, colour and proportion.
- [sigmar-ia-icons](sigmar-ia-icons/): supplied Sigmar AI state icons. The spelling `ia` is the actual folder name.
- [idle.svg](sigmar-ia-icons/idle.svg): the small AI coin used beside Help in the sample.

Never redraw the emblem as a generic Greek sigma, add dots or stars, reconstruct the wordmark with text, or ask an image model to invent the logo. Preserve its original proportions and clear space. The supplied mark has a distinctive flowing stroke; earlier generated substitutes were rejected.

Render vector artwork sharply. A background model may generate imagery; place the exact logos, text and controls in the editable composition afterwards.

## 5. Typography

Use **Satoshi Regular 400 and Medium 500** for authored app content. Keep the logo as artwork. Native OS-owned UI retains platform behaviour and typography where applicable.

| Role | Logical size / line height | Weight |
| --- | --- | --- |
| Login title | 22 / 28–30 | 500 |
| Body and input text | 16 / 24 | 400 |
| Field label | 14 / 20 | 500 |
| Primary button | 15 / 20 | 500 |
| Segmented control | 14 / 20 | 400–500 |
| Helper and secondary link | 13–14 / 18–20 | 400–500 |
| Caption and footer | 12–13 / 18 | 400 |
| Persona title inside the illustrative preview | About 15 / 20 | 500 |
| Persona description inside the illustrative preview | About 12 / 18 | 400 |

These are logical app dimensions, not the doubled pixel sizes of exported PNGs. Do not enlarge type simply to fill a tablet. Respect accessible text scaling and allow layouts to reflow.

Use actual supported font weights. Avoid synthetic semibold, heavy bold, compressed tracking or defaulting the whole interface to a different system font. The local approved font files used by the builders are currently at:

`/Users/doabile/workspace/hedgetech/workers/sigmar-aos-site/public/fonts/satoshi/`

The Regular and Medium OTF files are used through [fontconfig.xml](admin/login-register/samples/fontconfig.xml). This is an environment-specific dependency. If unavailable, locate the approved Satoshi assets rather than silently changing the family. Preserve applicable font licensing.

## 6. Theme contract

**Historical palette:** The table below documents the earlier warm direction. For new or revised work on every platform, section 16 supersedes these surface and action colours. Keep the contrast requirements and original brand artwork.

Use semantic tokens throughout the composition. Each theme applies to the entire screen, including illustrative UI and Persona cards.

| Token | Dark | Light |
| --- | --- | --- |
| Canvas | `#201C18` | `#F7F4EE` |
| Deep / presentation surround | `#171411` | `#E9E2D8` |
| Panel | `#2B2520` | `#E9E2D8` |
| Raised surface | `#332D27` | `#FFFAF4` |
| Selected surface | `#3B2B20` | `#F4E2D3` |
| Heading | `#E8DCCB` | `#29231F` |
| Body | `#BFB5A9` | `#514940` |
| Secondary text | `#A69B8E` | `#665C52` |
| Decorative border | `#494037` | `#CFC2B4` |
| Essential control border | `#918171` | `#8F8072` |
| Primary action | `#E87832` | `#E87832` |
| Text on primary action | `#1F1A16` | `#1F1A16` |
| Text link / heading accent | `#F08D4C` | `#9C450C` |

Use a theme-appropriate original wordmark. Keep dark text on copper buttons in both themes. Do not put a white screenshot or bright light-theme panel inside the dark login. If a product preview comes from an older light screenshot, reconstruct its relevant content with the correct theme tokens.

Validate actual rendered contrast for functional text and controls. Target at least 4.5:1 for normal text and 3:1 for essential control boundaries and meaningful graphics where applicable. The deliberately faded Persona artwork is decorative; it is not an interactive low-contrast menu.

## 7. DNA background

Use subtle, recognisable double-helix forms in copper and ivory, softly out of focus and partly outside the viewport. They should suggest biological intelligence and invite a second look.

Approved background assets:

- [Dark DNA](admin/login-register/samples/sigmar-dna-dark-background.png)
- [Light DNA](admin/login-register/samples/sigmar-dna-light-background.png)

Apply blur and reduced opacity at composition time. Keep the authentication region quiet, with a theme-coloured scrim protecting the form. Do not blur the logo, form, labels, buttons or functional links.

Starting values from the accepted direction:

- Phone background: Gaussian blur about 6 logical units, image opacity about 0.48, plus local scrims.
- Tablet background: Gaussian blur about 9 logical units, image opacity about 0.42, plus a quiet area around the form.

These are composition starting points. Match the approved appearance at the intended viewing size; do not mechanically scale blur with export pixel density.

## 8. Personal Persona teaser and central spotlight

On larger layouts, use the personal Persona visual from the reference. It is a **teaser blended into the background**, not a fully exposed catalogue.

- Use a soft, elliptical central pool of light, as if a torch gently reveals the middle of the visual.
- Reveal enough of a few central cards to create interest. Outer cards, icons, text and boundaries fade progressively into the surrounding theme.
- Keep the edges borderless in appearance. Individual card boundaries are very restrained.
- Keep the login outside the spotlight effect and fully crisp.
- Keep the light version consistent: the centre has more definition, while the edges dissolve into warm ivory. Do not place a dark vignette panel over the light screen.
- Keep this decorative composition static by default. Do not add looping motion or pointer-following effects without a subsequent request.
- Treat the faded cards as illustrative artwork, not clickable Persona selection. In production, hide decorative duplication from assistive technology and keep real authentication controls accessible.

The approved sample uses a 720 × 342 illustration area and a radial alpha mask centred at 50% / 50%, with a 62% radius. Its approximate falloff is:

| Gradient position | Artwork opacity |
| --- | --- |
| 0% | 0.96 |
| 22% | 0.82 |
| 47% | 0.32 |
| 72% | 0.07 |
| 100% | 0 |

The centre also has a very subtle theme-adjusted tonal wash. The sample's card fill opacity is 0.55 and border opacity is 0.45 before the reveal mask. These values describe the approved effect, not independently approved interactive component states.

Use the exact names and descriptions from the user's supplied reference, in this reading order:

| Persona | Description | Icon cue |
| --- | --- | --- |
| My.Health | Understand your health history. | Heart |
| My.Work | Get meaningful work done. | Lightning |
| My.Career | Prepare for opportunities. | Briefcase |
| My.Family | Share and plan together. | Family / people |
| My.Finances | Understand your money. | Stacked cylinder |
| My.Learning | Build your skills. | Graduation cap |
| My.Travel | Plan your next adventure. | Aeroplane |
| My.Home | Manage everyday life. | House |
| My.Legacy | Preserve what matters. | Sprout |

Use consistent restrained copper line icons, approximately 1.5–2 logical units in stroke. Allow descriptions to wrap naturally. The headline is **“Meet your Personas.”**, with restrained copper emphasis on “Personas.” Do not replace these approved names with invented labels such as Career guide or Personal planner.

## 9. Responsive composition

Respond to the **usable window**, including rotation, multitasking, safe areas and keyboard visibility. Device diagonals and screenshot dimensions are illustrative, not a list of exclusively supported devices.

| Available layout | Composition |
| --- | --- |
| Phone / narrow window | Single-column login with softly blurred DNA at the periphery |
| Compact tablet | Centred form with generous margins; omit the Persona teaser if it competes with authentication |
| Larger portrait tablet | Persona teaser above the form, with sufficient separation and no overlap |
| Wide landscape tablet | Persona teaser on the left and capped-width login on the right |

Use a maximum form width of approximately 420 logical units. Phone gutters start around 24; tablet margins grow with the available space. Keep forms comfortably sized rather than stretching fields across the screen.

Current sample builders switch to a side-by-side layout when width is at least 1024 and width/height exceeds 1.15. They show the portrait teaser when width is at least 768 and height at least 1100. Treat these as demonstrated starting points; choose based on whether the actual content fits, especially with accessibility text sizes or the keyboard visible.

Representative samples use phone 393 × 852, compact tablet 600 × 960, portrait tablet 834 × 1194 and landscape tablet 1366 × 1024. Verify intermediate sizes. Reflow or scroll when needed, keeping focused fields and the primary action reachable.

## 10. Native platform treatment

**iOS / iPadOS:** native segmented-picker treatment, suitable navigation/back affordances, restrained rounded rectangular buttons and text fields, authentic safe areas and system-owned status/gesture behaviour. Do not put iPhone camera-island chrome on an iPad.

**Android:** Material segmented controls with a selected-state indicator, outlined fields with floating labels and capsule primary buttons, suitable app bars and native system insets.

Preserve the shared Satoshi content system while adapting native control shapes. Aim for 44-point or 48-dp touch targets as appropriate to the platform. Mockup status bars are illustrative and are not app-owned controls to implement literally.

## 11. Authentication content and states

Use existing desktop files in [admin/login-register](admin/login-register/) as workflow/content references. Their older logos, large type and light desktop styling do not override this design record.

The first login screen contains:

1. Original Sigmar lockup.
2. “Log in to Sigmar”.
3. “Use your email address or mobile number.”
4. Email / Mobile number selection, with Email initially selected in the sample.
5. Visible Email address label and “Enter your email address” placeholder.
6. “Send passcode”.
7. “We’ll send you a one-time code.”
8. “New to Sigmar?” and “Create account”.
9. Privacy policy and Help, using the supplied small AI icon where shown.

Keep the existing passwordless authentication semantics. Do not add passwords, social login or new biometric alternatives merely because a reference bank uses them.

The existing content references cover login, passcode verification, account selection, business organisation/entity/address/review/success, AOS PIN lock, CLI authorisation, CLI success and expired sign-in requests. Important invariants:

- The one-time passcode has **six digits**.
- The AOS PIN has **five digits**.
- CLI authorisation concerns access for a terminal session; do not imply a CLI runs on the phone.
- Account selection distinguishes personal and business destinations.
- Business setup preserves the existing fields and four-step sequence.
- Organisation logo uploads allow up to 5 MB; entity logo uploads allow up to 2 MB in the provided source mockups.
- Show errors, expiry, loading and selection explicitly when that state is being designed. Preserve the source's permission and approval meaning.
- PIN recovery needs its maintained recovery specification before it is designed. Do not invent a new recovery or security process from the appearance of the lock screen.

## 12. Writing

Apply the mandatory content, tone and commercial-framing policy in section 16.6 to all new and revised copy.

Use concise first-party Sigmar language, Australian spelling and sentence case. Preserve the approved Persona names, including their `My.` prefix and punctuation.

Use factual, respectful microcopy. Avoid hype, financial or medical promises, invented capabilities, artificial urgency, excessive slogans and implementation details in the customer journey. Do not use em dashes or double dashes in customer-facing copy.

## 13. Authoring and review workflow

1. Read this file and the shared branding source. Inspect the approved images and the relevant original content mockup.
2. Use exact vector brand assets and real Satoshi font files in an editable layout. Keep original asset files intact.
3. Generate background artwork only when needed. Keep text, logos and controls deterministic so they remain accurate.
4. Save editable source and a sharp PNG preview inside the project. Use versioned filenames and preserve approved references.
5. Inspect the rendered result at a realistic device size. Verify typography, all text, both themes, native controls, spacing, legibility and content semantics.
6. For a new direction or component pattern, show the first screen before producing the full set. Follow later approval and instructions for extending the set.
7. Record approved changes here and identify the new reference files. Never infer approval from a file being newer or generated successfully.

Current editable builders:

- [Phone v6 builder](admin/login-register/samples/build-login-sample-v6.cjs)
- [Tablet v6 builder](admin/login-register/samples/build-tablet-samples-v6.cjs)
- [DNA background prompts](admin/login-register/samples/dna-background-prompts.txt)

The builders use local absolute font and `sharp` paths. Resolve those dependencies in another environment before running them. They demonstrate the approved composition; they are not reusable Swift, Kotlin, React or Tauri components. The tablet builder retains the internal function name `workflowPreview` from an earlier experiment, but its current v6 output is the personal Persona teaser.

## 14. Acceptance checklist

- [ ] Both themes are provided and internally consistent.
- [ ] Original logo and supplied AI icon assets are intact and sharp.
- [ ] Satoshi Regular/Medium and compact app type sizes are used.
- [ ] DNA is faint, blurred and atmospheric.
- [ ] Larger personal layouts use the approved personal Personas.
- [ ] Persona artwork fades into the background with only a soft central reveal.
- [ ] Login controls remain crisp, legible and visually primary.
- [ ] Native iOS/iPadOS and Android conventions are respected.
- [ ] Portrait, landscape and narrow windows fit without overlapping content.
- [ ] Functional contrast, touch targets and text enlargement are considered separately from decorative teaser opacity.
- [ ] Exact labels, digit counts, source fields and approval semantics are preserved.
- [ ] Editable sources and inspected previews are saved in the project.

## 15. Personal AOS landing-page work

The user clarified that the second part of this project is the **personal AOS assistant**, using the personal view in `admin/Sigmar AI personal and business UI.jpg`. Use its conversation-first content rather than the business overview dashboard.

The initial v1 [landing-page designs](admin/landing-page/README.md) were rejected. Their bottom navigation and shortened menu are not approved references. The authenticated interface keeps functional content fully legible. The faded central spotlight treatment remains a decorative login teaser, not a requirement to fade functional app content.

This landing-page direction is a new screen submitted for review. Do not infer approval of other authenticated screens from generating its variants.

### 15.1 Navigation and approval correction, 25 November 2026

- Personal AOS is a chat interface, like ChatGPT or Claude. **Never show app menus at the bottom.** Keep the conversation composer near the bottom; a system gesture indicator is not an app menu.
- Phones use a hamburger-triggered, scrollable side drawer. Larger screens use a suitable side drawer or persistent sidebar. Do not substitute a bottom tab bar or a shortened navigation rail.
- Use the new references in `admin/Sigmar_Individual/` and `admin/sigmar_aos_admin/`, especially `01_Home_Personas_Career_Knowledge/sigmar_ai_persona_workspace.jpg`.
- Preserve the menu groups and destinations: Workspace: My Personas, My.Career, Knowledge, My Tasks, Workers, Blackboard. Discover: Opportunities, Marketplace. DNA: My DNA, Training Hub, Publishing, Purchases & licences. Also retain New conversation, Search conversations, Recent conversations, Add business account and the profile menu.
- The source landing screen has six suggested actions: Explore career options, Review my priorities, Develop a new skill, Explore DNA, Train your DNA, Manage your licences.
- First produce **one sample for explicit approval**. Do not generate themes or device variants before that approval. A closed-drawer and open-drawer view of the same sample may be presented together to make the menu reviewable.

### 15.2 Returning-user state briefing, 25 November 2026

The user clarified that the generic welcome and suggested actions suit **first login**. On return, AOS must understand the person's current situation through their authorised Personas, tasks and Flows, then explain what can improve it. Do not simply reproduce another chat application's empty home.

- Greet the person by name when known. Explain the current state and its concrete causes in natural language, rather than leading with a task-count dashboard.
- Connect relevant personal context across authorised Personas. Work, learning and family may be related when the person has permitted it; missing access is not an empty or healthy state.
- Offer a specific next step: what AOS can prepare, schedule or change, when, and under which approval. Explain any waiting Flow or dependency that needs the person's attention.
- Quantify the difference using actual task estimates, availability, constraints and supported forecasts. Separate rescheduling, delegated effort and genuine time saved. Do not promise an emotional outcome or invent a stress score.
- Show enough detail to approve the exact changes, with an edit path and a way to inspect the underlying tasks and Flows. Nothing is changed merely by opening the conversation.
- Check the receiving day as well as today. Preserve deadlines, existing commitments and required review steps. A proposal cannot simply hide today's overload in tomorrow's calendar.
- In implementation, refresh the state when returning, expose its freshness, and qualify cached or incomplete information. Without duration or calendar data, describe the observed pressure and request the missing context rather than inventing precise free time. Forecasts require sufficient personal history and an honest confidence statement.
- Keep the conversation composer and the proper side menu. No bottom application navigation. Show one returning-user sample for approval before extending it to other devices or themes.

**Approved direction, microphone correction completed:** [Returning-user v4](admin/landing-page/returning-user-review/returning-user-v4.png), with [editable SVG](admin/landing-page/returning-user-review/returning-user-v4.svg) and [explicit example fixture](admin/landing-page/returning-user-review/example-day.json). The first-login sample remains separate in `admin/landing-page/first-screen-review/`.

The sample illustrates 7 hours planned against 6 hours available. Moving two flexible 45-minute tasks to an available slot tomorrow changes today's 60-minute overload into 30 minutes of breathing room. It moves 90 minutes of work; it does not save 90 minutes of effort. The fixture also reserves 30 minutes of capacity tomorrow after the moves, keeps both task deadlines on Friday, and protects school pickup today. These are illustrative records, not facts about the user's life.

**Evidence and capability boundary:** The old Flutter app's `lib/src/feature/home/presentation/widgets/command_chat_view.dart` opens with `_narrateOpening`, refreshes tasks with a local fallback, and calls `narrateDay`; actions use `askAos`. `lib/src/feature/reasoner/domain/day_narration.dart` derives only observable dimensions from real dated/open and Flow-linked tasks, narrates today and upcoming windows, and requires at least four recorded days before its statistical forecast path. That implementation supports the state-led conversation direction. It does not establish duration-based calendar optimisation or the particular cross-Persona rescheduling shown in this mockup. Those remain proposed behaviour requiring the relevant data and governed execution.

**Product grounding:** Follow the maintained [About vision and principles](https://github.com/davidoabile/apcce/blob/main/htql/docs/website/sigmar-about-page.md), [AOS page](https://github.com/davidoabile/apcce/blob/main/htql/docs/website/sigmar-aos-page.md), and [For individuals page](https://github.com/davidoabile/apcce/blob/main/htql/docs/website/sigmar-for-individuals-page.md). Personal context, shared knowledge and governed action guide the design. People decide; AI acts within authority. Publish only claims supported by evidence. AOS automation is expressed through Flows, not CLI Workers.


### 15.3 Voice input and approval, 25 November 2026

The user approved the returning-user direction subject to correcting the missing microphone: “People prefer talking than typing.” The correction is reflected in returning-user v4 and first-login v3, including its drawer board. Preserve earlier exports as history.

- Make speaking immediately discoverable in every AOS conversation composer. The empty composer shows a prominent microphone with the accessible name “Talk to Sigmar”, a 44 × 44 logical-pixel target and the prompt “Type or talk to Sigmar”. Keep attachment access visible.
- Keep typing available. In implementation, expose Send when text has been entered and retain a discoverable microphone action; do not make voice inaccessible when editing text.
- Start capture only when the person invokes it. Recording needs visible listening status, stop and cancel controls, and a reviewable transcript. Request OS microphone permission at that interaction and retain typing if permission is unavailable.
- Voice proposals follow the same authority and approval rules as typed requests. Recording or transcribing a request does not approve schedule changes.
- These files show the idle voice entry point. They do not implement microphone capture or establish approval of new recording-screen designs. Apply the approved composer to subsequent responsive adaptations; new screen directions still require a first sample.

### 15.4 Complete AOS native set authorised and produced

The user clarified that approval covered proceeding to all screens, not stopping after the approved sample. Apply that approval to the supplied 47-screen AOS inventory and its native adaptations; do not repeatedly request approval for each existing destination or responsive variant. Preserve the first-sample review rule for genuinely new directions or additional scope.

The complete adaptation set is in [admin/aos-native-mockups](admin/aos-native-mockups/README.md): 47 source screens plus the approved returning-user briefing and full side-menu state, across iOS/iPadOS and Android, both themes and four representative layouts. The [gallery](admin/aos-native-mockups/index.html) contains all 784 viewport compositions, with full-scroll companions for dense workspaces, and links to the original source for each screen. The [source map](admin/aos-native-mockups/source-map.md) records all destinations. The previously produced [192 login/register compositions](admin/login-register/native-mockups/index.html) remain separate.

Preserve source semantics when adapting: publication failures and incomplete gates stay blocked; independent holdout evaluation remains separate from training; payment verification does not activate DNA; unchecked required consent keeps approval/continuation unavailable; financial and Guild-scoped examples retain that explicit context. The Flow designer follows the old Flutter palette and input model rather than treating a desktop diagram as executable grammar. All exported records are examples, not live account data.

### 15.5 Authentication positioning refinement, 26 November 2026

The user reported that the login pages look crowded compared with the latest AOS designs and do not meet the expected professional quality. Review positioning and visual hierarchy against the current app, preserving original branding, compact Satoshi type and the existing authentication contract. Do not interpret the quality feedback as a request to add company credentials or a different authentication flow.

A first revised light iOS sample is available in [login spacing refinement](admin/login-register/refinement-review/README.md), with [PNG](admin/login-register/refinement-review/01-login-light-ios-v7.png) and [editable SVG](admin/login-register/refinement-review/01-login-light-ios-v7.svg). It uses 32-point gutters, a 329-point form width, more deliberate vertical spacing between control groups, and separate footer actions. This is a proposal awaiting the first-sample review, not a new approval or a replacement of the existing 192 exports.

The feedback screenshot combines PIN entry with requesting a passcode. Keep those states separate: initial contact entry requests a one-time code; verification takes six digits; the existing AOS unlock takes five PIN digits. Retain all required fields when extending spacing improvements to dense setup screens, using scroll/reflow where needed.

### 15.6 Accepted login spacing and shared onboarding background, 26 November 2026

The user accepted the revised login positioning and requested the existing DNA background and the same treatment on the other onboarding screens. This authorises completing the authentication/onboarding batch without asking again for the same spacing treatment.

Use the [refined v2 native set](admin/login-register/native-mockups-v2/README.md) as the current authentication output: all 12 source states, 192 viewport compositions across both native platform treatments, both themes and four layouts, plus 44 full-scroll companions. The [gallery](admin/login-register/native-mockups-v2/index.html) exposes viewport and full-scroll PNG/SVG links. The earlier native set and v7 sample remain as history.

- Current login reference: [v8 light iOS PNG](admin/login-register/refinement-review/01-login-light-ios-v8.png), with [editable SVG](admin/login-register/refinement-review/01-login-light-ios-v8.svg). It combines the accepted v7 positioning with the original, visibly blurred DNA background.
- Every login/onboarding state uses the same theme-appropriate original DNA asset, blurred at approximately 6 logical units on phones and 9 on tablets, with warm scrims preserving functional readability. Do not substitute a plain surface, invented background or different artwork between adjacent steps.
- Share compact Satoshi type, 32-point phone gutters, a 329-point phone form, aligned field labels, comfortably separated control groups and the original brand vectors. Tablet forms remain capped at 420 logical units; keep the approved larger-screen Persona teaser and business progress context.
- Long setup forms scroll at readable sizes. Supply complete content and actions in full-scroll exports; do not shrink or omit fields to fit a single viewport. Preserve the four business setup stages, organisation/entity upload limits and all required data fields.
- Keep initial contact entry, six-digit one-time verification and five-digit PIN unlock as separate states. No additional credential or company-authentication flow was requested.

### 15.7 SVG-only account setup additions

The user requested fewer redundant outputs, SVG-only mockups, a visible personal-account signup screen, and an organisation/entity choice when adding a business account.

- Deliver new/revised mockups as SVGs only. Do not also export PNGs, raster boards or large variant batches without a specific need or request. Existing raster files remain historical; this is not permission to delete them.
- Keep the wording concise. Prefer “choose”, “add”, “use” or “continue” where appropriate rather than repeatedly using “create/created”.
- Personal signup needs a distinct screen, separate from choosing an already existing personal workspace. Use the maintained profile fields and existing account-security sequence. Personal signup does not need business ABN fields.
- Business entry first lists existing organisations the member can manage. Show enough context, such as role and entity count, to choose correctly. Retain a separate add-organisation route.
- One organisation can contain multiple entities. After organisation selection, show its existing entities and an add-entity action. Selecting an existing organisation must not force another organisation registration.
- An existing entity retains its identity and permissions. A new entity belongs to the selected organisation, shown explicitly on the form. Keep entity details, address and review semantics; do not silently promote the member to owner of an existing entity.
- Current first review set: [account setup additions](admin/login-register/account-flows/index.html), containing four standalone SVGs: personal profile, organisation selection, entity selection and add entity. These use the accepted spacing and shared DNA artwork. Further platform/theme variants await review of the additions.

### 15.8 Complete remaining screens and one SVG gallery

The user requested the rest of the screens after the four account examples. Complete the account sequence and its responsive variants within the accepted visual direction; do not stop at another small review subset or request the same approval again.

The primary entry point is now [all SVG mockups](admin/svg-mockups/index.html): **71 screens in 1,136 SVG selections**. It includes the complete 10-screen account setup set (160 SVGs), 12 existing login/onboarding states (192 SVG selections) and 49 existing AOS states (784 SVG selections). Existing SVGs are reused rather than exported again as another format. Every selection supports both native platforms, both themes and the four established layouts. Keep new output SVG-only; no new raster exports or contact sheets.

The remaining personal sequence follows the inspected Flutter routes: details, three security questions, five-digit PIN, six-digit verification, first-run AOS source import, detected Persona review and individual Persona review/save. First-run setup includes Speak prominently, plus file, camera, photo library and pasted text. Do not add an unsupported PIN-confirmation requirement, invent a recovery-question set or replace the registration sequence with the login-only verification route.

Business selection remains organisation → existing entity or add entity → existing address/review/success. Link corresponding platform/theme/layout SVGs without crossing into another theme. A new organisation has a separate details route; an existing organisation is reused. Existing entity continuation retains its current access role.

Embed the approved Satoshi fonts in SVGs used for review, so direct SVG viewing preserves typography. Use one full-content SVG for a new screen/device/theme, with its native viewport size identified. Retain old PNGs as history. The old gallery entry pages now lead to the unified SVG gallery; use it rather than reopening historical raster galleries as the current deliverable.

### 15.9 Chat-first navigation and macOS first review, 26 November 2026

The user requested less confusing navigation: a single **Discover** destination opens tiles for the existing spaces and tools, while customers primarily chat. They now use **native macOS**, so future screen coverage must include macOS with suitable native window chrome and sidebar behaviour. The earlier desktop stack statement does not establish the implementation of the new native Mac app.

The user subsequently instructed: **“Always do the first mockup for approval”**. This applies before extending this new navigation/macOS direction, including the previously requested batch. Produce one initial mockup, wait for explicit approval, then extend within the agreed scope. Existing authorised sets remain historical outputs.

- First proposal, **awaiting approval**: [macOS Discover v1](admin/macos-discover-review/01-discover-macos-light-v1.svg), with [source and review notes](admin/macos-discover-review/README.md).
- The proposed sidebar contains New conversation, Search conversations, Discover, recent chats and the profile entry. App menus stay out of bottom navigation.
- The first sample exposes all twelve destinations as tiles: My Personas, My.Career, Knowledge, My Tasks, Flows, Workers, Blackboard, Opportunities, Marketplace, My DNA, Training Hub and Publishing. Preserve Workers and Flows as distinct destinations; moving them does not equate their behaviour.
- Purchases & licences, account switching, Add business account and Settings are proposed profile-menu destinations. Their mockups have not yet been produced.
- Use the original logo vectors, embedded Satoshi Regular/Medium, warm semantic colours and the visible voice-capable composer. The initial review is one light macOS SVG, with no extra theme/device batches or raster exports.
- This records the requested direction and review gate, not approval of the rendered proposal or new product capabilities.

#### 15.9.1 macOS colour refinement

The user accepted the first sample's layout (“Perfect”) but rejected its background colours as insufficiently enterprise and sophisticated. Preserve the chat-first structure and tile arrangement. Replace the warm beige surfaces in this macOS proposal with cool neutral surfaces, white tiles, charcoal typography and restrained copper brand accents. This feedback does not approve a specific replacement palette.

Current first-sample colour proposal, **awaiting approval**: [macOS Discover v2](admin/macos-discover-review/01-discover-macos-light-v2.svg). The new palette is scoped to this review; do not automatically recolour existing approved authentication or other platform outputs. Continue to wait for approval before extending the remaining screens.

#### 15.9.2 Projects and elegance refinement

The user requested **Projects immediately after Discover** in the sidebar and said the revised appearance had improved, asking for “a touch of elegance”. Projects is an explicit additional destination; its contents and behaviour have not yet been designed.

Current review sample: [macOS Discover v3](admin/macos-discover-review/01-discover-macos-light-v3.svg). It adds Projects beneath Discover, moves recent conversations down to preserve spacing, and refines the cool neutral treatment with subtle surface gradients, fine section rules, gentle card/composer depth and muted copper icon details. Keep the original logo, embedded Satoshi and visible microphone. The rendered refinement awaits approval before the remaining screens are produced. Preserve v1 and v2 as history.

## 16. Global Sigmar design standard, 26 November 2026

The user instructed: “Add the design requirements and this must be globals even to small devices and web as we don't want brand discord”. The refined [Discover v3 SVG](admin/macos-discover-review/01-discover-macos-light-v3.svg) is the shared visual reference. Its design language applies globally, not just to the Mac app. Earlier statements restricting the colour refinement to the macOS review are superseded by this instruction.

### 16.1 Scope and precedence

- Apply this standard to native macOS, web at all viewport sizes, iOS/iPadOS, Android, phones, tablets and compact windows. Personal and business surfaces share the same brand system.
- Apply it to new and revised AOS, account, authentication and onboarding screens. Preserve their existing content, permissions, security semantics and approved flows. Existing exports remain history; this instruction records the standard and does not request an immediate regeneration of every file.
- Use one semantic palette, type system, icon vocabulary and component language across platforms. Platform differences concern native chrome, input behaviour, accessibility and responsive composition, not a separate visual identity.
- The direction is recorded globally. New screens, themes and substantially different responsive compositions still follow the user's “Always do the first mockup for approval” instruction. This documentation update does not approve unseen variants.

### 16.2 Colour and material

Use white surfaces, cool neutral backgrounds and charcoal text/actions. Avoid warm beige or cream as the default application canvas. Keep copper as a small, purposeful signature rather than a large background wash. Preserve the original logo colours exactly.

| Semantic role | Current light reference |
| --- | --- |
| Base canvas | `#F8F9FB`; subtle vertical finish `#FCFDFE` → `#F6F8FA` |
| Sidebar / secondary region | `#F0F2F5`; subtle finish `#F3F5F7` → `#EBEFF3` |
| Native title-bar surround | `#F4F5F7` |
| Raised cards, fields and composer | `#FFFFFF` |
| Selected navigation | `#E4E8EF` |
| Heading / primary action | `#202630`; action finish `#303945` → `#202630` |
| Text on charcoal actions | `#FFFFFF` |
| Body text | `#424C5B` |
| Secondary text | `#5B6573` |
| Decorative borders | `#DCE1E8` |
| Section rules | `#E2E6EC` |
| Essential control borders | `#8C96A5` |
| Icon backing | `#F4F5F7` |
| Muted copper icon strokes | `#78543E` |
| Copper links / selected icon | `#98450F` |
| Signature voice action | `#E87832`, with `#1F1A16` foreground |

Use semantic roles instead of platform-specific palette forks. Gradients are optional finishes; their flat fallback must preserve the same hierarchy. Dark mode must use the shared Sigmar warm-charcoal foundation palette, following the user’s explicit correction in section 18.1, with the original white-wordmark logo and readable surfaces. Keep restrained copper details and the same typography, hierarchy and navigation. Do not substitute a blue/slate palette. The revised rendered sample still requires approval before extending the batch.

### 16.3 Elegance, typography and components

- Use Satoshi Regular 400 and Medium 500 for app content and the original vector wordmark. Keep OS-owned chrome native. Embed Satoshi in review SVGs.
- Retain compact, professional type: approximately 26 for the main desktop page title, 15 for tile titles, 13–16 for body content and 11–12 for supporting metadata. Preserve hierarchy when reflowing and honour accessibility text sizing; do not shrink mobile content to imitate a desktop screenshot.
- Use fine decorative borders, consistent line icons, muted copper details and generous alignment/spacing. Avoid heavy outlines, excessive orange, glossy effects and decorative clutter.
- Reference corners are 12 logical units on tiles, 16 on the composer and 7–9 on smaller controls. Adapt dimensions to native conventions while keeping the family resemblance.
- Depth is subtle: reference cards use a 2-unit downward shadow, 3-unit blur and charcoal at roughly 4.5% opacity; the composer uses 3-unit offset, 7-unit blur and roughly 5.5% opacity. Maintain readable boundaries without depending on shadow.
- DNA background artwork and personal Persona teasers remain specific to the established onboarding/authentication contexts. Integrate them with the new neutral surfaces and quiet scrims; do not carry warm beige panels into another platform or add decorative artwork to functional chat/workspaces by default.

### 16.4 Shared navigation and conversation

- Primary navigation order: **New conversation → Search conversations → Discover → Projects**, followed by recent conversations and the profile entry. Projects sits directly after Discover. Its internal screen content still needs a first sample.
- Discover presents tiles for My Personas, My.Career, Knowledge, My Tasks, Flows, Workers and Blackboard under Your space; Opportunities and Marketplace under Explore; My DNA, Training Hub and Publishing under DNA.
- Workers and Flows remain distinct destinations with their existing semantics. Reorganising navigation does not introduce new capabilities.
- Purchases & licences, account switching, Add business account and Settings belong in the profile menu. Preserve access to every existing destination when adapting the layout.
- Chat is the main customer experience. Keep recent conversations easy to reach, and retain a clearly visible composer with typing, attachments and a prominent microphone labelled “Talk to Sigmar”. Preserve transcript review and existing approval rules.

### 16.5 Responsive and native behaviour

- Wide macOS and web layouts use a collapsible sidebar. Phones and narrow web/windows use a scrollable side drawer containing the same navigation order and destinations. Do not introduce bottom application navigation.
- Reflow Discover tiles from the reference's four columns to fewer columns as space requires, down to one column on a small device. Preserve group order, readable descriptions, comfortable gutters and all destinations; do not scale down the whole desktop screen.
- Permit vertical scrolling and text wrapping. Keep the composer reachable above keyboards and safe areas, with voice and attachment access visible. Honour 44-point targets on Apple platforms and at least 48-dp targets on Android; web controls need equivalent accessible targets and visible keyboard focus.
- Use genuine platform chrome: macOS traffic-light window controls on Mac, browser conventions on web, native safe areas and input controls on mobile. Do not paste Mac title-bar controls onto mobile or into a web page's app content.
- Confirm text contrast (at least 4.5:1 for normal text), meaningful controls/focus (at least 3:1), text scaling and keyboard access. Decorative hairlines and shadows do not establish essential control boundaries.
- Deliver new mockups as SVG only. Inspect the first rendered sample at the target size before review; wait for approval before extending the new screen/direction to more screens, themes or device variants.

### 16.6 Mandatory content and visual design policy (27 November 2026)

Apply the following across AOS, HTQLDB, Profit Guard, Workers, CLI-related interfaces, websites, member communications and every supported platform and theme. This is normative for new and revised work, not a retrospective approval or instruction to regenerate existing assets.

#### External authorities and adaptation

- [Shopify content](https://shopify.dev/docs/apps/design/content)
- [Shopify voice and tone](https://shopify.dev/docs/apps/design/content/voice-and-tone)
- [Shopify grammar and mechanics](https://shopify.dev/docs/apps/design/content/grammar-and-mechanics)
- [Shopify visual design](https://shopify.dev/docs/apps/design/visual-design)
- Oren Klaff, [Pitch Anything](https://www.mheducation.com/highered/mhp/product/pitch-anything-innovative-method-presenting-persuading-winning-deal.html?viewOption=student), 2011.

Reviewed 27 November 2026. Shopify's applicable usability principles are requirements, not optional inspiration. Translate merchant-specific conventions to Sigmar members and their workflows; retain Australian English, approved terminology, Satoshi, original artwork, palette, native behaviour and security semantics. Shopify-specific integration, App Store asset sizes and Polaris implementation requirements apply only where actually building for Shopify. For other surfaces, reuse Sigmar components rather than importing Shopify branding. Record and justify any applicable guidance deviation in the review notes. Recheck source revisions when changing policy; external changes do not silently supersede approved Sigmar rules.

#### Content requirements

- Keep the voice consistent, professional and human; adjust tone to the actual situation. Write directly to members without assuming their emotions or knowledge.
- Use short, active sentences and familiar words; target approximately grade 7 readability for general member content. Retain necessary precise technical, legal and financial terms, explaining unfamiliar terms in context.
- Put the outcome and next action first. Remove duplicate titles, redundant explanations and competing navigation. Group complex work into meaningful stages; provide contextual help rather than compulsory instruction where possible.
- Maintain a controlled vocabulary and identical labels for equivalent actions. Preserve AOS, HTQLDB, Persona, Guild, DNA, Worker and Flow distinctions. Use sentence case, Australian spelling, localised dates, currency and units; avoid idioms, unnecessary abbreviations, em dashes and double dashes.
- Use specific verb-led actions that accurately predict the result. Explain relevant costs, dependencies, effects and choices before commitment; never substitute a generic CTA for a permission or payment decision.
- Match tone to state: quiet and efficient for routine work; explanatory for learning; specific and corrective for errors; restrained acknowledgement for confirmed progress; direct and supportive for serious incidents. Apply section 25.1 semantic feedback and section 26 contextual titles. Keep diagnostic codes in optional technical detail unless useful for recovery.

#### Visual requirements

- Use shared Sigmar tokens and reusable components for consistent spacing, alignment, borders, depth and typography. Prioritise the main task through hierarchy and grouping; avoid redundant decoration, competing actions and oversized headings.
- Reserve semantic status colours for actual state; distinguish categories with neutral labels. Maintain Sigmar's danger, warning, success and info contract, and distinguish brand copper from status indicators. Pair state with text and an appropriate icon.
- Maintain the contrast, accessible control sizing, keyboard focus and responsive rules of section 16. Use headings that remain identifiable without colour, and consistent icons in repeating layouts. Give icon-only controls accessible names.
- Use imagery only when it aids understanding or supports the relevant commercial proposition; use a coherent illustration style and original brand assets. Do not introduce decorative DNA into functional workspaces or use excessive branding.
- Use one clear primary action per decision context. Keep secondary, cancel and destructive actions distinguishable; do not hide consequences, constraints or recovery actions behind visual emphasis.

#### Pitch Anything: restricted commercial and connection framing

Use Klaff-inspired framing only where a member is considering buying, subscribing, upgrading or voluntarily connecting a service, AI or account: marketplace discovery and listings, advertising, product offers, plan comparisons, and optional integration or account-connection invitations. Do not apply it to ordinary navigation, project governance, operational work, authentication, security, consent, approval, data access, recovery, error states or payment confirmation. In mixed journeys, persuasive copy stops at the decision/permission boundary; subsequent scopes, terms, costs and confirmation remain factual.

Adapt the method into a short, evidence-led sequence: establish the member's relevant situation, show a concrete problem or opportunity, reveal the distinctive capability, make the achievable value tangible, and present a specific next step. Use relevant proof and demonstrate actual outcomes where available. Prefer confident positioning to hype or feature inventories. Do not manufacture scarcity, urgency, exclusivity, social proof, savings or guaranteed results; never use pressure, shame, hidden fees, preselected consent or obstructive cancellation. Clearly disclose sponsored placements and material limitations. Quantified claims require a verifiable source, assumptions and appropriate context.

| Context | Illustrative copy | Action |
| --- | --- | --- |
| Marketplace DNA | Bring specialist expertise into your business. Compare verified capabilities and outcomes before choosing. | Explore DNA |
| Optional AI connection | Use an AI account you already manage with your Personas. Review supported models and usage costs. | Connect AI account |
| Optional business connection | Bring authorised business information into your workspace without re-entering it. | Connect account |
| Upgrade | Compare the capabilities available on each plan and choose what fits your work. | Compare plans |
| Advertising | Reach members looking for expertise in your field. Review placement and pricing before publishing. | View advertising options |
| Project governance (not persuasive) | Choose the access classification and AI accounts permitted for this project. | Review project policy |

Examples are illustrative, not approved capability, pricing or verification claims. Verify each against the maintained product contract before publication.

#### Mandatory review gate

For each new or revised screen, the designer and reviewer must establish the screen intent (operational, commercial/connection, or mixed), applicable source guidance, brand compliance, wording and terminology consistency, primary action accuracy, state semantics, accessibility, and evidence for claims. For mixed screens, explicitly verify the boundary between invitation and consent. Record exceptions and unresolved evidence, and reject nonconforming work before visual approval or implementation. Existing first-sample and stakeholder approval gates remain in force.


## 17. Complete global screen batch, 26 November 2026

After recording the shared design requirements, the user explicitly requested: **“now do the mockup for all screens based on the above”**. This authorises extending the reviewed direction to the complete batch below. Do not treat the earlier first-sample rule as a reason to stop that requested batch. Keep it for future new directions and scope.

Current deliverable: [global SVG gallery](admin/global-mockups/index.html), with [inventory](admin/global-mockups/manifest.json) and [build/review notes](admin/global-mockups/README.md). The historical gallery links to this current set; historical exports remain intact.

- **86 screen states, 602 SVGs:** 49 supplied AOS states, all 12 login/onboarding states, all 10 account-setup states and 15 chat/navigation/Projects/account additions.
- Every state is provided for macOS (1440 × 1000), desktop web (1440 × 1000), narrow web (393 × 852), iPhone (393 × 852), iPad (834 × 1194), Android phone (412 × 892) and Android tablet (800 × 1100). Long screens use full-content SVGs with the native viewport recorded in their metadata and gallery.
- This batch follows the refined **light** v3 direction. It does not establish a reviewed replacement dark palette; section 16.2's dark-theme review requirement remains in force.
- Additions cover Discover, Projects, project detail, new project, project sources, search/results and empty search, an active conversation, profile overview and menu, account switching, Settings, recent conversations, reviewing the two proposed schedule changes and continuing with an existing entity while retaining its role.
- Navigation remains chat-first, with Projects directly after Discover and the account options in the profile menu. Mobile and narrow-web navigation uses the side drawer. Every AOS composer retains typing, attachments and speaking; a typed-message example retains the microphone beside Send.
- Original logos and embedded Satoshi are preserved. Functional state content is reused from the existing screen specifications, including blocked publication, independent holdout evaluation, explicit business/Guild scope, unchecked required consent, payment before activation, upload limits, six-digit passcodes and five-digit PINs.
- Proposed schedule changes reuse the illustrative approved fixture, including tomorrow's 14:00–15:30 slots, unchanged Friday deadlines, protected school pickup and 30 minutes remaining tomorrow. The review identifies 90 minutes rescheduled and no effort saved.
- Existing entity continuation retains existing details and permissions. It does not pass through new-entity registration or silently assign a new role.
- These are reviewable mockups, not a functioning native app or live account operations. Producing the batch does not imply individual approval of every adaptation.

## 18. First dark-mode review, 26 November 2026

The user reported that dark versions were missing. The prior global batch contained 602 light SVGs only. A first [dark macOS Discover sample](admin/global-mockups/dark/macos/discover.svg) is now available through the gallery's **Theme → Dark · first sample** selector and [direct dark gallery link](admin/global-mockups/index.html#macos/discover/dark).

This preserves the user's instruction, “Always do the first mockup for approval”, before extending the new dark palette. The remaining dark states and device variants have not been generated and must not be represented as available. The gallery filters dark selection to the available macOS Discover sample; the complete light set remains available for all seven layouts.

The proposed dark system uses cool charcoal/slate surfaces, softly separated raised cards, ivory-white text and restrained copper details. Reference colours: canvas gradient `#171E28` → `#10161F`; sidebar `#1B2430` → `#151D27`; raised surface `#202733`; selected surface `#2D3745`; headings `#EDF0F4`; body `#C4CCD7`; secondary text `#A7B2C1`; borders `#394453`; essential control boundary `#77889B`; copper links `#D9A47B`; muted copper icons `#CBA281`. Copper voice controls retain the original orange/dark foreground pairing. The original white-wordmark logo replaces the light-background logo, preserving the original vector paths and proportions.

The sample has embedded fonts, was rendered in memory and visually inspected, and passed text/control contrast checks. The palette awaits approval; once approved, extend it to the same 86 states and seven platform/layout combinations. Do not treat this sample as approval of all dark adaptations.

### 18.1 Use our Sigmar charcoal

The user corrected the dark sample: **“The dark must be our charcoal”**. This supersedes the proposed slate palette in section 18. Use the existing shared brand foundations, not a new dark identity. The maintained branding topology was read locally at `/Users/doabile/workspace/hedgetech-wt-native-sync/htql/docs/website/sigmar-branding-topology.md`, sections 3.1–3.3.

Current dark review: [Sigmar charcoal Discover v2](admin/global-mockups/dark/macos/discover-charcoal-v2.svg), also selected by the gallery's Dark option. The earlier slate SVG remains history and is not the current dark reference.

| Role | Shared brand colour |
| --- | --- |
| Canvas | `#201C18` |
| Deep/sidebar | `#171411` |
| Panel/cards | `#2B2520` |
| Raised controls | `#332D27` |
| Selected item | `#3B2B20` |
| Heading | `#E8DCCB` |
| Body | `#BFB5A9` |
| Secondary | `#A69B8E` |
| Decorative border | `#494037` |
| Essential control boundary | `#918171` |
| Signature copper action | `#E87832` |
| Copper link/highlight | `#F08D4C` |
| Foreground on copper | `#201C18` |

Use these shared colours on every dark platform and screen. This does not reverse the separate approved light direction. Dark canvas and sidebar finishes in the revised sample are solid charcoal; preserve the refined layout and small, professional Satoshi typography. The existing white logo artwork is kept intact. Only this first sample has been revised; wait for its review before producing other dark screens or device variants.

## 19. Charcoal dark approved and complete, 26 November 2026

The user explicitly approved the corrected shared-brand charcoal sample: **“Yes -approved”**. This approves extending that dark direction across the previously requested screen inventory and platform/layout coverage. Sections 17–18's statements that dark is sample-only or awaiting palette approval are historical and superseded.

The [current gallery](admin/global-mockups/index.html#macos/discover/dark) now includes **86 screen states × 7 layouts × 2 themes = 1,204 SVGs**: 602 light and 602 charcoal dark. Every screen has both themes on macOS, desktop web, narrow web, iPhone, iPad, Android phone and Android tablet. The Theme selector supports both complete sets; changing platform preserves the selected theme and screen. Dark links stay within the matching dark layout.

The approved [charcoal reference](admin/global-mockups/dark/macos/discover-charcoal-v2.svg) uses the exact existing Sigmar foundations in section 18's correction: `#201C18` canvas, `#171411` deep/sidebar, `#2B2520` panels, `#332D27` raised controls, warm ivory/grey text and restrained copper. This is the global dark standard, including small devices and web. The earlier blue/slate sample is superseded. Keep the refined light design as the matching light standard.

All dark outputs preserve original dark-background vector logos, original AI artwork, embedded Satoshi, governed content states, source permissions and the visible microphone. Authentication uses the original dark DNA artwork with the same quiet composition. Settings indicates the theme shown. SVG-only delivery remains in force; raster inspection was performed in memory without exporting PNG companions.

Validation covered all 1,204 SVGs for XML, embedded fonts, content/reference paths, text bounds, theme metadata, review links, source-panel content, consent gates and OTP/PIN/upload constraints. All 602 new dark SVGs were decoded in memory; representative native, web and authentication compositions were visually inspected. Gallery theme/platform selection checks passed. No additional approval is needed to keep this authorised batch complete; retain first-sample review for future new visual directions.

## 20. Settings structure approved and first macOS design, 26 November 2026

The user approved the researched settings structure: **“Settings are approved so we need to design first in MacOs to see it”**. This approves the [research recommendations](reports/Sigmar%20AOS%20settings%20review.md) as the design basis and requests a first macOS visual sample. It does not approve unseen layouts or establish implementation of proposed controls.

- Approved categories: General; Conversation & voice; Notifications; Privacy & AI access; Personalisation & learning; Data & sync; Account & security; About & support.
- First rendered proposal, awaiting visual approval: [macOS Settings v1](admin/settings-review/01-settings-macos-light-v1.svg), with [source/review notes](admin/settings-review/README.md). The [current gallery Settings selection](admin/global-mockups/index.html#macos/settings/light) opens it.
- Use a dedicated native macOS Settings window with traffic-light controls, stable category navigation, search and explicit scope. The first pane is Privacy & AI access, with member policy, client status, Persona grants and separate learning/source permission routes.
- Keep the approved global brand. This first sample uses the light theme, original vector logo, embedded Satoshi, white raised surfaces, cool neutral backgrounds and restrained copper. Produce other settings panes/themes/device variants after review of this first visual design.
- Controls illustrate permission review and confirmation; they do not change a live account. Example read access is enabled for an active scoped client, with proposed changes off. Existing default-deny safeguards and Flow/Persona/governance requirements are not weakened.
- A dedicated Settings utility window does not need a chat composer. The microphone requirement remains mandatory anywhere a conversation composer appears. App navigation stays chat-first with Discover then Projects; this utility window uses settings-category navigation instead.
- The rest of the settings gallery compositions remain earlier layouts and are labelled accordingly. Preserve historical exports; do not treat the previous sparse Settings canvas as the approved substantive design.

## 21. Settings design approved and all links completed, 26 November 2026

The user approved the first macOS Settings visual and explicitly requested: **“Approved now do for all screens and each link must be covered”**. This authorises the complete settings design, linked detail/confirmation/outcome screens and the established cross-platform, light/charcoal-dark adaptations. The prior first-settings-sample gate is satisfied for this batch; do not stop it at another subset or label the approved sample as pending.

Current deliverable: [complete Settings in the unified gallery](admin/global-mockups/index.html#macos/settings/light), with [settings source and notes](admin/settings-mockups/README.md), [settings inventory](admin/settings-mockups/manifest.json) and [link/reachability verification](admin/settings-mockups/link-verification.json).

- **137 settings screen states, 1,918 SVGs:** all eight panes, linked detail screens, policy/client/grant reviews, confirmations, pending/rejected/accepted states, device-permission guidance, notification preferences, saved-context correction, source scope, sync recovery, local-cleanup safeguards, scoped export previews, account lock/sign-out, support/diagnostic review and unavailable legal-document states.
- Every state is available in light and approved Sigmar charcoal on macOS, desktop web, narrow web, iPhone, iPad, Android phone and tablet. The unified gallery now has **222 screen states and 3,108 SVGs**, reusing the existing AOS/onboarding/account screens.
- The approved macOS Privacy & AI access composition is retained as the main pane and now has working review-file links for its sidebar, search, switches, safeguards, clients and learning/source actions. Desktop web reuses the composition without Mac window controls; compact views reflow content and use native settings navigation. Settings remains an independent utility surface without a chat composer.
- All ordinary links retain platform and theme; explicit appearance choices can change theme. Contextual links open the corresponding existing Persona, Knowledge, Training Hub, licence, account or lock screen. Existing app-to-Settings links point to the new settings module.
- All app buttons and switches link to their review states. Read-only illustrative inputs and OS window chrome are not executable app controls. Alternate backend outcomes are linked under Related review states in the gallery rather than presented as customer-facing controls for choosing success or failure.
- No live account or device actions occur. Client identity, Persona scope and effective permissions stay explicit. Permission changes require confirmation and acknowledgement; rejection retains the prior accepted policy. Registration alone grants no authority. A client action must not silently target another client.
- Device permissions remain OS/browser-owned. Unsent changes block unsafe cleanup; sync, export, client revocation and account removal have distinct scopes. No passkey, password, PIN recovery or erasure guarantees are invented. Legal-document errors show retry/support routes rather than fabricated policy wording.
- The light settings controls use `#8B95A4` against white and `#788596` for pale off-switch outlines to meet essential-control contrast; this is a small contrast refinement of the approved cool neutral system. Charcoal values remain the shared brand palette. These control-boundary refinements should guide future light controls without changing the brand identity.
- Verification checks actual link targets, platform/theme continuity, native action target coverage, complete graph reachability, source content, embedded fonts, SVG XML, text bounds and contrast. SVGs are rendered in memory, with no PNG companions or contact sheets.

The original first sample and earlier sparse settings SVGs remain historical assets. The current source is `admin/settings-mockups/`; use `admin/global-mockups/build-all.cjs` to rebuild both base themes and the completed settings extension before regenerating the single gallery.

## 22. Persona-management first-screen request, 26 November 2026

The user requested **Persona management only**, based on the working Flutter end-to-end flow, with all Persona-related links eventually covered. They explicitly requested the first screen for approval before continuing.

Historical first proposal, now approved (see section 23): [macOS Persona management v1](admin/persona-management-review/01-persona-management-macos-light-v1.svg). See [source/scope notes](admin/persona-management-review/README.md) and [control route plan](admin/persona-management-review/route-plan.json). This is one light macOS screen, with the existing app navigation retained as context and a Persona list/shared detail surface. Approval of the linked batch is recorded in section 23.

The source's canonical Add entry is `PersonaIntroRoute`: identity plus category-driven descriptions typed or spoken, converging on the existing extraction/review/save path. The shared `PersonaViewPage` handles reading and editing through type/speak section editors. Preserve current-account scope, source provenance, category-specific section contracts, knowledge retention on Inactive (Paused), local/pending changes and stale-version handling. Older form/wizard files and placeholder hub controls are not proof of the canonical working flow.

The sample exposes identity/purpose, section expand/edit, upload/type/speak input, provenance review and status management. It uses illustrative records, original vector assets, embedded Satoshi and the approved light visual system. Source-origin labels do not assert credential verification. A Persona-management surface does not require a conversation composer; speaking remains visible where section input is offered.

After visual approval, every Persona-management control must have a corresponding scoped mockup target and appropriate confirmation/outcome states. Do not expand into DNA authoring, training, publishing, marketplace, Guild, Flow, independent task management or unrelated settings. Goals & Tasks is retained only as Persona content. No hard-delete action is introduced. The approved linked suite is now integrated into the global gallery; see section 23.


## 23. Approved Persona management and creation wizard, 26 November 2026

The user approved the first macOS screen and clarified: **“Approved and note that creating a persona has a wizzard”**. This explicitly authorises the linked Persona-management set, including a creation wizard. The earlier source interpretation in section 22 does not override this instruction. The first-sample approval gate is satisfied for this batch.

Approved visual reference: [macOS Persona overview v1](admin/persona-management-review/01-persona-management-macos-light-v1.svg). Current editable source: [Persona-management suite](admin/persona-management/README.md). [Open the linked overview](admin/global-mockups/index.html#macos/persona-home/light) or [creation wizard](admin/global-mockups/index.html#macos/persona-wizard-1/light).

- **436 Persona screen states in 6,104 SVGs**, across the established seven layouts and both approved themes. The unified gallery now contains **658 states in 9,212 SVGs**.
- The four creation steps are **Basic information → Constitution → Permissions → Review & add**. The inspected Flutter `create_persona_page.dart` supplies the step structure; the category-driven description, type/speak, review/save and shared Persona view/edit behaviour remain grounded in the working Persona sources.
- Cover list/search/filter/empty states, category-specific sections, identity/image review, typed and spoken input, microphone permission fallback, document/source review, Active/Inactive confirmation, pending/acknowledged/rejected/offline updates and stale-version recovery. Deactivation retains knowledge; no hard-delete action is offered.
- Speaking starts only from an explicit action, allows cancellation, and returns to reviewable text before saving. Each existing Persona retains its own context. Source-origin labels do not certify truth.
- The example creation path is private by default. A named person's read access is reviewed separately; type choice, registration and activation do not widen authority. Local pending and accepted outcomes are distinct. The new Persona is not automatically activated.
- Scope is Persona management only. Constitutional references are reviewed within the Persona, without compiled-DNA authoring or new training, publishing, marketplace, Guild, Flow, standalone task or settings modules. Existing primary navigation retains links to existing screens.
- Use exact brand vectors, embedded Satoshi, approved cool light and warm charcoal/ivory themes. The approved wide overview is preserved. Phone/tablet layouts reflow without bottom app navigation. SVG only.
- These are finite illustrative review snapshots, not a persistent data-entry application. Alternate name/type pages explicitly return to the consistent example identity. Alternative backend outcomes appear as gallery review states outside the customer screen.

Every state is reachable from the overview on all fourteen layout/theme combinations. [Link verification](admin/persona-management/link-verification.json) checks all 38,120 SVG links and 22,416 linked controls, preserving platform/theme. Global structural checks and in-memory render reports remain alongside the gallery. All 6,104 Persona SVGs decoded successfully; no new raster exports were written.


## 24. Own-AI first sample, pending visual approval

The user requested Settings mockups for member-owned AI (GOV-415 / PR #382), adding that **each Persona selects the account to attach, with Sigmar AI as the default**. Manage credentials centrally in Settings → Privacy & AI access → AI accounts; Persona selection refers to an account and never stores a key in Persona content. Do not confuse these outgoing credentials with registered external AI clients calling Sigmar.

First macOS/light review: [AI accounts](admin/own-ai-review/01-ai-accounts-macos-light-v1.svg), linked to [My.Career selection](admin/own-ai-review/02-persona-ai-selector-macos-light-v1.svg). These are two navigation states of one first sample, awaiting approval. Do not extend themes/devices/full flows before that approval. Keep original brand vectors, embedded Satoshi and the global cool light / approved charcoal standard. See [scope, source and seven unresolved decisions](admin/own-ai-review/README.md).

PR #382 was read as draft design evidence, not an instruction to implement its approvals. Its member-wide choice does not implement the user's per-Persona refinement. All seven Sponsor decisions remain open; a visual approval does not approve security widening, money, legal wording or runtime policy. The sample uses API-key account metadata only, no subscription/OAuth login, no real secrets and no live operations. It illustrates explicit failure without silent fallback, while withholding unapproved numeric daily caps, fee promises and provider-retention claims.


## 25. Own-AI screens approved; shared feedback and recovery UX

The user approved the first macOS own-AI sample, requested the remaining screens, and identified generic Persona failure recovery as insufficient. They then explicitly required **tone and alerts: danger, warning, success and info**. The first-sample gate in section 24 is satisfied; the seven architecture/security/money/provider-policy decisions are not implicitly approved.

Current [own-AI suite](admin/own-ai-mockups/README.md): **188 states / 2,632 SVGs**, all seven layouts and both approved themes. [Open AI accounts](admin/global-mockups/index.html#macos/own-ai-accounts/light), [Persona selector](admin/global-mockups/index.html#macos/own-ai-selector-career/light), or [shared feedback reference](admin/global-mockups/index.html#macos/own-ai-feedback-guide/light). Persona management now has **460 states / 6,440 SVGs** after 24 scoped recovery additions. The current unified gallery has **870 states / 12,180 SVGs**. Earlier counts in sections 21–24 describe their historical batches.

Settings manages outgoing provider accounts; each Persona selects one, defaulting to **Sigmar AI**. The Persona creation wizard includes the selection entry. Connecting a key never silently changes Persona selections. Keys remain outside Persona content. Cover credential setup/PIN/validation, classified errors, replace/remove impact/confirmation/outcomes, scoped choices for each Persona, usage limits and request failure. Ordinary links preserve platform/theme. No live credential/provider/account operation occurs.

### 25.1 Global feedback contract

Use [shared-feedback.cjs](admin/shared-feedback.cjs) for new/revised feedback across Settings, Persona management, own-AI, native and web layouts. Preserve Satoshi and charcoal foundations; semantic colours are restrained local accents.

| Meaning | Icon | Light text / background / border | Charcoal text / background / border |
| --- | --- | --- | --- |
| Danger: failure or action requiring intervention | Circle and cross | `#9C3434 / #FCEEEE / #B85E5E` | `#F0B4AA / #38221F / #BC7568` |
| Warning: consequences, conflicts or recoverable limits | Triangle and exclamation | `#785417 / #FFF6E3 / #AA7E24` | `#E8C67E / #352C1E / #A68A4D` |
| Success: confirmed result | Circle and check | `#326146 / #EDF6EF / #5B8768` | `#A4CFB0 / #213026 / #6E9A79` |
| Info: progress or neutral context | Circle and information mark | `#315477 / #EEF4FB / #718AA5` | `#B8CADB / #242C33 / #7E93A4` |

- Pair colour with an icon, text and a clear next action. Danger uses an alert/assertive live region; noncritical information and confirmed results use status/polite. Do not use colour alone or automatically dismiss critical feedback.
- Explain what happened, whether the action completed, what work is retained, and the next useful step. Use calm, specific, non-blaming customer language. Do not invent a reason when the service supplied none.
- Use warnings before consequential choices; a destructive button is not a substitute for explaining the effect. Show success only after confirmation. Pending is information, never success.
- Keep unsent Persona edits visibly separate from the saved version. Offer review, corrected retry, viewing the saved version and conflict comparison navigation. Preserve knowledge and avoid forced overwrites. Comparison is a scoped navigation design here; it must not pretend to show field differences that the source state does not contain.
- Retained-work and confirmation statements are proposed behaviour that implementation must honour, not proof of a working backend. Alternate success/error snapshots remain outside customer menus.
- Apply the same system to compact devices, allow text wrapping and keep controls reachable. API keys and PINs remain masked; speaking is for Persona content, never credential entry.

Current verification: all own-AI links and controls pass reachability and platform/theme checks; the full 12,180-SVG gallery passes structural/content checks. 6,314 new/revised own-AI, feedback and entry-point SVGs decoded in memory without errors. Feedback text contrast is at least 6.3:1 in light and 8:1 in charcoal. Reports are in `admin/own-ai-mockups/`.


## 26. Persona wizard visibility, media library and contextual alerts — 27 November 2026

The user rejected repeated generic feedback headings, could not find the creation wizard, and identified missing media-library, image and document-upload screens from the Flutter design. These are corrections to the authorised Persona-management batch, using the approved brand direction.

Current [Persona suite](admin/persona-management/README.md): **676 states / 9,464 SVGs**, including **216 added media states** and the four-stage creation wizard. The unified gallery now has **1,086 states / 15,204 SVGs**. Earlier sections retain historical counts. [Media notes and source evidence](admin/persona-management/MEDIA_NOTES.md).

- Gallery shortcuts explicitly expose **Persona management**, **Add Persona · 4-step wizard**, and **Media library · upload & preview**. The Persona overview places Media library beside Add Persona and labels the wizard. Compact layouts expose both actions above the list. Wizard stages display “Add Persona · step N of 4”, retain back navigation, and have searchable wizard titles.
- Media uses thumbnail browsing, image/document filters, search/empty states, previews, upload dropzones, native-style file selection, selected-file review, progress, retry/cancel, photo/camera permissions, crop/confirmation and source attachment/extraction review. It replaces the earlier preselected-filename upload and avatar placeholders. Source content is reviewed before saving into a named Persona section. Scope, privacy and the distinction between origin and truth remain explicit.
- Do not reuse category headings such as “Review before continuing” or “Action needed” for unrelated events. Every alert requires an event-specific title and useful detail. Keep the semantic icons/colours in section 25, but explain the actual outcome, retained work and next action. The shared renderer rejects missing titles. Do not put an unrelated pending-state card on media or browsing pages.
- Use editable vector thumbnails and original brand assets. Preserve media content colours when switching the surrounding chrome to charcoal. No real files, uploads or provider/device operations occur in SVG mockups. Document formats follow inspected PDF/DOCX/TXT import support; image examples use JPG/PNG. Do not invent numeric file-size policy or claim a working library persistence layer from seeded Flutter UI alone.
- Existing first-screen visual approval covers these missing linked states within the accepted Persona design. Do not leave the authorised correction unfinished at another subset or expand into unrelated library publishing/marketplace/DNA management.

Regression checks explicitly verify wizard entry and labels, media thumbnails, real upload-selection UI, scoped graph reachability and absence of the rejected generic messages. Render checks remain in memory; no new raster exports.

Section 26 verification: all 64,428 Persona SVG links pass and every state is reachable across fourteen layout/theme combinations. Explicit regression checks cover visible wizard/media entry points, four labelled wizard stages, thumbnail browsing and upload selection. The revised media/wizard/contextual-feedback audit decoded 9,366 SVGs in memory with no errors and no raster exports.


## 27. Existing Flow designs: theme refresh request — 27 November 2026

The user requested the previously designed Flows under `admin` be updated to the new theme. The [source inventory](admin/flows-review/source-inventory.json) identifies 27 original Flow-related JPGs. This is separate from the simplified two-Flow AOS inventory already in the global gallery.

First macOS/light refresh for approval: [Flow designer v1](admin/flows-review/01-flow-designer-macos-light-v1.svg), with [review/source notes](admin/flows-review/README.md) and a [control route plan](admin/flows-review/route-plan.json). Apply the standing first-sample gate before generating the remaining refreshed Flow screens, charcoal variants or other device layouts. This sample does not label the batch complete or replace the current gallery.

Preserve the original designer topology, step configuration, HTQL condition, run-history context and governance/contract/approval requirements. Retain business/workspace scope explicitly; do not turn project execution authority into a personal or global grant. Use the exact original brand vector, embedded Satoshi, cool neutral light surfaces, restrained copper and contextual feedback. Publish must not appear available before required validation and review. Historical example runs are distinct from the current unexecuted draft. Controls in the first review are route annotations, not live actions or missing-file links.

After approval, apply the accepted treatment to the inventoried designer, add-step/publish review, templates, contracts, terms, triggers, executions/replay, signing/HTTP and source-linked CMS/commerce Flow states. Keep original reference files intact. Deliver editable SVGs only, with the established charcoal and responsive rules; do not regenerate legacy PNGs.


### 27.1 Flutter drag-and-drop designer and explicit View/Edit split

The user clarified that the first refresh is suitable for opening/viewing a Flow, but the editor must follow Flutter's drag-and-drop interaction. They then explicitly requested **Edit Flow** on the view to open a separate designer, referencing Shopify Flow.

Current first-review pair: [Flow view v2](admin/flows-review/02-flow-view-macos-light-v2.svg) and [Flow editor v2](admin/flows-review/03-flow-designer-macos-light-v2.svg). The opening view's layout is accepted; the corrected designer remains for approval. Preserve the same `order_sync` identity and graph across both views. Do not turn the opening inspection/run-history view into the editor or automatically open editing on every Flow visit.

The implementation authority for editing interactions is Flutter `flow_builder_page.dart` and `flow_models.dart`, not the older HTQLDB designer JPG alone. Keep free-positioned draggable rounded cards, source-defined connection rules, click-to-edit, the nonmodal Actions/Logic tray, tap-to-append/drag-to-place, pan-lock mode and zoom. Keep 14 Action and 4 Logic kinds; Contracts/Terms are tabs, not palette nodes. Tabs: Builder, Details, Contracts, Terms, Metadata, Audit Log. Save and Preview compiled Flow follow the source; approval marks Ready and is not evidence of engine deployment or execution.

[Shopify's official editor guide](https://help.shopify.com/en/manual/shopify-flow/create/workflow-editor) confirms the View → Edit entry pattern and draggable step canvas. It informs familiarity only: do not import Shopify's branch/merge restrictions or replace Sigmar's Flutter node catalogue. SVGs represent the intended interactions; they are not a functioning drag engine. Two linked states of this same first sample are provided to review navigation before the remaining themes/devices/screens.

## 28. Project folder governance — approved design, 27 November 2026

[Project governance mockups](admin/project-governance/README.md): seven layouts, light and approved charcoal, 14 editable SVGs. Projects are available in AOS, HTQLDB and Profit Guard. Parent folder is optional and blank at the workspace root. Invite members and Guilds; invitations do not grant accepted membership. Choose the configured access classification, inherit applicable workspace/parent policy, and review approval requirements. AI account permissions explicitly distinguish Read and Write; no automatic fallback or widening of authority. The example uses Sigmar AI read/write, Claude read-only and OpenAI / Codex neither. Write does not bypass existing approval rules. Operational copy follows section 16.6 without commercial framing. These are static review compositions, not executable screens.
