'use client'

import { cn } from '@/app/libs/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavLinkProps = {
  label: string
  href: string
}

export const NavItem = ({ label, href }: NavLinkProps) => {
  const path = usePathname()

  const isActive = path === href

  return (
    <Link
      href={href}
      className={cn(
        'text-gray-400 flex items-center gap-2 font-medium font-mono',
        isActive && 'text-gray-50',
      )}
    >
      <span className="text-emerald-400">#</span>
      {label}
    </Link>
  )
}

// nessa caso o is active e usado pela utils e alem de acolocar o estilo base passa um condicional, se o isActive
// for true ele muda a cor( no caso quando o path for igual a href, projetos ou home)
