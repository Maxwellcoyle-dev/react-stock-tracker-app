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
        <div className={styles.searchBarLogoDiv}>
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
          <h2>{sumData?.quoteType.symbol}</h2>
        </div>

        <div className={styles.searchBarPriceDiv}>
          <h2
            style={
              sumData?.price.regularMarketChangePercent.raw >= 0
                ? { color: "green" }
                : { color: "red" }
            }
          >
            ${sumData?.financialData.currentPrice.fmt}
          </h2>
          <p
            style={
              sumData?.price.regularMarketChangePercent.raw >= 0
                ? { color: "green" }
                : { color: "red" }
            }
          >
            {sumData?.price.regularMarketChangePercent.fmt}
          </p>
        </div>
      </div>
    );
  }
};
