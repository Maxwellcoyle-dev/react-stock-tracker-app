import React, { useContext } from "react";
import { searchContext } from "../../Helper/Context";
import styles from "./ChartStyles.module.css";

export const ChartName = () => {
  const { summaryData } = useContext(searchContext);

  return (
    <h2 className={styles.stockName}> {summaryData?.quoteType.shortName} </h2>
  );
};
