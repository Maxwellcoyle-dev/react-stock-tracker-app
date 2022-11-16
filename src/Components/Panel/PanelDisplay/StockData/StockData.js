import React, { useState } from "react";
import { StockDataCard } from "./StockDataCard";
import { SpinnerCircular } from "spinners-react";
import styles from "../../PanelStyles.module.css";
import { useGetLogo } from "../../../../Hooks/useGetLogo";
import { Description } from "./Description";

export const StockData = (props) => {
  const { logoIsLoading } = useGetLogo();
  const [selected, setSelected] = useState("data");

  return (
    <div className={styles.stockData}>
      {logoIsLoading ? (
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
          <Description />
        </div>
      )}
    </div>
  );
};
