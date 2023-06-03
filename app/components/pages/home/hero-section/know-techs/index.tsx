import { SectionTitle } from '@/app/components/section-title'
import { TbBrandNextjs } from 'react-icons/tb'
import { KnownTech } from './known-tech'
import { KnownTech as IKnowTech } from '@/app/types/projects'

type KnownTechsProps = {
  techs: IKnowTech[]
}

export const KnowTechs = ({ techs }: KnownTechsProps) => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="competências" title="conhecimentos" />
      <div className="grid grid-cols-[repeat(auto-fit, minmax(264px, 1fr))] gap-3">
        {techs?.map((tech) => (
          <KnownTech key={tech.name} tech={tech} />
        ))}
      </div>
    </section>
  )
}

// grid-cols-[repeat(auto-fit, minmax(264px, 1fr))] esse é um jeitp de quebrar o card de conhecimento. isso vai fazer
// o cartão de repetir em coluna até o valor mimnimo estipulado(264px) abaixo disse ele quebra a fila
