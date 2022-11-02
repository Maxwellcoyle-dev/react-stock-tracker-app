import React, { useContext, useEffect } from "react";
import { searchContext } from "../../../../Helper/searchContext";
import { useGetAutoComplete } from "../../../../Hooks/useGetAutoComplete";
import { useGetLogo } from "../../../../Hooks/useGetLogo";
import styles from "../../PanelStyles.module.css";

export const StockNews = () => {
  const { autoCompleteData } = useGetAutoComplete();
  const { searchTicker } = useContext(searchContext);

  return autoCompleteData ? (
    <div className={styles.stockNews}>
      <h3>Headlines for {searchTicker}</h3>
      {autoCompleteData?.news.map((story) => {
        if (story.thumbnail?.resolutions[0].width > 140) {
          return (
            <div key={story.uuid} className={styles.newsItem}>
              <hr className={styles.storyDivider} />
              <p>{story?.publisher}</p>
              <a
                className={styles.titleLink}
                href={story?.link}
                target="_blank"
              >
                <h4>{story?.title}</h4>
              </a>
            </div>
          );
        }
      })}
    </div>
  ) : (
    <div>Error</div>
    // add error handling
  );
};
