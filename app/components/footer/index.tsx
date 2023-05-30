import { IoMdHeart } from 'react-icons/io'

export const Footer = () => {
  return (
    <footer className="h-14 h-full flex items-center justify-center bg-slate-950">
      <span className="flex items-center gap-1.5 text-xs sm:text-sm font-mono text-gray-400">
        Made by
        <IoMdHeart size={18} className="text-emerald-500" />
        <strong className="font-medium">José Filipe Vieira Furieri</strong>
      </span>
    </footer>
  )
}
