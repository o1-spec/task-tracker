import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
};

function SignInForm() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const { email, password } = formData;
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      console.log("User signed in:", formData);
      setLoading(false);
      navigate("/dashboard");
    }, 1500);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <>
      <button className="text-[14px] border border-[#D6D1F8] sm:px-24 px-12 py-3 rounded-lg text-center flex items-center justify-center gap-2">
        <img src="Google.svg" alt="Google Icon" />
        Log in with Google
      </button>
      <div className="text-center flex items-center gap-4 py-4">
        <div className="w-32 h-[1px] bg-[#D6D1F8]"></div>
        Or
        <div className="w-32 h-[1px] bg-[#D6D1F8]"></div>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div className="pb-4 w-[300px] sm:w-full">
          <input
            className="px-3 py-2.5 rounded-md w-[100%] placeholder:text-sm border border-[#D6D1F8] focus:outline-none"
            type="email"
            name="email"
            placeholder="Your email"
            onChange={handleChange}
            value={email}
          />
        </div>
        <div className="pb-2 flex items-center relative w-[300px] sm:w-full">
          <input
            className="px-3 py-2.5 rounded-md w-[100%] placeholder:text-sm border border-[#D6D1F8] focus:outline-none"
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={password}
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 text-gray-500"
          >
            {showPassword ? "👁️" : "🙈"}
          </button>
        </div>
        <div className="mt-5">
          <input
            className="bg-black text-white rounded-xl py-2 sm:w-[400px] w-[300px] cursor-pointer hover:bg-white hover:text-black border duration-300"
            type="submit"
            value={`${loading ? "Loading..." : "Log In"}`}
          />
        </div>
      </form>
    </>
  );
}

export default SignInForm;
