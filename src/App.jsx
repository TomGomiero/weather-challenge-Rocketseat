import styles from "./index.module.css";
import WeatherBox from "./components/box-weather";
import AirQuality from "./components/air-quality";
import DailyForecast from "./components/daily-forecast";
import SunsetTime from "./components/sunset-time";

import "./index.css";

function App() {
  return (
    <div className="App">
      <div className={styles.parent}>
        <WeatherBox className={styles.div1} />
        <AirQuality className={styles.div2} />
        <SunsetTime className={styles.div3} />
        <DailyForecast className={styles.div4} />
      </div>
    </div>
  );
}

export default App;
