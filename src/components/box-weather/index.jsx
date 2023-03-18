import styles from "./index.module.css";

import Axios from "axios";
import Icon from "../../assets/pin.svg";

import Wind from "../../assets/wind.svg";
import Humidity from "../../assets/humidity.svg";
import Rain from "../../assets/rain.svg";
import Clouds from "../../assets/clouds.png";
import Clear from "../../assets/clear.png";
import Search from "../../assets/search.svg";

import { useState } from "react";

function getWeatherIconSrc(weatherMain) {
  switch (weatherMain) {
    case "Clouds":
      return Clouds;
    case "Rain":
      return Rain;
    case "Clear":
      return Clear;
    default:
      return null;
  }
}

export default function WeatherBox({ style, className }) {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState({
    temp: 0,
    max_temp: 0,
    min_temp: 0,
    humidity: 0,
    speed: 0,
    main: "",
  });

  const getWeather = () => {
    Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=8739a24b07e1a02ab9cba3de5f3a9f31&lang=pt_br`
    ).then((response) => {
      console.log(response.data);
      setWeather({
        temp: parseInt(response.data.main.temp),
        min_temp: parseInt(response.data.main.temp_min),
        max_temp: parseInt(response.data.main.temp_max),
        humidity: response.data.main.humidity,
        speed: response.data.wind.speed,
        main: response.data.weather[0].main,
      });
    });
  };

  return (
    <div style={style} className={`${styles.container} ${className}`}>
      <div>
        <div className={styles.searchbox}>
          <img src={Icon} alt="icon" />
          <input
            type="text"
            placeholder="Enter your location"
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
          <button onClick={getWeather}>
            <img src={Search} alt="search-icon" />
          </button>
        </div>
        <div className={styles.temperature}>
          <span>{weather.temp}</span>
          <span
            style={{
              margin: "0",
              padding: "0",
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "#C2BFF4",
              gap: "4px",
            }}
          >
            °C
          </span>
        </div>

        <div className={styles.highestOrLower}>
          <span>{weather.min_temp}°</span>
          <p style={{ color: "#C2BFF4" }}>{weather.max_temp}°</p>
        </div>

        <section className={styles.statistics}>
          <div className={styles.child_statistics}>
            <img style={{ display: "flex" }} src={Wind} alt="wind-icon" />
            <div className={styles.info_container}>
              <span style={{ size: "12px" }}>Wind</span>
              <span>{weather.speed} km/h</span>
            </div>
          </div>
          <div className={styles.child_statistics}>
            <img
              style={{ display: "flex" }}
              src={Humidity}
              alt="humidity-icon"
            />
            <div className={styles.info_container}>
              <span style={{ size: "12px" }}>Humidity</span>
              <span>{weather.humidity}%</span>
            </div>
          </div>
          <div className={styles.child_statistics}>
            <img
              style={{ display: "flex" }}
              src={getWeatherIconSrc(weather.main)}
              alt=""
            />
            <div className={styles.info_container}>
              <span style={{ size: "12px" }}>Weather</span>
              <span>{weather.main}</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
