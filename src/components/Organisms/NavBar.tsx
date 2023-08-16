import React, { useEffect, useState } from 'react';
import { HomeTitleMolecule } from '../Molecules/HomeTitleMolecule';
import { NavBarContactLinks } from './NavBarContactLinks';
import { NavBarSectionLinks } from './NavBarSectionLinks';

import { i18n } from '../../translate/i18n';
import { useTheme } from '../../hooks/useTheme';
import { useLanguage } from '../../hooks/useLanguage';

import { BsMoonFill, BsSun } from 'react-icons/bs';
import Brazil from '../../assets/Brazil.png';
import Usa from '../../assets/usa.png';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState<string>('home');
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const { setLanguage } = useLanguage();

  const sections = [
    {
      href:'#skills',
      onClick: () => onUpdateActiveLink('skills'),
      children: i18n.t('titles.skills'),
    },
    {
      href:'#exp',
      onClick: () => onUpdateActiveLink('exp'),
      children: i18n.t('titles.exp'),
    },
    {
      href:'#projects',
      onClick: () => onUpdateActiveLink('projects'),
      children: i18n.t('titles.projects'),
    },
    {
      href:'#contact',
      onClick: () => onUpdateActiveLink('contact'),
      children: i18n.t('titles.contact'),
    }
  ];

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
   
  const onUpdateActiveLink = (value: string) => {
    setActiveLink(value);
  };

  const handleLanguage = (value:string) => {
    setLanguage(value);
    window.location.reload();
  }

  return (
    <nav className={`p-2 fixed w-full top-0 z-10 duration-500 ${theme ? '' : ''} ${scrolled ? 'bg-black' : ''}`}>
      <div className='flex place-content-around items-center p-2'>
        <HomeTitleMolecule 
          activeLink={activeLink} 
          children={i18n.t('titles.home')} 
          onClick={() => onUpdateActiveLink('home')} 
        />
        <BsSun 
          className={`text-white cursor-pointer ${theme ? '' : 'hidden'} text-lg xl:text-2xl`} 
          onClick={() => setTheme(!theme)} 
        />
        <BsMoonFill 
          className={`text-primary cursor-pointer ${theme ? 'hidden' : ''} text-lg xl:text-2xl`} 
          onClick={() => setTheme(!theme)} 
        />
        <img 
          alt="Brazil" 
          className='h-5 w-5 mr-1 lg:h-8 lg:w-8 cursor-pointer' 
          onClick={() => handleLanguage('pt-BR')} 
          src={Brazil} 
        />
        <img 
          alt="Usa" 
          src={Usa} 
          className='h-5 w-5 lg:h-8 lg:w-8 cursor-pointer' 
          onClick={() => handleLanguage('en-US')} 
        />              
        <div className='flex'>          
          <NavBarSectionLinks sections={sections} />
          <NavBarContactLinks />
        </div>        
      </div>
    </nav>
  )
}