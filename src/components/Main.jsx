import React from 'react';
import coding from '../assets/coding.gif';
import './Main.css';

export const Main = () => {
  return (
    <div className='main-container'>
      <div className='main-info'>
        Main Info
      </div>
      <div>
        <img
          className='main-gif' 
          src={coding} 
          alt="" />
      </div>
    </div>
  )
}