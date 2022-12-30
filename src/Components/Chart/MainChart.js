import React, { useEffect, useState } from "react";
import { useGetPriceData } from "../../Hooks/useGetPriceData";
import Chart from "react-apexcharts";

const MainChart = () => {
  const { priceData } = useGetPriceData();
  const [series, setSeries] = useState([
    {
      data: [],
    },
  ]);

  useEffect(() => {
    setSeries([
      {
        data: priceData,
      },
    ]);
  }, [priceData]);

  const options = {
    chart: {
      type: "candlestick",
      foreColor: "white",
      height: "100%",
      background: "#333333",
      fontFamily:
        '"Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif',
    },
    theme: {
      mode: "dark",
    },
    xaxis: {
      type: "datetime",
      tooltip: {
        enabled: true,
      },
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      onDatasetHover: true,
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: "greenyellow",
          downward: "orangered",
        },
      },
    },
  };

  return (
    <Chart
      options={options}
      series={series}
      type="candlestick"
      width="100%"
      height="70%"
    />
  );
};

export default MainChart;
