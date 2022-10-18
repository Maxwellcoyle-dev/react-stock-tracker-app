import React, { useContext, useEffect } from "react";
import styles from "./PanelStyles.module.css";
import { searchContext } from "../../Helper/Context";
import { PanelData } from "./PanelData";
import { SpinnerCircular } from "spinners-react";

export const Panel = () => {
  const { searchParam, setSummaryData, isLoading } = useContext(searchContext);

  return (
    <div className={styles.panel}>
      {isLoading ? (
        <>
          {console.log(isLoading)}
          <div className={styles.spinner}>
            <SpinnerCircular
              size={50}
              thickness={100}
              speed={100}
              color="#3F6EFF"
              secondaryColor="rgba(0, 0, 0, 0.44)"
            />
          </div>
        </>
      ) : (
        <PanelData />
      )}
    </div>
  );
};
