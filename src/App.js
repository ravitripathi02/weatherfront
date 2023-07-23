import React, { useState, useEffect } from "react";
import "./index";
import axios from "axios";
function App() {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [currWeatherData, setCurrWeatherData] = useState(null);
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };
  const currentDate = new Date();
  const [currTime, setCurrTime] = useState(new Date());
  const formatTime = (time) => {
    return time.toLocaleTimeString();
  };
  setInterval(() => {
    setCurrTime(new Date());
  }, 1000);

  useEffect(() => {
    const API_KEY = "eec90fb4a0b54f4444192b7f582ed1e8";
    const weatherEndpoint = `https://api.openweathermap.org/data/2.5/weather?lat={YOUR_LATITUDE}&lon={YOUR_LONGITUDE}&units=metric&appid=${API_KEY}`;

    // Use Geolocation API to get the user's location
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      console.log("Latitude:", latitude, "Longitude:", longitude);
      const endpoint = weatherEndpoint
        .replace("{YOUR_LATITUDE}", latitude)
        .replace("{YOUR_LONGITUDE}", longitude);

      axios
        .get(endpoint)
        .then((response) => {
          setCurrWeatherData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
        });
    });
  }, []);
  const getWeather = async () => {
    try {
      const response = await axios.post("https://reliable-druid-8948db.netlify.app/", {
        location,
      });
      setWeatherData(response.data);
    } catch (error) {
      console.log("Error fetching weather data:", error);
    }
  };

  return (
    <div className="App">
      <h1>Weather Application</h1>
      <div className="glass">
        <div className="left">
          {currWeatherData && (
            <div className="left-one">{currWeatherData.name}</div>
          )}
          {currWeatherData && (
            <div className="left-two">{currWeatherData.sys.country}</div>
          )}
          <div className="left-bottom">
            <div className="left-b-1">
              <diV className="left-three">{formatTime(currTime)}</diV>
              <div className="left-four">{currentDate.toDateString()}</div>
            </div>
            {currWeatherData && (
              <div className="left-b-2">{currWeatherData.main.temp}°C</div>
            )}
          </div>
        </div>
        <div className="right">
          {weatherData && (
            <div className="icon">
              <img
                style={{ width: "200px", height: "200px" }}
                src={`https://openweathermap.org/img/wn/${weatherData.icon}.png`}
                alt="Weather Icon"
              />
            </div>
          )}
          <div className="form">
            <input
              type="text"
              value={location}
              onChange={handleLocationChange}
              placeholder="Enter city name"
            />
            <button onClick={getWeather}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </button>
          </div>

          {weatherData && (
            <div className="detail">
              <h2>
                {weatherData.location},{weatherData.country}
              </h2>
              <p>Temperature: {weatherData.temperature}°C</p>
              <p>Humidity: {weatherData.humidity}%</p>
              <p>Wind Speed: {weatherData.speed}Km/h</p>
              <p>Description: {weatherData.description}</p>
            </div>
          )}
        </div>
      </div>

      {/* <div>{currLoc.latitude}</div> */}
    </div>
  );
}

export default App;
