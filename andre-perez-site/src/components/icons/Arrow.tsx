/* Directional arrow for links and buttons. Inherits the text color. */
export function Arrow({ direction = 'right', className }: { direction?: 'right' | 'up-right' | 'down'; className?: string }) {
  const d = {
    right: 'M4 12h15M13 6l6 6-6 6',
    'up-right': 'M7 17L17 7M8 7h9v9',
    down: 'M12 4v15M6 13l6 6 6-6',
  }[direction]
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d={d} />
    </svg>
  )
}
