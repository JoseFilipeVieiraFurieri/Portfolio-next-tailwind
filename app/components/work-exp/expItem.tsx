import Image from 'next/image'
import { TechBadge } from '../techs'

export const ExpItem = () => {
  return (
    <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
      <div className="flex flex-col items-center gap-4">
        <div className="round full border border-gray-500 p-0.5">
          <Image
            src="/images/logo.png"
            alt="logo inc"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>

        <div className="h-full w-[1px] bg-gray-800" />
      </div>

      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <a
            href="https://github.com/JoseFilipeVieiraFurieri"
            target="_blank"
            className="text-gray-500 hover:text-emerald-500 transition-colors"
            rel="noreferrer"
          >
            @ Trybe
          </a>
          <h4 className="text-gray-300">Desenvolvedor Web Full Stack</h4>
          <span className="text-gray-500">maio 2022 - Atual - (1 ano)</span>
          <p className="text-gray-400">
            Curso voltado para Desenvolvimento Web Full Stack e soft skills
          </p>
          <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">
            Competências
          </p>
          <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
            <TechBadge name="React" />
            <TechBadge name="React" />
            <TechBadge name="React" />
            <TechBadge name="React" />
            <TechBadge name="React" />
            <TechBadge name="React" />
          </div>
        </div>
      </div>
    </div>
  )
}

// gri cols [40px,ifr] nesse caso e passado um coluna custom com 40px e 1fr(pra ocupar o espaço restante)
