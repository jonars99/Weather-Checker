import { useState } from 'react';
import './App.css';

function App() {
  const [ location, setLocation ] = useState({
    latitude: "",
    longitude: "",
  });

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
      </div>

    </div>
  );
}

export default App;
