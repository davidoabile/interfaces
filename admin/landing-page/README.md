# Personal AOS assistant landing page

**Complete native set:** [All AOS screens](../aos-native-mockups/index.html), including the approved home states and every supplied workspace. This folder retains the original landing samples and review history.

The v1 landing-screen batch was rejected on 25 November 2026. Its bottom navigation and shortened menus must not be reused.

The first-login welcome and side drawer are retained in [first-screen-review](first-screen-review/first-screen-review-v3.png). The user clarified that a returning member needs a personal state briefing instead of an empty greeting.

The current deliverable is **the approved dark iOS returning-user direction, with the microphone correction completed**: [PNG](returning-user-review/returning-user-v4.png) · [editable SVG](returning-user-review/returning-user-v4.svg). It explains the pressure, proposes two concrete scheduling changes across My.Work and My.Learning, protects a My.Family commitment, and quantifies the result before approval. [Source and evidence](returning-user-review/README.md).

Approval of this direction is recorded in the shared requirements, section 15.3. Retain voice input in subsequent adaptations; new authenticated screen directions still require a first sample. Its builder is [returning-user-review/build.cjs](returning-user-review/build.cjs).

Current source: [Sigmar Individual persona workspace](../Sigmar_Individual/01_Home_Personas_Career_Knowledge/sigmar_ai_persona_workspace.jpg), corroborated by [the AOS admin copy](../sigmar_aos_admin/01_Home_Personas_Career_Knowledge/sigmar_ai_persona_workspace.jpg). Follow the shared [mockup requirements](../../MOCKUP_REQUIREMENTS.md).

Open [index.html](index.html) to review the returning-user sample and retained first-login reference.

## Historical v1 files, superseded

- One initial personal assistant screen in 16 variants: iOS/iPadOS and Android, dark and light, phone and three tablet layouts.
- Original logo and Sigmar AI idle artwork, Satoshi Regular/Medium, compact type and restrained DNA background.
- Personal workspace context and the greeting “How can I help you today?”.
- My Persona selector, conversation composer, attachment control and send control.
- Source suggestions: Explore career options, Review my priorities, Develop a new skill.
- Example recent conversations from the source mockup.
- Bottom navigation on phones; an Android navigation rail on intermediate tablets; a persistent sidebar on wide tablets.
- Wide sidebar access to My Personas, My.Career, Knowledge, My tasks, recent conversations, Add business account and the user profile.

The authenticated screen keeps its content legible. The login's faded Persona teaser is not used as a functional navigation or content panel here.

## Files and rebuilding

Each variant has an editable SVG and standalone PNG. [manifest.json](manifest.json) lists the 16 variants. [build.cjs](build.cjs) generates them; [catalogue.cjs](catalogue.cjs) builds the review gallery.

```sh
node build.cjs
node catalogue.cjs
```

The builders use the existing local `sharp` package and Satoshi font configuration from the login mockup tooling. SVGs refer to DNA assets in `../login-register/samples/`; preserve that folder relationship. Native implementation, conversation submission and backend integration are outside these static mockups.

Sample names and conversation dates come from the source mockup and are not live account data. The old batch builders above describe superseded v1 files. Do not use them to generate variants before first-screen approval.
