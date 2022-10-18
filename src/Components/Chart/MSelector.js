import React from "react";
import styles from "./ChartStyles.module.css";

export const MSelector = (props) => {
  const handleClick = () => {
    props.setMetric(props.name);
  };

  return (
    <button
      className={props.selected ? styles.mSelectorSelected : styles.mSelector}
      onClick={handleClick}
    >
      {props.name.toUpperCase()}
    </button>
  );
};
