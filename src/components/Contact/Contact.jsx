import React, { useState } from 'react';
import { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { themeContext } from '../../context';
import { useContext } from 'react';

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_2dvrzm8',
        'template_3pyz8fi',
        form.current,
        'Abfomouf3m3lrtO_h'
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className='contact-form'>
      <div className='awesome'>
        <span style={darkMode ? { Color: 'white' } : { color: 'var(--black)' }}>
          Contact me
        </span>
        <span>Get in touch</span>
        <div
          className='blur s-blur1'
          style={{
            backgroundColor: '#00dade6b',
            left: '-25em',
            bottom: '20rem',
          }}
        ></div>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <input
          id='user'
          type='text'
          name='user_name'
          className='user'
          placeholder='Name'
        />
        <input type='email' name='email' className='user' placeholder='Email' />
        <textarea name='message' className='user' placeholder='Message' />
        <input type='submit' name='send' className=' button' />
        <span
          style={
            { fontSize: '26px' } && darkMode
              ? { color: 'white' }
              : { color: 'var(--black)' }
          }
        >
          {done && 'Thanks for the message!'}
        </span>
        <div className='blur s-blur2'></div>
      </form>
    </div>
  );
};

export default Contact;
