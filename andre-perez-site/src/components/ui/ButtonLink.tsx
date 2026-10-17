import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { Arrow } from '../icons/Arrow'

/*
  One button style for links. `primary` is Bone on Cobalt (6.0:1). `secondary` is an outlined
  Night button for light surfaces. `inverse` is Night on Citron for dark surfaces (about 13:1).
  Hover underlines the text (settled in brand/web) and nudges the arrow.
*/

type Variant = 'primary' | 'secondary' | 'inverse' | 'inverse-outline'

const styles: Record<Variant, string> = {
  primary: 'bg-cobalt text-bone border-cobalt',
  secondary: 'bg-transparent text-night border-night',
  inverse: 'bg-citron text-night border-citron',
  'inverse-outline': 'bg-transparent text-bone border-bone',
}

type Props = {
  to: string
  children: ReactNode
  variant?: Variant
  arrow?: 'right' | 'up-right' | 'down' | false
  /** External links and files use a plain <a>; internal pages use the router. */
  external?: boolean
  className?: string
}

export function ButtonLink({ to, children, variant = 'primary', arrow = 'right', external, className = '' }: Props) {
  const classes = `group inline-flex min-h-12 items-center justify-center gap-3 rounded-brand border-2 px-6 py-3 font-body text-body font-semibold leading-tight underline-offset-[0.22em] hover:underline ${styles[variant]} ${className}`
  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <Arrow
          direction={arrow}
          className="shrink-0 transition-transform duration-200 ease-brand group-hover:translate-x-1 motion-reduce:transition-none"
        />
      )}
    </>
  )
  if (external) {
    return (
      <a href={to} className={classes}>
        {content}
      </a>
    )
  }
  return (
    <Link to={to} className={classes}>
      {content}
    </Link>
  )
}
