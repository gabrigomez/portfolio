import React from 'react';

export const Footer = () => {
  return (
    <section className='flex p-10 justify-center text-white hover:scale-105 duration-200 group'>
      <div className='flex flex-col items-center w-64 p-5 rounded-2xl border border-gray-700 group-hover:border-gray-800'>                
        <p className='mb-2 border-b border-black group-hover:border-gray-700 duration-300 '>
          develop by gabrigomez
        </p>
        <p>2023 - Todos os direitos reservados</p>        
      </div>
    </section>
  )
}