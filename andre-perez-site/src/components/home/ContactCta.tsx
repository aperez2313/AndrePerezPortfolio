import { contactCta } from '../../content/home'
import { site } from '../../content/site'
import { ButtonLink } from '../ui/ButtonLink'
import { SectionIndex } from '../ui/Label'

export function ContactCta() {
  return (
    <section aria-labelledby="contact-heading" className="surface-dark bg-night text-bone">
      <div className="container-wide py-20 md:py-28 xl:py-36">
        <SectionIndex index="05" className="text-citron">
          Contact
        </SectionIndex>
        <h2
          id="contact-heading"
          className="mt-8 max-w-[18ch] text-[clamp(2.5rem,1.4rem+4.6vw,6rem)] leading-[1.15]"
        >
          {contactCta.heading}
        </h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-12">
            <p className="label text-citron">Email</p>
            <a
              href={`mailto:${site.email}`}
              className="link-underline mt-2 inline-block font-display text-[clamp(1.25rem,0.5rem+3.6vw,4rem)] leading-[1.2] font-semibold text-citron"
            >
              {/* Let narrow screens break the address before the @, never mid-word. */}
              {site.email.split('@')[0]}
              <wbr />@{site.email.split('@')[1]}
            </a>
          </div>
          <div className="flex flex-col gap-6 border-t border-bone/35 pt-8 lg:col-span-12 lg:flex-row lg:items-center lg:justify-between">
            <p className="max-w-[48ch] text-bone">{contactCta.body}</p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink to={site.linkedin.href} external variant="inverse" arrow="up-right">
                LinkedIn
              </ButtonLink>
              <ButtonLink to={site.resume.href} external variant="inverse-outline" arrow="up-right">
                Resume <span className="sr-only">(PDF)</span>
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
