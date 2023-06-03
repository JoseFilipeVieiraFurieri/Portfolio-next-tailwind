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

export type HomePageData = {
  pages: HomePageInfo
  workExperiences: workExperience[]
}
