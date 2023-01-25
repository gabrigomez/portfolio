import React, { useEffect, useState } from 'react';
import { FinnTheHuman, GithubLogo, LinkedinLogo } from 'phosphor-react';
import { BsMoonFill, BsSun } from 'react-icons/bs';
import { useTheme } from '../useTheme';

export const NavBar = () => {
  const [setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      if(window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      };
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
   
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <nav expand="md" className={`p-2 fixed w-full top-0 z-10 duration-500 ${theme ? '' : ''} ${scrolled ? 'bg-black' : ''}`}>
      <div className='flex place-content-around items-center p-2'>
        <a 
          className='flex items-center no-underline group cursor-pointer' href='#home'
          onClick={() => onUpdateActiveLink('home')}>
            <FinnTheHuman className='text-primary dark:text-white opacity-70 group-hover:opacity-100 text-3xl xl:text-5xl sm:mr-2' />
            <p className='text-primary dark:text-white font-bold hidden sm:block opacity-90 group-hover:opacity-100 duration-300'>HOME</p>
        </a>
        <BsSun className={`text-white cursor-pointer ${theme ? '' : 'hidden'} text-lg xl:text-2xl`} onClick={() => setTheme(!theme)} />
        <BsMoonFill className={`text-primary cursor-pointer ${theme ? 'hidden' : ''} text-lg xl:text-2xl`} onClick={() => setTheme(!theme)} />        
        <div className='flex'>
          <div className='flex items-center'>            
            <a 
              href="#skills" 
              className='text-primary font-bold dark:text-white px-2 sm:px-4 py-0 no-underline text-lg opacity-90 hover:opacity-100 cursor-pointer' 
              onClick={() => onUpdateActiveLink('skills')}>
                Skills
            </a>
            <a
              href="#exp" 
              className='text-primary font-bold dark:text-white px-2 sm:px-4 py-0 no-underline text-lg opacity-90 hover:opacity-100 cursor-pointer' 
              onClick={() => onUpdateActiveLink('exp')}>
                Exp
            </a>
            <a 
              href="#projects" 
              className='text-primary font-bold dark:text-white px-2 sm:px-4 py-0 no-underline text-lg opacity-90 hover:opacity-100 cursor-pointer' 
              onClick={() => onUpdateActiveLink('projects')}>
                Projects
            </a>
            <a 
              href="#contact" 
              className='text-primary font-bold dark:text-white px-2 sm:px-4 py-0 no-underline text-lg opacity-90 hover:opacity-100 cursor-pointer' 
              onClick={() => onUpdateActiveLink('contact')}>
                Contact
            </a>
          </div>
          <div className='hidden sm:flex items-center'>
            <div>
              <a 
                href="https://www.linkedin.com/in/gabrielgomes93/" 
                className='social-icon group'>
                  <LinkedinLogo className='text-2xl z-10 duration-300 text-white hover:scale-105 group-hover:text-white'/>
              </a>
              <a 
                href="https://github.com/gabrigomez"
                className='social-icon group'>
                  <GithubLogo className='text-2xl z-10 duration-300 text-white hover:scale-105 group-hover:text-white'/>
              </a>
            </div>
          </div>
        </div>        
      </div>
    </nav>
  )
}