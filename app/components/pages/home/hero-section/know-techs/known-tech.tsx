'use client'

import { CMSIcon } from '@/app/components/cms'
import { KnownTech as IKnowTech } from '@/app/types/projects'
import { getRelativeTimeString } from '@/app/utils/time-relative'
import { motion } from 'framer-motion'

type KTProps = {
  tech: IKnowTech
}

export const KnownTech = ({ tech }: KTProps) => {
  const relativeTime = getRelativeTimeString(
    new Date(tech.startDate),
    'pt-BR',
  ).replace('há ', '')
  return (
    <motion.div
      className="p-6 rounded-lg bg-gray-600/20 text-gray-500 flex flex-col hover:text-emerald-500 hover:bg-gray-600/30 transition-all"
      key={tech.name}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.15, delay: 1 * 0.1 }}
    >
      <div className="flex items-center justify-between">
        <p className="font-medium">{tech.name}</p>
        <CMSIcon icon={tech.icon} />
      </div>
    </motion.div>
  )
}

// <span>{relativeTime} de experiência</span>
