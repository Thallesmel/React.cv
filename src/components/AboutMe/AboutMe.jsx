import React, { useContext } from 'react';
import Card from '../Card/Card.jsx';
import Book from '../../img/book-stack.png';
import Coding from '../../img/binary-code.png';
import People from '../../img/people.png';
import { themeContext } from '../../context';
import { motion } from 'framer-motion';
const transition = { duration: 2, type: 'spring' };

const AboutMe = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='about-me' id='aboutMe-section'>
      <div className='about'>
        <span style={darkMode ? { color: 'white' } : { color: 'var(--black)' }}>
          About me
        </span>
        <span>Personal Informations</span>
        <span style={darkMode ? { color: 'var(--gray)' } : { color: 'white' }}>
          Age, Nationality, Lenguage levels, Hobbies, Goals, Address
        </span>
        <a style={{ width: '8rem' }} href={Book} download>
          <button className='button a-button'>Download CV</button>
        </a>
        <ul style={darkMode ? { color: 'white' } : { color: 'black' }}>
          <li>Age: 19 years old</li>
          <li>Nationality: Brazilian</li>
          <li>Lenguage Levels:</li>
          <li>Portuguese: Native Lenguage</li>
          <li>English: Advanced</li>
          <li>German: intermediate</li>
          <li>Hobbies: Art and Music</li>
          <li>Goals: Full-stack Web Developer</li>
          <li>Address: Rua Maria Dalina, 443, 54315662, Brazil</li>
        </ul>
        <div
          className='blur a-blur1'
          style={{ backgroundColor: '#00dade81' }}
        ></div>
      </div>

      <div className='cards'>
        <div className='cards1'>
          <motion.div
            initial={{ left: '35em' }}
            whileInView={{ left: '14rem' }}
            transition={transition}
          >
            <Card
              id='card1'
              emoji={Book}
              heading={'Education'}
              experience={87}
              detail={'Studied in Brazil, University(sudying now)'}
            />
          </motion.div>
          <motion.div
            id='card2'
            initial={{ left: '-8em' }}
            whileInView={{ left: '-4rem' }}
            transition={transition}
          >
            <Card
              emoji={Coding}
              heading={'Coding'}
              experience={65}
              detail={'JavaScript, Java, HTML, CSS, React, SQL'}
            />
          </motion.div>
          <motion.div
            id='card3'
            initial={{ left: '30em' }}
            whileInView={{ left: '12rem' }}
            transition={transition}
          >
            <Card
              emoji={People}
              heading={'Comunication'}
              experience={93}
              detail={'Good in teamwork, Happy to help!'}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
