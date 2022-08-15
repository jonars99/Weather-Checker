import { useState } from 'react';
import './App.css';

function App() {
  const [ location, setLocation ] = useState({
    latitude: "",
    longitude: "",
  });
  // states for today with image, temperature and humidity
  // states for tomorrow with image, temperature and humidity

  const handleLat = (e) => {
    setLocation({...location,
      latitude: e.target.value,
    })
  }
  
  const handleLong = (e) => {
    setLocation({...location,
    longitude: e.target.value,
  })
  }

  const getWeather = (lat, long) => {
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${long}?key=${process.env.REACT_APP_WEATHER_KEY}`)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw new Error('Bad Request');
      })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log('d', data);
        // currentConditions.temp, currentConditions.humidity
        // set todays state
        // set tomorrows state
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const [lat, long] = [parseFloat(location.latitude, 6), parseFloat(location.longitude)];
    console.log(lat, long);
    getWeather(lat, long);
  }

  return (
    <div className="App App-header">
      <h2>Weather Checker</h2>
      <p>Please enter your latitude and longitude to check the weather</p>

      <div className="input-wrapper">
        <form onSubmit={handleSubmit}>
          <label htmlFor="latitude">Latitude</label>
          <input id="latitude" name="latitude" onChange={handleLat} value={location.latitude}></input>
          <label htmlFor="longitude">Longitude</label>
          <input id="longitude" name="longitude" onChange={handleLong} value={location.longitude}></input>
          <button onClick={handleSubmit}>Get Weather Details</button>
        </form>

{/*         <div>{todays weather state}</div>
        <div>{tomorros weather state}</div> */}

      </div>

    </div>
  );
}

export default App;
