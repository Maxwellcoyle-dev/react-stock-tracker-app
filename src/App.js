import styles from "./App.module.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { searchContext } from "./Helper/searchContext";
import { LandingPage } from "./pages/Landing/LandingPage";
import { StockViewPage } from "./pages/StockView/StockViewPage";
import { SearchBar } from "./Components/SearchBar/SearchBar";

function App() {
  const [searchTicker, setSearchTicker] = useState("");
  const [input, setInput] = useState("tech");
  const [stockChartParams, setStockChartParams] = useState({
    interval: "1mo",
    range: "5y",
  });

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
