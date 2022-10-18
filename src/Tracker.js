import React, { useState, useEffect } from "react";
import { searchContext } from "./Helper/Context";
import { SearchBar } from "./Components/SearchBar/SearchBar";
import { StockViewPage } from "./pages/StockView/StockViewPage";
import { LandingPage } from "./pages/Landing/LandingPage";
import Axios from "axios";

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const Tracker = () => {
  // Used to get the search parameter for fetching stock data
  const [searchParam, setSearchParam] = useState("");

  const [stockChartParams, setStockChartParams] = useState({
    interval: "1mo",
    range: "5y",
  });

  const [chartData, setChartData] = useState(null);
  const [summaryData, setSummaryData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState("");

  const apiSecret = process.env.REACT_APP_API_SECRET;

  useEffect(() => {
    if (searchParam !== "") {
      setIsLoading(true);

      const options = {
        method: "GET",
        url: "https://yh-finance.p.rapidapi.com/stock/v2/get-summary",
        params: { symbol: searchParam },
        headers: {
          "X-RapidAPI-Key": `${apiSecret}`,
          "X-RapidAPI-Host": "yh-finance.p.rapidapi.com",
        },
      };

      Axios.request(options)
        .then(function (response) {
          setSummaryData(response.data);
        })
        .catch(function (error) {
          console.error(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [searchParam]);

  useEffect(() => {
    if (searchParam !== "") {
      const options = {
        method: "GET",
        url: `https://yh-finance.p.rapidapi.com/stock/v3/get-chart`,
        params: {
          interval: stockChartParams.interval,
          symbol: searchParam,
          range: stockChartParams.range,
          includePrePost: "false",
          useYfid: "true",
          includeAdjustedClose: "true",
          events: "capitalGain,div,split",
        },
        headers: {
          "X-RapidAPI-Key": `${apiSecret}`,
          "X-RapidAPI-Host": "yh-finance.p.rapidapi.com",
        },
      };

      Axios.request(options)
        .then((response) => {
          console.log("fired fetch Chart Data statement");
          let newData = [];
          for (
            let i = 0;
            i < response.data.chart.result[0].timestamp.length;
            i++
          ) {
            newData = [
              ...newData,
              {
                time: new Intl.DateTimeFormat("en-US").format(
                  response.data.chart.result[0].timestamp[i] * 1000
                ),
                high: response.data.chart.result[0].indicators.quote[0].high[i],
                low: response.data.chart.result[0].indicators.quote[0].low[i],
                open: response.data.chart.result[0].indicators.quote[0].open[i],
                close:
                  response.data.chart.result[0].indicators.quote[0].close[i],
              },
            ];
          }
          setChartData(newData);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [searchParam, stockChartParams]);

  return (
    <searchContext.Provider
      value={{
        searchParam,
        setSearchParam,
        stockChartParams,
        setStockChartParams,
        chartData,
        setChartData,
        summaryData,
        setSummaryData,
        isLoading,
        setIsLoading,
        page,
        setPage,
      }}
    >
      <SearchBar />
      {searchParam === "" ? <LandingPage /> : <StockViewPage />}
    </searchContext.Provider>
  );
};
