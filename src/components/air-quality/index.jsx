import styles from "./index.module.css";
import Leaf from "../../assets/leaf.png";

const AirQuality = ({ className }) => {
  return (
    <section className={`${styles.mainContainer} ${className}`}>
      <div className={styles.title}>
        <img src={Leaf} alt="leaf image" />
        <p>Air quality</p>
      </div>

      <div className={styles.quality}>
        <span>Good</span>
        <div className={styles.highestOrLower}>
          <span>18</span>
        </div>
      </div>
      <div className={styles.statistics}>
        <div className="number">
          <p>12.9</p>
          <small>PM2.5</small>
        </div>
        <div className="number">
          <p>12.9</p>
          <small>PM10</small>
        </div>
        <div className="number">
          <p>2.1</p>
          <small>SO₂</small>
        </div>
        <div className="number">
          <p>1.4</p>
          <small>NO₂</small>
        </div>
        <div className="number">
          <p>21.2</p>
          <small>O₃</small>
        </div>
        <div className="number">
          <p>0.7</p>
          <small>CO</small>
        </div>
      </div>
    </section>
  );
};

export default AirQuality;
