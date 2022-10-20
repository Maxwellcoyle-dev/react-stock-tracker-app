import React, { useContext } from "react";
import { searchContext } from "../../Helper/Context";

import { SpinnerCircular } from "spinners-react";
import styles from "./PanelStyles.module.css";

import { StockDataCard } from "./StockDataCard";
import { StockNewsCard } from "./StockNewsCard";

export const CurrentStockData = (props) => {
  const { summaryData, isLoading } = useContext(searchContext);

  return (
    <div className={styles.panelDataDiv}>
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
        <div className={styles.currentStockData}>
          <StockDataCard
            favorites={props.favorites}
            setFavorites={props.setFavorites}
          />
          <StockNewsCard />
        </div>
      )}
    </div>
  );
};
