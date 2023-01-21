import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Skills.css';

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
    <section className='skills-container' id='skills'>
      <div className='skills-card'>
        <h1>
          Skills
        </h1>
        <h3>
          Aqui estão os meus cursos e certificações
        </h3>
        <Carousel responsive={responsive}>
          <div className='skills-item'>
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQagE2GtpuY9L4m-9yugjHD59o2UBCqpWzzhDBZ6NDB_UiLJLrEg6dh8J4CE8ZPmKX_FYE&usqp=CAU" 
              alt=""
              className='skill-img' 
            />
            <h3>Curso Técnico em Informática</h3>
            <p>Concluído em 2014</p>                        
          </div>
          <div className='skills-item'>
            <img src="https://pbs.twimg.com/profile_images/1415325711896825858/2cczQq-X_400x400.png" 
              alt=""
              className='skill-img' 
            />
            <h3>The Complete Ruby on Rails Developer Course</h3>
            <a href="https://www.udemy.com/course/the-complete-ruby-on-rails-developer-course/">Em andamento</a>
          </div>
          <div className='skills-item'>
            <img src="https://pbs.twimg.com/profile_images/1415325711896825858/2cczQq-X_400x400.png" 
              alt=""
              className='skill-img' 
            />
            <h3>Curso Web Moderno Completo com JavaScript 2020</h3>
            <a href="https://www.udemy.com/certificate/UC-39998402-6d77-4454-9d43-926719ec4091/">Certificado</a>
          </div>          
          <div className='skills-item'>
            <img 
              src="https://pbs.twimg.com/profile_images/1415325711896825858/2cczQq-X_400x400.png" 
              alt=""
              className='skill-img' 
            />
            <h3>Testes de aplicações modernas com Cypress</h3>
            <a href="https://www.udemy.com/certificate/UC-19b74e53-8f2e-46d1-a19a-c56d64196add/">Certificado</a>            
          </div>
          <div className='skills-item'>
            <img src="https://pbs.twimg.com/profile_images/1415325711896825858/2cczQq-X_400x400.png" 
              alt=""
              className='skill-img' 
            />
            <h3>Entendendo Typescript</h3>
            <a href="https://www.udemy.com/certificate/UC-0dce5ff9-7176-46b3-bf12-3a0253bff2af/">Certificado</a>
          </div>
          <div className='skills-item'>
            <img src="https://pbs.twimg.com/profile_images/1415325711896825858/2cczQq-X_400x400.png" 
              alt=""
              className='skill-img' 
            />
            <h3>Docker Completo do ZERO ao Avançado</h3>
            <a href="https://www.udemy.com/certificate/UC-75b54042-1a9a-4703-a6dd-c03553950c23/">Certificado</a>
          </div>
          <div className='skills-item'>
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQagE2GtpuY9L4m-9yugjHD59o2UBCqpWzzhDBZ6NDB_UiLJLrEg6dh8J4CE8ZPmKX_FYE&usqp=CAU" 
              alt=""
              className='skill-img' 
            />
            <h3>Licenciatura em Letras</h3>
            <a href="https://www.udemy.com/certificate/UC-75b54042-1a9a-4703-a6dd-c03553950c23/">Concluído em 2020</a>                        
          </div>   
        </Carousel>;
      </div>
    </section>
  )
}