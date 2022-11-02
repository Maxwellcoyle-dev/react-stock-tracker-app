import React, { useState, useEffect, useContext } from "react";
import { useGetLogo } from "../../../../Hooks/useGetLogo";
import { useGetSumData } from "../../../../Hooks/useGetSumData";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import styles from "../../PanelStyles.module.css";
import { searchContext } from "../../../../Helper/searchContext";

export const StockDataHeader = (props) => {
  const { currentTime } = useContext(searchContext);
  const [isStarred, setIsStarred] = useState(false);
  const { logo } = useGetLogo();
  const { sumData } = useGetSumData();

  // Add a new favorite to the favorite list
  const addFav = (event) => {
    event.preventDefault();
    setIsStarred(true);
    // New Favorite item to be added
    const newFav = {
      symbol: sumData?.symbol,
      price: sumData?.price.regularMarketPrice.fmt,
      color: sumData?.price.regularMarketChange.raw > 0 ? "green" : "red",
      regMarketChange: sumData?.price.regularMarketChange.fmt,
      regMarketChangePercent: sumData?.price.regularMarketChangePercent.fmt,
      id: Math.random() * 1000,
    };
    // Check if the stock already exists in the favorites list
    const checkDuplicate = props.favorites?.some(
      (fav) => fav.symbol === sumData?.symbol
    );
    // If the stock does not already exist in the favorites list or if the favorites list is empty, then add the stock to the favorites list
    if (!checkDuplicate) {
      props.setFavorites([...props?.favorites, newFav]);
    } else if (props.favorites.length < 1) {
      props.setFavorites([...props?.favorites, newFav]);
    }
  };

  const removeFav = () => {
    props.setFavorites(
      props.favorites.filter((fav) => fav.symbol !== sumData?.symbol)
    );
  };

  useEffect(() => {
    const checkIfFav = props.favorites?.some(
      (fav) => fav.symbol === sumData?.symbol
    );
    setIsStarred(checkIfFav);
  }, [props.favorites]);

  return (
    <div className={styles.panelDataHeader}>
      <div className={styles.headerRow}>
        {isStarred ? (
          <AiFillStar className={styles.starred} onClick={removeFav} />
        ) : (
          <AiOutlineStar className={styles.star} onClick={addFav} />
        )}
        <p className={styles.time}> {currentTime} </p>
      </div>
      <div className={styles.headerRow}>
        <a
          href={sumData?.summaryProfile.website}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={logo}
            alt="Company logo, provided by CUF Services 'https://companyurlfinder.com'"
          />
        </a>
        <h3>{sumData?.symbol}</h3>
      </div>
    </div>
  );
};
