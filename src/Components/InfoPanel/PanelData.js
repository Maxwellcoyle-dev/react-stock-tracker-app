import React, { useContext } from "react";
import { searchContext } from "../../Helper/Context";
import styles from "./PanelStyles.module.css";

export const PanelData = () => {
  const { summaryData } = useContext(searchContext);
  let color =
    summaryData?.price.regularMarketChangePercent.raw >= 0 ? "green" : "red";

  return (
    <>
      <div className={styles.panelHeader}>
        <a
          href={summaryData?.summaryProfile.website}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={`https://api.companyurlfinder.com/logo/${summaryData?.summaryProfile.website.slice(
              12
            )}`}
            alt="Company logo, provided by CUF Services 'https://companyurlfinder.com'"
          />
        </a>
        <h3>{summaryData?.quoteType.shortName}</h3>
      </div>
      <div className={styles.panelSubHeader}>
        <p>{summaryData?.symbol}</p>
        <p>-</p>
        <p>{summaryData?.quoteType.exchange}</p>
      </div>
      <div className={styles.panelSubHeader}>
        <p>{summaryData?.summaryProfile.sector}</p>
        <p>-</p>
        <p>{summaryData?.summaryProfile.industry}</p>
      </div>
      <div className={styles.summaryStats}>
        <h3> {summaryData?.price.regularMarketPrice.fmt} </h3>
        <p>{summaryData?.price.currency}</p>
        <p style={{ color: color }}>
          {summaryData?.price.regularMarketChange.fmt}
        </p>
        <p style={{ color: color }}>
          ({summaryData?.price.regularMarketChangePercent.fmt})
        </p>
      </div>
      <div className={styles.keyStats}>
        <h4>Key Stats</h4>
        <p className={styles.statLabel}>VOLUME</p>
        <p>{summaryData?.price.regularMarketVolume.fmt}</p>
        <p className={styles.statLabel}>AVE. VOLUME (10)</p>
        <p>{summaryData?.price.averageDailyVolume10Day.fmt}</p>
        <p className={styles.statLabel}>MARKET CAP.</p>
        <p>{summaryData?.summaryDetail.marketCap?.fmt}</p>
        <p className={styles.statLabel}>DIVIDEND YIELD (FY)</p>
        <p>{summaryData?.summaryDetail.dividendYield?.fmt}</p>
        <p className={styles.statLabel}>SOCIAL SCORE</p>
        <p>{summaryData?.esgScores.socialScore?.fmt}</p>
      </div>
    </>
  );
};
