import React from 'react';

import { LinkedinLogo } from "phosphor-react";
import { Card } from "../Atoms/Cards";
import { DescriptionAtom } from "../Atoms/DescriptionAtom";
import { LinkAtom } from "../Atoms/LinkAtom";

export interface ExpItemProps {
  description: string,
  expTime: string,
  href: string,  
  src: string,
  title: string,
}

export const ExpItem = ({...props} : ExpItemProps) => {
  return (
    <div className='exp-container group'>          
      <Card.CardImage 
        src={props.src} 
        className='border border-solid border-white dark:border-primary h-20 w-20 md:h-36 md:w-36' 
      />
      <Card.CardTitle 
        className='m-2 text-2xl md:text-4xl group-hover:exp-description hover:before:duration-500 relative'
        title={props.title}
      />
      <DescriptionAtom 
        className="opacity-0 group-hover:opacity-100 duration-500 mb-2"
        children={props.expTime}
      />
      <DescriptionAtom 
        className="text-sm opacity-0 group-hover:opacity-100 duration-500 font-bold"
        children={props.description}
      />
      <LinkAtom 
        href={props.href}
        className="hover:text-black dark:hover:text-primary duration-300 mt-2"
        children={<LinkedinLogo className='text-2xl md:text-4xl opacity-0 group-hover:opacity-100 duration-300' />}
      />                  
    </div>
  )
};