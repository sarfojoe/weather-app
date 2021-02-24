import React, { useState, useEffect } from "react";
import "./App.css";
//import { ScaleLoader } from "react-spinners";

function App() {
  const [weatherdata, setWeatherData] = useState(null);
  const [city, setCity] = useState("Lahore");
  const [loading, setLoading] = useState(false);

  return (
    <div className="App">
      <div className="card">
        <h2 className="title">
          <i className="fa fa-cloud"></i>Weather App
        </h2>
        <div className="search-form">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter your city name"
          />
          <button type="button" onClick={() => getData()}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
