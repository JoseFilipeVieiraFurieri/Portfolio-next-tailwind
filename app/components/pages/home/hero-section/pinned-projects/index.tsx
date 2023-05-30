import { HorizontalDivider } from '@/app/components/divider/horizontal-line'
import { SectionTitle } from '@/app/components/section-title'
import { ProjectCard } from './project-card'
import { Link } from '@/app/components/link-app'
import { HiArrowNarrowRight } from 'react-icons/hi'

export const PinnedProjects = () => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="destaques" title="Projetos em destaque" />
      <HorizontalDivider className="mb-16" />

      <div>
        <ProjectCard />
        <HorizontalDivider className="mb-16" />
        <ProjectCard />
        <HorizontalDivider className="mb-16" />

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
