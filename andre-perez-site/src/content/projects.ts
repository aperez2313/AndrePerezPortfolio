import type { Project } from './types'

/*
  Projects. One object per project. Card copy only for now; case study sections arrive in Phase 3.

  Rules from the brand guide (section 12) before anything here is published:
  1. Is it true and can I show it?
  2. Is it mine to share, with no employer data?
  3. Is it labeled work or learning?
  4. Would my manager be fine reading it?

  Anything Andre has not confirmed uses { needsInput: '...' } so it shows up as a visible tag.
*/
export const projects: Project[] = [
  {
    slug: 'vendor-reconciliation-workbench',
    label: 'Work project',
    title: 'Vendor Reconciliation Workbench',
    category: 'Business operations',
    status: { needsInput: 'Status' },
    problem:
      'Monthly delivery-partner invoices had to be checked line by line against order-level backup before they could go to Accounting.',
    myPart: { needsInput: 'What you built and what you do each month' },
    skills: ['Reconciliation', 'Excel', 'Process documentation', 'Quality assurance'],
    visual: {
      kind: 'placeholder',
      note: 'Sanitized workflow diagram, synthetic invoice data only',
    },
    featured: true,
    order: 1,
  },
  {
    slug: 'weekly-flyer-workflow-suite',
    label: 'Work project',
    title: 'Weekly Flyer Workflow Suite',
    category: 'Automation',
    status: { needsInput: 'Status' },
    problem:
      'Weekly flyer emails for each market had to be checked by hand against the source file for items, prices and images before launch.',
    myPart: { needsInput: 'Your part, and which tools in the suite you built' },
    skills: ['Workflow design', 'Single-file HTML tools', 'AI-assisted development', 'QA checklists'],
    visual: {
      kind: 'placeholder',
      note: 'Annotated screenshot with sample items, no real prices or UPCs',
    },
    featured: true,
    order: 2,
  },
  {
    slug: 'digital-commerce-operations',
    label: 'Work project',
    title: 'Digital Commerce Operations',
    category: 'Business operations',
    status: { needsInput: 'Status' },
    problem:
      'One grocery catalog has to stay accurate across four delivery and ecommerce platforms, for two banners, every week.',
    myPart: { needsInput: 'Your part versus the team’s' },
    skills: ['Platform coordination', 'Requirements gathering', 'QA and UAT', 'Troubleshooting'],
    visual: {
      kind: 'placeholder',
      note: 'Platform map showing how catalog changes flow, no partner terms',
    },
    featured: true,
    order: 3,
  },
  {
    slug: 'star-therapy-website',
    label: 'Work project',
    title: 'Star Therapy Website',
    category: 'Web & digital experiences',
    status: { needsInput: 'Status' },
    problem: '[Needs input] What problem did this website solve, and for whom?',
    myPart: { needsInput: 'Your role, and whether this was client, volunteer or learning work' },
    skills: [],
    visual: { kind: 'placeholder', note: 'Screenshot of the live site, with permission' },
    featured: false,
    order: 4,
  },
]

export const featuredProjects = projects.filter((p) => p.featured).sort((a, b) => a.order - b.order)
