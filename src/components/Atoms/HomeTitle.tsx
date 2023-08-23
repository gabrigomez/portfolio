import React from 'react';
import { ReactNode } from "react";

interface HomeTitleProps {
  children: ReactNode,
};

export const HomeTitle = ({children}: HomeTitleProps) => {
  return (
    <p className='text-primary dark:text-white font-bold hidden sm:block opacity-90 group-hover:opacity-100 duration-300'>
      {children}
    </p>
  )
};