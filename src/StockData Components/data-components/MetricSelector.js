import React from "react";
import { MSelector } from "./MSelector";
import styles from "../DataPageStyles.module.css";

export const MetricSelector = (props) => {
  const metrics = [
    {
      name: "high",
      selected: props.metric === "high" ? true : false,
      id: Math.random() * 1000,
    },
    {
      name: "low",
      selected: props.metric === "low" ? true : false,
      id: Math.random() * 1000,
    },
    {
      name: "open",
      selected: props.metric === "open" ? true : false,
      id: Math.random() * 1000,
    },
    {
      name: "close",
      selected: props.metric === "close" ? true : false,
      id: Math.random() * 1000,
    },
  ];

  return (
    <div className={styles.metricSelector}>
      {metrics.map((metric) => {
        return (
          <MSelector
            name={metric.name}
            selected={metric.selected}
            key={metric.id}
            metric={props.metric}
            setMetric={props.setMetric}
          />
        );
      })}
    </div>
  );
};
