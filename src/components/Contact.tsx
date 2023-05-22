import React from 'react';
import { i18n } from '../translate/i18n';
import { Envelope, GithubLogo, LinkedinLogo, UserList } from 'phosphor-react';
import coding from '../assets/coding.gif';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  return (
    <section className='flex w-full justify-center mb-4 text-white dark:text-black' id='contact'>
      <TrackVisibility className='flex justify-center'>
        {({ isVisible }) =>
          <div className={isVisible ? "animate__animated animate__fadeIn w-full" : "none"}>
            <div 
              className='flex flex-col md:flex-row justify-center bg-black dark:bg-slate-50 rounded-lg p-2 m-10 md:p-10 md:m-14'
              >
              <div className='flex justify-center items-center'>
                <img className='w-44 h-44 mb-4 md:h-72 md:w-72 lg:mr-5 border-2 rounded-full' src={coding} alt="" />
              </div>
              <div className='flex flex-col items-center justify-evenly ml-15'>
                <h1 className='text-4xl mb-4 font-bold'>
                  {i18n.t('contact.description')}
                </h1>
                <div className='flex flex-col sm:w-2/4'>
                  <div className='flex flex-col items-center mb-4 group'>
                    <Envelope className='text-4xl group-hover:scale-125 duration-300'/>
                    <p 
                      className='text-xl md:text-2xl hover:text-gray-500 border-b-2 border-gray-800
                      hover:border-gray-900 dark:border-gray-200 dark:hover:border-gray-300 duration-300'>
                        gabrigomez15@gmail.com
                    </p>
                  </div>
                  <div className='flex flex-col items-center mb-4 group'>
                    <LinkedinLogo className='text-4xl group-hover:scale-125 duration-300' />
                    <a 
                      href="https://www.linkedin.com/in/gabrielgomes93/" 
                      className='text-xl md:text-2xl hover:text-gray-500 border-b-2 border-gray-800
                      hover:border-gray-900 dark:border-gray-200 dark:hover:border-gray-300 duration-300'>
                        Linkedin
                    </a>
                  </div>
                  <div className='flex flex-col items-center mb-6 group'>
                    <GithubLogo className='text-4xl group-hover:scale-125 duration-300'/>
                    <a 
                      href="https://github.com/gabrigomez"
                      className='text-xl md:text-2xl hover:text-gray-500 border-b-2 border-gray-800
                      hover:border-gray-900 dark:border-gray-200 dark:hover:border-gray-300 duration-300'>
                        Github
                    </a>
                  </div>
                  <div className='flex flex-col items-center mb-6 group'>
                    <UserList className='text-4xl group-hover:scale-125 duration-300'/>
                    <a 
                      href="https://drive.google.com/file/d/1DvuUkQaAonXV67rGEvVpbEJhwkdliRRD/view?usp=share_link"
                      target="blank"
                      className='text-xl md:text-2xl hover:text-gray-500 border-b-2 border-gray-800
                      hover:border-gray-900 dark:border-gray-200 dark:hover:border-gray-300 duration-300'>
                        Curriculo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </TrackVisibility>
    </section>
  );
};