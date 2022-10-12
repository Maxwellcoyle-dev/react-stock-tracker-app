import React, { useState } from "react";

export const SearchBar = (props) => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.setSearchParam(searchInput);
  };

  return (
    <form className={props.formClassName} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search Stock Tickers"
        className={props.searchClassName}
        onChange={handleChange}
      />
    </form>
  );
};
