/*
  Brand icons (guide section 10): 24px grid, 2px Night stroke, square ends, no fills,
  one Cobalt accent stroke per icon. Drawn by hand instead of using an icon library,
  because library icons can't follow the one-accent-stroke rule.
*/

type IconName = 'workflow' | 'qa-check' | 'data'

const paths: Record<IconName, { base: string; accent: string }> = {
  workflow: {
    base: 'M3 4h6v6H3zM15 14h6v6h-6z',
    accent: 'M9 7h9v7',
  },
  'qa-check': {
    base: 'M5 3h14v18H5zM8 7h8',
    accent: 'M8.5 14l2.5 2.5 4.5-5',
  },
  data: {
    base: 'M3 4h18v16H3zM3 9h18M9 9v11',
    accent: 'M12 14.5h6',
  },
}

export function BrandIcon({ name, className }: { name: IconName; className?: string }) {
  const { base, accent } = paths[name]
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d={base} stroke="var(--color-night)" />
      <path d={accent} stroke="var(--color-cobalt)" />
    </svg>
  )
}
