import React, { useContext, useState } from "react";
import { searchContext } from "../../Helper/searchContext";
import styles from "./SearchBar.module.css";
import { useNavigate } from "react-router-dom";
import { AutoComplete } from "./AutoComplete";

export const SearchForm = () => {
  const { setSearchTicker, searchTicker, input, setInput } =
    useContext(searchContext);
  const [display, setDisplay] = useState(false);

  let paramCheck = null;
  const navigate = useNavigate();

  // Set the input to the value of the input feild
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  // Submit the form + update searchTicker and Navigate to the stockview page
  const handleSubmit = (event) => {
    event.preventDefault();

    if (searchTicker !== paramCheck) {
      setDisplay(false);
      setSearchTicker(input);
      paramCheck = searchTicker;
      navigate("/stockview");
    }
  };

  return (
    <div className={styles.searchBarFormContainer}>
      <form onSubmit={handleSubmit} className={styles.searchBarForm}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Tech"
          onChange={handleChange}
          onClick={() => setDisplay(!display)}
        />
        <button className={styles.searchSubmit} type="submit">
          Search
        </button>
      </form>
      {display && <AutoComplete display={display} setDisplay={setDisplay} />}
    </div>
  );
};
