import React, { useContext } from "react";
import { searchContext } from "../../Helper/Context";
import styles from "../../App.module.css";

export const SearchBarData = () => {
  const { summaryData } = useContext(searchContext);

  return (
    <div className={styles.searchBarData}>
      <div className={styles.searchBarLogoDiv}>
        <a href={summaryData?.summaryProfile.website} target="_blank">
          <img
            src={`https://api.companyurlfinder.com/logo/${summaryData?.summaryProfile.website.slice(
              12
            )}`}
            alt="company logo, provided by CUF Services 'https://companyurlfinder.com'"
          />
        </a>
        <h2>{summaryData?.quoteType.symbol}</h2>
      </div>

      <div className={styles.searchBarPriceDiv}>
        <h2
          style={
            summaryData?.price.regularMarketChangePercent.raw >= 0
              ? { color: "green" }
              : { color: "red" }
          }
        >
          ${summaryData?.financialData.currentPrice.fmt}
        </h2>
        <p
          style={
            summaryData?.price.regularMarketChangePercent.raw >= 0
              ? { color: "green" }
              : { color: "red" }
          }
        >
          {summaryData?.price.regularMarketChangePercent.fmt}
        </p>
      </div>
    </div>
  );
};
