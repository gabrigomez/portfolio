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
          <h4>
            Felis imperdiet proin fermentum leo vel orci porta. 
            Purus faucibus ornare suspendisse sed nisi. 
            Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. 
            Aenean euismod elementum nisi quis eleifend. Cursus metus aliquam eleifend mi in.
          </h4>        
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