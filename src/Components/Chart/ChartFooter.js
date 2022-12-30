import React, { useContext, useEffect } from "react";
import { searchContext } from "../../Helper/searchContext";
import styles from "./ChartStyles.module.css";

export const ChartFooter = () => {
  const { currentTime } = useContext(searchContext);
  return (
    <div className={styles.chartFooter}>
      <p> {currentTime} </p>
    </div>
  );
};
