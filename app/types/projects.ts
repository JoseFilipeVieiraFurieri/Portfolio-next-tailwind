import { RichTextContent } from '@graphcms/rich-text-types'

export type KnownTech = {
  icon: string
  name: string
  startDate: string
}

export type ProjectSession = {
  title: string
  image: {
    url: string
  }
}

export type Project = {
  slug: string
  thumbnail: {
    url: string
  }
  title: string
  shortDescription: string
  teches: KnownTech[]
  pageThumbnail: {
    url: string
  }
  sections: ProjectSession[]
  description: {
    raw: RichTextContent
    text: string
  }
  githubUrl?: string
}
