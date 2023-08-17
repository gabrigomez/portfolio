import { ExpItem, ExpItemProps } from "./ExpItem";

interface ExpListProps {
  exps: Array<ExpItemProps>,
}

export const ExpList = ({exps}: ExpListProps) => {
  return (
    <div className='flex h-96 gap-6'>
      {exps.map((exp) => {
        return (
          <ExpItem
            key={exps.indexOf(exp)}
            description={exp.description}
            expTime={exp.expTime}
            href={exp.href}
            src={exp.src}
            title={exp.title} 
          />
        )
      })}
    </div>
  )
}