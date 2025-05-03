import { useQuery } from "@tanstack/react-query";
import { getDomains } from "../../services/dashboardService";
import { useDispatch } from "react-redux";
import { setDomains } from "./domainSlice";
import { useEffect } from "react";

const useGetDomains = () => {
  const dispatch = useDispatch();

  const { data, isLoading: domainsGetting, isSuccess } = useQuery({
    queryKey: ["domains-data"],
    queryFn: getDomains,
  });

  // استفاده از useEffect برای dispatch کردن داده‌ها فقط در صورت موفقیت
  useEffect(() => {
    if (isSuccess) {
      dispatch(setDomains(data));
    }
  }, [isSuccess, data, dispatch]); // فقط زمانی که isSuccess تغییر کرد، داده‌ها به redux ارسال می‌شود

  return { data, domainsGetting };
};

export default useGetDomains;
