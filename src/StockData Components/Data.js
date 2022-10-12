import React, { useEffect } from "react";
import { StockChart } from "./data-components/StockChart";
import styles from "./DataPageStyles.module.css";

export const Data = (props) => {
  useEffect(() => {
    if (
      props.currentSearch != props.searchParam ||
      props.checkRangeParams?.range != props.stockChartRange.range
    ) {
      props.fetchStockPriceData(props.searchParam);
      props.setCheckRangeParams({
        range: props.stockChartRange.range,
        interval: props.stockChartRange.interval,
      });
    }
  }, [props.stockChartRange, props.searchParam, props.currentSearch]);

  return (
    <div className={styles.stockChartPage}>
      <StockChart
        stockName={props.stockName}
        isLoading={props.isLoading}
        chartData={props.chartData}
        setStockChartRange={props.setStockChartRange}
        stockChartRange={props.stockChartRange}
      />
    </div>
  );
};
