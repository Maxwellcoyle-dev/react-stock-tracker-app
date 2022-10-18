import React, { useContext } from "react";
import { searchContext } from "../../Helper/Context";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import styles from "./PanelStyles.module.css";

export const CurrentStockDataHeader = (props) => {
  const { searchParam, summaryData, searchParamLogo } =
    useContext(searchContext);

  const addFav = (event) => {
    event.preventDefault();

    props.setFavorites([
      ...props.favorites,
      {
        symbol: summaryData?.symbol,
        price: summaryData?.price.regularMarketPrice.fmt,
        color: summaryData?.price.regularMarketChange.raw > 0 ? "green" : "red",
        regMarketChange: summaryData?.price.regularMarketChange.fmt,
        regMarketChangePercent:
          summaryData?.price.regularMarketChangePercent.fmt,
        id: Math.random() * 1000,
      },
    ]);
  };

  return (
    <div className={styles.panelDataHeader}>
      <a
        href={summaryData?.summaryProfile.website}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={searchParamLogo}
          alt="Company logo, provided by CUF Services 'https://companyurlfinder.com'"
        />
      </a>
      <h3>{summaryData?.quoteType.shortName}</h3>
      <AiOutlineStar className={styles.star} onClick={addFav} />
    </div>
  );
};
