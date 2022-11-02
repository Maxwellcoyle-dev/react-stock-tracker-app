import React, { useState } from "react";
import { Chart } from "./Chart";
import { ChartHeader } from "./ChartHeader";
import styles from "./ChartStyles.module.css";
import { SpinnerCircular } from "spinners-react";
import { useGetPriceData } from "../../Hooks/useGetPriceData";
import { ChartFooter } from "./ChartFooter";

export const StockChart = () => {
  const [metric, setMetric] = useState("high");
  const { priceDataLoading } = useGetPriceData();

  return (
    <div className={styles.chartArea}>
      <ChartHeader metric={metric} setMetric={setMetric} />
      {priceDataLoading ? (
        <SpinnerCircular
          size={50}
          thickness={100}
          speed={100}
          color="#3F6EFF"
          secondaryColor="rgba(0, 0, 0, 0.44)"
        />
      ) : (
        <Chart metric={metric} setMetric={setMetric} />
      )}
    </div>
  );
};
