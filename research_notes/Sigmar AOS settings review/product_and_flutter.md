# Sigmar AOS settings: local product and Flutter evidence

Research date: 26 November 2026. Read-only source review; no mockup edits, builds, servers, database connections or runtime verification. Findings describe source wiring, not a verified deployed feature. Recommendations are explicitly proposals.

## 1. Which sources and product boundaries govern settings?

### Takeaway

Sigmar AOS is a governed, Persona-based, chat-first product, not simply the investment application preserved in the Flutter tree. The Flutter settings labels are useful historical evidence but cannot be copied as a current product specification. The strongest missing settings subject is control over AI access and sharing; it must preserve member authority, per-Persona grants and Flow approvals rather than offer a casual global autonomy switch.

### Evidence and source authority

Both inspected worktrees had HEAD `76fd112cf52b8922b8ab574e33d2fcc37cb5e0a5`, subject `feat(web): GOV-391 measured spacing against the global mockups at 1440x1000 and 393x852; neutral portal tokens; theme token test`. `hedgetech-wt-native-sync` was detached; `hedgetech-wt-web-global` was on `feat/web-global-design`. Worktree names alone therefore do not prove different versions or authority. Uncommitted state and deployed behavior were not audited. Native/web evidence is partial, not an exhaustive implementation audit.

Governance overrides an apparently recent but obsolete plan:

- [Governance Log line 336](/Users/doabile/workspace/hedgetech-wt-native-sync/htql/docs/architecture/repository/governance-log/decisions-and-approvals.md:336), GOV-323, had conditionally approved a single Flutter client; line 360, **GOV-347 explicitly supersedes it** with Swift iOS, Kotlin Android, React web, Tauri desktop and a shared Rust core. Only the Flutter wallets screen carries over; the rest starts fresh. This proves retirement of the single-Flutter-client direction, not deletion of every Flutter capability or proof that every old financial feature has been discontinued.
- [Governance Log line 313](/Users/doabile/workspace/hedgetech-wt-native-sync/htql/docs/architecture/repository/governance-log/decisions-and-approvals.md:313), GOV-300, says Guild DNA changes follow proposals/votes/application with separate proposer, voter and applier. A personal settings page must not flatten this into one owner's DNA edit toggle.
- [Engineering operating procedure](/Users/doabile/workspace/hedgetech-wt-native-sync/htql/docs/architecture/preliminary/engineering-session-operating-procedure.md:1) and GOV-294 at Governance Log line 307 govern engineering roles, not customer-facing settings categories.
- [Approved design requirements section 16](/Users/doabile/Documents/ChatGPT/Interfaces%20designs/MOCKUP_REQUIREMENTS.md:385): neutral light surfaces, original logos, Satoshi, shared brand, platform-native composition. Section 19 at line 497 supersedes historical dark-palette approval gates: Sigmar warm charcoal is approved. Section 16.4 at line 430 establishes New conversation, Search conversations, Discover, Projects; profile menu contains Settings, account switching, Add business account and Purchases & licences. Composer supports typing, attachments and speaking. Do not import the Flutter menu architecture or bottom app navigation.
- [AOS page claims register](/Users/doabile/workspace/hedgetech-wt-native-sync/htql/docs/website/sigmar-aos-page.md:134) identifies Personas, Guilds, Flows and DNA as approved copy. Lines 26–27 distinguish AOS Flows from CLI Workers. A settings design must preserve these separate concepts.
- [About page line 173](/Users/doabile/workspace/hedgetech-wt-native-sync/htql/docs/website/sigmar-about-page.md:173): only compiled DNA is shared/leased/sold; source is never traded. Product copy is approved meaning, not implementation proof.

### Critical permission distinctions

The maintained [AOS security guide](/Users/doabile/workspace/hedgetech-wt-native-sync/workers/sigmar-aos-site/app/ai/security.md:7) states:

