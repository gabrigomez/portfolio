import { Card } from "../Atoms/Cards";
import { LinkAtom } from "../Atoms/LinkAtom";

export interface SkillItemProps {
  href: string
  src: string,
  status: string,
  title: string,
}

export const SkillItem = ({...props} : SkillItemProps) => {
  return (
    <div className='skills-container group'>
      <Card.CardImage 
        className="skills-card-image" 
        src={props.src}
      />
      <Card.CardTitle
        className='text-lg mb-2 font-bold'
        title={props.title}
      />
      <LinkAtom
        className="hover:text-black dark:hover:text-primary opacity-0 group-hover:opacity-100 duration-500"
        children={props.status}
        href={props.href}
      />                        
    </div>
  )
}