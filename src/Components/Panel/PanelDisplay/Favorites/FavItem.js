import React, { useContext, useEffect, useState } from "react";
import styles from "../../PanelStyles.module.css";
import { CgRemove } from "react-icons/cg";
import { FiEdit } from "react-icons/fi";
import { FavoritesContext } from "../../FavoritesContext";

export const FavItem = (props) => {
  const { dispatch } = useContext(FavoritesContext);

  return (
    <div className={styles.favoriteItem}>
      <div className={styles.favoriteItemData}>
        <h4>{props.symbol}</h4>
        <p>{props.price.toFixed(2)}</p>
        <p className={props.mktChange >= 0 ? styles.green : styles.red}>
          {props.mktChange}
        </p>
        <p className={props.mktChange >= 0 ? styles.green : styles.red}>
          {props.mktChangePercent}
        </p>
      </div>
      <div className={styles.iconButtonContainer}>
        <CgRemove
          className={styles.favItemIconRed}
          onClick={() => {
            dispatch({
              type: "deleted",
              symbol: props.symbol,
            });
          }}
        />
      </div>
      <div className={styles.iconButtonContainer}>
        <FiEdit
          className={styles.favItemIconGreen}
          onClick={() =>
            dispatch({
              type: "editing-note",
              symbol: props.symbol,
              editNote: props.editNote,
            })
          }
        />
      </div>
    </div>
  );
};
