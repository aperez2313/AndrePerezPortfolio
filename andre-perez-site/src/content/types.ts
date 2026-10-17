/*
  Content model. Every page reads from the data files in this folder, so copy can change without
  touching layout code. TypeScript checks the shape: if a project is missing a field, `npm run build`
  fails and tells you which one.
*/

/** Marks content Andre still has to supply or confirm. Renders as a visible "Needs input" tag. */
export type NeedsInput = { needsInput: string }

export const isNeedsInput = (value: unknown): value is NeedsInput =>
  typeof value === 'object' && value !== null && 'needsInput' in value

export type ProjectStatus = 'Concept' | 'Prototype' | 'In progress' | 'Completed'

export type ProjectCategory = 'Business operations' | 'Automation' | 'Analytics' | 'Web & digital experiences'

/** Brand guide section 12: every project is labeled one or the other. */
export type ProjectLabel = 'Work project' | 'Learning project'

export type ProjectVisual =
  | {
      kind: 'placeholder'
      /** What the real visual will show, once a sanitized version exists. */
      note: string
    }
  | {
      kind: 'image'
      src: string
      alt: string
      /** One line: what it shows and why (brand guide section 11). */
      caption: string
      width: number
      height: number
    }

export type Project = {
  slug: string
  label: ProjectLabel
  title: string
  category: ProjectCategory
  status: ProjectStatus | NeedsInput
  /** Problem statement for cards. Lead with the problem (brand voice rule 1). */
  problem: string
  /** What Andre did himself. "I" for his part, "we" for the team. */
  myPart: string | NeedsInput
  skills: string[]
  visual: ProjectVisual
  featured: boolean
  /** Lower numbers show first. */
  order: number
}

export type ScopeStat = {
  value: string
  label: string
  detail: string
}

export type Pillar = {
  id: 'operations' | 'systems' | 'analytics'
  title: string
  items: string[]
  note?: string
}
