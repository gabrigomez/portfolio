import { Envelope, GithubLogo, LinkedinLogo } from 'phosphor-react';
import React from 'react';
import coding from '../assets/coding.gif';
import './Contact.css';

export const Contact = () => {
  return (
    <section className='contact-container' id='contact'>
      <div className='contact-card'>
        <div className='contact-image-container'>
          <img className='contact-image' src={coding} alt="" />
        </div>
        <div className='contact-info-container'>
          <h1>
            Vamos conversar? Aguardo o seu contato!
          </h1>
          <div className='contact-info'>
            <div className='contact-email'>
              <Envelope className='contact-icon'/>
              <p>
                gabrigomez15@gmail.com
              </p>
            </div>
            <div className='contact-linkedin'>
              <LinkedinLogo className='contact-icon' />
              <a href="https://www.linkedin.com/in/gabrielgomes93/">Linkedin</a>
            </div>
            <div className='contact-github'>
              <GithubLogo className='contact-icon'/>
              <a href="https://github.com/gabrigomez">Github</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};