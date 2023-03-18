import styles from "./index.module.css";
import Time from "../../assets/time.png";
import SunChart from "../../assets/sun-chart.svg";

const SunsetTime = ({ className }) => {
  return (
    <section className={`${styles.mainContainer} ${className}`}>
      <div className={styles.sunsetIndicator}>
        <img src={Time} alt="sunset time image" />
        <p>Sunset time</p>
      </div>
      <div className={styles.sunsetTimeContainer}>
        <div className={styles.sunChart}>
          <div className={styles.chart}>
            <img src={SunChart} alt="sunChart" />
            <p>06:00 AM</p>
          </div>
        </div>
      </div>
      <div className={styles.time}>
        <time className="sunrise">06:00 am</time>
        <time className="sunset">06:00 pm</time>
      </div>
    </section>
  );
};

export default SunsetTime;
