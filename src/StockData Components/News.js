import React, { useEffect } from "react";
import { SpinnerCircularSplit } from "spinners-react";
import styles from "./NewsPageStyles.css";

export const News = (props) => {
  useEffect(() => {
    if (props.currentSearch != props.searchParam) {
      props.fetchStockNews(props.searchParam);
    }
  }, [props.searchParam]);

  return (
    <div>
      {props.isLoading ? (
        <SpinnerCircularSplit
          className={styles.spinner}
          size={80}
          thickness={150}
          speed={100}
          color="rgba(63, 110, 255, 1)"
          secondaryColor="rgba(0, 0, 0, 0.44)"
        />
      ) : (
        <h1 style={{ color: "white", marginTop: "4rem" }}>News Page</h1>
      )}
    </div>
  );
};
