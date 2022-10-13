import React from "react";
import heroImage from "./assets/heroImage.svg";
import styles from "../App.module.css";

export const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
      <h1>A Simple Stock Research Tool Built With React.js</h1>
      <h3>To start researching, enter a stock symbol.</h3>
      <img src={heroImage} />
    </div>
  );
};
