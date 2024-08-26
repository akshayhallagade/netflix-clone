import { useQuery } from "@tanstack/react-query";
import { apiV1Instance } from "../../api";

export const useCurrentUser = () => {
  const query = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const { data } = await apiV1Instance.get("/auth/profile");
      return data.profile;
    },
  });
  return { ...query, user: query.data };
};
