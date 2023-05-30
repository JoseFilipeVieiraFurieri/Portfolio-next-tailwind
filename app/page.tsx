import { HeroSection } from './components/pages/home/hero-section'
import { Header } from './components/header'
import { KnowTechs } from './components/pages/home/hero-section/know-techs'
import { PinnedProjects } from './components/pages/home/hero-section/pinned-projects'
import { WorkExp } from './components/work-exp'
import { ContactForm } from './components/contact-form'
import { Footer } from './components/footer'

export default async function Home() {
  return (
    <>
      <HeroSection />
      <KnowTechs />
      <PinnedProjects />
      <WorkExp />
      <ContactForm />
      <Footer />
    </>
  )
}
