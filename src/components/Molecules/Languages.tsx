import React from 'react';

import { FaNodeJs } from "react-icons/fa";
import { SiCypress, SiDjango, SiReact, SiRubyonrails, SiTailwindcss, SiTypescript, SiVuedotjs } from "react-icons/si";

interface LanguagesProps {
  isVisible: boolean,
}

export const Languages = ({isVisible} : LanguagesProps) => {
  return (
    <div className={isVisible ? "animate__animated animate__fadeIn" : "none"}>
      <div className='flex justify-center' id='icons'>
        <SiReact className='text-3xl sm:text-4xl lg:text-6xl mr-2 lg:mr-6 cursor-pointer hover:scale-110 duration-200' />
        <SiVuedotjs className='text-3xl sm:text-4xl lg:text-6xl mr-2 lg:mr-6 cursor-pointer hover:scale-110 duration-200' />
        <FaNodeJs className='text-3xl sm:text-4xl lg:text-6xl mr-2 lg:mr-6 cursor-pointer hover:scale-110 duration-200' />
        <SiTypescript className='text-3xl sm:text-4xl lg:text-6xl mr-2 lg:mr-6 cursor-pointer hover:scale-110 duration-200' />           
        <SiTailwindcss className='text-3xl sm:text-4xl lg:text-6xl mr-2 lg:mr-6 cursor-pointer hover:scale-110 duration-200' />
        <SiCypress className='text-3xl sm:text-4xl lg:text-6xl mr-2 lg:mr-6 cursor-pointer hover:scale-110 duration-200' />
        <SiDjango className='text-3xl sm:text-4xl lg:text-6xl mr-2 lg:mr-6 cursor-pointer hover:scale-110 duration-200' />
        <SiRubyonrails className='text-3xl sm:text-4xl lg:text-6xl mr-2 lg:mr-6 cursor-pointer hover:scale-110 duration-200' />
      </div>
    </div>
  )
};