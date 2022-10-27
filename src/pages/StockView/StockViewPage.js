import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { StockChart } from "../../Components/Chart/StockChart";
import { Panel } from "../../Components/InfoPanel/Panel";
import styles from "../../App.module.css";
import Split from "react-split";
import { searchContext } from "../../Helper/searchContext";

export const StockViewPage = () => {
  const { searchTicker } = useContext(searchContext);
  const navigate = useNavigate();

  // Navigate to the landing page if the searchTicker is empty when the page mounts
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
