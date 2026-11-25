# Returning-user personal AOS review

**Status:** Returning-user direction approved by the user, subject to adding the missing microphone. That correction is complete in v4. Subsequent adaptations must retain voice input; new screen directions still require a first sample.

[PNG preview](returning-user-v4.png) · [Editable SVG](returning-user-v4.svg) · [Example data](example-day.json)

The first-login welcome is retained in `../first-screen-review/`. This returning-user opening treats AOS as an assistant that understands the member's state: a personal greeting, the causes of today's pressure, a concrete proposal and the measurable difference if approved. It is a conversation with an embedded decision, rather than a separate dashboard.

## Product and source grounding

Read alongside [the project requirements](../../../MOCKUP_REQUIREMENTS.md), section 15.2.

- Flutter: `/Users/doabile/workspace/hedgetech/sigmar-investment-app/lib/src/feature/home/presentation/widgets/command_chat_view.dart`, especially lines 48–98: opening narration, task refresh, local fallback and current-state narration. Governed asks go through `askAos` at line 133.
- Flutter: `lib/src/feature/reasoner/domain/day_narration.dart` in the same repository: observed task and Flow signals, current and future windows, omission of unobserved dimensions, and history-based forecasts after at least four recorded days. This is a stronger source than static task-count examples in other home widgets.
- [Sigmar's maintained vision and principles](https://github.com/davidoabile/apcce/blob/main/htql/docs/website/sigmar-about-page.md): personal authority, evidence for claims and accountable action.
- [AOS](https://github.com/davidoabile/apcce/blob/main/htql/docs/website/sigmar-aos-page.md): personal context, shared knowledge and governed action; automation through Flows.
- [For individuals](https://github.com/davidoabile/apcce/blob/main/htql/docs/website/sigmar-for-individuals-page.md): personal experiences, relevant context and connected Personas.
- [Branding and typography](https://github.com/davidoabile/apcce/blob/main/htql/docs/website/sigmar-branding-topology.md): warm dark colours, exact artwork, Satoshi and restrained hierarchy. Navigation continues to follow the supplied `Sigmar_Individual` and `sigmar_aos_admin` references.

## Illustrative day and arithmetic

No member records were retrieved. David, the commitments and the plan are explicit design fixtures.

| Quantity | Minutes |
| --- | ---: |
| Available today, after breaks and family commitments | 360 |
| Meetings | 180 |
| Two deadline tasks | 120 |
| Waiting Flow review | 30 |
| Flexible expense admin | 45 |
| Flexible course notes | 45 |
| Total planned today | 420 |
| Initial overload | 60 |
| Proposed work moved to tomorrow | 90 |
| Remaining planned today | 330 |
| Resulting free time today | 30 |

Tomorrow's proposed slots are 14:00–14:45 and 14:45–15:30. The fixture assumes these slots are free, leaves tomorrow with 30 minutes of capacity after the moves, and keeps the tasks ahead of their Friday deadlines. Today's school pickup at 16:00 is outside the available work time and remains protected. The benefit is redistribution: 90 minutes moved, zero effort claimed as saved.

The card exposes both proposed changes before “Approve 2 changes”. “Edit plan”, the underlying-state link and the chat composer give the person ways to question or adapt the proposal. Opening this screen does not execute it. Menu destinations are retained from the separate first-login drawer sample; no bottom app menu is introduced.

## Capability boundary

Flutter confirms the state-led opening and governed action path. Its observed task-count signals do not by themselves prove hour-based scheduling, free calendar slots or permission to read family information. The quantified proposal illustrates the user's requested behaviour. Production needs authorised source data, reliable duration estimates, current calendar availability and Flow rules. Revalidate these before execution, report individual outcomes, and refresh the briefing afterward. Do not convert incomplete observations into invented precision or a promise that the person will feel relaxed.

## Rendering and review

Run `node admin/landing-page/returning-user-review/build.cjs` from the project root. The builder creates only this sample and validates its workload arithmetic. It uses the existing local Satoshi font configuration and `sharp` dependency; resolve the environment-specific paths before running on another machine.

The SVG is authored at 393 × 852 logical pixels and exported as a 786 × 1704 PNG. Original logo and AI artwork remain vector; DNA is faint and blurred. Authored body text is 16 px, the greeting 22 px, button labels 15 px and supporting metadata 12–13 px. Approval and edit buttons are 44 px high. Source SVG links to the existing background asset; PNG embeds it for standalone review.

The exported image was visually inspected for text fit, hierarchy, intact brand artwork, proposal readability and separation from the composer. This is a static mockup, not a connected Swift/Kotlin/React implementation or a claim of full accessibility conformance.

The idle composer now presents “Type or talk to Sigmar”, a prominent 44 px microphone action with the accessible name “Talk to Sigmar”, and a separate attachment target. Earlier v3 exports remain as review history. Voice capture is a proposed native interaction, not implemented by these static files.
