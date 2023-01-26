import React from 'react';
import { i18n } from '../translate/i18n'
import profile from '../assets/profile.jpg';
import { SiTypescript, SiCypress, SiTailwindcss, SiRubyonrails, SiReact, SiVuedotjs } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import TrackVisibility from 'react-on-screen';

export const Main = () => {
  return (
    <section className='w-full flex justify-center' id='home'>
      <div className='flex flex-col mt-32 sm:mt-8 p-2 sm:p-24 w-3/4 rounded-2xl mb-5'>
        <div className='flex flex-col text-primary dark:text-white items-center mb-4'>
          <h3 
          className='text-white text-md md:text-2xl mx-2 p-3 
          border border-primary bg-gradient-to-r from-blue-500 to-primary tracking-wider 
          shadow-md shadow-black dark:shadow-gray-600'
          >
            {i18n.t('main.banner')}
          </h3>
          <h1 className='text-3xl md:text-5xl xl:text-7xl mt-16 mb-2'>
            {i18n.t('main.title')}
          </h1>
          <h3 className='text-md md:text-lg text-center'>
            {i18n.t('main.info')}
          </h3>        
        </div>
        <div className='flex justify-center'>
          <img
            className='w-72 h-72 mt-10 sm:w-80 sm:h-80 border-2 border-secondary rounded-full animate-updown' 
            src={profile} 
            alt="" />
        </div>
        <div className='text-primary dark:text-white mt-20'>
          <p className='text-xl mb-8'>
            {i18n.t('main.interests')}
          </p>
          <TrackVisibility className='flex justify-center w-full'>
            {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__fadeIn" : "none"}>
              <div className='flex justify-center' id='icons'>
                <SiReact className='text-4xl lg:text-6xl mr-2 lg:mr-6' />
                <SiVuedotjs className='text-4xl lg:text-6xl mr-2 lg:mr-6' />
                <FaNodeJs className='text-4xl lg:text-6xl mr-2 lg:mr-6' />
                <SiTailwindcss className='text-4xl lg:text-6xl mr-2 lg:mr-6' />
                <SiTypescript className='text-4xl lg:text-6xl mr-2 lg:mr-6' />           
                <SiCypress className='text-4xl lg:text-6xl mr-2 lg:mr-6' />
                <SiRubyonrails className='text-4xl lg:text-6xl mr-2 lg:mr-6' />
              </div>
            </div>
            }
          </TrackVisibility>
        </div>
      </div>
    </section>
  )
}