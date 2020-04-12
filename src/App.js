import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Hanoi" />
        <footer className="bottom-github">
          <small>
            <a
              href="https://github.com/MadalenaAf/SheCodesPlus-WeatherApp"
              target="_blank"
            >
              Open source code{" "}
            </a>
            , by Madalena Ferreira
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
