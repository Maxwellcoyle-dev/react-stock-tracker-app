import React, { useContext } from "react";
import { searchContext } from "../../Helper/Context";

export const StockNewsCard = () => {
  const { autoOptions, setAutoOptions } = useContext(searchContext);
  return (
    <div>
      {autoOptions?.news.map((story) => {
        return (
          <div key={story.uuid}>
            <h3 href={story.link} target="_blank">
              {story?.title}
            </h3>
          </div>
        );
      })}
    </div>
  );
};
