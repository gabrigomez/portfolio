import React from 'react';
import adeptly from '../assets/adeptly.jpeg';
import tracklift from '../assets/Tracklift.jpeg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Exp = () => {
  return (
    <section className='flex w-full justify-center bg-primaryBg' id='exp'>
      <div className='flex flex-col w-2/3 p-16 rounded-2xl text-white'>
        <div className='mb-10'>
          <h1 className='text-6xl mb-2'>
            Experiência
          </h1>
          <h3>
            Essa é a minha jornada como Dev (até aqui)
          </h3>      
        </div>
        <div className='flex justify-center'>
          <TrackVisibility>
            {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : "none"}>
                <div className='flex'>
                  <div className='flex flex-col items-center h-96 w-64 p-4 m-1 rounded-lg hover:bg-secondaryBg duration-500 group'>          
                    <img 
                      src={adeptly} 
                      alt=""
                      className='border-2 border-solid border-primary h-36 w-36' 
                    />
                    <h3 className='m-2 text-lg'>Adeptly</h3>
                    <p className='opacity-0 group-hover:opacity-100 duration-500 mb-2'>Ago 2021 - Jan 2023</p>
                    <p className='opacity-0 group-hover:opacity-100 duration-500 font-bold'>Front-end developer/Quality Assurance</p>
                  </div>
                  <div className='flex flex-col items-center h-96 w-64 p-4 m-1 rounded-lg hover:bg-secondaryBg duration-500 group'>          
                    <img 
                      src={tracklift} 
                      alt=""
                      className='border-2 border-solid border-primary h-36 w-36' 
                    />
                    <h3 className='m-2'>Tracklift</h3>
                    <p className='opacity-0 group-hover:opacity-100 duration-500 mb-2'>Jun 2021 - Ago 2021</p>
                    <p className='opacity-0 group-hover:opacity-100 duration-500 font-bold'>Front-end developer</p>
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