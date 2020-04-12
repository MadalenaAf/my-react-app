import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function CurrentWeather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    setWeatherData({
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      temperature: response.data.main.temp,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div className="weather">
        <div className="form">
          <form className="form-inline">
            <label for="City">City: </label>
            <input
              type="search"
              id="city-input"
              placeholder="Type a city..."
              autoComplete="off"
              className="form-control"
            ></input>
            <input type="Submit" id="search-button" value="Search"></input>
          </form>
        </div>
        <div className="row current-weather">
          <div className="col-6 city-description">
            <h1> {props.defaultCity} </h1>
            <ul>
              <li>
                Last updated: <FormattedDate date={weatherData.date} />{" "}
              </li>
              <li>{weatherData.description}</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)} km/h</li>
            </ul>
          </div>
          <div className="col-6 image-temperature">
            <span className="temperature">
              {Math.round(weatherData.temperature)}{" "}
            </span>{" "}
            <span className="units"> ºC | ºF </span>{" "}
            <span className="image">
              {" "}
              <img src={weatherData.iconUrl} alt={weatherData.description} />
            </span>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "ab89347cacce1a19cd08ea5cb4878ce1";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return <div>Loading...</div>;
  }
}
