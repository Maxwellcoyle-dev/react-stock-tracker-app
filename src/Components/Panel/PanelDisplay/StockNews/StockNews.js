import React from "react";
import { useGetAutoComplete } from "../../../../Hooks/useGetAutoComplete";
import styles from "../../PanelStyles.module.css";

export const StockNews = () => {
  const { autoCompleteData } = useGetAutoComplete();

  return (
    <div className={styles.stockNews}>
      {autoCompleteData?.news.map((story) => {
        if (story.thumbnail?.resolutions[0].width > 140) {
          return (
            <div
              key={story.uuid}
              style={{
                backgroundImage: `url(${story.thumbnail?.resolutions[0].url})`,
              }}
              className={styles.newsStory}
            >
              <a href={story?.link} target="_blank">
                <div className={styles.storyDivOverlay}>
                  <p>FROM {story?.publisher.toUpperCase()}</p>
                  <h3>{story?.title}</h3>
                </div>
              </a>
            </div>
          );
        }
      })}
    </div>
  );
};
