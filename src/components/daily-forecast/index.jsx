import React from "react";
import styles from "./index.module.css";

import Clouds from "../../assets/clouds.png";
import Clear from "../../assets/clear.png";
import Rain from "../../assets/rain.svg";

const DailyForecast = ({ className }) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <div className={styles.card_wrap}>
        <div className={styles.cards}>
          <span>Tomorrow</span>
          <img
            style={{ display: "flex", width: "64px", height: "64px" }}
            src={Clouds}
            alt=""
          />
          <div className={styles.highestOrLower}>
            <span>10°</span>
            <p style={{ color: "#C2BFF4" }}>5°</p>
          </div>
        </div>
        <div className={styles.cards}>
          <span>Friday </span>
          <img
            style={{ display: "flex", width: "64px", height: "64px" }}
            src={Clear}
            alt=""
          />
          <div className={styles.highestOrLower}>
            <span>10°</span>
            <p style={{ color: "#C2BFF4" }}>5°</p>
          </div>
        </div>
        <div className={styles.cards}>
          <span>Saturday </span>
          <img
            style={{ display: "flex", width: "64px", height: "64px" }}
            src={Rain}
            alt=""
          />
          <div className={styles.highestOrLower}>
            <span>10°</span>
            <p style={{ color: "#C2BFF4" }}>5°</p>
          </div>
        </div>
        <div className={styles.cards}>
          <span>Sunday </span>
          <img
            style={{ display: "flex", width: "64px", height: "64px" }}
            src={Rain}
            alt=""
          />
          <div className={styles.highestOrLower}>
            <span>10°</span>
            <p style={{ color: "#C2BFF4" }}>5°</p>
          </div>
        </div>
        <div className={styles.cards}>
          <span>Monday </span>
          <img
            style={{ display: "flex", width: "64px", height: "64px" }}
            src={Rain}
            alt=""
          />
          <div className={styles.highestOrLower}>
            <span>10°</span>
            <p style={{ color: "#C2BFF4" }}>5°</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyForecast;
