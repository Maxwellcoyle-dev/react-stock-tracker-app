import React, { useState } from "react";
import {
  ResponsiveContainer,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
} from "recharts";
import styles from "../DataPageStyles.module.css";
import { ChartHeader } from "./ChartHeader";
import { SpinnerCircularSplit } from "spinners-react";

export const StockChart = (props) => {
  const [metric, setMetric] = useState("high");

  return (
    <div className={styles.responsiveContainer}>
      <ChartHeader
        stockName={props.stockName}
        setStockChartRange={props.setStockChartRange}
        stockChartRange={props.stockChartRange}
        metric={metric}
        setMetric={setMetric}
      />
      {props.isLoading ? (
        <SpinnerCircularSplit
          className={styles.spinner}
          size={80}
          thickness={150}
          speed={100}
          color="rgba(63, 110, 255, 1)"
          secondaryColor="rgba(0, 0, 0, 0.44)"
        />
      ) : (
        <ResponsiveContainer width="100%" aspect={16 / 8}>
          <AreaChart
            data={props.chartData}
            margin={{
              top: 40,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <defs>
              <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3F6EFF" stopOpacity={0.4} />
                <stop offset="75%" stopColor="#3F6EFF" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <Area dataKey={metric} stroke="#3F6EFF" fill="url(#color)" />

            <XAxis dataKey="time" axisLine={false} tickLine={false} />

            <YAxis
              dataKey="high"
              axisLine={false}
              tickLine={false}
              tickCount={5}
              tickFormatter={(number) => `$${number.toFixed(2)}`}
            />

            <Tooltip content={<CustomTooltip />} />

            <CartesianGrid opacity={0.1} vertical={false} />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

function CustomTooltip({ active, payload, label }) {
  if (active) {
    return (
      <div className={styles.tooltip}>
        <h4> {label} </h4>
        <p> ${payload[0].value.toFixed(2)} USD </p>
      </div>
    );
  }
  return null;
}
