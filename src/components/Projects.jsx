import React from 'react';
import './Projects.css';

export const Projects = () => {
  return (
    <section className='projects-container' id='projects'>      
      <div className='projects-card'>
        <div className='project-text'>
          <h1>
            Projects
          </h1>
          <h3>
            Estes são meus projetos pessoais
          </h3>
        </div>
        <div className='project-info'>
          <div className='project-item'>
            <img 
              src="https://3.bp.blogspot.com/-xhNpNJJyQhk/XIe4GY78RQI/AAAAAAAAItc/ouueFUj2Hqo5dntmnKqEaBJR4KQ4Q2K3ACK4BGAYYCw/s1600/logo%2Bgit%2Bicon.png" 
              alt=""
              className='skill-img' 
              />
            <p>Testes de aplicações modernas com Cypress</p>                      
          </div>
          <div className='project-item'>
            <img 
              src="https://3.bp.blogspot.com/-xhNpNJJyQhk/XIe4GY78RQI/AAAAAAAAItc/ouueFUj2Hqo5dntmnKqEaBJR4KQ4Q2K3ACK4BGAYYCw/s1600/logo%2Bgit%2Bicon.png" 
              alt=""
              className='skill-img' 
              />
            <p>Testes de aplicações modernas com Cypress</p>                      
          </div>
        </div>
      </div>
    </section>
  )
}