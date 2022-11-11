import React, { useContext, useEffect } from "react";
import { searchContext } from "../../../../Helper/searchContext";
import styles from "../../PanelStyles.module.css";
import { CgRemove } from "react-icons/cg";

export const FavItem = (props) => {
  const { setSearchTicker } = useContext(searchContext);

  const searchFav = () => {
    setSearchTicker(props.item.symbol);
  };

  const removeFav = (taskId) => {
    props.setFavorites(props.favorites.filter((fav) => fav.id !== taskId));
  };

  return (
    <div className={styles.favoriteItem}>
      <div className={styles.favoriteItemData} onClick={searchFav}>
        <h4>{props.item.symbol}</h4>
        <p>{props.item.price}</p>
        <p
          className={
            props.item.regMarketChange >= 0 ? styles.green : styles.red
          }
        >
          {props.item.regMarketChange}
        </p>
        <p
          className={
            props.item.regMarketChange >= 0 ? styles.green : styles.red
          }
        >
          {props.item.regMarketChangePercent}
        </p>
      </div>
      <div className={styles.removeIconButton}>
        <CgRemove
          className={styles.removeIcon}
          onClick={() => removeFav(props.id)}
        />
      </div>
    </div>
  );
};
