import React from "react";
import { StockData } from "./StockData/StockData";
import { Favorites } from "./Favorites/Favorites";
import { StockNews } from "./StockNews/StockNews";
import styles from "../PanelStyles.module.css";

export const PanelDisplay = (props) => {
  if (props.panelTab === "" || props.panelTab === "stock-data") {
    return (
      <div className={styles.panelDisplay}>
        <StockData
          favorites={props.favorites}
          setFavorites={props.setFavorites}
        />
      </div>
    );
  } else if (props.panelTab === "watch-list") {
    return (
      <div className={styles.panelDisplay}>
        <Favorites
          favorites={props.favorites}
          setFavorites={props.setFavorites}
        />
      </div>
    );
  } else if (props.panelTab === "stock-news") {
    return (
      <div className={styles.panelDisplay}>
        <StockNews />
      </div>
    );
  }
};
