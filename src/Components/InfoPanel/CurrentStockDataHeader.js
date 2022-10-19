import React, { useContext, useState, useEffect } from "react";
import { searchContext } from "../../Helper/Context";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import styles from "./PanelStyles.module.css";

export const CurrentStockDataHeader = (props) => {
  const { summaryData, searchParamLogo } = useContext(searchContext);
  const [isStarred, setIsStarred] = useState(false);

  // Add a new favorite to the favorite list
  const addFav = (event) => {
    event.preventDefault();
    setIsStarred(true);
    // New Favorite item to be added
    const newFav = {
      symbol: summaryData?.symbol,
      price: summaryData?.price.regularMarketPrice.fmt,
      color: summaryData?.price.regularMarketChange.raw > 0 ? "green" : "red",
      regMarketChange: summaryData?.price.regularMarketChange.fmt,
      regMarketChangePercent: summaryData?.price.regularMarketChangePercent.fmt,
      id: Math.random() * 1000,
    };
    // Check if the stock already exists in the favorites list
    const checkDuplicate = props.favorites.some(
      (fav) => fav.symbol === summaryData?.symbol
    );
    // If the stock does not already exist in the favorites list or if the favorites list is empty, then add the stock to the favorites list
    if (!checkDuplicate) {
      props.setFavorites([...props.favorites, newFav]);
    } else if (props.favorites.length < 1) {
      props.setFavorites([...props.favorites, newFav]);
    }
  };

  const removeFav = () => {
    props.setFavorites(
      props.favorites.filter((fav) => fav.symbol !== summaryData?.symbol)
    );
  };

  useEffect(() => {
    const checkIfFav = props.favorites.some(
      (fav) => fav.symbol === summaryData?.symbol
    );
    setIsStarred(checkIfFav);
  }, [props.favorites]);

  return (
    <div className={styles.panelDataHeader}>
      <a
        href={summaryData?.summaryProfile.website}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={searchParamLogo}
          alt="Company logo, provided by CUF Services 'https://companyurlfinder.com'"
        />
      </a>
      <h3>{summaryData?.quoteType.shortName}</h3>
      {isStarred ? (
        <AiFillStar className={styles.star} onClick={removeFav} />
      ) : (
        <AiOutlineStar className={styles.star} onClick={addFav} />
      )}
    </div>
  );
};
