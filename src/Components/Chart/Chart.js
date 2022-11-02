import React, { useContext } from "react";
import { searchContext } from "../../Helper/searchContext";
import {
  ResponsiveContainer,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
} from "recharts";
import styles from "../../App.module.css";
import { useGetPriceData } from "../../Hooks/useGetPriceData";

export const Chart = (props) => {
  const { priceData, priceDataLoading } = useGetPriceData();

  return (
    <ResponsiveContainer className={styles.chart} aspect={16 / 7} height="auto">
      <AreaChart
        data={priceData}
        margin={{
          top: 30,
          right: 10,
          bottom: 0,
          left: 40,
        }}
      >
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3F6EFF" stopOpacity={0.4} />
            <stop offset="75%" stopColor="#3F6EFF" stopOpacity={0.05} />
          </linearGradient>
        </defs>
        <Area dataKey={props.metric} stroke="#3F6EFF" fill="url(#color)" />

        <XAxis dataKey="time" axisLine={false} tickLine={true} interval={10} />

        <YAxis
          dataKey={props.metric}
          axisLine={false}
          tickLine={false}
          tickCount={5}
          tickFormatter={(number) => `$${number.toFixed(2)}`}
        />

        <Tooltip
          content={<CustomTooltip />}
          wrapperStyle={{ outline: "none" }}
        />

        <CartesianGrid opacity={0.1} vertical={false} />
      </AreaChart>
    </ResponsiveContainer>
  );
};

function CustomTooltip({ active, payload, label }) {
  if (active) {
    return (
      <div className={styles.tooltip}>
        <h4> {label} </h4>
        {payload && <p> ${payload[0]?.value?.toFixed(2)} </p>}
      </div>
    );
  }
  return null;
}
