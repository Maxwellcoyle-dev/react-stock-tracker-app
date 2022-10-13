import React from "react";
import styles from "../NewsPageStyles.module.css";

export const NewsCard = (props) => {
  return (
    <div className={styles.newsCardDiv} key={props.key}>
      <h4 className={styles.header}> {props.stockName} News </h4>
      <a href={props.link} target="_blank">
        <img src={props.image} alt={`${props.type} ${props.title}`} />
      </a>
      <h2 className={styles.title}> {props.title} </h2>
    </div>
  );
};
