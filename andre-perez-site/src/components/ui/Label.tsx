import type { ReactNode } from 'react'

/* Small caps label. Four words max (guide section 7). */
export function Label({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <p className={`label ${className}`}>{children}</p>
}

/* Section index used across the homepage, for example "02 / Selected work". */
export function SectionIndex({ index, children, className = '' }: { index: string; children: ReactNode; className?: string }) {
  return (
    <p className={`label flex items-center gap-3 ${className}`}>
      <span className="tabular-nums">{index}</span>
      <span aria-hidden="true" className="h-px w-8 bg-current" />
      <span>{children}</span>
    </p>
  )
}
