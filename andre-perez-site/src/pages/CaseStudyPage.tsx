import { useParams } from 'react-router'
import { projects } from '../content/projects'
import { NotFoundPage } from './NotFoundPage'
import { PagePending } from './PagePending'

export function CaseStudyPage() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)
  if (!project) return <NotFoundPage />
  return <PagePending title={project.title} description={project.problem} />
}
