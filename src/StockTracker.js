import React, { useState } from "react";
import { StockSearch } from "./StockSearch";
import { MenuNav } from "./MenuNav";
import { StockData } from "./StockData";
import { LandingPage } from "./StockTracker Landing Page Components/LandingPage";
import styles from "./App.module.css";

export const StockTracker = () => {
  // Used to get the search parameter for fetching stock data
  const [searchParam, setSearchParam] = useState("");

  // Used to set the current page view (Home / Data / News) also used for MenuNav class changes
  const [pageView, setPageView] = useState("");

  // Get the name of the current stock
  const [stockName, setStockName] = useState("");

  return (
    <>
      <StockSearch
        setSearchParam={setSearchParam}
        searchParam={searchParam}
        stockName={stockName}
      />
      {searchParam !== "" && (
        <MenuNav setPageView={setPageView} pageView={pageView} />
      )}
      {searchParam === "" ? (
        <LandingPage />
      ) : (
        <StockData
          pageView={pageView}
          searchParam={searchParam}
          setStockName={setStockName}
          stockName={stockName}
        />
      )}
    </>
  );
};
