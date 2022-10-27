import React from "react";
import styles from "../PanelStyles.module.css";

export const CardToggle = (props) => {
  return (
    <div className={styles.cardToggleDiv}>
      <button
        className={props.selected === "data" ? styles.selected : null}
        onClick={() => props.setSelected("data")}
      >
        Stock Data
      </button>
      <button
        className={props.selected === "news" ? styles.selected : null}
        onClick={() => props.setSelected("news")}
      >
        Stock News
      </button>
    </div>
  );
};
