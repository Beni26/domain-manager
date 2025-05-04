import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editDomain } from "../../services/dashboardService";
import { toast } from "react-toastify";

const useEditDomain = () => {
  const queryClinet = useQueryClient();
  const { isPending: isEditing, mutate: mutateeditDomain } = useMutation({
    mutationFn: editDomain,
    onSuccess: (data) => {
      toast.success(data);
      queryClinet.invalidateQueries({
        queryKey: ["domains-data"],
      });
    },
    onError: (err) => {
      console.log(err.response.data.msg);
      toast.error("Something went wrong. Please try again.");
    },
  });
  return { isEditing, mutateeditDomain };
};
export default useEditDomain;
