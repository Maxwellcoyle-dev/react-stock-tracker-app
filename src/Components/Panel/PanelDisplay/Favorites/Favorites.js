import React from "react";
import { FavItem } from "./FavItem";
import styles from "../../PanelStyles.module.css";

export const Favorites = (props) => {
  return (
    <div className={styles.favorites}>
      <h3>Watch List</h3>
      {props.favorites?.length > 0 ? (
        <div className={styles.favoriteListLabel}>
          <div className={styles.labels}>
            <h4>Sym</h4>
            <p>Price</p>
            <p>Chg</p>
            <p>Chg%</p>
          </div>
          <>
            <hr className={styles.hLine} />
          </>
        </div>
      ) : (
        <>
          <h4>Click the star to add a symbol to your Watch List.</h4>
        </>
      )}
      {props.favorites?.map((item) => {
        return (
          <FavItem
            item={item}
            favorites={props.favorites}
            setFavorites={props.setFavorites}
            key={item.id}
            id={item.id}
          />
        );
      })}
    </div>
  );
};
