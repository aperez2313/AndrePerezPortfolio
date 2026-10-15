# Andre Perez Brand Guidelines (V4) for the website build

Source: Andre Perez Brand Guidelines V4, which extends Brand Kit V3 (Bold & Expressive). The V3 files are in this folder:

- `Andre_Perez_Brand_Kit.pdf` and `Andre_Perez_Bold_Brand_Overview.png`: the original kit
- `logo/`: wordmarks (ink, primary, reverse), AP initials (color, mono), favicon. SVG wordmarks use outlined letterforms, so they need no installed font.
- `fonts/`: Sora and Manrope, with their OFL licenses
- `web/`: `brand-tokens.json`, `styles.css`, `brand-reference.html` (open it in a browser to see the styles)
- `templates/`: LinkedIn banner and social templates (useful references for Open Graph images)
- `motif/`: the progression motif, copied out of the templates (see `motif/README.md`)

If this guide and `web/` disagree, ask Andre which wins. If something is missing from both, ask. Do not invent it.

---

## 1. Purpose and positioning

**Tagline:** Better systems. Smoother operations.
**Spanish:** Mejores sistemas. Operaciones más fluidas.

**Who I am:** I work where business operations meet digital tools. In grocery ecommerce I keep delivery partners, product data and platforms in sync. My habit is spotting the process that keeps breaking, then building the tool that fixes it, usually before anyone asks.

**Mission:** Find the friction. Build the fix. Leave a system people can run.

**Direction:** Be the person teams call when operations and technology need to meet.

**Positioning statement:** For teams whose processes have outgrown their tools, I connect the business need to a practical system, and I document it so it keeps working after I hand it off.

**Filter:** If a page, a resume line or a project doesn't support these statements, it doesn't go on the site.

---

## 2. Values

Each value has to be visible in the work itself, not just stated.

| Value | Meaning | Looks like |
|---|---|---|
| Initiative | I don't wait for a ticket. If a process keeps failing, I name it and propose the fix. | A tool built for a recurring manual check. |
| Clarity | Plain words, clear steps, one source of truth. If someone has to ask twice, the doc wasn't done. | A troubleshooting guide a store can follow alone. |
| Follow-through | A fix isn't finished at launch. I check that it held, log what broke and ship the next version. | Versioned releases with a bug log. |
| Bridge-building | I translate between business and tech, partners and teammates, English and Spanish. | Requirements a vendor and a manager both sign off on. |

---

## 3. Voice and tone

**Voice (never changes):** direct, curious, specific, human.
**Tone (shifts by channel).**

Three rules:
1. **Lead with the problem.** Start where the reader feels it. A broken process is more interesting than a job title.
2. **Show your part.** "I" for what I did, "we" for what the team did. Never blur the two.
3. **Prove it plainly.** Evidence over adjectives. A screenshot, a before and after, or a real number I can defend.

Tone by channel:
- **Resume:** no pronouns, verb first, one line per accomplishment, results only if verified.
- **LinkedIn / notes:** first person, a little reflective, one idea per post, end with a question or takeaway.
- **Email:** ask or answer in the first line, details below, close with the next step and an owner.
- **Website pages (Home, About):** not defined in the kit. Propose a tone based on the rules above and get Andre's approval.

Example lines in the brand voice:
- "Every tablet issue looked different. The fix was the same five checks, so I wrote them down."
- "Built an HTML tool that checks weekly flyer items against the source file before launch."
- "Before we pick a platform, we need the fields. Here's how I'm mapping ours."

---

## 4. Writing rules

**Do**
- Start with a strong verb.
- Name the tool, the partner, the file.
- Separate what I did from what the team did.
- Label learning projects as learning projects.
- Use periods and commas. No em dashes.
- Keep sentences under about 25 words.

**Don't**
- Use buzzwords: results-driven, passionate, synergy, leverage.
- Publish a number that can't be sourced.
- Hide who did the work behind passive voice.
- Share employer data, fees or partner terms.
- Explain a tool the reader doesn't need to know.
- Sound like a template.

