import React from 'react';
import { i18n } from '../translate/i18n';


export const Footer = () => {
  return (
    <footer className='flex p-10 justify-center text-black dark:text-white'>
      <div className='flex flex-col items-center w-96 p-4 hover:scale-105 duration-200 rounded-2xl border border-gray-700 hover:border-gray-800 group'>                
        <p className='mb-2 border-b border-black group-hover:border-gray-700 duration-300 '>
          {i18n.t('footer.title')}
        </p>
        <p>
          {i18n.t('footer.description')}
        </p>        
      </div>
    </footer>
  )
}