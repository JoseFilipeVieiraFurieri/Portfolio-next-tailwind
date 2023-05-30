import { cn } from '@/app/libs/utils'

type LineDividerProps = {
  className?: string
}

export const HorizontalDivider = ({ className }: LineDividerProps) => {
  // eslint-disable-next-line prettier/prettier
  return (
    <div className={cn('w full my-8 border-b border-b-gray-800', className)} />
  )
}
