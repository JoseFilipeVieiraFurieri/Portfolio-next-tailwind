import Image from 'next/image'
import { RichTextContent } from '@graphcms/rich-text-types'
import { log } from 'console'
import { RichText } from '@graphcms/rich-text-react-renderer'
import Link from 'next/link'

type expItemProps = {
  exp: {
    companyLogo: {
      url: string
    }
    role: string
    companyName: string
    companyURL: string
    description: {
      raw: RichTextContent
    }
    certification: {
      url: string
    }
    linkCertificado: string
  }
}

export const ExpItem = ({ exp }: expItemProps) => {
  return (
    <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
      <div className="flex flex-col items-center gap-4">
        <div className="round full border border-gray-500 p-0.5">
          <Image
            src={exp.companyLogo.url}
            alt={`logo ${exp.companyName}`}
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>

        <div className="h-full w-[1px] bg-gray-800" />
      </div>

      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <a
            href={exp.companyURL}
            className="text-gray-500 hover:text-emerald-500 transition-colors"
            rel="noreferrer"
          >
            @ {exp.companyName}
          </a>
          <h4 className="text-gray-300">{exp.role}</h4>
          <span className="text-gray-500">maio 2022 - Atual - (1 ano)</span>
          <div className="text-gray-400">
            <RichText content={exp.description.raw} />
          </div>
          <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">
            Certificado
          </p>
          <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
            <Link href={exp.linkCertificado}>
              <Image
                width={200}
                height={300}
                src={exp.certification.url}
                alt={`certification-${exp.role}`}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

// gri cols [40px,ifr] nesse caso e passado um coluna custom com 40px e 1fr(pra ocupar o espaço restante)
