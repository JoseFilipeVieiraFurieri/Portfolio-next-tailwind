import { ProjectSections } from '@/app/components/pages/home/hero-section/projects/project-sections'
import { ProjectDetails } from '../../components/pages/home/hero-section/projects/project-details'
import { ContactForm } from '@/app/components/contact-form'
import { Footer } from '@/app/components/footer'

export default function ProjectPage() {
  return (
    <>
      <ProjectDetails />
      <ProjectSections />
      <ContactForm />
      <Footer />
    </>
  )
}
