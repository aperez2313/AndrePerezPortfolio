import { useEffect, useId, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { navItems, site } from '../../content/site'
import { Arrow } from '../icons/Arrow'

/*
  Sticky navigation. It sits flat on the page at the top and gains a solid Bone background and
  a Night rule once you scroll, so it never covers content with a see-through bar.
  On small screens the links move into a disclosure menu with a real <button>.
*/
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const menuId = useId()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu after navigating. Adjusting state during render is React's
  // recommended pattern for "reset when a value changes" (no effect needed).
  const [lastPath, setLastPath] = useState(location.pathname)
  if (lastPath !== location.pathname) {
    setLastPath(location.pathname)
    setOpen(false)
  }

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `inline-flex min-h-12 items-center font-semibold underline-offset-[0.4em] decoration-2 hover:underline ${
      isActive ? 'underline decoration-cobalt' : ''
    }`

  return (
    <header
      className={`sticky top-0 z-50 border-b-2 transition-colors duration-200 motion-reduce:transition-none ${
        scrolled || open ? 'border-night bg-bone' : 'border-transparent bg-bone'
      }`}
    >
      <div className="container-wide flex h-18 items-center justify-between gap-6 md:h-20">
        <Link to="/" className="flex items-center gap-4" aria-label={`${site.name}, home`}>
          {/* Initials alone under the wordmark's 160px minimum (guide section 8). */}
          <img src="/brand/initials-color.svg" alt="" width="40" height="40" className="size-10" />
          <img
            src="/brand/wordmark-ink.svg"
            alt=""
            width="160"
            height="37"
            className="hidden h-auto w-40 sm:block"
          />
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} className={linkClass}>
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li>
              <a
                href={site.resume.href}
                className="group inline-flex min-h-12 items-center gap-2 rounded-brand border-2 border-night px-4 font-semibold hover:underline underline-offset-[0.3em]"
              >
                Resume <span className="sr-only">(PDF)</span>
                <Arrow direction="up-right" className="size-4" />
              </a>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="inline-flex min-h-12 items-center gap-3 rounded-brand border-2 border-night px-4 font-semibold md:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Close' : 'Menu'}
          <span aria-hidden="true" className="relative block h-3 w-5">
            <span
              className={`absolute left-0 h-0.5 w-5 bg-night transition-transform motion-reduce:transition-none ${open ? 'top-1.5 rotate-45' : 'top-0'}`}
            />
            <span
              className={`absolute left-0 h-0.5 w-5 bg-night transition-transform motion-reduce:transition-none ${open ? 'top-1.5 -rotate-45' : 'top-2.5'}`}
            />
          </span>
        </button>
      </div>

      <nav
        id={menuId}
        aria-label="Main"
        hidden={!open}
        className="border-t-2 border-night bg-bone md:hidden"
      >
        <ul className="container-wide flex flex-col py-4">
          {navItems.map((item) => (
            <li key={item.to} className="border-b border-night/20 last:border-none">
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `flex min-h-14 items-center justify-between font-display text-h3 font-semibold ${isActive ? 'text-cobalt' : ''}`
                }
              >
                {item.label}
                <Arrow />
              </NavLink>
            </li>
          ))}
          <li>
            <a href={site.resume.href} className="flex min-h-14 items-center justify-between font-display text-h3 font-semibold">
              <span>
                Resume <span className="label align-middle text-small">PDF</span>
              </span>
              <Arrow direction="up-right" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
