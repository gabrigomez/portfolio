import React from 'react';
import { i18n } from '../translate/i18n';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import iff from '../assets/iff.png';
import udemy from '../assets/udemy.png';
import { Card } from './Cards/index';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1180 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1180, min: 1000 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 1000, min: 0 },
      items: 2
    }
  };

  return (
    <section className='flex justify-center w-full bg-gray-300 dark:bg-primaryBg' id='skills'>
      <Card.Root className='text-primary dark:text-white w-full md:w-4/5 rounded-2xl p-4 md:p-16'>
        <h1 className='text-5xl md:text-6xl'>
          {i18n.t('titles.skills')}
        </h1>
        <h3 className='mb-4 md:text-2xl'>
          {i18n.t('skills.description')}
        </h3>
        <Carousel responsive={responsive} className='h-3/4'>
          <div 
            className='flex flex-col items-center p-2 h-full m-2 hover:bg-gray-200
            dark:hover:bg-secondaryBg rounded-3xl shadow-lg group'>
              <Card.CardImage 
                className="w-28 h-28 md:w-44 md:h-44 border-2 border-primary rounded-full mb-3" 
                src={iff}
              />
              <Card.CardTitle
                className='text-lg mb-2 font-bold'
                title="Curso Técnico em Informática"
              />
              <p className='opacity-0 group-hover:opacity-100 duration-500'>
                Concluído em 2014
              </p>                        
          </div>
          <div 
            className='flex flex-col items-center p-2 h-full m-2 hover:bg-gray-200
            dark:hover:bg-secondaryBg rounded-3xl shadow-lg dark:shadow-black group'>
              <Card.CardImage 
                src={udemy} 
                className='w-28 h-28 md:w-44 md:h-44 border-2 border-primary rounded-full mb-3' 
              />
              <Card.CardTitle
                className='text-lg mb-2 font-bold'
                title="The Complete Ruby on Rails Developer Course"
              />
              <a 
                href="https://www.udemy.com/course/the-complete-ruby-on-rails-developer-course/"
                className='hover:text-black dark:hover:text-primary opacity-0 group-hover:opacity-100 duration-500'>
                  Em andamento
              </a>
          </div>
          <div 
            className='flex flex-col items-center p-2 h-full m-2 hover:bg-gray-200
            dark:hover:bg-secondaryBg rounded-3xl shadow-lg dark:shadow-black group'>
              <Card.CardImage 
                src={udemy}                
                className='w-28 h-28 md:w-44 md:h-44 border-2 border-primary rounded-full mb-3' 
              />
              <Card.CardTitle 
                className='text-lg mb-2 font-bold'
                title="Curso Web Moderno Completo com JavaScript 2020"
              />
              <a 
                href="https://www.udemy.com/certificate/UC-39998402-6d77-4454-9d43-926719ec4091/"
                className='hover:text-black dark:hover:text-primary opacity-0 group-hover:opacity-100 duration-500'>
                  Certificado
              </a>
          </div>          
          <div 
            className='flex flex-col items-center p-2 h-full m-2 hover:bg-gray-200
            dark:hover:bg-secondaryBg rounded-3xl shadow-lg dark:shadow-black group'>
              <Card.CardImage 
                src={udemy}                
                className='w-28 h-28 md:w-44 md:h-44 border-2 border-primary rounded-full mb-3' 
              />
              <Card.CardTitle 
                className='text-lg mb-2 font-bold'
                title="Testes de aplicações modernas com Cypress"
              />
              <a 
                href="https://www.udemy.com/certificate/UC-19b74e53-8f2e-46d1-a19a-c56d64196add/"
                className='hover:text-black dark:hover:text-primary opacity-0 group-hover:opacity-100 duration-500'>
                  Certificado
              </a>            
          </div>
          <div 
            className='flex flex-col items-center p-2 h-full m-2 hover:bg-gray-200
            dark:hover:bg-secondaryBg rounded-3xl shadow-lg dark:shadow-black group'>
              <Card.CardImage 
                src={udemy}                
                className='w-28 h-28 md:w-44 md:h-44 border-2 border-primary rounded-full mb-3' 
              />
              <Card.CardTitle 
                className='text-lg mb-2 font-bold'
                title="Entendendo Typescript"
              />
              <a 
                href="https://www.udemy.com/certificate/UC-0dce5ff9-7176-46b3-bf12-3a0253bff2af/"
                className='hover:text-black dark:hover:text-primary opacity-0 group-hover:opacity-100 duration-500'>
                  Certificado
              </a>
          </div>
          <div 
            className='flex flex-col items-center p-2 h-full m-2 hover:bg-gray-200
            dark:hover:bg-secondaryBg rounded-3xl shadow-lg dark:shadow-black group'>
              <Card.CardImage 
                src={udemy}                
                className='w-28 h-28 md:w-44 md:h-44 border-2 border-primary rounded-full mb-3' 
              />
              <Card.CardTitle 
                className='text-lg mb-2 font-bold'
                title="Docker Completo do ZERO ao Avançado"
              />
              <a 
                href="https://www.udemy.com/certificate/UC-75b54042-1a9a-4703-a6dd-c03553950c23/"
                className='hover:text-black dark:hover:text-primary opacity-0 group-hover:opacity-100 duration-500'>
                  Certificado
              </a>
          </div>
          <div 
            className='flex flex-col items-center p-2 h-full m-2 hover:bg-gray-200
            dark:hover:bg-secondaryBg rounded-3xl shadow-lg dark:shadow-black group'>
              <Card.CardImage 
                src={iff}                
                className='w-28 h-28 md:w-44 md:h-44 border-2 border-primary rounded-full mb-3' 
              />
              <Card.CardTitle 
                className='text-lg mb-2 font-bold'
                title="Licenciatura em Letras"
              />
              <p className='opacity-0 group-hover:opacity-100 duration-500'>
                Concluído em 2020
              </p>                        
          </div>   
        </Carousel>
      </Card.Root>
    </section>
  )
}