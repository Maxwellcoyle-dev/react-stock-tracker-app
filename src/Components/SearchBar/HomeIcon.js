import React, { useContext } from "react";
import { FiHome } from "react-icons/fi";
import styles from "./SearchBar.module.css";
import { Link } from "react-router-dom";
import { searchContext } from "../../Helper/searchContext";

export const HomeIcon = () => {
  return (
    <div className={styles.homeNav}>
      <Link to="/">
        <FiHome className={styles.homeNavIcon} />
      </Link>
    </div>
  );
};
