import React from "react";
import { DataCategory } from "./home-components/DataCategory";
import { SpinnerCircularSplit } from "spinners-react";
import styles from "./HomePageStyles.module.css";

export const Home = (props) => {
  const dataCategories = [
    {
      label: "Current Price Data",
      style: styles.dataCardOne,
      type: "data",
      uniqueId: Math.random() * 1000,
      icon: null,
      dataPoints: [
        {
          label: "Open",
          value: props.stockOverviewData?.price.regularMarketOpen.fmt,
          uniqueId: Math.random() * 1000,
        },
        {
          label: "High",
          value: props.stockOverviewData?.price.regularMarketDayHigh.fmt,
          uniqueId: Math.random() * 1000,
        },
        {
          label: "Low",
          value: props.stockOverviewData?.price.regularMarketDayLow.fmt,
          uniqueId: Math.random() * 1000,
        },
        {
          label: "Current Price",
          value: props.stockOverviewData?.price.regularMarketPrice.fmt,
          uniqueId: Math.random() * 1000,
        },
        {
          label: "Previous Close",
          value: props.stockOverviewData?.price.regularMarketPreviousClose.fmt,
          uniqueId: Math.random() * 1000,
        },
      ],
    },
    {
      label: "52 Week High / Low",
      style: styles.dataCardTwo,
      type: "data",
      uniqueId: Math.random() * 1000,
      dataPoints: [
        {
          label: "High",
          value: props.stockOverviewData?.summaryDetail.fiftyTwoWeekHigh.fmt,
          uniqueId: Math.random() * 1000,
        },
        {
          label: "Low",
          value: props.stockOverviewData?.summaryDetail.fiftyTwoWeekLow.fmt,
          uniqueId: Math.random() * 1000,
        },
      ],
    },
    {
      label: "Volume",
      style: styles.dataCardTwo,
      type: "data",
      uniqueId: Math.random() * 1000,
      dataPoints: [
        {
          label: "Today's Volume",
          value: props.stockOverviewData?.price.regularMarketVolume.fmt,
          uniqueId: Math.random() * 1000,
        },
        {
          label: "10 Day Average",
          value: props.stockOverviewData?.price.averageDailyVolume3Month.fmt,
          uniqueId: Math.random() * 1000,
        },
        {
          label: "90 Day Average",
          value: props.stockOverviewData?.price.averageDailyVolume10Day.fmt,
          uniqueId: Math.random() * 1000,
        },
      ],
    },
    {
      label: "Business Summary",
      style: styles.summary,
      type: "text",
      uniqueId: Math.random() * 1000,
      dataPoints: [
        {
          label: null,
          value: props.stockOverviewData?.summaryProfile.longBusinessSummary,
          uniqueId: Math.random() * 1000,
        },
      ],
    },
    {
      label: "Business Profile",
      style: styles.dataCardThree,
      type: "data",
      uniqueId: Math.random() * 1000,
      dataPoints: [
        {
          label: "Currency",
          value: props.stockOverviewData?.price.currency,
          uniqueId: Math.random() * 1000,
        },
        {
          label: "Exchange",
          value: props.stockOverviewData?.quoteType.exchange,
          uniqueId: Math.random() * 1000,
        },
        {
          label: "Industry",
          value: props.stockOverviewData?.summaryProfile.industry,
          uniqueId: Math.random() * 1000,
        },
        {
          label: "Website",
          value: props.stockOverviewData?.summaryProfile.website,
          uniqueId: Math.random() * 1000,
        },
      ],
    },
  ];

  return (
    <div className={styles.stockDataPage}>
      {props.isLoading ? (
        <SpinnerCircularSplit
          className={styles.spinner}
          size={80}
          thickness={150}
          speed={100}
          color="rgba(63, 110, 255, 1)"
          secondaryColor="rgba(0, 0, 0, 0.44)"
        />
      ) : (
        dataCategories.map((category) => {
          return (
            <DataCategory
              type={category.type}
              className={category.style}
              key={category.uniqueId}
              label={category.label}
              dataPoints={category.dataPoints}
            />
          );
        })
      )}
    </div>
  );
};
