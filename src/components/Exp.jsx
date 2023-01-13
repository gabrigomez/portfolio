import React from 'react';
import './Exp.css';
import beemo from '../assets/beemo.gif';
import adeptly from '../assets/adeptly.jpeg';
import tracklift from '../assets/Tracklift.jpeg';

export const Exp = () => {
  return (
    <section className='exp-container' id='exp'>
      <div className='exp-card'>
        <div className='exp-title'>
          <h1>
            Experiência
          </h1>
          <h3>
            Essa é a minha jornada como Dev (até aqui)
          </h3>      
        </div>
        <div className='exp-info'>
          <div className='exp-info-items'>
            <div className='exp-item'>          
              <img 
                src={adeptly} 
                alt=""
                className='exp-image' 
              />
              <h3>Adeptly</h3>
              <p>Ago 2021 - Jan 2023</p>
              <p>Front-end developer/Quality Assurance</p>
            </div>
            <div className='exp-item'>          
              <img 
                src={tracklift} 
                alt=""
                className='exp-image' 
              />
              <h3>Tracklift</h3>
              <p>Jun 2021 - Ago 2021</p>
              <p>Front-end developer</p>
            </div>
          </div>
          <img
            className='exp-gif' 
            src={beemo} 
            alt="" 
          />
        </div>
      </div>
    </section>
  )
}