import './App.css';

function App() {
  return (
    <div className="App App-header">
      <h2>Weather Checker</h2>
      <p>Please enter your latitude and longitude to check the weather</p>

      <div className="input-wrapper">
        <form>
          <label for="latitude">Latitude</label>
          <input id="latitude"></input>
          <label for="longitude">Longitude</label>
          <input id="longitude"></input>
          <button>Get Weather Details</button>
        </form>
      </div>

    </div>
  );
}

export default App;
