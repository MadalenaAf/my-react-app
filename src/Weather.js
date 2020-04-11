import React from "react";
import "./Weather.css";

export default function CurrentWeather() {
  return (
    <div className="weather">
      <div className="weather-app-total">
        <div className="weather-app">
          <div className="form">
            <form className="form-inline">
              <label for="City">City: </label>
              <input
                type="search"
                placeholder="Type a city..."
                autoComplete="off"
                className="form-control"
              ></input>
              <input type="Submit" id="search-button" value="Search"></input>
            </form>
          </div>
          <div className="row current-weather">
            <div className="col-6 city-description">
              <h1> Lisbon </h1>
              <ul>
                <li>Last updated: Friday 10:00h</li>
                <li>Clear Sky</li>
                <li>Humidity: 30%</li>
                <li>Wind: 40km/h</li>
              </ul>
            </div>
            <div className="col-6 icon-temperature">
              <span>12º C | F </span>{" "}
              <span>
                {" "}
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="icon"
                />
              </span>
            </div>
          </div>
        </div>
        <div className="bottom-github">
          <small>
            <a
              href="https://github.com/MadalenaAf/SheCodesPlus-WeatherApp"
              target="_blank"
            >
              Open source code{" "}
            </a>
            , by Madalena Ferreira
          </small>
        </div>
      </div>
    </div>
  );
}
