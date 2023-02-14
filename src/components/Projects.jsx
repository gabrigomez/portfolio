import React from 'react';
import { i18n } from '../translate/i18n';
import { ProjectList } from './ProjectList';
import 'animate.css';

export const Projects = () => {
  return (
    <section className='flex flex-col items-center w-full bg-gray-300 dark:bg-primaryBg' id='projects'>      
      <div className='flex flex-col items-center w-full p-4 md:p-12 rounded-2xl'>
        <div className='mb-8 text-primary dark:text-white'>
          <h1 className='text-4xl md:text-6xl'>
            {i18n.t('titles.projects')}
          </h1>
          <h3 className='md:text-2xl'>
            {i18n.t('projects.description')}
          </h3>
        </div> 
        <ProjectList />            
      </div>
    </section>
  )
}