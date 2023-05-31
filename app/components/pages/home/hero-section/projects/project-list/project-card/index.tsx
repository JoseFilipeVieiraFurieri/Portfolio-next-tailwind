import Image from 'next/image'

export const ProjectCard = () => {
  return (
    <div>
      <div className="rounded-lg h-[436px] flex flex-col bg-gray-800 overflow-hidden border-2 border-gray-800 hover:border-emerald-400 opacity-70 hover:opacity-100 transition-all group">
        <div className="w-full h-48 overflow-hidden">
          <Image
            src="/images/logo2.png"
            alt="logo-teste"
            width={380}
            height={200}
            unoptimized
            className="w-full h-full object-cover group-hover:scale-110 duration-500 transition-all"
          />
        </div>

        <div className="flex-1 flex flex-col p-8">
          <strong className="font-medium text-gray-500/90 group-hover:text-emerald-500 transition-all">
            Delivery APP
          </strong>
          <p className="mt-2 text-gray-400 line-clamp-4">
            Projeto de de delivery de entrega de bebidas desenvolvido durante o
            curso de desenvolvimento web da Trybe
          </p>
          <span className="text-gray-300 text-sm font-medium block mt-auto truncate">
            Javascript, React, Node.js, RTL
          </span>
        </div>
      </div>
    </div>
  )
}

// group-hover:scale-110 função do tailwind, se coloca group na div pai , e group-hover no elemento que vc quer
// que cresça em relação aos outros( da div pai)

// line-clamp deixa o texto com o numero determinado de linhas(clamp - complimir/apertar )

// truncate, faz otexto do elemento fizar em uma linha e o que passar fica com ...
