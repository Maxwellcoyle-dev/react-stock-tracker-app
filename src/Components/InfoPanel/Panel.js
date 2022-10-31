import React, { useState, useEffect } from "react";
import styles from "./PanelStyles.module.css";
import { StockData } from "./StockData/StockData";
import { Favorites } from "./Favorites/Favorites";

export const Panel = () => {
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("watch-list")) || [];
  });

  useEffect(() => {
    const savedFavorites = localStorage.getItem("watch-list");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  useEffect(() => {
    if (favorites !== []) {
      localStorage.setItem("watch-list", JSON.stringify(favorites));
    }
  }, [favorites]);

  return (
    <div className={styles.panel}>
      <Favorites favorites={favorites} setFavorites={setFavorites} />
      <StockData favorites={favorites} setFavorites={setFavorites} />
    </div>
  );
};
