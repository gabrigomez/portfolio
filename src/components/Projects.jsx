import React from 'react';
import './Projects.css';
import { GithubLogo } from 'phosphor-react';

export const Projects = () => {
  return (
    <section className='projects-container' id='projects'>      
      <div className='projects-card'>
        <div className='project-text'>
          <h1>
            Projects
          </h1>
          <h3>
            Estes são alguns dos meus projetos
          </h3>
        </div>
        <div className='project-info'>
          <div className='project-item'>
            <img 
              src="https://media3.giphy.com/media/gYWeVOiMmbg3kzCTq5/200w.gif?cid=6c09b952nv75vq5cbhhrd2g1vyqpqwf6m3o990h5iexcggxu&rid=200w.gif&ct=g" 
              alt=""
              className='project-image' 
            />
            <p>My classic games</p>
            <a href="https://github.com/gabrigomez/my-classic-games"><GithubLogo className='project-github-link'/></a>                     
          </div>
          <div className='project-item'>
            <img 
              src="https://camo.githubusercontent.com/24b74a4d1a25c46e8d68cb58bba4df3de1059a53f0ef85d9a4be281e7a69a887/68747470733a2f2f7468756d62732e6766796361742e636f6d2f50696e6b5069657263696e6742756c6c2d73697a655f726573747269637465642e676966" 
              alt=""
              className='project-image' 
            />
            <p>Vue Login</p>            
            <a href="https://github.com/gabrigomez/login-page"><GithubLogo className='project-github-link'/></a>                       
          </div>
        </div>
      </div>
    </section>
  )
}