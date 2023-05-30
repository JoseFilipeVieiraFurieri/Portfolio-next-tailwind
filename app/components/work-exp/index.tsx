import { SectionTitle } from '../section-title'
import { ExpItem } from './expItem'

export const WorkExp = () => {
  return (
    <section className="container py-16 flex gap-10 md:gap-4 lg:gap-16  flex-col md:flex-row">
      <div className="max-w-[420px]">
        <SectionTitle subtitle="Experiência" title="formação/certificados" />
        <p className="text-gray-400 mt-6">
          Estou sempre a procura de novas tecnologias e projetos desafiadores
          que possam me proporcianar crescimento como dev e também como pessoa.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <ExpItem />
        <ExpItem />
      </div>
    </section>
  )
}
