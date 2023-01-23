import React, { useEffect, useState } from 'react';
import { FinnTheHuman, GithubLogo, LinkedinLogo } from 'phosphor-react';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

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
  console.log(activeLink)

  return (
    <nav expand="md" className={`p-2 fixed w-full top-0 z-10 duration-500 ease-in-out ${scrolled ? 'bg-black' : ''}`}>
      <div className='flex place-content-around p-2'>
        <a 
          className='flex items-center no-underline group cursor-pointer' href='#home'
          onClick={() => onUpdateActiveLink('home')}>
            <FinnTheHuman className='group-hover:text-white w-10 h-10 mr-2 text-primary' />
            <p className='opacity-60 group-hover:opacity-100 duration-300 text-white'>HOME</p>
        </a>        
        <div className='flex'>
          <div className='flex items-center'>            
            <a 
              href="#skills" 
              className='text-white px-4 py-0 no-underline text-lg opacity-50 hover:opacity-100 hover:text-white cursor-pointer' 
              onClick={() => onUpdateActiveLink('skills')}>
                Skills
            </a>
            <a
              href="#exp" 
              className='text-white px-4 py-0 no-underline text-lg opacity-50 hover:opacity-100 hover:text-white cursor-pointer' 
              onClick={() => onUpdateActiveLink('exp')}>
                Exp
            </a>
            <a 
              href="#projects" 
              className='text-white px-4 py-0 no-underline text-lg opacity-50 hover:opacity-100 hover:text-white cursor-pointer' 
              onClick={() => onUpdateActiveLink('projects')}>
                Projects
            </a>
            <a 
              href="#contact" 
              className='text-white px-4 py-0 no-underline text-lg opacity-50 hover:opacity-100 hover:text-white cursor-pointer' 
              onClick={() => onUpdateActiveLink('contact')}>
                Contact
            </a>
          </div>
          <div className='flex items-center'>
            <div>
              <a 
                href="https://www.linkedin.com/in/gabrielgomes93/" 
                className='social-icon'>
                  <LinkedinLogo className='text-2xl z-10 duration-300 ease-in-out text-white hover:scale-105 hover:text-primary'/>
              </a>
              <a 
                href="https://github.com/gabrigomez"
                className='social-icon'>
                  <GithubLogo className='text-2xl z-10 duration-300 ease-in-out text-white hover:scale-105 hover:text-primary'/>
              </a>
            </div>
          </div>
        </div>        
      </div>
    </nav>
  )
}