import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Weather from "./Weather";
import "./Weather.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>WEATHER</h1>
        <div className="Weather-app-wrapper">
          <div className="Weather-app">
            <Weather defaultCity="New York" />
          </div>
        </div>
        <div className="App-link">
          <a
            className="Git-link"
            href="https://github.com/mtskinner915/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source code
          </a>
          <span> by Margaret Skinner</span>
        </div>
      </header>
    </div>
  );
}

export default App;
