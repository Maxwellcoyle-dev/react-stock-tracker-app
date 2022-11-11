import React from "react";
import { useGetLogo } from "../../Hooks/useGetLogo";
import { useGetSumData } from "../../Hooks/useGetSumData";
import styles from "./SearchBar.module.css";

export const SearchBarData = () => {
  const { sumData } = useGetSumData();
  const { logo } = useGetLogo();
  if (sumData) {
    return (
      <div className={styles.searchBarData}>
        <a
          href={sumData?.summaryProfile.website}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={logo}
            alt="company logo, provided by CUF Services 'https://companyurlfinder.com'"
          />
        </a>
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
