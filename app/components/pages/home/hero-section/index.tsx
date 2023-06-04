'use client'

import { Button } from '@/app/components/button'
import { TechBadge } from '@/app/components/techs'
import { HomePageInfo } from '@/app/types/page-info'
import { RichText } from '@/app/components/rich-text'
import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { CMSIcon } from '@/app/components/cms'
import { motion } from 'framer-motion'
import { techBadgeAnimation } from '@/app/libs/animation'

type HomeInfoProps = {
  homeInfo: HomePageInfo
}

export const HeroSection = ({ homeInfo }: HomeInfoProps) => {
  const handleContact = () => {
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <motion.div
          className=" w-full lg:max-w-[530px]"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-emerald-400">Bem vindo, meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">José Filipe</h2>

          <div className="text-gray-400 my-6 text-sm sm:text-base">
            <RichText content={homeInfo[0].introduction.raw} />
          </div>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {homeInfo[0].techs.map((item, index) => (
              <TechBadge
                name={item.name}
                key={index}
                {...techBadgeAnimation}
                transition={{ duration: 0.2, delay: index * 0.1 }}
              />
            ))}
          </div>

          <div className="mt-6 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
            <Button className=" w-max shadow-button" onClick={handleContact}>
              Contato
              <HiArrowNarrowRight size={18} />
            </Button>

            <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
              {homeInfo[0].socials.map((item, index) => (
                <a
                  href={item.url}
                  key={`contact-${index}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gray-100 transition-colors"
                >
                  <CMSIcon icon={item.icon} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 200, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 200, scale: 0.5 }}
          transition={{ duration: 0.5 }}
          className="origin-center"
        >
          <Image
            width={300}
            height={350}
            alt="profile photo"
            src={homeInfo[0].profilePicture.url}
            className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
          />
        </motion.div>
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

// a funçao handleContact, pega por um dom selector a classe o id da section de contanta e quando é clicado no
// botão ele faz o scroll pra a tela de contato

// uma observação, o typescript na tipagem sempre vai se comportar de acordo com o tipo  mesmo se vc de fato
// receber um array, se vc dizer pro type que é um objeto vc não vai conseguir acessar pelo indice, pq objetos no JS
// não podem ser acessados desse jeito. sobre todo resto do hygraph e questão de pratica e intimidade com a ferramenta

// o CMS ICON serve pra convertar o texto lançado no HTML pra o icone em si. SO de lembrete, ele usa uma função nativa
// do html pra isso
