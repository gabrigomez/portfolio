import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Skills.css';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
            <h3>Testes de aplicações modernas com Cypress</h3>
            <a href="https://www.udemy.com/certificate/UC-19b74e53-8f2e-46d1-a19a-c56d64196add/">Certificado</a>
          </div>
          <div className='skills-item'>
            <img src="https://pbs.twimg.com/profile_images/1415325711896825858/2cczQq-X_400x400.png" 
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
            <h3>Testes de aplicações modernas com Cypress</h3>
            <a href="https://www.udemy.com/certificate/UC-19b74e53-8f2e-46d1-a19a-c56d64196add/">Certificado</a>
          </div>
        </Carousel>;
      </div>
    </section>
  )
}