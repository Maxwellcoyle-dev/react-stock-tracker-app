import React from "react";
import { useGetSumData } from "../../Hooks/useGetSumData";
import styles from "./SearchBar.module.css";

export const SearchBarData = () => {
  const { sumData, sumStatus } = useGetSumData();

  if (sumStatus === "success") {
    return (
      <div className={styles.searchBarData}>
        <h2 className={styles.symbol}>{sumData?.quoteType.symbol}</h2>

        <h2
          className={
            sumData?.price.regularMarketChangePercent.raw >= 0
              ? styles.green
              : styles.red
          }
        >
          ${sumData?.financialData.currentPrice.fmt}
        </h2>
        <p
          className={
            sumData?.price.regularMarketChangePercent.raw >= 0
              ? styles.green
              : styles.red
          }
        >
          {sumData?.price.regularMarketChangePercent.fmt}
        </p>
      </div>
    );
  }
};
