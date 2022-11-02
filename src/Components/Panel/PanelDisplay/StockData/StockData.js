import React from "react";
import { StockDataCard } from "./StockDataCard";
import { StockDataHeader } from "./StockDataHeader";
import styles from "../../PanelStyles.module.css";
import { useGetSumData } from "../../../../Hooks/useGetSumData";
import { SpinnerCircular } from "spinners-react";

export const StockData = (props) => {
  const { sumStatus } = useGetSumData();

  if (sumStatus === "loading") {
    return (
      <div className={styles.stockData}>
        <SpinnerCircular
          size={50}
          thickness={100}
          speed={100}
          color="#3F6EFF"
          secondaryColor="rgba(0, 0, 0, 0.44)"
        />
      </div>
    );
  }

  if (sumStatus === "error") {
    return (
      <div className={styles.stockData}>
        <h2>Error, try another search.</h2>
      </div>
    );
  }

  if (sumStatus === "success") {
    return (
      <div className={styles.stockData}>
        <div className={styles.currentStockData}>
          <StockDataHeader
            favorites={props.favorites}
            setFavorites={props.setFavorites}
          />
          <StockDataCard
            favorites={props.favorites}
            setFavorites={props.setFavorites}
          />
        </div>
      </div>
    );
  }
};
