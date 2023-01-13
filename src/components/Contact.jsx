import { Envelope, GithubLogo, LinkedinLogo } from 'phosphor-react';
import React from 'react';
import profile from '../assets/profile.jpg';
import './Contact.css';

export const Contact = () => {
  return (
    <section className='contact-container' id='contact'>
      <div className='contact-card'>
        <div className='contact-image-container'>
          <img className='contact-image' src={profile} alt="" />
        </div>
        <div className='contact-info-container'>
          <h1>
            Vamos conversar? Eu aguardo o seu contato!
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
              <a href="">Linkedin</a>
            </div>
            <div className='contact-github'>
              <GithubLogo className='contact-icon'/>
              <a href="Github">Github</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};