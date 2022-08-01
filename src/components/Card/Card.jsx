import React, { useContext } from 'react';
import './Card.css';
import { themeContext } from '../../context';

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
        <div className='skill-bars'>
          <div className='bar'>
            <div className='info'>
              <span>Experience Level</span>
            </div>
            <div className='progress-line html'>
              <span style={{ width: experience, content: experience }}></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
