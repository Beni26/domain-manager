import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteDomain } from "../../services/dashboardService"
import { toast } from "react-toastify";

const useDeleteDomain = () => {
      const queryClinet = useQueryClient();
    
    const {isPending: isDeleting, mutate: mutateDeletetDomain}= useMutation({
        mutationFn:deleteDomain,
         onSuccess: () => {
              toast.success("Domain delete successfully");
              queryClinet.invalidateQueries({
                queryKey: ["domains-data"],
              });
            },
            onError: (err) => toast.error(err),
        })
        return { isDeleting, mutateDeletetDomain };

}
export default useDeleteDomain