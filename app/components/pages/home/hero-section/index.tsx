import { Button } from '@/app/components/button'
import { TechBadge } from '@/app/components/techs'
import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { TbBrandGithub, TbBrandLinkedin, TbBrandWhatsapp } from 'react-icons/tb'

const MOCK_CONTACTS = [
  {
    url: 'https://github.com/JoseFilipeVieiraFurieri',
    icon: <TbBrandGithub />,
  },
  {
    url: 'https://www.linkedin.com/in/jos%C3%A9-filipe-vieira-furieri-dev-67a4981b1/',
    icon: <TbBrandLinkedin />,
  },
  {
    url: 'https://github.com/JoseFilipeVieiraFurieri',
    icon: <TbBrandWhatsapp />,
  },
]

export const HeroSection = () => {
  return (
    <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <div className=" w-full lg:max-w-[530px]">
          <p className="font-mono text-emerald-400">Bem vindo, meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">José Filipe</h2>

          <p className="text-gray-400 my-6 text-sm sm:text-base">
            Sou um desenvolvedor web FullStack. Estou em transição de carreira
            mas possuo muita vontade de aprender e me aprofundar ainda mais meus
            conhecimentos, possuo como objetivo central tornar a tecnologia mais
            inclusiva e humana.
          </p>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {Array.from({ length: 7 }).map((_, index) => (
              <TechBadge key={index} name="Next.js" />
            ))}
          </div>

          <div className="mt-6 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
            <Button className=" w-max shadow-button">
              Contato
              <HiArrowNarrowRight size={18} />
            </Button>

            <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
              {MOCK_CONTACTS.map((item, index) => (
                <a
                  href={item.url}
                  key={`contact-${index}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gray-100 transition-colors"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <Image
          width={300}
          height={350}
          alt="profile photo"
          src="/images/profile.jpeg"
          className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
        />
      </div>
    </section>
  )
}

// h-[755px] metodo do tailwind pra controle do h(heigth)
// {Array.from({ length: 5 }).map((_, index) => (
// <TechBadge key={index} name="Next.js" />
// ))} - Isso aqui cria um array falso pra percorrer e renderizar as badges. bem legal

// sm:flex-row e um breaking point e significa min-widht 640px, existem varios no tailwind
// lg: significa min-width 1024px

// w-max funciona que o conteudo so ocupar o tamanho do que esta dentro( no caso do bottão seria o contato e o Icone)
