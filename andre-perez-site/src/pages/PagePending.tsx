import type { ReactNode } from 'react'
import { Seo } from '../components/Seo'
import { ButtonLink } from '../components/ui/ButtonLink'
import { Label } from '../components/ui/Label'

/* Temporary shell for pages that arrive in Phase 3. Keeps navigation working during review. */
export function PagePending({ title, description, children }: { title: string; description: string; children?: ReactNode }) {
  return (
    <>
      <Seo title={title} description={description} />
      <section className="container-wide py-16 md:py-24">
        <Label className="text-cobalt">Phase 3</Label>
        <h1 className="mt-6 text-h1">{title}</h1>
        <p className="mt-6 max-w-[50ch] text-lead">{description}</p>
        {children}
        <ButtonLink to="/" variant="secondary" className="mt-10">
          Back to home
        </ButtonLink>
      </section>
    </>
  )
}
