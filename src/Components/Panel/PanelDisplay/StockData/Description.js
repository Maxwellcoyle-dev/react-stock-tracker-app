import React, { useEffect, useState } from "react";
import { useGetSumData } from "../../../../Hooks/useGetSumData";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import styles from "../../PanelStyles.module.css";

export const Description = () => {
  const { sumData } = useGetSumData();
  const [show, setShow] = useState(false);

  return (
    <div className={styles.descriptionDiv}>
      <h4>Business Summary</h4>
      <p className={show ? styles.showFull : styles.showPart}>
        {sumData?.summaryProfile.longBusinessSummary}
      </p>
      <div
        className={styles.iconDiv}
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? <AiOutlineUp /> : <AiOutlineDown />}
      </div>
    </div>
  );
};
