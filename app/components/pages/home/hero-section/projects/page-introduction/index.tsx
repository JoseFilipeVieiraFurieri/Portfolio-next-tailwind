'use client'

import { SectionTitle } from '@/app/components/section-title'
import { Link } from '@/app/components/link-app'
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi'
import { motion } from 'framer-motion'

export const PageIntroduction = () => {
  return (
    <section className="w-full h-[450px] lg:h-[630px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center">
      <SectionTitle
        subtitle="projetos"
        title="Meus Projetos"
        className="text-center items-center [&>h3]:text-4xl"
      />
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-gray-400 text-center max-w-[640px] my-6 text-sm sm:text-base">
          Projetos que desenvolvi durante os cursos e da minha carreira
        </p>

        <Link href="/">
          <HiArrowNarrowLeft size={20} />
          Voltar pra Home
        </Link>
      </motion.div>
    </section>
  )
}

// [&>h3]:text-4xl, no tailwind e possivel fazer isso selecionar uma estilicão especifica pra um elemento. Nesse caso o
// sectionTitle é um component que tem um h3 dentro e vc quer custmozar somante o h3 dentro dele, vc usa o seletor
