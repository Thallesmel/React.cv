import React, { useEffect } from 'react';
import { useState } from 'react';
import './CandyCrush.css';
import { themeContext } from '../../context';
import { useContext } from 'react';

const candyColors = ['blue', 'green', 'orange', 'purple', 'red', 'yellow'];
const width = 8;

const Candycrush = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
 
  const locker = () => {
    const stater = document.getElementsByClassName(".portfolio-slider");
    stater.setAttribute('allowSlideNext', 'false');
}


  const [currentColorArrangement, setColorArrangement] = useState([]);

  const createBoard = () => {
    const randomColorArrangement = [];
    for (let i = 0; i < width * width; i++) {
      const randomColor =
        candyColors[Math.floor(Math.random() * candyColors.length)];
      randomColorArrangement.push(randomColor);
    }
    setColorArrangement(randomColorArrangement);
  };

  useEffect(() => {
    createBoard();
  }, []);
  console.log(currentColorArrangement);
  return (
    <div className='candycrush'>
      <div id='play' onClick={locker} className='button play'>
        Play it now!!
      </div>
      <div className='game'>
        {currentColorArrangement.map((candyColors, index) => (
          <img key={index} style={{ backgroundColor: candyColors }} />
        ))}
      </div>
    </div>
  );
};

export default Candycrush;
