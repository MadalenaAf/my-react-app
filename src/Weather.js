import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function CurrentWeather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      temperature: response.data.main.temp,
      icon: response.data.weather[0].icon,
    });
    setReady(true);
  }

  function search() {
    const apiKey = "ab89347cacce1a19cd08ea5cb4878ce1";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (ready) {
    return (
      <div className="weather">
        <div className="form" onSubmit={handleSubmit}>
          <form className="form-inline">
            <label for="City">City: </label>
            <input
              type="search"
              id="city-input"
              placeholder="Type a city..."
              autoComplete="off"
              className="form-control"
              onChange={handleCityChange}
            ></input>
            <input type="Submit" id="search-button" value="Search"></input>
          </form>
        </div>
        <WeatherInfo data={weatherData} />
        <WeatherForecast city={weatherData.city} />
      </div>
    );
  } else {
    search();
    return <div>Loading...</div>;
  }
}
