import React, { useContext } from "react";
import { searchContext } from "../../Helper/searchContext";
import { RSelector } from "./RSelector.js";
import styles from "./ChartStyles.module.css";

export const RangeSelector = () => {
  const { stockChartParams } = useContext(searchContext);

  const selectors = [
    {
      range: "1mo",
      interval: "1d",
      id: Math.random() * 1000,
      selected: stockChartParams.range === "1mo" ? true : false,
    },
    {
      range: "3mo",
      interval: "1d",
      id: Math.random() * 1000,
      selected: stockChartParams.range === "3mo" ? true : false,
    },
    {
      range: "6mo",
      interval: "1d",
      id: Math.random() * 1000,
      selected: stockChartParams.range === "6mo" ? true : false,
    },
    {
      range: "1y",
      interval: "1d",
      id: Math.random() * 1000,
      selected: stockChartParams.range === "1y" ? true : false,
    },
    {
      range: "2y",
      interval: "1d",
      id: Math.random() * 1000,
      selected: stockChartParams.range === "2y" ? true : false,
    },
    {
      range: "5y",
      interval: "1d",
      id: Math.random() * 1000,
      selected: stockChartParams.range === "5y" ? true : false,
    },
    {
      range: "max",
      interval: "1d",
      id: Math.random() * 1000,
      selected: stockChartParams.range === "max" ? true : false,
    },
  ];

  return (
    <div className={styles.rangeSelector}>
      {selectors?.map((item) => {
        return (
          <RSelector
            range={item.range}
            key={item.id}
            selected={item.selected}
            interval={item.interval}
          />
        );
      })}
    </div>
  );
};
