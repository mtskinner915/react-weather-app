import React from "react";

export default function Weather() {
  let weatherData = {
    city: "New York",
    date: "Monday 10:23",
    description: "Sunny",
    imgUrl: "http://openweathermap.org/img/wn/01d@2x.png",
    humidity: 73,
    wind: 10,
  };
  return (
    <div className="Weather">
      <h2>{weatherData.city}</h2>
      <ul>
        <li className="day-time">Last updated: Monday 10:23</li>
      </ul>
      <div className="Container">
        <div className="row">
          <div className="column">
            <img
              src={weatherData.imgUrl}
              alt="sunny"
              width="70px"
              className="float-left"
            />
            <span className="Degree">25 </span>
            <span className="Units">°C | °F</span>
          </div>
          <div className="column">
            <ul className="Weather-details">
              <li>Condition: {weatherData.description}</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind}m/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
