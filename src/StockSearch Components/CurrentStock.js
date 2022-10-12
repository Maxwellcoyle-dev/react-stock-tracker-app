import React from "react";

export const CurrentStock = (props) => {
  return (
    <>
      {props.stockName !== "" && (
        <h2 className={props.className}> {props.stockName} </h2>
      )}
    </>
  );
};