- Persona contexts remain separate; Guild participation does not reveal unrelated health/diary data (lines 7–13, 59–66).
- Classification is a threshold plus specific authorization, not a universal pass (lines 31–41). Do not give customers a self-service slider that appears to grant clearance.
- Guild members have differentiated access; Guild membership does not transfer ownership of source DNA (lines 74–76).
- A patient explicitly authorizes a limited relevant view; access does not automatically permit learning (lines 84–88).
- HR gets only authorized information; leaving a Guild can end membership access without erasing legitimately acquired skills or determining all retention obligations (lines 98–108).
- Each protected Flow action remains permission-checked throughout a potentially long-running process (lines 112–122).
- Viewing, publishing, exporting, learning and incorporating information into Guild DNA are distinct permissions (lines 136–157). Revoking future access is not a promise to erase all earlier legitimate records.

These justify a user-facing access review with recipient, Persona/data scope, purpose, read/propose-write capability, status and revocation. They do **not** prove a complete generic consent-management UI already exists.

### AI provider/model caveat

[AI provider and compiledDNA architecture lines 5–17](/Users/doabile/workspace/hedgetech-wt-native-sync/htql/docs/AOS-AI-provider-and-compiledDNA-architecture.md:5) proposes Member, Persona and Guild provider configuration, including publisher-controlled marketplace configurations. Provider resolution occurs at compilation into immutable CompiledDNA. Lines 116–134 require recompilation for behavior-affecting changes; runtime must not dynamically pick a different provider. This is an architecture/specification source, not proof of end-user provider settings. Do not offer a universal live model dropdown, bring-your-own-key form, “all AI runs locally”, automatic provider failover or unlimited third-party processing choice without confirming implementation, compilation impact, licensing and data policy. Public AI-client keys below are not provider API secrets.

### Gaps

No runtime or deployment audit; no proof of device list/revoke-all-sessions, biometric settings, account recovery, data export, deletion, notification delivery or app-level provider selection from this bounded review. These remain dependencies, not established features.

## 2. What did Flutter actually implement?

### Status legend

**Wired** means a visible handler reaches a repository/local persistence/queued domain command in inspected source. **UI-only** means state exists only in the screen/model or uses fixtures/empty handlers. **Historical candidate** means omit from general AOS settings unless its product scope is reconfirmed; this is not a formal deprecation ruling. **Proposal** means recommended design work with dependencies.

### General settings inventory

All page references in this table are to [GeneralSettingsPage](/Users/doabile/workspace/hedgetech-wt-native-sync/sigmar-investment-app/lib/src/feature/settings/presentation/ui/general_settings_page.dart:76).

| Control | Source behavior | Classification and disposition |
|---|---|---|
| Incoming transactions | ValueNotifier created false, disposed on leaving; onChanged updates only local notifier, lines 77, 102–114 | UI-only; investment notification candidate, not an implemented notification subscription |
| Deposits | Same, lines 78, 117–132 | UI-only; historical financial candidate |
| New listing | Same, lines 79, 135–150 | UI-only; historical marketplace/investment candidate; do not confuse with current compiled-DNA marketplace |
| Disable trades preview in public profile | Same, lines 80, 153–168 | UI-only; investment-profile candidate |
| Contact me with new listings | Same, lines 81, 171–186 | UI-only; historical marketing preference candidate |
| Make my profile private | Same, lines 82, 189–204 | UI-only; does not implement privacy/access enforcement. Current privacy needs explicit scoped semantics |
| Dark mode | SettingsScope.setTheme, lines 207–218 | Wired local preference. UI only chooses dark/light despite model supporting system |
| Simulation mode | DemoModeVmodel setter, lines 221–250 | In-memory trading mode, not AI sandbox/approval policy |
| Terms of service | Pushes TermsOfServiceRoute, line 266 | Navigation wired but content wrong for current product (see below) |
| Privacy policy | Same route with different title, line 271 | Not a distinct verified policy destination |
| Trading disclaimer | Empty onTap, lines 274–276 | UI-only historical candidate |

Persistence is narrow: [SettingsData lines 9–13](/Users/doabile/workspace/hedgetech-wt-native-sync/sigmar-investment-app/lib/src/feature/settings/model/settings_data.dart:9) has only theme and locale. [SettingsRepository lines 22–34](/Users/doabile/workspace/hedgetech-wt-native-sync/sigmar-investment-app/lib/src/feature/settings/repository/settings_repository.dart:22) defaults to system theme and English, writes theme/locale. [SettingsDao lines 10–19](/Users/doabile/workspace/hedgetech-wt-native-sync/sigmar-investment-app/lib/src/feature/settings/database/settings_dao.dart:10) uses SharedPreferences under settings/theme_mode and locale. This is device-local persistence, not a member-synced preference contract. Locale infrastructure does not establish supported translated languages or a user-visible locale picker.

