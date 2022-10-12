import React, { useState, useEffect } from "react";
import { Home } from "./StockData Components/Home";
import { Data } from "./StockData Components/Data";
import { News } from "./StockData Components/News";
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

  // HOME PAGE - Stock Overview Data Fetching
  const [stockOverviewData, setStockOverviewData] = useState(null);
  const [currentSearch, setCurrentSearch] = useState("");

  const fetchStockOverview = (param) => {
    setCurrentSearch(props.searchParam);
    setIsLoading(true);

    const options = {
      method: "GET",
      url: "https://yh-finance.p.rapidapi.com/stock/v2/get-summary",
      params: { symbol: param },
      headers: {
        "X-RapidAPI-Key": "0327aa61b5msh24f690832314c8ep152dcajsn4076cff7ccf6",
        "X-RapidAPI-Host": "yh-finance.p.rapidapi.com",
      },
    };

    Axios.request(options)
      .then((response) => {
        console.log("fetch fired");
        console.log(response.data);
        setStockOverviewData(response.data);
        props.setStockName(response.data.quoteType.longName);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    console.log("Component Mounted");
    if (currentSearch != props.searchParam) {
      fetchStockOverview(props.searchParam);
    }
  }, [props.searchParam]);

  // DATA PAGE - Fetch Stock Price Data for Chart
  // Store data from fetchStockPriceData
  const [chartData, setChartData] = useState(null);
  // Price Range and interval values
  const [stockChartRange, setStockChartRange] = useState({
    range: "1y",
    interval: "1mo",
  });
  const [checkRangeParams, setCheckRangeParams] = useState(null);

  const fetchStockPriceData = (param) => {
    setCurrentSearch(props.searchParam);
    setIsLoading(true);
    console.log("fetch fired");
    const options = {
      method: "GET",
      url: "https://yh-finance.p.rapidapi.com/stock/v3/get-chart",
      params: {
        interval: stockChartRange.interval,
        symbol: param,
        range: stockChartRange.range,
        includePrePost: "false",
        useYfid: "true",
        includeAdjustedClose: "true",
        events: "capitalGain,div,split",
      },
      headers: {
        "X-RapidAPI-Key": "0327aa61b5msh24f690832314c8ep152dcajsn4076cff7ccf6",
        "X-RapidAPI-Host": "yh-finance.p.rapidapi.com",
      },
    };

    Axios.request(options)
      .then(function (response) {
        console.log(response.data);
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
              close: response.data.chart.result[0].indicators.quote[0].close[i],
            },
          ];
        }
        setChartData(newData);
      })
      .catch(function (error) {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // NEWS PAGE - Fetch Stock news Data
  // Store data from fetchStockNewsData
  const [stockNewsData, setStockNewsData] = useState(null);

  const fetchStockNews = () => {
    setIsLoading(true);
    const options = {
      method: "GET",
      url: "https://bloomberg-market-and-financial-news.p.rapidapi.com/market/auto-complete",
      params: { query: props.searchParam },
      headers: {
        "X-RapidAPI-Key": "0327aa61b5msh24f690832314c8ep152dcajsn4076cff7ccf6",
        "X-RapidAPI-Host": "bloomberg-market-and-financial-news.p.rapidapi.com",
      },
    };

    Axios.request(options)
      .then(function (response) {
        console.log(response.data);
        setStockNewsData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div>
      {home && (
        <Home
          searchParam={props.searchParam}
          stockName={props.stockName}
          fetchStockOverview={fetchStockOverview}
          stockOverviewData={stockOverviewData}
          setStockOverviewData={setStockOverviewData}
          currentSearch={currentSearch}
          isLoading={isLoading}
        />
      )}
      {data && (
        <Data
          searchParam={props.searchParam}
          stockName={props.stockName}
          fetchStockPriceData={fetchStockPriceData}
          isLoading={isLoading}
          chartData={chartData}
          currentSearch={currentSearch}
          stockChartRange={stockChartRange}
          setStockChartRange={setStockChartRange}
          checkRangeParams={checkRangeParams}
          setCheckRangeParams={setCheckRangeParams}
        />
      )}
      {news && (
        <News
          searchParam={props.searchParam}
          fetchStockNews={fetchStockNews}
          isLoading={isLoading}
          currentSearch={currentSearch}
        />
      )}
    </div>
  );
};
