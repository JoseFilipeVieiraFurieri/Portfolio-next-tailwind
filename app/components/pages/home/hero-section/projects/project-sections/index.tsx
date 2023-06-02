import Image from 'next/image'

const sections = [
  { title: 'Login', image: '/images/logo2.png' },
  {
    title: 'Home',
    image: '/images/logo2.png',
  },
]

export const ProjectSections = () => {
  return (
    <section className="container my-12 md:my-32  flex flex-col gap-8 md:gap-32">
      {sections.map((item, index) => (
        <div key={index} className="flex flex-col items-center gap-6 md:gap-12">
          <h2 className="text-2xl md:text-3xl">{item.title}</h2>
          <Image
            src={item.image}
            alt={`Imagem da Sessão ${item.title}`}
            width={1080}
            height={672}
            className="w-full aspect-auto rounded-lg"
            unoptimized
          />
        </div>
      ))}
    </section>
  )
}
