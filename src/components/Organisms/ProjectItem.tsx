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
      <Card.CardImage
        src={props.image} 
        className='w-22 h-22 border-2 bg-white border-primary rounded-full mb-4' 
      />
      <Card.CardTitle 
        className='text-sm sm:text-xl md:text-2xl font-bold opacity-0 group-hover:opacity-100 duration-700'
        title={props.title}
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