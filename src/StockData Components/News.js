import React from "react";
import { SpinnerCircularSplit } from "spinners-react";
import styles from "./NewsPageStyles.module.css";
import { NewsCard } from "./news-components/NewsCard";

export const News = (props) => {
  return (
    <>
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
        <div className={styles.newsCardSection}>
          {props.stockNewsData?.map((newsItem) => {
            return (
              <NewsCard
                stockName={props.stockName}
                title={newsItem?.title}
                image={newsItem?.thumbnail.resolutions[0].url}
                link={newsItem?.link}
                publishDate={newsItem?.providerPublishTime}
                type={newsItem?.type}
                key={newsItem?.uuid}
              />
            );
          })}
        </div>
      )}
    </>
  );
};
