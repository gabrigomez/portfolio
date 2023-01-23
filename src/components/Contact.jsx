import { Envelope, GithubLogo, LinkedinLogo } from 'phosphor-react';
import React from 'react';
import coding from '../assets/coding.gif';

export const Contact = () => {
  return (
    <section className='flex w-full justify-center mb-4' id='contact'>
      <div 
        className='flex flex-col 2xl:flex-row justify-center bg-slate-50 w-full md:w-3/4 rounded-lg py-4 px-4 mx-4 my-4 2xl:px-20 2xl:py-20 2xl:mx-20 2xl:my-20'
      >
        <div className='flex justify-center items-center'>
          <img className='w-44 h-44 mb-4 lg:h-72 lg:w-72 border-2 rounded-full lg:mr-5' src={coding} alt="" />
        </div>
        <div className='flex flex-col justify-evenly ml-15'>
          <h1 className='text-3xl mb-4 font-bold'>
            Vamos conversar? Aguardo o seu contato!
          </h1>
          <div className='flex flex-col'>
            <div className='flex items-center mb-4 p-2 border-b-2 border-gray-200 hover:border-gray-400 duration-300'>
              <Envelope className='text-4xl'/>
              <p className='text-xl'>
                gabrigomez15@gmail.com
              </p>
            </div>
            <div className='flex items-center mb-4 p-2 border-b-2 border-gray-200 hover:border-gray-400 duration-300'>
              <LinkedinLogo className='text-4xl' />
              <a href="https://www.linkedin.com/in/gabrielgomes93/" className='hover:text-primary duration-300 text-xl'>Linkedin</a>
            </div>
            <div className='flex items-center mb-4 p-2 border-b-2 border-gray-200 hover:border-gray-400 duration-300'>
              <GithubLogo className='text-4xl'/>
              <a href="https://github.com/gabrigomez" className='hover:text-primary duration-300 text-xl'>Github</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};