import React from 'react';
import { i18n } from '../translate/i18n';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import { GithubLogo } from 'phosphor-react';

export const Projects = () => {
  return (
    <section className='flex flex-col items-center w-full bg-gray-300 dark:bg-primaryBg' id='projects'>      
      <div className='flex flex-col items-center w-full p-4 md:p-16 rounded-2xl'>
        <div className='mb-8 text-primary dark:text-white'>
          <h1 className='text-4xl md:text-6xl'>
            {i18n.t('titles.projects')}
          </h1>
          <h3 className='md:text-2xl'>
            {i18n.t('projects.description')}
          </h3>
        </div>
        <TrackVisibility className='flex justify-center w-full'>
          {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__zoomIn md:w-3/4" : "none"}>
              <div className='flex justify-center text-primary dark:text-white'>
                <div 
                  className='flex flex-col items-center m-2 p-2 pb-10 
                  w-2/4 md:w-64 duration-300 rounded-2xl shadow-md
                  dark:shadow-gray-900 hover:bg-gray-200 dark:hover:bg-secondaryBg group'>
                    <img 
                      src="https://media3.giphy.com/media/gYWeVOiMmbg3kzCTq5/200w.gif?cid=6c09b952nv75vq5cbhhrd2g1vyqpqwf6m3o990h5iexcggxu&rid=200w.gif&ct=g" 
                      alt=""
                      className='w-40 h-40 border-2 border-primary rounded-full mb-4' 
                    />
                    <p className='text-xl md:text-3xl font-bold opacity-0 group-hover:opacity-100 duration-700'>
                      My classic games
                    </p>
                    <a 
                      href="https://github.com/gabrigomez/my-classic-games"
                      className='flex justify-center'>
                        <GithubLogo 
                          className='text-2xl mt-4 opacity-0 group-hover:opacity-100 duration-200 
                          text-center hover:text-black dark:hover:text-primary'/>
                    </a>                     
                </div>
                <div 
                  className='flex flex-col items-center m-2 p-2 pb-10 
                  w-2/4 md:w-64 duration-300 rounded-2xl shadow-md
                  dark:shadow-gray-900 hover:bg-gray-200 dark:hover:bg-secondaryBg group'>
                    <img 
                      src="https://camo.githubusercontent.com/24b74a4d1a25c46e8d68cb58bba4df3de1059a53f0ef85d9a4be281e7a69a887/68747470733a2f2f7468756d62732e6766796361742e636f6d2f50696e6b5069657263696e6742756c6c2d73697a655f726573747269637465642e676966" 
                      alt=""
                      className='w-40 h-40 border-2 border-primary rounded-full mb-4' 
                    />
                    <p className='text-xl md:text-3xl font-bold opacity-0 group-hover:opacity-100 duration-700'>
                      Vue login
                    </p>            
                    <a 
                      href="https://github.com/gabrigomez/login-page"
                      className='flex justify-center'>
                        <GithubLogo 
                          className='text-2xl mt-4 opacity-0 group-hover:opacity-100 duration-200 
                          text-center hover:text-black dark:hover:text-primary'/>
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