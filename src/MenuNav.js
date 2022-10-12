import React, { useEffect } from "react";
import { MenuNavItem } from "./MenuNav Components/MenuNavItem";
import styles from "./App.module.css";
import { BiHomeAlt, BiStats, BiNews } from "react-icons/bi";

export const MenuNav = (props) => {
  useEffect(() => {
    props.setPageView("home");
  }, []);

  const pages = [
    {
      name: "home",
      icon: <BiHomeAlt className={styles.icon} />,
    },
    {
      name: "data",
      icon: <BiStats className={styles.icon} />,
    },
    {
      name: "news",
      icon: <BiNews className={styles.icon} />,
    },
  ];

  return (
    <div className={styles.menuNav}>
      {pages.map((page) => {
        return (
          <MenuNavItem
            key={page.name}
            page={page.name}
            pageView={props.pageView}
            setPageView={props.setPageView}
            className={styles.menuNavItem}
            icon={page.icon}
          />
        );
      })}
    </div>
  );
};
