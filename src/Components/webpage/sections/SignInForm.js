import React, { useState } from "react";

const SignInForm = () => {
  const [showpassword, setShowpassword] = useState(true);
  return (
    <div className="w-96 px-16 py-16  flex  flex-col items-left justify-center gap-4 bg-black bg-opacity-60">
      <h1 className="text-white text-2xl font-extrabold ">Sign In</h1>
      <form
        action="/profile"
        className="flex flex-col items-center justify-center gap-2 rounded-md"
      >
        <input
          type="text"
          className="px-4 py-2 w-72 placeholder:text-sm rounded-md bg-transparent border-2 border-gray-600 text-white"
          placeholder="Email or Phone Number"
        />
        <input
          type="password"
          className={`px-4 py-2 w-72 placeholder:text-sm rounded-md bg-transparent border-2 border-gray-600 text-white ${
            showpassword ? "hidden" : "block"
          }`}
          placeholder="Password"
        />

        <button className="bg-red-700 w-72 text-white text-sm py-2 px-4 rounded-md relative">
          Send sign-in code
          <div className="absolute -right-24 top-2">{"<-- Click button"}</div>
        </button>
        <p className="text-white text-sm text-center">OR</p>
        <button
          className="text-white text-sm bg-gray-700 w-72 p-2 rounded-md "
          onClick={(e) => {
            e.preventDefault();
            setShowpassword(!showpassword);
          }}
        >
          {showpassword ? "use password" : "use a sign-in code "}
        </button>
        <p className="text-center hover:underline text-sm text-white">
          Forget email or phone number?
        </p>
      </form>

      <div className="flex gap-2">
        <input
          type="checkbox"
          id="rememberme"
          className="placeholder:text-white"
          checked
        />
        <label className="text-white text-sm" htmlFor="rememberme">
          Remember me
        </label>
      </div>
      <p className="text-sm text-gray-400">
        New to Netflix?
        <a className="hover:underline text-white " href="./">
          {" "}
          Sign up now.
        </a>
      </p>
      <p className=" text-xs text-gray-400">
        This page is protected by Google reCAPTCHA to ensure you're not a bot.
        <a className="text-blue-600" href="/">
          Learn more
        </a>
      </p>
      <div className="h-10 "></div>
    </div>
  );
};

export default SignInForm;
