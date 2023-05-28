type TechBadgeProps = {
  name: string
}

export const TechBadge = ({ name }: TechBadgeProps) => {
  return (
    <span className="text-emerald-400 bg-emerald-900/80 text-sm py-1 px-3">
      {name}
    </span>
  )
}

// bg-emerald-900/80 quando vc colo a barra no tailwind quer dizer que vc vai colocar opacidade na cor
