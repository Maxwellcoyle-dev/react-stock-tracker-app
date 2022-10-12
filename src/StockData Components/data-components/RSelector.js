import React from "react";
import styles from "../DataPageStyles.module.css";

export const RSelector = (props) => {
  const handleClick = () => {
    props.setStockChartRange({
      searchParam: props.searchParam,
      range: props.range,
      interval: props.interval,
    });
  };

  return (
    <button
      className={
        props.selected === true
          ? styles.selectorButtonSelected
          : styles.selectorButton
      }
      key={props.uniqueId}
      onClick={handleClick}
    >
      {props.range}
    </button>
  );
};
