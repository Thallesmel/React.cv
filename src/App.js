import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useContext } from 'react';
import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Experience from './components/Experience/Experience.jsx';
import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import { themeContext } from './context';

<link
  rel='stylesheet'
  href='https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css'
  integrity='sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor'
  crossorigin='anonymous'
/>;

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className='App'
      style={{
        background: darkMode ? 'black' : '',
        color: darkMode ? 'white' : '',
      }}
    >
      <Navbar />
      <Intro />
      <AboutMe />
      <Experience />
      <Portfolio />
    </div>
  );
}

export default App;
