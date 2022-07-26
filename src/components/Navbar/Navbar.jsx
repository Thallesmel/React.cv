import React from 'react';
import './Navbar.css';
import Toggle from '../Toggle/Toggle.jsx';
import '../AboutMe/AboutMe';
import AboutMe from '../AboutMe/AboutMe';

const Navbar = () => {
  return (
    <div className='n-wrapper'>
      <div className='n-left'>
        <div className='n-name'>React-cv</div>
        <Toggle />
      </div>
      <div className='n-right'>
        <div className='n-list'>
          <ul style={{ listStyleType: 'none' }}>
            <li>Home</li>
            <li onClick={window.scrollTo(<AboutMe/>)}>About Me</li>
            <li>Experience</li>
          </ul>
        </div>
        <button className='button n-button'>Contact Me</button>
      </div>
    </div>
  );
};

export default Navbar;
