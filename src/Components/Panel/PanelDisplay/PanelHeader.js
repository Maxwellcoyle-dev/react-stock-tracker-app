import React, { useState, useEffect, useContext } from "react";
import { useGetSumData } from "../../../Hooks/useGetSumData";
import { BiListPlus, BiListMinus } from "react-icons/bi";
import styles from "../PanelStyles.module.css";
import { searchContext } from "../../../Helper/searchContext";

export const PanelHeader = (props) => {
  const { currentTime } = useContext(searchContext);
  const [isStarred, setIsStarred] = useState(false);
  const [marketOpen, setMarketOpen] = useState(false);
  const { sumData } = useGetSumData();

  // Add a new favorite to the favorite list
  const addFav = (event) => {
    event.preventDefault();
    setIsStarred(true);
    // New Favorite item to be added

    const newFav = {
      symbol: sumData?.symbol,
      price: sumData?.price.regularMarketPrice.fmt,
      regMarketChange: sumData?.price.regularMarketChange.fmt,
      regMarketChangePercent: sumData?.price.regularMarketChangePercent.fmt,
      id: Math.random() * 1000,
    };
    // Check if the stock already exists in the favorites list
    const checkDuplicate = props.favorites.some(
      (fav) => fav.symbol === sumData?.symbol
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
      props.favorites.filter((fav) => fav.symbol !== sumData?.symbol)
    );
  };

  useEffect(() => {
    const checkIfFav = props.favorites.some(
      (fav) => fav.symbol === sumData?.symbol
    );
    setIsStarred(checkIfFav);
  }, [props.favorites]);

  // Determine if the market is open or closed
  useEffect(() => {
    const open = new Date();
    open.setHours(9, 30, 0);
    const openTime = open.toLocaleTimeString();

    const close = new Date();
    close.setHours(16, 0, 0);
    const closeTime = close.toLocaleTimeString();

    if (currentTime >= openTime && currentTime < closeTime) {
      setMarketOpen(true);
    }
  }, [currentTime]);

  return (
    <div className={styles.panelHeader}>
      {isStarred ? (
        <BiListMinus className={styles.starred} onClick={removeFav} />
      ) : (
        <BiListPlus className={styles.star} onClick={addFav} />
      )}
      <div className={styles.marketTimeDiv}>
        <p>{currentTime}</p>
        {marketOpen ? (
          <p className={styles.green}>MARKET OPEN</p>
        ) : (
          <p className={styles.red}>MARKET CLOSED</p>
        )}
      </div>
    </div>
  );
};
