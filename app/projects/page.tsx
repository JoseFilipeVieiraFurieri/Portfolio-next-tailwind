import React from 'react'
import { ProjectDetails } from '../components/pages/home/hero-section/projects/project-details'
import { ContactForm } from '../components/contact-form'
import { Footer } from '../components/footer'
import { PageIntroduction } from '../components/pages/home/hero-section/projects/page-introduction'
import { ProjectList } from '../components/pages/home/hero-section/projects/project-list'
import { fetchHygraphQuery } from '../utils/fetch-hygraph'
import { ProjectsPageData } from '../types/page-info'
import { Project } from '../types/projects'
import { log } from 'console'

export const metadata = {
  title: 'Projetos',
}

type ProjectProps = {
  projects: Project[]
}

const getPageData = async (): Promise<ProjectProps> => {
  const query = `
  query MyData2 {
    projects {
      shortDescription
      slug
      title
      pageThumbnail {
        url
      }
      teches {
        name
      }
    }
  }
  `

  return fetchHygraphQuery(query, 60 * 60 * 24)
}

const HomePage = async () => {
  const { projects } = await getPageData()

  return (
    <>
      <PageIntroduction />
      <ProjectList projects={projects} />
      <ContactForm />
      <Footer />
    </>
  )
}

export default HomePage
