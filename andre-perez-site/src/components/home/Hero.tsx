import type { CSSProperties } from 'react'
import { hero } from '../../content/home'
import { site } from '../../content/site'
import { ButtonLink } from '../ui/ButtonLink'
import { Motif } from '../ui/Motif'

const delay = (ms: number) => ({ '--delay': `${ms}ms` }) as CSSProperties

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="pb-16 md:pb-24">
      <div className="container-wide pt-8 md:pt-14 xl:pt-20">
        {/* Masthead: who, what, where. Answers "who is this?" before the headline does. */}
        <div className="flex flex-col gap-4 border-b-2 border-night pb-4 sm:flex-row sm:items-end sm:justify-between">
          <ul className="flex flex-col gap-1 lg:flex-row lg:gap-3" aria-label="Focus areas">
            {site.descriptor.map((d, i) => (
              <li key={d} className="label flex items-center gap-3">
                {i > 0 && (
                  <span aria-hidden="true" className="hidden lg:inline">
                    /
                  </span>
                )}
                {d}
              </li>
            ))}
          </ul>
          <p className="label flex items-center gap-3">
            <span aria-hidden="true" className="size-2 bg-cobalt" />
            {site.location}
          </p>
        </div>

        {/*
          The tagline is sized from the width of its container (cqi units), not the viewport, so line
          breaks are predictable: three lines below 1024px, two lines above. Never more than three
          (guide section 7). Larger than the kit's 64px H1 on purpose; see CLAUDE.md.
        */}
        <div className="@container mt-8 md:mt-12">
          <h1
            id="hero-heading"
            className="text-[min(12.1cqi,7rem)] leading-[1.15] tracking-[-0.01em] text-cobalt lg:text-[min(8.55cqi,8.5rem)]"
          >
            <span className="animate-rise block">{site.tagline[0]}</span>{' '}
            <span className="animate-rise block" style={delay(120)}>
              {site.tagline[1]}
            </span>
          </h1>
        </div>

        <div className="mt-10 grid gap-12 md:mt-16 lg:grid-cols-12 lg:gap-8">
          <div className="animate-rise lg:col-span-6 xl:col-span-5" style={delay(260)}>
            <p className="max-w-[34ch] text-lead">{hero.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink to="/work">Explore my work</ButtonLink>
              <ButtonLink to={site.resume.href} external variant="secondary" arrow="up-right">
                View resume <span className="sr-only">(PDF)</span>
              </ButtonLink>
            </div>
          </div>

          {/* The method panel: the brand mission as three steps, carrying the page's one motif. */}
          <aside
            aria-label="How I work"
            className="surface-cobalt animate-rise relative bg-cobalt p-6 text-bone sm:p-8 lg:col-span-6 lg:col-start-7 xl:col-span-6 xl:col-start-7 xl:p-10"
            style={delay(380)}
          >
            <div className="flex items-start justify-between gap-6">
              <p className="label text-citron">How I work</p>
              <Motif variant="citron-on-cobalt" animate className="w-20 shrink-0 md:w-24" />
            </div>
            <ol className="mt-8 md:mt-10">
              {hero.method.map((step, i) => (
                <li
                  key={step}
                  className="grid grid-cols-[2.5rem_1fr] items-baseline gap-2 border-t border-bone/35 py-4 first:border-t-2 first:border-bone md:py-5"
                >
                  <span className="label text-citron tabular-nums">0{i + 1}</span>
                  <span className="font-display text-[clamp(1.375rem,1.1rem+0.9vw,1.875rem)] leading-[1.15] font-semibold">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </div>
    </section>
  )
}
