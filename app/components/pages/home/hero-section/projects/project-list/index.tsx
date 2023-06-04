'use client'

import { ProjectCard } from '../../projects/project-list/project-card'
import Link from 'next/link'
import { Project } from '@/app/types/projects'
import { motion } from 'framer-motion'
import { fadeUpAnimation } from '@/app/libs/animation'

type ProjectListProps = {
  projects: Project[]
}

export const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <section className="container py-32 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6">
      {projects.map((item, i) => (
        <motion.div
          key={item.title}
          {...fadeUpAnimation}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <Link key={item.title} href={`/projects/${item.slug}`}>
            <ProjectCard project={item} />
          </Link>
        </motion.div>
      ))}
    </section>
  )
}

// [repeat(auto-fit, minmax(350px, 1fr))] esse e uma estrategia ja usada, aqui quando o carda diminiu abaixo dos 350px
// ele quebra a coluna
