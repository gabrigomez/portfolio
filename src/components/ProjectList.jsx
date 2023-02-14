import React from 'react';
import { Browsers, GithubLogo } from 'phosphor-react';
import 'animate.css';

import GithubGif from '../assets/github.gif';
import LoginGif from '../assets/login.gif';
import Pacman from '../assets/pacman.gif';
import SpotifyGif from '../assets/spotify.gif';
import Disappointed from '../assets/disappointed.gif';
import Carousel from 'react-multi-carousel';

export const ProjectList = () => {
  const responsive = {
    largeDesktop: {
      breakpoint: { max: 3000, min: 1600 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1600, min: 1200 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1200, min: 500 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 2
    }
  };

  return (
    <div className='flex flex-wrap w-4/5 justify-center text-primary dark:text-white'>
      <Carousel responsive={responsive} className='w-full'>
        <div 
          className='flex flex-col items-center m-2 p-2 h-52 sm:h-64 md:h-72 lg:h-80   
          w-24 sm:w-36 lg:w-52 duration-300 rounded-2xl shadow-md
          dark:shadow-gray-900 hover:bg-gray-200 dark:hover:bg-secondaryBg group'>
            <img 
              src={SpotifyGif} 
              alt=""
              className='w-22 h-22 border-2 border-primary rounded-full mb-4' 
            />
            <p className='text-sm sm:text-xl md:text-2xl font-bold opacity-0 group-hover:opacity-100 duration-700'>
              My Birthday Party
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
          className='flex flex-col items-center m-2 p-2 h-52 sm:h-64 md:h-72 lg:h-80  
          w-24 sm:w-36 lg:w-52 duration-300 rounded-2xl shadow-md
          dark:shadow-gray-900 hover:bg-gray-200 dark:hover:bg-secondaryBg group'>
            <img 
              src={Disappointed} 
              alt=""
              className='w-22 h-22 border-2 border-primary rounded-full mb-4' 
            />
            <p className='text-sm sm:text-xl md:text-2xl font-bold opacity-0 group-hover:opacity-100 duration-700'>
              Esqueci meu CEP!
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
          className='flex flex-col items-center m-2 p-2 h-52 sm:h-64 md:h-72 lg:h-80  
          w-24 sm:w-36 lg:w-52 duration-300 rounded-2xl shadow-md
          dark:shadow-gray-900 hover:bg-gray-200 dark:hover:bg-secondaryBg group'>
            <img 
              src={GithubGif} 
              alt=""
              className='w-22 h-22 border-2 border-primary rounded-full mb-4' 
            />
            <p className='text-sm sm:text-xl md:text-2xl font-bold opacity-0 group-hover:opacity-100 duration-700'>
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
          className='flex flex-col items-center m-2 p-2 h-52 sm:h-64 md:h-72 lg:h-80  
          w-24 sm:w-36 lg:w-52 duration-300 rounded-2xl shadow-md
          dark:shadow-gray-900 hover:bg-gray-200 dark:hover:bg-secondaryBg group'>
            <img 
              src={Pacman} 
              alt=""
              className='w-22 h-22 border-2 border-primary rounded-full mb-4' 
            />
            <p className='text-sm sm:text-xl md:text-2xl font-bold opacity-0 group-hover:opacity-100 duration-700'>
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
          className='flex flex-col items-center m-2 p-2 h-52 sm:h-64 md:h-72 lg:h-80  
          w-24 sm:w-36 lg:w-52 duration-300 rounded-2xl shadow-md
          dark:shadow-gray-900 hover:bg-gray-200 dark:hover:bg-secondaryBg group'>
            <img 
              src={LoginGif} 
              alt=""
              className='w-22 h-22 border-2 border-primary rounded-full mb-4' 
            />
            <p className='text-sm sm:text-xl md:text-2xl font-bold opacity-0 group-hover:opacity-100 duration-700'>
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
      </Carousel>
    </div>
  )
}