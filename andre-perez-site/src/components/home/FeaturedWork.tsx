import { featuredProjects } from '../../content/projects'
import { ButtonLink } from '../ui/ButtonLink'
import { SectionIndex } from '../ui/Label'
import { ProjectCard } from '../work/ProjectCard'

export function FeaturedWork() {
  const [lead, ...rest] = featuredProjects

  return (
    <section id="work" aria-labelledby="work-heading" className="py-16 md:py-24 xl:py-32">
      <div className="container-wide">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionIndex index="02" className="text-cobalt">
              Selected work
            </SectionIndex>
            <h2 id="work-heading" className="mt-6 text-h1">
              Real problems from digital commerce operations.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p>
              Visuals use sanitized screenshots and synthetic data, never employer data. Placeholders stay labeled until
              those are ready.
            </p>
            <ButtonLink to="/work" variant="secondary" className="mt-6">
              All projects
            </ButtonLink>
          </div>
        </div>

        <div className="mt-12 md:mt-16">
          {lead && <ProjectCard project={lead} index={1} layout="wide" />}
          <div className="mt-6 grid gap-6 md:mt-8 md:grid-cols-2 md:gap-8">
            {rest.map((project, i) => (
              <div key={project.slug} className={i === 1 ? 'md:mt-24' : ''}>
                <ProjectCard project={project} index={i + 2} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
