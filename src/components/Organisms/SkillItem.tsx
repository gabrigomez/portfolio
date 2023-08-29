import React from 'react';

import { Card } from "../Atoms/Cards";
import { LinkAtom } from "../Atoms/LinkAtom";

export interface SkillItemProps {
  href: string,
  icon?: React.ReactNode
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
        className='flex items-center text-md xl:text-xl h-24 border-y dark:border-gray-700 dark:group-hover:border-gray-900'
        title={props.title}
      />
      <div className='h-10 mt-4'>
        {props.icon}                        
      </div>
      <LinkAtom
        className="hover:text-black dark:hover:text-primary text-sm lg:text-lg font-semibold opacity-0 group-hover:opacity-100 duration-500"
        children={props.status}
        href={props.href}
      />
    </div>
  )
}