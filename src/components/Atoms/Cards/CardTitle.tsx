interface CardTitleProps {
  title: string,
  className: string,
}

export const CardTitle = ({className, title} : CardTitleProps) => {
  return (
    <h3 className={className}>
      {title}
    </h3>
  )
}