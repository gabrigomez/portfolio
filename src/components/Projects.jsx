import React from 'react';
import { i18n } from '../translate/i18n';
import TrackVisibility from 'react-on-screen';
import GithubGif from '../assets/github.gif';
import LoginGif from '../assets/login.gif';
import Pacman from '../assets/pacman.gif';

import { Browsers, GithubLogo } from 'phosphor-react';
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
        <TrackVisibility className='flex justify-center w-full'>
          {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__zoomIn md:w-4/5" : "none"}>
              <div className='flex justify-center text-primary dark:text-white'>
                <div 
                  className='flex flex-col items-center m-2 p-2 pb-10 
                  w-2/4 md:w-64 duration-300 rounded-2xl shadow-md
                  dark:shadow-gray-900 hover:bg-gray-200 dark:hover:bg-secondaryBg group'>
                    <img 
                      src={Pacman} 
                      alt=""
                      className='w-22 h-22 lg:w-48 lg:h-48 border-2 border-primary rounded-full mb-4' 
                    />
                    <p className='text-lg sm:text-xl md:text-3xl font-bold opacity-0 group-hover:opacity-100 duration-700'>
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
                      src={GithubGif} 
                      alt=""
                      className='w-22 h-22 lg:w-48 lg:h-48 border-2 border-primary rounded-full mb-4' 
                    />
                    <p className='text-lg sm:text-xl md:text-3xl font-bold opacity-0 group-hover:opacity-100 duration-700'>
                      Github Repo Filter
                    </p>                    
                    <div className='flex'>
                      <a 
                        href="https://github.com/gabrigomez/github-repo-finder"
                        className='flex justify-center mr-2'>
                          <GithubLogo 
                            className='text-2xl mt-4 opacity-0 group-hover:opacity-100 duration-200 
                            text-center hover:text-black dark:hover:text-primary'/>
                      </a>
                      <a 
                        href="https://finderrepo.netlify.app/"
                        className='flex justify-center'>
                          <Browsers 
                            className='text-2xl mt-4 opacity-0 group-hover:opacity-100 duration-200 
                            text-center hover:text-black dark:hover:text-primary'/>
                      </a>
                    </div>                                         
                </div>
                <div 
                  className='flex flex-col items-center m-2 p-2 pb-10 
                  w-2/4 md:w-64 duration-300 rounded-2xl shadow-md
                  dark:shadow-gray-900 hover:bg-gray-200 dark:hover:bg-secondaryBg group'>
                    <img 
                      src={LoginGif} 
                      alt=""
                      className='w-22 h-22 lg:w-48 lg:h-48 border-2 border-primary rounded-full mb-4' 
                    />
                    <p className='text-lg sm:text-xl md:text-3xl font-bold opacity-0 group-hover:opacity-100 duration-700'>
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