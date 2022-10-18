import React, { useState } from "react";
import { Chart } from "./Chart";
import { ChartHeader } from "./ChartHeader";
import styles from "./ChartStyles.module.css";

export const StockChart = () => {
  const [metric, setMetric] = useState("high");

  return (
    <div className={styles.chartArea}>
      <ChartHeader />
      <Chart metric={metric} setMetric={setMetric} />
    </div>
  );
};
