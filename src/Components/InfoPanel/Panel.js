import React, { useContext, useState } from "react";
import styles from "./PanelStyles.module.css";
import { searchContext } from "../../Helper/Context";
import { CurrentStockData } from "./CurrentStockData";

import { Favorites } from "./Favorites";

export const Panel = () => {
  const { isLoading, summaryData } = useContext(searchContext);

  const [favorites, setFavorites] = useState([]);

  return (
    <div className={styles.panel}>
      <Favorites favorites={favorites} setFavorites={setFavorites} />

      <CurrentStockData favorites={favorites} setFavorites={setFavorites} />
    </div>
  );
};
