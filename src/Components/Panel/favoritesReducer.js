export const favoritesReducer = (favorites, action) => {
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
