/*
  Visible marker for content Andre still has to supply. Night on Lilac (about 10:1).
  Search the codebase for `needsInput` to find every open item.
*/
export function NeedsInputTag({ what, className = '' }: { what: string; className?: string }) {
  return (
    <span
      className={`label inline-flex items-center gap-2 rounded-brand bg-lilac px-2 py-1 text-[0.75rem] text-night ${className}`}
    >
      <span aria-hidden="true">[ ]</span>
      Needs input: {what}
    </span>
  )
}
