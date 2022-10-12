import React from "react";
import { RSelector } from "./RSelector.js";
import styles from "../DataPageStyles.module.css";

export const RangeSelector = (props) => {
  const selectors = [
    {
      range: "1mo",
      interval: "1d",
      id: Math.random() * 1000,
      selected: props.stockChartRange.range === "1mo" ? true : false,
    },
    {
      range: "3mo",
      interval: "1wk",
      id: Math.random() * 1000,
      selected: props.stockChartRange.range === "3mo" ? true : false,
    },
    {
      range: "6mo",
      interval: "1wk",
      id: Math.random() * 1000,
      selected: props.stockChartRange.range === "6mo" ? true : false,
    },
    {
      range: "1y",
      interval: "1mo",
      id: Math.random() * 1000,
      selected: props.stockChartRange.range === "1y" ? true : false,
    },
    {
      range: "2y",
      interval: "1mo",
      id: Math.random() * 1000,
      selected: props.stockChartRange.range === "2y" ? true : false,
    },
    {
      range: "max",
      interval: "1mo",
      id: Math.random() * 1000,
      selected: props.stockChartRange.range === "max" ? true : false,
    },
  ];

  return (
    <div className={styles.rangeSelector}>
      {selectors?.map((item) => {
        return (
          <RSelector
            range={item.range}
            uniqueId={item.id}
            selected={item.selected}
            interval={item.interval}
            setStockChartRange={props.setStockChartRange}
          />
        );
      })}
    </div>
  );
};
