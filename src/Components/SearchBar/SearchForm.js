import React, { useContext, useState } from "react";
import { searchContext } from "../../Helper/Context";
import styles from "../../App.module.css";

export const SearchForm = () => {
  const { setSearchParam, searchParam } = useContext(searchContext);

  const [input, setInput] = useState("");
  let paramCheck = null;

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (searchParam !== paramCheck) {
      setSearchParam(input);
      paramCheck = searchParam;
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchBarForm}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Enter Stock Symbol"
        onChange={handleChange}
      />
      <button className={styles.searchSubmit} type="submit">
        Search
      </button>
    </form>
  );
};
