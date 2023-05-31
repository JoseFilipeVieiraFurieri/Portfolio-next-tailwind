import { ProjectCard } from '../../projects/project-list/project-card'
import Link from 'next/link'

export const ProjectList = () => {
  return (
    <section className="container py-32 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6">
      <Link href="/projects/book">
        <ProjectCard />
      </Link>
    </section>
  )
}

// [repeat(auto-fit, minmax(350px, 1fr))] esse e uma estrategia ja usada, aqui quando o carda diminiu abaixo dos 350px
// ele quebra a coluna
