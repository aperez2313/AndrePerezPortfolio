import { aboutPreview } from '../../content/home'
import { site } from '../../content/site'
import { ButtonLink } from '../ui/ButtonLink'
import { CropFrame } from '../ui/CropFrame'
import { SectionIndex } from '../ui/Label'
import { NeedsInputTag } from '../ui/NeedsInputTag'

export function AboutPreview() {
  return (
    <section aria-labelledby="about-heading" className="border-t-2 border-night py-16 md:py-24 xl:py-32">
      <div className="container-wide grid gap-12 md:grid-cols-12 md:gap-8">
        {/* TODO(andre): portrait. Shoulders up, plain light backdrop, side window light (guide section 11). */}
        <CropFrame className="flex aspect-[4/5] max-w-md flex-col items-start justify-end p-6 md:col-span-5 md:max-w-none lg:col-span-4">
          <NeedsInputTag what="Portrait" />
        </CropFrame>

        <div className="md:col-span-7 lg:col-span-7 lg:col-start-6">
          <SectionIndex index="04" className="text-cobalt">
            About
          </SectionIndex>
          <h2 id="about-heading" className="mt-6 text-section">
            {aboutPreview.heading}
          </h2>
          <div className="mt-8 space-y-5">
            {aboutPreview.body.map((p) => (
              <p key={p} className="max-w-[60ch]">
                {p}
              </p>
            ))}
          </div>

          <dl className="mt-10 grid gap-6 border-t-2 border-night pt-6 sm:grid-cols-2">
            <div>
              <dt className="label">Currently</dt>
              <dd className="mt-1">
                {site.currentTitle}, {site.currentEmployer}
              </dd>
            </div>
            <div>
              <dt className="label">Education</dt>
              <dd className="mt-1">BBA, Management Information Systems, Florida International University</dd>
            </div>
          </dl>

          <ButtonLink to="/about" variant="secondary" className="mt-10">
            More about me
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
