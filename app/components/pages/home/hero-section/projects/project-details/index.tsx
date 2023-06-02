import { Button } from '@/app/components/button'
import { Link } from '@/app/components/link-app'
import { SectionTitle } from '@/app/components/section-title'
import { TechBadge } from '@/app/components/techs'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { TbBrandGithub } from 'react-icons/tb'

export const ProjectDetails = () => {
  return (
    <section className="w-full sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden">
      <div
        className="absolute inset-0 z-[-1] bg-red-100"
        style={{
          background: 'url(/images/hero-bg.png) no-repeat center/cover',
        }}
      />
      <SectionTitle
        subtitle="projetos"
        title="Delivery app"
        className="text-center items-center sm:[&:>h3]:text-4xl"
      />

      <p className="text-gray-400 text-center max-w-[640px] sm:my-6 text-sm sm:text-base">
        Projeto de conclusão do curso do Modulo de Back End do curso de
        desenvolvimento web da trybe.Nele foi feita a integração do front com o
        back, em uma aplicativo de delivery de bebidas
      </p>

      <div className="w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center">
        <TechBadge name="next.js" />
        <TechBadge name="next.js" />
        <TechBadge name="next.js" />
        <TechBadge name="next.js" />
        <TechBadge name="next.js" />
        <TechBadge name="next.js" />
        <TechBadge name="next.js" />
        <TechBadge name="next.js" />
      </div>

      <div className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row">
        <a href="https://github.com/JoseFilipeVieiraFurieri/Projeto-delivery-marvada-pinga-app">
          <Button className="min-width-[180px]">
            <TbBrandGithub size={20} />
            Repositório
          </Button>
        </a>
      </div>
      <Link href="/projects">
        <HiArrowNarrowLeft />
        Voltar pra projetos
      </Link>
    </section>
  )
}
