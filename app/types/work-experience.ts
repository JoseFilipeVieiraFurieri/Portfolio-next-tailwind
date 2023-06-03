import { RichTextContent } from '@graphcms/rich-text-types'

export type workExperience = {
  companyLogo: {
    url: string
  }
  role: string
  companyName: string
  companyURL: string
  description: {
    raw: RichTextContent
  }
  certification: {
    url: string
  }
  linkCertificado: string
}
