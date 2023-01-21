import React from 'react';
import './Exp.css';
import adeptly from '../assets/adeptly.jpeg';
import tracklift from '../assets/Tracklift.jpeg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

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
          <TrackVisibility>
            {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : "none"}>
                <div className='exp-info-items'>
                  <div className='exp-item'>          
                    <img 
                      src={adeptly} 
                      alt=""
                      className='exp-image' 
                    />
                    <h3>Adeptly</h3>
                    <p className='exp-year'>Ago 2021 - Jan 2023</p>
                    <p className='exp-function'>Front-end developer/Quality Assurance</p>
                  </div>
                  <div className='exp-item'>          
                    <img 
                      src={tracklift} 
                      alt=""
                      className='exp-image' 
                    />
                    <h3>Tracklift</h3>
                    <p className='exp-year'>Jun 2021 - Ago 2021</p>
                    <p className='exp-function'>Front-end developer</p>
                  </div>
                </div>          
              </div>
            }
          </TrackVisibility>
        </div>
      </div>
    </section>
  )
}