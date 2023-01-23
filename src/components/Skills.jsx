import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className='flex justify-center w-full bg-primaryBg' id='skills'>
      <div className='w-4/5 rounded-2xl p-16 text-white'>
        <h1 className='text-6xl'>
          Skills
        </h1>
        <h3 className='mb-10'>
          Aqui estão os meus cursos e certificações
        </h3>
        <Carousel responsive={responsive} className='h-3/4'>
          <div className='flex flex-col items-center p-2 h-full m-2 hover:bg-secondaryBg rounded-3xl group'>
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQagE2GtpuY9L4m-9yugjHD59o2UBCqpWzzhDBZ6NDB_UiLJLrEg6dh8J4CE8ZPmKX_FYE&usqp=CAU" 
              alt=""
              className='w-44 h-44 border-2 border-primary rounded-full mb-2' 
            />
            <h3 className='text-lg mb-2 font-bold'>Curso Técnico em Informática</h3>
            <p className='opacity-0 group-hover:opacity-100 duration-500'>Concluído em 2014</p>                        
          </div>
          <div className='flex flex-col items-center p-2 h-full m-2 hover:bg-secondaryBg rounded-3xl group'>
            <img 
              src="https://pbs.twimg.com/profile_images/1415325711896825858/2cczQq-X_400x400.png" 
              alt=""
              className='w-44 h-44 border-2 border-primary rounded-full mb-2' 
            />
            <h3 className='text-lg mb-2 font-bold'>The Complete Ruby on Rails Developer Course</h3>
            <a 
              href="https://www.udemy.com/course/the-complete-ruby-on-rails-developer-course/"
              className='hover:text-primary opacity-0 group-hover:opacity-100 duration-500'>
                Em andamento
            </a>
          </div>
          <div className='flex flex-col items-center p-2 h-full m-2 hover:bg-secondaryBg rounded-3xl group'>
            <img 
              src="https://pbs.twimg.com/profile_images/1415325711896825858/2cczQq-X_400x400.png" 
              alt=""
              className='w-44 h-44 border-2 border-primary rounded-full mb-2' 
            />
            <h3 className='text-lg mb-2 font-bold'>Curso Web Moderno Completo com JavaScript 2020</h3>
            <a 
              href="https://www.udemy.com/certificate/UC-39998402-6d77-4454-9d43-926719ec4091/"
              className='hover:text-primary opacity-0 group-hover:opacity-100 duration-500'>
                Certificado
            </a>
          </div>          
          <div className='flex flex-col items-center p-2 h-full m-2 hover:bg-secondaryBg rounded-3xl group'>
            <img 
              src="https://pbs.twimg.com/profile_images/1415325711896825858/2cczQq-X_400x400.png" 
              alt=""
              className='w-44 h-44 border-2 border-primary rounded-full mb-2' 
            />
            <h3 className='text-lg mb-2 font-bold'>Testes de aplicações modernas com Cypress</h3>
            <a 
              href="https://www.udemy.com/certificate/UC-19b74e53-8f2e-46d1-a19a-c56d64196add/"
              className='hover:text-primary opacity-0 group-hover:opacity-100 duration-500'>
                Certificado
            </a>            
          </div>
          <div className='flex flex-col items-center p-2 h-full m-2 hover:bg-secondaryBg rounded-3xl group'>
            <img 
              src="https://pbs.twimg.com/profile_images/1415325711896825858/2cczQq-X_400x400.png" 
              alt=""
              className='w-44 h-44 border-2 border-primary rounded-full mb-2' 
            />
            <h3 className='text-lg mb-2 font-bold'>Entendendo Typescript</h3>
            <a 
              href="https://www.udemy.com/certificate/UC-0dce5ff9-7176-46b3-bf12-3a0253bff2af/"
              className='hover:text-primary opacity-0 group-hover:opacity-100 duration-500'>
                Certificado
            </a>
          </div>
          <div className='flex flex-col items-center p-2 h-full m-2 hover:bg-secondaryBg rounded-3xl group'>
            <img 
              src="https://pbs.twimg.com/profile_images/1415325711896825858/2cczQq-X_400x400.png" 
              alt=""
              className='w-44 h-44 border-2 border-primary rounded-full mb-2' 
            />
            <h3 className='text-lg mb-2 font-bold'>Docker Completo do ZERO ao Avançado</h3>
            <a 
              href="https://www.udemy.com/certificate/UC-75b54042-1a9a-4703-a6dd-c03553950c23/"
              className='hover:text-primary opacity-0 group-hover:opacity-100 duration-500'>
                Certificado
            </a>
          </div>
          <div className='flex flex-col items-center p-2 h-full m-2 hover:bg-secondaryBg rounded-3xl group'>
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQagE2GtpuY9L4m-9yugjHD59o2UBCqpWzzhDBZ6NDB_UiLJLrEg6dh8J4CE8ZPmKX_FYE&usqp=CAU" 
              alt=""
              className='w-44 h-44 border-2 border-primary rounded-full mb-2' 
            />
            <h3 className='text-lg mb-2 font-bold'>Licenciatura em Letras</h3>
            <p className='opacity-0 group-hover:opacity-100 duration-500'>Concluído em 2020</p>                        
          </div>   
        </Carousel>
      </div>
    </section>
  )
}