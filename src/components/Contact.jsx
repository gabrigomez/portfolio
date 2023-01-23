import { Envelope, GithubLogo, LinkedinLogo } from 'phosphor-react';
import React from 'react';
import coding from '../assets/coding.gif';

export const Contact = () => {
  return (
    <section className='flex w-full justify-center mb-4' id='contact'>
      <div 
        className='flex flex-col 2xl:flex-row justify-center bg-slate-50 w-full md:w-4/5 lg:w-3/5 rounded-lg py-4 px-4 mx-4 my-4 2xl:px-20 2xl:py-20 2xl:mx-20 2xl:my-20'
      >
        <div className='flex justify-center items-center'>
          <img className='w-44 h-44 mb-4 lg:h-72 lg:w-72 border-2 rounded-full lg:mr-5' src={coding} alt="" />
        </div>
        <div className='flex flex-col items-center justify-evenly ml-15'>
          <h1 className='text-3xl mb-4 font-bold'>
            Vamos conversar? Aguardo o seu contato!
          </h1>
          <div className='flex flex-col w-full sm:w-2/4'>
            <div className='flex items-center mb-4'>
              <Envelope className='text-4xl mr-4'/>
              <p className='text-xl border-b-2 border-gray-200 hover:border-gray-300 duration-300 pb-1'>
                gabrigomez15@gmail.com
              </p>
            </div>
            <div className='flex items-center mb-4'>
              <LinkedinLogo className='text-4xl mr-4' />
              <a 
                href="https://www.linkedin.com/in/gabrielgomes93/" 
                className='hover:text-primary duration-300 text-xl border-b-2 border-gray-200 hover:border-gray-300 pb-1'>
                  Linkedin
              </a>
            </div>
            <div className='flex items-center mb-4'>
              <GithubLogo className='text-4xl mr-4'/>
              <a 
                href="https://github.com/gabrigomez"
                className='hover:text-primary duration-300 text-xl border-b-2 border-gray-200 hover:border-gray-300 pb-1'>
                  Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};