**Before and after**
- No: "Results-driven professional passionate about leveraging technology."
  Yes: "I build tools that fix broken processes."
- No: "Was responsible for vendor invoice reconciliation."
  Yes: "Reconcile monthly 3PL invoices against order-level backup before payment."
- No: "Increased team efficiency by 80%."
  Yes: "Turned a manual weekly check into a repeatable tool." Add a number only if it was measured.

---

## 5. Bilingual approach

- English leads on professional channels. Spanish is a capability, so show it as one.
- Write each language natively. Never translate word for word.
- Say "Bilingual: English / Spanish" in the headline and resume skills.
- Use Spanish when the reader is Spanish-first (for example a store team guide).
- No Spanglish in professional pieces.

---

## 6. Color

Only these five colors. Nothing else without Andre's OK.

| Name | Hex | Share of a layout |
|---|---|---|
| Bone | `#F5F4F0` | 60% (main background) |
| Night | `#141820` | 20% |
| Cobalt | `#2449E8` | 14% |
| Citron | `#DDF06A` | 4% |
| Lilac | `#CABBEA` | 2% |

If an accent covers more than a small shape, it stops being an accent.

**Approved text pairings** (text needs 4.5:1, or 3:1 at 24px and up)
- Night on Bone, 16.2:1. Body text, documents.
- Bone on Cobalt, 6.0:1. Banners, buttons.
- Citron on Cobalt, 5.2:1. Short labels, AP mark.
- Citron on Night, about 13:1. Dark sections, labels.
- Night on Citron, about 13:1. One callout per piece.
- Night on Lilac, about 10:1. Tags, small cards.

**Never for text**
- Citron on Bone, about 1.2:1. Unreadable.
- Lilac on Bone, about 1.6:1. Decoration only.
- Cobalt on Night, about 2.7:1. Use Citron or Bone instead.
- Lilac on Cobalt, about 3.7:1. 24px and larger only.

Note: an orange (`#E5582B`) and a green (`#3AA35B`) appear in the guide only as do/don't markers. They are not brand colors.

---

## 7. Typography

- **Sora 700:** the name only.
- **Sora 600:** headlines.
- **Manrope:** everything else.
- **Labels:** Manrope 600, all caps, four words max, tracking 0.08em to 0.12em. Never a full sentence in caps.
- **Sentence case** for headlines. Statements end with a period ("Fix it once.").
- **Three lines max** at headline size. If it's longer, shorten the copy before shrinking the type.
- **Left aligned.** Center only a single short line, like a cover title.
- **Headline line height 1.15.** At 0.92 the descenders (y, g, p, q) collide.
- **Sizes (from `web/brand-tokens.json`):** body 18px at 1.6 line height, small 14px, H1 64px desktop / 40px mobile, H2 36px / 28px, H3 24px. Spacing scale 4, 8, 12, 16, 24, 32, 48, 64, 96. Radius 4px. Content max width 1120px, gutters 48px desktop / 24px mobile.

---

## 8. Logo

Assets in `logo/`:
- `wordmark-ink.svg`: light backgrounds
- `wordmark-primary.svg`: light backgrounds, in Cobalt
- `wordmark-reverse.svg`: dark backgrounds
- `initials-color.svg` / `initials-mono.svg`: compact uses
- `favicon.svg`: site favicon

Clear space: at least half the capital A height on all sides. Minimum screen width: wordmark 160px, initials 32px. Smaller than that, use the initials.

Don't:
1. Stretch or squeeze it.
2. Skew or rotate it.
3. Use colors outside the five.
4. Use an outline-only version.
5. Place it on low contrast.
6. Add shadows, glows or bevels.
7. Place it on busy photos or patterns.
8. Retype it in another font.

**Employer and partner brands:** no employer or partner logos without written OK. Name them in text instead. Their style guides stay theirs.

**Placement:** documents get the name top left, once. Social pieces get the AP mark bottom left.

---

## 9. Progression motif

The signature element: three bars stepping up, one dot ahead. It means a process getting better, so it only moves up and to the right.

- Always three bars and one dot.
- Bars equal size, each step equal.
- Once per piece, never as a pattern.
- Never as a chart. It carries no data.

