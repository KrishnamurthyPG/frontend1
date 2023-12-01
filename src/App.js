// App.js
import Footer from './components/Footer';
import './App.css';
import Header from './components/Header';
import { useState } from 'react';
import WeatherComponent from './components/WeatherComponent';

function App() {
  const [theme, setTheme] = useState('light');
  const [showWeather, setShowWeather] = useState(false);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div style={{ backgroundColor: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#333' : '#fff' }}>
      <Header />
      <div className="spacer">
        <div className="button-container">
          <button
            className="toggle-button"
            onClick={toggleTheme}
            style={{ backgroundColor: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#333' : '#fff' }}
          >
            Toggle Theme
          </button>
          {/* <WeatherComponent onWeatherClick={() => setShowWeather(true)} /> */}
        </div>
        {/* {showWeather && (
          <div className="weather-overlay">
            <WeatherComponent onClose={() => setShowWeather(false)} />
          </div>
        )} */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
