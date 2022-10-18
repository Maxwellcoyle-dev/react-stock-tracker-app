import React from "react";
import { FiHome } from "react-icons/fi";
import styles from "../../App.module.css";

export const HomeIcon = () => {
  return (
    <div className={styles.homeNav}>
      <a href="../../pages/Landing">
        <FiHome className={styles.homeNavIcon} />
      </a>
    </div>
  );
};
