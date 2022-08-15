import { useState } from 'react';
import './App.css';

function App() {
  const [ location, setLocation ] = useState({
    latitude: "",
    longitude: "",
  });

  const handleLat = (e) => {
    console.log(e.target.name, e.target.value);
    setLocation({...location,
      latitude: e.target.value,
    })
  }
  
  const handleLong = (e) => {
    console.log(e.target.name, e.target.value);
    setLocation({...location,
    longitude: e.target.value,
  })
  }

  return (
    <div className="App App-header">
      <h2>Weather Checker</h2>
      <p>Please enter your latitude and longitude to check the weather</p>

      <div className="input-wrapper">
        <form>
          <label htmlFor="latitude">Latitude</label>
          <input id="latitude" name="latitude" onChange={handleLat} value={location.latitude}></input>
          <label htmlFor="longitude">Longitude</label>
          <input id="longitude" name="longitude" onChange={handleLong} value={location.longitude}></input>
          <button>Get Weather Details</button>
        </form>
      </div>

    </div>
  );
}

export default App;
