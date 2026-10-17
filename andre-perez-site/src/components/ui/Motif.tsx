/*
  The progression motif (guide section 9): three equal bars stepping up, one dot ahead.
  Used once per page, never as a pattern, never as a chart.
  Geometry copied from brand/motif/*.svg so it matches the kit exactly.
*/

type Variant = 'citron-on-cobalt' | 'cobalt-on-bone' | 'citron-on-night'

const barColor: Record<Variant, string> = {
  'citron-on-cobalt': 'var(--color-citron)',
  'cobalt-on-bone': 'var(--color-cobalt)',
  'citron-on-night': 'var(--color-citron)',
}

export function Motif({
  variant,
  animate = false,
  className,
}: {
  variant: Variant
  animate?: boolean
  className?: string
}) {
  const fill = barColor[variant]
  return (
    <svg
      viewBox="0 0 159 128"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={[animate ? 'motif-animate' : '', 'overflow-visible', className].filter(Boolean).join(' ')}
    >
      <rect className="motif-bar" x="0" y="68" width="28.9" height="59.5" fill={fill} />
      <rect className="motif-bar" x="39.95" y="34" width="28.9" height="59.5" fill={fill} />
      <rect className="motif-bar" x="79.9" y="0" width="28.9" height="59.5" fill={fill} />
      {/* TODO(andre): dot color. Templates use Lilac; the guide's approved versions don't say. */}
      <circle className="motif-dot" cx="144.5" cy="25.5" r="14.45" fill="var(--color-lilac)" />
    </svg>
  )
}
