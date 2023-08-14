import React from 'react';
import { Browsers, GithubLogo } from 'phosphor-react';
import 'animate.css';

import Carousel from 'react-multi-carousel';
import GithubGif from '../assets/github.gif';
import Pacman from '../assets/pacman.gif';
import SpotifyGif from '../assets/spotify.gif';
import Disappointed from '../assets/disappointed.gif';
import Chat from '../assets/chat.gif';
import Music from '../assets/music.gif';
import { Card } from './Cards';

export const ProjectList = () => {
  const responsive = {
    largeDesktop: {
      breakpoint: { max: 3000, min: 1600 },
      items: 4
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
    <Card.Root className='flex flex-wrap w-4/5 justify-center text-primary dark:text-white'>
      <Carousel responsive={responsive} className='w-full'>
        <div className='project-list-container group'>
            <Card.CardImage
              src={SpotifyGif} 
              className='w-22 h-22 border-2 bg-white border-primary rounded-full mb-4' 
            />
            <Card.CardTitle 
              className='text-sm sm:text-xl md:text-2xl font-bold opacity-0 group-hover:opacity-100 duration-700'
              title='My Birthday Show'
            />
            <div className='flex'>
              <a 
                target="blank"
                href="https://github.com/gabrigomez/my-birthday-show"
                className='flex justify-center mr-2'>
                  <GithubLogo 
                    className='text-2xl mt-4 opacity-0 group-hover:opacity-100 duration-200 
                    text-center hover:text-black dark:hover:text-primary'/>
              </a> 
              <a 
                target="blank"
                href="https://mybirthdayshow.netlify.app/"
                className='flex justify-center'>
                  <Browsers 
                    className='text-2xl mt-4 opacity-0 group-hover:opacity-100 duration-200 
                    text-center hover:text-black dark:hover:text-primary'/>
              </a>
            </div>                                          
        </div>
        <div className='project-list-container group'>
            <Card.CardImage
              src={Music} 
              className='w-22 h-22 border-2 bg-white border-primary rounded-full mb-4' 
            />
            <Card.CardTitle 
              className='text-sm sm:text-xl md:text-2xl font-bold opacity-0 group-hover:opacity-100 duration-700'
              title="Tr4cker"
            />
            <div className='flex'>
              <a 
                target="blank"
                href="https://github.com/gabrigomez/tr4cker"
                className='flex justify-center mr-2'>
                  <GithubLogo 
                    className='text-2xl mt-4 opacity-0 group-hover:opacity-100 duration-200 
                    text-center hover:text-black dark:hover:text-primary'/>
              </a>  
              <a 
                target="blank"
                href="https://tr4cker.netlify.app/"
                className='flex justify-center'>
                  <Browsers 
                    className='text-2xl mt-4 opacity-0 group-hover:opacity-100 duration-200 
                    text-center hover:text-black dark:hover:text-primary'/>
              </a>
            </div>                               
        </div>
        <div className='project-list-container group'>
            <Card.CardImage
              src={Chat} 
              className='w-22 h-22 border-2 border-primary rounded-full mb-4' 
            />
            <Card.CardTitle 
              className='text-sm sm:text-xl md:text-2xl font-bold opacity-0 group-hover:opacity-100 duration-700'
              title="Let's Chat!"
            />
            <div className='flex'>
              <a 
                target="blank"
                href="https://github.com/gabrigomez/lets-chat"
                className='flex justify-center mr-2'>
                  <GithubLogo 
                    className='text-2xl mt-4 opacity-0 group-hover:opacity-100 duration-200 
                    text-center hover:text-black dark:hover:text-primary'/>
              </a>  
              <a 
                target="blank"
                href="https://letschatoficial.netlify.app/"
                className='flex justify-center'>
                  <Browsers 
                    className='text-2xl mt-4 opacity-0 group-hover:opacity-100 duration-200 
                    text-center hover:text-black dark:hover:text-primary'/>
              </a>
            </div>                               
        </div>
        <div className='project-list-container group'>
            <Card.CardImage
              src={Disappointed} 
              className='w-22 h-22 border-2 bg-white border-primary rounded-full mb-4' 
            />
            <Card.CardTitle 
              className='text-sm sm:text-xl md:text-2xl font-bold opacity-0 group-hover:opacity-100 duration-700'
              title="Esqueci meu CEP!"
            />              
            <div className='flex'>
              <a 
                target="blank"
                href="https://github.com/gabrigomez/esqueci-meu-cep"
                className='flex justify-center mr-2'>
                  <GithubLogo 
                    className='text-2xl mt-4 opacity-0 group-hover:opacity-100 duration-200 
                    text-center hover:text-black dark:hover:text-primary'/>
              </a>  
              <a 
                target="blank"
                href="https://esquecimeucep.netlify.app/"
                className='flex justify-center'>
                  <Browsers 
                    className='text-2xl mt-4 opacity-0 group-hover:opacity-100 duration-200 
                    text-center hover:text-black dark:hover:text-primary'/>
              </a>
            </div>                               
        </div>
        <div className='project-list-container group'>
            <Card.CardImage
              src={GithubGif} 
              className='w-22 h-22 border-2 border-primary rounded-full mb-4' 
            />
            <Card.CardTitle 
              className='text-sm sm:text-xl md:text-2xl font-bold opacity-0 group-hover:opacity-100 duration-700'
              title="Github Repo Filter"
            />                                  
            <div className='flex'>
              <a 
                target="blank"
                href="https://github.com/gabrigomez/github-repo-finder"
                className='flex justify-center mr-2'>
                  <GithubLogo 
                    className='text-2xl mt-4 opacity-0 group-hover:opacity-100 duration-200 
                    text-center hover:text-black dark:hover:text-primary'/>
              </a>
              <a 
                target="blank"
                href="https://finderrepo.netlify.app/"
                className='flex justify-center'>
                  <Browsers 
                    className='text-2xl mt-4 opacity-0 group-hover:opacity-100 duration-200 
                    text-center hover:text-black dark:hover:text-primary'/>
              </a>
            </div>                                         
        </div>        
        <div className='project-list-container group'>
            <Card.CardImage
              src={Pacman} 
              className='w-22 h-22 border-2 border-primary rounded-full mb-4' 
            />
            <Card.CardTitle 
              className='text-sm sm:text-xl md:text-2xl font-bold opacity-0 group-hover:opacity-100 duration-700'
              title="My classic games"
            />              
            <div className='flex'>            
              <a 
                target="blank"
                href="https://github.com/gabrigomez/my-classic-games"
                className='flex justify-center'>
                  <GithubLogo 
                    className='text-2xl mt-4 opacity-0 group-hover:opacity-100 duration-200 
                    text-center hover:text-black dark:hover:text-primary mr-2'/>
              </a>
              <a 
                target="blank"
                href="https://myclassicgamelist.netlify.app/"
                className='flex justify-center'>
                <Browsers 
                  className='text-2xl mt-4 opacity-0 group-hover:opacity-100 duration-200 
                  text-center hover:text-black dark:hover:text-primary'/>
              </a>
            </div>                     
        </div>        
      </Carousel>
    </Card.Root>
  )
}