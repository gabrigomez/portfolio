import React from 'react';
import './Projects.css';
import { GithubLogo } from 'phosphor-react';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  return (
    <section className='flex flex-col items-center w-full mb-10 bg-primaryBg' id='projects'>      
      <div className='flex flex-col items-center w-3/4 p-4 md:p-16 rounded-2xl'>
        <div className='mb-20 text-white'>
          <h1 className='text-4xl md:text-6xl'>
            Projects
          </h1>
          <h3>
            Estes são alguns dos meus projetos
          </h3>
        </div>
        <TrackVisibility>
          {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__fadeInLeft" : "none"}>
              <div className='flex text-white'>
                <div className='m-4 p-8 h-60 duration-500 rounded-2xl hover:h-96 hover:bg-secondaryBg group'>
                  <img 
                    src="https://media3.giphy.com/media/gYWeVOiMmbg3kzCTq5/200w.gif?cid=6c09b952nv75vq5cbhhrd2g1vyqpqwf6m3o990h5iexcggxu&rid=200w.gif&ct=g" 
                    alt=""
                    className=' w-44 h-44 border-2 border-primary rounded-full mb-4' 
                  />
                  <p className='opacity-0 group-hover:opacity-100 duration-1000'>My classic games</p>
                  <a 
                    href="https://github.com/gabrigomez/my-classic-games"
                    className='flex justify-center'>
                      <GithubLogo className='h-8 w-8 mt-4 opacity-0 group-hover:opacity-100 duration-1000 text-center'/>
                  </a>                     
                </div>
                <div className='m-4 p-8 h-60 duration-500 rounded-2xl hover:h-96 hover:bg-secondaryBg group'>
                  <img 
                    src="https://camo.githubusercontent.com/24b74a4d1a25c46e8d68cb58bba4df3de1059a53f0ef85d9a4be281e7a69a887/68747470733a2f2f7468756d62732e6766796361742e636f6d2f50696e6b5069657263696e6742756c6c2d73697a655f726573747269637465642e676966" 
                    alt=""
                    className=' w-44 h-44 border-2 border-primary rounded-full mb-4' 
                  />
                  <p className='opacity-0 group-hover:opacity-100 duration-1000'>Vue Login</p>            
                  <a 
                    href="https://github.com/gabrigomez/login-page"
                    className='flex justify-center'>
                    <GithubLogo className='h-8 w-8 mt-4 opacity-0 group-hover:opacity-100 duration-1000 text-center'/>
                  </a>                       
                </div>
              </div>
            </div>
          }
        </TrackVisibility>
      </div>
    </section>
  )
}