import React, { useEffect, useContext } from "react";
import { searchContext } from "../../Helper/Context";
import { StockChart } from "../../Components/Chart/StockChart";
import { Panel } from "../../Components/InfoPanel/Panel";
import styles from "../../App.module.css";
import { SpinnerCircular } from "spinners-react";

export const StockViewPage = () => {
  const {
    searchParam,
    getChartData,
    getSummaryData,
    stockChartParams,
    isLoading,
  } = useContext(searchContext);

  useEffect(() => {
    getSummaryData();
    getChartData();
  }, [searchParam]);

  useEffect(() => {
    if (stockChartParams.range !== "1y") {
      getChartData();
    }
  }, [stockChartParams]);

  return (
    <div className={styles.stockChart}>
      <StockChart />
      <Panel />
    </div>
  );
};
