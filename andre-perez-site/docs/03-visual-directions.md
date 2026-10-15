# Visual directions

Status: draft for Andre's pick, 2026-10-15. All three stay inside Bold & Expressive: Sora 600 headlines, Manrope body, the five colors at roughly Bone 60 / Night 20 / Cobalt 14 / Citron 4 / Lilac 2, the motif once per page, metrics as context-rich stat blocks, never charts. Pick one and I build a rough homepage for it only.

## Direction A: Editorial ledger (recommended)

**Layout.** Reads like the front page of a well-set newspaper. A 12-column grid. The Home headline takes the left eight columns at 64px, the right four columns are empty except the motif, so the asymmetry is the first thing you see. Below it, case studies are listed as horizontal rows, not cards: a thin Lilac rule between each, the Work or Learning tag and date in a narrow left column, the title and one-line problem in the wide right column. One featured case study sits inside a full-width Cobalt band with its screenshot and a stat block. About and Resume follow the same two-column rhythm: a narrow label column on the left, content on the right, like a ledger.

**Color distribution.** Bone is the page. Night is the footer plus one dark band on Home ("How I work": mission, three lines) and the body text. Cobalt is the one featured band, link underlines, the current-nav underline, and the primary button. Citron is the motif bars inside the Cobalt band, the numbered screenshot markers, and one callout line on About. Lilac is the rules between rows and the project tags.

**Motif.** Once per page, inside the Cobalt band on Home (Citron bars, Lilac dot) and in the Night footer elsewhere. Never in the Bone area, so it always sits on a strong color.

**Metrics.** A stat block inside the Cobalt band: the number in Bone Sora at H2 size, and beneath it three short Manrope lines: before, timeframe, what changed. When there is no number, the same block holds "Before: ... After: ..." in two lines. On case study pages the block sits under the Evidence screenshot, same shape.

**Why this one.** It gives Cobalt a single strong placement instead of sprinkling it, keeps Night at an honest 20% without a dark hero, treats numbers the way a publication would, and it is the layout least likely to look like a template because rows with rules are rare on portfolio sites. It also works with one case study at launch: a short list still looks intentional.

## Direction B: Night opener

**Layout.** Home opens on a Night hero that fills the first screen. The tagline sits in the bottom-left corner in Bone Sora, with empty Night above it, so the first screen is mostly dark space and one line. The descriptor runs as a Citron label above the tagline. Scrolling out of the hero lands on Bone, where case studies are stacked as full-width cards with a 1px Night border, each with the screenshot on the right and text on the left, alternating sides. Resume and About are plain Bone pages with a short Night band at the top carrying the page title.

**Color distribution.** Night is the hero and the page-title bands, which already reaches 20%, so the footer is short. Bone is everything after the hero. Cobalt is the primary button, link underlines, and an "Evidence" strip along the bottom of each card. Citron is the descriptor label and the stat number in the hero. Lilac is the dot and the tags.

**Motif.** In the Night hero, Citron bars with a Lilac dot, top right, opposite the tagline. On other pages, in the footer.

**Metrics.** One stat block in the hero, Citron number on Night, Bone context lines. On case study pages the block is a Night box under the screenshot.

**Risk.** A dark hero with a single line is the most common look on tech portfolios right now. The brand would still show through, but a recruiter who sees many sites may file it as familiar. It also front-loads mood over proof: the first screen says nothing about what Andre does until you scroll.

## Direction C: Split screen

**Layout.** Home is two columns that behave differently. The left third is fixed while you scroll: wordmark, descriptor, the positioning statement, email and LinkedIn, and the motif. The right two-thirds scroll through case studies as tall cards, each the height of the screen, with the screenshot filling the top and the Problem, My part, and Evidence stacked below. One card in the sequence is Cobalt instead of Bone. On mobile the left column collapses into a short header and the cards stack.

**Color distribution.** Bone is both columns. Night is the footer and an About strip with the four values. Cobalt is the one Cobalt card, buttons, and link underlines. Citron is the motif bars on the Cobalt card and the screenshot markers. Lilac is the tags and the one rule separating the columns.

**Motif.** Fixed in the left column, Cobalt on Bone, so it stays on screen the whole time on desktop. Once per page still holds, since it is one instance.

**Metrics.** Each case study card ends with its own stat block, Night Sora number on Bone with Manrope context, so the metric belongs to the project, not to the page.

**Risk.** Built for five or more projects. With one or two at launch, the right column runs out and the page looks unfinished. The fixed column also eats a third of a 1280px screen, which squeezes screenshots.

## Common to all three

- Type: Sora 600 headlines at 64/40, 36/28, 24; Manrope 18 body; labels Manrope 600 caps at 0.08em.
- Screenshots: 1px Night border, 4px radius, Cobalt box and numbered Citron marker inside, one-line caption.
- Buttons: Cobalt with Bone text, underline on hover, Night when active.
- Focus ring: 3px Cobalt on Bone, Bone on Cobalt, Citron on Night.
- Motion: hover underline, focus, one motif build-in on Home load, reduced motion honored. Nothing fades in on scroll.
- Nothing from the avoid list: no gradients, no glass, no icon-card rows, no emoji, no logos, no em dashes.
