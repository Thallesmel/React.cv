import React from 'react';
import Toggle from '../Toggle/Toggle.jsx';
import './Navbar.css';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <Nav navbarScroll>
      <div className='n-wrapper'>
        <div className='n-left'>
          <div className='n-name'>React-cv</div>
          <Toggle />
        </div>
        <div className='n-right'>
          <div className='n-list'>
            <ul style={{ listStyleType: 'none' }}>
              <li>
                <a>Home</a>
              </li>
              <li>
                <Link
                  to='aboutMe-section'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  to='experience-section'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Experience
                </Link>
              </li>
            </ul>
          </div>
          <Link to='portfolio-section'>
            <button className='button n-button'>Contact Me</button>
          </Link>
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
