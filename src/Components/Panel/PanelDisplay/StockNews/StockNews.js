import React, { useContext, useEffect, useState } from "react";
import { searchContext } from "../../../../Helper/searchContext";
import { useGetAutoComplete } from "../../../../Hooks/useGetAutoComplete";
import { SpinnerCircular } from "spinners-react";
import styles from "../../PanelStyles.module.css";

export const StockNews = () => {
  const { autoCompleteData, autoCompleteStatus } = useGetAutoComplete();
  const { searchTicker } = useContext(searchContext);

  const [heroStory, setHeroStory] = useState([]);
  const [subStories, setSubStories] = useState([]);

  useEffect(() => {
    if (autoCompleteData) {
      const newsData = autoCompleteData.news;
      let hero = [];
      let stories = [];

      for (let i = 0; i < newsData.length; i++) {
        if (hero.length < 1 && newsData[i].thumbnail.resolutions[1]) {
          hero.push(newsData[i]);
          setHeroStory(newsData[i]);
        } else {
          stories.push(newsData[i]);
          setSubStories(stories);
        }
      }
    }
  }, [autoCompleteData, searchTicker]);

  if (autoCompleteStatus === "loading") {
    return (
      <div className={styles.stockNews}>
        <div className={styles.spinner}>
          <SpinnerCircular
            size={50}
            thickness={100}
            speed={100}
            color="#3F6EFF"
            secondaryColor="rgba(0, 0, 0, 0.44)"
          />
        </div>
      </div>
    );
  }

  if (autoCompleteStatus === "success") {
    return (
      <div className={styles.stockNews}>
        <h3>Headlines for {searchTicker}</h3>
        <div className={styles.heroStory}>
          <hr className={styles.storyDivider} />
          <p>{heroStory?.publisher?.toUpperCase()}</p>
          <a
            className={styles.imageLink}
            href={heroStory?.link}
            target="_blank"
          >
            <img src={heroStory?.thumbnail?.resolutions[0]?.url} />
          </a>
          <a
            className={styles.titleLink}
            href={heroStory?.link}
            target="_blank"
          >
            <h4>{heroStory?.title}</h4>
          </a>
        </div>
        {subStories.map((story) => {
          if (story) {
            return (
              <div key={story.uuid} className={styles.newsItem}>
                <hr className={styles.storyDivider} />
                <p>{story?.publisher.toUpperCase()}</p>
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
    );
  }
};
