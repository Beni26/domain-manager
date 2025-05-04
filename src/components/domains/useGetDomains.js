import { useQuery } from "@tanstack/react-query";
import { getDomains } from "../../services/dashboardService";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setDomains } from "../../feathers/domainSlice";

const useGetDomains = () => {
  const dispatch = useDispatch();

  const {
    data,
    isLoading: domainsGetting,
    isSuccess,
  } = useQuery({
    queryKey: ["domains-data"],
    queryFn: getDomains,
  });

  useEffect(() => {
    if (isSuccess) {
      dispatch(setDomains(data));
    }
  }, [isSuccess, data, dispatch]);

  return { data, domainsGetting };
};

export default useGetDomains;
