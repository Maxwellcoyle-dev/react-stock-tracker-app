import React, { useEffect, useState } from "react";
import { StockDataCard } from "./StockDataCard";
import { SpinnerCircular } from "spinners-react";
import styles from "../../PanelStyles.module.css";
import { Description } from "./Description";
import { useGetSumData } from "../../../../Hooks/useGetSumData";

export const StockData = (props) => {
  const { sumStatus } = useGetSumData();
  const [selected, setSelected] = useState("data");

  useEffect(() => {
    console.log(sumStatus);
  }, [sumStatus]);

  return (
    <div className={styles.stockData}>
      {sumStatus === "loading" ? (
        <div className={styles.spinner}>
          <SpinnerCircular
            size={50}
            thickness={100}
            speed={100}
            color="#3F6EFF"
            secondaryColor="rgba(0, 0, 0, 0.44)"
          />
        </div>
      ) : sumStatus === "success" ? (
        <div className={styles.currentStockData}>
          <StockDataCard
            favorites={props.favorites}
            setFavorites={props.setFavorites}
          />
          <Description />
        </div>
      ) : (
        console.log(sumStatus)
      )}
    </div>
  );
};
