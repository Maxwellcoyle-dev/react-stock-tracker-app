import React, { useState } from "react";
import styles from "./PanelStyles.module.css";
import { StockData } from "./StockData/StockData";
import { Favorites } from "./Favorites/Favorites";

export const Panel = () => {
  const [favorites, setFavorites] = useState([]);

  return (
    <div className={styles.panel}>
      <Favorites favorites={favorites} setFavorites={setFavorites} />
      <StockData favorites={favorites} setFavorites={setFavorites} />
    </div>
  );
};
