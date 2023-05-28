import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

// clsx -> cria classes dinamicas no tailwind
// twMerge -> fazo merge de duas linhas de classes de tailwind
