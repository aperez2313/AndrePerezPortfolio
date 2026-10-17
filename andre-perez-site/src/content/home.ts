import type { Pillar, ScopeStat } from './types'

/*
  Homepage copy. Draft for Andre's review. Every sentence follows the brand voice:
  lead with the problem, show my part, prove it plainly. No em dashes.
*/

export const hero = {
  intro:
    "I'm Andre, a Miami-based digital commerce and operations professional focused on making complex workflows clearer, more efficient and easier to manage.",
  /* Brand guide section 1, "Mission". */
  method: ['Find the friction.', 'Build the fix.', 'Leave a system people can run.'],
}

/*
  Scope of responsibility, not results. These describe what Andre works across today. They are
  not performance gains, and the page says so next to them.
*/
export const scope: ScopeStat[] = [
  {
    value: '30,000+',
    label: 'SKUs in scope',
    detail: 'Products in the digital catalog I help keep accurate: content, pricing and promotions.',
  },
  {
    value: '2',
    label: 'Retail banners',
    detail: "Sedano's Supermarket and Fresco Supermarket, run as separate storefronts.",
  },
  {
    value: '4',
    label: 'Commerce platforms',
    detail: 'DoorDash, Uber Eats, Shipt and Freshop (NCR Voyix), each with its own rules and tools.',
  },
]

export const pillars: Pillar[] = [
  {
    id: 'operations',
    title: 'Business & operations',
    items: ['Process improvement', 'Cross-functional collaboration', 'Ecommerce operations', 'Requirements gathering'],
  },
  {
    id: 'systems',
    title: 'Systems & technology',
    items: ['Workflow design', 'Technical troubleshooting', 'Automation projects', 'Practical software experiments'],
    note: 'Currently learning Python, SQL, JavaScript and APIs, mostly by building tools for real problems.',
  },
  {
    id: 'analytics',
    title: 'Analytics & improvement',
    items: ['Reporting', 'Data quality', 'Reconciliation', 'Quality assurance'],
  },
]

export const aboutPreview = {
  heading: 'From running the platforms to improving the systems behind them.',
  body: [
    'I started in ecommerce on the operations side: Shopify listings, orders and shipping at The Harmony Store. Today I work across delivery and ecommerce platforms for two grocery banners in Miami.',
    'Studying Management Information Systems at FIU gave me words for something I already did at work. When a process keeps breaking, I map it, find the step that fails, and build something simple that stops it from failing again.',
  ],
}

export const contactCta = {
  heading: 'Have a process that has outgrown its tools?',
  body: "I'm open to conversations about operations, systems and product roles, and to collaborating on practical projects.",
}
