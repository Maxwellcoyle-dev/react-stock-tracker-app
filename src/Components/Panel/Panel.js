import React, { useState, useEffect, useReducer } from "react";
import styles from "./PanelStyles.module.css";
import { PanelDisplay } from "./PanelDisplay/PanelDisplay";
import { PanelNav } from "./PanelNav/PanelNav";
import { FavoritesContext } from "./FavoritesContext";
import { favoritesReducer } from "./favoritesReducer";

let initialValue;
const savedFavorites = window.localStorage.getItem("WATCH_LIST");

if (savedFavorites && savedFavorites.length >= 1) {
  initialValue = JSON.parse(savedFavorites);
} else {
  initialValue = [];
}

export const Panel = () => {
  const [favorites, dispatch] = useReducer(favoritesReducer, initialValue);

  const [panelTab, setPanelTab] = useState(() => {
    const savedToggle = window.localStorage.getItem("PANEL_TAB_TOGGLE");
    if (savedToggle) {
      return JSON.parse(savedToggle);
    } else return "stock-data";
  });

  useEffect(() => {
    window.localStorage.setItem("PANEL_TAB_TOGGLE", JSON.stringify(panelTab));
  }, [panelTab]);

  useEffect(() => {
    window.localStorage.setItem("WATCH_LIST", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <FavoritesContext.Provider value={{ favorites, dispatch }}>
      <div className={styles.panel}>
        <PanelDisplay panelTab={panelTab} setPanelTab={setPanelTab} />
        <PanelNav panelTab={panelTab} setPanelTab={setPanelTab} />
      </div>
    </FavoritesContext.Provider>
  );
};
