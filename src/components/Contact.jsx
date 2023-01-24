import { Envelope, GithubLogo, LinkedinLogo } from 'phosphor-react';
import React from 'react';
import coding from '../assets/coding.gif';

export const Contact = () => {
  return (
    <section className='flex w-full justify-center mb-4' id='contact'>
      <div 
        className='flex flex-col w-full 2xl:w-3/5 md:flex-row justify-center bg-slate-50 rounded-lg p-2 m-10 md:p-10 md:m-14'
      >
        <div className='flex justify-center items-center'>
          <img className='w-44 h-44 mb-4 md:h-72 md:w-72 lg:mr-5 border-2 rounded-full' src={coding} alt="" />
        </div>
        <div className='flex flex-col items-center justify-evenly ml-15'>
          <h1 className='text-4xl mb-4 font-bold'>
            Aguardo o seu contato!
          </h1>
          <div className='flex flex-col sm:w-2/4'>
            <div className='flex flex-col items-center mb-4 group'>
              <Envelope className='text-4xl group-hover:scale-125 duration-300'/>
              <p className='text-xl md:text-2xl hover:text-primary border-b-2 border-gray-200 hover:border-gray-300 duration-300'>
                gabrigomez15@gmail.com
              </p>
            </div>
            <div className='flex flex-col items-center mb-4 group'>
              <LinkedinLogo className='text-4xl group-hover:scale-125 duration-300' />
              <a 
                href="https://www.linkedin.com/in/gabrielgomes93/" 
                className='text-xl md:text-2xl hover:text-primary duration-300 border-b-2 border-gray-200 hover:border-gray-300'>
                  Linkedin
              </a>
            </div>
            <div className='flex flex-col items-center mb-6 group'>
              <GithubLogo className='text-4xl group-hover:scale-125 duration-300'/>
              <a 
                href="https://github.com/gabrigomez"
                className='text-xl md:text-2xl hover:text-primary duration-300 border-b-2 border-gray-200 hover:border-gray-300'>
                  Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};