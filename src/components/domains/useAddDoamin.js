import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addDomain } from "../../services/dashboardService";
import { toast } from "react-toastify";

const useAddDoamin = () => {
  const queryClient = useQueryClient();
  const {
    isPending,
    data,
    mutate: mutateAddDomain,
  } = useMutation({
    mutationFn: addDomain,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["domains-data"],
      });
    },
    onError: (err) => {
      console.log(err.response.data.msg)
      toast.error("Something went wrong. Please try again.");
    },
  });
  return { data, mutateAddDomain, isPending };
};
export default useAddDoamin;
