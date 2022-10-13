import React from "react";
import { SearchBar } from "./StockSearch Components/SearchBar";
import { CurrentStock } from "./StockSearch Components/CurrentStock";
import styles from "./App.module.css";

export const StockSearch = (props) => {
  return (
    <div className={styles.topBar}>
      <SearchBar
        setSearchParam={props.setSearchParam}
        formClassName={styles.searchBarForm}
        searchClassName={styles.searchBar}
      />
      <CurrentStock
        className={styles.currentStock}
        searchParam={props.searchParam}
        stockName={props.stockName}
      />
    </div>
  );
};
