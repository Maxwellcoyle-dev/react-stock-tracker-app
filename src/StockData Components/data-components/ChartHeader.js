import React from "react";
import { RangeSelector } from "./RangeSelector";
import { MetricSelector } from "./MetricSelector";
import { ChartName } from "./ChartName";
import styles from "../DataPageStyles.module.css";

export const ChartHeader = (props) => {
  return (
    <div className={styles.chartHeader}>
      <ChartName stockName={props.stockName} />
      <MetricSelector metric={props.metric} setMetric={props.setMetric} />
      <RangeSelector
        setStockChartRange={props.setStockChartRange}
        stockChartRange={props.stockChartRange}
      />
    </div>
  );
};
