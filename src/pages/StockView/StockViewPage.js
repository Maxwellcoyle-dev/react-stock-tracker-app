import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { StockChart } from "../../Components/Chart/StockChart";
import { Panel } from "../../Components/Panel/Panel";
import styles from "../../App.module.css";
import { searchContext } from "../../Helper/searchContext";

export const StockViewPage = () => {
  const { searchTicker } = useContext(searchContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (searchTicker === "" || searchTicker === null) {
      navigate("/");
    }
  }, [navigate, searchTicker]);

  return (
    <div className={styles.stockViewPage}>
      <StockChart />
      <Panel />
    </div>
  );
};
