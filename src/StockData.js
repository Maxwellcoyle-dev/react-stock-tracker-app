import React, { useState, useEffect } from "react";
import Axios from "axios";

export const StockData = (props) => {
  // Menu NavBar
  let home = false;
  let data = false;
  let news = false;

  props.pageView === "home" ? (home = true) : (home = false);

  props.pageView === "data" ? (data = true) : (data = false);

  props.pageView === "news" ? (news = true) : (news = false);

  // Loading
  const [isLoading, setIsLoading] = useState(false);

  // RapidApi Key
  const apiKey = process.env.REACT_APP_API_SECRET;

  // HOME PAGE - Stock Overview Data Fetching
  const [stockOverviewData, setStockOverviewData] = useState(null);
  const [currentSearch, setCurrentSearch] = useState("");

  // DATA PAGE - Fetch Stock Price Data for Chart
  // Store data from fetchStockPriceData
  const [chartData, setChartData] = useState(null);
  // Price Range and interval values
  const [stockChartRange, setStockChartRange] = useState({
    range: "1y",
    interval: "1mo",
  });
  const [checkRangeParams, setCheckRangeParams] = useState(null);

  // const fetchStockPriceData = (param) => {
  //   setCurrentSearch(props.searchParam);
  //   setIsLoading(true);
  //   console.log("fetch fired");
  //   const options = {
  //     method: "GET",
  //     url: `https://yh-finance.p.rapidapi.com/`,
  //     params: {
  //       interval: stockChartRange.interval,
  //       symbol: param,
  //       range: stockChartRange.range,
  //       includePrePost: "false",
  //       useYfid: "true",
  //       includeAdjustedClose: "true",
  //       events: "capitalGain,div,split",
  //     },
  //     headers: {
  //       "X-RapidAPI-Key": `${apiKey}`,
  //       "X-RapidAPI-Host": "yh-finance.p.rapidapi.com",
  //     },
  //   };

  //   Axios.request(options)
  //     .then(function (response) {
  //       console.log(response.data);
  //       let newData = [];
  //       for (
  //         let i = 0;
  //         i < response.data.chart.result[0].timestamp.length;
  //         i++
  //       ) {
  //         newData = [
  //           ...newData,
  //           {
  //             time: new Intl.DateTimeFormat("en-US").format(
  //               response.data.chart.result[0].timestamp[i] * 1000
  //             ),
  //             high: response.data.chart.result[0].indicators.quote[0].high[i],
  //             low: response.data.chart.result[0].indicators.quote[0].low[i],
  //             open: response.data.chart.result[0].indicators.quote[0].open[i],
  //             close: response.data.chart.result[0].indicators.quote[0].close[i],
  //           },
  //         ];
  //       }
  //       setChartData(newData);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // };

  return <div></div>;
};
