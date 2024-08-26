import { useMutation } from "@tanstack/react-query";
import { apiV1Instance } from "../../api";

export default function useWatchlistAdd() {
  const mutation = useMutation({
    mutationFn: ({ movieId }) => {
      const data = apiV1Instance.post("/watchlist", {
        movieId,
      });
      return data;
    },
    onSuccess: (data) => {
      console.log(data);
    },
  });
  return mutation;
}
