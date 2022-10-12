import React from "react";
import styles from "../HomePageStyles.module.css";

export const DataPoint = (props) => {
  return (
    <div className={styles.dataPoint} key={props.dataPointKey}>
      <h4> {props.label} </h4>
      {props.type === "data" ? (
        <h3> {props.value} </h3>
      ) : (
        <p> {props.value} </p>
      )}
    </div>
  );
};
