import React, { useState, useEffect, useContext } from "react";
import { useGetSumData } from "../../../Hooks/useGetSumData";
import { BiListPlus, BiListMinus } from "react-icons/bi";
import styles from "../PanelStyles.module.css";
import { searchContext } from "../../../Helper/searchContext";
import { FavoritesContext } from "../FavoritesContext";

export const PanelHeader = () => {
  const { currentTime } = useContext(searchContext);
  const [isStarred, setIsStarred] = useState(false);
  const [marketOpen, setMarketOpen] = useState(false);
  const { sumData } = useGetSumData();
  const { dispatch, favorites } = useContext(FavoritesContext);

  // Set isStarred to true or false
  useEffect(() => {
    const starred = favorites?.some(
      (fav) => fav.symbol === sumData?.price.symbol
    );
    setIsStarred(starred);
  }, [sumData, favorites]);

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
        <BiListMinus
          className={styles.starred}
          onClick={() => {
            dispatch({
              type: "deleted",
              symbol: sumData?.price.symbol,
            });
          }}
        />
      ) : (
        <BiListPlus
          className={styles.star}
          onClick={() => {
            dispatch({
              type: "added",
              symbol: sumData?.price.symbol,
              price: sumData?.price.regularMarketPrice.raw,
              mktChange: sumData?.price.regularMarketChange.fmt,
              mktChangePercent: sumData?.price.regularMarketChangePercent.fmt,
            });
          }}
        />
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