Approved versions: Citron on Cobalt (primary), Cobalt on Bone (light pieces), Citron on Night (dark sections).

Don't: step down, add or make uneven bars, mix or use off-palette colors.

---

## 10. Icons

- 24px grid, 2px Night stroke, square ends.
- One Cobalt accent stroke per icon.
- No fills, no emoji.
- Starter set: workflow, QA check, data, partner, document, audit, integration, issue.

---

## 11. Photography and screenshots

Two kinds of image: Andre, and Andre's work. The layout brings the color, so photos stay calm and honest.

**Portrait**
- Shoulders up, camera at eye level, eyes on the upper third line.
- Window light from the side, no flash.
- Plain light backdrop: off-white, light grey or a wall.
- Solid top in Night, white or Cobalt. No logos.
- A real, relaxed expression.
- Same portrait on LinkedIn, email signature and this site.

**Don't:** crop from a group or event photo, use sunglasses, hats or heavy filters, shoot against a busy background, show customer, pricing or partner data, or post store or office photos without OK.

**Work screenshots**
- Crop to the part that proves the point.
- Blur or replace names, prices, UPCs and partner fees.
- Annotate with a Cobalt box and a numbered Citron marker.
- Caption every image in one line: what it shows and why.

---

## 12. Portfolio and content rules

**Portfolio objective:** give the evidence a resume line can't hold. Add a project when it ships, not before.

**Case study card** (the unit of the portfolio), always in this order:
- Label: `Work project` or `Learning project`
- Title
- **Problem**
- **My part**
- **Evidence** (screenshot plus one verified result)

Example: *Work project. Weekly flyer QA tool. Problem: flyer items had to be checked against the source file by hand every week. My part: built a single-file HTML tool that matches items and flags mismatches. Evidence: [screenshot + one verified result].*

**Content pillars** (use these if the site gets a Notes section)
- **Process notes** (Operations): a problem I saw and the steps that fixed it.
- **Build logs** (Systems): a tool or requirement doc, and what changed between versions.
- **Field lessons** (Communication): working with partners, teams and two languages.

**Before anything is published, check:**
1. Is it true and can I show it?
2. Is it mine to share, with no employer data?
3. Is it labeled work or learning?
4. Would my manager be fine reading it?

**Resume header pattern:** name, one-line descriptor, contact. Nothing else above the fold. The kit's sample uses `helloandreperez@outlook.com`, `linkedin.com/in/andregperez`, "Miami, FL / Bilingual EN, ES". Confirm these with Andre before using them.

---

## 13. Open items. Ask Andre, don't decide alone.

Already settled by the kit's `web/` files (use these unless Andre says otherwise): web type scale, spacing, content width, 3px Cobalt focus ring (Bone ring on Cobalt surfaces), underline on button hover.

Still open:
1. **Dark mode.** Not defined. Night-based pairings exist (Citron on Night, Bone on Night) but no full dark theme.
2. **Status colors.** Only five colors exist, so error and success states for forms need a decision.
3. **KPI display.** The motif can't be a chart and results must be verified. A metric treatment needs to be designed and approved.
4. **Motif.** Dot color: the templates use Lilac, the guide's approved versions don't mention it. No Night version exists. And does "once per piece" mean once per page or once on the whole site?
5. **Motion.** Not defined.

Conflicts between this guide and the kit files:
6. **White surface.** `brand-tokens.json` adds a `surface` color of `#FFFFFF`, but this guide says only five colors. Confirm whether white cards are allowed.
7. **Label tracking.** `styles.css` sets `.ap-eyebrow` letter spacing to 0.06em. This guide says 0.08em to 0.12em.
8. **Descriptor.** The kit's LinkedIn banner, email signature and social templates use "Business operations / Digital commerce / Practical technology." The V4 resume sample uses "Ecommerce operations manager." The resume uses a third one. Confirm which the site uses. Job titles on the site match the resume exactly.

Not included on purpose: the kit's "Warm & Polished" alternative. Andre chose Bold & Expressive. Ignore any warm-direction files if they show up.
