import type { Project } from '../../content/types'
import { CropFrame } from '../ui/CropFrame'

export function ProjectVisual({ project, index, className = '' }: { project: Project; index: number; className?: string }) {
  const { visual } = project

  if (visual.kind === 'image') {
    return (
      <figure className={className}>
        <img
          src={visual.src}
          alt={visual.alt}
          width={visual.width}
          height={visual.height}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
        <figcaption className="mt-2 text-small">{visual.caption}</figcaption>
      </figure>
    )
  }

  return (
    <CropFrame className={`flex flex-col justify-between p-8 md:p-10 ${className}`}>
      <p className="label">Fig. {String(index).padStart(2, '0')}</p>
      <p
        aria-hidden="true"
        className="font-display text-[clamp(5rem,3rem+8vw,10rem)] leading-none font-semibold text-cobalt transition-transform duration-500 ease-brand group-hover:-translate-y-2 motion-reduce:transition-none"
      >
        {String(index).padStart(2, '0')}
      </p>
      <p className="max-w-xs text-small">
        <span className="font-semibold">Visual in progress.</span> {visual.note}.
      </p>
    </CropFrame>
  )
}
