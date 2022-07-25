import React from 'react';
import './Card.css';
import { themeContext } from '../../context';
import { useContext } from 'react';

const Card = ({ emoji, heading, detail, experience }) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className='card'
      style={
        darkMode
          ? { backgroundColor: '#fb00ff14' }
          : { backgroundColor: 'white' }
      }
    >
      <img src={emoji} alt='' />
      <span>{heading}</span>
      <span>{detail}</span>
      <div
        className='c-div'
        style={darkMode ? { color: 'white' } : { color: 'var(--black)' }}
      >
  <div class="skill-bars">
    <div class="bar">
      <div class="info">
        <span>Experience Level</span>
      </div>
      <div class="progress-line html">
        <span
        style={{width:experience, content:experience}}
        ></span>
      </div>
    </div>
  </div>
      </div>
    </div>
  );
};

export default Card;
