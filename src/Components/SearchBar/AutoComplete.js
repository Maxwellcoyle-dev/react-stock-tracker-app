import React, { useRef, useEffect, useContext } from "react";
import { searchContext } from "../../Helper/searchContext";
import { useGetAutoComplete } from "../../Hooks/useGetAutoComplete";
import styles from "./SearchBar.module.css";
import { useNavigate } from "react-router-dom";

export const AutoComplete = (props) => {
  const { setSearchTicker, input, setInput } = useContext(searchContext);
  const { autoCompleteData } = useGetAutoComplete();
  const wrapperRef = useRef(null);
  const navigate = useNavigate();

  // Add & Remove event listener to handle mouseclicks outside of the autcomplete div
  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Event handler to set display to false when mouseclick event happens outside of the autocomplete div
  const handleClickOutside = (event) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      props.setDisplay(!props.display);
    }
  };

  // If input is set to an empty string, reassign input to original default value which causes the useQuery to fire another request
  useEffect(() => {
    if (input === "") {
      setInput("tech");
    }
  }, []);

  return (
    <div ref={wrapperRef} className={styles.optionsDiv}>
      {autoCompleteData?.quotes.map((quote) => {
        if (quote.symbol.includes("=") || quote.symbol.includes("-")) {
          return null;
        } else {
          return (
            <div
              className={styles.optionItem}
              onClick={() => {
                setSearchTicker(quote?.symbol);
                props.setDisplay(false);
                navigate("/stockview");
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
  );
};
