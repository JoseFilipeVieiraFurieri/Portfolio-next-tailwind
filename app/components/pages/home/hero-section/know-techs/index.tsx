import { SectionTitle } from '@/app/components/section-title'
import { TbBrandNextjs } from 'react-icons/tb'
import { KnownTech } from './known-tech'

export const KnowTechs = () => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="competências" title="conhecimentos" />
      <div className="grid grid-cols-[repeat(auto-fit, minmax(264px, 1fr))] gap-3">
        {Array.from({ length: 8 }).map((_, index) => (
          <KnownTech
            tech={{
              icon: <TbBrandNextjs />,
              name: 'Next.js',
              startDate: '2023-04-01',
            }}
            key={`${index}`}
          />
        ))}
      </div>
    </section>
  )
}

// grid-cols-[repeat(auto-fit, minmax(264px, 1fr))] esse é um jeitp de quebrar o card de conhecimento. isso vai fazer
// o cartão de repetir em coluna até o valor mimnimo estipulado(264px) abaixo disse ele quebra a fila
