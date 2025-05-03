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
      console.log("object")
      queryClient.invalidateQueries({
        queryKey: ["domains-data"],
      });
    },
    onError: (err) => {
      toast.error(err?.response.data.Message);
    },
  });
  return { data, mutateAddDomain, isPending };
};
export default useAddDoamin;
