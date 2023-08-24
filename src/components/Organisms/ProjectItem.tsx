import React from 'react';

import { Card } from "../Atoms/Cards";
import { LinkAtom } from "../Atoms/LinkAtom";
import { Browsers, GithubLogo } from "phosphor-react";

export interface ProjectItemProps {
  image: string,
  srcRepo: string,
  srcSite: string,
  title: string,
}

export const ProjectItem = ({...props} : ProjectItemProps) => {
  return (
    <div className='project-list-container group'>     
      <Card.CardTitle 
        className='text-md md:text-2xl font-bold opacity-60 group-hover:opacity-100 duration-700 mb-4'
        title={props.title}
      />
       <Card.CardImage
        src={props.image} 
        className='h-20 w-20 md:h-32 md:w-32 border bg-white border-primary rounded-full mb-4' 
      />
      <div className='flex'>
        <LinkAtom 
          href={props.srcRepo}
          className="flex justify-center mr-2"
        >
          <GithubLogo 
            className='text-2xl mt-4 opacity-0 group-hover:opacity-100 duration-200 
            text-center hover:text-black dark:hover:text-primary'
          />        
        </LinkAtom> 
        <LinkAtom 
          href={props.srcSite}
          className='flex justify-center'
        >
          <Browsers 
            className='text-2xl mt-4 opacity-0 group-hover:opacity-100 duration-200 
            text-center hover:text-black dark:hover:text-primary'
          />
        </LinkAtom>
      </div>                                          
    </div>
  )
};