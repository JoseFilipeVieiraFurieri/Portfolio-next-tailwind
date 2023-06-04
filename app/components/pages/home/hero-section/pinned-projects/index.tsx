'use client'

import { HorizontalDivider } from '@/app/components/divider/horizontal-line'
import { SectionTitle } from '@/app/components/section-title'
import { ProjectCard } from './project-card'
import { Link } from '@/app/components/link-app'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Project } from '@/app/types/projects'
import { use } from 'react'

type PinnedProjectsProps = {
  projects: Project[]
}

export const PinnedProjects = ({ projects }: PinnedProjectsProps) => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="destaques" title="Projetos em destaque" />
      <HorizontalDivider className="mb-16" />

      <div>
        {projects?.map((item) => (
          <div key={item.slug}>
            <ProjectCard project={item} />
            <HorizontalDivider className="mb-16" />
          </div>
        ))}

        <p className="flex items-center gap-1.5">
          <span className="text-gray-400">Quer conhecer mais projetos?</span>

          <Link className="inline-flex" href="/projects">
            Clique aqui
            <HiArrowNarrowRight />
          </Link>
        </p>
      </div>
    </section>
  )
}
