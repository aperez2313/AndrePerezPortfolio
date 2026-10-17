import { Link } from 'react-router'
import { navItems, site } from '../../content/site'

export function SiteFooter() {
  return (
    <footer className="surface-dark bg-night text-bone">
      <div className="container-wide border-t border-bone/25 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <img src="/brand/wordmark-reverse.svg" alt={site.name} width="200" height="46" className="h-auto w-50" />
            <p className="mt-4 text-bone">{site.tagline.join(' ')}</p>
          </div>
          <nav aria-label="Footer" className="md:col-span-4">
            <ul className="grid grid-cols-2 gap-x-6 gap-y-1">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="link-underline inline-flex min-h-11 items-center">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href={site.resume.href} className="link-underline inline-flex min-h-11 items-center">
                  Resume (PDF)
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-small md:col-span-3 md:text-right">
            <p>{site.location}</p>
            <p className="mt-1">© {new Date().getFullYear()} {site.name}</p>
            <p className="mt-1">Set in Sora and Manrope.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
