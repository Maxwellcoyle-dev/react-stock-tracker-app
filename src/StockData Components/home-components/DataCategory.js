import React from "react";
import { DataPoint } from "./DataPoint";
import styles from "../HomePageStyles.module.css";

export const DataCategory = (props) => {
  return (
    <div
      className={`${styles.dataCard} ${props.className}`}
      key={props.uniqueId}
    >
      <h2> {props.label} </h2>
      {props.dataPoints.map((item) => {
        return (
          <DataPoint
            key={item.uniqueId}
            label={item.label}
            value={item.value}
            type={props.type}
          />
        );
      })}
    </div>
  );
};
