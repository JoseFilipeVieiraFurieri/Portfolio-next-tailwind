'use client'

import { workExperience } from '@/app/types/work-experience'
import { SectionTitle } from '../section-title'
import { ExpItem } from './expItem'
import { animate, motion } from 'framer-motion'
import { fadeUpAnimation, techBadgeAnimation } from '@/app/libs/animation'

type WorkExpProps = {
  exp: workExperience[]
}

export const WorkExp = ({ exp }: WorkExpProps) => {
  return (
    <section className="container py-16 flex gap-10 md:gap-4 lg:gap-16  flex-col md:flex-row">
      <div className="max-w-[420px]">
        <SectionTitle subtitle="Experiência" title="Formação/Certificados" />
        <p className="text-gray-400 mt-6">
          Estou sempre a procura de novas tecnologias e projetos desafiadores
          que possam me proporcianar crescimento como dev e também como pessoa.
        </p>
      </div>

      <motion.div
        className="flex flex-col gap-4"
        {...fadeUpAnimation}
        transition={{ duration: 0.5 }}
      >
        {exp?.map((item) => (
          <ExpItem key={item.companyName} exp={item} />
        ))}
      </motion.div>
    </section>
  )
}
