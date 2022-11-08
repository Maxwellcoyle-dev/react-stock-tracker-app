import React from "react";
import { PanelHeader } from "./PanelHeader";
import { StockData } from "./StockData/StockData";
import { Favorites } from "./Favorites/Favorites";
import { StockNews } from "./StockNews/StockNews";
import styles from "../PanelStyles.module.css";

export const PanelDisplay = (props) => {
  return (
    <div className={styles.panelDisplay}>
      <PanelHeader
        favorites={props.favorites}
        setFavorites={props.setFavorites}
      />
      {props.panelTab === "stock-data" && <StockData />}

      {props.panelTab === "favorites" && (
        <Favorites
          favorites={props.favorites}
          setFavorites={props.setFavorites}
        />
      )}

      {props.panelTab === "stock-news" && <StockNews />}
    </div>
  );
};
