import React from "react";
import { RangeSelector } from "./RangeSelector";
import { MetricSelector } from "./MetricSelector";
import { ChartName } from "./ChartName";
import styles from "./ChartStyles.module.css";

export const ChartHeader = (props) => {
  return (
    <div className={styles.chartHeader}>
      <ChartName />
      <MetricSelector metric={props.metric} setMetric={props.setMetric} />
      <RangeSelector />
    </div>
  );
};
