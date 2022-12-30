import React, { useContext } from "react";
import { searchContext } from "../../Helper/searchContext";
import styles from "./ChartStyles.module.css";

export const RSelector = (props) => {
  const { setStockChartParams, stockChartParams } = useContext(searchContext);

  const handleClick = () => {
    setStockChartParams({
      interval: props.interval,
      range: props.range,
    });
    console.log(stockChartParams);
  };

  return (
    <button
      className={
        props.selected === true
          ? styles.selectorButtonSelected
          : styles.selectorButton
      }
      onClick={handleClick}
    >
      {props.range}
    </button>
  );
};
