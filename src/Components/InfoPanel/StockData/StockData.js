import React, { useState } from "react";
import { StockDataCard } from "./StockDataCard";
import { StockNewsCard } from "./StockNewsCard";
import { StockDataHeader } from "./StockDataHeader";
import { SpinnerCircular } from "spinners-react";
import { CardToggle } from "./CardToggle";
import styles from "../PanelStyles.module.css";
import { useGetLogo } from "../../../Hooks/useGetLogo";

export const StockData = (props) => {
  const { logoIsLoading } = useGetLogo();
  const [selected, setSelected] = useState("data");

  return (
    <div className={styles.panelDataDiv}>
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
          <StockDataHeader
            favorites={props.favorites}
            setFavorites={props.setFavorites}
          />
          <CardToggle selected={selected} setSelected={setSelected} />
          {selected === "data" ? (
            <StockDataCard
              favorites={props.favorites}
              setFavorites={props.setFavorites}
            />
          ) : (
            <StockNewsCard />
          )}
        </div>
      )}
    </div>
  );
};
