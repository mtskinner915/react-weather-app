import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
    setTemperature(response.data.main.temp);
    setReady(true);
  }
  if (ready) {
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
              <span className="Degree">{Math.round(temperature)} </span>
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
  } else {
    let apiKey = "0f870e1ed1186b4aa36772e8d255cf47";
    let city = "New York";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  let weatherData = {
    city: "New York",
    date: "Monday 10:23",
    description: "Sunny",
    imgUrl: "http://openweathermap.org/img/wn/01d@2x.png",
    humidity: 73,
    wind: 10,
  };
}