[DemoModeVmodel lines 3–10](/Users/doabile/workspace/hedgetech-wt-native-sync/sigmar-investment-app/lib/src/feature/more/presentation/vmodel/demo_mode_vmodel.dart:3) defaults enabled and simply notifies listeners. No persistence in that model; no basis for claiming it safely gates every real-money action.

[TermsOfServicePage line 47](/Users/doabile/workspace/hedgetech-wt-native-sync/sigmar-investment-app/lib/src/feature/more/presentation/ui/terms_of_service_page.dart:47) loads `utoria.org/legals/website-terms` regardless of requested title. Preserve legal access as a product need, replace/verify destinations rather than carrying this link into AOS. No remote page was opened.

### AI access is substantively wired, but must be translated carefully

[AI Access page lines 24–53](/Users/doabile/workspace/hedgetech-wt-native-sync/sigmar-investment-app/lib/src/feature/security/presentation/ai_access_page.dart:24) refreshes synced settings, updates the local holder optimistically and enqueues settings before background drain. Visible controls at lines 91–150 include clients, grants, read, propose writes, public key, signed requests, Persona allowlist and auto-commit.

[AiSettings lines 3–10 and 26–63](/Users/doabile/workspace/hedgetech-wt-native-sync/sigmar-investment-app/lib/src/core/sync/ai_settings.dart:3) defines a **member-scoped read model**, populated from encrypted local SQLite through sync. Safe defaults: read off, write off, public-key requirement on, signed requests on, Persona allowlist on, auto-commit off. A locally present read model is not an app-only preference.

[SyncService lines 2356–2383](/Users/doabile/workspace/hedgetech-wt-native-sync/sigmar-investment-app/lib/src/core/sync/sync_service.dart:2356) writes a MEMBER_AI_SETTINGS command to the outbox for SYNC_PUSH. [MemberAiSettings domain lines 5–15, 32–41, 65–95](/Users/doabile/workspace/hedgetech-wt-native-sync/crates/htql-domain/src/member_ai_settings.rs:5) models an auditable event-sourced master gate, one row per member, with engine-stamped member identity. This establishes source implementation across screen/read model/outbox/domain; does not establish current native UI coverage or runtime end-to-end behavior.

Default-deny is a necessary gate in the larger authorization stack. Turning read/write on does not grant universal access or replace explicit client/Persona grants. Write permission allows proposed writes; with auto-commit off they route through a Flow. Auto-commit changes authority materially and must not become an ordinary “Let Sigmar help automatically” toggle. Keep cryptographic/allowlist safeguards as enforced policy or advanced, carefully explained security controls rather than placing weakening toggles beside appearance.

[AI Clients lines 43–67, 115–122](/Users/doabile/workspace/hedgetech-wt-native-sync/sigmar-investment-app/lib/src/feature/security/presentation/ai_clients_page.dart:43): refresh, register, and status commands for Activate/Suspend/Revoke are wired. [AI Grants lines 42–85, 136–143, 192–216](/Users/doabile/workspace/hedgetech-wt-native-sync/sigmar-investment-app/lib/src/feature/security/presentation/ai_grants_page.dart:42): registered client, Read/Write access mode and selected Persona IDs; Activate/Suspend/Revoke commands. These support an evidence-based “Connected AI clients & access” area. They do not prove OAuth integrations, operating-system app permissions, token expiry UI or provider account linking.

### Account/profile/security/notifications/conversation adjacencies

