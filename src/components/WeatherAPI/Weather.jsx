import './Weather.css';
import { themeContext } from '../../context';
import { useContext } from 'react';

const Weather = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  let weather = {
    apiKey: '0f002a5dc84ab64ec8dbabb017c8b58f',
    fetchWeather: function (city) {
      if (city !== '') {
        fetch(
          'https://api.openweathermap.org/data/2.5/weather?q=' +
            city +
            '&units=matric&appid=' +
            this.apiKey
        )
          .then((response) => response.json())
          .then((data) => this.displayWeather(data));
      } else {
        document.querySelector('.w-search-bar').placeholder =
          'Please find your weather here';
        document.querySelector('.w-search-bar').classList.toggle('on');
      }
    },
    displayWeather: function (data) {
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      document.querySelector('.w-city').innerText = 'Weather in ' + name;
      document.querySelector('.w-icon').src =
        'https://openweathermap.org/img/wn/' + icon + '.png';
      document.querySelector('.w-description').innerText = description;
      document.querySelector('.w-temp').innerText =
        Math.round(temp / 11) + '°C';
      document.querySelector('.w-humidity').innerText =
        'Huminidy: ' + humidity + '%';
      document.querySelector('.w-wind').innerText =
        'Wind speed: ' + speed + '%';
      document.querySelector('.w-search-bar').style.marginTop = '15%';
      document.querySelector('.w-button').style.marginTop = '15%';
    },
    search: function () {
      this.fetchWeather(document.querySelector('.w-search-bar').value);
    },
  };

  document.querySelector('.w-search button');
  document.addEventListener('click', function () {
    weather.search();
  });

  return (
    <div className='weather'>
      <div className='w-card'>
        <div className='w-weather'>
          <h2 className='w-city'>Weather in Denver</h2>
          <h1 className='w-temp'>51°C</h1>
          <img src='' alt='' className='w-icon' />
          <div className='w-description'>CLouds</div>
          <div className='w-humidity'>Humidity</div>
          <div className='w-wind'>Wind speed: 6.2 km/h</div>
          <div className='w-search'>
            <input
              type='text'
              className='w-search-bar'
              placeholder='search'
              style={
                darkMode ? { color: 'var(--gray)' } : { color: 'var(--black)' }
              }
            ></input>
            <button
              className='w-button'
              style={
                darkMode ? { color: 'var(--gray)' } : { color: 'var(--black)' }
              }
            >
              <svg
                stroke='currentColor'
                fill='currentColor'
                strokeWidth='0'
                viewBox='0 0 1024 1024'
                height='1.5em'
                width='1.5em'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z'></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
