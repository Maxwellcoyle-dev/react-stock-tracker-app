import React from "react";
import { StockChart } from "../../Components/Chart/StockChart";
import { Panel } from "../../Components/InfoPanel/Panel";
import styles from "../../App.module.css";
import Split from "react-split";

export const StockViewPage = () => {
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
