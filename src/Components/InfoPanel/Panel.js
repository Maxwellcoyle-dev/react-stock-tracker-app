import React, { useState, useEffect } from "react";
import styles from "./PanelStyles.module.css";
import { StockData } from "./StockData/StockData";
import { Favorites } from "./Favorites/Favorites";

export const Panel = () => {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = window.localStorage.getItem("STOCK_WATCH_LIST");
    if (savedFavorites) {
      return JSON.parse(savedFavorites);
    } else return [];
  });

  useEffect(() => {
    window.localStorage.setItem("STOCK_WATCH_LIST", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <div className={styles.panel}>
      <Favorites favorites={favorites} setFavorites={setFavorites} />
      <StockData favorites={favorites} setFavorites={setFavorites} />
    </div>
  );
};
