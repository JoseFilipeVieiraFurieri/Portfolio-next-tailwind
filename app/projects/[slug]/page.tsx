import { ProjectSections } from '@/app/components/pages/home/hero-section/projects/project-sections'
import { ProjectDetails } from '../../components/pages/home/hero-section/projects/project-details'
import { ContactForm } from '@/app/components/contact-form'
import { Footer } from '@/app/components/footer'
import { fetchHygraphQuery } from '@/app/utils/fetch-hygraph'
import {
  ProjectsPageData2,
  ProjectsPageStaticData,
} from '@/app/types/page-info'
import { Metadata } from 'next'

type ProjectProps = {
  params: {
    slug: string
  }
}

export const metadata = {
  title: 'Project',
}

const getPageProject = async (slug: string): Promise<ProjectsPageData2> => {
  const query = `
  query MyProjectData {
    project(where: {slug: "${slug}"}) {
      pageThumbnail {
        url
      }
      thumbnail {
        url
      }
      sections {
        title
        image {
          url
        }
      }
      title
      shortDescription
      description {
        raw
        text
      }
      teches {
        name
      }
      githubUrl
    }
  }
  `

  return fetchHygraphQuery(query, 60 * 60 * 24)
}

export default async function ProjectPage({ params: { slug } }: ProjectProps) {
  const { project } = await getPageProject(slug)

  return (
    <>
      <ProjectDetails projects={project} />
      <ContactForm />
      <Footer />
    </>
  )
}

export async function generateStaticParams() {
  const query = `
    query ProjectsSlugsQuery() {
      projects(first: 100) {
        slug
      }
    }
  `
  const { projects } = await fetchHygraphQuery<ProjectsPageStaticData>(query)

  return projects
}

export async function generateMetaData({
  params: { slug },
}: ProjectProps): Promise<Metadata> {
  const data = await getPageProject(slug)
  const project = data.project

  return {
    title: project.title,
    description: project.description.text,
    openGraph: {
      images: [
        {
          url: project.thumbnail.url,
          width: 1200,
          height: 630,
        },
      ],
    },
  }
}
