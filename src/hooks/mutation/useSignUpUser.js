import { useMutation } from "@tanstack/react-query";
import { apiV1Instance } from "../../api";
import { useNavigate } from "react-router-dom";

export default function useSignUpUser() {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: function ({ firstName, lastName, email, age, password }) {
      const data = apiV1Instance.post("/auth/signup", {
        firstName,
        lastName,
        age,
        email,
        password,
      });
      return data;
    },
    onSuccess: (data) => {
      // Revalidate the data
      localStorage.setItem("token", data.data.token);
      console.log(data);
      navigate("/selectprofiles");
    },
  });
  return mutation;
}
