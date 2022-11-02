import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { RiProfileLine } from "react-icons/ri";
import { HiOutlineNewspaper } from "react-icons/hi";
import styles from "../PanelStyles.module.css";

export const PanelNav = (props) => {
  const handleToggle = (tab) => {
    props.setPanelTab(tab);
  };

  return (
    <div className={styles.panelNav}>
      <a
        onClick={() => handleToggle("stock-data")}
        className={
          props.panelTab === "stock-data" ? styles.selectedTab : undefined
        }
      >
        <RiProfileLine className={styles.panelNavIcon} />
      </a>
      <a
        onClick={() => handleToggle("watch-list")}
        className={
          props.panelTab === "watch-list" ? styles.selectedTab : undefined
        }
      >
        <AiOutlineStar className={styles.panelNavIcon} />
      </a>

      <a
        onClick={() => handleToggle("stock-news")}
        className={
          props.panelTab === "stock-news" ? styles.selectedTab : undefined
        }
      >
        <HiOutlineNewspaper className={styles.panelNavIcon} />
      </a>
    </div>
  );
};
