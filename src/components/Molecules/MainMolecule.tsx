import React from 'react';

import { i18n } from "../../translate/i18n";
import { DescriptionAtom } from "../Atoms/DescriptionAtom";
import { TitleAtom } from "../Atoms/TitleAtom";

export const MainMolecule = () => {
  return (
    <div className='flex flex-col text-primary dark:text-white items-center mb-4'>
      <TitleAtom
        className='text-white text-md md:text-2xl mx-2 p-3 
        border border-primary dark:border-gray-500 bg-gradient-to-r from-blue-500 to-primary tracking-wider 
        shadow-md shadow-black dark:shadow-gray-600'
        children={i18n.t('main.banner')}
      />           
      <TitleAtom
        className='text-3xl md:text-5xl xl:text-7xl mt-16 mb-2 font-semibold'
        children={i18n.t('main.title')}
      />          
      <DescriptionAtom
        className='text-md md:text-lg text-center'
        children={i18n.t('main.info')}
      />        
    </div>
  )
}