import React from 'react';
import profile from '../assets/profile.jpg';

export const Main = () => {
  return (
    <section className='w-full flex justify-center' id='home'>
      <div className='flex flex-col px-2 sm:px-24 py-48 w-3/4 rounded-2xl mb-5'>
        <div className='flex flex-col text-white items-center mb-4'>
          <h3 className='p-3 border border-primary text-md md:text-2xl mb-6 bg-gradient-to-r from-blue-500 to-primary tracking-wider'>
            Bem-vindo ao meu portfólio!
          </h3>
          <h1 className='text-4xl sm:text-7xl my-6'>
            Olá! Eu sou Gabriel Gomes!
          </h1>
          <h3 className='text-md sm:text-lg text-center'>
            Sou apaixonado por tecnologia desde sempre e adoro saber como tudo funciona! Embora curta especialmente a parte
            de desenvolvimento Front-end, me interesso por quase tudo relacionado ao mundo da programação. Busco estudar e praticar sempre que possível, 
            afinal, a área de tecnologia é alimentada pelo movimento constante. Não dá pra ficar parado.
          </h3>        
        </div>
        <div className='flex justify-center'>
          <img
            className='w-72 h-72 sm:w-80 sm:h-80 border-2 border-primary rounded-full mt-8 animate-updown' 
            src={profile} 
            alt="" />
        </div>
      </div>
    </section>
  )
}