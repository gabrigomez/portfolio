import React from 'react';

export const Footer = () => {
  return (
    <footer className='flex p-10 justify-center text-black dark:text-white'>
      <div className='flex flex-col items-center w-96 p-4 hover:scale-105 duration-200 rounded-2xl border border-gray-700 hover:border-gray-800 group'>                
        <p className='mb-2 border-b border-black group-hover:border-gray-700 duration-300 '>
          develop by gabrigomez
        </p>
        <p>2023 - Todos os direitos reservados</p>        
      </div>
    </footer>
  )
}