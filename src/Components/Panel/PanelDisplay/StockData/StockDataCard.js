import React from "react";
import { useGetLogo } from "../../../../Hooks/useGetLogo";
import { useGetSumData } from "../../../../Hooks/useGetSumData";
import styles from "../../PanelStyles.module.css";

export const StockDataCard = () => {
  const { sumData } = useGetSumData();
  const { logo } = useGetLogo();
  let color = sumData?.price.regularMarketChangePercent.raw >= 0;

  return (
    <>
      <div className={styles.stockDataHeader}>
        <a
          href={sumData?.summaryProfile.website}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={logo}
            alt="Company logo, provided by CUF Services 'https://companyurlfinder.com'"
          />
        </a>
        <h3>{sumData?.quoteType.shortName}</h3>
      </div>

      <div className={styles.stockDataBody}>
        <div className={styles.stockDataSubHeader}>
          <p>{sumData?.symbol}</p>
          <p>-</p>
          <p>{sumData?.quoteType.exchange}</p>
        </div>
        <div className={styles.stockDataSubHeader}>
          <p>{sumData?.summaryProfile.sector}</p>
          <p>-</p>
          <p>{sumData?.summaryProfile.industry}</p>
        </div>
        <div className={styles.summaryStats}>
          <h3> {sumData?.price.regularMarketPrice.fmt} </h3>
          <p>{sumData?.price.currency}</p>
          <p className={color ? styles.green : styles.red}>
            {sumData?.price.regularMarketChange.fmt}
          </p>
          <p className={color ? styles.green : styles.red}>
            ({sumData?.price.regularMarketChangePercent.fmt})
          </p>
        </div>
        <div className={styles.keyStats}>
          <h4>Key Stats</h4>
          <p className={styles.statLabel}>VOLUME</p>
          <p>{sumData?.price.regularMarketVolume.fmt}</p>
          <p className={styles.statLabel}>AVE. VOLUME (10)</p>
          <p>{sumData?.price.averageDailyVolume10Day.fmt}</p>
          <p className={styles.statLabel}>MARKET CAP.</p>
          <p>{sumData?.summaryDetail.marketCap?.fmt}</p>
          <p className={styles.statLabel}>DIVIDEND YIELD (FY)</p>
          <p>{sumData?.summaryDetail.dividendYield?.fmt}</p>
          <p className={styles.statLabel}>SOCIAL SCORE</p>
          <p>{sumData?.esgScores.socialScore?.fmt}</p>
        </div>
      </div>
    </>
  );
};
