import React from "react";
import styles from "../DataPageStyles.module.css";

export const ChartName = (props) => {
  return <h2 className={styles.chartName}> {props.stockName} </h2>;
};
