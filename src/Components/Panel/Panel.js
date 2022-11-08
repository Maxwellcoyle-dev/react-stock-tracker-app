import React, { useState, useEffect } from "react";
import styles from "./PanelStyles.module.css";
import { PanelNav } from "./PanelNav/PanelNav";
import { PanelDisplay } from "./PanelDisplay/PanelDisplay";

export const Panel = () => {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = window.localStorage.getItem("STOCK_WATCH_LIST");
    if (savedFavorites) {
      return JSON.parse(savedFavorites);
    } else return [];
  });

  const [panelTab, setPanelTab] = useState("");

  useEffect(() => {
    window.localStorage.setItem("STOCK_WATCH_LIST", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    if (panelTab === "") {
      setPanelTab("stock-data");
    }
  }, []);

  return (
    <div className={styles.panel}>
      <PanelDisplay
        favorites={favorites}
        setFavorites={setFavorites}
        setPanelTab={setPanelTab}
        panelTab={panelTab}
      />
      <PanelNav setPanelTab={setPanelTab} panelTab={panelTab} />
    </div>
  );
};
