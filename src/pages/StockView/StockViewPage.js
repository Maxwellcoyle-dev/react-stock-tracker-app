import React from "react";
import { searchContext } from "../../Helper/Context";
import { StockChart } from "../../Components/Chart/StockChart";
import { Panel } from "../../Components/InfoPanel/Panel";
import styles from "../../App.module.css";

export const StockViewPage = () => {
  return (
    <div className={styles.stockChart}>
      <StockChart />
      <Panel />
    </div>
  );
};
