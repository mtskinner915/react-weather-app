import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h2>{props.data.city}</h2>
      <ul>
        <li className="day-time">
          Last updated: <FormattedDate date={props.data.date} />
        </li>
      </ul>
      <div className="container">
        <div className="row">
          <div className="column">
            <img
              src={props.data.imgUrl}
              alt="sunny"
              width="70px"
              className="Weather-image"
            />
            <span className="Degree">
              {Math.round(props.data.temperature)}{" "}
            </span>
            <span className="Units">°C | °F</span>
          </div>
          <div className="column">
            <ul className="Weather-details">
              <li className="text-capitalize">
                Condition: {props.data.description}
              </li>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {Math.round(props.data.wind)}m/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
