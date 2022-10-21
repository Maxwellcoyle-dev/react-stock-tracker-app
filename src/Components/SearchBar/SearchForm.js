import React, { useContext, useState, useEffect, useRef } from "react";
import { searchContext } from "../../Helper/Context";
import styles from "./SearchBar.module.css";
import Axios from "axios";

export const SearchForm = () => {
  const { setSearchParam, searchParam, autoOptions, setAutoOptions } =
    useContext(searchContext);
  const [display, setDisplay] = useState(false);

  const wrapperRef = useRef(null);

  const [input, setInput] = useState("");

  let paramCheck = null;

  // FIll the autosearch div with sample data + update
  useEffect(() => {
    if (input !== "") {
      const options = {
        method: "GET",
        url: "https://yh-finance.p.rapidapi.com/auto-complete",
        params: { q: `${input}` },
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_API_SECRET,
          "X-RapidAPI-Host": "yh-finance.p.rapidapi.com",
        },
      };

      Axios.request(options)
        .then(function (response) {
          setAutoOptions(response.data);
          console.log(response.data);
        })
        .catch(function (error) {
          console.error(error);
        })
        .finally(() => console.log(autoOptions));
    } else {
      setInput("tech");
    }
  }, [input]);

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      console.log("hadleClickOutside Fired");
      setDisplay(false);
    }
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (searchParam !== paramCheck) {
      setDisplay(false);
      setSearchParam(input);
      paramCheck = searchParam;
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
      {display && (
        <div ref={wrapperRef} className={styles.optionsDiv}>
          {autoOptions?.quotes.map((quote) => {
            if (quote.symbol.includes("=")) {
              return null;
            } else {
              return (
                <div
                  className={styles.optionItem}
                  onClick={() => {
                    setSearchParam(quote?.symbol);
                    setDisplay(false);
                  }}
                  key={Math.random() * 1000}
                >
                  <h3>{quote?.symbol}</h3>
                  <p>{quote?.shortname}</p>
                  <p>
                    {quote?.exchDisp} / {quote?.typeDisp}
                  </p>
                </div>
              );
            }
          })}
        </div>
      )}
    </div>
  );
};
