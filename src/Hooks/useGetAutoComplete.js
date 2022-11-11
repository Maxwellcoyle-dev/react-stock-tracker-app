import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { searchContext } from "../Helper/searchContext";

const fetchAutoComplete = async (ticker) => {
  const options = {
    method: "GET",
    url: "https://yh-finance.p.rapidapi.com/auto-complete",
    params: { q: ticker },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_SECRET,
      "X-RapidAPI-Host": "yh-finance.p.rapidapi.com",
    },
  };

  return await axios.request(options).then((response) => {
    console.log(response.data);
    return response.data;
  });
};

export const useGetAutoComplete = () => {
  const { input } = useContext(searchContext);

  const {
    data: autoCompleteData,
    status: autoCompleteStatus,
    refetch: refetchAutoCompelte,
  } = useQuery(["autoComplete", input], () => fetchAutoComplete(input), {
    enabled: input !== "",
    staleTime: 10000,
  });

  return { autoCompleteData, autoCompleteStatus, refetchAutoCompelte };
};
