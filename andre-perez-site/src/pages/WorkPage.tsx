import { ProjectCard } from '../components/work/ProjectCard'
import { projects } from '../content/projects'
import { PagePending } from './PagePending'

export function WorkPage() {
  const sorted = [...projects].sort((a, b) => a.order - b.order)
  return (
    <PagePending
      title="Work"
      description="The full project index and filters are next. For now, here is every project in the content file."
    >
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {sorted.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i + 1} headingLevel="h2" />
        ))}
      </div>
    </PagePending>
  )
}
