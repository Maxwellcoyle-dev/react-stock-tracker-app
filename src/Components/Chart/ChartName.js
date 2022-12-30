import React from "react";
import styles from "./ChartStyles.module.css";
import { useGetSumData } from "../../Hooks/useGetSumData";

export const ChartName = () => {
  const { sumData } = useGetSumData();

  return (
    sumData && (
      <h2 className={styles.stockName}> {sumData?.quoteType.shortName} </h2>
    )
  );
};
