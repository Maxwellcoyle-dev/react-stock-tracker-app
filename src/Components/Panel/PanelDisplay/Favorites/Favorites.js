import React, { useContext, useEffect, useState } from "react";
import { FavItem } from "./FavItem";
import styles from "../../PanelStyles.module.css";
import { FavoritesContext } from "../../FavoritesContext";

export const Favorites = () => {
  const { favorites, dispatch } = useContext(FavoritesContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editTicker, setEditTicker] = useState("");
  const [noteText, setNoteText] = useState("");

  useEffect(() => {
    favorites.map((fav) => {
      if (fav.editNote) {
        setEditTicker(fav.symbol);
        setIsEditing(fav.editNote);
        setNoteText(fav.note);
      }
    });
  }, [favorites]);

  if (!isEditing) {
    return (
      <div className={styles.favorites}>
        <h3>Watch List</h3>
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
        <div>
          {favorites.map((fav) => {
            return (
              <FavItem
                symbol={fav.symbol}
                price={fav.price}
                mktChange={fav.mktChange}
                mktChangePercent={fav.mktChangePercent}
                note={fav.note}
                editNote={fav.editNote}
                isEditing={isEditing}
                setIsEditing={setIsEditing}
              />
            );
          })}
        </div>
      </div>
    );
  }

  if (isEditing) {
    return (
      <div className={styles.addNote}>
        <h3>{editTicker} Notes</h3>
        <textarea
          value={noteText}
          placeholder="add note here"
          onChange={(e) => {
            dispatch({
              type: "changed-note",
              note: e.target.value,
              symbol: editTicker,
            });
          }}
        />
        <div className={styles.buttonDiv}>
          <button
            className={styles.active}
            onClick={() => {
              setIsEditing(false);
              dispatch({
                type: "delete-note",
                symbol: editTicker,
              });
            }}
          >
            Delete
          </button>
          <button
            className={noteText === "" ? styles.disabled : styles.primary}
            onClick={() => {
              if (noteText !== "") {
                setIsEditing(false);
                dispatch({
                  type: "editing-note",
                  symbol: editTicker,
                  editNote: noteText,
                });
              }
            }}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
};
