import React from "react";
import { useGetSumData } from "../../../Hooks/useGetSumData";

import styles from "../PanelStyles.module.css";

export const StockDataCard = () => {
  const { sumData } = useGetSumData();
  let color;
  if (sumData) {
    color =
      sumData?.price.regularMarketChangePercent.raw >= 0 ? "green" : "red";
  }

  return (
    <div className={styles.panelBody}>
      <div className={styles.panelSubHeader}>
        <p>{sumData?.symbol}</p>
        <p>-</p>
        <p>{sumData?.quoteType.exchange}</p>
      </div>
      <div className={styles.panelSubHeader}>
        <p>{sumData?.summaryProfile.sector}</p>
        <p>-</p>
        <p>{sumData?.summaryProfile.industry}</p>
      </div>
      <div className={styles.summaryStats}>
        <h3> {sumData?.price.regularMarketPrice.fmt} </h3>
        <p>{sumData?.price.currency}</p>
        <p style={{ color: color }}>{sumData?.price.regularMarketChange.fmt}</p>
        <p style={{ color: color }}>
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
  );
};
