# Own AI: first macOS review

[Settings · AI accounts](01-ai-accounts-macos-light-v1.svg) · [My.Career · AI account selection](02-persona-ai-selector-macos-light-v1.svg)

Approved first-sample reference with two navigation states. The user authorised the remaining screens and shared semantic feedback. Current suite: [Own-AI mockups](../own-ai-mockups/README.md). Editable SVG only, exact original logo and embedded Satoshi. Existing galleries and Persona screens remain unchanged.

Settings → Privacy & AI access → AI accounts manages outgoing provider credentials. Each Persona selects an account, defaulting to **Sigmar AI**. Connecting a key does not change any Persona or grant source access. This is distinct from registering external AI clients that call Sigmar. No credential is stored within Persona content.

Grounding: [PR #382](https://github.com/davidoabile/apcce/pull/382), `docs/member-own-ai`, `htql/docs/architecture/phase-c/member-own-ai.md`, reviewed at commit `15e3fdc67de9d2eaa1fc8507798670c458d0df22`. It remains a draft architecture design. Its member-wide choice is superseded **in this proposed UX** by the user's explicit per-Persona instruction; the implementation design would need matching scope. No backend change or governance approval is implied.

The first sample illustrates Anthropic connected, OpenAI not yet connected and Sigmar AI still selected for My.Career. Names and key suffix are fabricated display metadata, not credentials. No subscription/OAuth sign-in is offered. The failure copy illustrates the recommended stop-and-show-error behaviour. It does not approve a fallback policy.

The seven Sponsor decisions remain open: custody/security widening; launch credentials and any commercial OAuth application; extra charges and usage caps (PR proposes 200 daily runs, still unconfirmed); final provider terms/retention copy; fallback policy; Sigmar's own runtime credential; provider rollout ordering. Do not treat visual approval as security, financial, legal or runtime approval. The screen avoids unverified retention promises, fixed approved caps, no-charge claims and claims about the subscription terms. Provider-specific disclosure/consent copy must be reviewed before a working integration.

After visual approval, cover add provider → disclosure → masked API-key input → fresh PIN → validation → connected or classified error; replace/remove PIN and impact review; daily usage/limit/exhausted states; per-Persona choice review/save and failures; unavailable/removed credentials without silent rerouting. No key reveal, credential-filled edit field, raw provider error body or device secret persistence. A removed credential must not silently reroute an affected Persona to a different paid provider; make the resulting choice explicit during removal. Precise removal semantics need alignment with the architecture's member-wide reset.

Only the two review-navigation states and existing contextual navigation have hrefs in this initial sample. Other controls carry route annotations for the next approved batch, recorded in [route-plan.json](route-plan.json). They are not represented as completed flows. No live calls, charges, key operations or account changes occur.

Build: `node admin/own-ai-review/build.cjs`. Both SVGs rendered in memory; no raster exports. [Verification](verification.json) checks XML, embedded fonts and existing destinations for actual links.
