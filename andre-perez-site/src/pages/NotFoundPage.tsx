import { Seo } from '../components/Seo'
import { ButtonLink } from '../components/ui/ButtonLink'
import { Label } from '../components/ui/Label'

export function NotFoundPage() {
  return (
    <>
      <Seo title="Page not found" description="This page does not exist." />
      <section className="container-wide py-24 md:py-32">
        <Label className="text-cobalt">Error 404</Label>
        <h1 className="mt-6 text-h1">This page took a wrong turn.</h1>
        <p className="mt-6 text-lead">The link may be old, or the page moved.</p>
        <ButtonLink to="/" className="mt-10">
          Go to the homepage
        </ButtonLink>
      </section>
    </>
  )
}
