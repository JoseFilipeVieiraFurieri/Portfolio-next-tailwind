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
  query PageInfoQuery2 {
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
      hightlightProjects(where: {}) {
        slug
        thumbnail {
          url
        }
        title
        shortDescription
        teches {
          name
        }
      }
    }
    workExperiences {
      companyLogo {
        url
      }
      role
      companyName
      companyUrl
      description {
        raw
      }
      teches {
        name
      }
      certification {
        url
      }
      linkCertificado
    }
  }
  `

  return fetchHygraphQuery(
    query,
    1000 * 60 * 60 * 24, // 1 day
  )
}

export default async function Home() {
  const { pages: pageData, workExperiences } = await getPageData()

  return (
    <>
      <HeroSection homeInfo={pageData} />
      <KnowTechs techs={pageData[0].knownTechs} />
      <PinnedProjects projects={pageData[0].hightlightProjects} />
      <WorkExp exp={workExperiences} />
      <ContactForm />
      <Footer />
    </>
  )
}
