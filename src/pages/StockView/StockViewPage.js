import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StockChart } from "../../Components/Chart/StockChart";
import { PanelNav } from "../../Components/Panel/PanelNav/PanelNav";
import { Panel } from "../../Components/Panel/Panel";
import styles from "../../App.module.css";
import Split from "react-split";
import { searchContext } from "../../Helper/searchContext";

export const StockViewPage = () => {
  const { searchTicker } = useContext(searchContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (searchTicker === "" || searchTicker === null) {
      navigate("/");
    }
  }, []);

  return (
    <div className={styles.stockViewPage}>
      <StockChart />
      <Panel />
    </div>
  );
};
