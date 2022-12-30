import React from "react";
import { RangeSelector } from "./RangeSelector";
import styles from "./ChartStyles.module.css";
import { useGetSumData } from "../../Hooks/useGetSumData";

export const ChartHeader = () => {
  const { sumData } = useGetSumData();
  return (
    <div className={styles.chartHeader}>
      <h2>{sumData?.quoteType.longName}</h2>
      <RangeSelector />
    </div>
  );
};
