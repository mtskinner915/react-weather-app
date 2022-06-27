import logo from "./logo.svg";
import "./App.css";
import Form from "./Form";
import "./Form.css";
import Weather from "./Weather";
import "./Weather.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>WEATHER</h1>
        <div className="Weather-app-wrapper">
          <div className="Weather-app">
            <Form />
            <Weather />
          </div>
        </div>
        <div className="App-link">
          <a
            className="Git-link"
            href="https://reactjs.org"
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