| Area | Source evidence | Correct interpretation |
|---|---|---|
| Account switcher | [SettingsBottomSheet lines 92–138](/Users/doabile/workspace/hedgetech-wt-native-sync/sigmar-investment-app/lib/src/feature/home/presentation/widgets/settings_bottom_sheet.dart:92) reads real synced accounts; active account changes tenant context; pending accounts disabled | Account context is distinct from the member's personal identity and app preferences |
| Profile, Settings, Notifications, Log out | Same file lines 187–223 routes and AppEvent.exiting | Useful profile-menu actions, not proof all destination pages are complete |
| Profile edits | [SyncService lines 3252–3290](/Users/doabile/workspace/hedgetech-wt-native-sync/sigmar-investment-app/lib/src/core/sync/sync_service.dart:3252) queues display name, names, about, job title, location and business metadata by account ID | Synced account/profile data, not local preferences; native screen parity not established |
| Avatar | SettingsBottomSheet lines 282–304 offline-first local avatar then binary upload; account profile URL separately | Gallery access is OS permission; uploaded avatar becomes profile data |
| Remove owned business/child account | Same file lines 307–340 confirms then queues delete, explicitly retaining records; business Guild sync stops | Soft account removal is not erase-my-personal-data. Do not reuse as universal account deletion promise |
| Member profile screen | [MemberProfilePage lines 46, 245–256, 302–306](/Users/doabile/workspace/hedgetech-wt-native-sync/sigmar-investment-app/lib/src/feature/members/presentation/member_profile_page.dart:46) includes coming-soon actions and sample DNA/version/about content | Rich profile presentation is not proof of real verification, statistics or editable preferences |
| Legacy Security | [SecurityPage lines 110–178](/Users/doabile/workspace/hedgetech-wt-native-sync/sigmar-investment-app/lib/src/feature/security/presentation/security_page.dart:110) hardcoded masked contact data with edit routes; lines 190–247 security questions, login PIN, duress PIN route labels; lines 278–285 switch only updates ValueNotifier | Do not claim working MFA, recovery questions, duress behavior or disabling PIN from labels. Duress and ordinary PIN route to same security PIN route. Requires current identity/core evidence |
| Current native lock | [Android PinLockScreen lines 23–50](/Users/doabile/workspace/hedgetech-wt-native-sync/clients/android/app/src/main/kotlin/io/sigmar/nativeapp/PinLockScreen.kt:23) collects five-digit AOS PIN and invokes core unlock | Source-backed lock flow, not proof of every proposed security setting or biometrics |
| Notifications | [NotificationsPage lines 36–96](/Users/doabile/workspace/hedgetech-wt-native-sync/sigmar-investment-app/lib/src/feature/home/presentation/ui/notifications_page.dart:36) empty tap, temp avatar, Lorem Ipsum and static timestamp | Placeholder feed, not notification preference/delivery implementation |
| Group settings | [ChatGroupSettingsPage lines 340–383, 395–435](/Users/doabile/workspace/hedgetech-wt-native-sync/sigmar-investment-app/lib/src/feature/chats/presentation/ui/chat_group_settings_page.dart:340) routes Requests & Invites/Permissions; Leave/Block empty handlers | Conversation/group scope. Navigation alone is not persisted authorization; Leave/Block UI-only |
| Current web shell | [Web AOS shell line 86](/Users/doabile/workspace/hedgetech-wt-web-global/clients/web/src/ui/aos/shell.tsx:86) Sign out invokes handler | Bounded search found no comprehensive AOS settings implementation in this shell; portal CMS/database/engineering settings are separate administration surfaces |

## 3. What settings structure would serve current AOS?

### Proposed information architecture

This is a design recommendation, not an approved feature specification or implementation claim. Start with one Settings overview sample after research, not a mass batch.

