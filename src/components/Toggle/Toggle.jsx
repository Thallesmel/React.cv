import React from 'react';
import './Toggle.css';
import PinkMoon from '../../img/moon (4).png';
import PinkSun from '../../img/sunrise.png';
import { themeContext } from '../../context';
import { useContext } from 'react';

function Toggle() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const handleClick = () => {
    theme.dispatch({ type: 'toggle' });
  };

  return (
    <div className='toggle' onClick={handleClick}>
      <img
        src={PinkMoon}
        alt=''
        style={darkMode ? { opacity: '0.0' } : { opacity: '1' }}
      />
      <img
        src={PinkSun}
        alt=''
        style={
          darkMode ? { opacity: '1', marginLeft: '-15px' } : { opacity: '0.0' }
        }
      />
      <div
        className='toggle-button'
        style={darkMode ? { left: '2px' } : { right: '2px' }}
      ></div>
    </div>
  );
}

export default Toggle;
