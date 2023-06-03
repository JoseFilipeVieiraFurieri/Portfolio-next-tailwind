import { CMSIcon } from '@/app/components/cms'
import { KnownTech as IKnowTech } from '@/app/types/projects'
import { getRelativeTimeString } from '@/app/utils/time-relative'

type KTProps = {
  tech: IKnowTech
}

export const KnownTech = ({ tech }: KTProps) => {
  const relativeTime = getRelativeTimeString(
    new Date(tech.startDate),
    'pt-BR',
  ).replace('há ', '')
  return (
    <div className="p-6 rounded-lg bg-gray-600/20 flex flex-col hover:text-emerald-500 hover:bg-gray-600/30 transition-all">
      <div className="flex items-center justify-between">
        <p className="font-medium">{tech.name}</p>
        <CMSIcon icon={tech.icon} />
      </div>
    </div>
  )
}

// <span>{relativeTime} de experiência</span>
