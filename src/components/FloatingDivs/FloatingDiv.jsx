import React from 'react';
import './FloatingDiv.css';
import { themeContext } from '../../context';
import { useContext } from 'react';
import '../AboutMe/AboutMe.css';

export const FloatingDiv = ({ image, txt1, txt2 }) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='floatingdiv'>
      <img src={image} alt='' />
      <span
        style={darkMode ? { color: 'var(--black)' } : { color: 'var(--black)' }}
      >
        {txt1}
        <br />
        {txt2}
      </span>
    </div>
  );
};
