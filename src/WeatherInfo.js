import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row current-weather">
        <div className="col-6 city-description">
          <h1> {props.data.city} </h1>
          <ul>
            <li>
              Last updated: <FormattedDate date={props.data.date} />{" "}
            </li>
            <li>{props.data.description}</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
        <div className="col-6 image-temperature">
          <span className="temperature">
            {Math.round(props.data.temperature)}{" "}
          </span>{" "}
          <span className="units"> ºC | ºF </span>{" "}
          <span className="image">
            {" "}
            <WeatherIcon code={props.data.icon} />{" "}
          </span>
        </div>
      </div>
    </div>
  );
}
