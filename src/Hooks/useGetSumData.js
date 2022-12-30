import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { searchContext } from "../Helper/searchContext";

const fetchSumData = async (ticker) => {
  const options = {
    method: "GET",
    url: "https://yh-finance.p.rapidapi.com/stock/v2/get-summary",
    params: { symbol: ticker },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_SECRET,
      "X-RapidAPI-Host": "yh-finance.p.rapidapi.com",
    },
  };

  return await axios.request(options).then((response) => {
    return response.data;
  });
};

export const useGetSumData = () => {
  const { searchTicker } = useContext(searchContext);

  const {
    data: sumData,
    status: sumStatus,
    refetch: refetchSum,
  } = useQuery({
    queryKey: ["sumData", searchTicker],
    queryFn: () => fetchSumData(searchTicker),
    enabled: searchTicker !== "",
    refetchOnMount: false,
  });

  return { sumData, sumStatus, refetchSum };
};
