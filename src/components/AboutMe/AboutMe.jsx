import React from 'react';
import Card from '../Card/Card.jsx';
import Book from '../../img/book-stack.png';
import Coding from '../../img/binary-code.png';
import People from '../../img/people.png';
import { themeContext } from '../../context';
import { useContext } from 'react';
import { motion } from 'framer-motion';
const transition = { duration: 2, type: 'spring' };

const AboutMe = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='about-me'>
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
        <motion.div
          style={{ left: '14rem'}}
          initial={{ left: '35em' }}
          whileInView={{ left: '14rem' }}
          transition={transition}
        >
          <Card
            emoji={Book}
            heading={'Education'}
            experience={87}
            detail={'Studied in Brazil, University(sudying now)'}
          />
        </motion.div>
        <motion.div
          style={{ top: '12rem', left: '-4rem'}}
          initial={{ left: '-15em' }}
          whileInView={{ left: '-4rem' }}
          transition={transition}
        >
          <Card
            emoji={Coding}
            heading={'Coding'}
            experience={65}
            detail={'JavaScript, HTML, CSS, React'}
          />
        </motion.div>
        <motion.div
          style={{ top: '19rem', left: '12rem' }}
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
        <svg
          style={{ position: 'absolute', right: '-70rem', bottom: '-13rem' }}
          width='1000'
          height='1000'
          viewBox='0 0 1000 1000'
          xmlns='http://www.w3.org/2000/svg'
        >
          <defs>
            <linearGradient
              id='linearGradientId-0'
              gradientTransform='rotate(-85 1.5 1.5)'
            >
              <stop offset='0%' stopColor='#00DBDE' />
              <stop offset='100%' stopColor='#fc00ff' />
            </linearGradient>

            <clipPath id='shape-0'>
              <path
                fill='currentColor'
                d='M784,646.5Q903,793,762,833Q621,873,509.5,844Q398,815,349.5,729.5Q301,644,177,572Q53,500,160.5,416Q268,332,339.5,279.5Q411,227,490,257.5Q569,288,731,251Q893,214,779,357Q665,500,784,646.5Z'
              ></path>
            </clipPath>
          </defs>

          <g clipPath='url(#shape-0)'>
            <path
              fill='url(#linearGradientId-0)'
              d='M784,646.5Q903,793,762,833Q621,873,509.5,844Q398,815,349.5,729.5Q301,644,177,572Q53,500,160.5,416Q268,332,339.5,279.5Q411,227,490,257.5Q569,288,731,251Q893,214,779,357Q665,500,784,646.5Z'
            >
              <animate
                repeatCount={300}
                dur={10}
                attributeName='d'
                values='
                M784,646.5Q903,793,762,833Q621,873,509.5,844Q398,815,349.5,729.5Q301,644,177,572Q53,500,160.5,416Q268,332,339.5,279.5Q411,227,490,257.5Q569,288,731,251Q893,214,779,357Q665,500,784,646.5Z;
                    M757.5,611Q806,722,704,768Q602,814,483.5,864Q365,914,315.5,792Q266,670,301,585Q336,500,300.5,414.5Q265,329,335,268.5Q405,208,520.5,144.5Q636,81,756,154Q876,227,792.5,363.5Q709,500,757.5,611Z;
                    M749.5,555Q652,610,601,632Q550,654,462.5,769Q375,884,340.5,762.5Q306,641,181,570.5Q56,500,167,419.5Q278,339,321.5,211Q365,83,462.5,199Q560,315,601.5,355.5Q643,396,745,448Q847,500,749.5,555Z;
                    M784,646.5Q903,793,762,833Q621,873,509.5,844Q398,815,349.5,729.5Q301,644,177,572Q53,500,160.5,416Q268,332,339.5,279.5Q411,227,490,257.5Q569,288,731,251Q893,214,779,357Q665,500,784,646.5Z;
                    '
              ></animate>
            </path>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default AboutMe;
