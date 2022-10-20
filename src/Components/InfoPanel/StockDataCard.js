import React from "react";
import { StockData } from "./StockData";
import { CurrentStockDataHeader } from "./CurrentStockDataHeader";

export const StockDataCard = (props) => {
  return (
    <>
      <CurrentStockDataHeader
        favorites={props.favorites}
        setFavorites={props.setFavorites}
      />

      <StockData />
    </>
  );
};
