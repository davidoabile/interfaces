# Instructions for AI working on this project's mockups

Read [MOCKUP_REQUIREMENTS.md](MOCKUP_REQUIREMENTS.md) before creating or changing any mockup. It records the user's approved visual direction, assets, typography, themes, responsive behaviour and personal Persona teaser treatment.

Inspect the approved reference images linked there before designing. File recency or a larger version number does not establish approval. Earlier explorations remain drafts.

Keep the original brand assets intact. Use editable layouts and exact vector assets for logos, typography and controls. Use image generation for background artwork when helpful.

For each new screen or visual direction, produce one first sample and wait for explicit approval before generating other screens, themes or device variants. Two states of that same sample may be shown together when necessary to review its navigation. Record later user-approved changes in the requirements and update its reference list.

Personal AOS is a chat interface. Never place application menus in a bottom navigation bar. Use a side drawer on phones and a suitable sidebar on larger screens. The current navigation is New conversation, Search conversations, Discover, Projects, recent conversations and profile. Discover opens the existing spaces and tools as tiles; Projects follows Discover. Older source menus establish destinations and content, not the current sidebar structure.

The design standard in `MOCKUP_REQUIREMENTS.md`, section 16, is global across macOS, web, iOS/iPadOS, Android and small devices. Use the Discover v3 reference for the shared cool neutral palette, white surfaces, charcoal typography/actions, original brand assets, Satoshi and restrained copper detailing. Adapt native chrome and responsive layout while preserving brand consistency. Earlier warm beige app surfaces are historical references, not an alternative platform brand. Always show the first mockup for approval before extending a new screen or direction.

Every AOS conversation composer must visibly support speaking as well as typing. Preserve the microphone correction and approval recorded in `MOCKUP_REQUIREMENTS.md`, section 15.3.

The approved AOS direction has been extended to the complete supplied screen inventory in `admin/aos-native-mockups/`. The user explicitly authorised all existing screens and responsive variants; do not treat the earlier first-sample gate as a reason to leave that authorised batch unfinished. See requirements section 15.4.

These project instructions supplement the user's machine-wide working rules.

Current login/onboarding outputs are in `admin/login-register/native-mockups-v2/`, following accepted spacing and the restored shared DNA background. Use requirements section 15.6 and the v8 reference; the older native authentication set is history.

For new or revised mockups, deliver SVG files only unless the user explicitly asks for another format. Avoid duplicate raster exports, contact sheets and unnecessary batches. Existing PNGs are history and should not be deleted. Keep copy concise and avoid repeating “create/created” where “add”, “choose” or “continue” is clearer; retain established labels where needed.

The primary current gallery is `admin/global-mockups/index.html`, covering the global v3 design across macOS, web and mobile. It contains 1,086 screen states in 15,204 SVGs across seven layouts and both light and approved Sigmar charcoal dark themes (Theme selector), including onboarding, account setup, AOS, Discover, Projects and account menus. `admin/svg-mockups/index.html` is the historical gallery. The user explicitly authorised the full global batch after the first-sample refinements; do not repeat the first-sample gate for this completed set. The user's request for the rest authorises the complete account sequence and its responsive variants within the accepted direction; do not stop at another subset of those already requested screens. See requirements section 15.8.

The user explicitly approved the shared-brand charcoal dark sample (“Yes -approved”). Both themes are now complete in the global gallery. Use requirements section 19; do not treat the former dark first-sample gate as pending or substitute a blue/slate dark palette.

The user approved the macOS Settings visual and explicitly authorised all settings screens and links. The complete current settings source is `admin/settings-mockups/`: 137 states in 1,918 SVGs across both themes and all seven layouts. Use requirements section 21 and the unified gallery. The first-sample gate is satisfied for this completed batch. Each button/navigation link must have a real matching review target; preserve theme and platform except explicit theme choices. A settings utility window does not require a conversation composer.

Persona management is an approved, separate narrow batch. The user approved `admin/persona-management-review/01-persona-management-macos-light-v1.svg` and explicitly required a creation wizard. Current source: `admin/persona-management/`, integrated into the global gallery: 676 states / 9,464 SVGs, both themes and all seven layouts. See requirements section 23. Keep Basic information → Constitution → Permissions → Review & add, category-driven type/speak editing, scoped review/save and shared Persona views. All links are covered. Do not repeat the first-sample gate, expand into unrelated modules or offer Persona hard deletion.

The own-AI macOS first sample is approved. Current linked source: `admin/own-ai-mockups/` (188 states / 2,632 SVGs), both themes and seven layouts, integrated in the global gallery. Settings manages API accounts; each Persona chooses one and defaults to Sigmar AI. See requirements section 25. Shared danger/warning/success/info feedback is in `admin/shared-feedback.cjs`, used by Settings, Personas and own-AI. Preserve explanatory, actionable recovery messages. Visual approval does not resolve the seven architecture/money/provider-policy decisions.

Persona management now includes the requested media library, uploads and previews: see requirements section 26 and `admin/persona-management/MEDIA_NOTES.md`. Keep the visible wizard/media shortcuts and specific alert messages. Never restore generic per-tone headings or a preselected-file list as the upload screen. Current Persona inventory is 676 states / 9,464 SVGs. All media and wizard links stay in their Persona/platform/theme.

The approved Flow view/editor and complete supplied source inventory are in `admin/flows-mockups/`, linked from the global gallery. See requirements section 28. The user approved completion across both themes and seven layouts; preserve the separate Flutter designer and scoped agreement/replay identities.
