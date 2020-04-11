import React from "react";
import "./Weather.css";

export default function CurrentWeather() {
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
          <h1> Lisbon </h1>
          <ul>
            <li>Last updated: Friday 10:00h</li>
            <li>Clear Sky</li>
            <li>Humidity: 30%</li>
            <li>Wind: 40km/h</li>
          </ul>
        </div>
        <div className="col-6 image-temperature">
          <span className="temperature">12 </span>{" "}
          <span className="units"> ºC | ºF </span>{" "}
          <span className="image">
            {" "}
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="image"
            />
          </span>
        </div>
      </div>
    </div>
  );
}
