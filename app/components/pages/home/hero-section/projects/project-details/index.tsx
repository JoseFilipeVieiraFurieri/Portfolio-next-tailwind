'use client'

import { Button } from '@/app/components/button'
import { Link } from '@/app/components/link-app'
import { SectionTitle } from '@/app/components/section-title'
import { TechBadge } from '@/app/components/techs'
import { fadeUpAnimation, techBadgeAnimation } from '@/app/libs/animation'
import { Project } from '@/app/types/projects'
import { RichText } from '@graphcms/rich-text-react-renderer'
import { motion } from 'framer-motion'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { TbBrandGithub } from 'react-icons/tb'

type ProjectDetailsProps = {
  projects: Project
}

export const ProjectDetails = ({ projects }: ProjectDetailsProps) => {
  return (
    <section className="w-full sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden">
      <motion.div
        className="absolute inset-0 z-[-1] bg-red-100"
        style={{
          background: `url(/images/hero-bg.png) no-repeat center/cover, url(${projects.pageThumbnail.url}) no-repeat center/cover`,
        }}
        initial={{ opacity: 0, scale: 1.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ transition: 0.5 }}
      />
      <SectionTitle
        subtitle="projetos"
        title={projects.title}
        className="text-center items-center sm:[&:>h3]:text-4xl"
      />

      <motion.div
        className="text-gray-400 text-center max-w-[640px] sm:my-6 text-sm sm:text-base"
        {...fadeUpAnimation}
      >
        <RichText content={projects.description.raw} />
      </motion.div>

      <motion.div className="w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center">
        {projects.teches.map((item, i) => (
          <TechBadge
            key={item.name}
            name={item.name}
            {...techBadgeAnimation}
            transition={{ duration: 0.3, delay: i * 0.1 }}
          />
        ))}
      </motion.div>

      <motion.div
        className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row"
        {...fadeUpAnimation}
      >
        {projects?.githubUrl && (
          <a href={projects.githubUrl}>
            <Button className="min-width-[180px]">
              <TbBrandGithub size={20} />
              Repositório
            </Button>
          </a>
        )}
      </motion.div>
      <Link href="/projects">
        <HiArrowNarrowLeft />
        Voltar pra projetos
      </Link>
    </section>
  )
}
