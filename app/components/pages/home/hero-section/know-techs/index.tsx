'use client'

import { SectionTitle } from '@/app/components/section-title'
import { KnownTech } from './known-tech'
import { KnownTech as IKnowTech } from '@/app/types/projects'
import { motion } from 'framer-motion'

type KnownTechsProps = {
  techs: IKnowTech[]
}

export const KnowTechs = ({ techs }: KnownTechsProps) => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="competências" title="Conhecimentos" />
      <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
        {techs?.map((tech, i) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.15, delay: i * 0.1 }}
          >
            <KnownTech key={tech.name} tech={tech} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

// grid-cols-[repeat(auto-fit, minmax(264px, 1fr))] esse é um jeitp de quebrar o card de conhecimento. isso vai fazer
// o cartão de repetir em coluna até o valor mimnimo estipulado(264px) abaixo disse ele quebra a fila
