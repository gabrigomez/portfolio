import React from 'react';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { GithubLogo } from 'phosphor-react';

export const Projects = () => {
  return (
    <section className='flex flex-col items-center w-full h-[650px] mb-10 bg-primaryBg' id='projects'>      
      <div className='flex flex-col items-center w-full p-2 md:p-16 rounded-2xl'>
        <div className='mb-20 text-white'>
          <h1 className='text-4xl md:text-6xl'>
            Projetos
          </h1>
          <h3>
            Estes são alguns dos meus projetos
          </h3>
        </div>
        <TrackVisibility className='flex justify-center w-full'>
          {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__fadeInLeft md:w-3/4" : "none"}>
              <div className='flex justify-center text-white'>
                <div className='flex flex-col items-center m-2 p-2 h-54 w-2/4 md:w-64 duration-300 rounded-2xl hover:h-72 hover:bg-secondaryBg group'>
                  <img 
                    src="https://media3.giphy.com/media/gYWeVOiMmbg3kzCTq5/200w.gif?cid=6c09b952nv75vq5cbhhrd2g1vyqpqwf6m3o990h5iexcggxu&rid=200w.gif&ct=g" 
                    alt=""
                    className='w-44 h-44 border-2 border-primary rounded-full mb-4' 
                  />
                  <p className='opacity-0 group-hover:opacity-100 duration-700'>My classic games</p>
                  <a 
                    href="https://github.com/gabrigomez/my-classic-games"
                    className='flex justify-center'>
                      <GithubLogo className='h-8 w-8 mt-4 opacity-0 group-hover:opacity-100 duration-200 text-center hover:text-primary'/>
                  </a>                     
                </div>
                <div className='flex flex-col items-center m-2 p-2 h-54 w-2/4 md:w-64 duration-300 rounded-2xl hover:h-72 hover:bg-secondaryBg group'>
                  <img 
                    src="https://camo.githubusercontent.com/24b74a4d1a25c46e8d68cb58bba4df3de1059a53f0ef85d9a4be281e7a69a887/68747470733a2f2f7468756d62732e6766796361742e636f6d2f50696e6b5069657263696e6742756c6c2d73697a655f726573747269637465642e676966" 
                    alt=""
                    className='w-44 h-44 border-2 border-primary rounded-full mb-4' 
                  />
                  <p className='opacity-0 group-hover:opacity-100 duration-700'>Vue Login</p>            
                  <a 
                    href="https://github.com/gabrigomez/login-page"
                    className='flex justify-center'>
                      <GithubLogo className='h-8 w-8 mt-4 opacity-0 group-hover:opacity-100 duration-200 text-center hover:text-primary'/>
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