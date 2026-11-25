# Sigmar interface mockup requirements

**Status:** Approved visual direction, recorded 25 November 2026, Australia/Melbourne.

**Purpose:** Give another AI enough information to continue these mockups without repeating the rejected design directions. This is a design project containing references and mockup assets. The sample builders are design utilities, not production application implementations.

## 1. Sources and precedence

Apply the user's latest instructions first, then this project record, then the shared [Sigmar branding topology and design system](https://github.com/davidoabile/apcce/blob/main/htql/docs/website/sigmar-branding-topology.md). Consult [sigmar.io](https://sigmar.io/) for product context and maintained product language.

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

- Desktop uses Tauri 2 and React. The web portal uses React and shares the theme.
- iOS and iPadOS use native Swift interfaces. Android uses native Kotlin interfaces.
- Share the brand, semantic colours, typography, voice and content hierarchy across platforms.
- Adapt navigation, controls, safe areas, system chrome, keyboards and interaction conventions to each native platform.
- The personal login introduces **personal Sigmar AOS**. Its promotional visual must relate to an individual's life and personal Personas.
- Business screens may use relevant business examples when that is their actual context. A personal login must not default to business order approvals, inventory, Treasury or a generic enterprise dashboard.

## 3. Overall visual character

Sigmar is a sophisticated AI platform with a biological DNA identity. The interface must feel calm, precise, mature and carefully composed for demanding users.

Use warm neutrals, restrained copper, comfortable space and small, professional app typography. Preserve a clear visual hierarchy: the login action is immediately usable; the surrounding visual invites curiosity.

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
