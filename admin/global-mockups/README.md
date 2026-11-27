# Sigmar global screen mockups

[Open the current gallery](index.html#macos/discover)

2,251 screen states in 31,514 SVGs across light and approved Sigmar charcoal dark, following the refined light [Discover v3 reference](../macos-discover-review/01-discover-macos-light-v3.svg) and [global requirements](../../MOCKUP_REQUIREMENTS.md#16-global-sigmar-design-standard-26-november-2026). The user explicitly authorised the full batch after the initial sample refinements. All records are illustrative; SVG links navigate review files and do not execute live account actions.

| Content | Screen states |
| --- | ---: |
| Existing AOS inventory, including returning chat and navigation drawer | 49 |
| Existing login and onboarding | 12 |
| Complete account setup | 10 |
| Discover, Projects, chat, account menus and related states | 14 |
| Complete settings and linked review states | 137 |
| Persona management, wizard, recovery and media | 676 |
| Own AI accounts and Persona selection | 188 |
| Flow view/editor, templates, agreements and runtime review | 1,165 |
| Total | 1,086 |

Each state has seven platform/layout files: macOS, desktop web, narrow web, iPhone, iPad, Android phone and Android tablet. Use the gallery to search, select a group/platform and open the original SVG. The Fit width control can be turned off for native-size inspection. Long content scrolls; its intended viewport is listed separately from the SVG's full height. Menu-open captures stay at one viewport.

The shared palette, vector logos, embedded Satoshi, fine rules, restrained copper details and subtle surface depth remain consistent. Only platform chrome, native form treatments and responsive composition change. The gallery Theme selector covers both complete sets. The shared-brand [charcoal reference](dark/macos/discover-charcoal-v2.svg) was explicitly approved; dark versions now cover every screen and layout. Historical exports remain intact.

Content helpers reuse the existing builders without running their output routines. Full source panels and their statuses are preserved. Checks cover valid SVG XML, embedded fonts, source/reference paths, all SVG links, text bounds using Satoshi glyph widths, source panel content, visible voice/attachment controls, passcode/PIN counts, upload limits, consent gates, payment activation and failed publication. Every SVG is additionally decoded in memory; no raster companions or contact sheets are saved. See [layout/content checks](verification.json) and [render checks](render-verification.json).

Run from the project root:

```sh
node admin/global-mockups/build.cjs
node admin/global-mockups/gallery.cjs
python3 admin/global-mockups/verify.py
node admin/global-mockups/verify-render.cjs
```

The authoring tools depend on the project's existing content helpers, approved Satoshi files and local sharp package. `manifest.json` is the gallery inventory; `source-content.json` records the reused AOS content. Original brand and background assets are read without alteration. No build server, database, deployment or package installation is required.


To rebuild both complete themes and refresh the gallery, run `node admin/global-mockups/build-all.cjs`. To rebuild only the dark extension from the existing light SVGs, run `node admin/global-mockups/build-dark.cjs` then `node admin/global-mockups/gallery.cjs`. The former `build-dark-sample.cjs` is historical and guarded against replacing the completed batch.

Dark generation preserves the source layout and content, swaps in the exact original white-wordmark artwork and original dark DNA background, and uses the approved semantic charcoal colours. All links stay in the selected theme/layout. Run `python3 admin/global-mockups/verify.py` for structural/content checks; `REVIEW_THEME=dark node admin/global-mockups/verify-render.cjs` decodes the dark set in memory without saving raster companions.

The complete settings extension is [documented here](../settings-mockups/README.md). Open [Settings](index.html#macos/settings/light) to filter the gallery to its panes and linked review states. Use `node admin/global-mockups/build-all.cjs` for the complete rebuild; the historical first-settings builder is no longer the current source.

The approved [Persona-management extension](../persona-management/README.md) includes the four-step creation wizard and scoped linked outcomes. Open [Personas](index.html#macos/persona-home/light) or [Add Persona](index.html#macos/persona-wizard-1/light). Its [link audit](../persona-management/link-verification.json) includes reachability on all fourteen layout/theme combinations. The extension render audit is `render-verification-persona management.json`; it decodes the SVGs in memory without writing raster files.

The approved [own-AI extension](../own-ai-mockups/README.md) covers account setup and per-Persona account selection. [AI accounts](index.html#macos/own-ai-accounts/light) · [Feedback design reference](index.html#macos/own-ai-feedback-guide/light). Shared semantic feedback and clearer Persona recovery are recorded in requirements section 25. Earlier render reports remain history; the latest new/revised own-AI and feedback audit is `../own-ai-mockups/render-verification.json`.

Persona review shortcuts now expose the [four-step wizard](index.html#macos/persona-wizard-1/light) and [media library](index.html#macos/persona-media-career-library/light). Current contextual-feedback/media render checks are in `../persona-management/media-render-verification.json`; earlier reports remain history.

The approved [Flow suite](../flows-mockups/README.md) refreshes all 27 original references. [Flows](index.html#macos/flow-home/light) · [View Flow](index.html#macos/flow-view/light) · [Edit Flow](index.html#macos/flow-edit/light) · [Charcoal editor](index.html#macos/flow-edit/dark). Review source-specific publication, contract, signing, replay and marketplace states independently; mockups do not execute operations.