| Proposed area | Useful controls/links | Scope and dependencies |
|---|---|---|
| General | Appearance: System/Light/Sigmar charcoal; language only where translated; accessibility/display preferences, keyboard behavior where supported | Device-local by default. Respect OS text size/reduced motion; don't fabricate an app switch for an OS-owned capability. Theme persistence precedent exists; other controls need native implementation |
| Conversation & voice | Input/send behavior, speech language/voice if supported, transcript review explanation, microphone permission/status and OS settings link, playback preferences where available | Device and conversation. Visible mic stays mandatory; don't imply permanent recording or background listening. Exact voice engine/storage/provider capability remains unverified |
| Notifications | Flow approvals, tasks/reminders, invitations/access changes, completion/failure; channels and quiet time if implemented | Member event preferences plus device OS push permission. Preserve essential security/approval signals; not the old deposits/listings toggles. Backend delivery and channel policy not established |
| Privacy & AI access | Connected AI clients, per-client per-Persona access, Read versus propose-write authority, status, suspend/revoke, policy summary | Member master policy plus scoped grants. Explain effective permissions; changes queue/sync and may be pending/rejected. Do not claim optimistic local update immediately changes server authority or remote devices |
| Data & sync | Current account/device sync status, last successful sync, pending changes and failed items; retry/help; storage/download choices only where supported | Local replica versus synced member/account data. Proposed visibility, not proven dashboard. Avoid destructive “clear all data” shortcuts |
| Account & security | Profile link, verified sign-in methods as actually supported, current session/lock, manage sessions/devices only when real, sign out; recovery/help only after identity confirmation | Member/account versus device lock. Do not expose UI-only security questions/duress promises or invent passkeys/biometrics. Account deletion/export needs separate scoped supported flow |
| About & support | Version, diagnostics with explicit review/consent, support, actual Sigmar terms and privacy | App-wide. Old external legal URL must be corrected/verified; diagnostics should not silently include conversations or secrets |

Keep Purchases & licences in the profile menu as approved, with a contextual link from settings if useful. No need to duplicate onboarding, wallet actions, DNA marketplace or all Discover destinations inside settings.

### Keep contextual administration in its context

- **Persona:** name/purpose/context sources, source sharing, learning eligibility, grants and compiled artifact/provider dependencies. Settings may offer an access overview but should deep-link to the specific Persona for changes. Do not conflate personal source memories with compiled DNA or universal chat-history training.
- **Guild/business:** members, roles, approvers, organizational policy, proposals/voting, contracts, publication and permitted shared data. Require visible acting identity/account and authorization; not personal app preferences.
- **Project:** sources, collaborators, project-specific access and conversation context. Current mockup project surfaces do not prove a backend project-policy model; present as proposed IA until verified.
- **Flow:** schedule, approvers, contracts, consent, spending and execution permissions belong to the particular Flow/version. An app-wide “auto-run everything” setting would obscure durable policy and contract boundaries.
- **Conversation/group:** participants, invitations, context selection and any mute/archive/delete controls when implemented. Avoid global deletion claims.
- **Engineering/admin:** database schemas, tenant placement, infrastructure credentials, compiler/developer settings and operational controls belong to authorized administrative tools. Similar names in the monorepo are not evidence that personal AOS needs them.

### Sync and data-loss constraint

[user-data-sync design lines 49–51, 88–102 and 117–136](/Users/doabile/workspace/hedgetech-wt-native-sync/htql/docs/user-data-sync.md:49) says local replica validity and applied checkpoint determine resume; server cursor is not proof that local data exists. Unsent offline writes must survive rebootstrap, and absent local-only writes may be unrecoverable. This is a design contract, not verified recovery functionality. It supports exposing pending changes/status before any reset and forbids promising that reinstalling or “reset sync” is harmless. Exact source/compiled/shared retention policies need product/backend confirmation.

### Unresolved facts before a meaningful implementation

1. Current Rust/native policy query/update parity for member AI settings, clients/grants and effective permission checks; server rejection and offline pending/error presentation.
2. Current identity API support for changing PIN/sign-in method, devices/sessions, recovery, biometrics and deletion. Legacy screen labels are inadequate evidence.
3. Notification delivery, categories, essential alerts and member-versus-device persistence semantics.
4. Voice capture/transcription/playback provider, audio retention and OS permission handling.
5. Data export/deletion/retention contracts by account, Persona, compiled DNA, Guild and licensed/shared artifacts; no generic “delete everything everywhere” claim.
6. Supported languages, accessibility accommodations, storage management and diagnostic consent.
7. Whether provider configuration spec is implemented and which choices are publisher/organization locked, require recompilation, or affect external data transfer.

None of these requires pausing the research to ask the user routine choices. They should be tracked as implementation/evidence dependencies. No obsolete financial feature should be declared formally retired without a product/governance source; the source-proven supersession here is the Flutter-client architecture.
