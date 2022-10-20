import React, { useContext } from "react";
import { searchContext } from "../../Helper/Context";
import { CurrentStockDataHeader } from "./CurrentStockDataHeader";
import { SpinnerCircular } from "spinners-react";
import styles from "./PanelStyles.module.css";

export const CurrentStockData = (props) => {
  const { summaryData, isLoading } = useContext(searchContext);
  let color =
    summaryData?.price.regularMarketChangePercent.raw >= 0 ? "green" : "red";

  return (
    <div className={styles.panelDataDiv}>
      {isLoading ? (
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
        <>
          <CurrentStockDataHeader
            favorites={props.favorites}
            setFavorites={props.setFavorites}
          />

          <div className={styles.panelBody}>
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
          </div>
        </>
      )}
    </div>
  );
};
