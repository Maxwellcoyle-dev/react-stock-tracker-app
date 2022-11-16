import React, { useState, useEffect, useReducer } from "react";
import styles from "./PanelStyles.module.css";
import { PanelDisplay } from "./PanelDisplay/PanelDisplay";
import { PanelNav } from "./PanelNav/PanelNav";
import { FavoritesContext } from "./FavoritesContext";

const favoritesReducer = (favorites, action) => {
  switch (action.type) {
    case "added": {
      const found = favorites?.some((fav) => fav.symbol === action.symbol);
      if (!found) {
        return [
          ...favorites,
          {
            symbol: action.symbol,
            price: action.price,
            mktChange: action.mktChange,
            mktChangePercent: action.mktChangePercent,
            note: "",
            editNote: false,
            id: Math.floor(Math.random() * 1000),
          },
        ];
      } else {
        return favorites;
      }
    }
    case "deleted": {
      return favorites?.filter((fav) => fav.symbol !== action.symbol);
    }
    case "editing-note": {
      return favorites.map((f) => {
        if (f.editNote) {
          return { ...f, editNote: false };
        }
        if (f.symbol === action.symbol) {
          return { ...f, editNote: true };
        }
        return f;
      });
    }
    case "changed-note": {
      return favorites.map((f) => {
        if (f.symbol === action.symbol) {
          return { ...f, note: action.note };
        }
        return f;
      });
    }
    case "delete-note": {
      return favorites.map((f) => {
        if (f.symbol === action.symbol) {
          return { ...f, note: "", editNote: false };
        }
        return f;
      });
    }
  }
};

const initialValue = [];

export const Panel = () => {
  const [favorites, dispatch] = useReducer(favoritesReducer, initialValue);

  const [panelTab, setPanelTab] = useState(() => {
    const savedToggle = window.localStorage.getItem("PANEL_TAB_TOGGLE");
    if (savedToggle) {
      return JSON.parse(savedToggle);
    } else return "stock-data";
  });

  useEffect(() => {
    window.localStorage.setItem("PANEL_TAB_TOGGLE", JSON.stringify(panelTab));
  }, [panelTab]);

  return (
    <FavoritesContext.Provider value={{ favorites, dispatch }}>
      <div className={styles.panel}>
        <PanelDisplay panelTab={panelTab} setPanelTab={setPanelTab} />
        <PanelNav panelTab={panelTab} setPanelTab={setPanelTab} />
      </div>
    </FavoritesContext.Provider>
  );
};
