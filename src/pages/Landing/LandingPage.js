import React, { useEffect, useContext } from "react";
import { searchContext } from "../../Helper/Context";
import heroImage from "../../Assets/heroImage.svg";
import styles from "../../App.module.css";

export const LandingPage = () => {
  const { setPage } = useContext(searchContext);

  useEffect(() => {
    setPage("landing");
  }, []);

  return (
    <div className={styles.landingPage}>
      <h1>A Simple Stock Research Tool Built With React.js</h1>
      <h3>To start researching, enter a stock symbol.</h3>
      <img
        style={{ paddingTop: "6rem" }}
        src={heroImage}
        alt="landing page image is an illustration of a forest"
      />
    </div>
  );
};
