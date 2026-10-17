/*
  Site-wide facts: name, contact, navigation, resume. Change these here and every page updates.
*/

export const site = {
  name: 'Andre Perez',
  tagline: ['Better systems.', 'Smoother operations.'],
  location: 'Miami, Florida',
  /* Brand kit descriptor (LinkedIn banner, social templates). Open item 8 in the brand guide. */
  descriptor: ['Business operations', 'Digital commerce', 'Practical technology'],
  /*
    TODO(andre): the project brief says "Ecommerce Marketing Manager". The current resume PDF says
    "eCom Manager". The brand guide says the site must match the resume exactly. Confirm which one.
  */
  currentTitle: 'Ecommerce Marketing Manager',
  currentEmployer: "Sedano's Supermarket and Fresco Supermarket",
  email: 'helloandreperez@outlook.com',
  linkedin: {
    href: 'https://www.linkedin.com/in/andregperez',
    display: 'linkedin.com/in/andregperez',
  },
  resume: {
    /*
      TODO(andre): this PDF includes a phone number. Confirm that is okay to publish, or export a
      version without it, then replace the file in public/.
    */
    href: '/Andre_Perez_Resume.pdf',
  },
  /* TODO(andre): set once a domain is chosen. Used for canonical URLs, Open Graph and the sitemap. */
  url: '',
} as const

export const navItems = [
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
] as const
