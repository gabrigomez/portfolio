import React from 'react';
import './Footer.css';
import finnJake from '../assets/finn-jake.gif';

export const Footer = () => {
  return (
    <section className='footer-container'>
      <div className='footer-card'>
        <img className='footer-image' src={finnJake} alt="" />        
        <p>develop by gabrigomez</p>
        <p>2022 - Todos os direitos reservados</p>        
      </div>
    </section>
  )
}