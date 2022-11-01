import styles from "./App.module.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { searchContext } from "./Helper/searchContext";
import { LandingPage } from "./pages/Landing/LandingPage";
import { StockViewPage } from "./pages/StockView/StockViewPage";
import { SearchBar } from "./Components/SearchBar/SearchBar";

function App() {
  const [searchTicker, setSearchTicker] = useState(() => {
    const savedParam = localStorage.getItem("CURRENT_SEARCH_PARAM");
    if (savedParam) {
      return JSON.parse(savedParam);
    } else return "";
  });
  const [input, setInput] = useState("tech");
  const [stockChartParams, setStockChartParams] = useState({
    interval: "1mo",
    range: "5y",
  });

  // Set the current search parameter to local storage to
  // make sure that refreshing the page does not delete state.

  useEffect(() => {
    localStorage.setItem("CURRENT_SEARCH_PARAM", JSON.stringify(searchTicker));
  }, [searchTicker]);

  return (
    <div className={styles.App}>
      <searchContext.Provider
        value={{
          searchTicker,
          setSearchTicker,
          stockChartParams,
          setStockChartParams,
          input,
          setInput,
        }}
      >
        <SearchBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/stockview" element={<StockViewPage />} />
        </Routes>
      </searchContext.Provider>
    </div>
  );
}

export default App;
