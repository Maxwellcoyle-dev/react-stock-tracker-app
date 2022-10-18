import React, { useContext } from "react";
import { searchContext } from "../../Helper/Context";
import { SearchBarData } from "./SearchBarData";
import { SearchForm } from "./SearchForm";
import { HomeIcon } from "./HomeIcon";
import styles from "../../App.module.css";

export const SearchBar = () => {
  const { summaryData } = useContext(searchContext);
  return (
    <div className={styles.searchBar}>
      <SearchForm />
      {summaryData && <SearchBarData />}
      <HomeIcon />
    </div>
  );
};
