type CMSIconProps = {
  icon: string
}

export const CMSIcon = ({ icon }: CMSIconProps) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: icon,
      }}
    />
  )
}

// a função aqui e pra converter o svg texto pra renderizar o icone
