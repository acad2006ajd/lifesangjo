# B2C 디자인 시스템 (B2C Design System)

A token-first design system for a Korean-language B2C consumer service. Everything here is derived from two sources the client provided:

1. **Token specification sheets** — seven exported screens (`uploads/B2C 디자인 시스템*/…/Content.png`) documenting the full Color (primitive + Bg/Fg/Border alias + component), Spacing and Radius token sets, in Korean, with per-token usage notes.
2. **랜딩페이지 기본 가이드 (1920px 기준)** — a short written brief covering the landing-page grid, section rhythm and type scale.

No codebase, Figma file, logo, imagery or product screenshot was provided. Everything in this project that is not directly traceable to those two sources is flagged as an inference or a substitution below.

## What the product is
A consumer-facing (B2C) service marketed through a Korean landing page and operated through both PC and mobile surfaces. The token spec names the surfaces explicitly — PC header, mobile header, top promotion banner, bottom button group, modal/popup, toast, badge, chip, table, card list — so the system covers a marketing landing page plus the transactional screens behind it. The brand voice is polite Korean service copy (존댓말), the palette is a single blue brand hue over a cool grey scale, and the layout is centred, generous and text-led.

## Index
| Path | What it is |
|---|---|
| `styles.css` | Entry point — `@import`s every token file. Consumers link this one file. |
| `tokens/fonts.css` | Pretendard `@font-face` (CDN — see caveats) + `--Font-Family-Base`. |
| `tokens/colors-primitive.css` | Raw palette: GrayScale, Primary, Red, Yellow, Green, Teal, Purple. |
| `tokens/colors-bg.css` | `--Color-Bg-*` alias + component tokens. |
| `tokens/colors-fg.css` | `--Color-Fg-*` alias + component tokens. |
| `tokens/colors-border.css` | `--Color-Border-*` alias + component tokens. |
| `tokens/spacing.css` | Spacing primitives, header offsets, gutters, X-gaps. |
| `tokens/radius.css` | Radius primitives + per-component radii. |
| `tokens/typography.css` | Pretendard scale and weights. |
| `tokens/layout.css` | Landing-page layout constants (1024 / 750 / 140 / 68 / 28). |
| `guidelines/*.html` | Foundation specimen cards shown in the Design System tab. |
| `components/**` | React primitives (below). |
| `ui_kits/landing/` | Full 1920px landing page assembled from the primitives. |
| `SKILL.md` | Agent Skills wrapper so this folder works inside Claude Code. |

## Components
Grouped by concern; every family is one the token spec names.

**components/actions** — `Button`, `IconButton`, `FAB`
**components/forms** — `Input`, `Textarea`, `Dropdown`, `SearchField`, `Checkbox`, `Radio`, `Toggle`, `Chip`
**components/feedback** — `Badge`, `InlineMessage`, `Banner`, `Toast`, `Tooltip`
**components/surfaces** — `Card`, `Modal`, `Table`
**components/navigation** — `Header`, `BottomButtonGroup`
**components/icon** — `Icon`

Each directory holds `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md` and one `*.card.html` specimen.

### Intentional additions
- **`Icon`** — the spec references icons throughout (Icon Button, Badge, Inline Message, Dropdown chevrons) but ships no glyph set. `Icon` is a thin wrapper that renders a Lucide glyph through a CSS mask so it inherits `currentColor`. Substitution flagged below.
- **`Card`, `Modal`, `Table`** are named in the token usage notes (CardList, 모달·팝업, Table) but have no drawn spec; their internals (padding, title sizes) are inferred and marked as such.

## CONTENT FUNDAMENTALS
All product copy is Korean.

- **Register.** 해요체 존댓말 throughout — "…해 주세요", "…할 수 있습니다", "…드립니다". Never 반말, never imperative-blunt ("입력해라"). Error text states the fact plus the fix: "인증번호가 일치하지 않습니다." not "오류".
- **Person.** The user is addressed as 고객님 or implicitly (subject dropped); the company says 저희 rarely and never 우리. First person singular never appears.
- **Sentence shape.** Short declaratives. Marketing lines stay under ~20 characters per line and break by meaning, not by width: "필요한 순간에, / 가장 쉬운 선택". Body sentences end with 다/요 and a period; headlines drop the period.
- **Numbers and units.** Korean thousands separators and 원: "19,000원". Durations as "3분", "영업일 기준 1일 이내". Percentages as "50% 할인".
- **Casing.** Latin words inside Korean copy stay lowercase unless they are proper nouns or UI token names. Button labels are verb phrases: 신청하기, 자세히 보기, 닫기, 다음 — the 하기 ending is the house pattern for primary CTAs.
- **고지문구 (disclaimers).** Always 12px, Fg-Tertiary, prefixed with ※, placed directly under the block they qualify: "※ 본 혜택은 신규 가입 고객에 한해 제공되며…".
- **Status vocabulary.** The semantic tones have fixed Korean labels in the spec: 중립·진행 / 에러·위험 / 경고·주의 / 성공·완료 / 정보·안내 / 프로모션·이벤트. Reuse those words rather than inventing synonyms.
- **Emoji.** None. The spec contains no emoji and none should be introduced; status is carried by the Badge colour and a Lucide glyph.
- **Vibe.** Calm, procedural, reassuring. The system sells ease ("복잡한 절차 없이 3분"), not excitement. No exclamation marks outside a promotion banner.

