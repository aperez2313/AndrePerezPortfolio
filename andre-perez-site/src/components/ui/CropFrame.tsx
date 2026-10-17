import type { ReactNode } from 'react'

/*
  Graph-paper frame with printer's crop marks. Used for placeholder visuals (projects, portrait)
  so missing assets look intentional and are clearly labeled, never faked.
*/
export function CropFrame({ children, className = '' }: { children: ReactNode; className?: string }) {
  const mark = 'pointer-events-none absolute size-4 border-night'
  return (
    <div className={`graph-paper relative overflow-hidden ${className}`}>
      <span aria-hidden="true" className={`${mark} top-3 left-3 border-t-2 border-l-2`} />
      <span aria-hidden="true" className={`${mark} top-3 right-3 border-t-2 border-r-2`} />
      <span aria-hidden="true" className={`${mark} bottom-3 left-3 border-b-2 border-l-2`} />
      <span aria-hidden="true" className={`${mark} right-3 bottom-3 border-r-2 border-b-2`} />
      {children}
    </div>
  )
}
