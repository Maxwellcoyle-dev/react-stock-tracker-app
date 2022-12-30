import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect } from "react";
import { searchContext } from "../Helper/searchContext";
import { useGetSumData } from "./useGetSumData";

export const useGetLogo = () => {
  const { sumData } = useGetSumData();

  useEffect(() => {
    console.log(sumData?.summaryProfile.website.slice(12));
  }, []);

  const {
    data: logo,
    status: logoStatus,
    refetch,
    refetchLogo,
  } = useQuery(
    ["logo", sumData],
    () => {
      return `https://api.companyurlfinder.com/logo/${sumData?.summaryProfile.website.slice(
        12
      )}`;
    },
    {
      enabled: !!sumData,
    }
  );

  return { logo, logoStatus, refetchLogo };
};
