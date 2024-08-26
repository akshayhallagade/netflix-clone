import { useMutation } from "@tanstack/react-query";
import { apiV1Instance } from "../../api";
import { useNavigate } from "react-router-dom";

export default function useSignInUser() {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: function ({ email, password }) {
      const data = apiV1Instance.post("/auth/login", {
        email,
        password,
      });
      return data;
    },
    onSuccess: (data) => {
      //Revalidate the data
      localStorage.setItem("token", data.data.token);
      console.log(data.data.token);
      navigate("/selectprofiles");
    },
  });
  return mutation;
}
