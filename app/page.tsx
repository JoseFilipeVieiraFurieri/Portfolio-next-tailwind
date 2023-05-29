import { HeroSection } from './components/pages/home/hero-section'
import { Header } from './components/header'
import { KnowTechs } from './components/pages/home/hero-section/know-techs'

export default async function Home() {
  return (
    <>
      <HeroSection />
      <KnowTechs />
    </>
  )
}
