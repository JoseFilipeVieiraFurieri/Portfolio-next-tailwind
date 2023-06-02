import { HeroSection } from './components/pages/home/hero-section'
import { KnowTechs } from './components/pages/home/hero-section/know-techs'
import { PinnedProjects } from './components/pages/home/hero-section/pinned-projects'
import { WorkExp } from './components/work-exp'
import { ContactForm } from './components/contact-form'
import { Footer } from './components/footer'
import { fetchHygraphQuery } from './utils/fetch-hygraph'
import { HomePageData } from './types/page-info'

export const metadata = {
  title: 'Home',
}

const getPageData = async (): Promise<HomePageData> => {
  const query = `
  query MyQuery {
    pages(where: {slug: "home"}) {
      introduction {
        raw
      }
      techs {
        name
      }
      profilePicture {
        url
      }
      socials {
        url
        icon
      }
      knownTechs {
        icon
        name
        startDate
      }
    }
  }
  `

  return fetchHygraphQuery(
    query,
    1000 * 60 * 60 * 24, // 1 day
  )
}

export default async function Home() {
  const { pages: pageData } = await getPageData()

  return (
    <>
      <HeroSection homeInfo={pageData} />
      <KnowTechs />
      <PinnedProjects />
      <WorkExp />
      <ContactForm />
      <Footer />
    </>
  )
}
