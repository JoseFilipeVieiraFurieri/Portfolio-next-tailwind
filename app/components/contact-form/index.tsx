'use client'

import { useForm } from 'react-hook-form'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { SectionTitle } from '../section-title'
import { Button } from '../button'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { motion } from 'framer-motion'
import { fadeUpAnimation } from '@/app/libs/animation'

const ContactFormSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(1).max(500),
})

type ContactFormData = z.infer<typeof ContactFormSchema>

export const ContactForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactFormSchema),
  })

  const onSubmit = async (data: any) => {
    try {
      await axios.post('/api/contact', data)
      toast.success('Mensagem enviada com sucesso!')
      reset()
    } catch (error) {
      toast.error('Ocorreu um erro ao enviar a mensagem. Tente novamente.')
    }
  }

  return (
    <section
      id="contact"
      className="py-16 px-6 md:py-32 flex items-center justify-center bg-gray-950"
    >
      <div className="w-full max-w-[420px] mx-auto">
        <SectionTitle
          subtitle="contato"
          title="Quer conversar comigo? entre em contato"
          className="items-center text-center"
        />

        <motion.form
          className="mt-12 w-full flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
          {...fadeUpAnimation}
        >
          <input
            placeholder="Nome"
            className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:ring-2 ring-emerald-50"
            {...register('name')}
          ></input>
          <input
            placeholder="E-mail"
            className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:ring-2 ring-emerald-50"
            {...register('email')}
          ></input>
          <textarea
            placeholder="Mensagem"
            className="resize-none w-full h-138 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:ring-2 ring-emerald-50"
            maxLength={500}
            {...register('message')}
          ></textarea>

          <Button
            type="submit"
            className="w-max  mx-auto mt-6 shadow-button"
            disabled={isSubmitting}
          >
            Enviar Mensagem
            <HiArrowNarrowRight size={18} />
          </Button>
        </motion.form>
      </div>
    </section>
  )
}

// o zod é novidade ele funciona pra validaçoes assim como o joy, nele tambem foi feita a tipagem pra o hook userform
// saber o que o campo de form tem de input e poder controlar isso
// o register do useForm(), automaticamente o valor do input, a mesma coisa de passar um função handle pra pegar o data
