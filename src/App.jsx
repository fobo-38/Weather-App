import { useState } from 'react'
import './App.css'
const API = {
  key: "e791531f2b124ccc5a67a350f48b9cc7",
  base: "https://api.openweathermap.org/data/3.0/"
}

function App() {
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
    <>
      <div className="background">
        <main>
          <div className="search_box">
            <input type="text" className="search_text" placeholder="Search..."></input>
          </div>
          <div className="location_date">
            <label className="location">New York City, US</label>
            <label className="date">{dateBuilder(new Date())}</label>
          </div>
          <div className="center_display">
            <label className="temp">90&deg;F</label>
            <img src='src/icons/sun.png' className="weather_icon" alt="sun"></img>
          </div>
          <div className="weather">
            <label className="weather_type">Sunny</label>
          </div>
          <div className="change_tab">
            <button className="change_view">8-Day</button>
          </div>
        </main>
      </div>
    </>
  )
}

export default App