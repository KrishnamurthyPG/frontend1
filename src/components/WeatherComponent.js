// WeatherComponent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherComponent = ({ onWeatherClick, onClose }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState('');
  const [api_key] = useState('1f158d35c6c089f573f1e8d6a74cf84a');

  const getWeatherData = () => {
    setLoading(true);
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=${api_key}`)
      .then((response) => {
        setWeather(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (location !== '') {
      getWeatherData();
    }
  }, [location]);

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeatherData();
  };

  return (
    <div>
      <center>
        <h2>Weather Information</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter a location"
            value={location}
            onChange={handleLocationChange}
          />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button type="submit" onClick={onWeatherClick}>
            Get Weather
          </button>
        </form>
       
        {loading && <div>Loading...</div>}

{weather && (
  <div>
    <h3>Current Weather</h3>
    <p>City: {weather.name || 'N/A'}</p>
    <p>Temperature: {weather.main?.temp || 'N/A'}°C</p>
    <p>Weather: {weather.weather?.[0]?.description || 'N/A'}</p>
    <p>Humidity: {weather.main?.humidity || 'N/A'}</p>
    <p>Wind Speed: {weather.wind?.speed || 'N/A'} m/s</p>
  </div>
)}
<br></br><br></br>
<button onClick={onClose}>Close</button>
      </center>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  );
};

export default WeatherComponent;
