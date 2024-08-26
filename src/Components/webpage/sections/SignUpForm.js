import { useCallback, useState } from "react";
import useSignUpUser from "../../../hooks/mutation/useSignUpUser";

const SignUpForm = () => {
  const { mutateAsync: signUpUserAsync } = useSignUpUser();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      await signUpUserAsync({ firstName, lastName, age, email, password });
    },
    [firstName, lastName, email, age, password, signUpUserAsync]
  );

  return (
    <div className="w-96 px-16 py-16  flex  flex-col items-left justify-center gap-4 bg-black bg-opacity-60">
      <h1 className="text-white text-2xl font-extrabold ">Sign Up</h1>
      <form
        className="flex flex-col items-center justify-center gap-2 rounded-md"
        onSubmit={handleFormSubmit}
      >
        <input
          type="text"
          className="px-4 py-2 w-72 placeholder:text-sm rounded-md bg-transparent border-2 border-gray-600 text-white"
          placeholder="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          className={`px-4 py-2 w-72 placeholder:text-sm rounded-md bg-transparent border-2 border-gray-600 text-white `}
          placeholder="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="email"
          className={`px-4 py-2 w-72 placeholder:text-sm rounded-md bg-transparent border-2 border-gray-600 text-white `}
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          className={`px-4 py-2 w-72 placeholder:text-sm rounded-md bg-transparent border-2 border-gray-600 text-white `}
          placeholder="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="password"
          className={`px-4 py-2 w-72 placeholder:text-sm rounded-md bg-transparent border-2 border-gray-600 text-white `}
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="bg-red-700 w-72 text-white text-sm py-2 px-4 rounded-md relative"
          type="submit"
        >
          Sign up
        </button>
      </form>

      <p className="text-sm text-gray-400">
        Already have an account?
        <a className="hover:underline text-white " href="./signin">
          Sign in now.
        </a>
      </p>
      <p className=" text-xs text-gray-400">
        This page is protected by Google reCAPTCHA to ensure you're not a bot.
        <p className="text-blue-600">Learn more</p>
      </p>
      <div className="h-10 "></div>
    </div>
  );
};

export default SignUpForm;
