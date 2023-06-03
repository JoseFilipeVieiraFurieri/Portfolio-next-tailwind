import { KnownTech, Project } from './projects'
import { RichTextContent } from '@graphcms/rich-text-types'
import { workExperience } from './work-experience'

export type Social = {
  url: string
  icon: string
}

export type HomePageInfo = [
  {
    introduction: {
      raw: RichTextContent
    }
    techs: KnownTech[]
    profilePicture: {
      url: string
    }
    socials: Social[]
    knownTechs: KnownTech[]
    hightlightProjects: Project[]
  },
]

export type ProjectsPageData2 = {
  project: Project
}

export type ProjectsPageData = {
  projects: Project[]
}

export type HomePageData = {
  pages: HomePageInfo
  workExperiences: workExperience[]
}

export type ProjectsPageStaticData = {
  projects: {
    slug: string
  }[]
}
