import React from "react";
import Weather from "./Weather";
import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="container">
       <h1>Weather App </h1> 
       <Weather />
      
       <a className="Open" href="https://github.com/Marta919?tab=repositories" target="_blank" rel="noreferrer"> Coded by Marta D'Orazio </a>
       </div>
      </header>
    </div>
  );
}

export default App;

