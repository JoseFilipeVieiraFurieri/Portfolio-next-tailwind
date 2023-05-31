import { SectionTitle } from '@/app/components/section-title'
import { Link } from '@/app/components/link-app'
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi'

export const PageIntroduction = () => {
  return (
    <section className="w-full h-[450px] lg:h-[630px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center">
      <SectionTitle
        subtitle="projetos"
        title="Meus Projetos"
        className="text-center items-center [&>h3]:text-4xl"
      />
      <div className="flex flex-col items-center">
        <p className="text-gray-400 text-center max-w-[640px] my-6 text-sm sm:text-base">
          Aqui voce podera ver alguns os projetos que desenvolvi durante minha
          formação
        </p>

        <Link href="/">
          <HiArrowNarrowLeft size={20} />
          Voltar pra Home
        </Link>
      </div>
    </section>
  )
}

// [&>h3]:text-4xl, no tailwind e possivel fazer isso selecionar uma estilicão especifica pra um elemento. Nesse caso o
// sectionTitle é um component que tem um h3 dentro e vc quer custmozar somante o h3 dentro dele, vc usa o seletor
