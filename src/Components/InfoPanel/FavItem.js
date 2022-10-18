import React, { useContext } from "react";
import { searchContext } from "../../Helper/Context";
import styles from "./PanelStyles.module.css";
import { CgRemove } from "react-icons/cg";

export const FavItem = (props) => {
  const { summaryData, setSearchParam } = useContext(searchContext);

  const searchFav = () => {
    setSearchParam(props.item.symbol);
  };

  const removeFav = (taskId) => {
    props.setFavorites(props.favorites.filter((fav) => fav.id !== taskId));
  };

  return (
    <div className={styles.favoriteItem}>
      <div className={styles.favoriteItemData} onClick={searchFav}>
        <h4>{props.item.symbol}</h4>
        <p>{props.item.price}</p>
        <p style={{ color: props.item.color }}>{props.item.regMarketChange}</p>
        <p style={{ color: props.item.color }}>
          {props.item.regMarketChangePercent}
        </p>
      </div>
      <CgRemove
        className={styles.removeIcon}
        onClick={() => removeFav(props.id)}
      />
    </div>
  );
};