## VISUAL FOUNDATIONS
- **Colour.** One brand hue — Primary blue, `#145ce6` (Primary-600) as the default brand fill, 700/800 for hover/pressed, 200 for disabled. Everything structural is the cool GrayScale ramp (`#f4f6fa` → `#1f2429`), which carries a faint blue cast. Five semantic hues (Red, Yellow, Green, Teal, Purple) exist **only** for status: 에러, 경고, 성공, 정보, 프로모션. Never use a semantic hue decoratively.
- **Two backgrounds, never more.** A page is either a white 대지 (`Bg-Primary`) with grey section blocks, or a grey 대지 (`Bg-Grouped-Primary`, GrayScale-050) with white blocks on it. Sections alternate between the two; a third background colour is out of system.
- **Type.** Pretendard only, four weights (400/500/600/700). Landing scale: main title 40 Bold, sub title 24 Medium, caption 12. UI text runs 13–16px. Headlines get `letter-spacing:-0.02em`; body is 1.6 line-height, UI 1.4–1.5.
- **Spacing.** A 2px-based primitive scale (2,4,6,8,10,12,16,20,24,28,32,36,40,48,52,56,64). Landing rhythm is fixed: 140px section padding, 68px title→content, 28px inside content. UI gaps are only 4px (controls ≤28px tall) or 8px (controls >28px). Screen gutters are 20px on both PC and mobile.
- **Radius.** Radius is a function of height, not of taste: 28/32px controls → 8px, 40/48px → 10px, 56px and textarea → 12px, pills/FAB → 9999px. Cards use 16px, dropdown menus and tables 12px. 10px is documented as an exception step, used only where the component geometry demands it.
- **Borders.** 1px, always. Border-Primary (GrayScale-300) for inputs and tables, Secondary (200) for section dividers and card outlines, Tertiary (100) for list rows. Selected/focused elements switch the border to Primary-600.
- **Shadows.** Minimal and reserved for things that float: none on resting cards (a 1px border does that job), `0 6px 20px rgba(0,0,0,.06)` on hovered interactive cards, `0 8px 20px rgba(0,0,0,.10)` on dropdown menus, `0 20px 48px rgba(0,0,0,.20)` on modals, `0 4px 12px rgba(0,0,0,.15)` on the FAB. There is no inner-shadow system.
- **Focus.** A 3px outer ring in Border-Brand_light (Primary-100) plus a Primary-600 border. Error and success swap the ring to Red-200 / Green-100.
- **States.** Every interactive colour role ships Default / Hover / Pressed / Disabled as tokens, and hover always means *darker* (Primary 600→700→800; GrayScale 100→200→300). Nothing changes opacity, scales or lifts on press — colour alone communicates state. Disabled keeps full opacity and swaps to the pale token instead.
- **Transparency and blur.** Used in exactly three places: the modal scrim (black 30%), the overlay icon button on imagery (black 15/20%), and the toast (`#292929` 60% + 8px backdrop blur). Nowhere else.
- **Animation.** Functional only: 120ms ease colour/border transitions on controls, 160ms on the toggle knob. No bounce, no spring, no entrance animation on page sections.
- **Imagery.** None supplied. Image areas in the UI kit are left as labelled empty frames rather than invented. When photography arrives, expect it cool-toned and clean to match the grey ramp — but that is an assumption, not a documented rule.
- **Layout.** Content is centred in a 1024px inner box on a 1920px canvas, narrowing to 750px for tables, forms and FAQ. The header is sticky; content below it is offset by 108px (PC) or 148px with the promotion banner, 102/142 on mobile. A fixed bottom button group reserves 64px.

## ICONOGRAPHY
- **No icon assets were provided** — the spec sheets reference Icon Button, Badge, Inline Message and Dropdown glyphs but ship no SVG, font or sprite.
- **Substitution (please review):** [Lucide](https://lucide.dev) static SVGs, loaded from `cdn.jsdelivr.net/npm/lucide-static@0.460.0`. Lucide is a 24px-grid, 2px-stroke, round-cap outline set — the closest common match to the light outline glyphs implied by the spec's UI heights. The `Icon` component masks them so they take `currentColor`.
- **Sizes.** 16px inside 28/32px controls, 20px inside 40/48px, 24px in the FAB and section markers.
- **Style rules.** Outline only; never mix filled and outline glyphs in one row. Icons are always paired with a text label except in `IconButton`, which requires an accessible `label`. Status icons are fixed per tone: circle-alert (에러), triangle-alert (경고), circle-check (성공), info (정보), gift (프로모션).
- **No emoji, no unicode glyphs** as icons anywhere in the system.
- Swap `BASE` in `components/icon/Icon.jsx` for a local `assets/icons/` directory the moment the brand's own set exists.

## Logo
**No logo file was provided, and none has been drawn.** Wherever a mark belongs — header, footer, thumbnail — the wordmark "B2C" is set in Pretendard Bold. Supply the real logo and replace those three spots.

## Caveats / inferences
- Font binaries are **not** bundled; `tokens/fonts.css` points at the public jsDelivr copy of Pretendard v1.3.9. Drop the brand's licensed files into `assets/fonts/` and rewrite the four `src` urls if the system must work offline.
- Only the 40 / 24 / 12px landing sizes are specified. The 18/16/14/13px UI steps, all line-heights and all weights per role are **inferred**.
- Component internals not covered by the spec — button label sizes, input paddings, card padding, table row padding, modal width, toggle dimensions — are inferred from the specified heights and radii.
- The spec sheet writes the 10px spacing step as `--Spacing-Primitive-_X2_5` (leading underscore); it is normalised to `--Spacing-Primitive-X2_5` here.
- Alias values were read from the exported PNGs. They are legible and cross-checked against the primitive ramp, but a Figma/JSON export of the token set would remove any doubt.
