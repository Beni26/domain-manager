import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteDomain } from "../../services/dashboardService";
import { toast } from "react-toastify";

const useDeleteDomain = () => {
  const queryClinet = useQueryClient();

  const { isPending: isDeleting, mutate: mutateDeletetDomain } = useMutation({
    mutationFn: deleteDomain,
    onSuccess: () => {
      toast.success("Domain deleted successfully");
      queryClinet.invalidateQueries({
        queryKey: ["domains-data"],
      });
    },
    onError: (err) => {
      console.log(err.response.data.msg);
      toast.error("Something went wrong. Please try again.");
    },
  });
  return { isDeleting, mutateDeletetDomain };
};
export default useDeleteDomain;
