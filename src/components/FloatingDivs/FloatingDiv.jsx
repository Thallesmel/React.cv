import React from 'react';
import './FloatingDiv.css';
import '../AboutMe/AboutMe.css';

export const FloatingDiv = ({ image, txt1, txt2 }) => {
  return (
    <div className='floatingdiv'>
      <img src={image} alt='' />
      <span style={{ color: 'var(--black)' }}>
        {txt1}
        <br />
        {txt2}
      </span>
    </div>
  );
};
