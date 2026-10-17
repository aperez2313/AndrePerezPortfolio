import { Link } from 'react-router'
import { isNeedsInput, type Project } from '../../content/types'
import { Arrow } from '../icons/Arrow'
import { NeedsInputTag } from '../ui/NeedsInputTag'
import { ProjectVisual } from './ProjectVisual'

/*
  Project card. Field order follows the brand guide's case study card:
  label, title, problem, my part, then evidence on the case study page.
  The whole card is clickable through one link (the "View case study" text), so screen readers
  hear a single, descriptive link instead of several.
*/
export function ProjectCard({
  project,
  index,
  layout = 'stacked',
  headingLevel = 'h3',
}: {
  project: Project
  index: number
  layout?: 'stacked' | 'wide'
  headingLevel?: 'h2' | 'h3'
}) {
  const Heading = headingLevel
  const wide = layout === 'wide'

  return (
    <article
      className={`group relative grid border-2 border-night bg-bone transition-colors duration-200 hover:border-cobalt has-[a:focus-visible]:outline-3 has-[a:focus-visible]:outline-offset-4 has-[a:focus-visible]:outline-cobalt motion-reduce:transition-none ${
        wide ? 'lg:grid-cols-12' : ''
      }`}
    >
      <ProjectVisual
        project={project}
        index={index}
        className={`border-b-2 border-night ${wide ? 'aspect-[16/10] lg:col-span-7 lg:aspect-auto lg:min-h-[30rem] lg:border-r-2 lg:border-b-0' : 'aspect-[16/10]'}`}
      />

      <div className={`flex flex-col p-6 md:p-8 ${wide ? 'lg:col-span-5 lg:p-10' : ''}`}>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <p className="label">{project.label}</p>
          <span aria-hidden="true" className="size-1.5 bg-night" />
          <p className="label text-cobalt">{project.category}</p>
        </div>

        <Heading className={`mt-4 ${wide ? 'text-h2' : 'text-h3'}`}>{project.title}</Heading>

        <dl className="mt-6 space-y-5">
          <div>
            <dt className="label">Problem</dt>
            <dd className="mt-1">{project.problem}</dd>
          </div>
          <div>
            <dt className="label">My part</dt>
            <dd className="mt-2">
              {isNeedsInput(project.myPart) ? <NeedsInputTag what={project.myPart.needsInput} /> : project.myPart}
            </dd>
          </div>
          <div>
            <dt className="label">Status</dt>
            <dd className="mt-2">
              {isNeedsInput(project.status) ? (
                <NeedsInputTag what={project.status.needsInput} />
              ) : (
                <span className="label inline-block border-2 border-night px-2 py-0.5 text-[0.75rem]">
                  {project.status}
                </span>
              )}
            </dd>
          </div>
        </dl>

        {project.skills.length > 0 && (
          <>
            <p className="label mt-6">Skills shown</p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {project.skills.map((skill) => (
                <li key={skill} className="rounded-brand bg-lilac px-2.5 py-1 text-small font-medium text-night">
                  {skill}
                </li>
              ))}
            </ul>
          </>
        )}

        <div className="mt-auto pt-8">
          <Link
            to={`/work/${project.slug}`}
            className="inline-flex min-h-12 items-center gap-3 font-semibold underline decoration-2 underline-offset-[0.3em] after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
          >
            View case study<span className="sr-only">: {project.title}</span>
            <Arrow className="transition-transform duration-200 ease-brand group-hover:translate-x-1 motion-reduce:transition-none" />
          </Link>
        </div>
      </div>
    </article>
  )
}
