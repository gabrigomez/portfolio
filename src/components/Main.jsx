import React from 'react';
import profile from '../assets/profile.jpg';
import './Main.css';

export const Main = () => {
  return (
    <section className='main-container' id='home'>
      <div className='main-card'>
        <div className='main-info'>
          <h3 className='main-welcome'>
            Bem-vindo ao meu portfólio!
          </h3>
          <h1>
            Olá! Eu sou Gabriel Gomes!
          </h1>
          <h3>
            Sou apaixonado por tecnologia desde sempre e adoro saber como tudo funciona! Embora curta especialmente a parte
            de desenvolvimento Front-end, me interesso por quase tudo relacionado ao mundo da programação. Busco estudar e praticar sempre que possível, 
            afinal, a área de tecnologia é alimentada pelo movimento constante. Não dá pra ficar parado.
          </h3>        
        </div>
        <div>
          <img
            className='main-image' 
            src={profile} 
            alt="" />
        </div>
      </div>
    </section>
  )
}