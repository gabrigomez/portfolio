import React from 'react';
import adeptly from '../assets/adeptly.jpeg';
import tracklift from '../assets/Tracklift.jpeg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { LinkedinLogo } from 'phosphor-react';

export const Exp = () => {
  return (
    <section className='flex w-full justify-center bg-primaryBg' id='exp'>
      <div className='flex flex-col w-full p-4 mt-2 md:w-2/3 md:p-16 rounded-2xl text-white'>
        <div className='mb-10'>
          <h1 className='text-4xl md:text-6xl mb-2'>
            Experiência
          </h1>
          <h3 className='text-base'>
            Essa é a minha jornada como Dev (até aqui)
          </h3>      
        </div>
        <div className='flex justify-center w-full'>
          <TrackVisibility className='w-full flex justify-center'>
            {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : "none"}>
                <div className='flex h-96'>
                  <div className='flex flex-col items-center h-4/5 w-2/4 md:h-96 md:w-64 p-4 m-1 rounded-lg hover:bg-secondaryBg duration-500 group'>          
                    <img 
                      src={adeptly} 
                      alt=""
                      className='border-2 border-solid border-primary h-20 w-20 md:h-36 md:w-36' 
                    />
                    <h3 className='m-2 text-2xl md:text-4xl'>Adeptly</h3>
                    <p className='opacity-0 group-hover:opacity-100 duration-500 mb-2'>Ago 2021 - Jan 2023</p>
                    <p className='opacity-0 group-hover:opacity-100 duration-500 font-bold'>Front-end developer/Quality Assurance</p>                                      
                    <a 
                      href="https://www.linkedin.com/company/adeptly/" 
                      className='hover:text-primary duration-300 mt-4'>
                        <LinkedinLogo className='text-2xl md:text-4xl opacity-0 group-hover:opacity-100 duration-300' />
                    </a>                  
                  </div>
                  <div className='flex flex-col items-center h-4/5 w-2/4 md:h-96 md:w-64 p-4 m-1 rounded-lg hover:bg-secondaryBg duration-500 group'>          
                    <img 
                      src={tracklift} 
                      alt=""
                      className='border-2 border-solid border-primary h-20 w-20 md:h-36 md:w-36' 
                    />
                    <h3 className='m-2 text-2xl md:text-4xl'>Tracklift</h3>
                    <p className='opacity-0 group-hover:opacity-100 duration-500 mb-2'>Jun 2021 - Ago 2021</p>
                    <p className='opacity-0 group-hover:opacity-100 duration-500 font-bold'>Front-end developer</p>
                    <a 
                      href="https://www.linkedin.com/company/tracklift/" 
                      className='hover:text-primary duration-300 mt-4'>
                        <LinkedinLogo className='text-2xl md:text-4xl opacity-0 group-hover:opacity-100 duration-300' />
                    </a> 
                  </div>
                </div>          
              </div>
            }
          </TrackVisibility>
        </div>
      </div>
    </section>
  )
}