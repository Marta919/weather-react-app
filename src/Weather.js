import React, {useState} from "react";
import axios from "axios";
export default function Weather () {

    let [city, setCity] = useState("");
  let [weather, setWeather] = useState({});
  let [loaded, setLoaded] = useState(false);
  
  let time = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[time.getDay()];

function date(time) {
  let minutes = time.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let hours = time.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
 
  return `${day}, ${hours}:${minutes}`;
 
}

  function showWeather(response) {

    setLoaded(true);
    setWeather({
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`
    });

  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e8cf93c11b2e03971616c05c042f7ad8&units=metric`;
    axios.get(url).then(showWeather);
  }
  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search for a City..."
        onChange={updateCity}
      />
      <button type="submit">Search </button>
    </form>
  );
  if (loaded) {
    return (
      <div>
        {form}
          <h3> {date(time)} </h3>
          <h2> {weather.city} </h2>
          <div className="row">
        <div className="col-4" className="weatherTemperature">
        <span className="icona">  <img src= {weather.icon} className="imagine" /> </span>
         <span className="temp"> {Math.round(weather.temperature)}°C  </span>
           </div>
         </div>
        <div className="col-6">
        <ul className="list">
          <li className="Description"> Description: {weather.description}</li>
          <li className="Humidity">Humidity: {Math.round(weather.humidity)} %</li>
          <li className="Windspeed">Wind Speed: {Math.round(weather.wind)} km/h</li>
          
        </ul>
        </div>
        </div>
        
       
    );
  } else {
    return form;
  }
}
