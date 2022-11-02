import React, { useState, useEffect } from "react";
import styles from "./PanelStyles.module.css";
import { PanelDisplay } from "./PanelDisplay/PanelDisplay";
import { PanelNav } from "./PanelNav/PanelNav";

export const Panel = () => {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = window.localStorage.getItem("STOCK_WATCH_LIST");
    if (savedFavorites) {
      return JSON.parse(savedFavorites);
    } else return [];
  });

  const [panelTab, setPanelTab] = useState(() => {
    const savedToggle = window.localStorage.getItem("PANEL_TAB_TOGGLE");
    if (savedToggle) {
      return JSON.parse(savedToggle);
    } else return "stock-data";
  });

  // Store the watch-list + PanelTab to local storage
  // Persists the users current state on refresh.
  useEffect(() => {
    window.localStorage.setItem("STOCK_WATCH_LIST", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    window.localStorage.setItem("PANEL_TAB_TOGGLE", JSON.stringify(panelTab));
  }, [panelTab]);

  return (
    <div className={styles.panel}>
      <PanelDisplay
        panelTab={panelTab}
        setPanelTab={setPanelTab}
        setFavorites={setFavorites}
        favorites={favorites}
      />
      <PanelNav panelTab={panelTab} setPanelTab={setPanelTab} />
    </div>
  );
};
