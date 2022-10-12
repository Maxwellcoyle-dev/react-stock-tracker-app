import React from "react";
import styles from "../DataPageStyles.module.css";

export const MSelector = (props) => {
  const handleClick = () => {
    props.setMetric(props.name);
  };

  return (
    <button
      className={props.selected ? styles.mSelectorSelected : styles.mSelector}
      key={props.key}
      onClick={handleClick}
    >
      {props.name.toUpperCase()}
    </button>
  );
};
