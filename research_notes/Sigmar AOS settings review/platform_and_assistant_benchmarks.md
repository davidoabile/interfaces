# Sigmar AOS settings: official platform and assistant benchmarks

Verified by browsing on 26 November 2026. Primary official sources only. These benchmarks establish useful design patterns; **none proves Sigmar implements a feature**. No OpenAI product comparison was used, so the OpenAI documentation skill was not applied. Research follows the deep-research researcher reference already read in phase one.

Local companion evidence: [Product and Flutter inventory](/Users/doabile/Documents/ChatGPT/Interfaces%20designs/research_notes/Sigmar%20AOS%20settings%20review/product_and_flutter.md). All proposed sections, defaults and controls below are recommendations, not existing Sigmar capabilities or approvals. The source set is intentionally bounded: platform standards plus two assistant-control patterns (personalization/data and connected access), with voice as a specific input example.

## 1. Where should settings live, and which controls belong to the platform?

### Findings

**Apple HIG — settings placement and native macOS behavior.** Apple distinguishes infrequently changed general preferences from task-specific options, which belong in the relevant working screen. It recommends appropriate defaults, few settings, and honoring systemwide accessibility/authentication choices. macOS provides Settings through the App menu and Command–Comma, opening a custom settings window with related panes; active pane, pane title and last visited pane should be clear. [Apple HIG: Settings](https://developer.apple.com/design/human-interface-guidelines/settings) (full official [Markdown](https://developer.apple.com/design/human-interface-guidelines/settings.md), sections Best practices, General settings, Task-specific options and macOS).

**Android — runtime permissions.** Permission requests are system dialogs; the app explains why a feature needs access and continues use of unaffected functionality when access is declined. Google's guidance explicitly says to respect a denial and not link to system settings in an attempt to persuade reversal. This is different from a user intentionally opening a permissions-management area. [Request runtime permissions](https://developer.android.com/training/permissions/requesting), explanation examples and permission-response handling.

**Android — language.** Android 13+ supports system per-app language preferences. An in-app picker should use the public platform APIs so system and app remain consistent. Declaring languages does not translate an app. [Per-app language preferences](https://developer.android.com/guide/topics/resources/app-languages), introductory guidance and Handle in-app language pickers.

**Browser — site permissions.** Chrome supports site-specific permission choices, including one-time microphone/camera grants, and management through site information/Site settings. These are browser-managed permissions, distinct from a site's account preferences. Unused-site permissions may be removed automatically. [Chrome: Change site settings permissions](https://support.google.com/chrome/answer/114662?hl=en).

**macOS microphone — limited retrieval.** Apple's official search result identifies System Settings → Privacy & Security as the microphone-access management location and describes the microphone access indicator. Full fetch returned HTTP 429, so the specific OS-version screen was not fully inspected. Do not infer deep-link schemes or an app's power to flip the permission. [Apple: Control access to the microphone on Mac](https://support.apple.com/en-tj/guide/mac-help/mchla1b1e1fe/mac).

### Inferences and recommendations for Sigmar

- **macOS:** a dedicated native Settings window, also reachable from the approved profile entry, with App menu → Settings and ⌘,. This follows HIG and avoids filling the chat workspace with a permanent settings dashboard. Preserve Sigmar colors/Satoshi while using suitable native controls. The Tauri/native implementation still needs confirmation; HIG is design guidance, not a claim about the current app.
- **Web:** an accessible settings page/panel with stable category navigation, direct URLs if supported and a clear return to conversation. This is a proposal; Apple does not prescribe a web layout.
- **iOS/Android:** a pushed, scrollable settings list and detail screens, with native back navigation. This is a responsive recommendation, not a platform rule proven by the HIG page. The existing app side drawer remains primary navigation; no bottom app menu.
- A dedicated settings window/page need not have a chat composer. The mandatory microphone applies where a conversation composer is shown. A decorative disabled composer on every settings pane would add no useful control.
- Show permission **status**, explanatory action and voluntary “Manage in system settings”/browser guidance where feasible, rather than a fake switch implying Sigmar owns OS authorization. Never automatically launch settings after denial to pressure acceptance.
- Follow system language first; offer only verified translated app languages. Keep **interface language**, speech-recognition language and response-language preferences distinct. Platform API synchronization is not synchronization across the member's Sigmar devices.
- Put project sources, Persona learning/sharing choices and Guild governance beside those objects; global settings can summarize effective access and link to the correct context.

### Gaps

No cross-platform deep-link URI was verified. Native authorization APIs, browser detection/fallbacks and current Sigmar permission-state integration must be checked before implementation. No evidence that Sigmar supports all languages, biometrics, live voice or a native settings window today.

## 2. How should notifications and accessibility work?

### Findings

**Android notification authorization.** Android 13+ requires runtime POST_NOTIFICATIONS permission for non-exempt notifications. Newly installed apps' notifications are initially off until granted; apps targeting current APIs can choose an appropriate request moment. An app's enabled preference does not override platform denial. [Android: Notification runtime permission](https://developer.android.com/develop/ui/compose/notifications/notification-permission), App capabilities and Effects on newly-installed apps.

**Android notification categories.** Android 8+ notifications belong to channels. Users control each channel's visual/auditory behavior; apps cannot silently change a channel's importance after creation. Google recommends channels by notification type and supports conversation-related channels. [Android: Create and manage notification channels](https://developer.android.com/develop/ui/compose/notifications/channels).

**Apple Focus.** Focus specifies allowed people/apps and time-sensitive notifications and can run on a schedule. Apple may synchronize Focus across Apple devices if the person enables it; this is not Sigmar's own member-preference sync. [Apple: Set up a Focus on Mac](https://support.apple.com/en-gb/guide/mac-help/mchl613dc43f/27/mac/27), Choose which notifications to allow and scheduling.

**Apple notification previews — limited retrieval.** The official indexed Notifications settings page documents Always/When Unlocked/Never preview choices and per-app notification options. Full fetch returned HTTP 429. Treat it as indexed official guidance rather than a fully inspected current screen. [Apple: Notifications settings on Mac](https://support.apple.com/en-ca/guide/mac-help/-mh40583/mac).

**Accessibility is baseline behavior.** WCAG 2.2 includes keyboard operability (2.1.1), visible focus (2.4.7), focus not entirely obscured (2.4.11), 200% text resize (1.4.4), reflow (1.4.10), normal-text contrast (1.4.3), non-text contrast (1.4.11), names/roles/states (4.1.2), and a 24 CSS-pixel pointer-target minimum with exceptions (2.5.8). This web minimum does not replace this project's larger native touch targets. [W3C: WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/).

### Inferences and recommendations for Sigmar

Use parallel notification categories: **Approvals & access**, **Tasks & reminders**, **Flow completion/failure**, **Invitations & collaboration**, and optional **Updates/offers** only if relevant. These categories are proposals replacing investment-era deposits/listings switches, not proof of a delivery backend. Separate account-level event subscriptions from “Notifications blocked on this device.” Android channel settings should remain authoritative for channel behavior.

**Proposed defaults:** requested reminders and meaningful approval/failure events available, optional promotional updates off, sensitive Persona/health/finance content omitted from outbound notification text. Ask for OS authorization at a relevant moment. Never imply “essential” events bypass OS denial, Focus or Android channel choices.

Quiet hours and a digest can be useful **optional product features** if a notification scheduler exists; neither is established in Sigmar source. Scope quiet hours by account/time zone, show which event types wait, and leave the user in control of OS Focus. A digest must not silently delay time-limited approval notices. No system-focus override or universal alert guarantee is justified.

Do not make accessibility depend on turning on an “Accessible mode.” Honor text scale, keyboard, screen readers and reduced-motion preferences by default. A small Accessibility section can explain supported accommodations or expose genuinely app-specific controls, but should not duplicate OS controls. Verify with real content, error messages and enlarged text; a mockup's attractive spacing is not conformance proof.

### Gaps

Sigmar notification channels, push/email/in-app delivery, scheduling/time zones, essential-notice policy and previews remain unverified. WCAG findings are engineering criteria, not legal advice or a compliance promise.

## 3. What assistant controls should be separated rather than bundled?

### Pattern A: personalization, chat history and data use are separate

Claude's current official memory guide distinguishes account memory, project memory, chat search and a single-chat memory-off mode. Memory-off chats can remain in history; pausing memory differs from resetting it. Current guidance says deleting a chat does not remove memories generated from it, while a separate legacy section says deletion changes memory synthesis. This is explicitly version-dependent, not a universal rule. Memory can be reviewed/edited/deleted and is included in exports. [Claude: Chat search and memory](https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context), current sections Project memory, Turn memory on/off, Data retention and privacy; contrast Information for legacy memory users.

Anthropic separately documents consumer retention and model-improvement choices: removing history is immediate while backend deletion has a stated processing period; training choice and feedback/safety/legal retention have distinct treatment. Disabling training is not erasing already trained models. This is a useful explanation pattern, **not a Sigmar retention promise** or default recommendation. [Anthropic Privacy Center: How long do you store my data?](https://privacy.claude.com/en/articles/10023548-how-long-do-you-store-my-data) (dated 1 July 2026).

**Application to Sigmar:** distinguish at least (1) conversation history, (2) derived Persona memory/experience, (3) eligibility for learning/compiled DNA, (4) permissions to read connected/source material, (5) external model processing and any model-improvement use. Do not label all five “Memory” or make a single “Private” toggle appear to govern them. AOS memory is domain substance, not necessarily equivalent to an assistant's profile summary. Source viewing does not authorize learning, exporting, publishing or sharing with a Guild; phase-one local evidence explicitly supports these boundaries.

Any proposed history deletion/reset should state exactly what it removes, what remains, relevant retention and whether shared/licensed compiled artifacts are affected. Export and account deletion need verified supported scopes and authorization. Do not copy Anthropic's durations, enterprise controls or plan differences into Sigmar.

### Pattern B: connected access is account-level capability plus contextual use

Claude's official connectors guide separates connecting a service, enabling it in a conversation, managing/disconnecting it and underlying source permissions. A connector does not grant access the source account lacks; shared credentials are a distinct case. Connections can be available across devices, while third parties process data on their own infrastructure and terms. [Claude: Use connectors](https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities), Use connected services, Manage your connectors, Security and privacy.

**Application to Sigmar:** local Flutter has genuinely wired registered AI clients and Read/Write grants over selected Persona IDs with suspend/revoke commands. Present an understandable connected-client list, effective scope and contextual access review. Do not relabel these as proven third-party OAuth integrations. Device microphone authorization, an account AI-client grant and a project's source inclusion are three different controls. Revoking client access should not promise to undo previous external actions or remove all earlier shared data. Preserve Flow approvals and durable policy; a per-conversation convenience choice must not widen member grants.

### Voice-specific supporting example

Claude's official voice page distinguishes full spoken conversation from text/voice switching, provides explicit stopping and push-to-talk versus hands-free behavior, and documents a text transcript in history. Audio and transcript retention need their own disclosure; copying another assistant's voice behavior is not evidence that Sigmar supports continuous listening. [Claude: Use voice mode](https://support.claude.com/en/articles/11101966-use-voice-mode), Enable/Use voice mode and privacy guidance.

**Application to Sigmar:** keep approved “Talk to Sigmar” input visible, show capture/stop state and transcript review where authorized, preserve typed input if mic denied. Treat dictation, live conversation, synthesized voice playback and recording retention separately. **Proposed default:** explicit user initiation and no background listening; require implementation evidence before showing hands-free/background toggles, voice selector or storage controls.

### Gaps and contradictions

Claude's memory documentation deliberately contains new and legacy behavior; do not select whichever deletion claim seems friendliest. Official search snippets can reflect the legacy section even when the current page differs. Apple support fetch failures limit screen-level verification. Assistant feature availability is changing and should be rechecked at implementation; only durable control distinctions are recommended here.

## Suggested eight sections and remaining dependencies

1. **General** — System/Light/approved charcoal appearance; verified interface language; native settings entry.
2. **Conversation & voice** — supported input preferences, microphone status, transcript/recording explanation, playback if supported.
3. **Notifications** — meaningful event categories, channel/delivery status, platform management; quiet hours/digest only with backend support.
4. **Privacy & AI access** — effective policy, registered clients and scoped grants; contextual Persona/project/Guild links.
5. **Personalization & learning** — clearly distinguish history, memory/experience and learning eligibility; ship only verified controls.
6. **Data & sync** — device replica, pending changes, last sync/errors; export/removal only through supported scoped flows.
7. **Account & security** — profile/sign-in/lock/sign out, supported session/device management; no placeholder MFA/duress/recovery promises.
8. **About & support** — version, diagnostics review/consent, actual Sigmar legal destinations and help. Accessibility remains baseline across all sections, with concise support information here or General.

Main dependencies: native settings integration; persistence scope per preference; current identity/security operations; push/category/scheduling backend; voice processing/retention; derived-memory/compiled-DNA deletion and export contracts; effective authorization and offline pending/rejected states; translated resources and accessibility verification. None should be hidden behind plausible-looking enabled controls in a mockup. Initial redesign can show supported actions plus clear contextual links while proposed capabilities remain research recommendations.
