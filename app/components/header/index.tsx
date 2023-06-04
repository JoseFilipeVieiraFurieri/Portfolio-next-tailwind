'use client'

import Link from 'next/link'
import Image from 'next/image'
import { NavItem } from './nav-item'
import { motion } from 'framer-motion'

const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Projetos',
    href: '/projects',
  },
]

export const Header = () => {
  return (
    <motion.header
      initial={{ top: -100 }}
      animate={{ top: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute top-0 w-full z-10 h-24 flex items-center justify-center"
    >
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image
            width={58}
            height={49}
            src="/images/logo2.png"
            alt="logo do cara"
          />
        </Link>

        <nav className="flex items-center gap-4 sm:gap-10">
          {NAV_ITEMS.map((item) => (
            <NavItem {...item} key={item.label} />
          ))}
        </nav>
      </div>
    </motion.header>
  )
}

// no tailwind a responsividade e dadado pelo sm( que corresponde a 700 px acho) ai ele usa o gap 4 pra telas pequenas
