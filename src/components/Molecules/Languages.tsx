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
        <SiReact className='text-4xl lg:text-6xl mr-2 lg:mr-6' />
        <SiVuedotjs className='text-4xl lg:text-6xl mr-2 lg:mr-6' />
        <FaNodeJs className='text-4xl lg:text-6xl mr-2 lg:mr-6' />
        <SiTypescript className='text-4xl lg:text-6xl mr-2 lg:mr-6' />           
        <SiTailwindcss className='text-4xl lg:text-6xl mr-2 lg:mr-6' />
        <SiCypress className='text-4xl lg:text-6xl mr-2 lg:mr-6' />
        <SiDjango className='text-4xl lg:text-6xl mr-2 lg:mr-6' />
        <SiRubyonrails className='text-4xl lg:text-6xl mr-2 lg:mr-6' />
      </div>
    </div>
  )
};