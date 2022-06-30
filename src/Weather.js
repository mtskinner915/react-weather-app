import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: "Monday 10:23",
      description: response.data.weather[0].description,
      imgUrl: "http://openweathermap.org/img/wn/01d@2x.png",
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      temperature: response.data.msin.temp,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <h2>{weatherData.city}</h2>
        <ul>
          <li className="day-time">Last updated: {weatherData.date}</li>
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
              <span className="Degree">
                {Math.round(weatherData.temperature)}{" "}
              </span>
              <span className="Units">°C | °F</span>
            </div>
            <div className="column">
              <ul className="Weather-details">
                <li className="text-capitalize">
                  Condition: {weatherData.description}
                </li>
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
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
