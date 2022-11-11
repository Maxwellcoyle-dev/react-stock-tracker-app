import React, { useContext, useEffect, useState } from "react";
import { searchContext } from "../../../../Helper/searchContext";
import { useGetAutoComplete } from "../../../../Hooks/useGetAutoComplete";
import styles from "../../PanelStyles.module.css";

export const StockNews = () => {
  const { autoCompleteData } = useGetAutoComplete();
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
          console.log(heroStory);
        } else {
          stories.push(newsData[i]);
          setSubStories(stories);
          console.log(subStories);
        }
      }
    }
  }, [autoCompleteData]);

  return autoCompleteData ? (
    <div className={styles.stockNews}>
      <h3>Headlines for {searchTicker}</h3>
      <div className={styles.heroStory}>
        <hr className={styles.storyDivider} />
        <p>{heroStory?.publisher?.toUpperCase()}</p>
        <a className={styles.imageLink} href={heroStory?.link} target="_blank">
          <img src={heroStory?.thumbnail?.resolutions[0].url} />
        </a>
        <a className={styles.titleLink} href={heroStory?.link} target="_blank">
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
  ) : (
    <div>Error</div>
    // add error handling
  );
};
