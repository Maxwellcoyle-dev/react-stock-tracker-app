import React, { useContext, useState } from "react";
import styles from "./PanelStyles.module.css";
import { searchContext } from "../../Helper/Context";
import { CurrentStockData } from "./CurrentStockData";
import { SpinnerCircular } from "spinners-react";
import { Favorites } from "./Favorites";

export const Panel = () => {
  const { isLoading, summaryData } = useContext(searchContext);

  const [favorites, setFavorites] = useState([]);

  return (
    <div className={styles.panel}>
      {favorites.length > 0 && (
        <Favorites favorites={favorites} setFavorites={setFavorites} />
      )}

      {isLoading ? (
        <div className={styles.spinner}>
          <SpinnerCircular
            size={50}
            thickness={100}
            speed={100}
            color="#3F6EFF"
            secondaryColor="rgba(0, 0, 0, 0.44)"
          />
        </div>
      ) : (
        <CurrentStockData favorites={favorites} setFavorites={setFavorites} />
      )}
    </div>
  );
};
