import React, { useState } from "react";
import MainChart from "./MainChart";
import styles from "./ChartStyles.module.css";
import { SpinnerCircular } from "spinners-react";
import { useGetPriceData } from "../../Hooks/useGetPriceData";
import { RangeSelector } from "./RangeSelector";
import { ChartHeader } from "./ChartHeader";

export const StockChart = () => {
  const [metric, setMetric] = useState("high");
  const { priceDataLoading } = useGetPriceData();

  return (
    <div className={styles.chartSection}>
      <div className={styles.chartArea}>
        <ChartHeader metric={metric} setMetric={setMetric} />
        {priceDataLoading ? (
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
            <MainChart metric={metric} setMetric={setMetric} />
          </>
        )}
      </div>
    </div>
  );
};
