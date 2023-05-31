import React from 'react'
import { ProjectDetails } from '../components/pages/home/hero-section/projects/project-details'
import { ContactForm } from '../components/contact-form'
import { Footer } from '../components/footer'
import { PageIntroduction } from '../components/pages/home/hero-section/projects/page-introduction'
import { ProjectList } from '../components/pages/home/hero-section/projects/project-list'

const HomePage = () => {
  return (
    <>
      <PageIntroduction />
      <ProjectList />
      <ContactForm />
      <Footer />
    </>
  )
}

export default HomePage
