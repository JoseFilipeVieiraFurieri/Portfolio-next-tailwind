import { KnownTech } from './projects'
import { RichTextContent } from '@graphcms/rich-text-types'

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
  },
]

export type HomePageData = {
  pages: HomePageInfo
}
