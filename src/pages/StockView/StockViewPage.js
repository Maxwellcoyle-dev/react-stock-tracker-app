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
    <Split
      sizes={[75, 25]}
      minSize={100}
      expandToMin={false}
      gutterAlign="center"
      snapOffset={30}
      dragInterval={1}
      direction="horizontal"
      cursor="col-resize"
      className={styles.split}
    >
      <StockChart />
      <Panel />
    </Split>
  );
};
