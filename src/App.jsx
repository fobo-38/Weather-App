import { useState } from 'react'
import clear_icon from "./icons/clear.png";
import cloud_icon from "./icons/cloud.png";
import drizzle_icon from "./icons/drizzle.png";
import humidity_icon from "./icons/humidity.png";
import rain_icon from "./icons/rain.png";
import snow_icon from "./icons/snow.png";
import './App.css'

const API = {
  key: "e791531f2b124ccc5a67a350f48b9cc7",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${API.base}weather?q=${query}&appid=${API.key}&units=imperial`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
      });
    }
  }

  const weather_desc = {
    "01d": clear_icon,
    "02d": cloud_icon,
    "03d": cloud_icon,
    "04d": cloud_icon,
    "09d": drizzle_icon,
    "10d": rain_icon,
    "11d": rain_icon,
    "13d": snow_icon,
    "50d": humidity_icon
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let month = months[d.getMonth()];
    let date = d.getDate();
    let year = d.getFullYear();

    return `${day}, ${month} ${date}, ${year}`;
  }

  return (
    <div className="background">
      <main>
        <div className="search_box">
          <input 
            type="text" 
            className="search_text" 
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyUp={search}
          ></input>
        </div>
        {(typeof weather.main != "undefined") ? (
          <div>
            <div className="location_date">
              <label className="location">{weather.name}, {weather.sys.country}</label>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="center_display">
              <label className="temp">{Math.round(weather.main.temp)}&deg;F</label>
              <img src={clear_icon} className="weather_icon" alt=""></img>
            </div>
          </div>
        ) : ('')}
        <div className="change_tab">
          <button className="change_view">8-Day</button>
        </div>
      </main>
    </div>
  )
}

export default App