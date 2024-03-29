import React from 'react';
import { Card } from '../Atoms/Cards';
import Carousel from 'react-multi-carousel';

import { ProjectItem, ProjectItemProps } from './ProjectItem';
import 'animate.css';

interface ProjectListProps {
  projects: Array<ProjectItemProps>,
};

export const ProjectList = ({projects} : ProjectListProps) => {
  const responsive = {
    largeDesktop: {
      breakpoint: { max: 3000, min: 1600 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 1600, min: 1200 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1200, min: 540 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 540, min: 0 },
      items: 2
    }
  };

  return (
    <Card.Root className='flex flex-wrap w-full 2xl:w-8/12 h-[300px] justify-center text-primary dark:text-white'>
      <Carousel responsive={responsive} className='w-full'>
        {projects.map((project) => {
          return (
            <ProjectItem
              key={projects.indexOf(project)} 
              image={project.image}
              srcRepo={project.srcRepo}
              srcSite={project.srcSite}
              title={project.title}
            />
          )
        })}
      </Carousel>
    </Card.Root>
  )
};