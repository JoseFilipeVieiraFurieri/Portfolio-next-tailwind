import { Link } from '@/app/components/link-app'
import { TechBadge } from '@/app/components/techs'
import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'

export const ProjectCard = () => {
  return (
    <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
      <div className="w-full h-full">
        <Image
          width={420}
          height={304}
          src="/images/icons/project-title-icon.svg"
          alt="imagem teste"
          className="w-full h-[300px] sm:h-[200px] lg:w=[420px] lg:min-h-full object-cover rounded-lg"
        />
      </div>

      <div>
        <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
          <Image
            width={20}
            height={20}
            alt="unknown"
            src="/images/icons/project-title-icon.svg"
          />
          Delivery App
        </h3>

        <p className="text-gray-400 my-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          fugiat libero architecto doloribus itaque neque provident, ducimus
          magnam cupiditate minima dolor in vel animi numquam dolore voluptates
          culpa mollitia vero.I am thick tar of inside burning, a got ghost in
          the hallway, grinning, the night belongs to you. Yet in reverse you
          are all my symetry, a parallel what i laid my life upon.This ancient
          canopies the night belongs to you, i remember my dear, if my fate is a
          bad colosion, yet in reverse you are all my symetry, a paralel that i
          can laid my life with.
        </p>

        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
        </div>

        <Link href="/projects/book-wise">
          Saiba mais
          <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  )
}
