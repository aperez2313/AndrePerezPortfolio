import { pillars } from '../../content/home'
import { BrandIcon } from '../icons/BrandIcon'
import { SectionIndex } from '../ui/Label'

const iconFor = { operations: 'workflow', systems: 'qa-check', analytics: 'data' } as const

export function Capabilities() {
  return (
    <section aria-labelledby="capabilities-heading" className="border-t-2 border-night py-16 md:py-24 xl:py-32">
      <div className="container-wide">
        <SectionIndex index="03" className="text-cobalt">
          What I do
        </SectionIndex>
        <h2 id="capabilities-heading" className="mt-6 max-w-[16ch] text-h1">
          Where business needs meet practical systems.
        </h2>

        <ol className="mt-12 md:mt-16">
          {pillars.map((pillar, i) => (
            <li
              key={pillar.id}
              className="grid gap-6 border-t-2 border-night py-8 last:border-b-2 md:grid-cols-[4rem_minmax(0,1fr)] md:py-10 lg:grid-cols-[4rem_minmax(0,5fr)_minmax(0,7fr)] lg:gap-8"
            >
              <div className="flex items-center gap-4 md:flex-col md:items-start">
                <span className="label tabular-nums">0{i + 1}</span>
                <BrandIcon name={iconFor[pillar.id]} className="size-8" />
              </div>
              <h3 className="text-h3 md:text-[1.875rem]">{pillar.title}</h3>
              <div className="md:col-start-2 lg:col-start-3">
                <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
                  {pillar.items.map((item) => (
                    <li key={item} className="flex items-baseline gap-3">
                      <span aria-hidden="true" className="size-2 shrink-0 translate-y-[-0.1em] bg-cobalt" />
                      {item}
                    </li>
                  ))}
                </ul>
                {pillar.note && (
                  /* Night on Citron: the page's single callout (guide section 6). */
                  <p className="mt-6 inline-flex flex-wrap items-baseline gap-x-3 gap-y-1 rounded-brand bg-citron px-4 py-3 text-small text-night">
                    <span className="label">Learning now</span>
                    <span>{pillar.note}</span>
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
