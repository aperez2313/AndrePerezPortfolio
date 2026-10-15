# Site map and content model

Status: draft for Andre's approval, 2026-10-15. Provisional, like everything else.

## 1. Site map

### Launch pages

| Page | URL | Its one job | What is on it |
|---|---|---|---|
| Home | `/` | Make the visitor open a case study. | Tagline as headline, positioning statement, two or three featured case study cards, one stat block (or before/after block), resume download, the motif once. |
| Work | `/work/` | Hold the evidence. | All case study cards, Work projects first, Learning projects after. Each card links to its own page. |
| Case study | `/work/<slug>/` | Prove one thing. | The card (label, title, Problem, My part, Evidence), then the optional longer write-up: approach, tools, what changed between versions, what I learned. Screenshots with captions. |
| Resume | `/resume/` | Give the recruiter the facts fast. | Generated from the DOCX. Name, descriptor, summary, experience, skills, education. Download PDF button at top and bottom. Prints cleanly. No phone. |
| About | `/about/` | Explain how Andre works. | Portrait slot, mission, the four values each with one project under it, bilingual line, education, Miami. Contact links at the end. |
| Contact | `/contact/` | End the visit with a next step. | Email, LinkedIn, resume download. One screen. No form. |
| 404 | `/404.html` | Get a lost visitor back. | One headline, link home. |

Contact is thin on purpose. Recruiters look for a page called Contact, so it exists, but the same links also sit in the footer of every page.

### Later pages (built when real content exists, not before)

Learning (`/learning/`), Now (`/now/`), Notes (`/notes/` with the three pillars: Process notes, Build logs, Field lessons), Toolkit, Work With Me. The nav shows only launch pages. A later page appears in the nav the day it has content.

### Navigation

Header: wordmark, then Work, Resume, About, Contact. Footer: wordmark reverse, tagline, email, LinkedIn, Night motif.

### Every page also gets

Title, meta description, Open Graph image, canonical URL (`[NEEDS INPUT: domain]`), sitemap entry, skip link. Home carries the Person structured data.

## 2. Content model

All content lives in `andre-perez-site/content/`. Layout code never contains a fact about Andre.

### Resume: `content/resume/*.docx`

One DOCX in the folder. The build converts it to a structured file the site reads, and to the PDF. Andre never edits the structured file by hand.

What the converter extracts:

```
name            ANDRE G. PEREZ
descriptor      the line under the name (site may override with the brand descriptor)
contact         email, linkedin, location. Phone is read and discarded.
summary         the Professional Summary paragraph
experience[]    title, employer, location, start, end, bullets[]
improvements[]  the Selected Process Improvements lines, if present
skills[]        group name, items[]
education[]     school, degree, date
```

Accepted DOCX formats: the current ChatGPT style (bold caps section lines, bold titles, "Employer | City | Dates" lines, typed "•" bullets) and standard Word (Heading 1/2/3, List Bullet). Tables, columns, and text boxes break it, and the build stops with a plain message saying which line it could not read.

### Projects: `content/projects/<slug>/`

One folder per project, named in lowercase with dashes. Each has `notes.md` and its screenshots. The existing `_TEMPLATE/notes.md` becomes this, with a header block the site reads:

```
---
title: Weekly flyer QA tool
label: Work project          # or Learning project
when: 2026-03                # month the first version shipped
status: in use               # in use / replaced / retired
featured: true               # show on Home
public: yes                  # yes / anonymized / no. "no" means the site skips it.
tools: [HTML, JavaScript, Excel]
evidence_image: flyer-check-01.png
evidence_caption: The tool flags three flyer items whose price does not match the source file.
evidence_result: ...one verified result, or a before/after sentence...
---

## Problem
## My part
## Evidence
## Approach           (optional)
## What changed between versions   (optional)
## What I learned     (optional)
```

Rules the build enforces: label must be one of the two values, `public: no` hides the project, every image needs a caption, and no section may contain `[NEEDS INPUT`, or the build warns before publishing.

### Learning: `content/learning/courses.yaml`

```
- title: Google Data Analytics Certificate
  provider: Coursera
  status: in progress        # completed / in progress / planned
  date: 2026-12              # finished, or expected
  applied_to: Reporting on marketplace order patterns
  link: https://...          # optional
```

YAML, not JSON, because a missing comma in JSON breaks the build and YAML reads like a list. `courses.md` stays as a scratch file if Andre prefers writing there first.

### Site settings: `content/site.yaml`

Name, descriptor, tagline, email, LinkedIn, location, domain, analytics ID. One file, so changing the descriptor later is one line.

## 3. What this means for updating

- New resume: drop the DOCX, delete the old one, redeploy.
- New project: copy the template folder, fill `notes.md`, add blurred screenshots, set `public: yes`, redeploy.
- New course: add five lines to `courses.yaml`, redeploy.
- Descriptor or contact change: edit `site.yaml`.

`HOW-TO-UPDATE.md` will walk through each of these with exact steps once the build exists.
