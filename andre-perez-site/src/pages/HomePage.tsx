import { Seo } from '../components/Seo'
import { AboutPreview } from '../components/home/AboutPreview'
import { Capabilities } from '../components/home/Capabilities'
import { ContactCta } from '../components/home/ContactCta'
import { FeaturedWork } from '../components/home/FeaturedWork'
import { Hero } from '../components/home/Hero'
import { ScopeStrip } from '../components/home/ScopeStrip'

export function HomePage() {
  return (
    <>
      <Seo description="Andre Perez is a Miami-based digital commerce and operations professional who makes complex workflows clearer, more efficient and easier to manage." />
      <Hero />
      <ScopeStrip />
      <FeaturedWork />
      <Capabilities />
      <AboutPreview />
      <ContactCta />
    </>
  )
}
