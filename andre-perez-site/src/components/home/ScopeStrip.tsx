import { scope } from '../../content/home'
import { SectionIndex } from '../ui/Label'

/*
  Metric treatment (open item 3). Numbers here describe scope of responsibility, not results,
  and the section says so in plain words. Big Citron numeral, a rule, then the context line.
*/
export function ScopeStrip() {
  return (
    <section aria-labelledby="scope-heading" className="surface-dark bg-night text-bone">
      <div className="container-wide grid gap-12 py-16 md:py-24 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <SectionIndex index="01" className="text-citron">
            At a glance
          </SectionIndex>
          <h2 id="scope-heading" className="mt-6 text-h2">
            The scope I work across today.
          </h2>
          <p className="mt-6 max-w-[36ch] text-bone/85">
            These numbers describe what I'm responsible for in my current role. They are not performance results.
          </p>
        </div>

        {/* One row per stat: numeral left, label and context right. Rows never squeeze the numeral. */}
        <dl className="lg:col-span-8">
          {scope.map((stat) => (
            <div
              key={stat.label}
              className="grid gap-x-8 gap-y-3 border-t-2 border-bone py-6 last:pb-0 sm:grid-cols-[minmax(0,5fr)_minmax(0,4fr)] sm:items-end"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-display text-stat font-semibold tracking-tight text-citron tabular-nums">{stat.value}</dd>
              <dd className="sm:pb-2">
                <span aria-hidden="true" className="label block text-bone">
                  {stat.label}
                </span>
                <span className="mt-1 block text-small text-bone/85">{stat.detail}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
