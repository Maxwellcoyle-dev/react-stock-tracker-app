import { useQuery } from "@tanstack/react-query";
import { useGetSumData } from "./useGetSumData";

export const useGetLogo = () => {
  const { sumData } = useGetSumData();

  const {
    data: logo,
    isLoading: logoIsLoading,
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
      refetchOnMount: false,
    }
  );

  return { logo, logoIsLoading, refetchLogo };
};
