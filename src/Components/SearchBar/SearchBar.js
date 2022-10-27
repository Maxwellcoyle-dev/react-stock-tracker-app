import React from "react";
import { SearchBarData } from "./SearchBarData";
import { SearchForm } from "./SearchForm";
import { HomeIcon } from "./HomeIcon";
import styles from "./SearchBar.module.css";
import { useLocation } from "react-router-dom";

export const SearchBar = () => {
  const location = useLocation();

  return (
    <div className={styles.searchBar}>
      <SearchForm />
      {location.pathname !== "/" && <SearchBarData />}
      <HomeIcon />
    </div>
  );
};
